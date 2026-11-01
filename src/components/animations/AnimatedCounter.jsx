import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

export default function AnimatedCounter({
  target,
  duration = 1.4,
  suffix = "",
  prefix = "",
  decimals = 0,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    const start = 0;
    const end = parseFloat(target);
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOut;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration, shouldReduceMotion]);

  const displayValue = shouldReduceMotion ? target : count;
  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.floor(displayValue).toString().padStart(target >= 10 && target < 100 && target.toString().startsWith("0") ? 2 : 1, "0");

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
