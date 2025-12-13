import { PageHeader } from '@/components/sections'
import { MenuItem, Separator } from '@/components/ui'
import { MenuJsonLd } from '@/lib/jsonld'
import { menu, getLocalizedText } from '@/data/menu'

export const metadata = {
  title: 'La Carte',
  description: 'Découvrez notre carte bistronomique : cuisine française de saison, plats élégants et produits du marché. Restaurant Paris 7, près du Bon Marché.',
  openGraph: {
    title: 'La Carte | Les Botanistes',
    description: 'Carte bistronomique de saison : entrées, plats et desserts élaborés avec les meilleurs produits du marché.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://les-botanistes.fr/carte',
  },
}

// Section titles and subtitles (will be i18n in step 4)
const sectionLabels = {
  starters: { title: 'Les Entrées', subtitle: 'Pour commencer' },
  mains: { title: 'Les Plats', subtitle: 'À savourer' },
  desserts: { title: 'Les Desserts', subtitle: 'Douceurs sucrées' },
}

// Tasting menu labels (will be i18n in step 4)
const tastingLabels = {
  discovery: {
    title: 'Menu Découverte',
    description: '5 services pour une première exploration',
  },
  botaniste: {
    title: 'Menu Botaniste',
    description: '7 services pour une expérience complète',
  },
}

function MenuSection({ title, subtitle, items, locale }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-luxe max-w-3xl">
        {/* En-tête de section */}
        <div className="text-center mb-10">
          {subtitle && (
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              {subtitle}
            </p>
          )}
          <h2 className="font-serif text-2xl sm:text-3xl text-gold">{title}</h2>
        </div>

        {/* Items du menu */}
        <div>
          {items.map((item) => (
            <MenuItem
              key={item.id}
              name={getLocalizedText(item.title, locale)}
              description={item.description ? getLocalizedText(item.description, locale) : undefined}
              price={item.price}
              tag={item.tag}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CartePage({ params }) {
  const locale = params?.locale || 'fr'

  // Build menuData for JSON-LD (using FR for structured data)
  const menuDataForJsonLd = {
    entrees: menu.sections.find(s => s.id === 'starters')?.items.map(item => ({
      name: item.title.fr,
      price: item.price,
      tag: item.tag,
    })) || [],
    plats: menu.sections.find(s => s.id === 'mains')?.items.map(item => ({
      name: item.title.fr,
      price: item.price,
      tag: item.tag,
    })) || [],
    desserts: menu.sections.find(s => s.id === 'desserts')?.items.map(item => ({
      name: item.title.fr,
      price: item.price,
      tag: item.tag,
    })) || [],
  }

  // Sort sections by order
  const sortedSections = [...menu.sections].sort((a, b) => a.order - b.order)

  return (
    <>
      <MenuJsonLd menuData={menuDataForJsonLd} />
      <PageHeader
        subtitle="Notre Carte"
        title="Cuisine de saison"
        description="Une ardoise qui évolue au fil des saisons, mettant à l'honneur les produits du marché."
      />

      {/* Note du chef */}
      <section className="pb-8">
        <div className="container-luxe max-w-2xl text-center">
          <blockquote className="italic text-muted-foreground">
            &ldquo;La cuisine, c&apos;est quand les choses ont le goût de ce qu&apos;elles sont.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-gold">— Curnonsky</p>
        </div>
      </section>

      <Separator variant="gold-wide" className="opacity-30" />

      {/* Menu sections */}
      {sortedSections.map((section, index) => (
        <div key={section.id}>
          <MenuSection
            title={sectionLabels[section.id].title}
            subtitle={sectionLabels[section.id].subtitle}
            items={section.items}
            locale={locale}
          />
          {index < sortedSections.length - 1 && (
            <Separator variant="gold-wide" className="opacity-30" />
          )}
        </div>
      ))}

      {/* Menus dégustation */}
      <section className="section-padding bg-muted">
        <div className="container-luxe max-w-3xl text-center">
          <p className="subtitle mb-4">Nos Menus</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-8">Menus Dégustation</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menu.tastingMenus.map((tm) => (
              <div
                key={tm.id}
                className={`card-luxe ${tm.id === 'botaniste' ? 'border-gold/50' : ''}`}
              >
                <h3 className="font-serif text-xl text-gold mb-2">
                  {tastingLabels[tm.id].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tastingLabels[tm.id].description}
                </p>
                <p className="text-2xl font-serif">{tm.price} €</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Accord mets & vins +{tm.winePrice} €
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Prix nets, service compris. Menu unique pour l&apos;ensemble de la table.
          </p>
        </div>
      </section>

      {/* CTA Réservation */}
      <section className="section-padding bg-noir text-blanc text-center">
        <div className="container-narrow">
          <p className="subtitle text-gold/80 mb-4">Réservation</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-6">
            Réservez votre table
          </h2>
          <p className="text-gris-chaud mb-8 max-w-md mx-auto">
            Pour une expérience optimale, nous vous recommandons de réserver
            au moins 48 heures à l&apos;avance.
          </p>
          <a href="/reservation" className="btn-primary">
            Réserver
          </a>
        </div>
      </section>
    </>
  )
}
