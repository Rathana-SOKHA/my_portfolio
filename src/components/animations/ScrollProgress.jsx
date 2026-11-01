import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import "../../styles/ScrollProgress.css";

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress, scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Smooth progress bar spring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 35,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribeScroll = scrollY.on("change", (latest) => {
      setShowScrollTop(latest > 350);
    });

    const unsubscribeProgress = scrollYProgress.on("change", (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });

    return () => {
      unsubscribeScroll();
      unsubscribeProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      {/* Top glowing scroll progress line */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: shouldReduceMotion ? scrollYProgress : scaleX }}
        aria-hidden="true"
      >
        <span className="scroll-progress-glow" />
      </motion.div>

      {/* Floating HUD Scroll-To-Top indicator */}
      <motion.button
        type="button"
        className={`hud-scroll-top ${showScrollTop ? "is-active" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        initial={false}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="corner-bracket corner-top-left" aria-hidden="true" />
        <div className="corner-bracket corner-bottom-right" aria-hidden="true" />

        <svg className="hud-scroll-ring" viewBox="0 0 44 44" aria-hidden="true">
          <circle
            className="hud-ring-track"
            cx="22"
            cy="22"
            r="18"
            fill="none"
            strokeWidth="2.5"
          />
          <circle
            className="hud-ring-fill"
            cx="22"
            cy="22"
            r="18"
            fill="none"
            strokeWidth="2.5"
            strokeDasharray={113}
            strokeDashoffset={113 - (113 * scrollPercentage) / 100}
          />
        </svg>

        <span className="hud-scroll-icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </span>
        <span className="hud-scroll-pct">{scrollPercentage}%</span>
      </motion.button>
    </>
  );
}
