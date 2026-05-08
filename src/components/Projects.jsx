import '../styles/Projects.css';
import projectImage from '../assets/project/image.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cleaning Service App',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and checkout functionality. Built with modern React patterns and optimized for performance.',
      tech: ['React', 'Node', 'CSS3', 'REST API', 'MySQL', 'JWT Authentication', 'Maps API'],
      link: '#',
      github: '#',
      image: projectImage

    },
    {
      id: 2,
      title: 'Music Player App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features for enhanced productivity.',
      tech: ['React', 'Firebase', 'Vite', 'Tailwind CSS'],
      link: '#',
      github: '#',
      image: projectImage
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application featuring real-time weather data, forecasts, and interactive maps. Beautiful UI with smooth animations and intuitive navigation.',
      tech: ['React', 'API Integration', 'Maps API', 'localStorage'],
      link: '#',
      github: '#',
      image: projectImage
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, fully responsive portfolio website showcasing projects and skills. Features smooth scrolling, animations, and SEO optimization for maximum visibility.',
      tech: ['React', 'Vite', 'CSS3', 'Responsive Design'],
      link: '#',
      github: '#',
      image: projectImage
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts. Track analytics, schedule posts, and monitor engagement across platforms.',
      tech: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
      image: projectImage
    },
    {
      id: 6,
      title: 'Streaming App UI',
      description: 'A sleek streaming application interface with video player, recommendations engine, and user-friendly navigation. Optimized for all device sizes.',
      tech: ['React', 'Video.js', 'JavaScript', 'CSS Animations'],
      link: '#',
      github: '#',
      image: projectImage
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
