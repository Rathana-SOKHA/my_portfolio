import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [transmitting, setTransmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransmitting(true);

    setTimeout(() => {
      setTransmitting(false);
      setSubmitted(true);

      // Reset form after 4 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 4000);
    }, 800);
  };

  const socialLinks = [
    { icon: 'fab fa-github', label: 'GitHub', url: 'https://github.com/Rathana-SOKHA', code: 'GH_01' },
    { icon: 'fab fa-telegram', label: 'Telegram', url: 'https://t.me/rathana_dev', code: 'TG_02' },
    { icon: 'fab fa-facebook', label: 'Facebook', url: 'https://www.facebook.com/Rathanacoding', code: 'FB_03' }
  ];

  const contactChannels = [
    {
      code: "CH_01",
      icon: "fas fa-envelope",
      title: "Direct Email",
      val: "rathanasokha26@gmail.com",
      link: "mailto:rathanasokha26@gmail.com",
      action: "Send Mail"
    },
    {
      code: "CH_02",
      icon: "fas fa-phone-alt",
      title: "Direct Phone / Telegram",
      val: "(+855) 88 992 0309",
      link: "tel:+855889920309",
      action: "Call / Message"
    },
    {
      code: "CH_03",
      icon: "fas fa-location-dot",
      title: "Base Operations",
      val: "Phnom Penh, Cambodia",
      link: "#",
      action: "Local Time GMT+7"
    }
  ];

  return (
    <section className="cyber-contact-section" id="contact">
      {/* Background Grid & Ambience */}
      <div className="contact-bg-grid" aria-hidden="true" />
      <div className="contact-ambient-glow" aria-hidden="true" />

      <div className="contact-container">
        {/* Section Header Tag */}
        <div className="contact-header-tag">
          <span className="tag-cross">+</span>
          <span className="tag-mono">// 06. SECURE_TRANSMISSION</span>
          <span className="tag-bracket">[ INITIATE_CONTACT ]</span>
        </div>

        <h2 className="contact-main-title">
          LET'S BUILD <span className="title-orange"> SOMETHING GREAT</span>
        </h2>

        {/* 2-Column Console Grid */}
        <div className="contact-console-grid">
          {/* Left Column: Direct Channels & Signal Relays */}
          <div className="contact-channels-panel">
            <div className="corner-bracket corner-top-left" />
            <div className="corner-bracket corner-top-right" />
            <div className="corner-bracket corner-bottom-left" />
            <div className="corner-bracket corner-bottom-right" />

            <div className="panel-header-strip">
              <span className="panel-hud-title">[ COMMS_DOCK // DIRECT_CHANNELS ]</span>
              <span className="panel-status-tag">
                <span className="live-dot" />
                ONLINE
              </span>
            </div>

            <p className="comms-lead-text">
              Have an ambitious project, an internship opportunity, or a technical inquiry?
              Initiate contact through any channel below.
            </p>

            {/* Channels List */}
            <div className="channels-stack">
              {contactChannels.map((item) => (
                <a key={item.code} href={item.link} className="channel-card-item">
                  <div className="channel-icon-box">
                    <i className={item.icon} />
                  </div>
                  <div className="channel-text-col">
                    <div className="channel-meta-row">
                      <span className="channel-code">{item.code}</span>
                      <span className="channel-action-hint">{item.action} &gt;</span>
                    </div>
                    <span className="channel-title">{item.title}</span>
                    <span className="channel-val">{item.val}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Signal Relays */}
            <div className="social-relays-dock">
              <span className="relays-label">// CONNECTED_NETWORKS:</span>
              <div className="social-btns-row">
                {socialLinks.map((social) => (
                  <a
                    key={social.code}
                    href={social.url}
                    className="cyber-social-chip"
                    title={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon} />
                    <span>{social.label.toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Flag */}
            <div className="availability-notice-hud">
              <div className="notice-beacon">
                <span className="nb-core" />
                <span className="nb-ring" />
              </div>
              <span className="notice-text">
                STATUS: AVAILABLE FOR NEW OPPORTUNITIES & COLLABORATIONS
              </span>
            </div>
          </div>

          {/* Right Column: Encrypted Message Console (Form) */}
          <div className="contact-form-panel">
            <div className="corner-bracket corner-top-left" />
            <div className="corner-bracket corner-top-right" />
            <div className="corner-bracket corner-bottom-left" />
            <div className="corner-bracket corner-bottom-right" />

            <div className="panel-header-strip">
              <span className="panel-hud-title">[ TRANSMIT_MESSAGE // ENCRYPTED_CONSOLE ]</span>
              <span className="panel-status-tag">SECURE_256BIT</span>
            </div>

            <form className="cyber-terminal-form" onSubmit={handleSubmit}>
              <div className="form-fields-grid">
                {/* Name */}
                <div className="cyber-input-group">
                  <label htmlFor="name" className="cyber-label">
                    <span className="label-code">// 01</span> SENDER_NAME:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="cyber-input"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                {/* Email */}
                <div className="cyber-input-group">
                  <label htmlFor="email" className="cyber-label">
                    <span className="label-code">// 02</span> SENDER_EMAIL:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="cyber-input"
                    placeholder="e.g. john@enterprise.com"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="cyber-input-group">
                <label htmlFor="subject" className="cyber-label">
                  <span className="label-code">// 03</span> SUBJECT_LINE:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="cyber-input"
                  placeholder="e.g. Web Development Project Inquiry"
                  required
                />
              </div>

              {/* Message */}
              <div className="cyber-input-group">
                <label htmlFor="message" className="cyber-label">
                  <span className="label-code">// 04</span> TRANSMISSION_PAYLOAD:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="cyber-textarea"
                  placeholder="Detail your requirements, project scope, or general message..."
                  rows="5"
                  required
                />
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                className={`cyber-transmit-btn ${transmitting ? 'transmitting' : ''} ${submitted ? 'sent' : ''}`}
                disabled={transmitting || submitted}
              >
                <span className="btn-glow-bar" />
                <span className="btn-content">
                  {transmitting ? (
                    <>
                      <span className="spin-beacon" />
                      <span>ENCRYPTING & TRANSMITTING...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <span className="check-mark">✓</span>
                      <span>TRANSMISSION CONFIRMED!</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <span className="btn-arrow">&gt;</span>
                    </>
                  )}
                </span>
              </button>

              {/* Success Notification Bar */}
              {submitted && (
                <div className="transmission-success-hud">
                  <span className="hud-tick">✓</span>
                  <span>PAYLOAD DELIVERED SUCCESSFULLY. I WILL RESPOND VIA EMAIL PROMPTLY.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Section Footer HUD Readout */}
        <div className="contact-footer-hud">
          <div className="hud-readout-left">
            <span className="readout-cross">+</span>
            <span className="readout-text">
              DISPATCH_READY: <span className="readout-orange">AVERAGE RESPONSE TIME &lt; 24 HOURS</span>
            </span>
          </div>

          <div className="hud-readout-center" aria-hidden="true">
            <div className="crosshair-row">
              <span>+</span><span>+</span><span>+</span>
            </div>
          </div>

          <div className="hud-readout-right" aria-hidden="true">
            <div className="hud-slashes">
              <span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
