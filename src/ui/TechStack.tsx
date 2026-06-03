import { motion } from 'framer-motion'
import { useLocale } from '../context/LocaleContext'
import {
  Code2, Database, Cloud, GitBranch, Brain,
  Coffee, Server, Layers, Box, Terminal,
  Zap, CheckSquare, FileText, Package, Cpu,
  Smartphone
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  'TypeScript': Code2, 'JavaScript': Code2, 'NestJS': Server, 'Node.js': Server,
  'React': Code2, 'React Native': Smartphone, 'Angular': Code2, 'Vite': Zap,
  'PostgreSQL': Database, 'Java 17': Coffee, 'Spring Boot': Layers, 'C#': Code2,
  '.NET Core': Box, 'Entity Framework': Database, 'SQL Server': Database,
  'Oracle DB': Database, 'Kotlin': Code2, 'AWS S3': Cloud, 'AWS EC2': Cloud,
  'Docker': Box, 'Git': GitBranch, 'GitHub': GitBranch, 'GitLab': GitBranch,
  'Jira': FileText, 'Jest': CheckSquare, 'xUnit': CheckSquare, 'Maven': Package,
  'pnpm': Terminal, 'Claude Code': Brain, 'GitHub Copilot': Brain,
  'Gemini AI': Brain, 'OpenCode': Brain, 'Codex': Cpu,
}

export default function TechStack() {
  const { t } = useLocale()

  return (
    <section className="section" id="stack">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">{t.stack.label}</div>
          <h2 className="section-title">{t.stack.title}</h2>
          <p className="section-sub">{t.stack.subtitle}</p>
        </motion.div>

        <div className="stack__grid">
          {t.stack.groups.flatMap((group, gi) =>
            group.items.map((item, ii) => {
              const Icon = iconMap[item] || Box
              return (
                <motion.div
                  key={`${gi}-${ii}`}
                  className="stack-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (gi * 4 + ii) * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="stack-item__icon" size={28} strokeWidth={1.5} />
                  <span className="stack-item__name">{item}</span>
                </motion.div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}
