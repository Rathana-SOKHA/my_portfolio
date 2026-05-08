import '../styles/Projects.css';
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
      tech: ['HTML', 'CSS',],
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
      title: 'Streaming App UI',
      description: 'A sleek streaming application interface with video player, recommendations engine, and user-friendly navigation. Optimized for all device sizes.',
      tech: ['HTML', 'CSS','React.js'],
      link: 'https://my-portfolio-sooty-sigma-90.vercel.app/',
      github: 'https://github.com/Rathana-SOKHA/my_portfolio',
      image: folioNowImage
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <span className="header-underline"></span>
          <p className="section-subtitle">Explore some of my latest work and side projects</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Image */}
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder">No Image</div>
                )}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="project-links">
                <a href={project.link} className="project-link live-link">
                  <span>View Live</span>
                  <span className="arrow">→</span>
                </a>
                <a href={project.github} className="project-link github-link">
                  <span>GitHub</span>
                  <span className="arrow">→</span>
                </a>
              </div>

              {/* Hover Decorative Element */}
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
