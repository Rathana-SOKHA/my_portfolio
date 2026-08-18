import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import ScrollReveal from "./components/ScrollReveal"
import IntroScreen from "./components/IntroScreen"

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
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <HeroSection />
        
        <ScrollReveal animation="fade-up" delay={100} duration={800}>
          <About />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={150} duration={800}>
          <Skills />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={100} duration={800}>
          <Projects />
        </ScrollReveal>
        
        <Education />
        
        <ScrollReveal animation="fade-up" delay={100} duration={800}>
          <Contact />
        </ScrollReveal>
        
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  ) 
}

export default App;
