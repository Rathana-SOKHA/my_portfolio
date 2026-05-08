import '../styles/Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: '#', color: '#0077b5' },
    { icon: '🐙', label: 'GitHub', url: '#', color: '#333' },
    { icon: '𝕏', label: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: '💌', label: 'Email', url: 'mailto:your@email.com', color: '#ff6b00' },
    { icon: '📱', label: 'WhatsApp', url: '#', color: '#25D366' },
    { icon: '💬', label: 'Discord', url: '#', color: '#5865F2' }
  ];

  const contactInfo = [
    { icon: '📧', title: 'Email', value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
    { icon: '📱', title: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: '📍', title: 'Location', value: 'City, Country', link: '#' }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <span className="header-underline"></span>
          <p className="section-subtitle">Let's discuss your project or just say hello!</p>
        </div>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <h3 className="info-title">Contact Information</h3>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact-info-card">
                  <div className="info-icon">{info.icon}</div>
                  <h4 className="info-title-small">{info.title}</h4>
                  <p className="info-value">{info.value}</p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-links-section">
              <h3 className="social-title">Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    title={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h3 className="form-title">Send Me a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button">
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {/* Success Message */}
              {submitted && (
                <p className="success-message">Thank you! I'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <p>Whether you have a question or just want to connect, feel free to reach out. I'm always open to interesting conversations and collaboration opportunities!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
