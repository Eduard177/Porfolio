import { createContext, useContext, type ReactNode } from 'react'
import { useTheme } from '../hooks/useTheme'

interface ThemeCtx {
  theme: 'dark' | 'light'
  toggle: (x: number, y: number) => void
}

const Ctx = createContext<ThemeCtx>({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const value = useTheme()
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useThemeCtx = () => useContext(Ctx)
