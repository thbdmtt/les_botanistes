'use client'

import { cn } from '@/lib/utils'
import { FadeIn } from '@/components/animations'

export default function PageHeader({
  subtitle,
  title,
  description,
  centered = true,
  className,
}) {
  return (
    <header
      className={cn(
        'pt-32 pb-16 sm:pt-40 sm:pb-20',
        centered && 'text-center',
        className
      )}
    >
      <div className={centered ? 'container-narrow' : 'container-luxe'}>
        {subtitle && (
          <FadeIn>
            <p className="subtitle mb-4">{subtitle}</p>
          </FadeIn>
        )}

        <FadeIn delay={100}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6">
            {title}
          </h1>
        </FadeIn>

        {/* Séparateur décoratif */}
        <FadeIn delay={200}>
          <div className={cn('flex items-center gap-4 mb-6', centered && 'justify-center')}>
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </FadeIn>

        {description && (
          <FadeIn delay={300}>
            <p className="body-luxe max-w-2xl mx-auto">
              {description}
            </p>
          </FadeIn>
        )}
      </div>
    </header>
  )
}
