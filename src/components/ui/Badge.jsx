import React from "react";

/**
 * Cyber / Editorial Badge Component
 * @param {string} text - Optional text content
 * @param {React.ReactNode} children - Children elements
 * @param {string} className - Additional CSS class names
 * @param {string} variant - Badge style variant ('cyber' by default)
 */
export default function Badge({
  children,
  text,
  className = "",
  variant = "cyber",
  ...props
}) {
  const content = children || text;

  return (
    <div
      className={`inline-flex select-none items-center justify-center whitespace-nowrap rounded-[8px] border-[1.5px] border-[rgba(229,169,71,0.7)] bg-[rgba(16,14,18,0.85)] px-4 py-[6px] backdrop-blur-[12px] [box-shadow:0_0_16px_rgba(229,169,71,0.25),inset_0_1px_1px_rgba(255,235,170,0.35),0_4px_14px_rgba(0,0,0,0.65)] [transition:all_0.28s_cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:border-[rgba(245,185,80,0.95)] hover:[box-shadow:0_0_24px_rgba(229,169,71,0.45),inset_0_1px_1.5px_rgba(255,240,190,0.5),0_6px_18px_rgba(0,0,0,0.7)] ${variant ? `cyber-badge--${variant}` : ""} ${className}`.trim()}
      {...props}
    >
      <span className="text-[clamp(0.7rem,0.76vw,0.82rem)] font-[800] uppercase leading-[1.2] tracking-[0.12em] text-[#f8ce72] [font-family:'Space_Mono','Montserrat',-apple-system,sans-serif] [text-shadow:0_0_8px_rgba(248,206,114,0.45)]">{content}</span>
    </div>
  );
}
