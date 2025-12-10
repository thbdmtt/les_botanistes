import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

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

// Configuration du routage i18n
export const routing = defineRouting({
  // Liste des locales supportées
  locales,

  // Locale par défaut
  defaultLocale,

  // Stratégie de préfixe:
  // 'as-needed' : /contact (fr par défaut), /en/contact (autres langues)
  // 'always' : /fr/contact, /en/contact (préfixe toujours visible)
  localePrefix: 'as-needed',
})

// Export des fonctions de navigation typées pour next-intl
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
