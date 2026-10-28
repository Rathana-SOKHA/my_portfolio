import React, { useState, useEffect } from "react"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import ScrollProgress from "./components/animations/ScrollProgress"
import ScrollReveal from "./components/animations/ScrollReveal"
import IntroScreen from "./components/ui/IntroScreen"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Contact from "./sections/Contact"

function App() {
  // Lazy initializer: reads from localStorage synchronously to avoid flicker
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }))
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <div className="App">
      <IntroScreen onComplete={handleIntroComplete} />
      <div style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <ScrollProgress />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero isActive={!showIntro} />
        
        <ScrollReveal animation="fade-up" delay={100} duration={800}>
          <About />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={150} duration={800}>
          <Skills />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={100} duration={800}>
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={100} duration={800}>
          <Education />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={100} duration={800}>
          <Contact />
        </ScrollReveal>
        
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  ) 
}

export default App;
