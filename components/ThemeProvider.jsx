'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
  isSystem: true,
})

export function ThemeProvider({ children, defaultTheme = 'system' }) {
  const [theme, setThemeState] = useState(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Obtenir le thème effectif (résolu)
  const resolvedTheme = theme === 'system'
    ? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme

  // Appliquer le thème au document
  const applyTheme = (newTheme) => {
    const root = document.documentElement
    const isDark = newTheme === 'dark' ||
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    root.classList.remove('light', 'dark')
    root.classList.add(isDark ? 'dark' : 'light')
  }

  // Définir le thème
  const setTheme = (newTheme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  // Toggle entre light et dark
  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // Initialisation au montage
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const initial = stored || defaultTheme
    setThemeState(initial)
    applyTheme(initial)
    setMounted(true)
  }, [defaultTheme])

  // Écouter les changements de préférence système
  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      applyTheme('system')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  // Éviter le flash en attendant le montage
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: defaultTheme, setTheme: () => {}, toggleTheme: () => {}, isSystem: true }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: resolvedTheme,
        rawTheme: theme,
        setTheme,
        toggleTheme,
        isSystem: theme === 'system',
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeProvider
