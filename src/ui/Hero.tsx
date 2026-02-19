import { useScrollReveal } from '../hooks/useScrollReveal'

const bars = [
  { label: 'Ticket resolution speed', value: '+20%', width: '80%' },
  { label: 'Query response time',      value: '+15%', width: '62%' },
  { label: 'Test coverage lift',       value: '+30%', width: '94%' },
]

export function Hero() {
  const leftRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })
  const rightRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1, delay: 200 })

  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">

        {/* Left */}
        <div ref={leftRef}>
          {/* Availability eyebrow */}
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Available for new projects
          </div>

          {/* Info strip */}
          <div className="hero__availability">
            <span className="hero__avail-pill">UTC-4 (AST)</span>
            <span className="hero__avail-pill">Full-time remote / Contract</span>
            <span className="hero__avail-pill">TypeScript · NestJS · React</span>
          </div>

          <h1 className="hero__name">
            Eduard
            <em>Pichardo</em>
          </h1>

          <p className="hero__tagline">
            Full-stack engineer who builds revenue-critical platforms across
            fintech, telecom, and SaaS — turning operational bottlenecks into
            measurable performance gains.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="mailto:eduarro2001@gmail.com">
              Start a project
            </a>
            <a
              className="btn btn--outline"
              href="/Eduard_Pichardo_CV_EN.pdf"
              download
            >
              Download CV ↓
            </a>
            <a
              className="btn btn--outline"
              href="https://github.com/Eduard177"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <div className="hero__meta">
            <span className="hero__meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              Dominican Republic · Remote
            </span>
            <span className="hero__meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              5+ yrs experience
            </span>
          </div>
        </div>

        {/* Right card */}
        <div className="hero__card" ref={rightRef}>
          <p className="hero__card-label">Performance record · 2021 → Now</p>

          <div className="hero__bars">
            {bars.map((b) => (
              <div key={b.label} className="hero__bar-row">
                <div className="hero__bar-info">
                  <span>{b.label}</span>
                  <span>{b.value}</span>
                </div>
                <div className="hero__bar-track">
                  <div className="hero__bar-fill" style={{ width: b.width }} />
                </div>
              </div>
            ))}
          </div>

          <div className="hero__card-divider" />

          <p className="hero__card-footer">
            99.9% uptime on financial transaction processing.
            Cross-domain operator: fintech · telecom · AI ops.
          </p>
        </div>

      </div>
    </section>
  )
}
