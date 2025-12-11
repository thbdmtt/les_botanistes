'use client'

import Link from 'next/link'
import { Button } from '@/components/ui'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond avec effet parallaxe subtil */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-restaurant.jpg')`,
        }}
      >
        {/* Fallback gradient si pas d'image */}
        <div className="absolute inset-0 bg-gradient-to-br from-noir via-gris-fonce to-noir" />
      </div>

      {/* Overlay dégradé élégant */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir/90" />

      {/* Overlay doré subtil */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-gold/10 mix-blend-overlay" />

      {/* Contenu principal */}
      <div className="relative z-10 container-luxe text-center px-4">
        {/* Sous-titre */}
        <p
          className="subtitle text-blanc/90 mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          Restaurant Bistronomique
        </p>

        {/* Titre principal */}
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-blanc mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          Les{' '}
          <span className="text-gold italic">Botanistes</span>
        </h1>

        {/* Séparateur décoratif */}
        <div
          className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="w-2 h-2 rotate-45 border border-gold" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Description */}
        <p
          className="max-w-xl mx-auto text-lg sm:text-xl text-gris-chaud font-light leading-relaxed mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          Une expérience culinaire où la nature rencontre l&apos;art de vivre à la française.
        </p>

        {/* Boutons CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        >
          <Button href="/carte" variant="primary">
            Découvrir la carte
          </Button>
          <Button href="/reservation" variant="secondary" className="border-blanc/50 text-blanc hover:bg-blanc hover:text-noir hover:border-blanc">
            Réserver une table
          </Button>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col items-center gap-2 text-blanc/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border border-blanc/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
