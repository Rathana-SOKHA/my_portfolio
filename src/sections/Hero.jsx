import React, { useEffect, useRef, useState } from "react";
import "../styles/HeroSection.css";
import profileCutout from "../assets/profile-cutout.png";
import Button from "../components/ui/Button";

export default function HeroSection({ isActive = true }) {
  const cvFilePath = "/CV & CL Rathana SOKHA.pdf";
  const [isRoleVisible, setIsRoleVisible] = useState(() => (
    typeof window !== "undefined" ? !("IntersectionObserver" in window) : true
  ));
  const [activeSocial, setActiveSocial] = useState("telegram");
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isActive || isRoleVisible) return;

    const hero = heroRef.current;
    if (!hero) return;

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRoleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isActive, isRoleVisible]);

  // Scroll effect on typography & portrait
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
      hero.style.setProperty("--hero-scroll-y", `${progress * 60}px`);
      hero.style.setProperty("--portrait-scale", `${1 + progress * 0.05}`);
      hero.style.setProperty("--portrait-opacity", `${1 - progress * 0.9}`);
      hero.style.setProperty("--hud-scroll-opacity", `${Math.max(0, 1 - progress * 2.2)}`);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, [isRoleVisible]);

  // Procedural Canvas: Golden Torus Ribbon Halo & PCB Circuit Board Traces
  useEffect(() => {
    if (!isRoleVisible) return;

    const canvas = canvasRef.current;
    const hero = heroRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !hero || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animId = 0;
    let isInView = true;

    // Fixed PCB traces definition relative to canvas bounds
    let pcbTraces = [];
    let pcbNodes = [];
    let haloParticles = [];

    const initPCBAndHalo = (w, h) => {
      // Create glowing PCB tracks mimicking the reference image
      const centerY = h * 0.46;
      const trackDefs = [
        // Left side PCB traces (aligned with the vertical social dock buttons)
        [
          { x: 0, y: centerY - 130 },
          { x: w * 0.18, y: centerY - 130 },
          { x: w * 0.24, y: centerY - 70 },
          { x: w * 0.34, y: centerY - 70 },
        ],
        [
          { x: 0, y: centerY - 65 },
          { x: w * 0.12, y: centerY - 65 },
          { x: w * 0.17, y: centerY - 15 },
          { x: w * 0.31, y: centerY - 15 },
        ],
        [
          { x: 0, y: centerY },
          { x: w * 0.15, y: centerY },
          { x: w * 0.22, y: centerY + 70 },
          { x: w * 0.29, y: centerY + 70 },
        ],
        [
          { x: w * 0.06, y: centerY - 200 },
          { x: w * 0.21, y: centerY - 200 },
          { x: w * 0.27, y: centerY - 140 },
        ],
        [
          { x: 0, y: centerY + 120 },
          { x: w * 0.11, y: centerY + 120 },
          { x: w * 0.16, y: centerY + 170 },
          { x: w * 0.25, y: centerY + 170 },
        ],

        // Right side PCB traces
        [
          { x: w, y: centerY - 140 },
          { x: w * 0.82, y: centerY - 140 },
          { x: w * 0.76, y: centerY - 80 },
          { x: w * 0.66, y: centerY - 80 },
        ],
        [
          { x: w, y: centerY - 60 },
          { x: w * 0.87, y: centerY - 60 },
          { x: w * 0.82, y: centerY - 10 },
          { x: w * 0.69, y: centerY - 10 },
        ],
        [
          { x: w, y: centerY + 40 },
          { x: w * 0.84, y: centerY + 40 },
          { x: w * 0.78, y: centerY + 100 },
          { x: w * 0.71, y: centerY + 100 },
        ],
        [
          { x: w * 0.94, y: centerY - 200 },
          { x: w * 0.79, y: centerY - 200 },
          { x: w * 0.73, y: centerY - 140 },
        ],
        [
          { x: w, y: centerY + 130 },
          { x: w * 0.89, y: centerY + 130 },
          { x: w * 0.84, y: centerY + 180 },
          { x: w * 0.74, y: centerY + 180 },
        ],
      ];

      pcbTraces = trackDefs.map((points, idx) => ({
        points,
        pulseProgress: (idx * 0.17) % 1,
        pulseSpeed: 0.18 + (idx % 3) * 0.08,
      }));

      // Gather endpoints & junctions as circular via nodes
      pcbNodes = [];
      trackDefs.forEach((pts) => {
        pts.forEach((pt, pIdx) => {
          if (pIdx === 0 && (pt.x === 0 || pt.x === w)) return; // don't draw via on screen edge
          pcbNodes.push({
            x: pt.x,
            y: pt.y,
            isGlowing: pIdx === pts.length - 1 || pIdx === 1,
            pulseOffset: Math.random() * Math.PI * 2,
          });
        });
      });

      // Halo particle cloud
      const particleCount = 140;
      haloParticles = Array.from({ length: particleCount }, () => {
        const theta = Math.random() * Math.PI * 2;
        const radius = (0.16 + Math.random() * 0.16) * Math.min(w, h);
        return {
          theta,
          radius,
          speed: (0.15 + Math.random() * 0.25) * (Math.random() > 0.5 ? 1 : -1),
          size: 1 + Math.random() * 2.2,
          alpha: 0.2 + Math.random() * 0.7,
          radialWobble: Math.random() * Math.PI * 2,
        };
      });
    };

    const handleResize = () => {
      const bounds = hero.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initPCBAndHalo(width, height);
      if (reducedMotion) {
        drawScene(0, false);
      }
    };

    const drawScene = (time, animate) => {
      ctx.clearRect(0, 0, width, height);

      const sec = time / 1000;
      const cx = width * 0.5;
      const cy = height * 0.44;
      const baseRadius = Math.min(width, height) * 0.24;

      // 1. Draw Background Warm Spotlight behind the Halo
      const spotGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * 1.8);
      spotGrad.addColorStop(0, "rgba(225, 140, 40, 0.22)");
      spotGrad.addColorStop(0.4, "rgba(190, 105, 25, 0.12)");
      spotGrad.addColorStop(1, "rgba(10, 12, 16, 0)");
      ctx.fillStyle = spotGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw PCB Copper Traces
      pcbTraces.forEach((trace) => {
        const pts = trace.points;
        if (pts.length < 2) return;

        // Base etched trace
        ctx.strokeStyle = "rgba(165, 110, 50, 0.28)";
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.stroke();

        // Inner golden core trace
        ctx.strokeStyle = "rgba(235, 165, 75, 0.42)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.stroke();

        // Moving data pulse along trace
        if (animate) {
          trace.pulseProgress = (trace.pulseProgress + trace.pulseSpeed * 0.016) % 1;
          const totalPoints = pts.length;
          const segProgress = trace.pulseProgress * (totalPoints - 1);
          const segIdx = Math.floor(segProgress);
          const frac = segProgress - segIdx;

          if (segIdx < totalPoints - 1) {
            const p1 = pts[segIdx];
            const p2 = pts[segIdx + 1];
            const pulseX = p1.x + (p2.x - p1.x) * frac;
            const pulseY = p1.y + (p2.y - p1.y) * frac;

            const pulseGrad = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 12);
            pulseGrad.addColorStop(0, "rgba(255, 220, 140, 0.95)");
            pulseGrad.addColorStop(0.35, "rgba(255, 150, 45, 0.65)");
            pulseGrad.addColorStop(1, "rgba(255, 120, 25, 0)");
            ctx.fillStyle = pulseGrad;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 12, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // 3. Draw PCB Via Nodes & Glowing Vias
      pcbNodes.forEach((node) => {
        // Outer dark ring
        ctx.strokeStyle = "rgba(180, 120, 60, 0.65)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.stroke();

        // Inner pad
        ctx.fillStyle = node.isGlowing ? "#ffb548" : "#2a1e14";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Glowing node halo
        if (node.isGlowing) {
          const glowAlpha = animate
            ? 0.35 + Math.sin(sec * 3 + node.pulseOffset) * 0.25
            : 0.45;
          const nodeGlow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 16);
          nodeGlow.addColorStop(0, `rgba(255, 175, 60, ${glowAlpha})`);
          nodeGlow.addColorStop(1, "rgba(255, 140, 30, 0)");
          ctx.fillStyle = nodeGlow;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 16, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 4. Draw Golden Parametric Torus Halo (Matching Reference Image)
      const numStrands = 22;
      const steps = 110;
      const waveSpeed = animate ? sec * 0.7 : 0;

      for (let s = 0; s < numStrands; s++) {
        const strandOffset = (s / numStrands) * Math.PI * 2;
        const strandAlpha = 0.28 + (s % 3) * 0.16;

        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 2;
          const wave1 = Math.sin(theta * 4 + strandOffset + waveSpeed) * (baseRadius * 0.18);
          const wave2 = Math.cos(theta * 6 - strandOffset * 1.4 + waveSpeed * 0.8) * (baseRadius * 0.11);
          const r = baseRadius + wave1 + wave2;

          const px = cx + Math.cos(theta) * r;
          const py = cy + Math.sin(theta) * (r * 0.82); // 3D tilt

          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        ctx.strokeStyle = `rgba(240, 180, 80, ${strandAlpha})`;
        ctx.lineWidth = s % 2 === 0 ? 1.2 : 0.8;
        ctx.stroke();
      }

      // 5. Draw Halo Particles / Golden Dust Motes
      haloParticles.forEach((p) => {
        if (animate) {
          p.theta += p.speed * 0.016;
          p.radialWobble += 0.02;
        }
        const dynamicR = p.radius + Math.sin(p.radialWobble) * 12;
        const px = cx + Math.cos(p.theta) * dynamicR;
        const py = cy + Math.sin(p.theta) * (dynamicR * 0.82);

        const flicker = animate ? 0.6 + Math.sin(sec * 4 + p.theta * 5) * 0.4 : 0.8;
        ctx.fillStyle = `rgba(255, 210, 120, ${p.alpha * flicker})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (animate && isInView) {
        animId = window.requestAnimationFrame((nextTime) => drawScene(nextTime, true));
      }
    };

    handleResize();

    const obs = "IntersectionObserver" in window
      ? new IntersectionObserver(
          ([entry]) => {
            isInView = entry.isIntersecting;
            if (isInView && !reducedMotion) {
              animId = window.requestAnimationFrame((time) => drawScene(time, true));
            } else {
              window.cancelAnimationFrame(animId);
            }
          },
          { threshold: 0 }
        )
      : null;

    obs?.observe(hero);
    window.addEventListener("resize", handleResize);

    if (!reducedMotion) {
      animId = window.requestAnimationFrame((time) => drawScene(time, true));
    }

    return () => {
      window.cancelAnimationFrame(animId);
      obs?.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [isRoleVisible]);

  return (
    <section
      className={`cyber-hero${isRoleVisible ? " is-visible" : ""}`}
      id="home"
      ref={heroRef}
    >
      {/* Matte Dark Carbon Background & Procedural Golden Canvas */}
      <div className="cyber-hero-backdrop" />
      <canvas
        className="hero-pcb-canvas"
        ref={canvasRef}
        aria-hidden="true"
      />

      {/* Far Edge Console Grip Tabs (Tactical UI cockpit tabs from screenshot) */}
      <div className="console-grip-tab grip-left" aria-hidden="true">
        <span className="grip-screw top-screw" />
        <span className="grip-notch" />
        <span className="grip-screw bottom-screw" />
      </div>
      <div className="console-grip-tab grip-right" aria-hidden="true">
        <span className="grip-screw top-screw" />
        <span className="grip-notch" />
        <span className="grip-screw bottom-screw" />
      </div>

      {/* ================= CENTER STAGE: 3D TYPOGRAPHY + CUTOUT PORTRAIT ================= */}
      <div className="center-stage">
        {/* Bold 3D White Typography: FULL-STACK DEVELOPER */}
        <div className="center-typography-wrapper" aria-hidden="true">
          <h1 className="hero-giant-title">
            <span className="title-part part-fullstack">FULL-STACK</span>
            <span className="title-spacer">&nbsp;</span>
            <span className="title-part part-developer">DEVELOPER</span>
          </h1>
        </div>

        {/* Center Portrait Cutout of Rathana */}
        <div className="center-portrait-container">
          <div className="portrait-scroll-effect">
            <img
              src={profileCutout}
              alt="SOKHA Rathana - Full-Stack Developer"
              className="portrait-cutout-img"
            />
          </div>
        </div>
      </div>

      {/* ================= HUD OVERLAY (TOP & BOTTOM BARS) ================= */}
      <div className="hud-layer">
        {/* TOP ROW HUD */}
        <div className="hud-top-row">
          {/* Top Left: 4-line monospace mission text with orange + */}
          <div className="hud-top-left">
            <div className="hud-cross-row">
              <span className="orange-cross">+</span>
              <div className="hud-mission-text">
                <p>BUILDING DIGITAL SOLUTIONS</p>
                <p>THAT MAKE AN IMPACT.</p>
                <p>CLEAN CODE, SMART DESIGN.</p>
                <p>BETTER EXPERIENCES.</p>
              </div>
              <span className="faint-cross">+</span>
            </div>

            {/* Cyber Floating Social Capsule Dock (Matching Reference Image) */}
            <div
              className="cyber-social-dock"
              aria-label="Social Profiles"
              onMouseLeave={() => setActiveSocial("telegram")}
            >
              <div
                className={`social-dock-ambient-glow glow-${activeSocial}`}
                aria-hidden="true"
              />
              <div className="social-dock-capsule">
                <a
                  href="https://t.me/rathana_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-dock-btn ${activeSocial === "telegram" ? "is-active is-squircle" : "is-circle"}`}
                  title="Telegram - @rathana_dev"
                  aria-label="Telegram Channel"
                  onMouseEnter={() => setActiveSocial("telegram")}
                  onClick={() => setActiveSocial("telegram")}
                >
                  <svg
                    className="dock-svg telegram-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.85"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" fill="rgba(245, 160, 48, 0.18)" />
                  </svg>
                </a>

                <a
                  href="https://github.com/Rathana-SOKHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-dock-btn ${activeSocial === "github" ? "is-active is-squircle" : "is-circle"}`}
                  title="GitHub - @Rathana-SOKHA"
                  aria-label="GitHub Profile"
                  onMouseEnter={() => setActiveSocial("github")}
                  onClick={() => setActiveSocial("github")}
                >
                  <svg
                    className="dock-svg github-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.85"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/Rathanacoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-dock-btn ${activeSocial === "facebook" ? "is-active is-squircle" : "is-circle"}`}
                  title="Facebook - @Rathanacoding"
                  aria-label="Facebook Profile"
                  onMouseEnter={() => setActiveSocial("facebook")}
                  onClick={() => setActiveSocial("facebook")}
                >
                  <svg
                    className="dock-svg facebook-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.85"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Top Right: Metallic status badge & dot matrix */}
          <div className="hud-top-right">
            <div className="hud-status-badge">
              <span className="badge-bracket top-left" />
              <span className="badge-bracket top-right" />
              <span className="badge-bracket bottom-left" />
              <span className="badge-bracket bottom-right" />
              <div className="status-content">
                <span className="status-diamond">◇</span>
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

        {/* BOTTOM ROW HUD */}
        <div className="hud-bottom-row">
          {/* Bottom Left: Slashes, Code Tag, Mission text, and Glowing Action Button */}
          <div className="hud-bottom-left">
            {/* Diagonal Orange Slashes */}
            <div className="hud-diagonal-slashes" aria-hidden="true">
              <span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
            </div>

            {/* Middle Feature Group */}
            <div className="hud-feature-group">
              {/* Bronze Bracketed Code Icon */}
              <div className="hud-code-card">
                <div className="code-icon-bracket">
                  <span className="code-tag">&#123;&lt;/&gt;&#125;</span>
                </div>
                <div className="code-features-list">
                  <span className="feature-item">Clean Code</span>
                  <span className="feature-item">Scalable Solutions</span>
                  <span className="feature-item">User Focused</span>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hud-vertical-divider" aria-hidden="true" />

              {/* Mission Statement */}
              <div className="hud-mission-blurb">
                <p>BUILDING DIGITAL SOLUTIONS</p>
                <p>THAT MAKE AN IMPACT</p>
              </div>
            </div>

            {/* Glowing Orange Primary Action Button */}
            <div className="hud-action-row">
              <Button href="#contact" className="cyber-btn-primary">
                <span className="btn-text">LET'S BUILD SOMETHING GREAT</span>
                <span className="btn-arrow">&gt;</span>
              </Button>
            </div>

            {/* Quick Resume Link */}
            <div className="hud-quick-links">
              <a
                href={cvFilePath}
                download="Rathana-SOKHA-CV.pdf"
                className="quick-cv-link"
                title="Download Full Resume"
              >
                <svg
                  className="quick-link-icon"
                  width="13"
                  height="13"
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
                <span>CV &amp; CL</span>
              </a>
            </div>
          </div>

          {/* Bottom Right: Brushed Dark Metal Tech Stack Card */}
          <div className="hud-bottom-right">
            <div className="hud-tech-card">
              <span className="card-bracket top-left" />
              <span className="card-bracket top-right" />
              <span className="card-bracket bottom-left" />
              <span className="card-bracket bottom-right" />

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
          </div>
        </div>
      </div>
    </section>
  );
}
