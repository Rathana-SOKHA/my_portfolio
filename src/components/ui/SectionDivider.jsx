import React from "react";
import { motion, useReducedMotion } from "motion/react";
import "../../styles/SectionDivider.css";

export default function SectionDivider({ label = "SYS_NAV" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="cyber-section-divider" aria-hidden="true">
      <motion.div
        className="divider-line"
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="divider-core"
        initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span className="divider-cross">+</span>
        <span className="divider-tag">{label}</span>
        <span className="divider-cross">+</span>
      </motion.div>
    </div>
  );
}
