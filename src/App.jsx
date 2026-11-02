import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/animations/ScrollProgress";
import IntroScreen from "./components/ui/IntroScreen";
import SectionDivider from "./components/ui/SectionDivider";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

// Custom hook for visitor tracking
import useVisitorTracking from "./hooks/useVisitorTracking";


function App() {

  // Call the custom hook to track visitors
  useVisitorTracking();


  // Lazy initializer: reads from localStorage synchronously to avoid flicker
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      <IntroScreen onComplete={handleIntroComplete} />
      <div style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero isActive={!showIntro} />
          
          <SectionDivider label="02 // PROFILE_DOSSIER" />
          <About />
          
          <SectionDivider label="03 // TECH_ARSENAL" />
          <Skills />
          
          <SectionDivider label="04 // FEATURED_BUILDS" />
          <Projects />
          
          <SectionDivider label="05 // ACADEMIC_TRAJECTORY" />
          <Education />
          
          <SectionDivider label="06 // SECURE_TRANSMISSION" />
          <Contact />
        </main>
        
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
