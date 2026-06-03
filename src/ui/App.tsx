import Nav from './Nav'
import Hero from './Hero'
import Impact from './Impact'
import Projects from './Projects'
import TechStack from './TechStack'
import Experience from './Experience'
import About from './About'
import CallToAction from './CallToAction'
import Footer from './Footer'

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Impact />
        <Projects />
        <TechStack />
        <Experience />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
