import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Liste des langues supportées
export const locales = ['fr', 'en', 'es', 'de', 'it', 'pt', 'ja'] as const
export type Locale = (typeof locales)[number]

// Langue par défaut
export const defaultLocale: Locale = 'fr'

// Noms des langues pour l'affichage dans le sélecteur
export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  ja: '日本語',
}

// Drapeaux pour le sélecteur de langue (optionnel)
export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸',
  de: '🇩🇪',
  it: '🇮🇹',
  pt: '🇵🇹',
  ja: '🇯🇵',
}

// Configuration de next-intl
export default getRequestConfig(async ({ locale }) => {
  // Valider que la locale est supportée
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
