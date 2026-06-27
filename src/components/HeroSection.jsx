import React, { useState, useEffect, useCallback, useRef } from "react";
import "../styles/HeroSection.css";
import profileImage from "../assets/profile.png";
import htmlLogo from "../assets/languages/html.png";
import cssLogo from "../assets/languages/css.png";
import jsLogo from "../assets/languages/javascript.png";
import nodeLogo from "../assets/languages/node.png";

const roles = [
  "Web Developer",
  "Full-Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "Developer"
];

export default function HeroSection() {
  const cvFilePath = "/CV & CL Rathana SOKHA.pdf";
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const pauseRef = useRef(null);

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setCharIndex(0);
      }
    } else {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!pauseRef.current) {
        // Pause at full text, then start deleting
        pauseRef.current = setTimeout(() => {
          setIsDeleting(true);
          pauseRef.current = null;
        }, 1800);
      }
    }
  }, [roleIndex, isDeleting, charIndex]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 80;
    const timeout = setTimeout(tick, speed);
    return () => {
      clearTimeout(timeout);
      if (pauseRef.current) {
        clearTimeout(pauseRef.current);
        pauseRef.current = null;
      }
    };
  }, [tick, isDeleting]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          {/* Main Text Content */}
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Rathana SOKHA</span>
            </h1>
            <h1 className="hero-title hero-title-role">
              I'm{" "}
              <span className="highlight role-text">{displayText}</span>
              <span className="cursor-blink">|</span>
            </h1>

            <p className="hero-description">
              I'm a passionate developer. I love creating beautiful and functional web
              experiences. With expertise in modern web technologies, I transform ideas into
              reality through clean code and innovative design solutions.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/Rathanacoding"
              className="social-link facebook"
              title="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://t.me/rathana_dev"
              className="social-link telegram"
              title="Telegram"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://github.com/Rathana-SOKHA"
              className="social-link github"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a
              className="btn btn-primary"
              href={cvFilePath}
              download="Rathana-SOKHA-CV.pdf"
            >
              <span className="btn-icon">&darr;</span>
              Download CV
            </a>
            <button className="btn btn-secondary">
              <span className="btn-icon">&#9993;</span>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hero-illustration">
          <div className="illustration-placeholder">
            <div className="orbit-container">
              {/* Decorative Orbit Rings */}
              <div className="orbit-ring"></div>
              <div className="orbit-ring-inner"></div>

              {/* Character Avatar */}
              <div className="character-avatar">
                <img src={profileImage} alt="Sokha Rathana Profile" className="profile-img" />
              </div>

              {/* Orbiting Skill Icons */}
              <div className="skill-icons">
                <div className="skill-icon icon-html" title="HTML">
                  <img src={htmlLogo} alt="HTML logo" className="skill-logo" />
                </div>
                <div className="skill-icon icon-css" title="CSS">
                  <img src={cssLogo} alt="CSS logo" className="skill-logo" />
                </div>
                <div className="skill-icon icon-js" title="JavaScript">
                  <img src={jsLogo} alt="JavaScript logo" className="skill-logo" />
                </div>
                <div className="skill-icon icon-react" title="React">
                  <span className="skill-text">React</span>
                </div>
                <div className="skill-icon icon-node" title="Node.js">
                  <img src={nodeLogo} alt="Node.js logo" className="skill-logo" />
                </div>
                <div className="skill-icon icon-python" title="Python">
                  <span className="skill-text">Python</span>
                </div>
                <div className="skill-icon icon-ts" title="TypeScript">
                  <span className="skill-text">TS</span>
                </div>
                <div className="skill-icon icon-java" title="Java">
                  <span className="skill-text">Java</span>
                </div>
                <div className="skill-icon icon-php" title="PHP">
                  <span className="skill-text">PHP</span>
                </div>
                <div className="skill-icon icon-vue" title="Vue.js">
                  <span className="skill-text">Vue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
