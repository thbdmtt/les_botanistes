'use client'

import { useTranslations } from 'next-intl'
import { PageHeader } from '@/components/sections'

// Données légales statiques de la société
const LEGAL_DATA = {
  company: {
    name: 'C-11 BIS',
    type: 'SARL',
    capital: '8 000 €',
    rcs: 'Paris 519 783 369',
    address: '11 bis rue Chomel',
    postalCode: '75007',
    city: 'Paris',
    country: 'France',
    email: 'restaurant.lesbotanistes@orange.fr',
  },
  hosting: {
    name: 'Vercel Inc.',
    address: '340 S Lemon Ave #4133',
    city: 'Walnut, CA 91789',
    country: 'États-Unis',
    website: 'vercel.com',
  },
}

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-xl sm:text-2xl text-gold mb-4">{title}</h2>
      <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-4">
        {children}
      </div>
    </section>
  )
}

export default function MentionsLegalesPage() {
  const t = useTranslations('legal')

  return (
    <>
      <PageHeader
        subtitle={t('header.subtitle')}
        title={t('header.title')}
      />

      <article className="pb-16 sm:pb-24">
        <div className="container-narrow">

          <Section title={t('sections.editor.title')}>
            <p>
              {t('sections.editor.intro')} <strong>les-botanistes.fr</strong>
            </p>
            <p>
              <strong>{LEGAL_DATA.company.name}</strong><br />
              {LEGAL_DATA.company.type} – Capital {LEGAL_DATA.company.capital}<br />
              RCS {LEGAL_DATA.company.rcs}
            </p>
            <p>
              <strong>{t('sections.editor.headquarters')}</strong><br />
              {LEGAL_DATA.company.address}<br />
              {LEGAL_DATA.company.postalCode} {LEGAL_DATA.company.city}
            </p>
          </Section>

          <Section title={t('sections.hosting.title')}>
            <p>
              {t('sections.hosting.intro')}
            </p>
            <p>
              <strong>{LEGAL_DATA.hosting.name}</strong><br />
              {LEGAL_DATA.hosting.address}<br />
              {LEGAL_DATA.hosting.city}, {LEGAL_DATA.hosting.country}<br />
              {t('sections.hosting.website')} {LEGAL_DATA.hosting.website}
            </p>
          </Section>

          <Section title={t('sections.contact.title')}>
            <p>
              {t('sections.contact.intro')}
            </p>
            <p>
              Email : <a href={`mailto:${LEGAL_DATA.company.email}`} className="text-gold hover:underline">{LEGAL_DATA.company.email}</a>
            </p>
          </Section>

          <Section title={t('sections.intellectual.title')}>
            <p>
              {t('sections.intellectual.content1')}
            </p>
            <p>
              {t('sections.intellectual.content2')}
            </p>
          </Section>

          <Section title={t('sections.liability.title')}>
            <p>
              {t('sections.liability.content1')}
            </p>
            <p>
              {t('sections.liability.content2')}
            </p>
          </Section>

          <Section title={t('sections.links.title')}>
            <p>
              {t('sections.links.content')}
            </p>
          </Section>

          <Section title={t('sections.law.title')}>
            <p>
              {t('sections.law.content')}
            </p>
          </Section>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {t('lastUpdate')} Décembre 2025
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
