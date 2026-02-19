import { useState, useEffect, useCallback } from 'react'

type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = useCallback(
    (originX: number, originY: number) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'

      // ── Telegram-style radial clip-path wipe ──────────────────
      if (!document.startViewTransition) {
        setTheme(next)
        return
      }

      // Store origin on root so CSS can read it
      document.documentElement.style.setProperty('--vt-x', `${originX}px`)
      document.documentElement.style.setProperty('--vt-y', `${originY}px`)

      const transition = document.startViewTransition(() => {
        setTheme(next)
        document.documentElement.setAttribute('data-theme', next)
      })

      transition.ready.then(() => {
        const maxRadius = Math.hypot(
          Math.max(originX, window.innerWidth - originX),
          Math.max(originY, window.innerHeight - originY),
        )

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${originX}px ${originY}px)`,
              `circle(${maxRadius}px at ${originX}px ${originY}px)`,
            ],
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        )
      })
    },
    [theme],
  )

  return { theme, toggle }
}
