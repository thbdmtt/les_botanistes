import { PageHeader } from '@/components/sections'
import { siteConfig } from '@/lib/config'

export const metadata = {
  title: 'Contact',
  description: 'Contactez le restaurant Les Botanistes. Adresse, horaires d\'ouverture et formulaire de contact. Nous sommes à votre écoute.',
}

// Icônes
function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function ClockIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitle="Contact"
        title="Nous rencontrer"
        description="Une question, une remarque ? Notre équipe est à votre disposition pour vous répondre dans les meilleurs délais."
      />

      {/* Section principale */}
      <section className="pb-16 sm:pb-20">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Colonne gauche : Informations */}
            <div className="space-y-10">
              {/* Adresse */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">Adresse</h3>
                  <address className="not-italic text-muted-foreground leading-relaxed">
                    {siteConfig.restaurant.address.street}<br />
                    {siteConfig.restaurant.address.postalCode} {siteConfig.restaurant.address.city}<br />
                    {siteConfig.restaurant.address.country}
                  </address>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">Téléphone</h3>
                  <a
                    href={`tel:${siteConfig.restaurant.phone}`}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {siteConfig.restaurant.phone}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground/70">
                    Du mardi au samedi, 10h-22h
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center">
                  <MailIcon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">Email</h3>
                  <a
                    href={`mailto:${siteConfig.restaurant.email}`}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {siteConfig.restaurant.email}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground/70">
                    Réponse sous 24-48h
                  </p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-3">Horaires d&apos;ouverture</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between gap-8">
                      <span>Déjeuner</span>
                      <span className="text-foreground">{siteConfig.restaurant.hours.lunch}</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Dîner</span>
                      <span className="text-foreground">{siteConfig.restaurant.hours.dinner}</span>
                    </div>
                    <p className="pt-2 text-sm text-gold/80">
                      Fermé {siteConfig.restaurant.hours.closed}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : Formulaire */}
            <div>
              <div className="card-luxe">
                <h2 className="font-serif text-2xl mb-2">Envoyez-nous un message</h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Tous les champs marqués d&apos;un * sont obligatoires.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-muted-foreground mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
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
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm
                               focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    >
                      <option value="">Sélectionner un sujet</option>
                      <option value="reservation">Réservation</option>
                      <option value="privatisation">Privatisation</option>
                      <option value="information">Demande d&apos;information</option>
                      <option value="feedback">Retour d&apos;expérience</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm
                               focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte */}
      <section className="relative h-96 bg-muted">
        {/* Placeholder pour Google Maps */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-background">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border border-gold/30 rounded-full flex items-center justify-center">
              <MapPinIcon className="w-8 h-8 text-gold/50" />
            </div>
            <p className="text-muted-foreground">
              {siteConfig.restaurant.address.street}
            </p>
            <p className="text-sm text-muted-foreground/70">
              {siteConfig.restaurant.address.postalCode} {siteConfig.restaurant.address.city}
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 btn-secondary text-sm py-2 px-6"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Accès */}
      <section className="section-padding bg-noir text-blanc">
        <div className="container-luxe">
          <div className="text-center mb-12">
            <p className="subtitle text-gold/80 mb-4">Venir au restaurant</p>
            <h2 className="font-serif text-2xl sm:text-3xl">Accès</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* Métro */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-gris-fonce rounded-full flex items-center justify-center">
                <span className="text-gold font-bold text-sm">M</span>
              </div>
              <h3 className="font-medium mb-2">Métro</h3>
              <p className="text-sm text-gris-chaud">
                Ligne 1 - Louvre Rivoli<br />
                Ligne 7 - Palais Royal
              </p>
            </div>

            {/* Bus */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-gris-fonce rounded-full flex items-center justify-center">
                <span className="text-gold font-bold text-sm">Bus</span>
              </div>
              <h3 className="font-medium mb-2">Bus</h3>
              <p className="text-sm text-gris-chaud">
                Lignes 21, 67, 69, 72<br />
                Arrêt Palais Royal
              </p>
            </div>

            {/* Parking */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-gris-fonce rounded-full flex items-center justify-center">
                <span className="text-gold font-bold text-sm">P</span>
              </div>
              <h3 className="font-medium mb-2">Parking</h3>
              <p className="text-sm text-gris-chaud">
                Parking Louvre<br />
                à 200m du restaurant
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
