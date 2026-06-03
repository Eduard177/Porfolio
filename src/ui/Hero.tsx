import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from '../context/LocaleContext'
import { MapPin, Briefcase } from 'lucide-react'

interface TimelineNode {
  year: string
  title: string
  subtitle: string
  active: boolean
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { t } = useLocale()

  const timelineNodes: TimelineNode[] = [
    { year: '2021', title: 'XpertCode', subtitle: 'Intern', active: false },
    { year: '2023', title: 'Naxmek', subtitle: 'Backend Contract', active: false },
    { year: '2024', title: 'Newtech', subtitle: 'Software Engineer', active: true },
    { year: 'NOW', title: 'Open to Work', subtitle: 'Senior Full-Stack', active: true },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = []
    let mouse = { x: -1000, y: -1000 }
    let w = 0, h = 0
    let animProgress = 0
    let animStartTime: number | null = null
    const animDuration = 3000
    let isMobile = false

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
      isMobile = w < 768
    }

    const initParticles = () => {
      particles = []
      const count = Math.floor((w * h) / 10000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.4 + 0.1,
        })
      }
    }

    const drawTimeline = (progress: number) => {
      if (!ctx || isMobile) return
      const centerX = w * 0.78
      const startY = h * 0.15
      const endY = h * 0.85
      const spacing = (endY - startY) / (timelineNodes.length - 1)

      // Line background
      ctx.beginPath()
      ctx.moveTo(centerX, startY)
      ctx.lineTo(centerX, endY)
      ctx.strokeStyle = 'rgba(255,255,255,0.04)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Glowing line — animated top to bottom
      const lineEnd = startY + (endY - startY) * progress
      const grad = ctx.createLinearGradient(0, startY, 0, lineEnd)
      grad.addColorStop(0, 'rgba(139, 92, 246, 0.8)')
      grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.4)')
      grad.addColorStop(1, 'rgba(139, 92, 246, 0.1)')

      ctx.beginPath()
      ctx.moveTo(centerX, startY)
      ctx.lineTo(centerX, lineEnd)
      ctx.strokeStyle = grad
      ctx.lineWidth = 2.5
      ctx.shadowColor = 'rgba(139, 92, 246, 0.6)'
      ctx.shadowBlur = 12
      ctx.stroke()
      ctx.shadowBlur = 0

      // Nodes
      timelineNodes.forEach((node, i) => {
        const y = startY + spacing * i
        const nodeProgress = i / (timelineNodes.length - 1)
        const isVisible = progress > nodeProgress * 0.7
        const isMouseNear = Math.abs(mouse.x - centerX) < 60 && Math.abs(mouse.y - y) < 30

        if (!isVisible && !isMouseNear) return

        const alpha = isVisible ? Math.min((progress - nodeProgress * 0.7) * 4, 1) : 0.3

        // Outer glow ring
        if (node.active || isMouseNear) {
          ctx.beginPath()
          ctx.arc(centerX, y, 24, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(139, 92, 246, ${0.15 * alpha})`
          ctx.fill()

          ctx.beginPath()
          ctx.arc(centerX, y, 16, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.4 * alpha})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }

        // Main dot
        ctx.beginPath()
        ctx.arc(centerX, y, isMouseNear ? 8 : 6, 0, Math.PI * 2)
        ctx.fillStyle = node.active
          ? `rgba(139, 92, 246, ${alpha})`
          : `rgba(255, 255, 255, ${0.5 * alpha})`
        ctx.fill()

        if (node.active && isVisible) {
          ctx.beginPath()
          ctx.arc(centerX, y, 12, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.6 * alpha})`
          ctx.lineWidth = 2
          ctx.stroke()
        }

        // Year label (left side)
        ctx.font = `700 ${isMouseNear ? 14 : 13}px "JetBrains Mono", monospace`
        ctx.fillStyle = `rgba(255,255,255,${0.8 * alpha})`
        ctx.textAlign = 'right'
        ctx.fillText(node.year, centerX - 20, y + 5)

        // Title + subtitle (right side)
        if (isMouseNear || (node.active && isVisible)) {
          ctx.font = `600 14px "Inter", sans-serif`
          ctx.fillStyle = `rgba(255,255,255,${0.95 * alpha})`
          ctx.textAlign = 'left'
          ctx.fillText(node.title, centerX + 20, y - 2)
          ctx.font = `500 11px "JetBrains Mono", monospace`
          ctx.fillStyle = `rgba(139, 92, 246, ${0.9 * alpha})`
          ctx.fillText(node.subtitle, centerX + 20, y + 14)
        }
      })
    }

    const animate = (timestamp: number) => {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      // Animate timeline from top to bottom
      if (animStartTime === null) animStartTime = timestamp
      const elapsed = timestamp - animStartTime
      animProgress = Math.min(elapsed / animDuration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - animProgress, 3)

      // Particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          p.x -= dx * 0.01
          p.y -= dy * 0.01
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`
        ctx.fill()
      })

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.05 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      drawTimeline(eased)
      animId = requestAnimationFrame(animate)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const onMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    resize()
    initParticles()
    animId = requestAnimationFrame(animate)

    window.addEventListener('resize', () => { resize(); initParticles() })
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  const cvPath = '/Eduard_Pichardo_CV_EN_2026.pdf'

  return (
    <section className="hero" id="hero">
      <div className="hero__canvas-wrap">
        <canvas ref={canvasRef} />
      </div>
      <div className="hero__glow" />

      <div className="container hero__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            {t.hero.available}
          </div>
        </motion.div>

        <motion.div
          className="hero__availability"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="hero__avail-pill">{t.hero.timezone}</span>
          <span className="hero__avail-pill">{t.hero.workType}</span>
          <span className="hero__avail-pill">{t.hero.techStack}</span>
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t.hero.name}<br />
          <span className="accent">{t.hero.lastName}</span>
        </motion.h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a className="btn btn--primary" href="mailto:eduarro2001@gmail.com">
            {t.hero.startProject}
          </a>
          <a className="btn btn--outline" href={cvPath} download>
            {t.hero.downloadCV}
          </a>
          <a className="btn btn--outline" href="https://github.com/Eduard177" target="_blank" rel="noopener noreferrer">
            {t.hero.github}
          </a>
        </motion.div>

        <motion.div
          className="hero__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="hero__meta-item">
            <MapPin size={14} strokeWidth={2} />
            {t.hero.location}
          </span>
          <span className="hero__meta-item">
            <Briefcase size={14} strokeWidth={2} />
            {t.hero.experience}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
