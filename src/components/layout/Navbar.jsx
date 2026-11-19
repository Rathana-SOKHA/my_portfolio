import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const navItems = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "skills", label: "Skills", num: "03" },
  { id: "projects", label: "Projects", num: "04" },
  { id: "education", label: "Education", num: "05" },
];

const sectionIds = [...navItems.map((item) => item.id), "contact"];
const mobileMenuScrollClasses =
  "max-[960px]:[box-sizing:border-box] max-[960px]:[max-height:calc(100dvh_-_95px)] max-[960px]:[overflow-y:auto] max-[960px]:[overscroll-behavior:contain]";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    if (window.innerWidth <= 960) {
      requestAnimationFrame(() => {
        menuButtonRef.current?.focus({ preventScroll: true });
      });
    }
  };

  useEffect(() => {
    let frameId = 0;

    const updateNavigation = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 25);

        const activationLine = window.innerHeight / 2;
        let currentSection = "home";

        for (const sectionId of sectionIds) {
          const element = document.getElementById(sectionId);
          if (element && element.getBoundingClientRect().top <= activationLine) {
            currentSection = sectionId;
          } else if (element) {
            break;
          }
        }

        setActiveSection(currentSection);
      });
    };

    const handleResize = () => {
      updateNavigation();
      if (window.innerWidth > 960) {
        setIsOpen(false);
      }
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (window.innerWidth <= 960 && !navRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="cyber-navbar-wrapper [position:sticky] [top:18px] [width:100%] [z-index:1000] [display:flex] [justify-content:center] [padding:0_24px] [box-sizing:border-box] [pointer-events:none]">
      <nav
        ref={navRef}
        aria-label="Primary navigation"
        className={`cyber-navbar  [position:relative] [width:100%] [max-width:1400px] [background:transparent] [padding:0] [box-sizing:border-box] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [pointer-events:auto] ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="cyber-navbar-container [display:flex] [align-items:center] [justify-content:space-between] [gap:24px] [width:100%]">
          {/* Cyber Brand Logo */}
          <div className="cyber-logo-wrapper [display:flex] [align-items:center] [flex-shrink:0]">
            <a href="#home" className="cyber-logo [display:inline-flex] [align-items:center] [gap:5px] [text-decoration:none] [padding:8px_4px] [user-select:none] [transition:all_0.25s_ease] [&:hover]:[transform:translateY(-1px)]" onClick={handleNavClick}>
              <span className="logo-name [color:#ffffff] [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:1.05rem] [font-weight:800] [letter-spacing:0.08em] [text-shadow:0_2px_10px_rgba(0,_0,_0,_0.7)]">RATHANA</span>
              <span className="logo-accent [color:#e5a947] [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:1.05rem] [font-weight:800] [letter-spacing:0.08em] [text-shadow:0_0_14px_rgba(229,_169,_71,_0.65)]">.DEV</span>
            </a>
          </div>

          {/* Unified Navigation Capsule (Matching Reference Image) */}
          <div className="cyber-capsule-wrapper [display:flex] [align-items:center] [flex-shrink:0] max-[960px]:[position:static]">
            <ul id="primary-navigation" className={`cyber-nav-menu  [display:flex] [align-items:center] [gap:32px] [list-style:none] [margin:0] [padding:8px_12px_8px_34px] [background:rgba(16,_18,_26,_0.68)] [backdrop-filter:blur(24px)] [-webkit-backdrop-filter:blur(24px)] [border:1px_solid_rgba(195,_135,_75,_0.42)] [border-radius:9999px] [box-shadow:0_12px_36px_rgba(0,_0,_0,_0.65),_inset_0_1px_1.5px_rgba(255,_215,_145,_0.45),_inset_0_-1px_1px_rgba(0,_0,_0,_0.5),_0_0_24px_rgba(220,_125,_35,_0.1)] [position:relative] [transition:all_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] [.cyber-navbar.scrolled_&]:[background:rgba(12,_14,_20,_0.88)] [.cyber-navbar.scrolled_&]:[border-color:rgba(225,_145,_75,_0.5)] [.cyber-navbar.scrolled_&]:[box-shadow:0_16px_44px_rgba(0,_0,_0,_0.78),_inset_0_1px_1.5px_rgba(255,_220,_155,_0.5),_inset_0_-1px_1px_rgba(0,_0,_0,_0.6),_0_0_30px_rgba(240,_135,_40,_0.16)] [.cyber-navbar.scrolled_&]:[transform:translateY(-1px)] max-[1120px]:[gap:18px] max-[1120px]:[padding:6px_8px_6px_20px] max-[960px]:[position:fixed] max-[960px]:[top:75px] max-[960px]:[left:20px] max-[960px]:[right:20px] max-[960px]:[background:rgba(10,_12,_18,_0.96)] max-[960px]:[backdrop-filter:blur(28px)] max-[960px]:[-webkit-backdrop-filter:blur(28px)] max-[960px]:[border:1px_solid_rgba(215,_145,_80,_0.45)] max-[960px]:[border-radius:20px] max-[960px]:[padding:24px_20px] max-[960px]:[flex-direction:column] max-[960px]:[gap:16px] max-[960px]:[box-shadow:0_20px_50px_rgba(0,_0,_0,_0.8),_0_0_30px_rgba(255,_122,_24,_0.15)] max-[960px]:[transform:translateY(-20px)] max-[960px]:[opacity:0] max-[960px]:[pointer-events:none] max-[960px]:[transition:all_0.35s_cubic-bezier(0.16,_1,_0.3,_1)] ${isOpen ? "active max-[960px]:[.cyber-nav-menu&]:[transform:translateY(0)] max-[960px]:[.cyber-nav-menu&]:[opacity:1] max-[960px]:[.cyber-nav-menu&]:[pointer-events:auto]" : ""} ${mobileMenuScrollClasses}`}>
              {navItems.map((item) => (
                <li key={item.id} className="cyber-nav-item [position:relative] [display:flex] [align-items:center]">
                  <a
                    href={`#${item.id}`}
                    className={`cyber-nav-link  [display:inline-flex] [align-items:center] [gap:7px] [text-decoration:none] [font-family:Space_Mono,_monospace] [font-size:0.84rem] [letter-spacing:0.04em] [padding:6px_4px] [position:relative] [transition:color_0.25s_ease,_transform_0.25s_ease] [white-space:nowrap] max-[1120px]:[font-size:0.76rem] max-[960px]:[font-size:0.95rem] max-[960px]:[padding:8px_12px] max-[960px]:[width:100%] max-[960px]:[justify-content:center] ${activeSection === item.id ? "active max-[960px]:[.cyber-nav-menu&]:[transform:translateY(0)] max-[960px]:[.cyber-nav-menu&]:[opacity:1] max-[960px]:[.cyber-nav-menu&]:[pointer-events:auto]" : ""}`}
                    aria-current={activeSection === item.id ? "location" : undefined}
                    onClick={handleNavClick}
                  >
                    <span className="nav-item-num [color:#b6885e] [font-size:0.82rem] [font-weight:500] [transition:color_0.25s_ease] [.cyber-nav-link:hover_&]:[color:#cda073] [.cyber-nav-link.active_&]:[color:#b6885e] [.cyber-nav-link.active_&]:[font-weight:600]">{item.num}</span>
                    <span className="nav-item-slash [color:#b6885e] [font-size:0.82rem] [font-weight:500] [margin:0_1px] [transition:color_0.25s_ease] [.cyber-nav-link:hover_&]:[color:#cda073] [.cyber-nav-link.active_&]:[color:#b6885e] [.cyber-nav-link.active_&]:[font-weight:600]">//</span>
                    <span className="nav-item-label [color:#9ea7b4] [font-weight:500] [transition:color_0.25s_ease] [.cyber-nav-link:hover_&]:[color:#e2e8f0] [.cyber-nav-link.active_&]:[color:#ffffff] [.cyber-nav-link.active_&]:[font-weight:700] [.cyber-nav-link.active_&]:[text-shadow:0_0_12px_rgba(255,_255,_255,_0.45)]">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.span
                        className="nav-active-pip [position:absolute] [bottom:-5px] [left:2px] [right:2px] [height:1.5px] [background:linear-gradient(_90deg,_transparent_0%,_rgba(215,_155,_60,_0.35)_15%,_#e5a947_35%,_#ffe4a0_50%,_#e5a947_65%,_rgba(215,_155,_60,_0.35)_85%,_transparent_100%_)] [border-radius:9999px] [box-shadow:0_0_8px_rgba(229,_169,_71,_0.85),_0_0_16px_rgba(229,_169,_71,_0.5)] [pointer-events:none] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:50%] [&::after]:[left:50%] [&::after]:[transform:translate(-50%,_-50%)] [&::after]:[width:26px] [&::after]:[height:6px] [&::after]:[background:radial-gradient(_ellipse,_rgba(255,_235,_175,_0.95)_0%,_rgba(229,_169,_71,_0.75)_45%,_transparent_75%_)] [&::after]:[filter:blur(1px)] [&::after]:[pointer-events:none]"
                        layoutId="activeNavPip"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}

              {/* Slanted Vents Chamber (Desktop only inside capsule) */}
              <li className="cyber-nav-vents-item [display:flex] [align-items:center] [padding:0_6px_0_10px] max-[960px]:[display:none]" aria-hidden="true">
                <div className="capsule-vents-grill [display:inline-flex] [align-items:center] [gap:5px] [padding:5px_10px] [background:rgba(22,_25,_34,_0.85)] [border:1px_solid_rgba(255,_255,_255,_0.08)] [border-radius:6px] [box-shadow:inset_0_2px_4px_rgba(0,_0,_0,_0.8)]">
                  <span className="vent-bar [display:inline-block] [width:3.5px] [height:18px] [background:linear-gradient(180deg,_#5a6270_0%,_#2a2e38_50%,_#151820_100%)] [transform:skewX(-22deg)] [border-radius:1px] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.25),_1px_0_2px_rgba(0,_0,_0,_0.5)] [transition:background_0.3s_ease] [.cyber-nav-menu:hover_&]:[background:linear-gradient(180deg,_#c49a56_0%,_#634d28_60%,_#2b2110_100%)]" />
                  <span className="vent-bar [display:inline-block] [width:3.5px] [height:18px] [background:linear-gradient(180deg,_#5a6270_0%,_#2a2e38_50%,_#151820_100%)] [transform:skewX(-22deg)] [border-radius:1px] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.25),_1px_0_2px_rgba(0,_0,_0,_0.5)] [transition:background_0.3s_ease] [.cyber-nav-menu:hover_&]:[background:linear-gradient(180deg,_#c49a56_0%,_#634d28_60%,_#2b2110_100%)]" />
                  <span className="vent-bar [display:inline-block] [width:3.5px] [height:18px] [background:linear-gradient(180deg,_#5a6270_0%,_#2a2e38_50%,_#151820_100%)] [transform:skewX(-22deg)] [border-radius:1px] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.25),_1px_0_2px_rgba(0,_0,_0,_0.5)] [transition:background_0.3s_ease] [.cyber-nav-menu:hover_&]:[background:linear-gradient(180deg,_#c49a56_0%,_#634d28_60%,_#2b2110_100%)]" />
                  <span className="vent-bar [display:inline-block] [width:3.5px] [height:18px] [background:linear-gradient(180deg,_#5a6270_0%,_#2a2e38_50%,_#151820_100%)] [transform:skewX(-22deg)] [border-radius:1px] [box-shadow:inset_0_1px_1px_rgba(255,_255,_255,_0.25),_1px_0_2px_rgba(0,_0,_0,_0.5)] [transition:background_0.3s_ease] [.cyber-nav-menu:hover_&]:[background:linear-gradient(180deg,_#c49a56_0%,_#634d28_60%,_#2b2110_100%)]" />
                </div>
              </li>

              {/* Golden Pill Hire Me CTA Button */}
              <li className="cyber-nav-cta-item [display:flex] [align-items:center] max-[960px]:[width:100%] max-[960px]:[margin-top:8px] max-[960px]:[justify-content:center]">
                <a href="#contact" aria-current={activeSection === "contact" ? "location" : undefined} className={`nav-capsule-cta [display:inline-flex] [align-items:center] [gap:8px] [text-decoration:none] [padding:8px_22px] [background:linear-gradient(135deg,_#e8c67c_0%,_#caa052_50%,_#deb465_100%)] [border:1px_solid_rgba(255,_240,_195,_0.65)] [border-radius:9999px] [color:#12110d] [font-family:Space_Mono,_monospace] [font-size:0.76rem] [font-weight:800] [letter-spacing:0.12em] [white-space:nowrap] [box-shadow:0_3px_12px_rgba(0,_0,_0,_0.4),_0_0_16px_rgba(222,_172,_85,_0.32),_inset_0_1px_1px_rgba(255,_255,_255,_0.7)] [transition:all_0.25s_cubic-bezier(0.16,_1,_0.3,_1)] [cursor:pointer] [&:hover]:[background:linear-gradient(135deg,_#f5d691_0%,_#d8ad5e_50%,_#ebc475_100%)] [&:hover]:[box-shadow:0_4px_18px_rgba(0,_0,_0,_0.5),_0_0_22px_rgba(245,_195,_95,_0.55),_inset_0_1px_1px_#ffffff] [&:hover]:[transform:translateY(-1px)] max-[960px]:[width:100%] max-[960px]:[justify-content:center] max-[960px]:[padding:12px_24px] max-[960px]:[font-size:0.85rem] ${activeSection === "contact" ? "[box-shadow:0_4px_18px_rgba(0,0,0,0.5),0_0_22px_rgba(245,195,95,0.55),inset_0_1px_1px_#fff]" : ""}`} onClick={handleNavClick}>
                  <span className="capsule-cta-text">HIRE ME</span>
                  <span className="capsule-cta-arrow [font-weight:900] [font-size:0.85rem] [transition:transform_0.2s_ease] [.nav-capsule-cta:hover_&]:[transform:translateX(3px)]">&gt;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Action Group: Mobile Hamburger */}
          <div className="cyber-nav-actions [display:flex] [align-items:center] [gap:12px] [flex-shrink:0]">
            {/* Mobile Hamburger Button */}
            <button
              className={`cyber-hamburger  [display:none] [background:rgba(14,_16,_24,_0.7)] [border:1px_solid_rgba(215,_145,_80,_0.35)] [border-radius:9999px] [padding:9px_12px] [cursor:pointer] [flex-direction:column] [gap:4px] [box-shadow:0_6px_18px_rgba(0,_0,_0,_0.4)] [transition:all_0.25s_ease] [&:hover]:[border-color:#ff7a18] [&:hover]:[box-shadow:0_6px_20px_rgba(0,_0,_0,_0.5),_0_0_12px_rgba(255,_122,_24,_0.3)] max-[960px]:[display:flex] ${isOpen ? "active max-[960px]:[.cyber-nav-menu&]:[transform:translateY(0)] max-[960px]:[.cyber-nav-menu&]:[opacity:1] max-[960px]:[.cyber-nav-menu&]:[pointer-events:auto]" : ""}`}
              ref={menuButtonRef}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="primary-navigation"
            >
              <span className="bar [.cyber-hamburger_&]:[display:block] [.cyber-hamburger_&]:[width:18px] [.cyber-hamburger_&]:[height:2px] [.cyber-hamburger_&]:[background-color:#ffffff] [.cyber-hamburger_&]:[border-radius:2px] [.cyber-hamburger_&]:[transition:transform_0.3s_ease,_opacity_0.3s_ease] [.cyber-hamburger.active_&:nth-child(1)]:[transform:translateY(6px)_rotate(45deg)] [.cyber-hamburger.active_&:nth-child(2)]:[opacity:0] [.cyber-hamburger.active_&:nth-child(3)]:[transform:translateY(-6px)_rotate(-45deg)]" />
              <span className="bar [.cyber-hamburger_&]:[display:block] [.cyber-hamburger_&]:[width:18px] [.cyber-hamburger_&]:[height:2px] [.cyber-hamburger_&]:[background-color:#ffffff] [.cyber-hamburger_&]:[border-radius:2px] [.cyber-hamburger_&]:[transition:transform_0.3s_ease,_opacity_0.3s_ease] [.cyber-hamburger.active_&:nth-child(1)]:[transform:translateY(6px)_rotate(45deg)] [.cyber-hamburger.active_&:nth-child(2)]:[opacity:0] [.cyber-hamburger.active_&:nth-child(3)]:[transform:translateY(-6px)_rotate(-45deg)]" />
              <span className="bar [.cyber-hamburger_&]:[display:block] [.cyber-hamburger_&]:[width:18px] [.cyber-hamburger_&]:[height:2px] [.cyber-hamburger_&]:[background-color:#ffffff] [.cyber-hamburger_&]:[border-radius:2px] [.cyber-hamburger_&]:[transition:transform_0.3s_ease,_opacity_0.3s_ease] [.cyber-hamburger.active_&:nth-child(1)]:[transform:translateY(6px)_rotate(45deg)] [.cyber-hamburger.active_&:nth-child(2)]:[opacity:0] [.cyber-hamburger.active_&:nth-child(3)]:[transform:translateY(-6px)_rotate(-45deg)]" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
