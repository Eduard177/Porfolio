import { motion } from 'framer-motion'
import { useLocale } from '../context/LocaleContext'
import { Lock, ExternalLink } from 'lucide-react'

export default function Projects() {
  const { t } = useLocale()

  return (
    <section className="section projects" id="work">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">{t.projects.label}</div>
          <h2 className="section-title">{t.projects.title}</h2>
        </motion.div>
      </div>

      <div className="projects__track">
        {t.projects.items.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="project-card__header">
              <span className="project-card__num">{project.num}</span>
              {project.link && (
                <a className="project-card__link" href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                  GitHub
                </a>
              )}
              {project.confidential && (
                <span className="project-card__badge">
                  <Lock size={12} />
                  Confidential
                </span>
              )}
            </div>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.desc}</p>
            <div className="project-card__tags">
              {project.tags.map((tag, j) => (
                <span key={j} className={`tag${tag.toLowerCase().includes('ai') ? ' tag--accent' : ''}`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
