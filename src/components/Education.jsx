import React from 'react';
import '../styles/Education.css';
import ScrollReveal from './ScrollReveal';

const educationData = [
  {
    id: 1,
    code: "EDU_01",
    status: "CURRENTLY_ENROLLED",
    statusType: "active",
    degree: "Associate Degree in Web Programming",
    institution: "Passerelles Numériques Cambodia (PNC)",
    specialization: "Full-Stack Web Development, System Architecture & Database Engineering",
    period: "2025 - PRESENT",
    location: "Phnom Penh, Cambodia",
    tags: ["Laravel", "Vue.js", "Node.js", "React", "MySQL", "Agile/Scrum"],
    description: "Rigorous full-stack computer science and web engineering training focused on industry-standard methodologies, scalable system design, and practical production projects."
  },
  {
    id: 2,
    code: "EDU_02",
    status: "GRADUATED",
    statusType: "completed",
    degree: "National Baccalaureate Certificate (Grade C)",
    institution: "Phnom Kravanh High School",
    specialization: "General Education & Sciences",
    period: "2023 - 2024",
    location: "Pursat Province, Cambodia",
    tags: ["Mathematics", "Logical Reasoning", "Science & Tech", "Communication"],
    description: "Completed secondary education with focused coursework in analytical thinking, mathematics, and natural sciences."
  }
];

export default function Education() {
  return (
    <section className="cyber-education-section" id="education">
      {/* Background Grid & Ambience */}
      <div className="edu-bg-grid" aria-hidden="true" />
      <div className="edu-ambient-glow" aria-hidden="true" />

      <div className="education-container">
        {/* Section Header Tag */}
        <div className="education-header-tag">
          <span className="tag-cross">+</span>
          <span className="tag-mono">// 05. ACADEMIC_TRAJECTORY</span>
          <span className="tag-bracket">[ LEARNING_MILESTONES ]</span>
        </div>

        <h2 className="education-main-title">
          MY <span className="title-orange">EDUCATION JOURNEY</span>
        </h2>

        {/* Cyber Timeline */}
        <div className="cyber-timeline">
          <div className="timeline-axis" aria-hidden="true" />

          {educationData.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={index * 120}
              threshold={0.1}
            >
              <div className={`timeline-entry ${index % 2 === 0 ? "left-entry" : "right-entry"}`}>
                {/* Timeline Center Node */}
                <div className="timeline-node" aria-hidden="true">
                  <span className="node-diamond" />
                  <span className="node-pulse-ring" />
                </div>

                {/* Timeline Card */}
                <article className="cyber-edu-card">
                  {/* HUD Corner Brackets */}
                  <div className="corner-bracket corner-top-left" />
                  <div className="corner-bracket corner-top-right" />
                  <div className="corner-bracket corner-bottom-left" />
                  <div className="corner-bracket corner-bottom-right" />

                  {/* Card Header Strip */}
                  <div className="edu-card-strip">
                    <span className="edu-code">{item.code}</span>
                    <span className="edu-period-badge">
                      <span className="period-bracket">[</span>
                      {item.period}
                      <span className="period-bracket">]</span>
                    </span>
                    <span className={`edu-status-pill ${item.statusType}`}>
                      <span className="status-dot" />
                      {item.status}
                    </span>
                  </div>

                  {/* Card Main Info */}
                  <div className="edu-card-content">
                    <h3 className="edu-degree-title">{item.degree}</h3>
                    <h4 className="edu-institution-name">
                      <span className="school-marker">@</span> {item.institution}
                    </h4>
                    <p className="edu-spec-subtitle">{item.specialization}</p>

                    <p className="edu-card-desc">{item.description}</p>

                    {/* Skill Tags */}
                    <div className="edu-tag-group">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="edu-tag">
                          <span className="tag-hash">#</span>{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Location */}
                  <div className="edu-card-footer">
                    <span className="edu-loc-text">
                      <i className="fas fa-map-marker-alt" /> {item.location}
                    </span>
                    <span className="edu-verified-flag">
                      <span className="v-tick">✓</span> VERIFIED_RECORD
                    </span>
                  </div>
                </article>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Section Footer HUD Readout */}
        <div className="education-footer-hud">
          <div className="hud-readout-left">
            <span className="readout-cross">+</span>
            <span className="readout-text">
              TRAJECTORY_STATUS: <span className="readout-orange">CONTINUOUS LEARNING ACTIVE</span>
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
