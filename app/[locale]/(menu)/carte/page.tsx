import { getLocale } from 'next-intl/server'
import { loadAllSections, getMenuLabel } from '@/lib/menu'
import type { MenuItemData, SectionId } from '@/lib/menu'
import MenuContent from './MenuContent'

// Tasting menus data (static, not from Google Sheets)
const tastingMenus = [
  {
    id: 'discovery' as const,
    services: 5,
    price: 95,
    winePrice: 45,
  },
  {
    id: 'botaniste' as const,
    services: 7,
    price: 145,
    winePrice: 75,
  },
]

/**
 * Transform menu items with localized names
 */
function localizeItems(
  items: MenuItemData[],
  locale: string
): Array<MenuItemData & { name: string }> {
  return items.map((item) => ({
    ...item,
    name: getMenuLabel(item, locale),
  }))
}

export default async function CartePage() {
  const locale = await getLocale()

  // Load menu data from Google Sheets
  const rawSections = await loadAllSections()

  // Apply language fallback to all items
  const sections = {
    starters: localizeItems(rawSections.starters, locale),
    mains: localizeItems(rawSections.mains, locale),
    desserts: localizeItems(rawSections.desserts, locale),
  }

  return (
    <MenuContent
      sections={sections}
      tastingMenus={tastingMenus}
    />
  )
}
