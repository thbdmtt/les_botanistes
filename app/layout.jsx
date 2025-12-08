import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/layout'

const siteConfig = {
  name: 'Les Botanistes',
  description: 'Découvrez Les Botanistes, une expérience gastronomique unique où la nature rencontre la haute cuisine. Restaurant étoilé au cœur de Paris.',
  url: 'https://les-botanistes.fr',
  locale: 'fr_FR',
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Restaurant Gastronomique Paris`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'restaurant gastronomique',
    'Paris',
    'cuisine française',
    'restaurant étoilé',
    'Les Botanistes',
    'fine dining',
    'haute cuisine',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0B0C' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// Script pour éviter le flash de thème au chargement
// S'exécute avant React pour appliquer immédiatement le thème
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

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider defaultTheme="system">
          <Header />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
