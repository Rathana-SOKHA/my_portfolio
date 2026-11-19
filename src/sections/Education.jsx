import TypewriterTitle from '../components/animations/TypewriterTitle';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';
import '../styles/Education.css';
import ScrollReveal from '../components/animations/ScrollReveal';

const educationData = [
  {
    id: 1,
    code: "EDU_01",
    status: "CURRENTLY_ENROLLED",
    statusType: "active",
    degree: "Associate Degree in Web Programming",
    institution: "Passerelles Numériques Cambodia (PNC)",
    specialization: "Full-Stack Web Development, System Architecture & Database Engineering",
    period: "2025 - PRESENT",
    location: "Phnom Penh, Cambodia",
    tags: ["Laravel", "Vue.js", "Node.js", "React", "MySQL", "Agile/Scrum"],
    description: "Rigorous full-stack computer science and web engineering training focused on industry-standard methodologies, scalable system design, and practical production projects."
  },
  {
    id: 2,
    code: "EDU_02",
    status: "GRADUATED",
    statusType: "completed",
    degree: "National Baccalaureate Certificate (Grade C)",
    institution: "Phnom Kravanh High School",
    specialization: "General Education & Sciences",
    period: "2023 - 2024",
    location: "Pursat Province, Cambodia",
    tags: ["Mathematics", "Logical Reasoning", "Science & Tech", "Communication"],
    description: "Completed secondary education with focused coursework in analytical thinking, mathematics, and natural sciences."
  }
];

export default function Education() {
  const timelineRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <section className="cyber-education-section [position:relative] [width:100%] [padding:120px_4%_100px] [background-color:#0b0d12] [background:radial-gradient(ellipse_at_50%_20%,_rgba(32,_36,_48,_0.65)_0%,_rgba(13,_15,_20,_0.95)_60%,_#08090c_100%)] [color:#ffffff] [overflow:hidden] [box-sizing:border-box] [font-family:Poppins,_sans-serif] [scroll-margin-top:80px] max-[991px]:[padding:90px_20px_70px] max-[1023px]:[padding:90px_20px_70px] max-[767px]:[padding:70px_16px_50px] max-[480px]:[padding:60px_12px_40px] [[data-theme='light']_&]:[background-color:#f8fafc] [[data-theme='light']_&]:[color:#0f172a]" id="education">
      {/* Background Grid & Ambience */}
      <div className="edu-bg-grid [position:absolute] [inset:0] [background-image:linear-gradient(to_right,_rgba(255,_255,_255,_0.02)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,_255,_255,_0.02)_1px,_transparent_1px)] [background-size:70px_70px] [background-position:center_top] [pointer-events:none] [z-index:0] [mask-image:radial-gradient(circle_at_50%_25%,_black_40%,_transparent_90%)] [-webkit-mask-image:radial-gradient(circle_at_50%_25%,_black_40%,_transparent_90%)] [[data-theme='light']_&]:[background-image:linear-gradient(to_right,_rgba(15,_23,_42,_0.03)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(15,_23,_42,_0.03)_1px,_transparent_1px)]" aria-hidden="true" />
      <div className="edu-ambient-glow [position:absolute] [top:35%] [left:10%] [width:500px] [height:500px] [background:radial-gradient(circle,_rgba(229,_169,_71,_0.06)_0%,_transparent_70%)] [border-radius:50%] [pointer-events:none] [z-index:0]" aria-hidden="true" />

      <div className="education-container [position:relative] [max-width:1200px] [margin:0_auto] [z-index:2]">
        {/* Section Header Tag & Title */}
        <ScrollReveal animation="fade-up" delay={0}>
          <div className="education-header-tag [display:inline-flex] [align-items:center] [gap:10px] [margin-bottom:14px]">
            <span className="tag-cross [.education-header-tag_&]:[color:#e5a947] [.education-header-tag_&]:[font-size:1.1rem] [.education-header-tag_&]:[font-weight:700] [.education-header-tag_&]:[text-shadow:0_0_10px_rgba(229,_169,_71,_0.6)]">+</span>
            <span className="tag-mono [.education-header-tag_&]:[font-family:Space_Mono,_monospace] [.education-header-tag_&]:[font-size:clamp(0.72rem,_0.82vw,_0.86rem)] [.education-header-tag_&]:[font-weight:700] [.education-header-tag_&]:[letter-spacing:0.18em] [.education-header-tag_&]:[color:#94a3b8] [.education-header-tag_&]:[text-transform:uppercase]">// 05. ACADEMIC_TRAJECTORY</span>
            <span className="tag-bracket [.education-header-tag_&]:[font-family:Space_Mono,_monospace] [.education-header-tag_&]:[font-size:0.72rem] [.education-header-tag_&]:[color:#e5a947] [.education-header-tag_&]:[letter-spacing:0.1em]">[ LEARNING_MILESTONES ]</span>
          </div>

          <TypewriterTitle
            className="education-main-title [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(2rem,_3.4vw,_3.4rem)] [font-weight:900] [letter-spacing:-0.01em] [line-height:1.18] [color:#ffffff] [margin:0_0_65px] [max-width:950px] [text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_3px_0_#64748b,_0_6px_18px_rgba(0,_0,_0,_0.85)] [&_.title-gold]:[background:none] [&_.title-gold]:[color:#ffffff] [&_.title-gold]:[-webkit-background-clip:initial] [&_.title-gold]:[background-clip:initial] [&_.title-gold]:[-webkit-text-fill-color:#ffffff] [&_.title-gold]:[filter:none] [&_.title-gold]:[display:inline-block] [&_.title-gold]:[text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_3px_0_#64748b,_0_6px_18px_rgba(0,_0,_0,_0.85)] max-[1023px]:[font-size:clamp(1.9rem,_4.5vw,_3rem)] max-[1023px]:[line-height:1.08] max-[1023px]:[margin-bottom:42px] max-[767px]:[margin-bottom:40px] max-[767px]:[font-size:clamp(1.6rem,_8vw,_2.7rem)] max-[767px]:[line-height:1.05] max-[767px]:[max-width:100%] max-[767px]:[letter-spacing:-0.04em] max-[480px]:[font-size:clamp(1.3rem,_10vw,_2.1rem)] max-[480px]:[line-height:1.08] max-[480px]:[letter-spacing:-0.05em] [[data-theme='light']_&]:[color:#0f172a] [[data-theme='light']_&]:[text-shadow:0_1px_0_#ffffff,_0_2px_0_#e2e8f0,_0_4px_12px_rgba(0,_0,_0,_0.15)]"
            text="MY "
            goldText="EDUCATION JOURNEY"
          />
        </ScrollReveal>

        {/* Cyber Timeline */}
        <div className="cyber-timeline [position:relative] [width:100%] [margin-bottom:60px] [padding:20px_0]" ref={timelineRef}>
          {/* Static axis track */}
          <div className="timeline-axis [position:absolute] [left:50%] [top:0] [bottom:0] [width:2px] [background:rgba(255,_255,_255,_0.08)] [transform:translateX(-50%)] [pointer-events:none] [z-index:1] [overflow:hidden] max-[991px]:[left:20px] max-[480px]:[left:12px] [[data-theme='light']_&]:[background:linear-gradient(_180deg,_transparent_0%,_rgba(15,_23,_42,_0.15)_10%,_#e5a947_50%,_rgba(15,_23,_42,_0.15)_90%,_transparent_100%_)]" aria-hidden="true">
            {/* Scroll-driven animated glowing progress axis */}
            <motion.div
              className="timeline-axis-fill [position:absolute] [inset:0] [width:100%] [height:100%] [background:linear-gradient(180deg,_#e5a947_0%,_#f8ce72_70%,_#e5a947_100%)] [box-shadow:0_0_12px_rgba(229,_169,_71,_0.7),_0_0_22px_rgba(229,_169,_71,_0.4)] [transform-origin:top_center]"
              style={{
                scaleY: shouldReduceMotion ? 1 : scaleY,
                transformOrigin: "top center",
              }}
            />
          </div>

          {educationData.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={index * 140}
              threshold={0.12}
            >
              <div className={`timeline-entry  [position:relative] [width:100%] [display:flex] [margin-bottom:50px] [box-sizing:border-box] [&:last-child]:[margin-bottom:0] max-[767px]:[margin-bottom:35px] ${index % 2 === 0 ? "left-entry [.timeline-entry&]:[justify-content:flex-start] [.timeline-entry&]:[padding-right:calc(50%_+_40px)] max-[991px]:[.timeline-entry&]:[padding-left:55px] max-[991px]:[.timeline-entry&]:[padding-right:0] max-[991px]:[.timeline-entry&]:[justify-content:flex-start] max-[480px]:[.timeline-entry&]:[padding-left:36px]" : "right-entry [.timeline-entry&]:[justify-content:flex-end] [.timeline-entry&]:[padding-left:calc(50%_+_40px)] max-[991px]:[.timeline-entry&]:[padding-left:55px] max-[991px]:[.timeline-entry&]:[padding-right:0] max-[991px]:[.timeline-entry&]:[justify-content:flex-start] max-[480px]:[.timeline-entry&]:[padding-left:36px]"}`}>
                {/* Timeline Center Node */}
                <div className="timeline-node [position:absolute] [left:50%] [top:28px] [transform:translate(-50%,_-50%)] [width:18px] [height:18px] [display:flex] [align-items:center] [justify-content:center] [z-index:4] max-[991px]:[left:20px] max-[480px]:[left:12px]" aria-hidden="true">
                  <span className="node-diamond [width:10px] [height:10px] [background:#e5a947] [transform:rotate(45deg)] [box-shadow:0_0_10px_#e5a947] [transition:transform_0.3s_ease,_background_0.3s_ease] [.timeline-entry:hover_&]:[transform:rotate(45deg)_scale(1.3)] [.timeline-entry:hover_&]:[background:#ffffff] [.timeline-entry:hover_&]:[box-shadow:0_0_15px_#e5a947]" />
                  <span className="node-pulse-ring [position:absolute] [inset:-4px] [border:1px_solid_rgba(229,_169,_71,_0.7)] [border-radius:50%] [animation:nodeRingPulse_2.4s_infinite_cubic-bezier(0.25,_0.8,_0.25,_1)]" />
                </div>

                {/* Timeline Card */}
                <article className="cyber-edu-card [position:relative] [width:100%] [max-width:520px] [background:rgba(10,_13,_20,_0.75)] [backdrop-filter:blur(14px)] [-webkit-backdrop-filter:blur(14px)] [border:1px_solid_rgba(255,_255,_255,_0.08)] [border-radius:4px] [padding:22px_24px] [box-shadow:0_15px_35px_rgba(0,_0,_0,_0.6)] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [&:hover]:[transform:translateY(-5px)] [&:hover]:[border-color:rgba(229,_169,_71,_0.4)] [&:hover]:[box-shadow:0_22px_50px_rgba(0,_0,_0,_0.8),_0_0_25px_rgba(229,_169,_71,_0.18)] max-[991px]:[max-width:100%] max-[767px]:[padding:16px_16px_14px] max-[480px]:[padding:14px_12px] [[data-theme='light']_&]:[background:rgba(255,_255,_255,_0.95)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.08)] [[data-theme='light']_&]:[box-shadow:0_15px_35px_rgba(0,_0,_0,_0.06)]">
                  {/* HUD Corner Brackets */}
                  <div className="corner-bracket corner-top-left [[data-theme='light']_.cyber-edu-card_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
                  <div className="corner-bracket corner-top-right [[data-theme='light']_.cyber-edu-card_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
                  <div className="corner-bracket corner-bottom-left [[data-theme='light']_.cyber-edu-card_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
                  <div className="corner-bracket corner-bottom-right [[data-theme='light']_.cyber-edu-card_&]:[border-color:rgba(15,_23,_42,_0.25)]" />

                  {/* Card Header Strip */}
                  <div className="edu-card-strip [display:flex] [align-items:center] [justify-content:space-between] [padding-bottom:12px] [border-bottom:1px_solid_rgba(255,_255,_255,_0.06)] [margin-bottom:16px] [flex-wrap:wrap] [gap:8px] [[data-theme='light']_&]:[border-bottom-color:rgba(15,_23,_42,_0.08)]">
                    <span className="edu-code [font-family:Space_Mono,_monospace] [font-size:0.74rem] [font-weight:700] [color:#e5a947] [letter-spacing:0.14em]">{item.code}</span>
                    <span className="edu-period-badge [font-family:Space_Mono,_monospace] [font-size:0.72rem] [font-weight:700] [color:#cbd5e1] [letter-spacing:0.08em] [[data-theme='light']_&]:[color:#475569]">
                      <span className="period-bracket [.edu-period-badge_&]:[color:#e5a947]">[</span>
                      {item.period}
                      <span className="period-bracket [.edu-period-badge_&]:[color:#e5a947]">]</span>
                    </span>
                    <span className={`edu-status-pill [display:inline-flex] [align-items:center] [gap:5px] [padding:3px_8px] [border-radius:3px] [font-family:Space_Mono,_monospace] [font-size:0.62rem] [font-weight:700] [letter-spacing:0.08em] [text-transform:uppercase] [&.active]:[background:rgba(229,_169,_71,_0.15)] [&.active]:[border:1px_solid_rgba(229,_169,_71,_0.4)] [&.active]:[color:#f8ce72] [&.completed]:[background:rgba(255,_255,_255,_0.05)] [&.completed]:[border:1px_solid_rgba(255,_255,_255,_0.12)] [&.completed]:[color:#94a3b8] ${item.statusType}`}>
                      <span className="status-dot [.edu-status-pill.active_&]:[width:5px] [.edu-status-pill.active_&]:[height:5px] [.edu-status-pill.active_&]:[background-color:#e5a947] [.edu-status-pill.active_&]:[border-radius:50%] [.edu-status-pill.active_&]:[box-shadow:0_0_5px_#e5a947] [.edu-status-pill.completed_&]:[width:5px] [.edu-status-pill.completed_&]:[height:5px] [.edu-status-pill.completed_&]:[background-color:#94a3b8] [.edu-status-pill.completed_&]:[border-radius:50%]" />
                      {item.status}
                    </span>
                  </div>

                  {/* Card Main Info */}
                  <div className="edu-card-content [display:flex] [flex-direction:column]">
                    <h3 className="edu-degree-title [font-family:Montserrat,_Poppins,_sans-serif] [font-size:1.18rem] [font-weight:800] [color:#ffffff] [margin:0_0_6px] [letter-spacing:-0.01em] [line-height:1.35] max-[767px]:[font-size:1.05rem] max-[480px]:[font-size:0.95rem] [[data-theme='light']_&]:[color:#0f172a]">{item.degree}</h3>
                    <h4 className="edu-institution-name [font-family:Space_Mono,_monospace] [font-size:0.88rem] [font-weight:700] [color:#e5a947] [margin:0_0_8px] [letter-spacing:0.04em] max-[767px]:[font-size:0.82rem] max-[480px]:[font-size:0.76rem]">
                      <span className="school-marker [color:rgba(255,_255,_255,_0.4)]">@</span> {item.institution}
                    </h4>
                    <p className="edu-spec-subtitle [font-size:0.82rem] [font-weight:600] [color:#cbd5e1] [margin:0_0_12px] [line-height:1.5] [[data-theme='light']_&]:[color:#334155]">{item.specialization}</p>

                    <p className="edu-card-desc [font-size:0.85rem] [line-height:1.65] [color:#94a3b8] [margin:0_0_16px] [[data-theme='light']_&]:[color:#475569]">{item.description}</p>

                    {/* Skill Tags */}
                    <div className="edu-tag-group [display:flex] [flex-wrap:wrap] [gap:7px] [margin-bottom:16px]">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="edu-tag [display:inline-flex] [align-items:center] [gap:2px] [padding:3px_8px] [background:rgba(255,_255,_255,_0.04)] [border:1px_solid_rgba(255,_255,_255,_0.08)] [border-radius:3px] [font-family:Space_Mono,_monospace] [font-size:0.68rem] [color:#cbd5e1] max-[480px]:[font-size:0.62rem] max-[480px]:[padding:2px_7px] [[data-theme='light']_&]:[background:rgba(0,_0,_0,_0.03)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.08)] [[data-theme='light']_&]:[color:#1e293b]">
                          <span className="tag-hash [.edu-tag_&]:[color:#e5a947]">#</span>{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Location */}
                  <div className="edu-card-footer [display:flex] [align-items:center] [justify-content:space-between] [padding-top:12px] [border-top:1px_solid_rgba(255,_255,_255,_0.06)] [font-family:Space_Mono,_monospace] [font-size:0.7rem] [color:#94a3b8]">
                    <span className="edu-loc-text [&_i]:[color:#e5a947] [&_i]:[margin-right:4px]">
                      <i className="fas fa-map-marker-alt" /> {item.location}
                    </span>
                    <span className="edu-verified-flag [color:#cbd5e1] [font-weight:600]">
                      <span className="v-tick [color:#e5a947] [font-weight:800] [margin-right:3px]">✓</span> VERIFIED_RECORD
                    </span>
                  </div>
                </article>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
