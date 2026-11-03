import React from "react";
import "../../styles/SkillsRibbon.css";

const RIBBON_ITEMS = [
  "API Architecture",
  "Database Design",
  "E-Commerce Solutions",
  "App Design",
  "Website Design",
  "Dashboard",
  "Wireframe",
  "Full-Stack Dev",
  "UI/UX Design",
  "Clean Code",
];

export default function SkillsRibbon() {
  // Repeating array 4 times for a perfectly seamless, continuous infinite loop
  const displayItems = [
    ...RIBBON_ITEMS,
    ...RIBBON_ITEMS,
    ...RIBBON_ITEMS,
    ...RIBBON_ITEMS,
  ];

  return (
    <section className="marquee-ribbon-wrapper" aria-label="Specialties Marquee">
      {/* Background shadow ribbon for 3D depth matching reference */}
      <div className="marquee-ribbon-shadow" aria-hidden="true" />

      {/* Main Orange Cyber Ticker Ribbon */}
      <div className="marquee-ribbon-main">
        <div className="marquee-track">
          {displayItems.map((item, index) => (
            <span className="marquee-item" key={index}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-sparkle" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                </svg>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
