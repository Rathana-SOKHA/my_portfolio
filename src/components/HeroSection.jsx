import React, { useState } from "react";
import "../styles/HeroSection.css";
import profileCutout from "../assets/profile-cutout.png";

const roleText = "FULL-STACK  ---  DEVELOPER";

export default function HeroSection() {
  const cvFilePath = "/CV & CL Rathana SOKHA.pdf";
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="cyber-hero" id="home">
      {/* Background Ambience & Cyber Grid */}
      <div className="cyber-bg-atmosphere" />
      <div className="cyber-grid-lines" />

      {/* Crosshair Guides */}
      <div className="crosshair-guide guide-top-center" />
      <div className="crosshair-guide guide-right-axis" />

      {/* ================= CENTER STAGE: GIANT TYPOGRAPHY + CUTOUT + SIGNATURE ================= */}
      <div className="center-stage">
        {/* Hero text in the background */}
        <div className="giant-role-marquee" aria-hidden="true">
          <div className="giant-role-marquee-track">
            <span>{roleText}</span>
          </div>
        </div>

        {/* Portrait of SOKHA Rathana */}
        <div className="portrait-container">
          <div className="portrait-halo" />
          <img
            src={profileCutout}
            alt="SOKHA Rathana - Full Stack Developer"
            className="portrait-cutout-img"
          />

        </div>
      </div>

      {/* ================= HUD OVERLAY CORNERS ================= */}
      <div className="hud-layer">
        {/* Top Row: Mission & Status */}
        <div className="hud-top-row">
          {/* TOP LEFT: MISSION & ROLE */}
          <div className="hud-top-left">
            <div className="hud-cross-row">
              <span className="orange-cross">+</span>
              <div className="hud-mission-text">
                <p>BUILDING DIGITAL SOLUTIONS</p>
                <p>THAT MAKE AN IMPACT.</p>
                <p>CLEAN CODE. SMART DESIGN.</p>
                <p>BETTER EXPERIENCES.</p>
              </div>
              <span className="faint-cross">+</span>
            </div>

            <div className="hud-role-strip">
              <span className="orange-dash">—</span>
              <span className="hud-role-text">{roleText}</span>
            </div>
          </div>

          {/* TOP RIGHT: STATUS & DOT MATRIX */}
          <div className="hud-top-right">
            <div className="hud-status-badge">
              <div className="corner-bracket corner-top-left" />
              <div className="corner-bracket corner-top-right" />
              <div className="corner-bracket corner-bottom-left" />
              <div className="corner-bracket corner-bottom-right" />
              <div className="status-content">
                <span className="status-beacon">
                  <span className="beacon-core" />
                  <span className="beacon-ring" />
                </span>
                <span className="status-label">AVAILABLE FOR PROJECTS</span>
              </div>
            </div>

            {/* 4x3 Dot Matrix */}
            <div className="hud-dot-matrix" aria-hidden="true">
              <div className="dot-matrix-row">
                <span className="matrix-dot" /><span className="matrix-dot" /><span className="matrix-dot" /><span className="matrix-dot" />
              </div>
              <div className="dot-matrix-row">
                <span className="matrix-dot" /><span className="matrix-dot" /><span className="matrix-dot" /><span className="matrix-dot" />
              </div>
              <div className="dot-matrix-row">
                <span className="matrix-dot" /><span className="matrix-dot" /><span className="matrix-dot" /><span className="matrix-dot" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Code Features, CTA, and Tech Stack */}
        <div className="hud-bottom-row">
          {/* BOTTOM LEFT: SLICE, CODE HUD, CTA BUTTON */}
          <div className="hud-bottom-left">
            {/* Diagonal Orange Slashes */}
            <div className="hud-diagonal-slashes" aria-hidden="true">
              <span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
            </div>

            {/* Clean Code Features Box */}
            <div className="hud-code-card">
              <div className="code-icon-bracket">
                <span className="bracket-left">[</span>
                <span className="code-tag">&lt;/&gt;</span>
                <span className="bracket-right">]</span>
              </div>
              <div className="code-features-list">
                <span className="feature-item">Clean Code</span>
                <span className="feature-item">Scalable Solutions</span>
                <span className="feature-item">User Focused</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="hud-action-row">
              <a href="#contact" className="cyber-btn-primary">
                <span className="btn-text">LET'S BUILD SOMETHING GREAT</span>
                <span className="btn-arrow">&gt;</span>
              </a>
            </div>

            {/* Quick Access Actions (Download CV & Socials) */}
            <div className="hud-quick-links">
              <a
                href={cvFilePath}
                download="Rathana-SOKHA-CV.pdf"
                className="quick-cv-link"
                title="Download Full Resume"
              >
                <svg
                  className="quick-link-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Resume.pdf</span>
              </a>

              <div className="quick-social-icons">
                <a
                  href="https://github.com/Rathana-SOKHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-social-link"
                  title="GitHub"
                  aria-label="GitHub Profile"
                >
                  <svg
                    className="quick-link-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/rathana_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-social-link"
                  title="Telegram"
                  aria-label="Telegram Channel"
                >
                  <svg
                    className="quick-link-icon"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.926z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/Rathanacoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-social-link"
                  title="Facebook"
                  aria-label="Facebook Profile"
                >
                  <svg
                    className="quick-link-icon"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Radio Indicator Dots */}
            <div className="hud-indicator-dots" aria-hidden="true">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`indicator-dot ${activeDot === idx ? "active" : ""}`}
                  onClick={() => setActiveDot(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Faint Decorative Circle */}
            <div className="hud-faint-circle" aria-hidden="true" />
          </div>

          {/* BOTTOM RIGHT: TECH STACK HUD CARD */}
          <div className="hud-bottom-right">
            <div className="hud-tech-card">
              <div className="corner-bracket corner-top-left" />
              <div className="corner-bracket corner-top-right" />
              <div className="corner-bracket corner-bottom-left" />
              <div className="corner-bracket corner-bottom-right" />

              <div className="tech-card-inner">
                <div className="tech-card-header">TECH STACK</div>

                <div className="tech-card-row">
                  <span className="tech-badge">LARAVEL</span>
                  <span className="tech-sep">•</span>
                  <span className="tech-badge">VUE.JS</span>
                  <span className="tech-sep">•</span>
                  <span className="tech-badge">REACT</span>
                </div>

                <div className="tech-card-row">
                  <span className="tech-badge">MYSQL</span>
                  <span className="tech-sep">•</span>
                  <span className="tech-badge">TAILWIND</span>
                  <span className="tech-sep">•</span>
                  <span className="tech-badge">GIT</span>
                </div>
              </div>
            </div>

            {/* Coordinate Crosshairs Grid */}
            <div className="hud-crosshair-cluster" aria-hidden="true">
              <div className="crosshair-cluster-row">
                <span>+</span><span>+</span><span>+</span>
              </div>
              <div className="crosshair-cluster-row">
                <span>+</span><span>+</span><span>+</span>
              </div>
            </div>

            {/* Orange Bottom-Right Anchor Mark */}
            <div className="hud-corner-anchor" aria-hidden="true">+</div>
          </div>
        </div>
      </div>
    </section>
  );
}
