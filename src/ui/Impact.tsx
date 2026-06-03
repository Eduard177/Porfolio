import { motion } from 'framer-motion'
import { useLocale } from '../context/LocaleContext'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ stat, index }: { stat: { number: number; suffix: string; label: string; context: string }; index: number }) {
  const { value } = useCountUp(stat.number, 1500, stat.number % 1 !== 0 ? 1 : 0)

  return (
    <motion.div
      className="impact__item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="impact__number">
        {value}<sup>{stat.suffix}</sup>
      </div>
      <div className="impact__label">{stat.label}</div>
      <div className="impact__context">{stat.context}</div>
    </motion.div>
  )
}

export default function Impact() {
  const { t } = useLocale()

  return (
    <section className="impact" id="impact">
      <div className="impact__grid">
        {t.impact.stats.map((stat, i) => (
          <StatItem key={i} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}
