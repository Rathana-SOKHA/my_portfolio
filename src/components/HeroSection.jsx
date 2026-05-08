import React from "react";
import "../styles/HeroSection.css";
import profileImage from "../assets/profile.png";
import htmlLogo from "../assets/languages/html.png";
import cssLogo from "../assets/languages/css.png";
import jsLogo from "../assets/languages/javascript.png";
import nodeLogo from "../assets/languages/node.png";

export default function HeroSection() {
  const cvFilePath = "/CV & CL Rathana SOKHA.pdf";

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
            <h1 className="hero-title" style={{ fontSize: "32px" }}>
              I'm{" "}
              <span className="highlight" style={{ fontSize: "32px" }}>
                Web Developer
              </span>
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
              href="https://t.me/Rathanacoding"
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
            <div className="character-avatar">
              <img src={profileImage} alt="Sokha Rathana Profile" className="profile-img" />
            </div>
            <div className="skill-icons">
              <div className="skill-icon icon-hi">
                <img src={htmlLogo} alt="HTML logo" className="skill-logo" />
              </div>
              <div className="skill-icon icon-ai">
                <img src={cssLogo} alt="CSS logo" className="skill-logo" />
              </div>
              <div className="skill-icon icon-design">
                <img src={jsLogo} alt="JavaScript logo" className="skill-logo" />
              </div>
              <div className="skill-icon icon-code">React</div>
              <div className="skill-icon icon-pr">
                <img src={nodeLogo} alt="Node.js logo" className="skill-logo" />
              </div>
              <div className="skill-icon icon-python">Python</div>
              <div className="skill-icon icon-ts">TS</div>
              <div className="skill-icon icon-java">Java</div>
              <div className="skill-icon icon-php">PHP</div>
              <div className="skill-icon icon-vue">Vue</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
