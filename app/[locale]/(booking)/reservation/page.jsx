'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { PageHeader } from '@/components/sections'
import { siteConfig } from '@/lib/config'
import ReservationForm from '@/components/ReservationForm'

export default function ReservationPage() {
  const t = useTranslations('reservation')

  return (
    <>
      <PageHeader
        subtitle={t('header.subtitle')}
        title={t('header.title')}
        description={t('header.description')}
      />

      {/* Section principale de réservation */}
      <section className="pb-16 sm:pb-20">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Colonne gauche : Informations */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl mb-6">
                {t('info.title')} <span className="text-gold">{t('info.titleHighlight')}</span>
              </h2>

              <div className="space-y-8">
                {/* Horaires */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
                    {t('info.hours.title')}
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>{t('info.hours.lunch')}</span>
                      <span className="text-foreground">{siteConfig.restaurant.hours.lunch}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>{t('info.hours.dinner')}</span>
                      <span className="text-foreground">{siteConfig.restaurant.hours.dinner}</span>
                    </p>
                    <p className="text-sm text-gold/80 mt-2">
                      {t('info.hours.closed')} {siteConfig.restaurant.hours.closed}
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
                    {t('info.contact')}
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
                    {t('info.address')}
                  </h3>
                  <address className="not-italic text-muted-foreground">
                    {siteConfig.restaurant.address.street}<br />
                    {siteConfig.restaurant.address.postalCode} {siteConfig.restaurant.address.city}
                  </address>
                </div>

                {/* Informations importantes */}
                <div className="p-6 bg-muted rounded-sm border-l-2 border-gold">
                  <h3 className="font-serif text-lg mb-3">{t('info.notes.title')}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      {t('info.notes.advance')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      {t('info.notes.allergies')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      {t('info.notes.lateness')}
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
              <p className="subtitle text-gold/80 mb-4">{t('privatisation.subtitle')}</p>
              <h2 className="font-serif text-3xl sm:text-4xl mb-6">
                {t('privatisation.title')}
              </h2>
              <p className="text-gris-chaud leading-relaxed mb-6">
                {t('privatisation.description')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {t('privatisation.features.capacity')}
                </li>
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {t('privatisation.features.menu')}
                </li>
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {t('privatisation.features.service')}
                </li>
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {t('privatisation.features.decoration')}
                </li>
              </ul>
              <a
                href={`mailto:${siteConfig.restaurant.email}?subject=Demande de privatisation`}
                className="btn-primary"
              >
                {t('privatisation.cta')}
              </a>
            </div>

            {/* Image d'ambiance */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gris-fonce to-noir rounded-sm overflow-hidden">
                {/* Image */}
                <Image
                  src="/images/privatisation/espace-privatisable.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay sombre */}
                <div className="absolute inset-0 bg-black/75" />
                {/* Contenu */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 border border-gold/30 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m18-6-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 10.5" />
                      </svg>
                    </div>
                    <p className="text-sm text-gris-chaud/80 uppercase tracking-widest">
                      {t('privatisation.imageLabel')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl sm:text-3xl text-center mb-12">
            {t('faq.title')}
          </h2>

          <div className="space-y-6">
            <div className="card-luxe">
              <h3 className="font-serif text-lg mb-2">{t('faq.cancellation.question')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('faq.cancellation.answer')}
              </p>
            </div>

            <div className="card-luxe">
              <h3 className="font-serif text-lg mb-2">{t('faq.vegetarian.question')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('faq.vegetarian.answer')}
              </p>
            </div>

            <div className="card-luxe">
              <h3 className="font-serif text-lg mb-2">{t('faq.accessibility.question')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('faq.accessibility.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
