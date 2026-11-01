import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import "../../styles/Navbar.css";

const navItems = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "skills", label: "Skills", num: "03" },
  { id: "projects", label: "Projects", num: "04" },
  { id: "education", label: "Education", num: "05" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="cyber-navbar-wrapper">
      <nav className={`cyber-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="cyber-navbar-container">
          {/* Cyber Brand Logo */}
          <div className="cyber-logo-wrapper">
            <a href="#home" className="cyber-logo" onClick={handleNavClick}>
              <span className="logo-name">RATHANA</span>
              <span className="logo-accent">.DEV</span>
            </a>
          </div>

          {/* Unified Navigation Capsule (Matching Reference Image) */}
          <div className="cyber-capsule-wrapper">
            <ul className={`cyber-nav-menu ${isOpen ? "active" : ""}`}>
              {navItems.map((item) => (
                <li key={item.id} className="cyber-nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`cyber-nav-link ${activeSection === item.id ? "active" : ""}`}
                    onClick={handleNavClick}
                  >
                    <span className="nav-item-num">{item.num}</span>
                    <span className="nav-item-slash">//</span>
                    <span className="nav-item-label">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.span
                        className="nav-active-pip"
                        layoutId="activeNavPip"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}

              {/* Slanted Vents Chamber (Desktop only inside capsule) */}
              <li className="cyber-nav-vents-item" aria-hidden="true">
                <div className="capsule-vents-grill">
                  <span className="vent-bar" />
                  <span className="vent-bar" />
                  <span className="vent-bar" />
                  <span className="vent-bar" />
                </div>
              </li>

              {/* Golden Pill Hire Me CTA Button */}
              <li className="cyber-nav-cta-item">
                <a href="#contact" className="nav-capsule-cta" onClick={handleNavClick}>
                  <span className="capsule-cta-text">HIRE ME</span>
                  <span className="capsule-cta-arrow">&gt;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Action Group: Mobile Hamburger */}
          <div className="cyber-nav-actions">
            {/* Mobile Hamburger Button */}
            <button
              className={`cyber-hamburger ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
