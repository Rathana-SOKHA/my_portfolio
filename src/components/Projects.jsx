import { useState } from 'react';
import '../styles/Projects.css';
import ScrollReveal from './ScrollReveal';
import projectImage from '../assets/projects/music.png';
import foodImage from '../assets/projects/food.png';
import cleanImage from '../assets/projects/clean.png';
import pncImage from '../assets/projects/pnc_life.png';
import folioImage from '../assets/projects/folio.png';
import folioNowImage from '../assets/projects/folio_now.png';
import pncSelectionImage from "../assets/projects/pncSelection.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'PNC Student Selection Management System',
      description: 'A full-stack web application designed to help manage and streamline the student selection process for Passerelles Numériques Cambodia (PNC).',
      tech: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
      link: 'https://somaet.website/',
      github: 'https://github.com/Rathana-SOKHA/pnc-selection-system',
      image: pncSelectionImage
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features for enhanced productivity.',
      tech: ['Laravel', 'Vue.js', 'MySQL'],
      link: 'https://music-player-mauve-six.vercel.app/',
      github: '#',
      image: projectImage
    },
    {
      id: 3,
      title: 'Food Delivery App',
      description: 'A responsive food delivery web application where users can explore meals, browse menus, and order their favorite food online with a simple and user-friendly interfact.',
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
      title: 'E_Learning Management System',
      description: 'A sleek streaming application interface with video player, recommendations engine, and user-friendly navigation. Optimized for all device sizes.',
      tech: ['Node.js', 'Vue.js', 'MySQL'],
      link: 'https://my-portfolio-sooty-sigma-90.vercel.app/',
      github: 'https://github.com/Rathana-SOKHA/my_portfolio',
      image: folioNowImage
    },
    {
      id: 7,
      title: 'Online Shopping Platform',
      description: 'A sleek streaming application interface with video player, recommendations engine, and user-friendly navigation. Optimized for all device sizes.',
      tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
      link: 'https://my-portfolio-sooty-sigma-90.vercel.app/',
      github: 'https://github.com/Rathana-SOKHA/my_portfolio',
      image: folioNowImage
    },
    {
      id: 8,
      title: 'Music Player App',
      description: 'A sleek streaming application interface with video player, recommendations engine, and user-friendly navigation. Optimized for all device sizes.',
      tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
      link: 'https://my-portfolio-sooty-sigma-90.vercel.app/',
      github: 'https://github.com/Rathana-SOKHA/my_portfolio',
      image: folioNowImage
    },
    {
      id: 9,
      title: 'Online Shopping Platform',
      description: 'A sleek streaming application interface with video player, recommendations engine, and user-friendly navigation. Optimized for all device sizes.',
      tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
      link: 'https://my-portfolio-sooty-sigma-90.vercel.app/',
      github: 'https://github.com/Rathana-SOKHA/my_portfolio',
      image: folioNowImage
    }
  ];

  const accentColor = '#14b8a6';

  // Pagination
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <h2>Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {currentProjects.map((project, index) => (
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
                  <a href={project.link} className="project-btn project-btn-primary" target="_blank" rel="noopener noreferrer">
                    <span className="project-btn-content">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 17L17 7" />
                        <path d="M8 7h9v9" />
                      </svg>
                      <span>Live Demo</span>
                    </span>
                  </a>
                  <a href={project.github} className="project-btn project-btn-secondary" target="_blank" rel="noopener noreferrer">
                    <span className="project-btn-content">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 18c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3A5.6 5.6 0 0 0 20 5.1 5.2 5.2 0 0 0 19.8 1S18.7.7 16.5 2.2a14.6 14.6 0 0 0-7.7 0C6.6.7 5.5 1 5.5 1A5.2 5.2 0 0 0 5.3 5.1 5.6 5.6 0 0 0 4.1 9c0 5.7 3.4 6.9 6.7 7.3a3.5 3.5 0 0 0-1 2.7V21" />
                      </svg>
                      <span>Code</span>
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="projects-pagination">
            <button
              className={`pagination-btn${currentPage === 1 ? ' pagination-disabled' : ''}`}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <span className="pagination-chevron">‹</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-btn pagination-number${currentPage === page ? ' pagination-active' : ''}`}
                onClick={() => setCurrentPage(page)}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
            <button
              className={`pagination-btn${currentPage === totalPages ? ' pagination-disabled' : ''}`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <span className="pagination-chevron">›</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
