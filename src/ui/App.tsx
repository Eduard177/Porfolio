import { ThemeProvider } from '../context/ThemeContext'
import { Nav } from './Nav'
import { Hero } from './Hero'
import { Overview } from './Overview'
import { Impact } from './Impact'
import { Projects } from './Projects'
import { Stack } from './Stack'
import { Experience } from './Experience'
import { CallToAction } from './CallToAction'
import { Footer } from './Footer'

export function App() {
  return (
    <ThemeProvider>
      <Nav />
      <main>
        <Hero />
        <Impact />
        <Overview />
        <Projects />
        <Stack />
        <Experience />
        <CallToAction />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
