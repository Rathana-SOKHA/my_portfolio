import React from "react";
import "../../styles/Badge.css";

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
      className={`cyber-badge ${variant ? `cyber-badge--${variant}` : ""} ${className}`.trim()}
      {...props}
    >
      <span className="cyber-badge-text">{content}</span>
    </div>
  );
}
