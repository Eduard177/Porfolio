import { useScrollReveal } from '../hooks/useScrollReveal'

export function CallToAction() {
  const ref = useScrollReveal({ threshold: 0.15 })

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta" ref={ref}>
          <div className="cta__inner">
            <div>
              <p className="section-label">Let's work together</p>
              <h2 className="cta__title">
                Ready to compress your operational timelines?
              </h2>
              <p className="cta__sub">
                I build full-stack platforms that remove friction, protect
                revenue, and deliver measurable performance gains. Let's talk.
              </p>
            </div>
            <div className="cta__actions">
              <a className="btn btn--primary" href="mailto:eduarro2001@gmail.com">
                Book a discovery call
              </a>
              <a
                className="btn btn--outline"
                href="https://github.com/Eduard177"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
