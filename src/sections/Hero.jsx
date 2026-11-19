import React, { useEffect, useRef, useState } from "react";
import "../styles/HeroSection.css";
import profileCutout from "../assets/profile-cutout.png";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import SkillsRibbon from "../components/ui/SkillsRibbon";

export default function HeroSection({ isActive = true }) {
  const cvFilePath = "/CV & CL Rathana SOKHA.pdf";
  const [isRoleVisible, setIsRoleVisible] = useState(() => (
    typeof window !== "undefined" ? !("IntersectionObserver" in window) : true
  ));
  const [activeSocial, setActiveSocial] = useState(null);
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
      spotGrad.addColorStop(0, "rgba(235, 175, 75, 0.22)");
      spotGrad.addColorStop(0.4, "rgba(195, 135, 45, 0.12)");
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
            pulseGrad.addColorStop(0, "rgba(255, 235, 160, 0.95)");
            pulseGrad.addColorStop(0.35, "rgba(240, 180, 80, 0.7)");
            pulseGrad.addColorStop(1, "rgba(215, 145, 45, 0)");
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
          nodeGlow.addColorStop(0, `rgba(245, 185, 80, ${glowAlpha})`);
          nodeGlow.addColorStop(1, "rgba(215, 145, 45, 0)");
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
      className={`cyber-hero [position:relative] [width:100%] [background-color:#0b0d12] [color:#ffffff] [overflow:hidden] [display:flex] [align-items:center] [justify-content:center] [padding:0] [box-sizing:border-box] [font-family:Poppins,_sans-serif] [user-select:none] max-[960px]:[display:flex] max-[960px]:[flex-direction:column] max-[960px]:[align-items:center] max-[960px]:[min-height:auto] max-[960px]:[padding:100px_20px_50px] max-[960px]:[position:relative] max-[960px]:[overflow:hidden] ${isRoleVisible ? " is-visible" : ""}`}
      id="home"
      ref={heroRef}
    >
      {/* Matte Dark Carbon Background & Procedural Golden Canvas */}
      <div className="cyber-hero-backdrop [position:absolute] [inset:0] [background:radial-gradient(ellipse_at_50%_46%,_rgba(32,_36,_48,_0.65)_0%,_rgba(13,_15,_20,_0.95)_65%,_#08090c_100%)] [z-index:0] [pointer-events:none]" />
      <canvas
        className="hero-pcb-canvas [position:absolute] [inset:0] [width:100%] [height:100%] [z-index:1] [pointer-events:none] [opacity:0] [transition:opacity_0.8s_ease-out] [.cyber-hero.is-visible_&]:[opacity:1]"
        ref={canvasRef}
        aria-hidden="true"
      />

      {/* Far Edge Console Grip Tabs (Tactical UI cockpit tabs from screenshot) */}
      <div className="console-grip-tab grip-left [position:absolute] [top:36%] [width:13px] [height:130px] [background:linear-gradient(180deg,_#2a2e3a_0%,_#1a1c24_50%,_#12131a_100%)] [border:1px_solid_rgba(255,_255,_255,_0.12)] [display:flex] [flex-direction:column] [align-items:center] [justify-content:space-between] [padding:8px_0] [box-sizing:border-box] [z-index:20] [pointer-events:none] [box-shadow:0_4px_18px_rgba(0,_0,_0,_0.8)] max-[960px]:[display:none] [left:0] [border-left:none] [border-top-right-radius:9px] [border-bottom-right-radius:9px]" aria-hidden="true">
        <span className="grip-screw top-screw [width:4px] [height:4px] [border-radius:50%] [background:#474f5e] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.3),_0_1px_2px_rgba(0,_0,_0,_0.8)]" />
        <span className="grip-notch [width:3px] [height:28px] [border-radius:2px] [background:rgba(0,_0,_0,_0.7)] [box-shadow:inset_0_1px_2px_rgba(0,_0,_0,_0.9),_0_1px_0_rgba(255,_255,_255,_0.08)]" />
        <span className="grip-screw bottom-screw [width:4px] [height:4px] [border-radius:50%] [background:#474f5e] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.3),_0_1px_2px_rgba(0,_0,_0,_0.8)]" />
      </div>
      <div className="console-grip-tab grip-right [position:absolute] [top:36%] [width:13px] [height:130px] [background:linear-gradient(180deg,_#2a2e3a_0%,_#1a1c24_50%,_#12131a_100%)] [border:1px_solid_rgba(255,_255,_255,_0.12)] [display:flex] [flex-direction:column] [align-items:center] [justify-content:space-between] [padding:8px_0] [box-sizing:border-box] [z-index:20] [pointer-events:none] [box-shadow:0_4px_18px_rgba(0,_0,_0,_0.8)] max-[960px]:[display:none] [right:0] [border-right:none] [border-top-left-radius:9px] [border-bottom-left-radius:9px]" aria-hidden="true">
        <span className="grip-screw top-screw [width:4px] [height:4px] [border-radius:50%] [background:#474f5e] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.3),_0_1px_2px_rgba(0,_0,_0,_0.8)]" />
        <span className="grip-notch [width:3px] [height:28px] [border-radius:2px] [background:rgba(0,_0,_0,_0.7)] [box-shadow:inset_0_1px_2px_rgba(0,_0,_0,_0.9),_0_1px_0_rgba(255,_255,_255,_0.08)]" />
        <span className="grip-screw bottom-screw [width:4px] [height:4px] [border-radius:50%] [background:#474f5e] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.3),_0_1px_2px_rgba(0,_0,_0,_0.8)]" />
      </div>

      {/* ================= CENTER STAGE: 3D TYPOGRAPHY + CUTOUT PORTRAIT ================= */}
      <div className="center-stage [position:absolute] [inset:0] [width:100%] [height:100%] [display:flex] [justify-content:center] [align-items:flex-end] [pointer-events:none] [z-index:4] max-[960px]:[order:2] max-[960px]:[position:relative] max-[960px]:[width:100%] max-[960px]:[inset:auto] max-[960px]:[margin:30px_auto_20px] max-[960px]:[z-index:5] max-[960px]:[pointer-events:auto]">
        {/* Bold 3D White Typography: FULL-STACK DEVELOPER */}
        <div className="center-typography-wrapper [position:absolute] [top:50%] [left:0] [width:100%] [padding:0_clamp(40px,_6.5vw,_130px)] [box-sizing:border-box] [transform:translateY(-50%)_translateY(var(--hero-scroll-y,_0px))] [display:flex] [justify-content:center] [align-items:center] [z-index:1] [pointer-events:none] [transition:transform_0.2s_cubic-bezier(0.16,_1,_0.3,_1)] max-[960px]:[position:absolute] max-[960px]:[top:48%]">
          <h1 className="hero-giant-title [margin:0] [padding:0] [display:flex] [align-items:center] [justify-content:center] [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(2rem,_5.2vw,_6.6rem)] [font-weight:900] [letter-spacing:-0.01em] [line-height:0.9] [color:#ffffff] [white-space:nowrap] [user-select:none] [text-shadow:0_1px_0_#e2e8f0,_0_2px_0_#cbd5e1,_0_3px_0_#94a3b8,_0_4px_0_#64748b,_0_5px_1px_#334155,_0_8px_16px_rgba(0,_0,_0,_0.85),_0_16px_36px_rgba(0,_0,_0,_0.95)] max-[960px]:[font-size:clamp(1.8rem,_7vw,_3.8rem)] max-[600px]:[flex-direction:column] max-[600px]:[gap:6px] max-[600px]:[font-size:clamp(1.6rem,_8vw,_2.6rem)]">
            <span className="title-part-group part-fullstack-group [position:relative] [display:inline-flex] [align-items:flex-start] max-[600px]:[flex-direction:column] max-[600px]:[align-items:center]">
              <Badge className="hero-fullstack-badge [position:absolute] [bottom:calc(100%_+_clamp(8px,_1.2vw,_16px))] [left:2px] [z-index:5] [pointer-events:auto] max-[600px]:[position:static] max-[600px]:[margin-bottom:8px] max-[600px]:[padding:4px_12px]">HI, I'M RATHANA SOKHA</Badge>
              <span className="title-part part-fullstack [display:inline-block] [will-change:transform]">FULL-STACK</span>
              <span className="hero-fullstack-tagline [position:absolute] [top:calc(100%_+_clamp(10px,_1.3vw,_18px))] [left:2px] [font-family:Poppins,_-apple-system,_sans-serif] [font-size:clamp(0.88rem,_1.1vw,_1.18rem)] [font-weight:400] [letter-spacing:0.02em] [line-height:1.4] [color:#ffffff] [white-space:nowrap] [user-select:none] [text-shadow:0_2px_10px_rgba(0,_0,_0,_0.85)] [pointer-events:auto] [z-index:5] max-[600px]:[position:static] max-[600px]:[margin-top:6px] max-[600px]:[margin-bottom:8px] max-[600px]:[font-size:0.84rem] max-[600px]:[text-align:center] max-[600px]:[white-space:normal] max-[600px]:[max-width:290px]">Building digital solutions that make an impact.</span>
              <div className="hero-fullstack-actions [position:absolute] [top:calc(100%_+_clamp(46px,_5vw,_68px))] [left:2px] [display:flex] [flex-direction:column] [align-items:flex-start] [gap:12px] [pointer-events:auto] [z-index:10] [text-shadow:none] [&_*]:[text-shadow:none] max-[600px]:[position:static] max-[600px]:[margin-top:10px] max-[600px]:[align-items:center]">
                <Button href="#contact" className="cyber-btn-primary [display:inline-flex] [align-items:center] [justify-content:space-between] [gap:22px] [padding:12px_26px] [background:rgba(15,_17,_24,_0.85)] [backdrop-filter:blur(8px)] [-webkit-backdrop-filter:blur(8px)] [border:1.5px_solid_#e5a947] [border-radius:9999px] [color:#ffffff] [text-decoration:none] [font-family:Poppins,_-apple-system,_sans-serif] [font-size:clamp(0.78rem,_0.86vw,_0.92rem)] [font-weight:700] [letter-spacing:0.06em] [text-transform:uppercase] [text-shadow:none] [cursor:pointer] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [box-shadow:0_0_16px_rgba(229,_169,_71,_0.35),_inset_0_1px_1px_rgba(255,_230,_160,_0.35)] [position:relative] [overflow:hidden] [&:hover]:[background:#e5a947] [&:hover]:[color:#0b0c10] [&:hover]:[box-shadow:0_0_28px_rgba(229,_169,_71,_0.7)] [&:hover]:[transform:translateY(-2px)]">
                  <span className="btn-text">WORK WITH ME</span>
                  <span className="btn-arrow [color:#e5a947] [font-weight:800] [font-size:1rem] [transition:transform_0.25s_ease,_color_0.25s_ease] [text-shadow:none] [.cyber-btn-primary:hover_&]:[color:#0b0c10] [.cyber-btn-primary:hover_&]:[transform:translateX(4px)]">&gt;</span>
                </Button>

                <div className="hud-quick-links [display:flex] [align-items:center] [gap:12px] [margin-top:2px]">
                  <a
                    href={cvFilePath}
                    download="Rathana-SOKHA-CV.pdf"
                    className="quick-cv-link [display:inline-flex] [align-items:center] [gap:7px] [padding:6px_14px] [background:rgba(255,_255,_255,_0.05)] [border:1px_solid_rgba(255,_255,_255,_0.12)] [border-radius:9999px] [color:#e2e8f0] [text-decoration:none] [font-family:Poppins,_-apple-system,_sans-serif] [font-size:0.78rem] [font-weight:600] [letter-spacing:0.04em] [text-shadow:none] [transition:all_0.25s_ease] [&_svg]:[color:#e5a947] [&:hover]:[background:rgba(229,_169,_71,_0.15)] [&:hover]:[border-color:#e5a947] [&:hover]:[color:#f8ce72] [&:hover]:[transform:translateY(-1px)]"
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
            </span>
            <span className="title-spacer [display:inline-block] [width:clamp(110px,_17vw,_230px)] [flex-shrink:0] max-[1200px]:[width:clamp(100px,_16vw,_190px)] max-[960px]:[width:clamp(80px,_16vw,_150px)] max-[600px]:[display:none]">&nbsp;</span>
            <span className="title-part-group part-developer-group [position:relative] [display:inline-flex] [align-items:flex-end] max-[600px]:[flex-direction:column] max-[600px]:[align-items:center]">
              <span className="title-part part-developer [display:inline-block] [will-change:transform]">DEVELOPER</span>
              <span className="hero-developer-status [position:absolute] [top:calc(100%_+_clamp(10px,_1.3vw,_18px))] [right:0] [display:inline-flex] [align-items:center] [gap:10px] [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(0.74rem,_0.86vw,_0.94rem)] [font-weight:800] [letter-spacing:0.05em] [text-transform:uppercase] [color:#ffffff] [white-space:nowrap] [user-select:none] [text-shadow:0_2px_10px_rgba(0,_0,_0,_0.85)] [pointer-events:auto] [z-index:5] max-[600px]:[position:static] max-[600px]:[margin-top:6px] max-[600px]:[margin-bottom:8px] max-[600px]:[font-size:0.76rem] max-[600px]:[text-align:center] max-[600px]:[justify-content:center] max-[600px]:[white-space:normal]">
                <span className="developer-pulse-dot [width:10px] [height:10px] [border-radius:50%] [background-color:#00e676] [box-shadow:0_0_8px_#00e676,_0_0_16px_#00e676,_0_0_26px_rgba(0,_230,_118,_0.75)] [animation:live-pulse-dot-anim_2s_infinite_ease-in-out] [flex-shrink:0]" aria-hidden="true" />
                <span className="developer-status-text">AVAILABLE FOR PROJECTS.</span>
              </span>

              {/* Cyber Floating Social Capsule Dock - Row below AVAILABLE FOR PROJECTS */}
              <div
                className="hero-developer-socials [position:absolute] [top:calc(100%_+_clamp(46px,_5vw,_68px))] [right:0] [display:flex] [flex-direction:row] [align-items:center] [pointer-events:auto] [z-index:10] [text-shadow:none] [&_*]:[text-shadow:none] max-[600px]:[position:static] max-[600px]:[margin-top:10px] max-[600px]:[align-items:center] max-[600px]:[justify-content:center]"
                aria-label="Social Profiles"
                onMouseLeave={() => setActiveSocial(null)}
              >
                {activeSocial && (
                  <div
                    className={`social-row-glow glow- [position:absolute] [top:50%] [transform:translate(-50%,_-50%)] [width:76px] [height:76px] [background:radial-gradient(circle,_rgba(245,_145,_30,_0.45)_0%,_rgba(245,_145,_30,_0.12)_55%,_transparent_75%)] [filter:blur(14px)] [pointer-events:none] [z-index:-1] [transition:left_0.35s_cubic-bezier(0.16,_1,_0.3,_1),_opacity_0.3s_ease] [&.glow-telegram]:[left:33px] [&.glow-github]:[left:91px] [&.glow-linkedin]:[left:147px] [&.glow-facebook]:[left:203px] ${activeSocial}`}
                    aria-hidden="true"
                  />
                )}
                <div className="social-row-capsule [position:relative] [display:flex] [flex-direction:row] [align-items:center] [justify-content:center] [width:auto] [height:auto] [padding:6px_10px] [gap:14px] [box-sizing:border-box] [background:linear-gradient(180deg,_rgba(24,_27,_36,_0.78)_0%,_rgba(13,_15,_22,_0.86)_100%)] [backdrop-filter:blur(16px)] [-webkit-backdrop-filter:blur(16px)] [border-radius:9999px] [border:1.5px_solid_rgba(225,_155,_75,_0.35)] [box-shadow:0_16px_38px_rgba(0,_0,_0,_0.75),_0_0_24px_rgba(245,_145,_30,_0.08),_inset_0_1.5px_1.5px_rgba(255,_215,_140,_0.28),_inset_0_-1.5px_1.5px_rgba(0,_0,_0,_0.7),_inset_0_0_16px_rgba(0,_0,_0,_0.5)] [transition:border-color_0.3s_ease,_box-shadow_0.3s_ease] [&:hover]:[border-color:rgba(245,_160,_50,_0.48)] [&:hover]:[box-shadow:0_18px_44px_rgba(0,_0,_0,_0.8),_0_0_28px_rgba(245,_145,_30,_0.16),_inset_0_1.5px_1.5px_rgba(255,_225,_160,_0.38),_inset_0_-1.5px_1.5px_rgba(0,_0,_0,_0.7),_inset_0_0_18px_rgba(0,_0,_0,_0.5)]">
                  <a
                    href="https://t.me/rathana_sokha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-dock-btn  [position:relative] [display:flex] [align-items:center] [justify-content:flex-start] [height:42px] [width:auto] [min-width:42px] [padding:0_10px] [border-radius:9999px] [text-decoration:none] [cursor:pointer] [outline:none] [color:#f0b450] [overflow:hidden] [box-sizing:border-box] [flex-shrink:0] [transition:background_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_border-color_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_box-shadow_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_padding_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_color_0.3s_ease] [-webkit-tap-highlight-color:transparent] [will-change:padding,_box-shadow] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[inset:-10px] [&::before]:[background:radial-gradient(circle,_rgba(229,_169,_71,_0.5)_0%,_rgba(229,_169,_71,_0.12)_55%,_transparent_75%)] [&::before]:[filter:blur(14px)] [&::before]:[border-radius:inherit] [&::before]:[opacity:0] [&::before]:[pointer-events:none] [&::before]:[z-index:-1] [&::before]:[transition:opacity_0.36s_cubic-bezier(0.16,_1,_0.3,_1)] [&:hover::before]:[opacity:1] [&:hover]:[padding:0_15px_0_10px] [&:hover]:[border:1.5px_solid_rgba(240,_180,_80,_0.9)] [&:hover]:[background:radial-gradient(circle_at_50%_35%,_rgba(240,_180,_80,_0.28)_0%,_rgba(185,_125,_35,_0.12)_68%,_rgba(22,_25,_34,_0.88)_100%)] [&:hover]:[color:#ffd680] [&:hover]:[box-shadow:0_0_20px_rgba(229,_169,_71,_0.45),_inset_0_0_12px_rgba(229,_169,_71,_0.22),_inset_0_1.5px_1.5px_rgba(255,_235,_175,_0.55),_0_4px_12px_rgba(0,_0,_0,_0.5)] ${activeSocial === "telegram" ? "is-active is-squircle [.social-dock-btn&::before]:[opacity:1] [.social-dock-btn&]:[padding:0_15px_0_10px] [.social-dock-btn&]:[border:1.5px_solid_rgba(240,_180,_80,_0.9)] [.social-dock-btn&]:[background:radial-gradient(circle_at_50%_35%,_rgba(240,_180,_80,_0.28)_0%,_rgba(185,_125,_35,_0.12)_68%,_rgba(22,_25,_34,_0.88)_100%)] [.social-dock-btn&]:[color:#ffd680] [.social-dock-btn&]:[box-shadow:0_0_20px_rgba(229,_169,_71,_0.45),_inset_0_0_12px_rgba(229,_169,_71,_0.22),_inset_0_1.5px_1.5px_rgba(255,_235,_175,_0.55),_0_4px_12px_rgba(0,_0,_0,_0.5)] max-[600px]:[.social-dock-btn&]:[width:44px] max-[600px]:[.social-dock-btn&]:[height:44px] max-[600px]:[.social-dock-btn&]:[border-radius:14px]" : "is-circle [.social-dock-btn&]:[border:1.5px_solid_rgba(229,_169,_71,_0.55)] [.social-dock-btn&]:[background:rgba(18,_21,_29,_0.45)] [.social-dock-btn&]:[box-shadow:inset_0_1px_1px_rgba(255,_220,_140,_0.15),_0_2px_8px_rgba(0,_0,_0,_0.45)] max-[600px]:[.social-dock-btn&]:[width:40px] max-[600px]:[.social-dock-btn&]:[height:40px]"}`}
                    title="Telegram - @rathana_sokha"
                    aria-label="Telegram @rathana_sokha"
                    onMouseEnter={() => setActiveSocial("telegram")}
                    onClick={() => setActiveSocial("telegram")}
                  >
                    <svg
                      className="dock-svg telegram-svg [width:22px] [height:22px] [flex-shrink:0] [transition:filter_0.3s_ease,_color_0.3s_ease] [.social-dock-btn:hover_&]:[filter:drop-shadow(0_0_7px_rgba(235,_175,_80,_0.85))] [transform:translate(-1px,_1px)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.85"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" fill={activeSocial === "telegram" ? "rgba(235, 175, 80, 0.2)" : "none"} />
                    </svg>
                    <span className="social-btn-label [display:inline-block] [max-width:0] [opacity:0] [transform:translateX(-4px)] [overflow:hidden] [white-space:nowrap] [font-family:Poppins,_-apple-system,_sans-serif] [font-size:0.78rem] [font-weight:600] [letter-spacing:0.04em] [color:#ffffff] [pointer-events:none] [transition:max-width_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_opacity_0.28s_ease,_transform_0.36s_cubic-bezier(0.16,_1,_0.3,_1)] [margin-left:0] [line-height:1] [will-change:max-width,_opacity,_transform] [.social-dock-btn:hover_&]:[max-width:90px] [.social-dock-btn:hover_&]:[opacity:1] [.social-dock-btn:hover_&]:[transform:translateX(0)] [.social-dock-btn:hover_&]:[margin-left:8px] [.social-dock-btn:hover_&]:[margin-right:2px] [.social-dock-btn:hover_&]:[color:#ffffff] [.social-dock-btn:hover_&]:[text-shadow:0_0_12px_rgba(255,_255,_255,_0.45)] [.social-dock-btn.is-active_&]:[max-width:90px] [.social-dock-btn.is-active_&]:[opacity:1] [.social-dock-btn.is-active_&]:[transform:translateX(0)] [.social-dock-btn.is-active_&]:[margin-left:8px] [.social-dock-btn.is-active_&]:[margin-right:2px] [.social-dock-btn.is-active_&]:[color:#ffffff] [.social-dock-btn.is-active_&]:[text-shadow:0_0_12px_rgba(255,_255,_255,_0.45)]">Telegram</span>
                  </a>

                  <a
                    href="https://github.com/Rathana-SOKHA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-dock-btn  [position:relative] [display:flex] [align-items:center] [justify-content:flex-start] [height:42px] [width:auto] [min-width:42px] [padding:0_10px] [border-radius:9999px] [text-decoration:none] [cursor:pointer] [outline:none] [color:#f0b450] [overflow:hidden] [box-sizing:border-box] [flex-shrink:0] [transition:background_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_border-color_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_box-shadow_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_padding_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_color_0.3s_ease] [-webkit-tap-highlight-color:transparent] [will-change:padding,_box-shadow] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[inset:-10px] [&::before]:[background:radial-gradient(circle,_rgba(229,_169,_71,_0.5)_0%,_rgba(229,_169,_71,_0.12)_55%,_transparent_75%)] [&::before]:[filter:blur(14px)] [&::before]:[border-radius:inherit] [&::before]:[opacity:0] [&::before]:[pointer-events:none] [&::before]:[z-index:-1] [&::before]:[transition:opacity_0.36s_cubic-bezier(0.16,_1,_0.3,_1)] [&:hover::before]:[opacity:1] [&:hover]:[padding:0_15px_0_10px] [&:hover]:[border:1.5px_solid_rgba(240,_180,_80,_0.9)] [&:hover]:[background:radial-gradient(circle_at_50%_35%,_rgba(240,_180,_80,_0.28)_0%,_rgba(185,_125,_35,_0.12)_68%,_rgba(22,_25,_34,_0.88)_100%)] [&:hover]:[color:#ffd680] [&:hover]:[box-shadow:0_0_20px_rgba(229,_169,_71,_0.45),_inset_0_0_12px_rgba(229,_169,_71,_0.22),_inset_0_1.5px_1.5px_rgba(255,_235,_175,_0.55),_0_4px_12px_rgba(0,_0,_0,_0.5)] ${activeSocial === "github" ? "is-active is-squircle [.social-dock-btn&::before]:[opacity:1] [.social-dock-btn&]:[padding:0_15px_0_10px] [.social-dock-btn&]:[border:1.5px_solid_rgba(240,_180,_80,_0.9)] [.social-dock-btn&]:[background:radial-gradient(circle_at_50%_35%,_rgba(240,_180,_80,_0.28)_0%,_rgba(185,_125,_35,_0.12)_68%,_rgba(22,_25,_34,_0.88)_100%)] [.social-dock-btn&]:[color:#ffd680] [.social-dock-btn&]:[box-shadow:0_0_20px_rgba(229,_169,_71,_0.45),_inset_0_0_12px_rgba(229,_169,_71,_0.22),_inset_0_1.5px_1.5px_rgba(255,_235,_175,_0.55),_0_4px_12px_rgba(0,_0,_0,_0.5)] max-[600px]:[.social-dock-btn&]:[width:44px] max-[600px]:[.social-dock-btn&]:[height:44px] max-[600px]:[.social-dock-btn&]:[border-radius:14px]" : "is-circle [.social-dock-btn&]:[border:1.5px_solid_rgba(229,_169,_71,_0.55)] [.social-dock-btn&]:[background:rgba(18,_21,_29,_0.45)] [.social-dock-btn&]:[box-shadow:inset_0_1px_1px_rgba(255,_220,_140,_0.15),_0_2px_8px_rgba(0,_0,_0,_0.45)] max-[600px]:[.social-dock-btn&]:[width:40px] max-[600px]:[.social-dock-btn&]:[height:40px]"}`}
                    title="GitHub - @Rathana-SOKHA"
                    aria-label="GitHub Profile"
                    onMouseEnter={() => setActiveSocial("github")}
                    onClick={() => setActiveSocial("github")}
                  >
                    <svg
                      className="dock-svg github-svg [width:22px] [height:22px] [flex-shrink:0] [transition:filter_0.3s_ease,_color_0.3s_ease] [.social-dock-btn:hover_&]:[filter:drop-shadow(0_0_7px_rgba(235,_175,_80,_0.85))]"
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
                    <span className="social-btn-label [display:inline-block] [max-width:0] [opacity:0] [transform:translateX(-4px)] [overflow:hidden] [white-space:nowrap] [font-family:Poppins,_-apple-system,_sans-serif] [font-size:0.78rem] [font-weight:600] [letter-spacing:0.04em] [color:#ffffff] [pointer-events:none] [transition:max-width_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_opacity_0.28s_ease,_transform_0.36s_cubic-bezier(0.16,_1,_0.3,_1)] [margin-left:0] [line-height:1] [will-change:max-width,_opacity,_transform] [.social-dock-btn:hover_&]:[max-width:90px] [.social-dock-btn:hover_&]:[opacity:1] [.social-dock-btn:hover_&]:[transform:translateX(0)] [.social-dock-btn:hover_&]:[margin-left:8px] [.social-dock-btn:hover_&]:[margin-right:2px] [.social-dock-btn:hover_&]:[color:#ffffff] [.social-dock-btn:hover_&]:[text-shadow:0_0_12px_rgba(255,_255,_255,_0.45)] [.social-dock-btn.is-active_&]:[max-width:90px] [.social-dock-btn.is-active_&]:[opacity:1] [.social-dock-btn.is-active_&]:[transform:translateX(0)] [.social-dock-btn.is-active_&]:[margin-left:8px] [.social-dock-btn.is-active_&]:[margin-right:2px] [.social-dock-btn.is-active_&]:[color:#ffffff] [.social-dock-btn.is-active_&]:[text-shadow:0_0_12px_rgba(255,_255,_255,_0.45)]">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rathana-sokha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-dock-btn  [position:relative] [display:flex] [align-items:center] [justify-content:flex-start] [height:42px] [width:auto] [min-width:42px] [padding:0_10px] [border-radius:9999px] [text-decoration:none] [cursor:pointer] [outline:none] [color:#f0b450] [overflow:hidden] [box-sizing:border-box] [flex-shrink:0] [transition:background_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_border-color_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_box-shadow_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_padding_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_color_0.3s_ease] [-webkit-tap-highlight-color:transparent] [will-change:padding,_box-shadow] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[inset:-10px] [&::before]:[background:radial-gradient(circle,_rgba(229,_169,_71,_0.5)_0%,_rgba(229,_169,_71,_0.12)_55%,_transparent_75%)] [&::before]:[filter:blur(14px)] [&::before]:[border-radius:inherit] [&::before]:[opacity:0] [&::before]:[pointer-events:none] [&::before]:[z-index:-1] [&::before]:[transition:opacity_0.36s_cubic-bezier(0.16,_1,_0.3,_1)] [&:hover::before]:[opacity:1] [&:hover]:[padding:0_15px_0_10px] [&:hover]:[border:1.5px_solid_rgba(240,_180,_80,_0.9)] [&:hover]:[background:radial-gradient(circle_at_50%_35%,_rgba(240,_180,_80,_0.28)_0%,_rgba(185,_125,_35,_0.12)_68%,_rgba(22,_25,_34,_0.88)_100%)] [&:hover]:[color:#ffd680] [&:hover]:[box-shadow:0_0_20px_rgba(229,_169,_71,_0.45),_inset_0_0_12px_rgba(229,_169,_71,_0.22),_inset_0_1.5px_1.5px_rgba(255,_235,_175,_0.55),_0_4px_12px_rgba(0,_0,_0,_0.5)] ${activeSocial === "linkedin" ? "is-active is-squircle [.social-dock-btn&::before]:[opacity:1] [.social-dock-btn&]:[padding:0_15px_0_10px] [.social-dock-btn&]:[border:1.5px_solid_rgba(240,_180,_80,_0.9)] [.social-dock-btn&]:[background:radial-gradient(circle_at_50%_35%,_rgba(240,_180,_80,_0.28)_0%,_rgba(185,_125,_35,_0.12)_68%,_rgba(22,_25,_34,_0.88)_100%)] [.social-dock-btn&]:[color:#ffd680] [.social-dock-btn&]:[box-shadow:0_0_20px_rgba(229,_169,_71,_0.45),_inset_0_0_12px_rgba(229,_169,_71,_0.22),_inset_0_1.5px_1.5px_rgba(255,_235,_175,_0.55),_0_4px_12px_rgba(0,_0,_0,_0.5)] max-[600px]:[.social-dock-btn&]:[width:44px] max-[600px]:[.social-dock-btn&]:[height:44px] max-[600px]:[.social-dock-btn&]:[border-radius:14px]" : "is-circle [.social-dock-btn&]:[border:1.5px_solid_rgba(229,_169,_71,_0.55)] [.social-dock-btn&]:[background:rgba(18,_21,_29,_0.45)] [.social-dock-btn&]:[box-shadow:inset_0_1px_1px_rgba(255,_220,_140,_0.15),_0_2px_8px_rgba(0,_0,_0,_0.45)] max-[600px]:[.social-dock-btn&]:[width:40px] max-[600px]:[.social-dock-btn&]:[height:40px]"}`}
                    title="LinkedIn - @rathana-sokha"
                    aria-label="LinkedIn Profile"
                    onMouseEnter={() => setActiveSocial("linkedin")}
                    onClick={() => setActiveSocial("linkedin")}
                  >
                    <svg
                      className="dock-svg linkedin-svg [width:22px] [height:22px] [flex-shrink:0] [transition:filter_0.3s_ease,_color_0.3s_ease] [.social-dock-btn:hover_&]:[filter:drop-shadow(0_0_7px_rgba(235,_175,_80,_0.85))]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.85"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="social-btn-label [display:inline-block] [max-width:0] [opacity:0] [transform:translateX(-4px)] [overflow:hidden] [white-space:nowrap] [font-family:Poppins,_-apple-system,_sans-serif] [font-size:0.78rem] [font-weight:600] [letter-spacing:0.04em] [color:#ffffff] [pointer-events:none] [transition:max-width_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_opacity_0.28s_ease,_transform_0.36s_cubic-bezier(0.16,_1,_0.3,_1)] [margin-left:0] [line-height:1] [will-change:max-width,_opacity,_transform] [.social-dock-btn:hover_&]:[max-width:90px] [.social-dock-btn:hover_&]:[opacity:1] [.social-dock-btn:hover_&]:[transform:translateX(0)] [.social-dock-btn:hover_&]:[margin-left:8px] [.social-dock-btn:hover_&]:[margin-right:2px] [.social-dock-btn:hover_&]:[color:#ffffff] [.social-dock-btn:hover_&]:[text-shadow:0_0_12px_rgba(255,_255,_255,_0.45)] [.social-dock-btn.is-active_&]:[max-width:90px] [.social-dock-btn.is-active_&]:[opacity:1] [.social-dock-btn.is-active_&]:[transform:translateX(0)] [.social-dock-btn.is-active_&]:[margin-left:8px] [.social-dock-btn.is-active_&]:[margin-right:2px] [.social-dock-btn.is-active_&]:[color:#ffffff] [.social-dock-btn.is-active_&]:[text-shadow:0_0_12px_rgba(255,_255,_255,_0.45)]">LinkedIn</span>
                  </a>

                  <a
                    href="https://www.facebook.com/Rathanacoding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-dock-btn  [position:relative] [display:flex] [align-items:center] [justify-content:flex-start] [height:42px] [width:auto] [min-width:42px] [padding:0_10px] [border-radius:9999px] [text-decoration:none] [cursor:pointer] [outline:none] [color:#f0b450] [overflow:hidden] [box-sizing:border-box] [flex-shrink:0] [transition:background_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_border-color_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_box-shadow_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_padding_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_color_0.3s_ease] [-webkit-tap-highlight-color:transparent] [will-change:padding,_box-shadow] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[inset:-10px] [&::before]:[background:radial-gradient(circle,_rgba(229,_169,_71,_0.5)_0%,_rgba(229,_169,_71,_0.12)_55%,_transparent_75%)] [&::before]:[filter:blur(14px)] [&::before]:[border-radius:inherit] [&::before]:[opacity:0] [&::before]:[pointer-events:none] [&::before]:[z-index:-1] [&::before]:[transition:opacity_0.36s_cubic-bezier(0.16,_1,_0.3,_1)] [&:hover::before]:[opacity:1] [&:hover]:[padding:0_15px_0_10px] [&:hover]:[border:1.5px_solid_rgba(240,_180,_80,_0.9)] [&:hover]:[background:radial-gradient(circle_at_50%_35%,_rgba(240,_180,_80,_0.28)_0%,_rgba(185,_125,_35,_0.12)_68%,_rgba(22,_25,_34,_0.88)_100%)] [&:hover]:[color:#ffd680] [&:hover]:[box-shadow:0_0_20px_rgba(229,_169,_71,_0.45),_inset_0_0_12px_rgba(229,_169,_71,_0.22),_inset_0_1.5px_1.5px_rgba(255,_235,_175,_0.55),_0_4px_12px_rgba(0,_0,_0,_0.5)] ${activeSocial === "facebook" ? "is-active is-squircle [.social-dock-btn&::before]:[opacity:1] [.social-dock-btn&]:[padding:0_15px_0_10px] [.social-dock-btn&]:[border:1.5px_solid_rgba(240,_180,_80,_0.9)] [.social-dock-btn&]:[background:radial-gradient(circle_at_50%_35%,_rgba(240,_180,_80,_0.28)_0%,_rgba(185,_125,_35,_0.12)_68%,_rgba(22,_25,_34,_0.88)_100%)] [.social-dock-btn&]:[color:#ffd680] [.social-dock-btn&]:[box-shadow:0_0_20px_rgba(229,_169,_71,_0.45),_inset_0_0_12px_rgba(229,_169,_71,_0.22),_inset_0_1.5px_1.5px_rgba(255,_235,_175,_0.55),_0_4px_12px_rgba(0,_0,_0,_0.5)] max-[600px]:[.social-dock-btn&]:[width:44px] max-[600px]:[.social-dock-btn&]:[height:44px] max-[600px]:[.social-dock-btn&]:[border-radius:14px]" : "is-circle [.social-dock-btn&]:[border:1.5px_solid_rgba(229,_169,_71,_0.55)] [.social-dock-btn&]:[background:rgba(18,_21,_29,_0.45)] [.social-dock-btn&]:[box-shadow:inset_0_1px_1px_rgba(255,_220,_140,_0.15),_0_2px_8px_rgba(0,_0,_0,_0.45)] max-[600px]:[.social-dock-btn&]:[width:40px] max-[600px]:[.social-dock-btn&]:[height:40px]"}`}
                    title="Facebook - @Rathanacoding"
                    aria-label="Facebook Profile"
                    onMouseEnter={() => setActiveSocial("facebook")}
                    onClick={() => setActiveSocial("facebook")}
                  >
                    <svg
                      className="dock-svg facebook-svg [width:22px] [height:22px] [flex-shrink:0] [transition:filter_0.3s_ease,_color_0.3s_ease] [.social-dock-btn:hover_&]:[filter:drop-shadow(0_0_7px_rgba(235,_175,_80,_0.85))]"
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
                    <span className="social-btn-label [display:inline-block] [max-width:0] [opacity:0] [transform:translateX(-4px)] [overflow:hidden] [white-space:nowrap] [font-family:Poppins,_-apple-system,_sans-serif] [font-size:0.78rem] [font-weight:600] [letter-spacing:0.04em] [color:#ffffff] [pointer-events:none] [transition:max-width_0.36s_cubic-bezier(0.16,_1,_0.3,_1),_opacity_0.28s_ease,_transform_0.36s_cubic-bezier(0.16,_1,_0.3,_1)] [margin-left:0] [line-height:1] [will-change:max-width,_opacity,_transform] [.social-dock-btn:hover_&]:[max-width:90px] [.social-dock-btn:hover_&]:[opacity:1] [.social-dock-btn:hover_&]:[transform:translateX(0)] [.social-dock-btn:hover_&]:[margin-left:8px] [.social-dock-btn:hover_&]:[margin-right:2px] [.social-dock-btn:hover_&]:[color:#ffffff] [.social-dock-btn:hover_&]:[text-shadow:0_0_12px_rgba(255,_255,_255,_0.45)] [.social-dock-btn.is-active_&]:[max-width:90px] [.social-dock-btn.is-active_&]:[opacity:1] [.social-dock-btn.is-active_&]:[transform:translateX(0)] [.social-dock-btn.is-active_&]:[margin-left:8px] [.social-dock-btn.is-active_&]:[margin-right:2px] [.social-dock-btn.is-active_&]:[color:#ffffff] [.social-dock-btn.is-active_&]:[text-shadow:0_0_12px_rgba(255,_255,_255,_0.45)]">Facebook</span>
                  </a>
                </div>
              </div>
            </span>
          </h1>
        </div>

        {/* Center Portrait Cutout of Rathana */}
        <div className="center-portrait-container [position:relative] [z-index:2] [display:flex] [align-items:flex-end] [justify-content:center] [height:clamp(430px,_72vh,_670px)] [max-width:630px] [width:100%] [margin-bottom:25px] [pointer-events:auto] max-[960px]:[height:clamp(380px,_58vh,_520px)]">
          <div className="portrait-scroll-effect [display:flex] [align-items:flex-end] [justify-content:center] [height:100%] [transform:scale(var(--portrait-scale,_1))] [transform-origin:center_bottom] [opacity:var(--portrait-opacity,_1)] [transition:opacity_0.2s_ease,_transform_0.2s_ease]">
            <img
              src={profileCutout}
              alt="SOKHA Rathana - Full-Stack Developer"
              className="portrait-cutout-img [display:block] [max-height:100%] [max-width:100%] [width:auto] [object-fit:contain] [object-position:bottom_center] [filter:drop-shadow(0_20px_45px_rgba(0,_0,_0,_0.92))] [mask-image:linear-gradient(to_bottom,_black_85%,_transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_black_85%,_transparent_100%)] [transition:transform_0.3s_ease] [.cyber-hero.is-visible_&]:[animation:portrait-entrance_0.8s_cubic-bezier(0.16,_1,_0.3,_1)_both]"
            />
          </div>
        </div>
      </div>

      {/* ================= HUD OVERLAY (TOP & BOTTOM BARS) ================= */}
      <div className="hud-layer [position:absolute] [inset:0] [width:100%] [max-width:1680px] [height:100%] [margin:0_auto] [padding:clamp(70px,_8.5vh,_95px)_4vw_20px] [box-sizing:border-box] [display:flex] [flex-direction:column] [justify-content:space-between] [pointer-events:none] [z-index:10] max-[1200px]:[padding:95px_3vw_30px] max-[960px]:[display:contents]" aria-hidden="true">
        {/* TOP ROW HUD */}
        <div className="hud-top-row [width:100%] [display:flex] [justify-content:space-between] [pointer-events:none] [align-items:flex-start] max-[960px]:[order:1] max-[960px]:[width:100%] max-[960px]:[flex-direction:row] max-[960px]:[justify-content:space-between] max-[960px]:[gap:16px] max-[960px]:[z-index:10] max-[600px]:[flex-direction:column] max-[600px]:[gap:16px] max-[600px]:[align-items:flex-start]">
          <div className="hud-top-left [display:flex] [flex-direction:column] [gap:16px] [max-width:400px] [pointer-events:auto] max-[960px]:[max-width:55%] max-[600px]:[max-width:100%]" aria-hidden="true" />
          <div className="hud-top-right [display:flex] [flex-direction:column] [align-items:flex-end] [margin-left:auto] [pointer-events:auto] max-[960px]:[gap:12px] max-[600px]:[width:100%] max-[600px]:[align-items:flex-start]" aria-hidden="true" />
        </div>

        {/* BOTTOM ROW HUD (Cleaned per request) */}
        <div className="hud-bottom-row [width:100%] [display:flex] [justify-content:space-between] [pointer-events:none] [align-items:flex-end] max-[960px]:[order:3] max-[960px]:[width:100%] max-[960px]:[flex-direction:column] max-[960px]:[align-items:center] max-[960px]:[gap:24px] max-[960px]:[z-index:10]" aria-hidden="true" />
      </div>

      {/* Hero Bottom Ticker Tape Ribbon (Visible on initial load) */}
      <div className="hero-bottom-ribbon [position:absolute] [bottom:0] [left:0] [width:100%] [overflow:hidden] [z-index:25] [pointer-events:auto] max-[960px]:[position:relative] max-[960px]:[order:4] max-[960px]:[width:100%] max-[960px]:[margin-top:25px]">
        <SkillsRibbon />
      </div>
    </section>
  );
}
