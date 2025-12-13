import type { Menu } from './types';

/**
 * Menu data for Les Botanistes
 *
 * HOW TO EDIT:
 * - To add a dish: add an object to the relevant section's items array
 * - To remove a dish: delete the object from the items array
 * - To reorder: change the order of objects in the array
 * - Translations are optional: if missing, FR is used as fallback
 */
export const menu: Menu = {
  sections: [
    {
      id: 'starters',
      order: 1,
      items: [
        {
          id: 'huitres-perle-blanche',
          title: {
            fr: '6 huîtres creuses "Perle Blanche" n°3',
          },
          price: 18,
        },
        {
          id: 'foie-gras-mi-cuit',
          title: {
            fr: 'Foie gras de canard mi-cuit au torchon, Marmelade de fruits secs',
          },
          price: 23,
        },
        {
          id: 'salade-pastorale',
          title: {
            fr: 'Salade pastorale aux herbes fraîches',
          },
          price: 9,
        },
        {
          id: 'oeuf-bio-lentilles',
          title: {
            fr: 'Œuf bio parfait aux lentilles vertes du Puy',
          },
          price: 16,
        },
        {
          id: 'feuillete-champignons',
          title: {
            fr: 'Feuilleté aux champignons',
          },
          price: 16,
        },
      ],
    },
    {
      id: 'mains',
      order: 2,
      items: [
        {
          id: 'lievre-royale',
          title: {
            fr: 'Lièvre à la royale, Purée de céleri',
          },
          price: 68,
          tag: 'Chef',
        },
        {
          id: 'saint-jacques-endives',
          title: {
            fr: 'Noix de Saint-Jacques, Endives braisées',
          },
          price: 40,
        },
        {
          id: 'onglet-boeuf',
          title: {
            fr: 'Onglet de bœuf poêlé, Gratin de pommes de terre',
          },
          price: 32,
        },
        {
          id: 'ris-veau-epinards',
          title: {
            fr: 'Ris de veau de lait rôti, Tombée d\'épinards',
          },
          price: 55,
        },
        {
          id: 'volaille-fermiere',
          title: {
            fr: 'Volaille fermière cuite sur coffre, Jus de volaille, Sauce homardine, Pommes paillasson',
          },
          price: 37,
        },
      ],
    },
    {
      id: 'desserts',
      order: 3,
      items: [
        {
          id: 'ananas-roti-mangue',
          title: {
            fr: 'Ananas rôti, Sorbet mangue',
          },
          price: 15,
          tag: 'Signature',
        },
        {
          id: 'crumble-pommes',
          title: {
            fr: 'Crumble aux pommes',
          },
          price: 12,
        },
        {
          id: 'creme-renversee',
          title: {
            fr: 'Crème renversée au caramel et gousse de vanille',
          },
          price: 10,
        },
        {
          id: 'baba-rhum',
          title: {
            fr: 'Baba au rhum ambré, Crème fouettée',
          },
          price: 14,
        },
        {
          id: 'moelleux-chocolat',
          title: {
            fr: 'Moelleux au chocolat, Glace fromage blanc',
          },
          price: 14,
        },
        {
          id: 'glaces-sorbets',
          title: {
            fr: 'Glaces et sorbets maison',
          },
          price: 12,
        },
        {
          id: 'fromages-affines',
          title: {
            fr: 'Assiette de fromages affinés',
          },
          price: 17,
        },
      ],
    },
  ],
  tastingMenus: [
    {
      id: 'discovery',
      services: 5,
      price: 95,
      winePrice: 45,
    },
    {
      id: 'botaniste',
      services: 7,
      price: 145,
      winePrice: 75,
    },
  ],
};
