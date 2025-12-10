'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { locales, localeNames } from '@/i18n/routing'
import { cn } from '@/lib/utils'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  // Fermer le dropdown au clic extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Fermer avec Echap
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleLocaleChange = (newLocale) => {
    router.replace(pathname, { locale: newLocale })
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-1.5 px-2 py-1.5 rounded-sm',
          'text-sm font-medium tracking-wide',
          'transition-colors duration-300',
          'hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
          isOpen && 'text-gold'
        )}
        aria-label="Changer de langue"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="uppercase">{locale}</span>
        <svg
          className={cn(
            'w-3.5 h-3.5 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={cn(
          'absolute top-full right-0 mt-2 py-1.5',
          'min-w-[140px] rounded-sm',
          'bg-background/95 backdrop-blur-lg',
          'border border-border/50 shadow-lg',
          'transition-all duration-200 origin-top-right',
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        )}
        role="listbox"
        aria-label="Liste des langues"
      >
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              'w-full px-4 py-2 text-left text-sm',
              'flex items-center justify-between gap-3',
              'transition-colors duration-150',
              'hover:bg-gold/10 hover:text-gold',
              loc === locale && 'text-gold bg-gold/5'
            )}
            role="option"
            aria-selected={loc === locale}
          >
            <span>{localeNames[loc]}</span>
            <span className="uppercase text-xs text-muted-foreground">{loc}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
