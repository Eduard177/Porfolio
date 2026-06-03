import { useEffect, useState } from 'react'
import { useLocale } from '../context/LocaleContext'

export default function Nav() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const { t, locale, setLocale } = useLocale()

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setScrollProgress(Math.min(scrolled * 100, 100))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#work', label: t.nav.work },
    { href: '#stack', label: t.nav.stack },
    { href: '#experience', label: t.nav.experience },
    { href: '#about', label: t.nav.about },
  ]

  const cvPath = locale === 'es'
    ? '/Eduard_Pichardo_CV_ES_2026.pdf'
    : '/Eduard_Pichardo_CV_EN_2026.pdf'

  return (
    <nav className="nav">
      <div className="nav__progress" style={{ width: `${scrollProgress}%` }} />
      <div className="container nav__inner">
        <a href="/" className="nav__logo">
          E<span>.</span>P
        </a>

        <div className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className="nav__right">
          <button
            className="nav__lang-btn"
            onClick={() => setLocale(locale === 'en' ? 'es' : 'en')}
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </button>
          <a className="nav__cv" href={cvPath} download>
            {t.nav.cv}
          </a>
          <a className="nav__cta" href="mailto:eduarro2001@gmail.com">
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  )
}
