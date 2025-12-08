'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/config'
import Logo from '@/components/ui/Logo'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Détecter le scroll pour l'effet glass
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-500 ease-out',
          isScrolled
            ? 'py-3 glass border-b border-border/50'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="container-luxe">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Navigation desktop */}
            <ul className="hidden md:flex items-center gap-8">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative py-2 text-sm font-medium tracking-wide transition-colors duration-300',
                      'hover:text-gold',
                      pathname === item.href
                        ? 'text-gold'
                        : 'text-foreground'
                    )}
                  >
                    {item.name}
                    {/* Indicateur actif */}
                    {pathname === item.href && (
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions droite */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Bouton réservation desktop */}
              <Link
                href="/reservation"
                className="hidden md:inline-flex btn-primary text-xs py-2.5 px-6"
              >
                Réserver
              </Link>

              {/* Bouton menu mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'md:hidden relative w-10 h-10 flex items-center justify-center',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2'
                )}
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={cn(
                      'w-full h-0.5 bg-foreground transition-all duration-300 origin-center',
                      isMobileMenuOpen && 'rotate-45 translate-y-[9px]'
                    )}
                  />
                  <span
                    className={cn(
                      'w-full h-0.5 bg-foreground transition-all duration-300',
                      isMobileMenuOpen && 'opacity-0 scale-x-0'
                    )}
                  />
                  <span
                    className={cn(
                      'w-full h-0.5 bg-foreground transition-all duration-300 origin-center',
                      isMobileMenuOpen && '-rotate-45 -translate-y-[9px]'
                    )}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Menu mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden',
          'transition-all duration-500',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <nav className="relative h-full flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center gap-8">
            {siteConfig.navigation.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  'transition-all duration-500',
                  isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                )}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'text-3xl font-serif tracking-wide transition-colors duration-300',
                    'hover:text-gold',
                    pathname === item.href ? 'text-gold' : 'text-foreground'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bouton réservation mobile */}
          <div
            className={cn(
              'mt-12 transition-all duration-500',
              isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            )}
            style={{
              transitionDelay: isMobileMenuOpen ? '400ms' : '0ms'
            }}
          >
            <Link href="/reservation" className="btn-primary">
              Réserver une table
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
