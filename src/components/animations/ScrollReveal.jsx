import React from "react";
import { motion, useReducedMotion } from "motion/react";

const animationVariants = {
  "fade-up": {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -36 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.65,
  threshold = 0.15,
  margin = "0px 0px -40px 0px",
  once = true,
  style = {},
  as = "div",
}) {
  const shouldReduceMotion = useReducedMotion();
  const selectedVariant = animationVariants[animation] || animationVariants["fade-up"];

  const MotionComponent = motion[as] || motion.div;

  if (shouldReduceMotion) {
    const Component = as;
    return (
      <Component className={className} style={style}>
        {children}
      </Component>
    );
  }

  return (
    <MotionComponent
      className={`scroll-reveal ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold, margin }}
      variants={selectedVariant}
      transition={{
        duration: typeof duration === "number" && duration > 10 ? duration / 1000 : duration,
        delay: typeof delay === "number" && delay > 10 ? delay / 1000 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={style}
    >
      {children}
    </MotionComponent>
  );
}
