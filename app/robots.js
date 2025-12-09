const BASE_URL = 'https://les-botanistes.fr'

export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 10,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
