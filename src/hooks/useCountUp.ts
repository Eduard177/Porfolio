import { useEffect, useRef, useState } from 'react'

interface Options {
  target: number
  duration?: number
  decimals?: number
}

/**
 * Animates a number from 0 to `target` over `duration` ms (default 1500ms)
 * using an ease-out curve. Starts when the returned `ref` element enters the viewport.
 */
export function useCountUp<T extends HTMLElement = HTMLElement>({ target, duration = 1500, decimals = 0 }: Options) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rafId: number
    let start: number | null = null

    function easeOut(t: number) {
      return 1 - Math.pow(1 - t, 3)
    }

    function tick(timestamp: number) {
      if (start === null) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOut(progress)
      setValue(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          rafId = requestAnimationFrame(tick)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [target, duration, decimals])

  return { ref, value }
}
