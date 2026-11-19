import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";

export default function ParallaxImage({
  alt,
  className = "",
  speed = 0.15,
  ...imageProps
}) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  // Calculate parallax offset: from speed * 30px to -speed * 30px
  const y = useTransform(smoothProgress, [0, 1], [`${speed * 40}px`, `-${speed * 40}px`]);

  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 h-full w-full overflow-hidden" ref={containerRef}>
        <img {...imageProps} alt={alt} className={`block h-full w-full object-cover motion-reduce:!transform-none ${className}`} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden" ref={containerRef}>
      <motion.img
        {...imageProps}
        alt={alt}
        className={`block h-full w-full object-cover motion-reduce:!transform-none ${className}`}
        style={{
          y,
          scale: 1.08,
          willChange: "transform",
        }}
      />
    </div>
  );
}
