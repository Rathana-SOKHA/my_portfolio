import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    // Close mobile menu when a link is clicked
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect which section is in view
      const sections = ["home", "about", "skills", "projects", "education", "contact", "philosophy"];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (top of section is in view)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">
            {/* <span className="logo-circle">SR</span> */}
            <span className="logo-text">Sokha Rathana</span>
          </a>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home" className={`nav-link ${activeSection === "home" ? "active" : ""}`} onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className={`nav-link ${activeSection === "about" ? "active" : ""}`} onClick={handleNavClick}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className={`nav-link ${activeSection === "skills" ? "active" : ""}`} onClick={handleNavClick}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={`nav-link ${activeSection === "projects" ? "active" : ""}`} onClick={handleNavClick}>
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a href="#education" className={`nav-link ${activeSection === "education" ? "active" : ""}`} onClick={handleNavClick}>
              Education
            </a>
          </li>
          
          <li className="nav-item">
            <a href="#philosophy" className={`nav-link ${activeSection === "philosophy" ? "active" : ""}`} onClick={handleNavClick}>
              Philosophy
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <a href="#contact" className="contact-btn" onClick={handleNavClick}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}
