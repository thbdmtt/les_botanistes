import { PageHeader } from '@/components/sections'
import { MenuItem, Separator } from '@/components/ui'
import { MenuJsonLd } from '@/lib/jsonld'

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

// Données du menu
const menuData = {
  entrees: [
    {
      name: '6 huîtres creuses "Perle Blanche" n°3',
      // description: 'Crème d\'oursin, caviar d\'Aquitaine, gelée d\'eau de mer',
      price: 18,

    },
    {
      name: 'Foie gras de canard mi-cuit au torchon, Marmelade de fruits secs',
      // description: 'Confit au Sauternes, brioche toastée, chutney de figues',
      price: 23,
      // tag: 'Signature',
    },
    {
      name: 'Salade pastorale aux herbes fraîches',
      // description: 'Beurre d\'agrumes, émulsion au champagne, caviar de citron',
      price: 9,
    },
    {
      name: 'Œuf bio parfait aux lentilles vertes du Puy',
      // description: 'Crème de morilles, copeaux de truffe noire du Périgord',
      price: 16,
    },
    {
      name: 'Feuilleté aux champignons',
      // description: 'Pomme verte, huile de noisette, pousses de shiso',
      price: 16,
    },
  ],
  plats: [
    {
      name: 'Lièvre à la royale, Purée de céleri',
      // description: 'Risotto crémeux à l\'encre de seiche, bisque parfumée au cognac',
      price: 68,
      tag: 'Chef',
    },
    {
      name: 'Noix de Saint-Jacques, Endives braisées',
      // description: 'Pomme soufflée, sauce Périgueux, légumes racines confits',
      price: 40,
    },
    {
      name: 'Onglet de bœuf poêlé, Gratin de pommes de terre',
      // description: 'Cuisson rosée, jus corsé aux épices, purée de céleri truffée',
      price: 32,
    },
    {
      name: 'Ris de veau de lait rôti, Tombée d\'épinards',
      // description: 'Rôti sur l\'arête, beurre blanc aux herbes, artichauts violets',
      price: 55,
    },
    {
      name: 'Volaille fermière cuite sur coffre, Jus de volaille, Sauce homardine, Pommes paillasson',
      // description: 'Morilles fraîches, jus de veau réduit, purée de panais',
      price: 37,
    },
  ],
  desserts: [
    {
      name: 'Ananas rôti, Sorbet mangue',
      // description: 'Crème anglaise à la vanille de Madagascar',
      price: 15,
      tag: 'Signature',
    },
    {
      name: 'Crumble aux pommes',
      // description: 'Caramel au beurre salé, glace à la cannelle',
      price: 12,
    },
    {
      name: 'Crème renversée au caramel et gousse de vanille',
      // description: 'Textures multiples, crémeux, croustillant, glace intense',
      price: 10,
    },
    {
      name: 'Baba au rhum ambré, Crème fouettée',
      // description: 'Fruits rouges de saison, meringue légère, coulis de framboise',
      price: 14,
    },
    {
      name: 'Moelleux au chocolat, Glace fromage blanc',
      // description: 'Fruits rouges de saison, meringue légère, coulis de framboise',
      price: 14,
    },
    {
      name: 'Glaces et sorbets maison',
      // description: 'Fruits rouges de saison, meringue légère, coulis de framboise',
      price: 12,
    },
    {
      name: 'Assiette de fromages affinés',
      // description: 'Sélection de nos maîtres fromagers, confiture de cerises noires',
      price: 17,
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
        title="Cuisine de saison"
        description="Une ardoise qui évolue au fil des saisons, mettant à l’honneur les produits du marché."
      />

      {/* Note du chef */}
      <section className="pb-8">
        <div className="container-luxe max-w-2xl text-center">
          <blockquote className="italic text-muted-foreground">
            &ldquo;La cuisine, c’est quand les choses ont le goût de ce qu’elles sont.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-gold">— Curnonsky</p>
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
        subtitle="À savourer"
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
