import { useEffect, useRef } from 'react'

interface Options {
  threshold?: number
  delay?: number
}

/**
 * Returns a ref to attach to any element.
 * When the element enters the viewport it receives the class `is-visible`,
 * which triggers the CSS entrance animation defined in style.css.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
) {
  const ref = useRef<T>(null)
  const { threshold = 0.15, delay = 0 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('reveal')
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])

  return ref
}
