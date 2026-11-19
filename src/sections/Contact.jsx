import TypewriterTitle from '../components/animations/TypewriterTitle';
import React, { useState } from 'react';
import '../styles/Contact.css';
import ScrollReveal from '../components/animations/ScrollReveal';

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
    { icon: 'fab fa-telegram', label: 'Telegram', url: 'https://t.me/rathana_sokha', code: 'TG_02' },
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
    <section className="cyber-contact-section [position:relative] [width:100%] [padding:120px_4%_100px] [background-color:#0b0d12] [background:radial-gradient(ellipse_at_50%_20%,_rgba(32,_36,_48,_0.65)_0%,_rgba(13,_15,_20,_0.95)_60%,_#08090c_100%)] [color:#ffffff] [overflow:hidden] [box-sizing:border-box] [font-family:Poppins,_sans-serif] [scroll-margin-top:80px] max-[1023px]:[padding:90px_20px_70px] max-[767px]:[padding:70px_16px_50px] max-[480px]:[padding:60px_12px_40px] [[data-theme='light']_&]:[background-color:#f8fafc] [[data-theme='light']_&]:[color:#0f172a]" id="contact">
      {/* Background Grid & Ambience */}
      <div className="contact-bg-grid [position:absolute] [inset:0] [background-image:linear-gradient(to_right,_rgba(255,_255,_255,_0.02)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,_255,_255,_0.02)_1px,_transparent_1px)] [background-size:70px_70px] [background-position:center_top] [pointer-events:none] [z-index:0] [mask-image:radial-gradient(circle_at_50%_25%,_black_40%,_transparent_90%)] [-webkit-mask-image:radial-gradient(circle_at_50%_25%,_black_40%,_transparent_90%)] [[data-theme='light']_&]:[background-image:linear-gradient(to_right,_rgba(15,_23,_42,_0.03)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(15,_23,_42,_0.03)_1px,_transparent_1px)]" aria-hidden="true" />
      <div className="contact-ambient-glow [position:absolute] [top:30%] [right:10%] [width:550px] [height:550px] [background:radial-gradient(circle,_rgba(229,_169,_71,_0.07)_0%,_transparent_70%)] [border-radius:50%] [pointer-events:none] [z-index:0]" aria-hidden="true" />

      <div className="contact-container [position:relative] [max-width:1400px] [margin:0_auto] [z-index:2]">
        {/* Section Header Tag & Title */}
        <ScrollReveal animation="fade-up" delay={0}>
          <div className="contact-header-tag [display:inline-flex] [align-items:center] [gap:10px] [margin-bottom:14px]">
            <span className="tag-cross [.contact-header-tag_&]:[color:#e5a947] [.contact-header-tag_&]:[font-size:1.1rem] [.contact-header-tag_&]:[font-weight:700] [.contact-header-tag_&]:[text-shadow:0_0_10px_rgba(229,_169,_71,_0.6)]">+</span>
            <span className="tag-mono [.contact-header-tag_&]:[font-family:Space_Mono,_monospace] [.contact-header-tag_&]:[font-size:clamp(0.72rem,_0.82vw,_0.86rem)] [.contact-header-tag_&]:[font-weight:700] [.contact-header-tag_&]:[letter-spacing:0.18em] [.contact-header-tag_&]:[color:#94a3b8] [.contact-header-tag_&]:[text-transform:uppercase]">// 06. SECURE_TRANSMISSION</span>
            <span className="tag-bracket [.contact-header-tag_&]:[font-family:Space_Mono,_monospace] [.contact-header-tag_&]:[font-size:0.72rem] [.contact-header-tag_&]:[color:#e5a947] [.contact-header-tag_&]:[letter-spacing:0.1em]">[ INITIATE_CONTACT ]</span>
          </div>

          <TypewriterTitle
            className="contact-main-title [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(2rem,_3.4vw,_3.4rem)] [font-weight:900] [letter-spacing:-0.01em] [line-height:1.18] [color:#ffffff] [margin:0_0_55px] [max-width:950px] [text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_3px_0_#64748b,_0_6px_18px_rgba(0,_0,_0,_0.85)] [&_.title-gold]:[background:none] [&_.title-gold]:[color:#ffffff] [&_.title-gold]:[-webkit-background-clip:initial] [&_.title-gold]:[background-clip:initial] [&_.title-gold]:[-webkit-text-fill-color:#ffffff] [&_.title-gold]:[filter:none] [&_.title-gold]:[display:inline-block] [&_.title-gold]:[text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_3px_0_#64748b,_0_6px_18px_rgba(0,_0,_0,_0.85)] max-[1023px]:[font-size:clamp(1.9rem,_4.5vw,_3rem)] max-[1023px]:[line-height:1.08] max-[1023px]:[margin-bottom:42px] max-[767px]:[margin-bottom:35px] max-[767px]:[font-size:clamp(1.6rem,_8vw,_2.7rem)] max-[767px]:[line-height:1.05] max-[767px]:[max-width:100%] max-[767px]:[letter-spacing:-0.04em] max-[480px]:[font-size:clamp(1.3rem,_10vw,_2.1rem)] max-[480px]:[line-height:1.08] max-[480px]:[letter-spacing:-0.05em] [[data-theme='light']_&]:[color:#0f172a]"
            text="LET'S BUILD "
            goldText="SOMETHING GREAT"
          />
        </ScrollReveal>

        {/* 2-Column Console Grid */}
        <div className="contact-console-grid [display:grid] [grid-template-columns:460px_1fr] [gap:40px] [align-items:start] [margin-bottom:60px] max-[1024px]:[grid-template-columns:1fr] max-[1024px]:[gap:30px]">
          {/* Left Column: Direct Channels & Signal Relays */}
          <ScrollReveal animation="fade-right" delay={100} duration={0.7} className="contact-col-wrapper">
            <div className="contact-channels-panel [position:relative] [background:rgba(10,_13,_20,_0.72)] [backdrop-filter:blur(14px)] [-webkit-backdrop-filter:blur(14px)] [border:1px_solid_rgba(255,_255,_255,_0.08)] [border-radius:4px] [padding:28px] [box-shadow:0_18px_40px_rgba(0,_0,_0,_0.6)] [transition:border-color_0.3s_ease,_box-shadow_0.3s_ease] [&:hover]:[border-color:rgba(229,_169,_71,_0.35)] [&:hover]:[box-shadow:0_22px_50px_rgba(0,_0,_0,_0.8),_0_0_25px_rgba(229,_169,_71,_0.12)] max-[767px]:[padding:20px_16px] max-[480px]:[padding:16px_12px] [[data-theme='light']_&]:[background:rgba(255,_255,_255,_0.95)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.08)] [[data-theme='light']_&]:[box-shadow:0_15px_35px_rgba(0,_0,_0,_0.06)]">
              <div className="corner-bracket corner-top-left [[data-theme='light']_.contact-channels-panel_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.contact-form-panel_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
              <div className="corner-bracket corner-top-right [[data-theme='light']_.contact-channels-panel_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.contact-form-panel_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
              <div className="corner-bracket corner-bottom-left [[data-theme='light']_.contact-channels-panel_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.contact-form-panel_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
              <div className="corner-bracket corner-bottom-right [[data-theme='light']_.contact-channels-panel_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.contact-form-panel_&]:[border-color:rgba(15,_23,_42,_0.25)]" />

              <div className="panel-header-strip [display:flex] [align-items:center] [justify-content:space-between] [padding-bottom:14px] [border-bottom:1px_solid_rgba(255,_255,_255,_0.06)] [margin-bottom:20px] [font-family:Space_Mono,_monospace] [font-size:0.74rem] [letter-spacing:0.12em] [[data-theme='light']_&]:[border-bottom-color:rgba(15,_23,_42,_0.08)]">
                <span className="panel-hud-title [color:#e5a947] [font-weight:700]">[ COMMS_DOCK // DIRECT_CHANNELS ]</span>
                <span className="panel-status-tag [display:inline-flex] [align-items:center] [gap:6px] [color:#94a3b8] [font-weight:700]">
                  <span className="live-dot [width:6px] [height:6px] [background-color:#e5a947] [border-radius:50%] [box-shadow:0_0_6px_#e5a947]" />
                  ONLINE
                </span>
              </div>

              <p className="comms-lead-text [font-size:0.9rem] [line-height:1.7] [color:#cbd5e1] [margin:0_0_24px] [[data-theme='light']_&]:[color:#475569]">
                Have an ambitious project, an internship opportunity, or a technical inquiry?
                Initiate contact through any channel below.
              </p>

              {/* Channels List */}
              <div className="channels-stack [display:flex] [flex-direction:column] [gap:12px] [margin-bottom:28px]">
                {contactChannels.map((item) => (
                  <a key={item.code} href={item.link} className="channel-card-item [display:flex] [align-items:center] [gap:16px] [padding:14px_16px] [background:rgba(14,_18,_26,_0.6)] [border:1px_solid_rgba(255,_255,_255,_0.06)] [border-radius:4px] [text-decoration:none] [transition:all_0.25s_cubic-bezier(0.16,_1,_0.3,_1)] [&:hover]:[background:rgba(22,_28,_40,_0.9)] [&:hover]:[border-color:#e5a947] [&:hover]:[transform:translateX(4px)] [&:hover]:[box-shadow:0_4px_16px_rgba(229,_169,_71,_0.18)] max-[480px]:[padding:10px] max-[480px]:[gap:10px] [[data-theme='light']_&]:[background:rgba(241,_245,_249,_0.8)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.06)]">
                    <div className="channel-icon-box [width:42px] [height:42px] [border-radius:4px] [background:rgba(229,_169,_71,_0.1)] [border:1px_solid_rgba(229,_169,_71,_0.3)] [display:flex] [align-items:center] [justify-content:center] [color:#e5a947] [font-size:1.1rem] [flex-shrink:0] [transition:all_0.25s_ease] [.channel-card-item:hover_&]:[background:#e5a947] [.channel-card-item:hover_&]:[color:#ffffff] [.channel-card-item:hover_&]:[box-shadow:0_0_12px_rgba(229,_169,_71,_0.6)] max-[480px]:[width:36px] max-[480px]:[height:36px] max-[480px]:[font-size:0.95rem]">
                      <i className={item.icon} />
                    </div>
                    <div className="channel-text-col [display:flex] [flex-direction:column] [flex:1] [min-width:0]">
                      <div className="channel-meta-row [display:flex] [align-items:center] [justify-content:space-between] [margin-bottom:2px]">
                        <span className="channel-code [font-family:Space_Mono,_monospace] [font-size:0.66rem] [font-weight:700] [color:#e5a947] [letter-spacing:0.12em]">{item.code}</span>
                        <span className="channel-action-hint [font-family:Space_Mono,_monospace] [font-size:0.66rem] [color:#94a3b8] [opacity:0] [transform:translateX(-4px)] [transition:all_0.2s_ease] [.channel-card-item:hover_&]:[opacity:1] [.channel-card-item:hover_&]:[transform:translateX(0)] [.channel-card-item:hover_&]:[color:#f8ce72]">{item.action} &gt;</span>
                      </div>
                      <span className="channel-title [font-size:0.78rem] [font-weight:600] [color:#94a3b8] [text-transform:uppercase] [letter-spacing:0.05em] [[data-theme='light']_&]:[color:#64748b]">{item.title}</span>
                      <span className="channel-val [font-family:Space_Mono,_monospace] [font-size:0.86rem] [font-weight:700] [color:#ffffff] [white-space:nowrap] [overflow:hidden] [text-overflow:ellipsis] max-[480px]:[font-size:0.76rem] [[data-theme='light']_&]:[color:#0f172a]">{item.val}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Signal Relays */}
              <div className="social-relays-dock [margin-bottom:24px]">
                <span className="relays-label [display:block] [font-family:Space_Mono,_monospace] [font-size:0.72rem] [font-weight:700] [letter-spacing:0.14em] [color:#e5a947] [margin-bottom:12px]">// CONNECTED_NETWORKS:</span>
                <div className="social-btns-row [display:flex] [gap:10px] [flex-wrap:wrap]">
                  {socialLinks.map((social) => (
                    <a
                      key={social.code}
                      href={social.url}
                      className="cyber-social-chip [display:inline-flex] [align-items:center] [gap:8px] [padding:8px_14px] [background:rgba(255,_255,_255,_0.04)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:4px] [color:#cbd5e1] [text-decoration:none] [font-family:Space_Mono,_monospace] [font-size:0.74rem] [font-weight:700] [letter-spacing:0.08em] [transition:all_0.25s_ease] [&:hover]:[background:#e5a947] [&:hover]:[border-color:#e5a947] [&:hover]:[color:#ffffff] [&:hover]:[transform:translateY(-2px)] [&:hover]:[box-shadow:0_0_16px_rgba(229,_169,_71,_0.4)] [[data-theme='light']_&]:[background:rgba(0,_0,_0,_0.04)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.1)] [[data-theme='light']_&]:[color:#0f172a]"
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
              <div className="availability-notice-hud [display:flex] [align-items:center] [gap:12px] [padding:12px_14px] [background:rgba(16,_22,_32,_0.6)] [border:1px_solid_rgba(229,_169,_71,_0.25)] [border-radius:4px] [[data-theme='light']_&]:[background:rgba(229,_169,_71,_0.06)] [[data-theme='light']_&]:[border-color:rgba(229,_169,_71,_0.2)]">
                <div className="notice-beacon [position:relative] [width:10px] [height:10px] [display:flex] [align-items:center] [justify-content:center] [flex-shrink:0]">
                  <span className="nb-core [width:6px] [height:6px] [background-color:#e5a947] [border-radius:50%] [box-shadow:0_0_8px_#e5a947]" />
                  <span className="nb-ring [position:absolute] [inset:-3px] [border:1px_solid_rgba(229,_169,_71,_0.7)] [border-radius:50%] [animation:noticePulse_2.4s_infinite_cubic-bezier(0.25,_0.8,_0.25,_1)]" />
                </div>
                <span className="notice-text [font-family:Space_Mono,_monospace] [font-size:0.7rem] [font-weight:700] [color:#e2e8f0] [letter-spacing:0.06em] [line-height:1.4] [[data-theme='light']_&]:[color:#0f172a]">
                  STATUS: AVAILABLE FOR NEW OPPORTUNITIES & COLLABORATIONS
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Encrypted Message Console (Form) */}
          <ScrollReveal animation="fade-left" delay={150} duration={0.7} className="contact-col-wrapper">
            <div className="contact-form-panel [position:relative] [background:rgba(10,_13,_20,_0.72)] [backdrop-filter:blur(14px)] [-webkit-backdrop-filter:blur(14px)] [border:1px_solid_rgba(255,_255,_255,_0.08)] [border-radius:4px] [padding:28px] [box-shadow:0_18px_40px_rgba(0,_0,_0,_0.6)] [transition:border-color_0.3s_ease,_box-shadow_0.3s_ease] [&:hover]:[border-color:rgba(229,_169,_71,_0.35)] [&:hover]:[box-shadow:0_22px_50px_rgba(0,_0,_0,_0.8),_0_0_25px_rgba(229,_169,_71,_0.12)] max-[767px]:[padding:20px_16px] max-[480px]:[padding:16px_12px] [[data-theme='light']_&]:[background:rgba(255,_255,_255,_0.95)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.08)] [[data-theme='light']_&]:[box-shadow:0_15px_35px_rgba(0,_0,_0,_0.06)]">
              <div className="corner-bracket corner-top-left [[data-theme='light']_.contact-channels-panel_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.contact-form-panel_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
              <div className="corner-bracket corner-top-right [[data-theme='light']_.contact-channels-panel_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.contact-form-panel_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
              <div className="corner-bracket corner-bottom-left [[data-theme='light']_.contact-channels-panel_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.contact-form-panel_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
              <div className="corner-bracket corner-bottom-right [[data-theme='light']_.contact-channels-panel_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.contact-form-panel_&]:[border-color:rgba(15,_23,_42,_0.25)]" />

              <div className="panel-header-strip [display:flex] [align-items:center] [justify-content:space-between] [padding-bottom:14px] [border-bottom:1px_solid_rgba(255,_255,_255,_0.06)] [margin-bottom:20px] [font-family:Space_Mono,_monospace] [font-size:0.74rem] [letter-spacing:0.12em] [[data-theme='light']_&]:[border-bottom-color:rgba(15,_23,_42,_0.08)]">
                <span className="panel-hud-title [color:#e5a947] [font-weight:700]">[ TRANSMIT_MESSAGE // ENCRYPTED_CONSOLE ]</span>
                <span className="panel-status-tag [display:inline-flex] [align-items:center] [gap:6px] [color:#94a3b8] [font-weight:700]">SECURE_256BIT</span>
              </div>

              <form className="cyber-terminal-form [display:flex] [flex-direction:column] [gap:18px]" onSubmit={handleSubmit}>
                <div className="form-fields-grid [display:grid] [grid-template-columns:1fr_1fr] [gap:18px] max-[767px]:[grid-template-columns:1fr] max-[767px]:[gap:14px]">
                  {/* Name */}
                  <div className="cyber-input-group [display:flex] [flex-direction:column] [gap:6px]">
                    <label htmlFor="name" className="cyber-label [font-family:Space_Mono,_monospace] [font-size:0.74rem] [font-weight:700] [letter-spacing:0.08em] [color:#94a3b8] [[data-theme='light']_&]:[color:#334155]">
                      <span className="label-code [color:#e5a947]">// 01</span> SENDER_NAME:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="cyber-input [width:100%] [background:rgba(14,_18,_26,_0.65)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:4px] [padding:12px_14px] [color:#ffffff] [font-family:Space_Mono,_Poppins,_monospace] [font-size:0.88rem] [box-sizing:border-box] [transition:all_0.25s_ease] [&::placeholder]:[color:#64748b] [&::placeholder]:[font-size:0.82rem] [&:focus]:[outline:none] [&:focus]:[background:rgba(18,_24,_34,_0.85)] [&:focus]:[border-color:#e5a947] [&:focus]:[box-shadow:0_0_16px_rgba(229,_169,_71,_0.25)] max-[480px]:[padding:10px_12px] max-[480px]:[font-size:0.82rem] [[data-theme='light']_&]:[background:rgba(241,_245,_249,_0.8)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.1)] [[data-theme='light']_&]:[color:#0f172a]"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="cyber-input-group [display:flex] [flex-direction:column] [gap:6px]">
                    <label htmlFor="email" className="cyber-label [font-family:Space_Mono,_monospace] [font-size:0.74rem] [font-weight:700] [letter-spacing:0.08em] [color:#94a3b8] [[data-theme='light']_&]:[color:#334155]">
                      <span className="label-code [color:#e5a947]">// 02</span> SENDER_EMAIL:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="cyber-input [width:100%] [background:rgba(14,_18,_26,_0.65)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:4px] [padding:12px_14px] [color:#ffffff] [font-family:Space_Mono,_Poppins,_monospace] [font-size:0.88rem] [box-sizing:border-box] [transition:all_0.25s_ease] [&::placeholder]:[color:#64748b] [&::placeholder]:[font-size:0.82rem] [&:focus]:[outline:none] [&:focus]:[background:rgba(18,_24,_34,_0.85)] [&:focus]:[border-color:#e5a947] [&:focus]:[box-shadow:0_0_16px_rgba(229,_169,_71,_0.25)] max-[480px]:[padding:10px_12px] max-[480px]:[font-size:0.82rem] [[data-theme='light']_&]:[background:rgba(241,_245,_249,_0.8)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.1)] [[data-theme='light']_&]:[color:#0f172a]"
                      placeholder="e.g. john@enterprise.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="cyber-input-group [display:flex] [flex-direction:column] [gap:6px]">
                  <label htmlFor="subject" className="cyber-label [font-family:Space_Mono,_monospace] [font-size:0.74rem] [font-weight:700] [letter-spacing:0.08em] [color:#94a3b8] [[data-theme='light']_&]:[color:#334155]">
                    <span className="label-code [color:#e5a947]">// 03</span> SUBJECT_LINE:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="cyber-input [width:100%] [background:rgba(14,_18,_26,_0.65)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:4px] [padding:12px_14px] [color:#ffffff] [font-family:Space_Mono,_Poppins,_monospace] [font-size:0.88rem] [box-sizing:border-box] [transition:all_0.25s_ease] [&::placeholder]:[color:#64748b] [&::placeholder]:[font-size:0.82rem] [&:focus]:[outline:none] [&:focus]:[background:rgba(18,_24,_34,_0.85)] [&:focus]:[border-color:#e5a947] [&:focus]:[box-shadow:0_0_16px_rgba(229,_169,_71,_0.25)] max-[480px]:[padding:10px_12px] max-[480px]:[font-size:0.82rem] [[data-theme='light']_&]:[background:rgba(241,_245,_249,_0.8)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.1)] [[data-theme='light']_&]:[color:#0f172a]"
                    placeholder="e.g. Web Development Project Inquiry"
                    required
                  />
                </div>

                {/* Message */}
                <div className="cyber-input-group [display:flex] [flex-direction:column] [gap:6px]">
                  <label htmlFor="message" className="cyber-label [font-family:Space_Mono,_monospace] [font-size:0.74rem] [font-weight:700] [letter-spacing:0.08em] [color:#94a3b8] [[data-theme='light']_&]:[color:#334155]">
                    <span className="label-code [color:#e5a947]">// 04</span> TRANSMISSION_PAYLOAD:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="cyber-textarea [width:100%] [background:rgba(14,_18,_26,_0.65)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:4px] [padding:12px_14px] [color:#ffffff] [font-family:Space_Mono,_Poppins,_monospace] [font-size:0.88rem] [box-sizing:border-box] [transition:all_0.25s_ease] [&::placeholder]:[color:#64748b] [&::placeholder]:[font-size:0.82rem] [&:focus]:[outline:none] [&:focus]:[background:rgba(18,_24,_34,_0.85)] [&:focus]:[border-color:#e5a947] [&:focus]:[box-shadow:0_0_16px_rgba(229,_169,_71,_0.25)] [resize:vertical] [min-height:120px] max-[480px]:[padding:10px_12px] max-[480px]:[font-size:0.82rem] [[data-theme='light']_&]:[background:rgba(241,_245,_249,_0.8)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.1)] [[data-theme='light']_&]:[color:#0f172a]"
                    placeholder="Detail your requirements, project scope, or general message..."
                    rows="5"
                    required
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className={`cyber-transmit-btn  [position:relative] [display:inline-flex] [align-items:center] [justify-content:center] [width:100%] [padding:14px_24px] [background:linear-gradient(90deg,_rgba(20,_15,_12,_0.95)_0%,_rgba(30,_20,_16,_0.9)_100%)] [border:1.5px_solid_#e5a947] [border-radius:4px] [color:#ffffff] [font-family:Space_Mono,_monospace] [font-size:0.84rem] [font-weight:700] [letter-spacing:0.16em] [text-transform:uppercase] [cursor:pointer] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [box-shadow:0_0_18px_rgba(229,_169,_71,_0.22)] [overflow:hidden] [box-sizing:border-box] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:-100%] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(90deg,_transparent,_rgba(229,_169,_71,_0.3),_transparent)] [&::before]:[transition:left_0.5s_ease] [&:hover::before]:[left:100%] [&:hover:not(:disabled)]:[background:#e5a947] [&:hover:not(:disabled)]:[color:#ffffff] [&:hover:not(:disabled)]:[box-shadow:0_0_28px_rgba(229,_169,_71,_0.6)] [&:hover:not(:disabled)]:[transform:translateY(-2px)] max-[480px]:[padding:12px_16px] max-[480px]:[font-size:0.78rem] [[data-theme='light']_&]:[background:#0f172a] [[data-theme='light']_&]:[border-color:#e5a947] [[data-theme='light']_&]:[color:#ffffff] [[data-theme='light']_&]:[box-shadow:0_6px_20px_rgba(229,_169,_71,_0.25)] [[data-theme='light']_&:hover]:[background:#e5a947] [[data-theme='light']_&:hover]:[color:#ffffff] ${transmitting ? 'transmitting' : ''} ${submitted ? 'sent [.cyber-transmit-btn&]:[background:#e5a947] [.cyber-transmit-btn&]:[border-color:#e5a947] [.cyber-transmit-btn&]:[color:#ffffff]' : ''}`}
                  disabled={transmitting || submitted}
                >
                  <span className="btn-glow-bar" />
                  <span className="btn-content [.cyber-transmit-btn_&]:[display:flex] [.cyber-transmit-btn_&]:[align-items:center] [.cyber-transmit-btn_&]:[justify-content:center] [.cyber-transmit-btn_&]:[gap:12px] [.cyber-transmit-btn_&]:[position:relative] [.cyber-transmit-btn_&]:[z-index:2]">
                    {transmitting ? (
                      <>
                        <span className="spin-beacon" />
                        <span>ENCRYPTING & TRANSMITTING...</span>
                      </>
                    ) : submitted ? (
                      <>
                        <span className="check-mark [.cyber-transmit-btn_&]:[font-size:1.1rem]">✓</span>
                        <span>TRANSMISSION CONFIRMED!</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT MESSAGE</span>
                        <span className="btn-arrow [.cyber-transmit-btn_&]:[color:#e5a947] [.cyber-transmit-btn_&]:[font-weight:800] [.cyber-transmit-btn_&]:[transition:transform_0.2s_ease,_color_0.2s_ease] [.cyber-transmit-btn:hover_&]:[color:#ffffff] [.cyber-transmit-btn:hover_&]:[transform:translateX(4px)]">&gt;</span>
                      </>
                    )}
                  </span>
                </button>

                {/* Success Notification Bar */}
                {submitted && (
                  <div className="transmission-success-hud [display:flex] [align-items:center] [gap:10px] [padding:12px_16px] [background:rgba(229,_169,_71,_0.12)] [border:1px_solid_rgba(229,_169,_71,_0.4)] [border-radius:4px] [font-family:Space_Mono,_monospace] [font-size:0.76rem] [font-weight:700] [color:#f8ce72] [letter-spacing:0.06em] [animation:fadeIn_0.3s_ease-out]">
                    <span className="hud-tick [.transmission-success-hud_&]:[color:#e5a947] [.transmission-success-hud_&]:[font-size:1rem] [.transmission-success-hud_&]:[font-weight:800]">✓</span>
                    <span>PAYLOAD DELIVERED SUCCESSFULLY. I WILL RESPOND VIA EMAIL PROMPTLY.</span>
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
