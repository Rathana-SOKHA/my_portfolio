import React, { useState, useEffect, useRef } from 'react';
import '../styles/IntroScreen.css';

export default function IntroScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('LOADING CORE MODULES...');
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const hasFinishedRef = useRef(false);

  // Trigger completion
  const finishIntro = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setProgress(100);
    setStatusText('SYSTEM READY // LAUNCHING INTERFACE...');
    setIsExiting(true);

    setTimeout(() => {
      setIsFinished(true);
      if (onComplete) {
        onComplete();
      }
    }, 600); // Wait for exit animation
  };

  useEffect(() => {
    // Keyboard skip listener (Escape or Space or Enter)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        finishIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Fast, smooth loading progress timer (0 to 100 in ~1.6s)
    const startTime = Date.now();
    const duration = 1600;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 30) {
        setStatusText('INITIALIZING_CORE_SYSTEMS...');
      } else if (pct < 60) {
        setStatusText('MOUNTING_REACT_ECOSYSTEM...');
      } else if (pct < 85) {
        setStatusText('OPTIMIZING_NEURAL_ASSETS...');
      } else if (pct < 100) {
        setStatusText('SYNCHRONIZING_INTERFACE...');
      } else {
        clearInterval(interval);
        finishIntro();
      }
    }, 30);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
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
      {/* Background Grid & Atmospheric Orange Glow */}
      <div className="cyber-intro-grid" aria-hidden="true" />
      <div className="cyber-intro-glow" aria-hidden="true" />

      {/* Top HUD Telemetry Bar */}
      <div className="intro-top-hud">
        <div className="intro-hud-left">
          <span className="hud-cross">+</span>
          <span className="hud-mono">SYS.BOOT // ARCHITECTURE_V2.0</span>
          <span className="hud-status-badge">
            <span className="hud-pulse-dot" /> LIVE
          </span>
        </div>
        <div className="intro-hud-right">
          <span className="hud-mono">LOC: PHNOM_PENH [KH]</span>
          <span className="hud-cross">+</span>
        </div>
      </div>

      {/* Center Console Box */}
      <div className="cyber-intro-console">
        {/* HUD Corner Brackets */}
        <div className="corner-bracket corner-top-left" />
        <div className="corner-bracket corner-top-right" />
        <div className="corner-bracket corner-bottom-left" />
        <div className="corner-bracket corner-bottom-right" />

        {/* Tag Header */}
        <div className="intro-console-header">
          <span className="console-bracket">[</span>
          <span className="console-code">&lt;/&gt; INITIALIZING_DEV_ENVIRONMENT</span>
          <span className="console-bracket">]</span>
        </div>

        {/* Name Display */}
        <div className="intro-title-block">
          <span className="intro-firstname">SOKHA</span>
          <span className="intro-lastname">RATHANA</span>
        </div>

        {/* Role & Manifesto Tag */}
        <div className="intro-role-tag">
          <span className="slash-decor">//////</span>
          <span>FULL-STACK DEVELOPER & SYSTEM DESIGNER</span>
          <span className="slash-decor">//////</span>
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
            <div className="intro-track-segments">
              <span /><span /><span /><span /><span />
            </div>
          </div>
        </div>

        {/* Skip Hint */}
        <div className="intro-skip-hint">
          <span className="hint-bracket">[</span>
          <span>CLICK ANYWHERE OR PRESS ESC TO SKIP</span>
          <span className="hint-bracket">]</span>
        </div>
      </div>

      {/* Bottom HUD Telemetry Bar */}
      <div className="intro-bottom-hud">
        <div className="hud-coordinates">
          <span>LAT: 11.5564° N</span>
          <span className="hud-separator">|</span>
          <span>LON: 104.9282° E</span>
        </div>
        <div className="hud-crosshairs">
          <span>+</span><span>+</span><span>+</span>
        </div>
        <div className="hud-build-id">
          <span>BUILD: PRODUCTION_V2.0.4</span>
        </div>
      </div>

      {/* Wipe Shutter Transition Overlays */}
      <div className="cyber-shutter shutter-top" />
      <div className="cyber-shutter shutter-bottom" />
    </div>
  );
}
