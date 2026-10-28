import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
  distance = '60px',
  style = {},
}) => {
  const ref = useRef(null);
  const [prefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [isVisible, setIsVisible] = useState(
    () => prefersReducedMotion || !("IntersectionObserver" in window)
  );

  useEffect(() => {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, once, prefersReducedMotion]);

  const animationStyles = {
    opacity: isVisible || prefersReducedMotion ? 1 : 0,
    transform: prefersReducedMotion ? 'none' : 'translateY(0)',
    transition: prefersReducedMotion
      ? 'none'
      : `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
    transitionDelay: `${delay}ms`,
    ...style,
  };

  if (prefersReducedMotion) {
    animationStyles.opacity = 1;
    animationStyles.transform = 'none';
  } else if (isVisible) {
    animationStyles.opacity = 1;
    switch (animation) {
      case 'fade-up':
        animationStyles.transform = 'translateY(0)';
        break;
      case 'fade-down':
        animationStyles.transform = 'translateY(0)';
        break;
      case 'fade-left':
        animationStyles.transform = 'translateX(0)';
        break;
      case 'fade-right':
        animationStyles.transform = 'translateX(0)';
        break;
      case 'zoom-in':
        animationStyles.transform = 'scale(1)';
        break;
      default:
        animationStyles.transform = 'translateY(0)';
    }
  } else {
    switch (animation) {
      case 'fade-up':
        animationStyles.transform = `translateY(${distance})`;
        break;
      case 'fade-down':
        animationStyles.transform = `translateY(-${distance})`;
        break;
      case 'fade-left':
        animationStyles.transform = `translateX(${distance})`;
        break;
      case 'fade-right':
        animationStyles.transform = `translateX(-${distance})`;
        break;
      case 'zoom-in':
        animationStyles.transform = 'scale(0.85)';
        break;
      default:
        animationStyles.transform = `translateY(${distance})`;
    }
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className} ${isVisible ? 'scroll-reveal-visible' : ''}`}
      style={animationStyles}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
