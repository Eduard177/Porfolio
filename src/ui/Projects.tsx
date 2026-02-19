import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    num: '01',
    title: 'AI Call Center Agent + Ops Dashboard',
    desc: 'Built an AI-powered call center workflow system for Newtech S.R.L. — full-stack delivery across a NestJS backend and a React Native (Expo) mobile KPI cockpit that operators use in real time.',
    tags: ['NestJS', 'React Native', 'Expo', 'PostgreSQL', 'AI workflows', 'TypeScript'],
    highlight: true,
    confidential: true,
  },
  {
    num: '02',
    title: 'Financial Services Platform',
    desc: 'High-volume transaction backend with 99.9% uptime, AWS S3-secured document storage, and a fast React/Vite interface optimised for operational clarity.',
    tags: ['NestJS', 'PostgreSQL', 'AWS S3', 'React', 'Vite', 'TypeScript'],
    confidential: true,
  },
  {
    num: '03',
    title: 'MangApp',
    desc: 'Consumer manga reading experience built for speed and polish — clean library management, smooth pagination, and a carefully crafted reading flow.',
    tags: ['React', 'TypeScript', 'Product UX'],
    link: 'https://github.com/Eduard177/MangApp',
  },
]

const LockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

export function Projects() {
  const headRef  = useScrollReveal({ threshold: 0.1 })
  const gridRef  = useScrollReveal({ threshold: 0.08, delay: 100 })
  const [featured, ...rest] = projects

  return (
    <section className="section" id="projects">
      <div className="container">
        <div ref={headRef}>
          <p className="section-label">Selected work</p>
          <h2 className="section-title">Full-stack builds that carry operational weight.</h2>
        </div>

        <div className="projects__grid" ref={gridRef}>
          {/* Featured card */}
          <div className="project-card project-card--wide reveal-child" style={{ '--child-i': 0 } as React.CSSProperties}>
            <div>
              <div className="project-card__header">
                <span className="project-card__num">{featured.num}</span>
                <span className="project-card__badge"><LockIcon /> Confidential</span>
              </div>
              <h3 className="project-card__title">{featured.title}</h3>
            </div>
            <div>
              <p className="project-card__desc">{featured.desc}</p>
              <div className="project-card__tags" style={{ marginTop: '1.2rem' }}>
                {featured.tags.map((t) => (
                  <span key={t} className={t === 'AI workflows' ? 'tag tag--accent' : 'tag'}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Rest */}
          {rest.map((p, i) => (
            <div key={p.num} className="project-card reveal-child" style={{ '--child-i': i + 1 } as React.CSSProperties}>
              <div className="project-card__header">
                <span className="project-card__num">{p.num}</span>
                {p.link ? (
                  <a className="project-card__link" href={p.link} target="_blank" rel="noreferrer">GitHub ↗</a>
                ) : (
                  <span className="project-card__badge"><LockIcon /> Confidential</span>
                )}
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
