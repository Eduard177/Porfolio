import { useEffect, useState } from 'react'

export function useCountUp(target: number, duration = 1500, decimals = 0) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    const el = document.getElementById('impact')
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

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

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [started, target, duration, decimals])

  return { value }
}
