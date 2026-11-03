import React, { useState, useEffect } from "react";

/**
 * TypewriterTitle Component
 * Types forward letter-by-letter, pauses, runs backward, and repeats
 * Uses fixed DOM letter elements with visibility toggling to guarantee ZERO layout shifts.
 */
export default function TypewriterTitle({
  className = "",
  text = "",
  goldText = "",
  as: Component = "h2",
}) {
  const fullTitle = `${text}${goldText}`;
  const totalLength = fullTitle.length;

  const [charCount, setCharCount] = useState(totalLength);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting) {
      if (charCount < totalLength) {
        timer = setTimeout(() => {
          setCharCount((prev) => prev + 1);
        }, 110);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (charCount > 0) {
        timer = setTimeout(() => {
          setCharCount((prev) => prev - 1);
        }, 55);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    }
    return () => clearTimeout(timer);
  }, [charCount, isDeleting, totalLength]);

  // Determine active cursor position (skipping whitespace so cursor stays on visible letters)
  const getActiveCursorIndex = () => {
    if (charCount === 0) return -1;
    let idx = charCount - 1;
    while (idx >= 0 && fullTitle[idx] === " ") {
      idx--;
    }
    return idx;
  };

  const activeCursorIndex = getActiveCursorIndex();

  return (
    <Component className={className} aria-label={fullTitle}>
      <span className="title-word">
        {text.split("").map((char, i) => {
          const isVis = i < charCount;
          const hasCur = activeCursorIndex === i;
          const atStart = charCount === 0 && i === 0;
          return (
            <span
              key={i}
              className={`type-char ${isVis ? "char-visible" : "char-hidden"} ${hasCur ? "has-cursor" : ""} ${atStart ? "cursor-at-start" : ""}`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </span>
      <span className="title-gold title-word">
        {goldText.split("").map((char, i) => {
          const globalIndex = text.length + i;
          const isVis = globalIndex < charCount;
          const hasCur = activeCursorIndex === globalIndex;
          return (
            <span
              key={i}
              className={`type-char ${isVis ? "char-visible" : "char-hidden"} ${hasCur ? "has-cursor" : ""}`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </span>
    </Component>
  );
}
