import { siteConfig } from '@/lib/config'

// Schema.org JSON-LD pour Restaurant
export function RestaurantJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.restaurant.phone,
    email: siteConfig.restaurant.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.restaurant.address.street,
      addressLocality: siteConfig.restaurant.address.city,
      postalCode: siteConfig.restaurant.address.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.8520793',
      longitude: '2.325686',
    },
    image: [
      `${siteConfig.url}/images/restaurant-1.jpg`,
      `${siteConfig.url}/images/restaurant-2.jpg`,
    ],
    priceRange: '€€€',
    servesCuisine: ['Française', 'Gastronomique'],
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
    acceptsReservations: 'True',
    menu: `${siteConfig.url}/carte`,
    hasMenu: {
      '@type': 'Menu',
      name: 'Menu Dégustation',
      description: 'Notre menu gastronomique',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Entrées',
          description: 'Nos entrées raffinées',
        },
        {
          '@type': 'MenuSection',
          name: 'Plats',
          description: 'Nos plats signature',
        },
        {
          '@type': 'MenuSection',
          name: 'Desserts',
          description: 'Nos desserts gourmands',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Schema.org JSON-LD pour LocalBusiness (complémentaire)
export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.restaurant.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.restaurant.address.street,
      addressLocality: siteConfig.restaurant.address.city,
      postalCode: siteConfig.restaurant.address.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.8520793',
      longitude: '2.325686',
    },
    priceRange: '€€€',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Schema.org JSON-LD pour WebSite
export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
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

// Schema.org JSON-LD pour BreadcrumbList
export function BreadcrumbJsonLd({ items }) {
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

// Schema.org JSON-LD pour la page Réservation
export function ReservationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ReserveAction',
    name: 'Réserver une table',
    target: `${siteConfig.url}/reservation`,
    object: {
      '@type': 'Restaurant',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
