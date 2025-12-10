'use server'

import { Resend } from 'resend'

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

  // Contenu HTML de l'email
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #C9A227; border-bottom: 2px solid #C9A227; padding-bottom: 10px;">
        Nouvelle demande de réservation
      </h2>

      <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 4px solid #C9A227;">
        <h3 style="margin: 0 0 15px 0; color: #333;">Détails de la réservation</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px;">Date</td>
            <td style="padding: 8px 0;">${formattedDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Heure</td>
            <td style="padding: 8px 0;">${time}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Convives</td>
            <td style="padding: 8px 0;">${guests} personne${guests !== '1' ? 's' : ''}</td>
          </tr>
        </table>
      </div>

      <div style="margin: 20px 0;">
        <h3 style="color: #333; margin-bottom: 15px;">Coordonnées du client</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Nom</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;">
              <a href="mailto:${email}" style="color: #C9A227;">${email}</a>
            </td>
          </tr>
        </table>
      </div>

      <div style="margin-top: 30px; padding: 15px; background-color: #fff3cd; border-radius: 4px;">
        <p style="margin: 0; font-size: 14px; color: #856404;">
          <strong>Action requise :</strong> Merci de confirmer cette réservation auprès du client.
        </p>
      </div>

      <p style="margin-top: 30px; font-size: 12px; color: #888;">
        Cette demande a été envoyée depuis le formulaire de réservation du site les-botanistes.fr
      </p>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: `${firstName} ${lastName} – Réservation <restaurant.lesbotanistes@orange.fr>`,
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
