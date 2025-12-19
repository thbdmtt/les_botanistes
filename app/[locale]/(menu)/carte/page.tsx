import { getLocale } from 'next-intl/server'
import { loadAllSections, getMenuLabel } from '@/lib/menu'
import type { MenuItemData, SectionId } from '@/lib/menu'
import { MenuJsonLd } from '@/lib/jsonld'
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

  // Prepare data for MenuJsonLd (SEO)
  const menuSectionsForSeo = [
    {
      name: 'Entrées',
      items: sections.starters.map((item) => ({
        name: item.name,
        price: item.price,
      })),
    },
    {
      name: 'Plats',
      items: sections.mains.map((item) => ({
        name: item.name,
        price: item.price,
      })),
    },
    {
      name: 'Desserts',
      items: sections.desserts.map((item) => ({
        name: item.name,
        price: item.price,
      })),
    },
  ]

  return (
    <>
      <MenuJsonLd sections={menuSectionsForSeo} />
      <MenuContent
        sections={sections}
        tastingMenus={tastingMenus}
      />
    </>
  )
}
