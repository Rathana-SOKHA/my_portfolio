import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/IntroScreen.css';

export default function IntroScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('01 // INITIALIZING_NEURAL_KERNEL...');
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const hasFinishedRef = useRef(false);
  const canvasRef = useRef(null);

  // Trigger completion
  const finishIntro = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setProgress(100);
    setStatusText('05 // SYSTEM_ONLINE // LAUNCHING_INTERFACE...');
    setIsExiting(true);

    setTimeout(() => {
      setIsFinished(true);
      if (onComplete) {
        onComplete();
      }
    }, 650); // Wait for cinematic aperture exit transition
  }, [onComplete]);

  // Keyboard skip listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        finishIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Boot progress simulation (~1.6s)
    const startTime = Date.now();
    const duration = 1600;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 25) {
        setStatusText('01 // INITIALIZING_NEURAL_KERNEL...');
      } else if (pct < 50) {
        setStatusText('02 // ROUTING_PCB_CIRCUIT_TRACES...');
      } else if (pct < 75) {
        setStatusText('03 // COMPILING_FULLSTACK_MODULES...');
      } else if (pct < 95) {
        setStatusText('04 // SYNCHRONIZING_TACTICAL_HUD...');
      } else if (pct < 100) {
        setStatusText('05 // SYSTEM_ONLINE // LAUNCHING_INTERFACE...');
      } else {
        clearInterval(interval);
        finishIntro();
      }
    }, 28);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [finishIntro]);

  // Ambient PCB & Golden particles background canvas matching Hero section
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.3 + Math.random() * 0.8,
      size: 1 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.6,
      sway: Math.random() * Math.PI * 2,
    }));

    // Fixed PCB lines matching Hero aesthetic
    const drawPCB = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Central amber spotlight
      const spot = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.min(width, height) * 0.6);
      spot.addColorStop(0, 'rgba(235, 140, 40, 0.16)');
      spot.addColorStop(0.5, 'rgba(180, 95, 25, 0.06)');
      spot.addColorStop(1, 'rgba(8, 9, 12, 0)');
      ctx.fillStyle = spot;
      ctx.fillRect(0, 0, width, height);

      // PCB horizontal traces
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(195, 130, 60, 0.22)';
      const trackRows = [height * 0.25, height * 0.5, height * 0.75];
      trackRows.forEach((y, i) => {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width * 0.35, y);
        ctx.lineTo(width * 0.45, y + (i % 2 === 0 ? 30 : -30));
        ctx.lineTo(width, y + (i % 2 === 0 ? 30 : -30));
        ctx.stroke();

        // Small nodes
        ctx.fillStyle = '#ff9d45';
        ctx.beginPath();
        ctx.arc(width * 0.35, y, 2.5, 0, Math.PI * 2);
        ctx.arc(width * 0.65, y + (i % 2 === 0 ? 30 : -30), 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Ambient golden dust motes
      const sec = time / 1000;
      particles.forEach((p) => {
        p.y -= p.speed;
        p.sway += 0.02;
        const px = p.x + Math.sin(p.sway) * 8;
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        const flicker = 0.7 + Math.sin(sec * 3 + p.sway) * 0.3;
        ctx.fillStyle = `rgba(255, 205, 110, ${p.alpha * flicker})`;
        ctx.beginPath();
        ctx.arc(px, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(drawPCB);
    };

    animId = requestAnimationFrame(drawPCB);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  if (isFinished) return null;

  return (
    <div
      className={`cyber-intro-screen ${isExiting ? 'exit-active' : ''}`}
      onClick={finishIntro}
      role="button"
      tabIndex={0}
      title="Click anywhere to skip intro"
    >
      {/* Background Ambience & Canvas */}
      <div className="intro-bg-backdrop" aria-hidden="true" />
      <canvas className="intro-pcb-canvas" ref={canvasRef} aria-hidden="true" />

      {/* Viewport Edge Grip Tabs (Matching Hero Cockpit) */}
      <div className="console-grip-tab grip-left intro-grip" aria-hidden="true">
        <span className="grip-screw top-screw" />
        <span className="grip-notch" />
        <span className="grip-screw bottom-screw" />
      </div>
      <div className="console-grip-tab grip-right intro-grip" aria-hidden="true">
        <span className="grip-screw top-screw" />
        <span className="grip-notch" />
        <span className="grip-screw bottom-screw" />
      </div>

      {/* Top HUD Telemetry Bar */}
      <div className="intro-top-hud">
        <div className="intro-hud-left">
          <span className="orange-cross">+</span>
          <span className="hud-label-text">TACTICAL_SYS_BOOT // v2.6</span>
        </div>
        <div className="intro-hud-right">
          <div className="intro-status-pill">
            <span className="pill-dot" />
            <span>ONLINE</span>
          </div>
          <span className="faint-cross">+</span>
        </div>
      </div>

      {/* Center Console Panel (Styled to match Hero Tech Card / HUD) */}
      <div className="cyber-intro-console">
        {/* Tactical Corner Brackets */}
        <span className="card-bracket top-left" />
        <span className="card-bracket top-right" />
        <span className="card-bracket bottom-left" />
        <span className="card-bracket bottom-right" />

        {/* Top Tag Header: Logo branding matching navbar */}
        <div className="intro-console-header">
          <span className="header-brand-name">RATHANA</span>
          <span className="header-brand-accent">.DEV</span>
        </div>

        {/* Name Display */}
        <div className="intro-title-block">
          <span className="intro-firstname">SOKHA</span>
          <span className="intro-lastname">RATHANA</span>
        </div>

        {/* Hero-matched 3D Role Subtitle */}
        <div className="intro-role-subtitle">
          <span className="role-sub-text">FULL-STACK DEVELOPER</span>
        </div>

        {/* Slashes Decor Matching Hero Bottom-Left */}
        <div className="intro-diagonal-slashes" aria-hidden="true">
          <span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
        </div>

        {/* Progress Display Bar */}
        <div className="intro-progress-container">
          <div className="intro-progress-info">
            <span className="intro-status-text">{statusText}</span>
            <span className="intro-pct-num">{progress}%</span>
          </div>

          <div className="intro-progress-track">
            <div
              className="intro-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Quick Skip Hint */}
        <div className="intro-skip-hint">
          <span className="skip-bracket">[</span>
          <span>CLICK ANYWHERE OR PRESS ESC TO PROCEED</span>
          <span className="skip-bracket">]</span>
        </div>
      </div>

      {/* Bottom HUD Telemetry Bar */}
      <div className="intro-bottom-hud">
        <div className="hud-crosshairs">
          <span>+</span><span>+</span><span>+</span>
        </div>
        <div className="intro-hud-credits">
          <span>CLEAN CODE • SCALABLE SOLUTIONS • BETTER EXPERIENCES</span>
        </div>
      </div>
    </div>
  );
}
