/**
 * Menu data entry point
 * Single source of truth for menu data access
 *
 * Usage:
 *   import { loadAllSections, getMenuLabel } from '@/lib/menu';
 *
 * Server-side only - do not import in client components
 */

export {
  loadStarters,
  loadMains,
  loadDesserts,
  loadAllSections,
  getMenuLabel,
} from '@/data/menu/loaders';

export type {
  MenuItemData,
  SectionId,
  Locale,
} from '@/data/menu/loaders';
