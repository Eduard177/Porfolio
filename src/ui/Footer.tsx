export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">
          EP<span>.</span>
        </span>

        <div className="footer__links">
          <a href="mailto:eduarro2001@gmail.com">eduarro2001@gmail.com</a>
          <a href="https://www.linkedin.com/in/eduard-pichardo-rochet/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Eduard177" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <span className="footer__copy">
          &copy; {new Date().getFullYear()} Eduard Pichardo
        </span>
      </div>
    </footer>
  )
}
