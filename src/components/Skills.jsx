import "../styles/Skills.css";
import javascriptLogo from "../assets/skills/vite.svg";
import phpLogo from "../assets/skills/laravel.svg";
import typescriptLogo from "../assets/skills/vue.svg";
import pythonLogo from "../assets/skills/python.svg";
import nodeLogo from "../assets/skills/framer-motion.svg";
import reactLogo from "../assets/skills/react.svg";
import laravelLogo from "../assets/skills/laravel.svg";
import mysqlLogo from "../assets/skills/firebase.svg";

const skills = [
  {
    name: "JavaScript",
    icon: javascriptLogo,
    proficiency: 85,
    color: "#ff9a32",
    glow: "rgba(255, 154, 50, 0.35)",
  },
  {
    name: "PHP (MVC Structure)",
    icon: phpLogo,
    proficiency: 78,
    color: "#7765ff",
    glow: "rgba(119, 101, 255, 0.35)",
  },
  {
    name: "OOP (TypeScript)",
    icon: typescriptLogo,
    proficiency: 80,
    color: "#f6a623",
    glow: "rgba(246, 166, 35, 0.35)",
  },
  {
    name: "Python (Algorithm)",
    icon: pythonLogo,
    proficiency: 75,
    color: "#7765ff",
    glow: "rgba(119, 101, 255, 0.35)",
  },
  {
    name: "Node",
    icon: nodeLogo,
    proficiency: 88,
    color: "#2da8ff",
    glow: "rgba(45, 168, 255, 0.35)",
  },
  {
    name: "React",
    icon: reactLogo,
    proficiency: 82,
    color: "#2798ff",
    glow: "rgba(39, 152, 255, 0.35)",
  },
  {
    name: "Laravel",
    icon: laravelLogo,
    proficiency: 78,
    color: "#ff7a1a",
    glow: "rgba(255, 122, 26, 0.35)",
  },
  {
    name: "Database (MySQL)",
    icon: mysqlLogo,
    proficiency: 82,
    color: "#17c964",
    glow: "rgba(23, 201, 100, 0.35)",
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
        <h2>My Skills</h2>
      <div className="skills-shell">
        <div className="skills-grid">
          {skills.map((skill) => (
            <article
              className="skill-card"
              key={skill.name}
              style={{
                "--skill-color": skill.color,
                "--skill-glow": skill.glow,
                "--skill-width": `${skill.proficiency}%`,
              }}
            >
              <div className="skill-card-top">
                <div className="skill-badge">
                  <img src={skill.icon} alt={`${skill.name} logo`} />
                </div>
                <div className="skill-meta">
                  <h3>{skill.name}</h3>
                  <div className="skill-accent-line" />
                </div>
              </div>

              <div className="skill-card-bottom">
                <div className="skill-proficiency">
                  <span>Proficiency</span>
                  <strong>{skill.proficiency}%</strong>
                </div>

                <div className="skill-progress-track">
                  <span className="skill-progress-fill" />
                </div>

                <div className="skill-progress-base" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
