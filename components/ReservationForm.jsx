'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { useTranslations } from 'next-intl'
import { sendReservationRequest } from '@/app/[locale]/(booking)/reservation/actions'
import { Separator } from '@/components/ui'

const initialState = {
  success: false,
  message: '',
}

// Bouton avec état de chargement
function SubmitButton() {
  const { pending } = useFormStatus()
  const t = useTranslations('reservation.form')

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-secondary w-full justify-center mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? t('submitting') : t('submit')}
    </button>
  )
}

export default function ReservationForm() {
  const [state, formAction] = useFormState(sendReservationRequest, initialState)
  const t = useTranslations('reservation.form')

  return (
    <div className="card-luxe lg:sticky lg:top-32">
      <h2 className="font-serif text-2xl mb-6 text-center">
        {t('title')}
      </h2>

      <p className="text-center text-muted-foreground mb-8">
        {t('description')}
      </p>

      {/* Bouton de réservation principal */}
      <div className="text-center mb-8">
        <a
          href="tel:+33145490454"
          className="btn-primary w-full sm:w-auto justify-center"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          {t('callToBook')}
        </a>
      </div>

      <div className="relative mb-8">
        <Separator variant="muted" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--card)] px-4 text-xs text-muted-foreground uppercase tracking-wider">
          {t('or')}
        </span>
      </div>

      {/* Formulaire */}
      <form action={formAction} className="space-y-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm text-muted-foreground mb-2">
              {t('date')} *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-sm
                       focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm text-muted-foreground mb-2">
              {t('time')} *
            </label>
            <select
              id="time"
              name="time"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-sm
                       focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            >
              <option value="">{t('selectTime')}</option>
              <optgroup label={t('lunch')}>
                <option value="12:00">12:00</option>
                <option value="12:15">12:15</option>
                <option value="12:30">12:30</option>
                <option value="12:45">12:45</option>
                <option value="13:00">13:00</option>
                <option value="13:15">13:15</option>
                <option value="13:30">13:30</option>
                <option value="13:45">13:45</option>
                <option value="14:00">14:00</option>
              </optgroup>
              <optgroup label={t('dinner')}>
                <option value="19:00">19:00</option>
                <option value="19:15">19:15</option>
                <option value="19:30">19:30</option>
                <option value="19:45">19:45</option>
                <option value="20:00">20:00</option>
                <option value="20:15">20:15</option>
                <option value="20:30">20:30</option>
                <option value="20:45">20:45</option>
                <option value="21:00">21:00</option>
                <option value="21:15">21:15</option>
                <option value="21:30">21:30</option>
                <option value="21:45">21:45</option>
                <option value="22:00">22:00</option>
              </optgroup>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm text-muted-foreground mb-2">
            {t('guests')} *
          </label>
          <select
            id="guests"
            name="guests"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-sm
                     focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          >
            <option value="">{t('selectGuests')}</option>
            <option value="1">1 {t('person')}</option>
            <option value="2">2 {t('persons')}</option>
            <option value="3">3 {t('persons')}</option>
            <option value="4">4 {t('persons')}</option>
            <option value="5">5 {t('persons')}</option>
            <option value="6">6 {t('persons')}</option>
            <option value="7">7 {t('persons')}</option>
            <option value="8">8 {t('persons')}</option>
          </select>
          <p className="mt-2 text-xs text-muted-foreground">
            {t('largeGroupNotice')}
          </p>
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

      <p className="mt-6 text-xs text-center text-muted-foreground">
        {t('confirmation')}
      </p>
    </div>
  )
}
