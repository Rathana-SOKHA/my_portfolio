import { createElement } from "react";
import { motion, useReducedMotion } from "motion/react";

const ScrollReveal = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
  distance = "36px",
  style = {},
}) => {
  const shouldReduceMotion = useReducedMotion();
  const initial = {
    opacity: 0,
    x: 0,
    y: 0,
    scale: 1,
  };

  if (animation === "fade-up") initial.y = distance;
  else if (animation === "fade-down") initial.y = `-${distance}`;
  else if (animation === "fade-left") initial.x = distance;
  else if (animation === "fade-right") initial.x = `-${distance}`;
  else if (animation === "zoom-in") initial.scale = 0.85;

  return createElement(
    motion.div,
    {
      className: `scroll-reveal ${className}`,
      initial: shouldReduceMotion ? false : initial,
      whileInView: shouldReduceMotion
        ? undefined
        : { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once, amount: threshold },
      transition: {
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      },
      style,
    },
    children
  );
};

export default ScrollReveal;
