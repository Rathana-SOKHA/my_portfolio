import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  // Lazy initializer: reads from localStorage synchronously to avoid flicker
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }))
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </div>
  ) 
}

export default App;
