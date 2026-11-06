import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Tema awal sudah ditentukan script anti-flash di index.html
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light',
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      /* localStorage bisa gagal di mode privat — abaikan */
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Latar dasar silver metallic untuk mode gelap / platinum untuk mode terang */}
      <div className="pointer-events-none fixed inset-0 -z-50 bg-platinum-light transition-colors duration-500 dark:bg-silver-dark" />

      {/* Grain overlay tipis (3–5%) agar kesan metalik premium */}
      <div
        aria-hidden
        className="bg-noise pointer-events-none fixed inset-0 -z-40 opacity-[0.04]"
      />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
