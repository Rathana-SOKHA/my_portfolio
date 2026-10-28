import React, { useState, useEffect } from 'react';
import '../../styles/Footer.css';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: '01 // Home', url: '#home' },
    { name: '02 // About', url: '#about' },
    { name: '03 // Skills', url: '#skills' },
    { name: '04 // Projects', url: '#projects' },
    { name: '05 // Education', url: '#education' },
    { name: '06 // Contact', url: '#contact' }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', label: 'GitHub', url: 'https://github.com/Rathana-SOKHA' },
    { icon: 'fab fa-telegram', label: 'Telegram', url: 'https://t.me/rathana_dev' },
    { icon: 'fab fa-facebook', label: 'Facebook', url: 'https://www.facebook.com/Rathanacoding' }
  ];

  return (
    <footer className="cyber-footer">
      <div className="footer-top-line" aria-hidden="true" />

      <div className="cyber-footer-container">
        {/* Main Footer Row */}
        <div className="footer-hud-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-cyber-logo">
              <span className="logo-bracket">[</span>
              <span className="logo-tag">&lt;/&gt;</span>
              <span className="logo-name">RATHANA</span>
              <span className="logo-accent">.DEV</span>
              <span className="logo-bracket">]</span>
            </a>
            <p className="footer-tagline">
              BUILDING DIGITAL SOLUTIONS THAT MAKE AN IMPACT. CLEAN CODE. SMART DESIGN. BETTER EXPERIENCES.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">// SYSTEM_INDEX</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="footer-nav-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Network */}
          <div className="footer-connect-col">
            <h4 className="footer-col-title">// SIGNAL_RELAYS</h4>
            <div className="footer-social-buttons">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="footer-social-chip"
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon} />
                  <span>{social.label.toUpperCase()}</span>
                </a>
              ))}
            </div>

            <div className="footer-direct-contact">
              <span className="direct-label">DIRECT EMAIL:</span>
              <a href="mailto:rathanasokha26@gmail.com" className="direct-email">
                rathanasokha26@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-hud">
            <span>&copy; {currentYear} SOKHA RATHANA. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="footer-crosshairs" aria-hidden="true">
            <span>+</span><span>+</span><span>+</span>
          </div>

          <div className="dev-credit-hud">
            <span>BUILT WITH REACT & TAILWIND // HOSTED ON VITE</span>
          </div>
        </div>
      </div>

      {/* Cyber Back to Top Button */}
      {showBackToTop && (
        <button
          className="cyber-back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to Top"
          aria-label="Scroll to top of page"
        >
          <span className="top-arrow">↑</span>
          <span className="top-text">TOP</span>
        </button>
      )}
    </footer>
  );
}
