/**
 * Types for the menu data structure
 * Supports multilingual content with FR as fallback
 */

export interface LocalizedText {
  fr: string;
  en?: string;
  es?: string;
  de?: string;
  it?: string;
  pt?: string;
  ja?: string;
}

export interface MenuItem {
  id: string;
  title: LocalizedText;
  description?: LocalizedText;
  price: number;
  tag?: string; // "Chef", "Signature", etc.
}

export interface MenuSection {
  id: 'starters' | 'mains' | 'desserts';
  order: number;
  items: MenuItem[];
}

export interface TastingMenu {
  id: 'discovery' | 'botaniste';
  services: number;
  price: number;
  winePrice: number;
}

export interface Menu {
  sections: MenuSection[];
  tastingMenus: TastingMenu[];
}

export type SupportedLocale = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'ja';
