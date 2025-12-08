export const siteConfig = {
  name: 'Les Botanistes',
  shortName: 'Les Botanistes',
  description: 'Découvrez Les Botanistes, une expérience gastronomique unique où la nature rencontre la haute cuisine. Restaurant étoilé au cœur de Paris.',
  url: 'https://les-botanistes.fr',
  locale: 'fr_FR',

  // Informations du restaurant
  restaurant: {
    address: {
      street: '12 Rue des Jardins',
      city: 'Paris',
      postalCode: '75001',
      country: 'France',
    },
    phone: '+33 1 42 00 00 00',
    email: 'contact@les-botanistes.fr',
    hours: {
      lunch: '12h00 - 14h30',
      dinner: '19h00 - 22h30',
      closed: 'Dimanche et Lundi',
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
    instagram: 'https://instagram.com/lesbotanistes',
    facebook: 'https://facebook.com/lesbotanistes',
  },
}
