import { useCallback, useEffect, useState } from 'react'
import Loader from './components/Loader.jsx'
import CursorTrail from './components/CursorTrail.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { NAV_SECTIONS } from './data.js'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState('hero')

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (loading) return
    const sections = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [loading])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto'
  }, [loading])

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <CursorTrail />
      <Nav active={active} onNavigate={handleNavigate} />
      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
