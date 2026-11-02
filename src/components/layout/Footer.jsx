import React from 'react';
import '../../styles/Footer.css';
import ScrollReveal from '../animations/ScrollReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Education', url: '#education' }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', label: 'GitHub', url: 'https://github.com/Rathana-SOKHA' },
    { icon: 'fab fa-telegram', label: 'Telegram', url: 'https://t.me/rathana_dev' },
    { icon: 'fab fa-facebook', label: 'Facebook', url: 'https://www.facebook.com/Rathanacoding' }
  ];

  return (
    <footer className="cyber-footer">
      <div className="footer-top-line" aria-hidden="true" />

      <ScrollReveal animation="fade-up" duration={0.8} threshold={0.1}>
        <div className="cyber-footer-container">
          <div className="footer-header">
            <p className="footer-eyebrow">
              <span aria-hidden="true">+</span> PORTFOLIO // TRANSMISSION_END
            </p>
            <div className="footer-status">
              <span className="footer-status-dot" aria-hidden="true" />
              AVAILABLE FOR PROJECTS
            </div>
          </div>

          <div className="footer-hud-grid">
            <div className="footer-brand-col">
              <a href="#home" className="footer-cyber-logo">
                <span className="logo-bracket">[</span>
                <span className="logo-tag">&lt;/&gt;</span>
                <span className="logo-name">RATHANA</span>
                <span className="logo-accent">.DEV</span>
                <span className="logo-bracket">]</span>
              </a>
              <p className="footer-brand-title">LET’S BUILD SOMETHING<br />MEANINGFUL.</p>
              <p className="footer-tagline">
                Clean code. Thoughtful design.<br />
                Better digital experiences.
              </p>
            </div>

            <div className="footer-nav-col">
              <h2 className="footer-col-title"><span>01</span> SYSTEM_INDEX</h2>
              <ul className="footer-links-list">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} className="footer-nav-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-connect-col">
              <h2 className="footer-col-title"><span>02</span> SIGNAL_RELAYS</h2>
              <div className="footer-social-buttons">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className="footer-social-chip"
                    title={social.label}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon} />
                    <span>{social.label.toUpperCase()}</span>
                  </a>
                ))}
              </div>

              <div className="footer-direct-contact">
                <span className="direct-label">HAVE A PROJECT IN MIND?</span>
                <a href="mailto:rathanasokha26@gmail.com" className="direct-email">
                  LET’S TALK <span aria-hidden="true">↗</span>
                </a>
                <a href="mailto:rathanasokha26@gmail.com" className="footer-email-address">
                  rathanasokha26@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div className="copyright-hud">
              <span className="footer-bottom-mark" aria-hidden="true">SR.</span>
              <span>&copy; {currentYear} SOKHA RATHANA. ALL RIGHTS RESERVED.</span>
            </div>

            <div className="dev-credit-hud">
              <span>DESIGNED WITH INTENT <span className="footer-bottom-plus">+</span> BUILT WITH REACT</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
