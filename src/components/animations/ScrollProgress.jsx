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
        className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left pointer-events-none bg-[linear-gradient(90deg,#d49a3d_0%,#ffdf8d_50%,#e5a947_100%)] [background-size:200%_100%] [box-shadow:0_0_12px_rgba(229,169,71,0.65),0_0_24px_rgba(229,169,71,0.35)] animate-[progressShimmer_3s_linear_infinite] [transform-origin:left_center]"
        style={{ scaleX: shouldReduceMotion ? scrollYProgress : scaleX }}
        aria-hidden="true"
      >
        <span className="absolute right-0 top-0 h-[3px] w-[30px] bg-white [box-shadow:0_0_12px_#f8ce72,0_0_20px_#e5a947]" />
      </motion.div>

      {/* Floating HUD Scroll-To-Top indicator */}
      <motion.button
        type="button"
        className={`group fixed bottom-7 right-7 z-[990] flex h-12 w-12 cursor-pointer flex-col items-center justify-center overflow-visible rounded-lg border-[1.5px] border-[rgba(229,169,71,0.38)] bg-[rgba(9,11,16,0.92)] p-0 [box-shadow:0_8px_24px_rgba(0,0,0,0.5),0_0_16px_rgba(229,169,71,0.2)] backdrop-blur-[10px] [transition:all_0.25s_cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-[#e5a947] hover:[box-shadow:0_8px_30px_rgba(0,0,0,0.6),0_0_24px_rgba(229,169,71,0.5)] focus-visible:outline-2 focus-visible:outline-[#e5a947] focus-visible:outline-offset-4 [[data-theme=light]_&]:bg-[rgba(255,255,255,0.94)] [[data-theme=light]_&]:border-[rgba(229,169,71,0.35)] [[data-theme=light]_&]:[box-shadow:0_8px_24px_rgba(0,0,0,0.1),0_0_16px_rgba(229,169,71,0.18)] ${showScrollTop ? "is-active" : ""}`}
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
        <div className="pointer-events-none absolute -left-px -top-px h-[6px] w-[6px] border-0 border-l-2 border-t-2 border-solid border-[#e5a947]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-px -right-px h-[6px] w-[6px] border-0 border-b-2 border-r-2 border-solid border-[#e5a947]" aria-hidden="true" />

        <svg className="pointer-events-none absolute inset-[2px] h-[calc(100%-4px)] w-[calc(100%-4px)] -rotate-90" viewBox="0 0 44 44" aria-hidden="true">
          <circle
            className="stroke-[rgba(255,255,255,0.08)] [[data-theme=light]_&]:stroke-[rgba(0,0,0,0.08)]"
            cx="22"
            cy="22"
            r="18"
            fill="none"
            strokeWidth="2.5"
          />
          <circle
            className="stroke-[#e5a947] [stroke-linecap:round] [transition:stroke-dashoffset_0.12s_linear] [filter:drop-shadow(0_0_5px_rgba(229,169,71,0.7))]"
            cx="22"
            cy="22"
            r="18"
            fill="none"
            strokeWidth="2.5"
            strokeDasharray={113}
            strokeDashoffset={113 - (113 * scrollPercentage) / 100}
          />
        </svg>

        <span className="z-[1] flex items-center justify-center text-[#e5a947] [transition:transform_0.2s_ease,opacity_0.2s_ease,color_0.2s_ease] group-hover:-translate-y-0.5 group-hover:text-[#f8ce72]" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </span>
        <span className="z-[1] mt-[-1px] text-[0.58rem] font-bold tracking-[0.02em] text-[#cbd5e1] [font-family:'Space_Mono',monospace] [transition:color_0.2s_ease] group-hover:text-white [[data-theme=light]_&]:text-[#475569] [[data-theme=light]_&]:group-hover:text-[#0f172a]">{scrollPercentage}%</span>
      </motion.button>
    </>
  );
}
