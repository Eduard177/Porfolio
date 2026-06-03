import { useLocale } from '../context/LocaleContext'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          E<span>.</span>P
        </div>
        <div className="footer__links">
          <a href="mailto:eduarro2001@gmail.com">Email</a>
          <a href="https://github.com/Eduard177" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/eduard-pichardo-rochet-6a86131b5/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer__copy">{t.footer.copyright}</div>
      </div>
    </footer>
  )
}
