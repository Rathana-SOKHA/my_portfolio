import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const navItems = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "skills", label: "Skills", num: "03" },
  { id: "projects", label: "Projects", num: "04" },
  { id: "education", label: "Education", num: "05" },
];

export default function Navbar({ theme, toggleTheme }) {
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
      for (let section of sections) {
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
        {/* HUD Corner Brackets */}
        <div className="nav-corner nav-corner-tl" aria-hidden="true" />
        <div className="nav-corner nav-corner-tr" aria-hidden="true" />
        <div className="nav-corner nav-corner-bl" aria-hidden="true" />
        <div className="nav-corner nav-corner-br" aria-hidden="true" />

        <div className="cyber-navbar-container">
          {/* Cyber Brand Logo */}
          <div className="cyber-logo-wrapper">
            <a href="#home" className="cyber-logo" onClick={handleNavClick}>
              {/* <span className="logo-bracket">[</span> */}
              {/* <span className="logo-tag">&lt;/&gt;</span> */}
              <span className="logo-name">RATHANA</span>
              <span className="logo-accent">.DEV</span>
              {/* <span className="logo-bracket">]</span> */}
            </a>
          </div>

          {/* Navigation Links */}
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
                  {activeSection === item.id && <span className="nav-active-pip" />}
                </a>
              </li>
            ))}

            {/* Mobile-Only Actions inside dropdown */}
            <li className="cyber-nav-item mobile-only-cta">
              <a href="#contact" className="cyber-hire-btn mobile-btn" onClick={handleNavClick}>
                <span className="hire-btn-text">LET'S TALK</span>
                <span className="hire-btn-arrow">&gt;</span>
              </a>
            </li>
          </ul>

          {/* Right Action Group */}
          <div className="cyber-nav-actions">
            {/* Theme Toggle */}
            <button
              className="cyber-theme-toggle"
              onClick={toggleTheme}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-label="Toggle theme"
              aria-pressed={theme === "dark"}
              data-theme={theme}
            >
              <span className="toggle-track" aria-hidden="true">
                <span className="toggle-thumb" />
              </span>
            </button>

            {/* Desktop CTA Button */}
            <a href="#contact" className="cyber-hire-btn desktop-btn" onClick={handleNavClick}>
              <span className="hire-btn-text">HIRE ME</span>
              <span className="hire-btn-arrow">&gt;</span>
            </a>

            {/* Hamburger Button */}
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