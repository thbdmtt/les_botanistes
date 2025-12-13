'use client'

import { useTranslations } from 'next-intl'
import { PageHeader } from '@/components/sections'
import { siteConfig } from '@/lib/config'
import ContactForm from '@/components/ContactForm'

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
  const t = useTranslations('contact')

  return (
    <>
      <PageHeader
        subtitle={t('header.subtitle')}
        title={t('header.title')}
        description={t('header.description')}
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
                  <h3 className="font-serif text-lg mb-2">{t('info.address')}</h3>
                  <address className="not-italic text-muted-foreground leading-relaxed">
                    {siteConfig.restaurant.address.street}<br />
                    {siteConfig.restaurant.address.postalCode} {siteConfig.restaurant.address.city}<br />
                    {siteConfig.restaurant.address.country}
                  </address>
                  <a
                    href="https://www.google.com/maps/place/Les+Botanistes/@48.8520828,2.3231111,16z/data=!3m1!4b1!4m6!3m5!1s0x47e671d4722c7127:0x8141796c1a3a77db!8m2!3d48.8520793!4d2.325686!16s%2Fg%2F1tfb1992?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    {t('info.viewOnMap')} →
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">{t('info.phone')}</h3>
                  <a
                    href={`tel:${siteConfig.restaurant.phone}`}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {siteConfig.restaurant.phone}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground/70">
                    {t('info.phoneHours')}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center">
                  <MailIcon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">{t('info.email')}</h3>
                  <a
                    href={`mailto:${siteConfig.restaurant.email}`}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {siteConfig.restaurant.email}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground/70">
                    {t('info.responseTime')}
                  </p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-3">{t('info.hours')}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between gap-8">
                      <span>{t('hours.lunch')}</span>
                      <span className="text-foreground">{siteConfig.restaurant.hours.lunch}</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>{t('hours.dinner')}</span>
                      <span className="text-foreground">{siteConfig.restaurant.hours.dinner}</span>
                    </div>
                    <p className="pt-2 text-sm text-gold/80">
                      {t('hours.closed')} {siteConfig.restaurant.hours.closed}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : Formulaire */}
            <div>
              <ContactForm />
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
              href="https://www.google.com/maps/place/Les+Botanistes/@48.8520828,2.3231111,16z/data=!3m1!4b1!4m6!3m5!1s0x47e671d4722c7127:0x8141796c1a3a77db!8m2!3d48.8520793!4d2.325686!16s%2Fg%2F1tfb1992?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 btn-secondary text-sm py-2 px-6"
            >
              {t('info.openInMaps')}
            </a>
          </div>
        </div>
      </section>

      {/* Accès */}
      <section className="section-padding bg-noir text-blanc">
        <div className="container-luxe">
          <div className="text-center mb-12">
            <p className="subtitle text-gold/80 mb-4">{t('access.subtitle')}</p>
            <h2 className="font-serif text-2xl sm:text-3xl">{t('access.title')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* Métro */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-gris-fonce rounded-full flex items-center justify-center">
                <span className="text-gold font-bold text-sm">M</span>
              </div>
              <h3 className="font-medium mb-2">{t('access.metro.title')}</h3>
              <p className="text-sm text-gris-chaud whitespace-pre-line">
                {t('access.metro.details')}
              </p>
            </div>

            {/* Bus */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-gris-fonce rounded-full flex items-center justify-center">
                <span className="text-gold font-bold text-sm">Bus</span>
              </div>
              <h3 className="font-medium mb-2">{t('access.bus.title')}</h3>
              <p className="text-sm text-gris-chaud whitespace-pre-line">
                {t('access.bus.details')}
              </p>
            </div>

            {/* Parking */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-gris-fonce rounded-full flex items-center justify-center">
                <span className="text-gold font-bold text-sm">P</span>
              </div>
              <h3 className="font-medium mb-2">{t('access.parking.title')}</h3>
              <p className="text-sm text-gris-chaud whitespace-pre-line">
                {t('access.parking.details')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
