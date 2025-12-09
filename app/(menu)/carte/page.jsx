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
      name: '6 Huîtres Creuses "Perle Blanche" n°3',
      // description: 'Crème d\'oursin, caviar d\'Aquitaine, gelée d\'eau de mer',
      price: 18,
      
    },
    {
      name: 'Foie Gras de Canard Mi-Cuit Cuit au Torchon, marmelade de Fruits Secs',
      // description: 'Confit au Sauternes, brioche toastée, chutney de figues',
      price: 23,
      // tag: 'Signature',
    },
    {
      name: 'Salade Pastorale au Herbes Fraîches',
      // description: 'Beurre d\'agrumes, émulsion au champagne, caviar de citron',
      price: 9,
    },
    {
      name: 'Œuf Bio Parfait aux Lentilles Vertes du Puy',
      // description: 'Crème de morilles, copeaux de truffe noire du Périgord',
      price: 16,
    },
    {
      name: 'Feuilleté aux Champignons',
      // description: 'Pomme verte, huile de noisette, pousses de shiso',
      price: 16,
    },
  ],
  plats: [
    {
      name: 'Lièvre à la Royale, Purée de Céleri',
      // description: 'Risotto crémeux à l\'encre de seiche, bisque parfumée au cognac',
      price: 68,
      tag: 'Chef',
    },
    {
      name: 'Noix de Saint-Jacques, Endives Braisées',
      // description: 'Pomme soufflée, sauce Périgueux, légumes racines confits',
      price: 40,
    },
    {
      name: 'Onglet de Bœuf Poêlé, Gratin de Pommes de Terre',
      // description: 'Cuisson rosée, jus corsé aux épices, purée de céleri truffée',
      price: 32,
    },
    {
      name: 'Ris de Veau de Lait Rôti, Tombé d\'Épinards',
      // description: 'Rôti sur l\'arête, beurre blanc aux herbes, artichauts violets',
      price: 55,
    },
    {
      name: 'Volaille Fermière Cuite sur Coffre, Jus de Volaille, Sauce Homardine, Pommes Paillasson',
      // description: 'Morilles fraîches, jus de veau réduit, purée de panais',
      price: 37,
    },
  ],
  desserts: [
    {
      name: 'Ananas rôti, Sorbet Mangue',
      // description: 'Crème anglaise à la vanille de Madagascar',
      price: 15,
      tag: 'Signature',
    },
    {
      name: 'Crumble aux Pommes',
      // description: 'Caramel au beurre salé, glace à la cannelle',
      price: 12,
    },
    {
      name: 'Crème Renversée au Caramel et Gousse de Vanille',
      // description: 'Textures multiples, crémeux, croustillant, glace intense',
      price: 10,
    },
    {
      name: 'Baba au Rhum Ambré, Crème fouettée',
      // description: 'Fruits rouges de saison, meringue légère, coulis de framboise',
      price: 14,
    },
    {
      name: 'Moelleux au Chocolat, Glace Fromage Blanc',
      // description: 'Fruits rouges de saison, meringue légère, coulis de framboise',
      price: 14,
    },
    {
      name: 'Glaces et Sorbets Maison',
      // description: 'Fruits rouges de saison, meringue légère, coulis de framboise',
      price: 12,
    },
    {
      name: 'Assiette de Fromages Affinés',
      // description: 'Sélection de nos maîtres fromagers, confiture de cerises noires',
      price:17,
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
        description="Une carte bistronomique élaborée au fil des saisons, où chaque plat célèbre les meilleurs produits du marché."
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
