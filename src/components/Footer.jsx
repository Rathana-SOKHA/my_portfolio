import '../styles/Footer.css';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 300px
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Skills', url: '#skills' },
    { name: 'Contact', url: '#contact' }
  ];

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: '#', color: '#0077b5' },
    { icon: '🐙', label: 'GitHub', url: '#', color: '#333' },
    { icon: '𝕏', label: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: '💌', label: 'Email', url: 'mailto:your@email.com', color: '#ff6b00' },
  ];

  const resources = [
    { name: 'Blog', url: '#' },
    { name: 'Portfolio', url: '#' },
    { name: 'Résumé', url: '#' },
    { name: 'Resources', url: '#' }
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-desc">Building beautiful and functional web experiences with modern technologies.</p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="footer-social-link"
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-section-title">Resources</h4>
            <ul className="footer-links">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.url} className="footer-link">{resource.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="footer-section">
            <h4 className="footer-section-title">Stay Updated</h4>
            <p className="footer-section-desc">Subscribe to get the latest updates on new projects and articles.</p>
            <form className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} All rights reserved. Designed & built by <span className="highlight">Your Name</span>
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <span className="separator">•</span>
            <a href="#" className="footer-bottom-link">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
