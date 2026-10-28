import React from "react";
import "../styles/About.css";
import profileCutout from "../assets/profile-cutout.png";

const pillars = [
  {
    code: "01",
    icon: "</>",
    title: "Clean & Scalable Code",
    desc: "Writing modular, testable, and maintainable software architectures following modern engineering standards."
  },
  {
    code: "02",
    icon: "⚡",
    title: "High Performance",
    desc: "Optimizing render cycles, bundle sizes, and database queries for lightning-fast, ultra-responsive web apps."
  },
  {
    code: "03",
    icon: "🎯",
    title: "User-Centric Design",
    desc: "Bridging technical precision with intuitive, fluid UI/UX to ensure seamless interactions and great user delight."
  },
  {
    code: "04",
    icon: "🚀",
    title: "Continuous Evolution",
    desc: "Constantly experimenting with modern frameworks, emerging developer tools, and cutting-edge web paradigms."
  }
];

const techDossier = [
  { label: "INTERNSHIP COMPANY", val: "THE LUMINIX CO., LTD." },
  { label: "ROLE", val: "Enterprise Applications & Software Development Engineer" },
  { label: "ACADEMY", val: "Passerelles Numériques Cambodia (PNC)" },
  { label: "CORE FOCUS", val: "Laravel, Vue.js, React, Node.js, MySQL" },
  { label: "LOCATION", val: "Phnom Penh, Cambodia" },
  { label: "STATUS", val: "Available for Projects & Opportunities" }
];

export default function About() {
  const cvFilePath = "/CV & CL Rathana SOKHA.pdf";

  return (
    <section className="cyber-about-section" id="about">
      {/* Background Ambience & Grid */}
      <div className="about-bg-grid" aria-hidden="true" />
      <div className="about-ambient-glow" aria-hidden="true" />

      <div className="about-container">
        {/* Section Header Tag */}
        <div className="about-header-tag">
          <span className="tag-cross">+</span>
          <span className="tag-mono">// 02. PROFILE_DOSSIER</span>
          <span className="tag-bracket">[ SYSTEM_INFO ]</span>
        </div>

        <h2 className="about-main-title">
          DETAIL <span className="title-orange">ABOUT ME</span>
        </h2>

        {/* 2-Column Main Dossier */}
        <div className="about-dossier-grid">
          {/* Left Column: Cyber Holographic Portrait HUD */}
          <div className="about-portrait-hud">
            <div className="portrait-hud-frame">
              {/* Corner Brackets */}
              <div className="corner-bracket corner-top-left" />
              <div className="corner-bracket corner-top-right" />
              <div className="corner-bracket corner-bottom-left" />
              <div className="corner-bracket corner-bottom-right" />

              {/* HUD Header Bar */}
              <div className="hud-frame-header">
                <span className="hud-id-tag">ID: SOKHA_RATHANA</span>
                <span className="hud-live-status">
                  <span className="status-dot-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Image Viewport */}
              <div className="portrait-viewport">
                <div className="viewfinder-crosshairs" aria-hidden="true">
                  <span className="vf-cross tl">+</span>
                  <span className="vf-cross tr">+</span>
                  <span className="vf-cross bl">+</span>
                  <span className="vf-cross br">+</span>
                </div>

                <div className="viewport-grid" aria-hidden="true" />
                <img
                  src={profileCutout}
                  alt="SOKHA Rathana"
                  className="hud-cutout-img"
                />
                <div className="viewport-gradient-overlay" />
              </div>

              {/* HUD Bottom Info Bar */}
              <div className="hud-frame-footer">
                <span className="coords-text">LOC: 11.5564° N, 104.9282° E</span>
                <span className="foot-spec">DEV // PNC_STUDENT</span>
              </div>
            </div>

            {/* Slashes Accent */}
            <div className="hud-card-slashes" aria-hidden="true">
              <span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Bio */}
          <div className="about-bio-details">
            <div className="bio-role-lead">
              <span className="lead-dash">—</span>
              <span className="lead-tag">PASSIONATE DEVELOPER & PROBLEM SOLVER</span>
            </div>

            <p className="bio-summary-p">
              Hello, I'm <strong className="white-highlight">SOKHA RATHANA</strong>, an enthusiastic{" "}
              <strong className="orange-highlight">Full-Stack Web Developer</strong> and second-year student
              at <strong className="white-highlight">Passerelles Numériques Cambodia (PNC)</strong>.
            </p>

            <p className="bio-summary-p">
              I specialize in building robust, responsive web applications with a focus on clean
              architecture and intuitive user experiences. My core stack includes{" "}
              <strong className="white-highlight">Laravel, PHP (MVC), Vue.js, React.js, Node.js, JavaScript, MySQL, and Tailwind CSS</strong>.
              I am driven by turning ambitious concepts into scalable, impact-driven software that delivers real-world value.
            </p>

            {/* Technical Dossier Metadata Table */}
            <div className="technical-dossier-table">
              {techDossier.map((spec, i) => (
                <div key={i} className="dossier-row">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-separator">:</span>
                  <span className="spec-value">{spec.val}</span>
                </div>
              ))}
            </div>

            {/* Cyber Stat HUD Badges */}
            <div className="about-stats-grid">
              <div className="stat-hud-box">
                <div className="corner-bracket corner-top-left" />
                <div className="corner-bracket corner-bottom-right" />
                <div className="stat-number">20<span className="stat-plus">+</span></div>
                <div className="stat-caption">PROJECTS BUILT</div>
              </div>

              <div className="stat-hud-box">
                <div className="corner-bracket corner-top-left" />
                <div className="corner-bracket corner-bottom-right" />
                <div className="stat-number">02<span className="stat-plus">+</span></div>
                <div className="stat-caption">STUDY YEARS</div>
              </div>

              <div className="stat-hud-box">
                <div className="corner-bracket corner-top-left" />
                <div className="corner-bracket corner-bottom-right" />
                <div className="stat-number">100<span className="stat-plus">%</span></div>
                <div className="stat-caption">DEV DEDICATION</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="about-action-group">
              <a
                href={cvFilePath}
                download="Rathana-SOKHA-CV.pdf"
                className="cyber-about-btn primary-action"
              >
                <span className="btn-text">DOWNLOAD CV</span>
                <span className="btn-arrow">&darr;</span>
              </a>

              <a href="#contact" className="cyber-about-btn secondary-action">
                <span className="btn-text">GET IN TOUCH</span>
                <span className="btn-arrow">&gt;</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= CORE PILLARS / PHILOSOPHY ================= */}
        <div className="about-pillars-section">
          <div className="pillars-header">
            <span className="pillar-tag">// DEVELOPMENT PHILOSOPHY</span>
            <h3 className="pillars-title">
              CORE PRINCIPLES THAT <span className="title-orange">DRIVE MY CODE</span>
            </h3>
          </div>

          <div className="pillars-grid">
            {pillars.map((item) => (
              <div key={item.code} className="pillar-card">
                {/* HUD Corner Ticks */}
                <div className="corner-bracket corner-top-left" />
                <div className="corner-bracket corner-top-right" />
                <div className="corner-bracket corner-bottom-left" />
                <div className="corner-bracket corner-bottom-right" />

                <div className="pillar-top-row">
                  <span className="pillar-code">{item.code}</span>
                  <div className="pillar-icon-badge">{item.icon}</div>
                </div>

                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-desc">{item.desc}</p>
                <div className="pillar-bottom-line" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
