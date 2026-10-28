import { useEffect, useRef } from "react";
import "../../styles/ParallaxImage.css";

export default function ParallaxImage({
  alt,
  className = "",
  speed = 0.08,
  ...imageProps
}) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (reducedMotion || isMobile) return;

    let isVisible = false;
    let frameId = 0;

    const updatePosition = () => {
      frameId = 0;
      if (!isVisible) return;

      const bounds = wrapper.getBoundingClientRect();
      const distanceFromCenter = bounds.top + bounds.height / 2 - window.innerHeight / 2;
      const offset = Math.max(-18, Math.min(18, -distanceFromCenter * speed));
      wrapper.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const scheduleUpdate = () => {
      if (isVisible && !frameId) frameId = window.requestAnimationFrame(updatePosition);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) scheduleUpdate();
    }, { rootMargin: "100px 0px" });

    observer.observe(wrapper);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [speed]);

  return (
    <div className="parallax-image" ref={wrapperRef}>
      <img {...imageProps} alt={alt} className={className} />
    </div>
  );
}
