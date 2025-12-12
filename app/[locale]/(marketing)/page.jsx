import { Hero } from '@/components/sections'
import { FadeIn } from '@/components/animations'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Section Philosophie */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="subtitle mb-6">Notre Philosophie</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 text-balance">
              L&apos;excellence au service
              <br />
              <span className="text-gold italic">de vos sens</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="separator-gold mx-auto mb-8" />
          </FadeIn>
          <FadeIn delay={300}>
            <p className="body-luxe max-w-2xl mx-auto">
              Au cœur de Paris, Les Botanistes cultivent depuis 2010 une cuisine française
              authentique, nourrie par la transmission et le respect des produits de saison.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section Découverte - Trois piliers */}
      <section className="section-padding bg-muted">
        <div className="container-luxe">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Pilier 1 */}
            <FadeIn delay={0}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 rounded-full flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m18-6-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 10.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-3">Produits d&apos;Exception</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Une sélection rigoureuse des meilleurs producteurs et artisans français.
                </p>
              </div>
            </FadeIn>

            {/* Pilier 2 */}
            <FadeIn delay={150}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 rounded-full flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-3">Cuisine soignée</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Une tradition familiale où le geste, le goût et la précision se transmettent de père en fils depuis plus de 15 ans.
                </p>
              </div>
            </FadeIn>

            {/* Pilier 3 */}
            <FadeIn delay={300}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 rounded-full flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-3">Service attentionné</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Une équipe passionnée, dévouée à rendre chaque moment chaleureux et mémorable.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section Cave remarquable */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <FadeIn>
            <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="font-serif text-3xl sm:text-4xl mb-6">
              Une cave <span className="text-gold italic">remarquable</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="separator-gold mx-auto mb-8" />
          </FadeIn>
          <FadeIn delay={300}>
            <p className="body-luxe max-w-2xl mx-auto">
              Plus de 650 références soigneusement choisies pour accompagner chaque moment,
              du grand classique aux découvertes confidentielles.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section CTA Réservation */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Fond */}
        <div className="absolute inset-0 bg-noir" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />

        <div className="relative container-narrow text-center">
          <FadeIn>
            <p className="subtitle text-gold/80 mb-4">Réservation</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-blanc mb-6 text-balance">
              Venez partager un agréable
              <br />
              <span className="italic">moment</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-gris-chaud mb-10 max-w-lg mx-auto">
              Réservez votre table et laissez-nous vous transporter dans un univers
              où chaque détail est pensé pour votre plaisir.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <a
              href="/reservation"
              className="btn-primary"
            >
              Réserver maintenant
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
