import { PageHeader } from '@/components/sections'
import { MenuItem, Separator } from '@/components/ui'
import { MenuJsonLd } from '@/lib/jsonld'

export const metadata = {
  title: 'La Carte',
  description: 'Découvrez notre carte gastronomique : entrées raffinées, plats signature et desserts d\'exception. Une cuisine française sublimée par les meilleurs produits de saison.',
  openGraph: {
    title: 'La Carte | Les Botanistes',
    description: 'Menu gastronomique : entrées raffinées, plats signature, desserts d\'exception. Menus dégustation à partir de 95€.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://les-botanistes.fr/carte',
  },
}

// Données du menu
const menuData = {
  entrees: [
    {
      name: 'Huîtres de Cancale',
      description: 'Crème d\'oursin, caviar d\'Aquitaine, gelée d\'eau de mer',
      price: 48,
      tag: 'Signature',
    },
    {
      name: 'Foie Gras de Canard',
      description: 'Confit au Sauternes, brioche toastée, chutney de figues',
      price: 42,
    },
    {
      name: 'Langoustines Rôties',
      description: 'Beurre d\'agrumes, émulsion au champagne, caviar de citron',
      price: 52,
    },
    {
      name: 'Œuf Bio Parfait',
      description: 'Crème de morilles, copeaux de truffe noire du Périgord',
      price: 38,
    },
    {
      name: 'Tartare de Saint-Jacques',
      description: 'Pomme verte, huile de noisette, pousses de shiso',
      price: 36,
    },
  ],
  plats: [
    {
      name: 'Homard Bleu de Bretagne',
      description: 'Risotto crémeux à l\'encre de seiche, bisque parfumée au cognac',
      price: 78,
      tag: 'Chef',
    },
    {
      name: 'Filet de Bœuf Wagyu',
      description: 'Pomme soufflée, sauce Périgueux, légumes racines confits',
      price: 85,
    },
    {
      name: 'Pigeon de Vendée',
      description: 'Cuisson rosée, jus corsé aux épices, purée de céleri truffée',
      price: 62,
    },
    {
      name: 'Turbot Sauvage',
      description: 'Rôti sur l\'arête, beurre blanc aux herbes, artichauts violets',
      price: 72,
    },
    {
      name: 'Ris de Veau Doré',
      description: 'Morilles fraîches, jus de veau réduit, purée de panais',
      price: 58,
    },
  ],
  desserts: [
    {
      name: 'Soufflé au Grand Marnier',
      description: 'Crème anglaise à la vanille de Madagascar',
      price: 24,
      tag: 'Signature',
    },
    {
      name: 'Tarte Fine aux Pommes',
      description: 'Caramel au beurre salé, glace à la cannelle',
      price: 22,
    },
    {
      name: 'Déclinaison de Chocolat',
      description: 'Textures multiples, crémeux, croustillant, glace intense',
      price: 26,
    },
    {
      name: 'Vacherin Glacé',
      description: 'Fruits rouges de saison, meringue légère, coulis de framboise',
      price: 22,
    },
    {
      name: 'Assiette de Fromages Affinés',
      description: 'Sélection de nos maîtres fromagers, confiture de cerises noires',
      price: 24,
    },
  ],
}

function MenuSection({ title, subtitle, items }) {
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
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CartePage() {
  return (
    <>
      <MenuJsonLd menuData={menuData} />
      <PageHeader
        subtitle="Notre Carte"
        title="Une cuisine d'exception"
        description="Découvrez une carte élaborée au fil des saisons, où chaque plat raconte une histoire de passion et de terroir."
      />

      {/* Note du chef */}
      <section className="pb-8">
        <div className="container-luxe max-w-2xl text-center">
          <blockquote className="italic text-muted-foreground">
            &ldquo;Chaque assiette est une invitation au voyage, un hommage
            à la générosité de notre terroir et à l&apos;excellence de nos producteurs.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-gold">— Le Chef</p>
        </div>
      </section>

      <Separator variant="gold-wide" className="opacity-30" />

      {/* Entrées */}
      <MenuSection
        title="Les Entrées"
        subtitle="Pour commencer"
        items={menuData.entrees}
      />

      <Separator variant="gold-wide" className="opacity-30" />

      {/* Plats */}
      <MenuSection
        title="Les Plats"
        subtitle="À partager ou à savourer"
        items={menuData.plats}
      />

      <Separator variant="gold-wide" className="opacity-30" />

      {/* Desserts */}
      <MenuSection
        title="Les Desserts"
        subtitle="Douceurs sucrées"
        items={menuData.desserts}
      />

      {/* Menus dégustation */}
      <section className="section-padding bg-muted">
        <div className="container-luxe max-w-3xl text-center">
          <p className="subtitle mb-4">Nos Menus</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-8">Menus Dégustation</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Menu Découverte */}
            <div className="card-luxe">
              <h3 className="font-serif text-xl text-gold mb-2">Menu Découverte</h3>
              <p className="text-sm text-muted-foreground mb-4">
                5 services pour une première exploration
              </p>
              <p className="text-2xl font-serif">95 €</p>
              <p className="text-xs text-muted-foreground mt-1">Accord mets & vins +45 €</p>
            </div>

            {/* Menu Botaniste */}
            <div className="card-luxe border-gold/50">
              <h3 className="font-serif text-xl text-gold mb-2">Menu Botaniste</h3>
              <p className="text-sm text-muted-foreground mb-4">
                7 services pour une expérience complète
              </p>
              <p className="text-2xl font-serif">145 €</p>
              <p className="text-xs text-muted-foreground mt-1">Accord mets & vins +75 €</p>
            </div>
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
