export const siteConfig = {
  name: 'Les Botanistes',
  shortName: 'Les Botanistes',
  description: 'Restaurant de cuisine traditionnelle française à Paris 7, rue Chomel, près du Bon Marché. Cuisine française de saison, élégante et raffinée.',
  url: 'https://les-botanistes.fr',
  locale: 'fr_FR',

  // Informations du restaurant
  restaurant: {
    address: {
      street: '11 Bis Rue Chomel',
      city: 'Paris',
      postalCode: '75007',
      country: 'France',
    },
    phone: '+33 1 45 49 04 54',
    email: 'restaurant.lesbotanistes@orange.fr',
    hours: {
      lunch: '12h00 - 14h30',
      dinner: '19h00 - 22h30',
      closed: 'Dimanche',
    },
  },

  // Navigation principale
  navigation: [
    { name: 'Accueil', href: '/' },
    { name: 'La Carte', href: '/carte' },
    { name: 'Réservation', href: '/reservation' },
    { name: 'Contact', href: '/contact' },
  ],

  // Liens légaux
  legalLinks: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Confidentialité', href: '/confidentialite' },
  ],

  // Réseaux sociaux
  social: {
    instagram: 'https://instagram.com/restaurantlesbotanistes',
    facebook: 'https://facebook.com/lesbotanistes',
  },
}
