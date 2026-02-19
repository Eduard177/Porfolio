import { useScrollReveal } from '../hooks/useScrollReveal'

const areas = [
  {
    icon: '⚡',
    title: 'AI-augmented ops',
    text: 'Call center automation with real-time KPI dashboards that eliminate handoff friction and cut resolution time.',
  },
  {
    icon: '🔧',
    title: 'Performance engineering',
    text: 'Measurable compression of service latency and query response times without sacrificing system resiliency.',
  },
  {
    icon: '📱',
    title: 'Full-stack product delivery',
    text: 'NestJS backends paired with polished React and React Native interfaces — shipped end-to-end.',
  },
]

export function Overview() {
  const headRef  = useScrollReveal({ threshold: 0.1 })
  const gridRef  = useScrollReveal({ threshold: 0.1, delay: 100 })

  return (
    <section className="section" id="overview">
      <div className="container">
        <div ref={headRef}>
          <p className="section-label">What I build</p>
          <h2 className="section-title">Systems that turn minutes into momentum.</h2>
          <p className="section-sub">
            I design and ship full-stack platforms that carry real operational weight —
            trusted by fintech and telecom clients to stay reliable under high volume.
          </p>
        </div>

        <div className="overview__grid" ref={gridRef}>
          {areas.map((a, i) => (
            <div
              key={a.title}
              className="overview-card reveal-child"
              style={{ '--child-i': i } as React.CSSProperties}
            >
              <div className="overview-card__icon">{a.icon}</div>
              <h3 className="overview-card__title">{a.title}</h3>
              <p className="overview-card__text">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
