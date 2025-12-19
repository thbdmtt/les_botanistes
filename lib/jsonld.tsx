/**
 * Schema.org JSON-LD components for SEO
 * Conformes aux recommandations Google Rich Results 2025
 */

import { siteConfig } from '@/lib/config'

// Types pour les composants JSON-LD
interface BreadcrumbItem {
  name: string
  url: string
}

interface MenuItemData {
  name: string
  description?: string
  price?: number
}

interface MenuSectionData {
  name: string
  items: MenuItemData[]
}

/**
 * Restaurant JSON-LD principal (Rolls-Royce)
 * Nœud unique conforme Google Rich Results
 * À placer dans le layout global
 */
export function RestaurantJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteConfig.url}/#restaurant`,

    name: siteConfig.name,
    description: 'Restaurant de cuisine traditionnelle française à Paris 7e, près du Bon Marché. Une cuisine de saison élégante et raffinée, dans un cadre intimiste.',
    url: siteConfig.url,
    image: [
      `${siteConfig.url}/images/restaurant/salle-principale.jpg`,
      `${siteConfig.url}/images/restaurant/facade.jpg`,
    ],

    // Classification
    priceRange: '€€€',
    servesCuisine: ['Cuisine française', 'Cuisine traditionnelle', 'Cuisine de saison'],

    // Localisation
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.restaurant.address.street,
      addressLocality: siteConfig.restaurant.address.city,
      postalCode: siteConfig.restaurant.address.postalCode,
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8520793,
      longitude: 2.325686,
    },
    areaServed: {
      '@type': 'City',
      name: 'Paris',
    },

    // Contact
    telephone: siteConfig.restaurant.phone,
    email: siteConfig.restaurant.email,

    // Horaires d'ouverture
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '12:00',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '19:00',
        closes: '22:30',
      },
    ],

    // Réservation
    acceptsReservations: true,

    // Menu (lien simple vers la page carte)
    hasMenu: `${siteConfig.url}/carte`,

    // Actions de conversion
    potentialAction: [
      {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteConfig.url}/reservation`,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'Réservation de table',
        },
      },
      {
        '@type': 'ViewAction',
        target: `${siteConfig.url}/carte`,
        name: 'Voir la carte',
      },
    ],

    sameAs: [siteConfig.social.instagram],
    inLanguage: 'fr-FR',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'EUR',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * WebSite JSON-LD
 * Informations générales sur le site web
 */
export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#restaurant`,
    },
    inLanguage: 'fr-FR',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * Breadcrumb JSON-LD
 * Navigation fil d'Ariane
 * À utiliser par page si nécessaire
 */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * ReserveAction JSON-LD
 * EXCLUSIVEMENT pour la page /reservation
 */
export function ReserveActionJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ReserveAction',
    '@id': `${siteConfig.url}/reservation#action`,
    name: 'Réserver une table aux Botanistes',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/reservation`,
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    object: {
      '@id': `${siteConfig.url}/#restaurant`,
    },
    result: {
      '@type': 'Reservation',
      name: 'Réservation de table',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * Menu JSON-LD
 * EXCLUSIVEMENT pour la page /carte
 * Utilise les données réelles du Google Sheets
 */
export function MenuJsonLd({ sections }: { sections: MenuSectionData[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': `${siteConfig.url}/carte#menu`,
    name: 'Carte - Les Botanistes',
    description: 'Cuisine traditionnelle française de saison',
    url: `${siteConfig.url}/carte`,
    inLanguage: 'fr-FR',
    mainEntity: { '@id': `${siteConfig.url}/#restaurant` },
    hasMenuSection: sections.map((section) => ({
      '@type': 'MenuSection',
      name: section.name,
      hasMenuItem: section.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        ...(item.description && { description: item.description }),
        ...(item.price && {
          offers: {
            '@type': 'Offer',
            price: item.price,
            priceCurrency: 'EUR',
          },
        }),
      })),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
