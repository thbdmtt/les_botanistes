'use server'

import { Resend } from 'resend'

export async function sendContactEmail(prevState, formData) {
  // Récupération des champs du formulaire
  const firstName = formData.get('firstName')?.trim() || ''
  const lastName = formData.get('lastName')?.trim() || ''
  const email = formData.get('email')?.trim() || ''
  const phone = formData.get('phone')?.trim() || ''
  const subject = formData.get('subject')?.trim() || ''
  const message = formData.get('message')?.trim() || ''

  // Validation des champs obligatoires
  if (!firstName || !lastName || !email || !message) {
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

  // Sujet de l'email
  const emailSubject = `Nouveau message via le site - ${subject || 'Contact'}`

  // Contenu HTML de l'email
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #C9A227; border-bottom: 2px solid #C9A227; padding-bottom: 10px;">
        Nouveau message de contact
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Prénom</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Nom</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            <a href="mailto:${email}" style="color: #C9A227;">${email}</a>
          </td>
        </tr>
        ${phone ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Téléphone</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            <a href="tel:${phone}" style="color: #C9A227;">${phone}</a>
          </td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Sujet</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject || 'Non spécifié'}</td>
        </tr>
      </table>

      <div style="margin-top: 30px;">
        <h3 style="color: #333; margin-bottom: 10px;">Message :</h3>
        <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #C9A227; white-space: pre-wrap;">
          ${message}
        </div>
      </div>

      <p style="margin-top: 30px; font-size: 12px; color: #888;">
        Ce message a été envoyé depuis le formulaire de contact du site les-botanistes.fr
      </p>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: 'Les Botanistes <restaurant.lesbotanistes@orange.fr>',
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
      message: 'Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.',
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      message: 'Une erreur est survenue. Merci de réessayer plus tard.',
    }
  }
}
