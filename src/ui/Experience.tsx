import { motion } from 'framer-motion'
import { useLocale } from '../context/LocaleContext'

export default function Experience() {
  const { t } = useLocale()

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">{t.experience.label}</div>
          <h2 className="section-title">{t.experience.title}</h2>
        </motion.div>

        <div className="experience__list">
          {t.experience.roles.map((role, i) => (
            <motion.div
              key={i}
              className="exp-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="exp-item__meta">
                <span className="exp-item__company">{role.company}</span>
                <span className="exp-item__period">{role.period}</span>
              </div>
              <div className="exp-item__role">{role.role}</div>
              <div className="exp-item__highlights">
                {role.highlights.map((h, j) => (
                  <div key={j} className="exp-item__highlight">{h}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
