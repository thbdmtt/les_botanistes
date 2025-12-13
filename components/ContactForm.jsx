'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { useTranslations } from 'next-intl'
import { sendContactEmail } from '@/app/[locale]/(corporate)/contact/actions'

const initialState = {
  success: false,
  message: '',
}

// Bouton avec état de chargement
function SubmitButton() {
  const { pending } = useFormStatus()
  const t = useTranslations('contact.form')

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? t('submitting') : t('submit')}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContactEmail, initialState)
  const t = useTranslations('contact.form')

  return (
    <div className="card-luxe">
      <h2 className="font-serif text-2xl mb-2">{t('title')}</h2>
      <p className="text-sm text-muted-foreground mb-8">
        {t('required')}
      </p>

      <form action={formAction} className="space-y-5">
        {/* Honeypot anti-bot - champ invisible pour les humains */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
          <label htmlFor="website">Ne pas remplir ce champ</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="block text-sm text-muted-foreground mb-2">
              {t('firstName')} *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-sm
                       focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              placeholder={t('placeholders.firstName')}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm text-muted-foreground mb-2">
              {t('lastName')} *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-sm
                       focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              placeholder={t('placeholders.lastName')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
            {t('email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-sm
                     focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            placeholder={t('placeholders.email')}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
            {t('phone')} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            aria-required="true"
            className="w-full px-4 py-3 bg-background border border-border rounded-sm
                     focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            placeholder={t('placeholders.phone')}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
            {t('subject')} *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-sm
                     focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          >
            <option value="">{t('subjects.select')}</option>
            <option value="Réservation">{t('subjects.reservation')}</option>
            <option value="Privatisation">{t('subjects.privatisation')}</option>
            <option value="Demande d'information">{t('subjects.information')}</option>
            <option value="Retour d'expérience">{t('subjects.feedback')}</option>
            <option value="Autre">{t('subjects.other')}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
            {t('message')} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm
                     focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
            placeholder={t('placeholders.message')}
          />
        </div>

        <SubmitButton />

        {/* Message de succès ou d'erreur */}
        {state.message && (
          <p
            className={`text-sm text-center p-3 rounded-sm ${
              state.success
                ? 'bg-green-500/10 text-green-600 border border-green-500/20'
                : 'bg-red-500/10 text-red-600 border border-red-500/20'
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  )
}
