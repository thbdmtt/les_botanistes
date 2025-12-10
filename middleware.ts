import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Matcher pour toutes les routes sauf les fichiers statiques et API
  matcher: [
    // Matcher toutes les routes sauf :
    // - /api (routes API)
    // - /_next (fichiers Next.js internes)
    // - /_vercel (fichiers Vercel)
    // - /.*\..* (fichiers avec extension comme .jpg, .css)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
