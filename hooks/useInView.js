'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Hook pour détecter quand un élément entre dans le viewport
 * @param {Object} options - Options de l'IntersectionObserver
 * @param {number} options.threshold - Pourcentage visible requis (0-1)
 * @param {string} options.rootMargin - Marge autour du root
 * @param {boolean} options.triggerOnce - Déclencher une seule fois
 * @returns {[React.RefObject, boolean]} - [ref, isInView]
 */
export function useInView({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
} = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isInView]
}
