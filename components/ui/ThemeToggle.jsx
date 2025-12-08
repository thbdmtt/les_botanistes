'use client'

import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative w-12 h-6 rounded-full transition-colors duration-300',
        'bg-muted hover:bg-muted/80',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
      aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      {/* Track avec icônes */}
      <span className="absolute inset-0 flex items-center justify-between px-1">
        {/* Soleil */}
        <svg
          className={cn(
            'w-3.5 h-3.5 transition-opacity duration-300',
            theme === 'dark' ? 'opacity-50' : 'opacity-0'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        {/* Lune */}
        <svg
          className={cn(
            'w-3.5 h-3.5 transition-opacity duration-300',
            theme === 'light' ? 'opacity-50' : 'opacity-0'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </span>

      {/* Indicateur mobile */}
      <span
        className={cn(
          'absolute top-0.5 left-0.5 w-5 h-5 rounded-full',
          'bg-gold shadow-sm',
          'transition-transform duration-300 ease-out',
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        )}
      />
    </button>
  )
}
