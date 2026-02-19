import { useScrollReveal } from '../hooks/useScrollReveal'

const groups = [
  {
    label: 'Primary stack',
    items: ['TypeScript', 'JavaScript', 'NestJS', 'Node.js', 'React', 'React Native', 'Vite', 'PostgreSQL'],
  },
  {
    label: 'Enterprise stack',
    items: ['Java 17', 'Spring Boot', 'C#', '.NET Core', 'Entity Framework', 'SQL Server', 'Oracle DB'],
  },
  {
    label: 'Infra & tooling',
    items: ['AWS S3', 'Docker', 'Git', 'GitHub', 'GitLab', 'Jira', 'Jest', 'xUnit', 'Maven', 'pnpm'],
  },
]

export function Stack() {
  const headRef = useScrollReveal({ threshold: 0.1 })
  const gridRef = useScrollReveal({ threshold: 0.1, delay: 100 })

  return (
    <section className="section" id="stack">
      <div className="container">
        <div ref={headRef}>
          <p className="section-label">Stack fluency</p>
          <h2 className="section-title">Built for scale, tested for reliability.</h2>
          <p className="section-sub">
            Fluent across the full JS/TS ecosystem and Java/C# enterprise stacks —
            with hands-on cloud and CI/CD experience.
          </p>
        </div>

        <div className="stack__grid" ref={gridRef}>
          {groups.map((g, i) => (
            <div
              key={g.label}
              className="stack-card reveal-child"
              style={{ '--child-i': i } as React.CSSProperties}
            >
              <p className="stack-card__label">{g.label}</p>
              <div className="stack-card__items">
                {g.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
