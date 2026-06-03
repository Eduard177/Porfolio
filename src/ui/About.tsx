import { motion } from 'framer-motion'
import { useLocale } from '../context/LocaleContext'

export default function About() {
  const { t } = useLocale()

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">{t.about.title}</div>
          <h2 className="section-title">{t.about.intro}</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
              {t.about.story.title}
            </h3>
            <p className="about__text">{t.about.story.text}</p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2.5rem', color: 'var(--text)' }}>
              {t.about.approach.title}
            </h3>
            <p className="about__text">{t.about.approach.text}</p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2.5rem', color: 'var(--text)' }}>
              {t.about.looking.title}
            </h3>
            <p className="about__text">{t.about.looking.text}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-value">4+</div>
                <div className="about__stat-label">Years Experience</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-value">99.9%</div>
                <div className="about__stat-label">Uptime Delivered</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-value">3</div>
                <div className="about__stat-label">Tech Ecosystems</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-value">2</div>
                <div className="about__stat-label">Languages</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
                {t.about.languages.title}
              </h3>
              <p className="about__text" style={{ marginBottom: '0.5rem' }}>{t.about.languages.spanish}</p>
              <p className="about__text">{t.about.languages.english}</p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
                {t.about.interests.title}
              </h3>
              <p className="about__text">{t.about.interests.text}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
