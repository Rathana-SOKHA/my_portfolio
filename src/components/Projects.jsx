import '../styles/Projects.css';
import ScrollReveal from './ScrollReveal';
import projectImage from '../assets/projects/music.png';
import foodImage from '../assets/projects/food.png';
import cleanImage from '../assets/projects/clean.png';
import pncImage from '../assets/projects/pnc_life.png';
import folioImage from '../assets/projects/folio.png';
import folioNowImage from '../assets/projects/folio_now.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cleaning Service App',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and checkout functionality. Built with modern React patterns and optimized for performance.',
      tech: ['React', 'Node', 'CSS3', 'REST API', 'MySQL', 'JWT Authentication', 'Maps API'],
      link: 'https://somaet.website/',
      github: '#',
      image: cleanImage
    },
    {
      id: 2,
      title: 'Music Player App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features for enhanced productivity.',
      tech: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      link: 'https://music-player-mauve-six.vercel.app/',
      github: '#',
      image: projectImage
    },
    {
      id: 3,
      title: 'Food Delivery App',
      description: 'A responsive weather application featuring real-time weather data, forecasts, and interactive maps. Beautiful UI with smooth animations and intuitive navigation.',
      tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      link: 'https://food-webiste-seven.vercel.app/',
      github: '#',
      image: foodImage
    },
    {
      id: 4,
      title: 'PNC Student Life',
      description: 'A modern, fully responsive portfolio website showcasing projects and skills. Features smooth scrolling, animations, and SEO optimization for maximum visibility.',
      tech: ['HTML', 'CSS'],
      link: 'https://pnc-student-life.vercel.app/',
      github: '#',
      image: pncImage
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A comprehensive dashboard for managing multiple social media accounts. Track analytics, schedule posts, and monitor engagement across platforms.',
      tech: ['HTML', 'CSS'],
      link: 'https://www.rathana.site/',
      github: '#',
      image: folioImage
    },
    {
      id: 6,
      title: 'Personal Portfolio',
      description: 'A sleek streaming application interface with video player, recommendations engine, and user-friendly navigation. Optimized for all device sizes.',
      tech: ['HTML', 'CSS', 'React.js'],
      link: 'https://my-portfolio-sooty-sigma-90.vercel.app/',
      github: 'https://github.com/Rathana-SOKHA/my_portfolio',
      image: folioNowImage
    }
  ];

  const accentColor = '#14b8a6';

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <h2>Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="fade-up"
              delay={index * 100}
              threshold={0.1}
            >
              <div className="project-card">
                {/* Glow overlay */}
                <div className="project-card-glow" style={{ background: `radial-gradient(ellipse at 50% 0%, ${accentColor}18, transparent 60%)` }}></div>

                {/* Project Image */}
                <div className="project-image-wrap">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="image-placeholder">No Image</div>
                  )}
                </div>

                {/* Card Body */}
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="project-tech-badge">
                    {tech}
                  </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="project-footer">
                  <a href={project.link} className="project-btn project-btn-primary">
                    <span>View Live</span>
                    <span className="btn-arrow">→</span>
                  </a>
                  <a href={project.github} className="project-btn project-btn-secondary">
                    <span>GitHub</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
