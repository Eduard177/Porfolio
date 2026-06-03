import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import en from '../locales/en.json'
import es from '../locales/es.json'

type Locale = 'en' | 'es'
type Translations = typeof en

const translations: Record<Locale, Translations> = { en, es }

interface LocaleCtx {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Translations
}

const Ctx = createContext<LocaleCtx>({
  locale: 'en',
  setLocale: () => {},
  t: en,
})

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored === 'en' || stored === 'es') return stored
    const browserLang = navigator.language.slice(0, 2)
    return browserLang === 'es' ? 'es' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem('locale', locale)
  }, [locale])

  const setLocale = (l: Locale) => setLocaleState(l)

  return (
    <Ctx.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLocale = () => useContext(Ctx)
