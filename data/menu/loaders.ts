/**
 * Menu data loaders from Google Sheets
 * Server-side only - never import in client components
 */
import { readSheet, rowToObject } from './sheets';

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
 * Loads menu items from a specific section
 * @param sectionId - The section to load ('starters', 'mains', 'desserts')
 * @returns Array of active menu items
 */
async function loadSection(sectionId: SectionId): Promise<MenuItemData[]> {
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
