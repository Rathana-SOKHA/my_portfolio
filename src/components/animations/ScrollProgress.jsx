import { useEffect, useRef } from "react";
import "../../styles/ScrollProgress.css";

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const progressBar = progressRef.current;
    if (!progressBar) return;

    let frameId = 0;
    const updateProgress = () => {
      frameId = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0
        ? Math.min(window.scrollY / scrollableHeight, 1)
        : 0;
      progressBar.style.transform = `scaleX(${progress})`;
    };

    const scheduleUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
