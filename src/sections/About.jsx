import React, { useRef, useState, useEffect } from "react";
import "../styles/About.css";
import profileCutout from "../assets/profile-cutout.png";
import ScrollReveal from "../components/animations/ScrollReveal";
import AnimatedCounter from "../components/animations/AnimatedCounter";

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
  const portraitRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = portraitRef.current;
    if (!el) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: -(y * 10), y: x * 10 });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="cyber-about-section" id="about">
      {/* Background Ambience & PCB Etching */}
      <div className="about-bg-grid" aria-hidden="true" />
      <div className="about-ambient-glow" aria-hidden="true" />
      <div className="about-pcb-traces" aria-hidden="true">
        <span className="pcb-line line-1" />
        <span className="pcb-line line-2" />
        <span className="pcb-node node-1" />
        <span className="pcb-node node-2" />
      </div>

      <div className="about-container">
        {/* Section Header Tag & Main Title */}
        <ScrollReveal animation="fade-up" delay={0}>
          <div className="about-header-tag">
            <span className="tag-cross">+</span>
            <span className="tag-mono">// 02. PROFILE_DOSSIER</span>
            <span className="tag-bracket">[ SYSTEM_INFO ]</span>
          </div>

          <h2 className="about-main-title">
            DETAIL <span className="title-orange">ABOUT ME</span>
          </h2>
        </ScrollReveal>

        {/* 2-Column Main Dossier */}
        <div className="about-dossier-grid">
          {/* Left Column: Cyber Holographic Portrait HUD with Golden Halo */}
          <ScrollReveal animation="fade-right" delay={100} duration={0.75} className="about-portrait-col">
            <div
              className="about-portrait-hud"
              ref={portraitRef}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s ease" : "transform 0.1s ease-out",
              }}
            >
              <div className="portrait-hud-frame">
                {/* Tactical Corner Brackets Matching Hero */}
                <span className="card-bracket top-left" />
                <span className="card-bracket top-right" />
                <span className="card-bracket bottom-left" />
                <span className="card-bracket bottom-right" />

                {/* HUD Header Bar */}
                <div className="hud-frame-header">
                  <span className="hud-id-tag">ID: SOKHA_RATHANA</span>
                  <span className="hud-live-status">
                    <span className="status-diamond">◇</span>
                    ONLINE
                  </span>
                </div>

                {/* Image Viewport with Golden Torus Halo */}
                <div className="portrait-viewport">
                  {/* Golden Torus Halo behind Cutout */}
                  <div className="portrait-torus-halo" aria-hidden="true" />

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
                  <span className="foot-spec">FULL-STACK // DEV</span>
                </div>
              </div>

              {/* Diagonal Orange Slashes Accent */}
              <div className="hud-card-slashes" aria-hidden="true">
                <span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Narrative & Technical Bio */}
          <div className="about-bio-details">
            <ScrollReveal animation="fade-left" delay={120}>
              <div className="bio-role-lead">
                <span className="lead-dash">—</span>
                <span className="lead-tag">PASSIONATE DEVELOPER &amp; PROBLEM SOLVER</span>
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
            </ScrollReveal>

            {/* Technical Dossier Metadata Table */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="technical-dossier-table">
                <span className="card-bracket top-left" />
                <span className="card-bracket top-right" />
                <span className="card-bracket bottom-left" />
                <span className="card-bracket bottom-right" />

                {techDossier.map((spec, i) => (
                  <div key={i} className="dossier-row">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-separator">:</span>
                    <span className="spec-value">{spec.val}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Cyber Stat HUD Badges with Animated Counters */}
            <ScrollReveal animation="fade-up" delay={260}>
              <div className="about-stats-grid">
                <div className="stat-hud-box">
                  <span className="card-bracket top-left" />
                  <span className="card-bracket bottom-right" />
                  <div className="stat-number">
                    <AnimatedCounter target={20} suffix="+" duration={1.2} />
                  </div>
                  <div className="stat-caption">PROJECTS BUILT</div>
                </div>

                <div className="stat-hud-box">
                  <span className="card-bracket top-left" />
                  <span className="card-bracket bottom-right" />
                  <div className="stat-number">
                    <AnimatedCounter target={2} prefix="0" suffix="+" duration={1.2} />
                  </div>
                  <div className="stat-caption">STUDY YEARS</div>
                </div>

                <div className="stat-hud-box">
                  <span className="card-bracket top-left" />
                  <span className="card-bracket bottom-right" />
                  <div className="stat-number">
                    <AnimatedCounter target={100} suffix="%" duration={1.2} />
                  </div>
                  <div className="stat-caption">DEV DEDICATION</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Actions (Pill Buttons Matching Hero) */}
            <ScrollReveal animation="fade-up" delay={320}>
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
            </ScrollReveal>
          </div>
        </div>

        {/* ================= CORE PILLARS / PHILOSOPHY ================= */}
        <div className="about-pillars-section">
          <ScrollReveal animation="fade-up" delay={50}>
            <div className="pillars-header">
              <span className="pillar-tag">// DEVELOPMENT PHILOSOPHY</span>
              <h3 className="pillars-title">
                CORE PRINCIPLES THAT <span className="title-orange">DRIVE MY CODE</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="pillars-grid">
            {pillars.map((item, index) => (
              <ScrollReveal
                key={item.code}
                animation="fade-up"
                delay={index * 90}
                threshold={0.12}
              >
                <div className="pillar-card">
                  {/* Tactical Corner Brackets */}
                  <span className="card-bracket top-left" />
                  <span className="card-bracket top-right" />
                  <span className="card-bracket bottom-left" />
                  <span className="card-bracket bottom-right" />

                  <div className="pillar-top-row">
                    <span className="pillar-code">{item.code}</span>
                    <div className="pillar-icon-badge">{item.icon}</div>
                  </div>

                  <h4 className="pillar-title">{item.title}</h4>
                  <p className="pillar-desc">{item.desc}</p>
                  <div className="pillar-bottom-line" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
