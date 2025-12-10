'use server'

import { Resend } from 'resend'
import { headers } from 'next/headers'

// Rate limiting - stockage en mémoire des tentatives par IP
const rateLimitMap = new Map()
const RATE_LIMIT_WINDOW = 60 * 1000 // 60 secondes
const RATE_LIMIT_MAX_REQUESTS = 3 // 3 requêtes max par fenêtre

function checkRateLimit(ip) {
  const now = Date.now()
  const windowStart = now - RATE_LIMIT_WINDOW

  // Récupérer les tentatives pour cette IP
  const attempts = rateLimitMap.get(ip) || []

  // Filtrer les tentatives dans la fenêtre de temps
  const recentAttempts = attempts.filter(timestamp => timestamp > windowStart)

  // Mettre à jour le Map avec les tentatives récentes
  rateLimitMap.set(ip, recentAttempts)

  // Vérifier si la limite est atteinte
  if (recentAttempts.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false // Limite atteinte
  }

  // Enregistrer la nouvelle tentative
  recentAttempts.push(now)
  rateLimitMap.set(ip, recentAttempts)

  return true // OK, peut continuer
}

export async function sendReservationRequest(prevState, formData) {
  // Vérification honeypot anti-bot
  const honeypot = formData.get('website') || ''
  if (honeypot) {
    // Bot détecté - retourner succès silencieux sans envoyer d'email
    return {
      success: true,
      message: 'Votre demande de réservation a bien été envoyée. Nous vous recontacterons sous 24h pour confirmer.',
    }
  }

  // Vérification rate limiting
  const headersList = headers()
  const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (!checkRateLimit(ip)) {
    // Limite atteinte - retourner succès silencieux sans envoyer d'email
    return {
      success: true,
      message: 'Votre demande de réservation a bien été envoyée. Nous vous recontacterons sous 24h pour confirmer.',
    }
  }

  // Récupération des champs du formulaire
  const firstName = formData.get('firstName')?.trim() || ''
  const lastName = formData.get('lastName')?.trim() || ''
  const email = formData.get('email')?.trim() || ''
  const date = formData.get('date')?.trim() || ''
  const time = formData.get('time')?.trim() || ''
  const guests = formData.get('guests')?.trim() || ''

  // Validation des champs obligatoires
  if (!firstName || !lastName || !email || !date || !time || !guests) {
    return {
      success: false,
      message: 'Merci de remplir tous les champs obligatoires.',
    }
  }

  // Validation basique de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Merci de saisir une adresse email valide.',
    }
  }

  // Vérification de la clé API Resend
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not defined in environment variables')
    return {
      success: false,
      message: 'Une erreur de configuration est survenue. Merci de réessayer plus tard.',
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  // Formater la date pour l'affichage
  const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Sujet de l'email
  const emailSubject = `Demande de réservation – ${formattedDate} à ${time}`

  // Contenu HTML premium de l'email
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Helvetica Neue', Arial, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">

              <!-- Header -->
              <tr>
                <td style="background-color: #0B0B0C; padding: 30px 40px; text-align: center;">
                  <h1 style="margin: 0; color: #C9A227; font-family: Georgia, serif; font-size: 28px; font-weight: normal;">
                    Les Botanistes
                  </h1>
                  <p style="margin: 8px 0 0 0; color: #888888; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">
                    Restaurant Bistronomique
                  </p>
                </td>
              </tr>

              <!-- Title -->
              <tr>
                <td style="padding: 40px 40px 20px 40px; border-bottom: 1px solid #eee;">
                  <h2 style="margin: 0; color: #0B0B0C; font-family: Georgia, serif; font-size: 24px; font-weight: normal;">
                    Nouvelle demande de réservation
                  </h2>
                  <p style="margin: 10px 0 0 0; color: #666666; font-size: 14px;">
                    Une demande de réservation a été soumise via le site.
                  </p>
                </td>
              </tr>

              <!-- Reservation Details -->
              <tr>
                <td style="padding: 30px 40px;">
                  <div style="background-color: #0B0B0C; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="33%" style="text-align: center; padding: 10px;">
                          <p style="margin: 0 0 5px 0; color: #C9A227; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Date</p>
                          <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 500;">${formattedDate}</p>
                        </td>
                        <td width="33%" style="text-align: center; padding: 10px; border-left: 1px solid #333; border-right: 1px solid #333;">
                          <p style="margin: 0 0 5px 0; color: #C9A227; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Heure</p>
                          <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 500;">${time}</p>
                        </td>
                        <td width="33%" style="text-align: center; padding: 10px;">
                          <p style="margin: 0 0 5px 0; color: #C9A227; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Convives</p>
                          <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 500;">${guests} personne${guests !== '1' ? 's' : ''}</p>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- Client Info -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                        <span style="color: #999999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Client</span>
                        <p style="margin: 5px 0 0 0; color: #0B0B0C; font-size: 16px; font-weight: 500;">${firstName} ${lastName}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                        <span style="color: #999999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span>
                        <p style="margin: 5px 0 0 0;"><a href="mailto:${email}" style="color: #C9A227; font-size: 16px; text-decoration: none;">${email}</a></p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Action Required -->
              <tr>
                <td style="padding: 0 40px 30px 40px;">
                  <div style="background-color: #fff8e6; border-left: 3px solid #C9A227; padding: 15px 20px; border-radius: 0 4px 4px 0;">
                    <p style="margin: 0; color: #8a6d00; font-size: 14px;">
                      <strong>Action requise :</strong> Merci de confirmer cette réservation auprès du client.
                    </p>
                  </div>
                </td>
              </tr>

              <!-- Action Button -->
              <tr>
                <td style="padding: 0 40px 40px 40px;">
                  <a href="mailto:${email}?subject=Confirmation de votre réservation - Les Botanistes" style="display: inline-block; background-color: #C9A227; color: #ffffff; padding: 14px 28px; font-size: 14px; font-weight: 500; text-decoration: none; border-radius: 4px;">
                    Répondre à ${firstName}
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #fafafa; padding: 25px 40px; text-align: center; border-top: 1px solid #eee;">
                  <p style="margin: 0; color: #999999; font-size: 12px;">
                    Cette demande a été envoyée depuis le formulaire de réservation du site
                  </p>
                  <p style="margin: 5px 0 0 0;">
                    <a href="https://les-botanistes.fr" style="color: #C9A227; font-size: 12px; text-decoration: none;">les-botanistes.fr</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `

  try {
    const { error } = await resend.emails.send({
      from: `${firstName} ${lastName} (Réservation) <contact@les-botanistes.fr>`,
      to: 'restaurant.lesbotanistes@orange.fr',
      replyTo: email,
      subject: emailSubject,
      html: htmlContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi. Merci de réessayer plus tard.',
      }
    }

    return {
      success: true,
      message: 'Votre demande de réservation a bien été envoyée. Nous vous recontacterons sous 24h pour confirmer.',
    }
  } catch (error) {
    console.error('Error sending reservation email:', error)
    return {
      success: false,
      message: 'Une erreur est survenue. Merci de réessayer plus tard.',
    }
  }
}
