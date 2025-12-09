const BASE_URL = 'https://les-botanistes.fr'

// Liste complète des routes du site
const routes = [
  // Pages principales
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/carte', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/reservation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  // Pages légales
  { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/confidentialite', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap() {
  const currentDate = new Date().toISOString()

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
