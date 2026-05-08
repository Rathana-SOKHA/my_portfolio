import '../styles/About.css';
import profileImage from "../assets/profile.png";

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'CSS3', 'Vite', 'Responsive Design'] },
    { category: 'Tools & Platforms', items: ['Git', 'VS Code', 'GitHub', 'npm', 'Figma'] },
    { category: 'Specialties', items: ['UI/UX', 'Performance Optimization', 'Web Standards', 'Component Architecture'] }
  ];

  const experience = [
    { year: '2023-Present', title: 'Senior Frontend Developer', company: 'Tech Innovators Inc.' },
    { year: '2021-2023', title: 'Frontend Developer', company: 'Digital Solutions Co.' },
    { year: '2020-2021', title: 'Junior Developer', company: 'StartUp Labs' }
  ];

  return (
    <section className="about-section" id="about">
      {/* Main About Section */}
      <div className="about-container">
        
        {/* Bio Section - Image Left, Content Right */}
        <div className="bio-section">
          <div className="bio-image">
            <div className="image-placeholder">
              <img src={profileImage} alt="Profile" className="profile-img" />
            </div>
            {/* Decorative Circle - Bottom Right */}
            <div className="decorative-circle decorative-circle-bottom"></div>
          </div>
          <div className="bio-content">
            <h1>About Me</h1>
            <span id='line'></span>
            <p className="bio-description">
              I'm a passionate web developer dedicated to crafting beautiful, functional, and user-centric digital experiences. I specialize in turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            {/* <p className="bio-highlight">
              With 4+ years of experience building responsive web applications, I transform ideas into stunning digital solutions.
            </p> */}
            <div className="bio-buttons">
              <button className="btn btn-primary">
                Learn More
              </button>
              {/* <button className="btn btn-secondary">
                <span>✉</span> Get in Touch
              </button> */}
            </div>
            <div className="bio-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Study Years</p>
              </div>
              <div className="stat">
                <h3>4+</h3>
                <p>Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="philosophy-section">
          <h2>My Philosophy</h2>
          <div className="philosophy-cards">
            <div className="philosophy-card">
              <div className="card-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>I believe in pushing boundaries and finding creative solutions to complex problems.</p>
            </div>
            <div className="philosophy-card">
              <div className="card-icon">⚡</div>
              <h3>Performance First</h3>
              <p>Speed and efficiency are at the heart of every project I create.</p>
            </div>
            <div className="philosophy-card">
              <div className="card-icon">👥</div>
              <h3>User Focused</h3>
              <p>The end user's experience is always my primary consideration.</p>
            </div>
            <div className="philosophy-card">
              <div className="card-icon">📚</div>
              <h3>Continuous Learning</h3>
              <p>Technology evolves, and so do I. Always learning and improving.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
