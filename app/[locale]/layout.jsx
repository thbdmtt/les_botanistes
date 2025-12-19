import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header, Footer } from '@/components/layout'
import { RestaurantJsonLd, WebSiteJsonLd } from '@/lib/jsonld.tsx'
import { locales, localeNames } from '@/i18n/routing'

// Génération des métadonnées dynamiques basées sur la locale
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  const siteUrl = 'https://les-botanistes.fr'

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('home.title'),
      template: `%s | Les Botanistes`,
    },
    description: t('home.description'),
    keywords: [
      'cuisine traditionnelle française',
      'Paris 7',
      'cuisine française',
      'cuisine de saison',
      'Les Botanistes',
      'Bon Marché',
      'Sèvres-Babylone',
      'rue Chomel',
    ],
    authors: [{ name: 'Les Botanistes' }],
    creator: 'Les Botanistes',
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : locale,
      url: siteUrl,
      siteName: 'Les Botanistes',
      title: t('home.title'),
      description: t('home.description'),
      images: ['/og-default.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
      images: ['/og-default.jpg'],
    },
    alternates: {
      canonical: locale === 'fr' ? siteUrl : `${siteUrl}/${locale}`,
      languages: Object.fromEntries(
        locales.map((loc) => [
          loc,
          loc === 'fr' ? siteUrl : `${siteUrl}/${loc}`,
        ])
      ),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Génération statique des routes pour toutes les locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// Script pour éviter le flash de thème au chargement
const themeScript = `
  (function() {
    function getTheme() {
      const stored = localStorage.getItem('theme');
      if (stored && stored !== 'system') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.classList.add(getTheme());
  })();
`

export default async function LocaleLayout({ children, params: { locale } }) {
  // Vérifier que la locale est supportée
  if (!locales.includes(locale)) {
    notFound()
  }

  // Charger les messages pour cette locale
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <RestaurantJsonLd />
        <WebSiteJsonLd />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider defaultTheme="system">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
