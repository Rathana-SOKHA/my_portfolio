import React, { useRef, useState, useEffect } from "react";
import "../styles/About.css";
import profileCutout from "../assets/profile-cutout.png";
import ScrollReveal from "../components/animations/ScrollReveal";
import TypewriterTitle from "../components/animations/TypewriterTitle";
import AnimatedCounter from "../components/animations/AnimatedCounter";

const pillars = [
  {
    code: "01",
    icon: "</>",
    title: "Clean & Scalable Code",
    desc: "Writing modular, testable, and maintainable software architectures following modern engineering standards."
  },
  {
    code: "02",
    icon: "⚡",
    title: "High Performance",
    desc: "Optimizing render cycles, bundle sizes, and database queries for lightning-fast, ultra-responsive web apps."
  },
  {
    code: "03",
    icon: "🎯",
    title: "User-Centric Design",
    desc: "Bridging technical precision with intuitive, fluid UI/UX to ensure seamless interactions and great user delight."
  },
  {
    code: "04",
    icon: "🚀",
    title: "Continuous Evolution",
    desc: "Constantly experimenting with modern frameworks, emerging developer tools, and cutting-edge web paradigms."
  }
];

const techDossier = [
  { label: "INTERNSHIP COMPANY", val: "THE LUMINIX CO., LTD." },
  { label: "ROLE", val: "Enterprise Applications & Software Development Engineer" },
  { label: "ACADEMY", val: "Passerelles Numériques Cambodia (PNC)" },
  { label: "CORE FOCUS", val: "Laravel, Vue.js, React, Node.js, MySQL" },
  { label: "LOCATION", val: "Phnom Penh, Cambodia" },
  { label: "STATUS", val: "Available for Projects & Opportunities" }
];

export default function About() {
  const cvFilePath = "/CV & CL Rathana SOKHA.pdf";
  const portraitRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  

  useEffect(() => {
    const el = portraitRef.current;
    if (!el) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: -(y * 10), y: x * 10 });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="cyber-about-section [position:relative] [width:100%] [padding:110px_4vw_110px] [background-color:#0b0d12] [background:radial-gradient(ellipse_at_50%_20%,_rgba(32,_36,_48,_0.65)_0%,_rgba(13,_15,_20,_0.95)_60%,_#08090c_100%)] [color:#ffffff] [overflow:hidden] [box-sizing:border-box] [font-family:Poppins,_sans-serif] [scroll-margin-top:80px] max-[600px]:[padding:80px_5vw_70px]" id="about">
      {/* Background Ambience & PCB Etching */}
      <div className="about-bg-grid [position:absolute] [inset:0] [background-image:linear-gradient(to_right,_rgba(255,_255,_255,_0.02)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,_255,_255,_0.02)_1px,_transparent_1px)] [background-size:64px_64px] [background-position:center_top] [pointer-events:none] [z-index:0] [mask-image:radial-gradient(circle_at_50%_30%,_black_45%,_transparent_90%)] [-webkit-mask-image:radial-gradient(circle_at_50%_30%,_black_45%,_transparent_90%)]" aria-hidden="true" />
      <div className="about-ambient-glow [position:absolute] [top:10%] [right:5%] [width:640px] [height:640px] [background:radial-gradient(circle,_rgba(229,_169,_71,_0.09)_0%,_rgba(229,_169,_71,_0.02)_45%,_transparent_70%)] [border-radius:50%] [pointer-events:none] [z-index:0] [filter:blur(40px)]" aria-hidden="true" />
      <div className="about-pcb-traces [position:absolute] [inset:0] [pointer-events:none] [z-index:1]" aria-hidden="true">
        <span className="pcb-line line-1 [.about-pcb-traces_&]:[position:absolute] [.about-pcb-traces_&]:[height:1.5px] [.about-pcb-traces_&]:[background:linear-gradient(90deg,_transparent,_rgba(229,_169,_71,_0.35),_transparent)] [.about-pcb-traces_&]:[top:180px] [.about-pcb-traces_&]:[left:0] [.about-pcb-traces_&]:[width:360px]" />
        <span className="pcb-line line-2 [.about-pcb-traces_&]:[position:absolute] [.about-pcb-traces_&]:[height:1.5px] [.about-pcb-traces_&]:[background:linear-gradient(90deg,_transparent,_rgba(229,_169,_71,_0.35),_transparent)] [.about-pcb-traces_&]:[bottom:220px] [.about-pcb-traces_&]:[right:0] [.about-pcb-traces_&]:[width:420px]" />
        <span className="pcb-node node-1 [.about-pcb-traces_&]:[position:absolute] [.about-pcb-traces_&]:[width:6px] [.about-pcb-traces_&]:[height:6px] [.about-pcb-traces_&]:[border-radius:50%] [.about-pcb-traces_&]:[border:1.5px_solid_rgba(229,_169,_71,_0.85)] [.about-pcb-traces_&]:[background:#f8ce72] [.about-pcb-traces_&]:[box-shadow:0_0_12px_rgba(229,_169,_71,_0.8)] [.about-pcb-traces_&]:[top:178px] [.about-pcb-traces_&]:[left:310px]" />
        <span className="pcb-node node-2 [.about-pcb-traces_&]:[position:absolute] [.about-pcb-traces_&]:[width:6px] [.about-pcb-traces_&]:[height:6px] [.about-pcb-traces_&]:[border-radius:50%] [.about-pcb-traces_&]:[border:1.5px_solid_rgba(229,_169,_71,_0.85)] [.about-pcb-traces_&]:[background:#f8ce72] [.about-pcb-traces_&]:[box-shadow:0_0_12px_rgba(229,_169,_71,_0.8)] [.about-pcb-traces_&]:[bottom:218px] [.about-pcb-traces_&]:[right:360px]" />
      </div>

      <div className="about-container [position:relative] [max-width:1440px] [margin:0_auto] [z-index:2]">
        {/* Section Header Tag & Main Title */}
        <ScrollReveal animation="fade-up" delay={0}>
          <div className="about-header-pill [position:relative] [display:flex] [align-items:center] [justify-content:center] [width:min(100%,_1200px)] [margin:0_auto_18px] [height:30px] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[height:1px] [&::before]:[background:linear-gradient(_90deg,_transparent_0%,_rgba(229,_169,_71,_0.25)_18%,_rgba(255,_235,_175,_0.3)_50%,_rgba(229,_169,_71,_0.25)_82%,_transparent_100%_)]" aria-label="Profile dossier label">
            <div className="about-header-badge [position:relative] [z-index:1] [display:inline-flex] [align-items:center] [justify-content:center] [gap:10px] [padding:6px_18px] [background:rgba(8,_10,_15,_0.9)] [border:1px_solid_rgba(229,_169,_71,_0.35)] [border-radius:6px] [box-shadow:0_0_14px_rgba(229,_169,_71,_0.18)]">
              <span className="about-header-plus [color:#e5a947] [font-size:0.72rem] [font-weight:700] [line-height:1]">+</span>
              <span className="about-header-text [font-family:Space_Mono,_Montserrat,_sans-serif] [font-size:clamp(0.6rem,_0.7vw,_0.75rem)] [font-weight:700] [letter-spacing:0.14em] [text-transform:uppercase] [color:#f8ce72] [text-shadow:0_0_8px_rgba(248,_206,_114,_0.4)]">// 02. PROFILE_DOSSIER</span>
              <span className="about-header-plus [color:#e5a947] [font-size:0.72rem] [font-weight:700] [line-height:1]">+</span>
            </div>
          </div>

          <TypewriterTitle
            className="about-main-title [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(2.2rem,_3.8vw,_3.8rem)] [font-weight:900] [letter-spacing:-0.01em] [line-height:1.15] [color:#ffffff] [margin:0_0_14px] [max-width:950px] [text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_3px_0_#64748b,_0_6px_18px_rgba(0,_0,_0,_0.85)]"
            text="DETAIL "
            goldText="ABOUT ME"
          />
          <p className="about-lead-subtitle [font-family:Poppins,_sans-serif] [font-size:clamp(0.95rem,_1.1vw,_1.12rem)] [color:#94a3b8] [max-width:680px] [line-height:1.65] [margin:0_0_65px]">
            Passionate software engineer bridging clean architectural design with high-performance web solutions.
          </p>
        </ScrollReveal>

        {/* 2-Column Main Dossier */}
        <div className="about-dossier-grid [display:grid] [grid-template-columns:460px_1fr] [gap:65px] [align-items:start] [margin-bottom:95px] max-[1200px]:[grid-template-columns:380px_1fr] max-[1200px]:[gap:40px] max-[960px]:[grid-template-columns:1fr] max-[960px]:[gap:50px]">
          {/* Left Column: Cyber Holographic Portrait HUD with Golden Halo */}
          <ScrollReveal animation="fade-right" delay={100} duration={0.75} className="about-portrait-col max-[960px]:[max-width:440px] max-[960px]:[margin:0_auto] max-[960px]:[width:100%]">
            <div
              className="about-portrait-hud [display:flex] [flex-direction:column] [gap:16px]"
              ref={portraitRef}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s ease" : "transform 0.1s ease-out",
              }}
            >
              <div className="portrait-hud-frame [position:relative] [background:linear-gradient(145deg,_rgba(20,_23,_33,_0.9)_0%,_rgba(12,_14,_20,_0.95)_100%)] [backdrop-filter:blur(16px)] [-webkit-backdrop-filter:blur(16px)] [border:1.5px_solid_rgba(229,_169,_71,_0.35)] [border-radius:6px] [padding:18px] [box-shadow:inset_0_1.5px_1.5px_rgba(255,_235,_175,_0.3),_0_24px_60px_rgba(0,_0,_0,_0.8),_0_0_30px_rgba(229,_169,_71,_0.1)] [transition:transform_0.3s_ease,_box-shadow_0.3s_ease,_border-color_0.3s_ease] [&:hover]:[border-color:rgba(240,_180,_80,_0.65)] [&:hover]:[box-shadow:inset_0_1.5px_1.5px_rgba(255,_240,_190,_0.45),_0_28px_70px_rgba(0,_0,_0,_0.9),_0_0_40px_rgba(229,_169,_71,_0.25)]">
                {/* Tactical Corner Brackets Matching Hero */}
                <span className="card-bracket top-left [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[top:-1px] [.card-bracket&]:[left:-1px] [.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                <span className="card-bracket top-right [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[top:-1px] [.card-bracket&]:[right:-1px] [.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                <span className="card-bracket bottom-left [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[bottom:-1px] [.card-bracket&]:[left:-1px] [.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                <span className="card-bracket bottom-right [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[bottom:-1px] [.card-bracket&]:[right:-1px] [.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.75)]" />

                {/* HUD Header Bar */}
                <div className="hud-frame-header [display:flex] [align-items:center] [justify-content:space-between] [padding-bottom:12px] [border-bottom:1px_solid_rgba(255,_255,_255,_0.08)] [margin-bottom:14px] [font-family:Space_Mono,_monospace] [font-size:0.74rem] [letter-spacing:0.12em]">
                  <span className="hud-id-tag [color:#e2e8f0] [font-weight:700]">ID: SOKHA_RATHANA</span>
                  <span className="hud-live-status [display:inline-flex] [align-items:center] [gap:8px] [color:#f8ce72] [font-weight:700] [font-size:0.72rem] [letter-spacing:0.1em]">
                    <span className="hud-status-green-dot [width:7px] [height:7px] [border-radius:50%] [background:#00ff88] [box-shadow:0_0_10px_#00ff88] [display:inline-block] [animation:hudDotPulse_2s_ease-in-out_infinite]" />
                    AVAILABLE FOR PROJECTS
                  </span>
                </div>

                {/* Image Viewport with Golden Torus Halo */}
                <div className="portrait-viewport [position:relative] [width:100%] [height:460px] [background:radial-gradient(circle_at_50%_40%,_rgba(229,_169,_71,_0.18)_0%,_transparent_65%),_linear-gradient(180deg,_#10131b_0%,_#090a0f_100%)] [border-radius:4px] [overflow:hidden] [display:flex] [align-items:flex-end] [justify-content:center] [border:1px_solid_rgba(255,_255,_255,_0.06)] max-[1200px]:[height:400px]">
                  {/* Golden Torus Halo behind Cutout */}
                  <div className="portrait-torus-halo [position:absolute] [top:38%] [left:50%] [transform:translate(-50%,_-50%)] [width:280px] [height:280px] [border-radius:50%] [background:radial-gradient(circle,_rgba(255,_215,_120,_0.28)_0%,_rgba(229,_169,_71,_0.12)_45%,_transparent_70%)] [border:1.5px_dashed_rgba(240,_180,_80,_0.5)] [box-shadow:0_0_35px_rgba(229,_169,_71,_0.28),_inset_0_0_25px_rgba(255,_225,_140,_0.22)] [animation:torusRotate_25s_linear_infinite] [pointer-events:none] [z-index:1]" aria-hidden="true" />

                  <div className="viewfinder-crosshairs" aria-hidden="true">
                    <span className="vf-cross tl [.viewfinder-crosshairs_&]:[position:absolute] [.viewfinder-crosshairs_&]:[color:rgba(229,_169,_71,_0.7)] [.viewfinder-crosshairs_&]:[font-family:Space_Mono,_monospace] [.viewfinder-crosshairs_&]:[font-size:0.95rem] [.viewfinder-crosshairs_&]:[line-height:1] [.viewfinder-crosshairs_&]:[z-index:3] [.viewfinder-crosshairs_&]:[user-select:none] [.vf-cross&]:[top:12px] [.vf-cross&]:[left:12px]">+</span>
                    <span className="vf-cross tr [.viewfinder-crosshairs_&]:[position:absolute] [.viewfinder-crosshairs_&]:[color:rgba(229,_169,_71,_0.7)] [.viewfinder-crosshairs_&]:[font-family:Space_Mono,_monospace] [.viewfinder-crosshairs_&]:[font-size:0.95rem] [.viewfinder-crosshairs_&]:[line-height:1] [.viewfinder-crosshairs_&]:[z-index:3] [.viewfinder-crosshairs_&]:[user-select:none] [.vf-cross&]:[top:12px] [.vf-cross&]:[right:12px]">+</span>
                    <span className="vf-cross bl [.viewfinder-crosshairs_&]:[position:absolute] [.viewfinder-crosshairs_&]:[color:rgba(229,_169,_71,_0.7)] [.viewfinder-crosshairs_&]:[font-family:Space_Mono,_monospace] [.viewfinder-crosshairs_&]:[font-size:0.95rem] [.viewfinder-crosshairs_&]:[line-height:1] [.viewfinder-crosshairs_&]:[z-index:3] [.viewfinder-crosshairs_&]:[user-select:none] [.vf-cross&]:[bottom:12px] [.vf-cross&]:[left:12px]">+</span>
                    <span className="vf-cross br [.viewfinder-crosshairs_&]:[position:absolute] [.viewfinder-crosshairs_&]:[color:rgba(229,_169,_71,_0.7)] [.viewfinder-crosshairs_&]:[font-family:Space_Mono,_monospace] [.viewfinder-crosshairs_&]:[font-size:0.95rem] [.viewfinder-crosshairs_&]:[line-height:1] [.viewfinder-crosshairs_&]:[z-index:3] [.viewfinder-crosshairs_&]:[user-select:none] [.vf-cross&]:[bottom:12px] [.vf-cross&]:[right:12px]">+</span>
                  </div>

                  <div className="viewport-grid [position:absolute] [inset:0] [background-image:linear-gradient(to_right,_rgba(255,_255,_255,_0.025)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,_255,_255,_0.025)_1px,_transparent_1px)] [background-size:32px_32px] [pointer-events:none] [z-index:1]" aria-hidden="true" />
                  <img
                    src={profileCutout}
                    alt="SOKHA Rathana"
                    className="hud-cutout-img [position:relative] [max-height:96%] [width:auto] [object-fit:contain] [object-position:bottom_center] [z-index:2] [filter:drop-shadow(0_18px_36px_rgba(0,_0,_0,_0.95))] [mask-image:linear-gradient(to_bottom,_black_86%,_transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_black_86%,_transparent_100%)] [transition:transform_0.4s_ease] [.portrait-hud-frame:hover_&]:[transform:scale(1.025)]"
                  />
                  <div className="viewport-gradient-overlay [position:absolute] [inset:0] [background:linear-gradient(to_top,_rgba(11,_13,_18,_0.65)_0%,_transparent_40%)] [pointer-events:none] [z-index:2]" />
                </div>

                {/* HUD Bottom Info Bar */}
                <div className="hud-frame-footer [display:flex] [align-items:center] [justify-content:space-between] [padding-top:12px] [border-top:1px_solid_rgba(255,_255,_255,_0.08)] [margin-top:14px] [font-family:Space_Mono,_monospace] [font-size:0.72rem] [letter-spacing:0.1em] [color:#94a3b8]">
                  <span className="coords-text [color:#c4cdd8]">LOC: 11.5564° N, 104.9282° E</span>
                  <span className="foot-spec [color:#f8ce72] [font-weight:700]">FULL-STACK // DEV</span>
                </div>
              </div>

              {/* Diagonal Orange Slashes Accent */}
              <div className="hud-card-slashes [display:flex] [gap:4px] [font-family:Space_Mono,_monospace] [font-size:1.15rem] [font-weight:800] [color:#e5a947] [letter-spacing:-0.08em] [line-height:1] [opacity:0.9] [text-shadow:0_0_10px_rgba(229,_169,_71,_0.55)] [&_span]:[display:inline-block] [&_span]:[transform:skewX(-15deg)]" aria-hidden="true">
                <span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Narrative & Technical Bio */}
          <div className="about-bio-details [display:flex] [flex-direction:column]">
            <ScrollReveal animation="fade-left" delay={120}>
              <div className="bio-role-lead [display:inline-flex] [align-items:center] [gap:10px] [padding:6px_14px] [background:rgba(229,_169,_71,_0.08)] [border:1px_solid_rgba(229,_169,_71,_0.32)] [border-radius:9999px] [margin-bottom:22px] [width:fit-content] [box-shadow:0_0_12px_rgba(229,_169,_71,_0.12)]">
                <span className="lead-dash [color:#e5a947] [font-size:1.2rem] [font-weight:900] [line-height:1]">—</span>
                <span className="lead-tag [font-family:Space_Mono,_monospace] [font-size:clamp(0.72rem,_0.8vw,_0.84rem)] [font-weight:700] [letter-spacing:0.14em] [color:#f8ce72] [text-transform:uppercase]">PASSIONATE DEVELOPER &amp; PROBLEM SOLVER</span>
              </div>

              <p className="bio-summary-p [font-size:clamp(0.95rem,_1.05vw,_1.08rem)] [line-height:1.85] [color:#c4cdd8] [margin:0_0_18px]">
                Hello, I'm <strong className="white-highlight [color:#ffffff] [font-weight:600]">SOKHA RATHANA</strong>, an enthusiastic{" "}
                <strong className="gold-highlight [color:#f8ce72] [font-weight:700] [text-shadow:0_0_10px_rgba(229,_169,_71,_0.35)]">Full-Stack Web Developer</strong> and second-year student
                at <strong className="white-highlight [color:#ffffff] [font-weight:600]">Passerelles Numériques Cambodia (PNC)</strong>.
              </p>

              <p className="bio-summary-p [font-size:clamp(0.95rem,_1.05vw,_1.08rem)] [line-height:1.85] [color:#c4cdd8] [margin:0_0_18px]">
                I specialize in building robust, responsive web applications with a focus on clean
                architecture and intuitive user experiences. My core stack includes{" "}
                <strong className="white-highlight [color:#ffffff] [font-weight:600]">Laravel, PHP (MVC), Vue.js, React.js, Node.js, JavaScript, MySQL, and Tailwind CSS</strong>.
                I am driven by turning ambitious concepts into scalable, impact-driven software that delivers real-world value.
              </p>
            </ScrollReveal>

            {/* Technical Dossier Metadata Table */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="technical-dossier-table [position:relative] [display:flex] [flex-direction:column] [gap:12px] [margin:20px_0_35px] [padding:22px_24px] [background:linear-gradient(145deg,_rgba(20,_23,_33,_0.88)_0%,_rgba(12,_14,_20,_0.94)_100%)] [border:1px_solid_rgba(255,_255,_255,_0.09)] [border-left:2.5px_solid_#e5a947] [border-radius:4px] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.1),_0_10px_25px_rgba(0,_0,_0,_0.55)]">
                <span className="card-bracket top-left [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[top:-1px] [.card-bracket&]:[left:-1px] [.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                <span className="card-bracket top-right [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[top:-1px] [.card-bracket&]:[right:-1px] [.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                <span className="card-bracket bottom-left [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[bottom:-1px] [.card-bracket&]:[left:-1px] [.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                <span className="card-bracket bottom-right [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[bottom:-1px] [.card-bracket&]:[right:-1px] [.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.75)]" />

                {techDossier.map((spec, i) => (
                  <div key={i} className="dossier-row [display:grid] [grid-template-columns:145px_14px_1fr] [align-items:baseline] [font-family:Space_Mono,_monospace] [font-size:0.82rem] [line-height:1.5] max-[600px]:[grid-template-columns:1fr] max-[600px]:[gap:2px]">
                    <span className="spec-label [color:#d4a76a] [font-weight:700] [letter-spacing:0.12em]">{spec.label}</span>
                    <span className="spec-separator [color:rgba(255,_255,_255,_0.3)] max-[600px]:[display:none]">:</span>
                    <span className="spec-value [color:#f1f5f9] [letter-spacing:0.04em]">{spec.val}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Cyber Stat HUD Badges with Animated Counters */}
            <ScrollReveal animation="fade-up" delay={260}>
              <div className="about-stats-grid [display:grid] [grid-template-columns:repeat(3,_1fr)] [gap:20px] [margin-bottom:40px] max-[960px]:[grid-template-columns:repeat(3,_1fr)] max-[960px]:[gap:12px] max-[600px]:[grid-template-columns:1fr] max-[600px]:[gap:12px]">
                <div className="stat-hud-box [position:relative] [padding:20px_16px] [background:linear-gradient(145deg,_rgba(20,_23,_33,_0.88)_0%,_rgba(12,_14,_20,_0.92)_100%)] [backdrop-filter:blur(10px)] [-webkit-backdrop-filter:blur(10px)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:4px] [text-align:center] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.1),_0_8px_24px_rgba(0,_0,_0,_0.5)] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [&:hover]:[transform:translateY(-3px)] [&:hover]:[border-color:rgba(229,_169,_71,_0.55)] [&:hover]:[box-shadow:inset_0_1px_1px_rgba(255,_230,_160,_0.3),_0_12px_30px_rgba(0,_0,_0,_0.7),_0_0_20px_rgba(229,_169,_71,_0.2)] max-[960px]:[padding:16px_10px]">
                  <span className="card-bracket top-left [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[top:-1px] [.card-bracket&]:[left:-1px] [.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                  <span className="card-bracket bottom-right [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[bottom:-1px] [.card-bracket&]:[right:-1px] [.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                  <div className="stat-number [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(2rem,_2.8vw,_2.7rem)] [font-weight:900] [color:#ffffff] [line-height:1] [margin-bottom:6px] [letter-spacing:-0.02em] [text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_4px_12px_rgba(0,_0,_0,_0.85)]">
                    <AnimatedCounter target={20} suffix="+" duration={1.2} />
                  </div>
                  <div className="stat-caption [font-family:Space_Mono,_monospace] [font-size:clamp(0.68rem,_0.75vw,_0.78rem)] [font-weight:700] [letter-spacing:0.16em] [color:#94a3b8] [text-transform:uppercase]">PROJECTS BUILT</div>
                </div>

                <div className="stat-hud-box [position:relative] [padding:20px_16px] [background:linear-gradient(145deg,_rgba(20,_23,_33,_0.88)_0%,_rgba(12,_14,_20,_0.92)_100%)] [backdrop-filter:blur(10px)] [-webkit-backdrop-filter:blur(10px)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:4px] [text-align:center] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.1),_0_8px_24px_rgba(0,_0,_0,_0.5)] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [&:hover]:[transform:translateY(-3px)] [&:hover]:[border-color:rgba(229,_169,_71,_0.55)] [&:hover]:[box-shadow:inset_0_1px_1px_rgba(255,_230,_160,_0.3),_0_12px_30px_rgba(0,_0,_0,_0.7),_0_0_20px_rgba(229,_169,_71,_0.2)] max-[960px]:[padding:16px_10px]">
                  <span className="card-bracket top-left [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[top:-1px] [.card-bracket&]:[left:-1px] [.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                  <span className="card-bracket bottom-right [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[bottom:-1px] [.card-bracket&]:[right:-1px] [.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                  <div className="stat-number [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(2rem,_2.8vw,_2.7rem)] [font-weight:900] [color:#ffffff] [line-height:1] [margin-bottom:6px] [letter-spacing:-0.02em] [text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_4px_12px_rgba(0,_0,_0,_0.85)]">
                    <AnimatedCounter target={2} prefix="0" suffix="+" duration={1.2} />
                  </div>
                  <div className="stat-caption [font-family:Space_Mono,_monospace] [font-size:clamp(0.68rem,_0.75vw,_0.78rem)] [font-weight:700] [letter-spacing:0.16em] [color:#94a3b8] [text-transform:uppercase]">STUDY YEARS</div>
                </div>

                <div className="stat-hud-box [position:relative] [padding:20px_16px] [background:linear-gradient(145deg,_rgba(20,_23,_33,_0.88)_0%,_rgba(12,_14,_20,_0.92)_100%)] [backdrop-filter:blur(10px)] [-webkit-backdrop-filter:blur(10px)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:4px] [text-align:center] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.1),_0_8px_24px_rgba(0,_0,_0,_0.5)] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [&:hover]:[transform:translateY(-3px)] [&:hover]:[border-color:rgba(229,_169,_71,_0.55)] [&:hover]:[box-shadow:inset_0_1px_1px_rgba(255,_230,_160,_0.3),_0_12px_30px_rgba(0,_0,_0,_0.7),_0_0_20px_rgba(229,_169,_71,_0.2)] max-[960px]:[padding:16px_10px]">
                  <span className="card-bracket top-left [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[top:-1px] [.card-bracket&]:[left:-1px] [.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                  <span className="card-bracket bottom-right [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[bottom:-1px] [.card-bracket&]:[right:-1px] [.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                  <div className="stat-number [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(2rem,_2.8vw,_2.7rem)] [font-weight:900] [color:#ffffff] [line-height:1] [margin-bottom:6px] [letter-spacing:-0.02em] [text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_4px_12px_rgba(0,_0,_0,_0.85)]">
                    <AnimatedCounter target={100} suffix="%" duration={1.2} />
                  </div>
                  <div className="stat-caption [font-family:Space_Mono,_monospace] [font-size:clamp(0.68rem,_0.75vw,_0.78rem)] [font-weight:700] [letter-spacing:0.16em] [color:#94a3b8] [text-transform:uppercase]">DEV DEDICATION</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Actions (Pill Buttons Matching Hero) */}
            <ScrollReveal animation="fade-up" delay={320}>
              <div className="about-action-group [display:flex] [gap:16px] [flex-wrap:wrap] max-[600px]:[flex-direction:column]">
                <a
                  href={cvFilePath}
                  download="Rathana-SOKHA-CV.pdf"
                  className="cyber-about-btn primary-action [display:inline-flex] [align-items:center] [justify-content:space-between] [gap:18px] [padding:12px_28px] [border-radius:9999px] [font-family:Poppins,_-apple-system,_sans-serif] [font-size:clamp(0.78rem,_0.86vw,_0.92rem)] [font-weight:700] [letter-spacing:0.06em] [text-transform:uppercase] [text-decoration:none] [cursor:pointer] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [position:relative] [overflow:hidden] max-[600px]:[width:100%] [.cyber-about-btn&]:[background:rgba(15,_17,_24,_0.85)] [.cyber-about-btn&]:[backdrop-filter:blur(8px)] [.cyber-about-btn&]:[-webkit-backdrop-filter:blur(8px)] [.cyber-about-btn&]:[border:1.5px_solid_#e5a947] [.cyber-about-btn&]:[color:#ffffff] [.cyber-about-btn&]:[box-shadow:0_0_16px_rgba(229,_169,_71,_0.35),_inset_0_1px_1px_rgba(255,_230,_160,_0.3)] [.cyber-about-btn&:hover]:[background:#e5a947] [.cyber-about-btn&:hover]:[color:#0b0c10] [.cyber-about-btn&:hover]:[box-shadow:0_0_28px_rgba(229,_169,_71,_0.7)] [.cyber-about-btn&:hover]:[transform:translateY(-2px)]"
                >
                  <span className="btn-text">DOWNLOAD CV</span>
                  <span className="btn-arrow [.cyber-about-btn.primary-action_&]:[color:#e5a947] [.cyber-about-btn.primary-action_&]:[font-weight:800] [.cyber-about-btn.primary-action_&]:[font-size:1.05rem] [.cyber-about-btn.primary-action_&]:[transition:transform_0.25s_ease,_color_0.25s_ease] [.cyber-about-btn.primary-action:hover_&]:[color:#0b0c10] [.cyber-about-btn.primary-action:hover_&]:[transform:translateY(2px)] [.cyber-about-btn.secondary-action_&]:[color:#94a3b8] [.cyber-about-btn.secondary-action_&]:[font-weight:800] [.cyber-about-btn.secondary-action_&]:[font-size:1rem] [.cyber-about-btn.secondary-action_&]:[transition:transform_0.25s_ease,_color_0.25s_ease] [.cyber-about-btn.secondary-action:hover_&]:[color:#f8ce72] [.cyber-about-btn.secondary-action:hover_&]:[transform:translateX(3px)]">&darr;</span>
                </a>

                <a href="#contact" className="cyber-about-btn secondary-action [display:inline-flex] [align-items:center] [justify-content:space-between] [gap:18px] [padding:12px_28px] [border-radius:9999px] [font-family:Poppins,_-apple-system,_sans-serif] [font-size:clamp(0.78rem,_0.86vw,_0.92rem)] [font-weight:700] [letter-spacing:0.06em] [text-transform:uppercase] [text-decoration:none] [cursor:pointer] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [position:relative] [overflow:hidden] max-[600px]:[width:100%] [.cyber-about-btn&]:[background:rgba(255,_255,_255,_0.05)] [.cyber-about-btn&]:[backdrop-filter:blur(8px)] [.cyber-about-btn&]:[-webkit-backdrop-filter:blur(8px)] [.cyber-about-btn&]:[border:1.5px_solid_rgba(255,_255,_255,_0.16)] [.cyber-about-btn&]:[color:#e2e8f0] [.cyber-about-btn&:hover]:[border-color:#e5a947] [.cyber-about-btn&:hover]:[color:#ffffff] [.cyber-about-btn&:hover]:[background:rgba(229,_169,_71,_0.15)] [.cyber-about-btn&:hover]:[transform:translateY(-2px)] [.cyber-about-btn&:hover]:[box-shadow:0_4px_18px_rgba(229,_169,_71,_0.35)]">
                  <span className="btn-text">GET IN TOUCH</span>
                  <span className="btn-arrow [.cyber-about-btn.primary-action_&]:[color:#e5a947] [.cyber-about-btn.primary-action_&]:[font-weight:800] [.cyber-about-btn.primary-action_&]:[font-size:1.05rem] [.cyber-about-btn.primary-action_&]:[transition:transform_0.25s_ease,_color_0.25s_ease] [.cyber-about-btn.primary-action:hover_&]:[color:#0b0c10] [.cyber-about-btn.primary-action:hover_&]:[transform:translateY(2px)] [.cyber-about-btn.secondary-action_&]:[color:#94a3b8] [.cyber-about-btn.secondary-action_&]:[font-weight:800] [.cyber-about-btn.secondary-action_&]:[font-size:1rem] [.cyber-about-btn.secondary-action_&]:[transition:transform_0.25s_ease,_color_0.25s_ease] [.cyber-about-btn.secondary-action:hover_&]:[color:#f8ce72] [.cyber-about-btn.secondary-action:hover_&]:[transform:translateX(3px)]">&gt;</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ================= CORE PILLARS / PHILOSOPHY ================= */}
        <div className="about-pillars-section [margin-top:30px] [padding-top:60px] [border-top:1px_dashed_rgba(255,_255,_255,_0.1)]">
          <ScrollReveal animation="fade-up" delay={50}>
            <div className="pillars-header [margin-bottom:45px]">
              <span className="pillar-tag [font-family:Space_Mono,_monospace] [font-size:0.78rem] [font-weight:700] [letter-spacing:0.2em] [color:#d4a76a] [text-transform:uppercase] [display:block] [margin-bottom:8px]">// DEVELOPMENT PHILOSOPHY</span>
              <h3 className="pillars-title [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(1.4rem,_2.2vw,_2.2rem)] [font-weight:900] [color:#ffffff] [letter-spacing:-0.01em] [text-shadow:0_1px_0_#94a3b8,_0_3px_10px_rgba(0,_0,_0,_0.85)]">
                CORE PRINCIPLES THAT <span className="title-gold [background:linear-gradient(135deg,_#f8ce72_0%,_#ffdf8d_40%,_#e5a947_75%,_#d49a3d_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [filter:drop-shadow(0_0_24px_rgba(229,_169,_71,_0.55))] [display:inline-block]">DRIVE MY CODE</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="pillars-grid [display:grid] [grid-template-columns:repeat(4,_1fr)] [gap:22px] max-[1200px]:[grid-template-columns:repeat(2,_1fr)] max-[960px]:[grid-template-columns:1fr]">
            {pillars.map((item, index) => (
              <ScrollReveal
                key={item.code}
                animation="fade-up"
                delay={index * 90}
                threshold={0.12}
              >
                <div className="pillar-card [position:relative] [padding:30px_24px] [background:linear-gradient(145deg,_rgba(20,_23,_33,_0.88)_0%,_rgba(12,_14,_20,_0.94)_100%)] [backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:6px] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.1),_0_10px_28px_rgba(0,_0,_0,_0.6)] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [display:flex] [flex-direction:column] [&:hover]:[transform:translateY(-4px)] [&:hover]:[border-color:rgba(229,_169,_71,_0.55)] [&:hover]:[box-shadow:inset_0_1px_1px_rgba(255,_230,_160,_0.3),_0_16px_40px_rgba(0,_0,_0,_0.8),_0_0_24px_rgba(229,_169,_71,_0.22)]">
                  {/* Tactical Corner Brackets */}
                  <span className="card-bracket top-left [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[top:-1px] [.card-bracket&]:[left:-1px] [.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                  <span className="card-bracket top-right [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[top:-1px] [.card-bracket&]:[right:-1px] [.card-bracket&]:[border-top:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                  <span className="card-bracket bottom-left [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[bottom:-1px] [.card-bracket&]:[left:-1px] [.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-left:1.5px_solid_rgba(255,_255,_255,_0.75)]" />
                  <span className="card-bracket bottom-right [position:absolute] [width:7px] [height:7px] [pointer-events:none] [.card-bracket&]:[bottom:-1px] [.card-bracket&]:[right:-1px] [.card-bracket&]:[border-bottom:1.5px_solid_rgba(255,_255,_255,_0.75)] [.card-bracket&]:[border-right:1.5px_solid_rgba(255,_255,_255,_0.75)]" />

                  <div className="pillar-top-row [display:flex] [align-items:center] [justify-content:space-between] [margin-bottom:18px]">
                    <span className="pillar-code [font-family:Space_Mono,_monospace] [font-size:0.95rem] [font-weight:800] [color:#d4a76a] [letter-spacing:0.1em]">{item.code}</span>
                    <div className="pillar-icon-badge [display:flex] [align-items:center] [justify-content:center] [width:42px] [height:42px] [background:linear-gradient(135deg,_rgba(28,_32,_44,_0.85)_0%,_rgba(16,_18,_26,_0.9)_100%)] [border:1.5px_solid_rgba(229,_169,_71,_0.55)] [border-radius:10px] [font-family:Space_Mono,_monospace] [font-size:0.84rem] [font-weight:700] [color:#f8ce72] [box-shadow:0_0_14px_rgba(229,_169,_71,_0.2),_inset_0_1px_1px_rgba(255,_235,_175,_0.3)] [transition:all_0.25s_ease] [.pillar-card:hover_&]:[border-color:rgba(240,_180,_80,_0.9)] [.pillar-card:hover_&]:[color:#ffd680] [.pillar-card:hover_&]:[box-shadow:0_0_20px_rgba(229,_169,_71,_0.45)] [.pillar-card:hover_&]:[transform:scale(1.06)]">{item.icon}</div>
                  </div>

                  <h4 className="pillar-title [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:1.05rem] [font-weight:800] [color:#ffffff] [margin:0_0_10px] [line-height:1.35]">{item.title}</h4>
                  <p className="pillar-desc [font-size:0.86rem] [line-height:1.65] [color:#94a3b8] [margin:0] [flex-grow:1]">{item.desc}</p>
                  <div className="pillar-bottom-line [position:absolute] [bottom:0] [left:0] [right:0] [height:2px] [background:linear-gradient(90deg,_transparent,_#e5a947,_transparent)] [opacity:0] [transition:opacity_0.3s_ease] [.pillar-card:hover_&]:[opacity:1]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
