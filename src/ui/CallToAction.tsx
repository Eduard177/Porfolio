import { motion } from 'framer-motion'
import { useLocale } from '../context/LocaleContext'

export default function CallToAction() {
  const { t } = useLocale()

  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta__inner">
            <div>
              <div className="section-label">{t.cta.label}</div>
              <h2 className="cta__title">{t.cta.title}</h2>
              <p className="cta__sub">{t.cta.subtitle}</p>
            </div>
            <div className="cta__actions">
              <a className="btn btn--primary" href="mailto:eduarro2001@gmail.com">
                {t.cta.primary}
              </a>
              <a className="btn btn--outline" href="https://github.com/Eduard177" target="_blank" rel="noopener noreferrer">
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
