import { useScrollReveal } from '../hooks/useScrollReveal'

const roles = [
  {
    company: 'Newtech S.R.L.',
    role: 'Software Engineer',
    period: 'Sep 2021 — Present',
    highlights: [
      'Designed and built a financial services platform (NestJS + PostgreSQL + AWS S3 + React) processing high-volume transactions at 99.9% uptime.',
      'Built an AI-powered call center agent and React Native mobile ops dashboard — end-to-end full-stack delivery.',
      'Improved Verizon telecom platform ticket resolution time by 20% and cut SQL Server response time by 15%.',
      'Lifted unit test coverage by 30% through Jest expansion and stricter code review standards.',
    ],
  },
  {
    company: 'Naxmek Business S.R.L.',
    role: 'Backend Engineer (Contract)',
    period: 'May 2023 — Sep 2023',
    highlights: [
      'Built and maintained RESTful APIs for business management using C# and .NET Core.',
      'Implemented EF Core data access layers and a full xUnit test suite.',
    ],
  },
  {
    company: 'XpertCode',
    role: 'Software Developer Intern',
    period: 'Feb 2021 — Sep 2021',
    highlights: [
      'Developed a NestJS web-scraping API to validate government tax identifiers (RNC/NCF).',
      'Built reusable Vue.js/Nuxt.js UI components, improving frontend delivery efficiency by 40%.',
      'Designed and managed the PostgreSQL database schema for scalability.',
    ],
  },
]

export function Experience() {
  const headRef = useScrollReveal({ threshold: 0.1 })
  const listRef = useScrollReveal({ threshold: 0.05, delay: 80 })

  return (
    <section className="section" id="experience">
      <div className="container">
        <div ref={headRef}>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Operational depth across regulated industries.</h2>
        </div>

        <div className="experience__list" ref={listRef}>
          {roles.map((r, i) => (
            <div
              key={r.company}
              className="exp-item reveal-child"
              style={{ '--child-i': i } as React.CSSProperties}
            >
              <div className="exp-item__meta">
                <span className="exp-item__company">{r.company}</span>
                <span className="exp-item__period">{r.period}</span>
              </div>
              <p className="exp-item__role">{r.role}</p>
              <div className="exp-item__highlights">
                {r.highlights.map((h) => (
                  <p key={h} className="exp-item__highlight">{h}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
