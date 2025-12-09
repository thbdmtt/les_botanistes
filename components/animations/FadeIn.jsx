'use client'

import { useInView } from '@/hooks/useInView'

/**
 * Composant pour animer les éléments avec un fade-in au scroll
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu à animer
 * @param {string} props.className - Classes CSS supplémentaires
 * @param {'up' | 'down' | 'left' | 'right' | 'none'} props.direction - Direction du mouvement
 * @param {number} props.delay - Délai en ms avant l'animation
 * @param {number} props.duration - Durée en ms de l'animation
 * @param {string} props.as - Élément HTML à utiliser
 */
export function FadeIn({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 600,
  as: Component = 'div',
}) {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const directionStyles = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: '',
  }

  const baseStyles = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translate(0, 0)' : undefined,
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  }

  return (
    <Component
      ref={ref}
      className={`${!isInView ? directionStyles[direction] : ''} ${className}`}
      style={baseStyles}
    >
      {children}
    </Component>
  )
}

/**
 * Groupe d'éléments avec animation staggerée
 */
export function FadeInStagger({
  children,
  className = '',
  staggerDelay = 100,
  direction = 'up',
  duration = 600,
}) {
  const [ref, isInView] = useInView({ threshold: 0.05 })

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <FadeIn
              key={index}
              direction={direction}
              delay={index * staggerDelay}
              duration={duration}
            >
              {child}
            </FadeIn>
          ))
        : children}
    </div>
  )
}
