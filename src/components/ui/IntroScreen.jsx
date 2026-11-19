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
      className={`cyber-intro-screen  [position:fixed] [inset:0] [width:100vw] [height:100vh] [background-color:#0b0d12] [color:#ffffff] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] [z-index:99999] [cursor:pointer] [user-select:none] [overflow:hidden] [box-sizing:border-box] [padding:30px_4vw] [transition:opacity_0.65s_cubic-bezier(0.16,_1,_0.3,_1),_transform_0.65s_cubic-bezier(0.16,_1,_0.3,_1)] ${isExiting ? 'exit-active [.cyber-intro-screen&]:[opacity:0] [.cyber-intro-screen&]:[transform:scale(1.04)] [.cyber-intro-screen&]:[pointer-events:none]' : ''}`}
      onClick={finishIntro}
      role="button"
      tabIndex={0}
      title="Click anywhere to skip intro"
    >
      {/* Background Ambience & Canvas */}
      <div className="intro-bg-backdrop [position:absolute] [inset:0] [background:radial-gradient(ellipse_at_50%_50%,_rgba(32,_36,_48,_0.75)_0%,_rgba(13,_15,_20,_0.95)_65%,_#08090c_100%)] [pointer-events:none] [z-index:0]" aria-hidden="true" />
      <canvas className="intro-pcb-canvas [position:absolute] [inset:0] [width:100%] [height:100%] [pointer-events:none] [z-index:1]" ref={canvasRef} aria-hidden="true" />

      {/* Viewport Edge Grip Tabs (Matching Hero Cockpit) */}
      <div className="console-grip-tab grip-left intro-grip [position:absolute] [top:50%] [width:13px] [height:130px] [background:linear-gradient(180deg,_#2a2e3a_0%,_#1a1c24_50%,_#12131a_100%)] [border:1px_solid_rgba(255,_255,_255,_0.12)] [display:flex] [flex-direction:column] [align-items:center] [justify-content:space-between] [padding:8px_0] [box-sizing:border-box] [z-index:20] [pointer-events:none] [box-shadow:0_4px_18px_rgba(0,_0,_0,_0.8)] [transform:translateY(-50%)] [left:0] [border-left:none] [border-top-right-radius:9px] [border-bottom-right-radius:9px] max-[960px]:[display:none] max-[768px]:[display:none]" aria-hidden="true">
        <span className="grip-screw top-screw [width:4px] [height:4px] [border-radius:50%] [background:#474f5e] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.3),_0_1px_2px_rgba(0,_0,_0,_0.8)]" />
        <span className="grip-notch [width:3px] [height:28px] [border-radius:2px] [background:rgba(0,_0,_0,_0.7)] [box-shadow:inset_0_1px_2px_rgba(0,_0,_0,_0.9),_0_1px_0_rgba(255,_255,_255,_0.08)]" />
        <span className="grip-screw bottom-screw [width:4px] [height:4px] [border-radius:50%] [background:#474f5e] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.3),_0_1px_2px_rgba(0,_0,_0,_0.8)]" />
      </div>
      <div className="console-grip-tab grip-right intro-grip [position:absolute] [top:50%] [width:13px] [height:130px] [background:linear-gradient(180deg,_#2a2e3a_0%,_#1a1c24_50%,_#12131a_100%)] [border:1px_solid_rgba(255,_255,_255,_0.12)] [display:flex] [flex-direction:column] [align-items:center] [justify-content:space-between] [padding:8px_0] [box-sizing:border-box] [z-index:20] [pointer-events:none] [box-shadow:0_4px_18px_rgba(0,_0,_0,_0.8)] [transform:translateY(-50%)] [right:0] [border-right:none] [border-top-left-radius:9px] [border-bottom-left-radius:9px] max-[960px]:[display:none] max-[768px]:[display:none]" aria-hidden="true">
        <span className="grip-screw top-screw [width:4px] [height:4px] [border-radius:50%] [background:#474f5e] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.3),_0_1px_2px_rgba(0,_0,_0,_0.8)]" />
        <span className="grip-notch [width:3px] [height:28px] [border-radius:2px] [background:rgba(0,_0,_0,_0.7)] [box-shadow:inset_0_1px_2px_rgba(0,_0,_0,_0.9),_0_1px_0_rgba(255,_255,_255,_0.08)]" />
        <span className="grip-screw bottom-screw [width:4px] [height:4px] [border-radius:50%] [background:#474f5e] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.3),_0_1px_2px_rgba(0,_0,_0,_0.8)]" />
      </div>

      {/* Top HUD Telemetry Bar */}
      <div className="intro-top-hud [position:absolute] [top:24px] [left:4vw] [right:4vw] [display:flex] [justify-content:space-between] [align-items:center] [font-family:Space_Mono,_monospace] [font-size:0.76rem] [color:#8b949e] [letter-spacing:0.12em] [z-index:3] [pointer-events:none]">
        <div className="intro-hud-left [display:flex] [align-items:center] [gap:12px]">
          <span className="orange-cross select-none [color:#e5a947] [font-size:1.25rem] [font-weight:800] [line-height:1] [text-shadow:0_0_10px_rgba(229,_169,_71,_0.7)] [.intro-top-hud_&]:[color:#ff7a18] [.intro-top-hud_&]:[font-weight:800] [.intro-top-hud_&]:[font-size:1.15rem] [.intro-top-hud_&]:[line-height:1] [.intro-top-hud_&]:[text-shadow:0_0_10px_rgba(255,_122,_24,_0.75)]">+</span>
        </div>
        <div className="intro-hud-right [display:flex] [align-items:center] [gap:12px]">
          <div className="intro-status-pill [display:inline-flex] [align-items:center] [gap:6px] [background:rgba(14,_18,_25,_0.85)] [border:1px_solid_rgba(255,_122,_24,_0.35)] [padding:4px_10px] [border-radius:9999px] [color:#ff9d45] [font-size:0.7rem] [font-weight:700] [letter-spacing:0.14em] [box-shadow:0_0_12px_rgba(255,_122,_24,_0.18)]">
            <span className="pill-dot [width:5px] [height:5px] [background:#ff7a18] [border-radius:50%] [box-shadow:0_0_8px_#ff7a18] [animation:introDotPulse_1.6s_infinite_ease-in-out]" />
            <span>ONLINE</span>
          </div>
          <span className="faint-cross [color:rgba(255,_255,_255,_0.28)] [font-size:1.05rem] [margin-left:14px] [line-height:1] [.intro-top-hud_&]:[color:rgba(255,_255,_255,_0.25)] [.intro-top-hud_&]:[font-size:1rem] [.intro-top-hud_&]:[line-height:1]">+</span>
        </div>
      </div>

      {/* Center Console Panel (Styled to match Hero Tech Card / HUD) */}
      <div className="cyber-intro-console [position:relative] [width:100%] [max-width:640px] [background:linear-gradient(135deg,_rgba(22,_25,_34,_0.94)_0%,_rgba(13,_15,_22,_0.96)_100%)] [backdrop-filter:blur(20px)] [-webkit-backdrop-filter:blur(20px)] [border:1px_solid_rgba(255,_255,_255,_0.12)] [padding:44px_40px_36px] [border-radius:6px] [box-shadow:inset_0_1px_1px_rgba(255,_210,_150,_0.28),_0_24px_60px_rgba(0,_0,_0,_0.85),_0_0_35px_rgba(255,_122,_24,_0.08)] [display:flex] [flex-direction:column] [align-items:center] [text-align:center] [z-index:3] [transition:transform_0.4s_ease] max-[768px]:[padding:32px_22px_26px]">
        {/* Tactical Corner Brackets */}
        <span className="card-bracket top-left [.cyber-intro-console_&]:[position:absolute] [.cyber-intro-console_&]:[width:8px] [.cyber-intro-console_&]:[height:8px] [.cyber-intro-console_&]:[pointer-events:none] [.cyber-intro-console_.card-bracket&]:[top:-1px] [.cyber-intro-console_.card-bracket&]:[left:-1px] [.cyber-intro-console_.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.6)] [.cyber-intro-console_.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.6)]" />
        <span className="card-bracket top-right [.cyber-intro-console_&]:[position:absolute] [.cyber-intro-console_&]:[width:8px] [.cyber-intro-console_&]:[height:8px] [.cyber-intro-console_&]:[pointer-events:none] [.cyber-intro-console_.card-bracket&]:[top:-1px] [.cyber-intro-console_.card-bracket&]:[right:-1px] [.cyber-intro-console_.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.6)] [.cyber-intro-console_.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.6)]" />
        <span className="card-bracket bottom-left [.cyber-intro-console_&]:[position:absolute] [.cyber-intro-console_&]:[width:8px] [.cyber-intro-console_&]:[height:8px] [.cyber-intro-console_&]:[pointer-events:none] [.cyber-intro-console_.card-bracket&]:[bottom:-1px] [.cyber-intro-console_.card-bracket&]:[left:-1px] [.cyber-intro-console_.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.6)] [.cyber-intro-console_.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.6)]" />
        <span className="card-bracket bottom-right [.cyber-intro-console_&]:[position:absolute] [.cyber-intro-console_&]:[width:8px] [.cyber-intro-console_&]:[height:8px] [.cyber-intro-console_&]:[pointer-events:none] [.cyber-intro-console_.card-bracket&]:[bottom:-1px] [.cyber-intro-console_.card-bracket&]:[right:-1px] [.cyber-intro-console_.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.6)] [.cyber-intro-console_.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.6)]" />

        {/* Top Tag Header: Logo branding matching navbar */}
        <div className="intro-console-header [display:inline-flex] [align-items:center] [gap:4px] [margin-bottom:18px] [user-select:none]">
          <span className="header-brand-name [color:#ffffff] [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:1.05rem] [font-weight:800] [letter-spacing:0.08em]">RATHANA</span>
          <span className="header-brand-accent [color:#ff7a18] [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:1.05rem] [font-weight:800] [letter-spacing:0.08em] [text-shadow:0_0_12px_rgba(255,_122,_24,_0.7)]">.DEV</span>
        </div>

        {/* Name Display */}
        <div className="intro-title-block [display:flex] [align-items:baseline] [justify-content:center] [gap:12px] [margin-bottom:6px] [flex-wrap:wrap]">
          <span className="intro-firstname [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(2rem,_4.5vw,_3.4rem)] [font-weight:900] [letter-spacing:-0.01em] [color:#ffffff] [line-height:1]">SOKHA</span>
          <span className="intro-lastname [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(2rem,_4.5vw,_3.4rem)] [font-weight:900] [letter-spacing:-0.01em] [color:#e59344] [line-height:1] [text-shadow:0_0_24px_rgba(229,_147,_68,_0.5)]">RATHANA</span>
        </div>

        {/* Hero-matched 3D Role Subtitle */}
        <div className="intro-role-subtitle [margin-bottom:16px]">
          <span className="role-sub-text [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(0.95rem,_1.8vw,_1.45rem)] [font-weight:900] [letter-spacing:0.06em] [color:#ffffff] [text-transform:uppercase] [text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_4px_10px_rgba(0,_0,_0,_0.85)]">FULL-STACK DEVELOPER</span>
        </div>

        {/* Slashes Decor Matching Hero Bottom-Left */}
        <div className="intro-diagonal-slashes [display:flex] [gap:4px] [font-family:Space_Mono,_monospace] [font-size:1.1rem] [font-weight:800] [color:#ff7a18] [letter-spacing:-0.08em] [line-height:1] [margin-bottom:26px] [text-shadow:0_0_10px_rgba(255,_122,_24,_0.6)] [&_span]:[display:inline-block] [&_span]:[transform:skewX(-15deg)]" aria-hidden="true">
          <span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
        </div>

        {/* Progress Display Bar */}
        <div className="intro-progress-container [width:100%] [max-width:460px] [display:flex] [flex-direction:column] [gap:9px] [margin-bottom:24px]">
          <div className="intro-progress-info [display:flex] [justify-content:space-between] [align-items:center] [font-family:Space_Mono,_monospace] [font-size:clamp(0.68rem,_0.78vw,_0.78rem)] [letter-spacing:0.06em]">
            <span className="intro-status-text [color:#9aa2b1] [text-transform:uppercase]">{statusText}</span>
            <span className="intro-pct-num [color:#ff9d45] [font-weight:700]">{progress}%</span>
          </div>

          <div className="intro-progress-track [position:relative] [width:100%] [height:6px] [background:rgba(14,_16,_22,_0.9)] [border-radius:9999px] [overflow:hidden] [border:1px_solid_rgba(255,_255,_255,_0.1)] [box-shadow:inset_0_1px_3px_rgba(0,_0,_0,_0.8)]">
            <div
              className="intro-progress-fill [height:100%] [background:linear-gradient(90deg,_#d88032_0%,_#ff7a18_50%,_#e8c67c_100%)] [border-radius:9999px] [box-shadow:0_0_14px_rgba(255,_122,_24,_0.75)] [transition:width_0.06s_linear]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Quick Skip Hint */}
        <div className="intro-skip-hint [font-family:Space_Mono,_monospace] [font-size:0.68rem] [letter-spacing:0.14em] [color:#707b8b] [display:inline-flex] [align-items:center] [gap:5px] [text-transform:uppercase] [transition:color_0.2s_ease] [.cyber-intro-screen:hover_&]:[color:#c4cdd8]">
          <span className="skip-bracket [color:rgba(255,_255,_255,_0.25)]">[</span>
          <span>CLICK ANYWHERE OR PRESS ESC TO PROCEED</span>
          <span className="skip-bracket [color:rgba(255,_255,_255,_0.25)]">]</span>
        </div>
      </div>

      {/* Bottom HUD Telemetry Bar */}
      <div className="intro-bottom-hud [position:absolute] [bottom:24px] [left:4vw] [right:4vw] [display:flex] [justify-content:space-between] [align-items:center] [font-family:Space_Mono,_monospace] [font-size:0.72rem] [color:#636e7b] [letter-spacing:0.12em] [z-index:3] [pointer-events:none]">
        <div className="hud-crosshairs [display:flex] [gap:8px] [color:rgba(255,_255,_255,_0.28)] [font-size:0.95rem]">
          <span>+</span><span>+</span><span>+</span>
        </div>
      </div>
    </div>
  );
}
