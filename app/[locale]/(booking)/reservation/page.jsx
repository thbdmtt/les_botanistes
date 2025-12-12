import { PageHeader } from '@/components/sections'
import { siteConfig } from '@/lib/config'
import { ReservationJsonLd } from '@/lib/jsonld'
import ReservationForm from '@/components/ReservationForm'

export const metadata = {
  title: 'Réservation',
  description: 'Réservez votre table au restaurant bistronomique Les Botanistes, Paris 7, près du Bon Marché. Privatisation disponible.',
  openGraph: {
    title: 'Réserver une table | Les Botanistes',
    description: 'Réservez votre table au restaurant bistronomique Les Botanistes, Paris 7. Privatisation pour événements disponible.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://les-botanistes.fr/reservation',
  },
}

export default function ReservationPage() {
  return (
    <>
      <ReservationJsonLd />
      <PageHeader
        subtitle="Réservation"
        title="Réservez votre table"
        description="Pour une expérience inoubliable, réservez votre table et laissez-nous prendre soin de chaque détail."
      />

      {/* Section principale de réservation */}
      <section className="pb-16 sm:pb-20">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Colonne gauche : Informations */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl mb-6">
                Informations <span className="text-gold">pratiques</span>
              </h2>

              <div className="space-y-8">
                {/* Horaires */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
                    Horaires d&apos;ouverture
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Déjeuner</span>
                      <span className="text-foreground">{siteConfig.restaurant.hours.lunch}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Dîner</span>
                      <span className="text-foreground">{siteConfig.restaurant.hours.dinner}</span>
                    </p>
                    <p className="text-sm text-gold/80 mt-2">
                      Fermé {siteConfig.restaurant.hours.closed}
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
                    Nous contacter
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <a
                        href={`tel:${siteConfig.restaurant.phone}`}
                        className="text-foreground hover:text-gold transition-colors duration-300"
                      >
                        {siteConfig.restaurant.phone}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${siteConfig.restaurant.email}`}
                        className="text-muted-foreground hover:text-gold transition-colors duration-300"
                      >
                        {siteConfig.restaurant.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Adresse */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
                    Adresse
                  </h3>
                  <address className="not-italic text-muted-foreground">
                    {siteConfig.restaurant.address.street}<br />
                    {siteConfig.restaurant.address.postalCode} {siteConfig.restaurant.address.city}
                  </address>
                </div>

                {/* Informations importantes */}
                <div className="p-6 bg-muted rounded-sm border-l-2 border-gold">
                  <h3 className="font-serif text-lg mb-3">À noter</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      Réservation recommandée 48h à l&apos;avance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      Merci de nous prévenir de toute allergie ou régime particulier
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      Retard au-delà de 15 min : la réservation peut être annulée
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Colonne droite : Formulaire / CTA */}
            <div>
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section Privatisation */}
      <section className="section-padding bg-noir text-blanc">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Texte */}
            <div>
              <p className="subtitle text-gold/80 mb-4">Événements privés</p>
              <h2 className="font-serif text-3xl sm:text-4xl mb-6">
                Privatisation du restaurant
              </h2>
              <p className="text-gris-chaud leading-relaxed mb-6">
                Pour vos événements d&apos;exception — anniversaires, mariages,
                séminaires d&apos;entreprise ou célébrations privées — offrez à vos
                invités une expérience bistronomique dans un cadre exclusif.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Capacité jusqu&apos;à 34 convives
                </li>
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Menu personnalisé avec le Chef
                </li>
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Service dédié et attentionné
                </li>
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Décoration florale sur demande
                </li>
              </ul>
              <a
                href={`mailto:${siteConfig.restaurant.email}?subject=Demande de privatisation`}
                className="btn-primary"
              >
                Demander un devis
              </a>
            </div>

            {/* Image placeholder / décoration */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gris-fonce to-noir rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 border border-gold/30 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m18-6-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 10.5" />
                      </svg>
                    </div>
                    <p className="text-sm text-gris-chaud/60 uppercase tracking-widest">
                      Espace privatisable
                    </p>
                  </div>
                </div>
              </div>
              {/* Décoration dorée */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl sm:text-3xl text-center mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="card-luxe">
              <h3 className="font-serif text-lg mb-2">Comment annuler ma réservation ?</h3>
              <p className="text-sm text-muted-foreground">
                Veuillez nous contacter par téléphone au moins 24h à l&apos;avance.
                Toute annulation tardive pourra faire l&apos;objet d&apos;une facturation.
              </p>
            </div>

            <div className="card-luxe">
              <h3 className="font-serif text-lg mb-2">Proposez-vous des menus végétariens ?</h3>
              <p className="text-sm text-muted-foreground">
                Oui, notre Chef peut adapter le menu dégustation en version végétarienne.
                Merci de nous prévenir lors de la réservation.
              </p>
            </div>

            <div className="card-luxe">
              <h3 className="font-serif text-lg mb-2">Le restaurant est-il accessible PMR ?</h3>
              <p className="text-sm text-muted-foreground">
                Notre établissement est accessible aux personnes à mobilité réduite.
                N&apos;hésitez pas à nous contacter pour toute question.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
