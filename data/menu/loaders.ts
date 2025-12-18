/**
 * Menu data loaders from Google Sheets
 * Server-side only - never import in client components
 */
import { unstable_cache } from 'next/cache';
import { readSheet, rowToObject } from './sheets';

/**
 * Cache configuration
 * - revalidate: 300 seconds (5 minutes)
 * - tags: used for on-demand revalidation if needed
 */
const CACHE_REVALIDATE_SECONDS = 300;

/**
 * Supported locales for the application
 */
export type Locale = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'ja';

/**
 * Raw row structure from Google Sheets
 * Matches the spreadsheet columns exactly
 */
interface SheetMenuRow {
  id: string;
  name_fr: string;
  name_en: string;
  price_eur: number;
  active: boolean;
  tag?: string;
}

/**
 * Clean internal model for a menu item
 * Used throughout the application
 */
export interface MenuItemData {
  id: string;
  name_fr: string;
  name_en: string;
  price: number;
  tag?: string;
}

/**
 * Section identifiers matching sheet names
 */
export type SectionId = 'starters' | 'mains' | 'desserts';

/**
 * Sheet name mapping for each section
 */
const SHEET_NAMES: Record<SectionId, string> = {
  starters: 'Starters',
  mains: 'Mains',
  desserts: 'Desserts',
};

/**
 * Internal function to load menu items from a specific section
 * @param sectionId - The section to load ('starters', 'mains', 'desserts')
 * @returns Array of active menu items
 */
async function fetchSection(sectionId: SectionId): Promise<MenuItemData[]> {
  const sheetName = SHEET_NAMES[sectionId];
  const { headers, rows } = await readSheet(sheetName);

  if (rows.length === 0) {
    return [];
  }

  // Convert rows to typed objects and filter active items
  const items = rows
    .map((row) => rowToObject<SheetMenuRow>(headers, row))
    .filter((item) => item.active === true)
    .map((item) => ({
      id: item.id,
      name_fr: item.name_fr,
      name_en: item.name_en,
      price: item.price_eur,
      tag: item.tag || undefined,
    }));

  return items;
}

/**
 * Cached version of section loader
 * Caches for 5 minutes to avoid hitting Google Sheets on every request
 */
const loadSection = (sectionId: SectionId) =>
  unstable_cache(
    () => fetchSection(sectionId),
    [`menu-section-${sectionId}`],
    {
      revalidate: CACHE_REVALIDATE_SECONDS,
      tags: ['menu', `menu-${sectionId}`],
    }
  )();

/**
 * Load starters from Google Sheets
 */
export async function loadStarters(): Promise<MenuItemData[]> {
  return loadSection('starters');
}

/**
 * Load main courses from Google Sheets
 */
export async function loadMains(): Promise<MenuItemData[]> {
  return loadSection('mains');
}

/**
 * Load desserts from Google Sheets
 */
export async function loadDesserts(): Promise<MenuItemData[]> {
  return loadSection('desserts');
}

/**
 * Load all menu sections at once
 * @returns Object with all sections
 */
export async function loadAllSections(): Promise<Record<SectionId, MenuItemData[]>> {
  const [starters, mains, desserts] = await Promise.all([
    loadStarters(),
    loadMains(),
    loadDesserts(),
  ]);

  return { starters, mains, desserts };
}

/**
 * Get the localized name for a menu item
 *
 * LANGUAGE RULE:
 * - FR locale → name_fr (French)
 * - ALL other locales → name_en if available, otherwise fallback to name_fr
 *
 * Fallback ensures no empty strings are ever displayed.
 *
 * @param item - The menu item
 * @param locale - The current locale
 * @returns The appropriate name based on locale, never empty
 */
export function getMenuLabel(item: MenuItemData, locale: Locale | string): string {
  if (locale === 'fr') {
    return item.name_fr;
  }

  // For non-FR locales: use English if available, fallback to French
  const englishLabel = item.name_en?.trim();
  return englishLabel || item.name_fr;
}
