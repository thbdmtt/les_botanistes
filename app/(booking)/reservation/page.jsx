import { PageHeader } from '@/components/sections'
import { Separator } from '@/components/ui'
import { siteConfig } from '@/lib/config'

export const metadata = {
  title: 'Réservation',
  description: 'Réservez votre table aux Botanistes. Privatisation disponible pour vos événements. Une expérience gastronomique inoubliable vous attend.',
}

export default function ReservationPage() {
  return (
    <>
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
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      Tenue correcte exigée
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Colonne droite : Formulaire / CTA */}
            <div>
              <div className="card-luxe lg:sticky lg:top-32">
                <h2 className="font-serif text-2xl mb-6 text-center">
                  Réserver en ligne
                </h2>

                <p className="text-center text-muted-foreground mb-8">
                  Choisissez votre date et votre créneau horaire pour vivre
                  une expérience gastronomique unique.
                </p>

                {/* Bouton de réservation principal */}
                <div className="text-center mb-8">
                  <a
                    href="tel:+33142000000"
                    className="btn-primary w-full sm:w-auto justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Appeler pour réserver
                  </a>
                </div>

                <div className="relative mb-8">
                  <Separator variant="muted" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--card)] px-4 text-xs text-muted-foreground uppercase tracking-wider">
                    ou
                  </span>
                </div>

                {/* Formulaire simplifié */}
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm text-muted-foreground mb-2">
                        Date souhaitée
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm
                                 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm text-muted-foreground mb-2">
                        Créneau
                      </label>
                      <select
                        id="time"
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm
                                 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      >
                        <option value="">Sélectionner</option>
                        <optgroup label="Déjeuner">
                          <option value="12:00">12:00</option>
                          <option value="12:30">12:30</option>
                          <option value="13:00">13:00</option>
                          <option value="13:30">13:30</option>
                        </optgroup>
                        <optgroup label="Dîner">
                          <option value="19:00">19:00</option>
                          <option value="19:30">19:30</option>
                          <option value="20:00">20:00</option>
                          <option value="20:30">20:30</option>
                          <option value="21:00">21:00</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm text-muted-foreground mb-2">
                      Nombre de convives
                    </label>
                    <select
                      id="guests"
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm
                               focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    >
                      <option value="">Sélectionner</option>
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5 personnes</option>
                      <option value="6">6 personnes</option>
                      <option value="7+">7+ personnes</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-secondary w-full justify-center mt-6">
                    Envoyer la demande
                  </button>
                </form>

                <p className="mt-6 text-xs text-center text-muted-foreground">
                  Nous vous recontacterons sous 24h pour confirmer votre réservation.
                </p>
              </div>
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
                invités une expérience gastronomique dans un cadre exclusif.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Capacité jusqu&apos;à 45 convives
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
