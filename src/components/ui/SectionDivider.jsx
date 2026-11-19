import React from "react";
import { motion, useReducedMotion } from "motion/react";

export default function SectionDivider({ label = "SYS_NAV" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative z-[5] mx-auto flex h-[30px] w-full max-w-[1400px] items-center justify-center pointer-events-none max-[768px]:h-5" aria-hidden="true">
      <motion.div
        className="absolute left-[5%] right-[5%] h-px bg-[linear-gradient(90deg,transparent_0%,rgba(229,169,71,0.25)_20%,rgba(255,235,175,0.25)_50%,rgba(229,169,71,0.25)_80%,transparent_100%)] [transform-origin:center_center]"
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="relative inline-flex items-center gap-2 rounded-[4px] border border-[rgba(229,169,71,0.35)] bg-[#080a0f] px-[14px] py-1 [box-shadow:0_0_14px_rgba(229,169,71,0.18)] [[data-theme=light]_&]:border-[rgba(229,169,71,0.3)] [[data-theme=light]_&]:bg-[#f8fafc] [[data-theme=light]_&]:[box-shadow:0_0_10px_rgba(229,169,71,0.15)]"
        initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span className="text-[0.75rem] font-bold leading-none text-[#e5a947]">+</span>
        <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#d4a76a] [font-family:'Space_Mono',monospace] [[data-theme=light]_&]:text-[#b48348]">{label}</span>
        <span className="text-[0.75rem] font-bold leading-none text-[#e5a947]">+</span>
      </motion.div>
    </div>
  );
}
