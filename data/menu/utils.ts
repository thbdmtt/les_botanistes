import type { LocalizedText, SupportedLocale } from './types';

/**
 * Get localized text with FR fallback
 * @param record - The LocalizedText object containing translations
 * @param locale - The desired locale
 * @returns The text in the requested locale, or FR as fallback
 */
export function getLocalizedText(
  record: LocalizedText | undefined,
  locale: SupportedLocale | string
): string {
  if (!record) return '';

  const supportedLocale = locale as SupportedLocale;

  // Return the requested locale if available, otherwise fallback to FR
  return record[supportedLocale] ?? record.fr;
}

/**
 * Format price for display
 * @param price - The price as a number
 * @returns Formatted price string with € symbol
 */
export function formatPrice(price: number): string {
  return `${price} €`;
}
