'use client'

import { useTranslations } from 'next-intl'
import { PageHeader } from '@/components/sections'
import { MenuItem, Separator } from '@/components/ui'
import type { SectionId } from '@/lib/menu'

// Feature flag pour afficher/masquer la section Menus Dégustation
const SHOW_TASTING_MENUS = false

/**
 * Menu item with localized name (after getMenuLabel applied server-side)
 */
interface LocalizedMenuItem {
  id: string
  name: string
  price: number
  tag?: string
}

interface MenuSectionProps {
  sectionId: SectionId
  items: LocalizedMenuItem[]
  t: ReturnType<typeof useTranslations>
}

function MenuSection({ sectionId, items, t }: MenuSectionProps) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-luxe max-w-3xl">
        {/* En-tête de section */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
            {t(`sections.${sectionId}.subtitle`)}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-gold">
            {t(`sections.${sectionId}.title`)}
          </h2>
        </div>

        {/* Items du menu */}
        <div>
          {items.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={undefined}
              price={item.price}
              tag={item.tag}
              className={undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TastingMenu {
  id: 'discovery' | 'botaniste'
  services: number
  price: number
  winePrice: number
}

interface MenuContentProps {
  sections: {
    starters: LocalizedMenuItem[]
    mains: LocalizedMenuItem[]
    desserts: LocalizedMenuItem[]
  }
  tastingMenus: TastingMenu[]
}

export default function MenuContent({ sections, tastingMenus }: MenuContentProps) {
  const t = useTranslations('menu')

  // Define section order
  const sectionOrder: SectionId[] = ['starters', 'mains', 'desserts']

  return (
    <>
      <PageHeader
        subtitle={t('header.subtitle')}
        title={t('header.title')}
        description={t('header.description')}
        className={undefined}
      />

      {/* Note du chef */}
      <section className="pb-8">
        <div className="container-luxe max-w-2xl text-center">
          <blockquote className="italic text-muted-foreground">
            &ldquo;{t('quote.text')}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-gold">— {t('quote.author')}</p>
        </div>
      </section>

      <Separator variant="gold-wide" className="opacity-30" />

      {/* Menu sections */}
      {sectionOrder.map((sectionId, index) => (
        <div key={sectionId}>
          <MenuSection
            sectionId={sectionId}
            items={sections[sectionId]}
            t={t}
          />
          {index < sectionOrder.length - 1 && (
            <Separator variant="gold-wide" className="opacity-30" />
          )}
        </div>
      ))}

      {/* Menus dégustation - Masqué via SHOW_TASTING_MENUS */}
      {SHOW_TASTING_MENUS && (
        <section className="section-padding bg-muted">
          <div className="container-luxe max-w-3xl text-center">
            <p className="subtitle mb-4">{t('tastingMenus.subtitle')}</p>
            <h2 className="font-serif text-2xl sm:text-3xl mb-8">{t('tastingMenus.title')}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tastingMenus.map((tm) => (
                <div
                  key={tm.id}
                  className={`card-luxe ${tm.id === 'botaniste' ? 'border-gold/50' : ''}`}
                >
                  <h3 className="font-serif text-xl text-gold mb-2">
                    {t(`tastingMenus.${tm.id}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(`tastingMenus.${tm.id}.description`)}
                  </p>
                  <p className="text-2xl font-serif">{tm.price} €</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t('tastingMenus.wineNote')} +{tm.winePrice} €
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              {t('tastingMenus.note')}
            </p>
          </div>
        </section>
      )}

      {/* CTA Réservation */}
      <section className="section-padding bg-noir text-blanc text-center">
        <div className="container-narrow">
          <p className="subtitle text-gold/80 mb-4">{t('cta.subtitle')}</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-gris-chaud mb-8 max-w-md mx-auto">
            {t('cta.description')}
          </p>
          <a href="/reservation" className="btn-primary">
            {t('cta.button')}
          </a>
        </div>
      </section>
    </>
  )
}
