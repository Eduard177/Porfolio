import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { number: '20', sup: '%', label: 'Faster ticket resolution', context: 'Telecom ops · Verizon' },
  { number: '15', sup: '%', label: 'Response time reduction',  context: 'SQL Server query optimisation' },
  { number: '99.9', sup: '%', label: 'Uptime maintained',      context: 'Financial services platform' },
  { number: '30', sup: '%', label: 'Test coverage lift',       context: 'Jest · strict code review' },
]

export function Impact() {
  const ref = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="impact" id="impact">
      <div className="container">
        <div className="impact__grid" ref={ref}>
          {stats.map((s, i) => (
            <div key={s.label} className="impact__item reveal-child" style={{ '--child-i': i } as React.CSSProperties}>
              <div className="impact__number">
                {s.number}
                <sup>{s.sup}</sup>
              </div>
              <p className="impact__label">{s.label}</p>
              <p className="impact__context">{s.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
