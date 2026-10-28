import React, { useEffect, useRef, useState } from "react";
import "../styles/HeroSection.css";
import profileCutout from "../assets/profile-cutout.png";
import Button from "../components/ui/Button";

const roleWords = ["FULL-STACK​​  -","-  DEVELOPER"];

export default function HeroSection({ isActive = true }) {
  const cvFilePath = "/CV & CL Rathana SOKHA.pdf";
  const [activeDot, setActiveDot] = useState(0);
  const [isRoleVisible, setIsRoleVisible] = useState(false);
  const heroRef = useRef(null);
  const atmosphereCanvasRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const hero = heroRef.current;
    if (!hero) return;

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRoleVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isActive]);

  useEffect(() => {
    if (!isRoleVisible) return;

    const hero = heroRef.current;
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const updateScrollProgress = () => {
      const { top, height } = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -top / (height * 0.75)));
      hero.style.setProperty("--first-word-offset", `${-progress * 80}px`);
      hero.style.setProperty("--second-word-offset", `${progress * 80}px`);
      hero.style.setProperty("--portrait-scale", `${1 + progress * 0.08}`);
      hero.style.setProperty("--portrait-opacity", `${1 - progress}`);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const updateSpotlight = (event) => {
      if (event.pointerType !== "mouse") return;
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty(
        "--spotlight-offset-x",
        `${event.clientX - bounds.left - bounds.width / 2}px`
      );
      hero.style.setProperty(
        "--spotlight-offset-y",
        `${event.clientY - bounds.top - bounds.height * 0.45}px`
      );
    };

    if (canHover) hero.addEventListener("pointermove", updateSpotlight);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      if (canHover) hero.removeEventListener("pointermove", updateSpotlight);
    };
  }, [isRoleVisible]);

  useEffect(() => {
    if (!isRoleVisible) return;

    const canvas = atmosphereCanvasRef.current;
    const hero = heroRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !hero || !context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const particleCount = isMobile ? 28 : 56;
    const pulseCount = isMobile ? 3 : 4;
    const gridSize = 85;
    const randomBetween = (min, max) => min + Math.random() * (max - min);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frameId = 0;
    let previousTime = 0;
    let isInView = false;
    let hasDrawnStatic = false;
    let particles = [];
    let pulses = [];

    const isQuietZone = (x, y) => (
      (x < width * 0.4 && y < height * 0.43)
      || (x > width * 0.67 && y > height * 0.74)
    );

    const chooseNextPoint = (pulse) => {
      const options = [
        { x: pulse.x + gridSize, y: pulse.y, direction: "right" },
        { x: pulse.x - gridSize, y: pulse.y, direction: "left" },
        { x: pulse.x, y: pulse.y + gridSize, direction: "down" },
        { x: pulse.x, y: pulse.y - gridSize, direction: "up" },
      ].filter((point) => (
        point.x >= 0 && point.x <= width
        && point.y >= 0 && point.y <= height
        && point.direction !== pulse.previousDirection
      ));

      const next = options[Math.floor(Math.random() * options.length)]
        || { x: pulse.x, y: pulse.y, direction: "right" };
      pulse.startX = pulse.x;
      pulse.startY = pulse.y;
      pulse.endX = next.x;
      pulse.endY = next.y;
      pulse.previousDirection = {
        right: "left",
        left: "right",
        down: "up",
        up: "down",
      }[next.direction];
      pulse.progress = 0;
      pulse.speed = randomBetween(0.18, 0.42);
    };

    const resetScene = () => {
      const bounds = hero.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: particleCount }, () => ({
        x: randomBetween(width * 0.25, width),
        y: height - Math.pow(Math.random(), 1.7) * height,
        radius: randomBetween(1, 3),
        speed: randomBetween(7, 18),
        sway: randomBetween(2, 10),
        phase: randomBetween(0, Math.PI * 2),
        opacity: randomBetween(0.25, 0.8),
        green: randomBetween(115, 165),
      }));

      pulses = Array.from({ length: pulseCount }, () => {
        const minColumn = Math.ceil(-width / (2 * gridSize));
        const maxColumn = Math.floor(width / (2 * gridSize));
        const minRow = Math.ceil(-height / (2 * gridSize));
        const maxRow = Math.floor(height / (2 * gridSize));
        const pulse = {
          x: width / 2 + Math.round(randomBetween(minColumn, maxColumn)) * gridSize,
          y: height / 2 + Math.round(randomBetween(minRow, maxRow)) * gridSize,
          previousDirection: "",
        };
        chooseNextPoint(pulse);
        pulse.progress = randomBetween(0, 1);
        return pulse;
      });

      if (reducedMotion) {
        drawScene(0, false);
        hasDrawnStatic = true;
      }
    };

    const drawOrb = (x, y, radius, alpha) => {
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(255, 112, 38, ${alpha})`);
      gradient.addColorStop(0.45, `rgba(255, 153, 55, ${alpha * 0.42})`);
      gradient.addColorStop(1, "rgba(255, 153, 55, 0)");
      context.fillStyle = gradient;
      context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    };

    const drawPulse = (pulse, deltaSeconds, animate) => {
      if (animate) {
        pulse.progress += pulse.speed * deltaSeconds;
        if (pulse.progress >= 1) {
          pulse.x = pulse.endX;
          pulse.y = pulse.endY;
          chooseNextPoint(pulse);
        }
      }

      const progress = animate ? pulse.progress : 0.45;
      const x = pulse.startX + (pulse.endX - pulse.startX) * progress;
      const y = pulse.startY + (pulse.endY - pulse.startY) * progress;
      const dx = pulse.endX - pulse.startX;
      const dy = pulse.endY - pulse.startY;
      const length = Math.hypot(dx, dy) || 1;
      const tailX = x - (dx / length) * 40;
      const tailY = y - (dy / length) * 40;
      const opacity = isQuietZone(x, y) ? 0.08 : 0.6;
      const gradient = context.createLinearGradient(tailX, tailY, x, y);
      gradient.addColorStop(0, "rgba(255, 105, 35, 0)");
      gradient.addColorStop(0.72, `rgba(255, 127, 40, ${opacity * 0.45})`);
      gradient.addColorStop(1, `rgba(255, 190, 100, ${opacity})`);
      context.strokeStyle = gradient;
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(tailX, tailY);
      context.lineTo(x, y);
      context.stroke();
      context.fillStyle = `rgba(255, 194, 116, ${opacity})`;
      context.beginPath();
      context.arc(x, y, 2, 0, Math.PI * 2);
      context.fill();
    };

    const drawScene = (time, animate) => {
      const deltaSeconds = previousTime
        ? Math.min((time - previousTime) / 1000, 0.05)
        : 0;
      previousTime = time;
      context.clearRect(0, 0, width, height);
      context.save();

      context.beginPath();
      context.rect(0, 0, width, height);
      context.rect(0, 0, width * 0.4, height * 0.43);
      context.rect(width * 0.67, height * 0.74, width * 0.33, height * 0.26);
      context.clip("evenodd");

      const seconds = time / 1000;
      drawOrb(
        width * (0.47 + Math.sin(seconds * (Math.PI * 2 / 27)) * 0.035),
        height * (0.58 + Math.cos(seconds * (Math.PI * 2 / 24)) * 0.035),
        Math.min(width, height) * 0.33,
        0.14
      );
      drawOrb(
        width * (0.76 + Math.sin(seconds * (Math.PI * 2 / 22) + 2) * 0.04),
        height * (0.43 + Math.cos(seconds * (Math.PI * 2 / 29) + 1) * 0.04),
        Math.min(width, height) * 0.27,
        0.11
      );
      if (!isMobile) {
        drawOrb(
          width * (0.34 + Math.sin(seconds * (Math.PI * 2 / 25) + 4) * 0.035),
          height * 0.73,
          Math.min(width, height) * 0.22,
          0.1
        );
      }

      particles.forEach((particle) => {
        if (animate) {
          particle.y -= particle.speed * deltaSeconds;
          particle.phase += deltaSeconds * 0.7;
          particle.x += Math.sin(particle.phase) * particle.sway * deltaSeconds;
          if (particle.y < -4) {
            particle.y = height - Math.pow(Math.random(), 1.7) * height;
            particle.x = randomBetween(width * 0.25, width);
          }
        }

        if (isQuietZone(particle.x, particle.y)) return;
        const fade = 0.45 + Math.sin(particle.phase) * 0.25;
        context.fillStyle = `rgba(255, ${particle.green}, 55, ${particle.opacity * fade})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      pulses.forEach((pulse) => drawPulse(pulse, deltaSeconds, animate));
      context.restore();

      if (animate && isInView) {
        frameId = window.requestAnimationFrame((nextTime) => drawScene(nextTime, true));
      }
    };

    const startAnimation = () => {
      if (reducedMotion || !isInView || frameId) return;
      previousTime = 0;
      frameId = window.requestAnimationFrame((time) => {
        frameId = 0;
        drawScene(time, true);
      });
    };

    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) {
          if (!reducedMotion) startAnimation();
          else if (!hasDrawnStatic) drawScene(0, false);
        } else {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
        }
      }, { threshold: 0 })
      : null;

    const resizeObserver = "ResizeObserver" in window
      ? new ResizeObserver(() => {
        resetScene();
        if (!reducedMotion && isInView) startAnimation();
      })
      : null;
    const handleResize = () => {
      resetScene();
      if (!reducedMotion && isInView) startAnimation();
    };

    resetScene();
    observer?.observe(hero);
    resizeObserver?.observe(hero);
    if (!resizeObserver) window.addEventListener("resize", handleResize);
    if (!observer) {
      isInView = true;
      startAnimation();
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      observer?.disconnect();
      resizeObserver?.disconnect();
      if (!resizeObserver) window.removeEventListener("resize", handleResize);
    };
  }, [isRoleVisible]);

  return (
    <section
      className={`cyber-hero${isRoleVisible ? " is-visible" : ""}`}
      id="home"
      ref={heroRef}
    >
      {/* Background Ambience & Cyber Grid */}
      <div className="cyber-bg-atmosphere" />
      <div className="cyber-grid-lines" />
      <canvas
        className="hero-atmosphere-canvas"
        ref={atmosphereCanvasRef}
        aria-hidden="true"
      />

      {/* Crosshair Guides */}
      <div className="crosshair-guide guide-top-center" />
      <div className="crosshair-guide guide-right-axis" />

      {/* ================= CENTER STAGE: GIANT TYPOGRAPHY + CUTOUT + SIGNATURE ================= */}
      <div className="center-stage">
        <div
          className={`giant-role-marquee${isRoleVisible ? " is-visible" : ""}`}
          aria-hidden="true"
        >
          <div className="giant-role-marquee-track">
            <span>
              {roleWords.map((word, wordIndex) => (
                <React.Fragment key={word}>
                  <span className={`role-word role-word--${wordIndex === 0 ? "first" : "second"}`}>
                    {Array.from(word, (letter, letterIndex) => (
                      <span
                        className="role-letter"
                        key={letterIndex}
                        style={{ "--letter-index": wordIndex * 11 + letterIndex }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                  {wordIndex === 0 && "\u00a0"}
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>

        {/* Portrait of SOKHA Rathana */}
        <div className="portrait-container">
          <div className="portrait-halo" />
          <div className="portrait-scroll-effect">
            <img
              src={profileCutout}
              alt="SOKHA Rathana - Full Stack Developer"
              className="portrait-cutout-img"
            />
          </div>

        </div>
      </div>

      {/* ================= HUD OVERLAY ================= */}
      <div className="hud-layer">
        <div className="hud-top-row">
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
          </div>

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

            <div className="hud-dot-matrix" aria-hidden="true">
              {[0, 1, 2].map((row) => (
                <div className="dot-matrix-row" key={row}>
                  {[0, 1, 2, 3].map((dot) => (
                    <span className="matrix-dot" key={dot} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code features, CTA, and tech stack */}
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
              <Button href="#contact" className="cyber-btn-primary">
                <span className="btn-text">LET'S BUILD SOMETHING GREAT</span>
                <span className="btn-arrow">&gt;</span>
              </Button>
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
