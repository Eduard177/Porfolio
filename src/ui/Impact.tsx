import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { number: 20,   decimals: 0, sup: '%', label: 'Faster ticket resolution', context: 'Telecom ops · Verizon' },
  { number: 15,   decimals: 0, sup: '%', label: 'Response time reduction',  context: 'SQL Server query optimisation' },
  { number: 99.9, decimals: 1, sup: '%', label: 'Uptime maintained',        context: 'Financial services platform' },
  { number: 30,   decimals: 0, sup: '%', label: 'Test coverage lift',       context: 'Jest · strict code review' },
]

function StatItem({ stat }: { stat: typeof stats[number] }) {
  const { ref, value } = useCountUp<HTMLDivElement>({
    target: stat.number,
    duration: 1500,
    decimals: stat.decimals,
  })

  return (
    <div className="impact__item" ref={ref}>
      <div className="impact__number">
        {value}
        <sup>{stat.sup}</sup>
      </div>
      <p className="impact__label">{stat.label}</p>
      <p className="impact__context">{stat.context}</p>
    </div>
  )
}

export function Impact() {
  return (
    <section className="impact" id="impact">
      <div className="container">
        <div className="impact__grid">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
