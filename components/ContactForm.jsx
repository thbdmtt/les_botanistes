'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { sendContactEmail } from '@/app/[locale]/(corporate)/contact/actions'

const initialState = {
  success: false,
  message: '',
}

// Bouton avec état de chargement
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Envoi en cours...' : 'Envoyer le message'}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContactEmail, initialState)

  return (
    <div className="card-luxe">
      <h2 className="font-serif text-2xl mb-2">Envoyez-nous un message</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Tous les champs marqués d&apos;un * sont obligatoires.
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
              Prénom *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-sm
                       focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm text-muted-foreground mb-2">
              Nom *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-sm
                       focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-sm
                     focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-background border border-border rounded-sm
                     focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            placeholder="+33 6 00 00 00 00"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
            Sujet *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-sm
                     focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          >
            <option value="">Sélectionner un sujet</option>
            <option value="Réservation">Réservation</option>
            <option value="Privatisation">Privatisation</option>
            <option value="Demande d'information">Demande d&apos;information</option>
            <option value="Retour d'expérience">Retour d&apos;expérience</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm
                     focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
            placeholder="Votre message..."
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
