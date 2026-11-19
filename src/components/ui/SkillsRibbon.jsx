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
    <section className="relative z-10 flex h-16 w-full items-center justify-center overflow-hidden p-0 pointer-events-auto max-[768px]:h-14" aria-label="Specialties Marquee">
      {/* Background shadow ribbon for 3D depth matching reference */}
      <div className="pointer-events-none absolute left-[-10vw] z-[1] h-[52px] w-[120vw] min-w-[120vw] rotate-[0.8deg] border-y-[1.5px] border-t-[rgba(240,180,80,0.45)] border-b-[rgba(240,180,80,0.2)] bg-[#080a0f] [box-shadow:0_10px_30px_rgba(0,0,0,0.85)] max-[768px]:left-[-15vw] max-[768px]:h-11 max-[768px]:w-[130vw] max-[768px]:min-w-[130vw]" aria-hidden="true" />

      {/* Main Orange Cyber Ticker Ribbon */}
      <div className="absolute left-[-10vw] z-[2] flex h-12 w-[120vw] min-w-[120vw] -rotate-[1.2deg] items-center overflow-hidden bg-[linear-gradient(90deg,#d29132_0%,#e8a946_20%,#f8ce72_40%,#ffdf8d_50%,#f8ce72_60%,#e8a946_80%,#d29132_100%)] [box-shadow:0_12px_35px_rgba(232,169,70,0.42),0_4px_15px_rgba(0,0,0,0.7),inset_0_1.5px_1.5px_rgba(255,248,225,0.75),inset_0_-1.5px_1.5px_rgba(110,70,15,0.5)] max-[768px]:left-[-15vw] max-[768px]:h-[42px] max-[768px]:w-[130vw] max-[768px]:min-w-[130vw]">
        <div className="flex w-max items-center whitespace-nowrap will-change-transform animate-[marquee-scroll_48s_linear_infinite]">
          {displayItems.map((item, index) => (
            <span className="group inline-flex select-none items-center gap-6 px-3 max-[768px]:gap-4" key={index}>
              <span className="text-[clamp(0.95rem,1.25vw,1.2rem)] font-black capitalize tracking-[0.02em] text-[#0b0d14] [font-family:'Montserrat','Poppins',-apple-system,sans-serif] [text-shadow:0_1px_0_rgba(255,255,255,0.2)] max-[768px]:text-[0.88rem]">{item}</span>
              <span className="inline-flex items-center justify-center text-[#0b0d14] opacity-[0.92] [transition:transform_0.3s_ease] group-hover:rotate-45 group-hover:scale-125" aria-hidden="true">
                <svg
                  className="block h-[18px] w-[18px] max-[768px]:h-[14px] max-[768px]:w-[14px]"
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
