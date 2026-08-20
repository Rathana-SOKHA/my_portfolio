import { useState, useEffect, useCallback } from 'react';
import '../styles/Projects.css';
import ScrollReveal from './ScrollReveal';
import musicImage from '../assets/projects/music.png';
import foodImage from '../assets/projects/food.png';
import cleanImage from '../assets/projects/clean.png';
import pncImage from '../assets/projects/pnc_life.png';
import folioImage from '../assets/projects/folio.png';
import folioNowImage from '../assets/projects/folio_now.png';
import pncSelectionImage from "../assets/projects/pncSelection.png";
import ecommerceImage from "../assets/projects/ecommerce.png";
import elearningImage from "../assets/projects/elearning.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'PNC Student Selection Management System',
      description: 'A full-stack web application designed to help manage and streamline the student selection process for Passerelles Numériques Cambodia (PNC).',
      tech: ['Laravel', 'Vue.js', 'MySQL', 'TypeScript'],
      link: '#',
      github: {
        frontend: 'https://github.com/pnc-selection-system/pnc-selection-system',
        backend: 'https://github.com/pnc-selection-system/pnc-selection-system-api'
      },
      image: pncSelectionImage
    },
    {
      id: 2,
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce website with product browsing, wishlist, cart, checkout, and admin management panel. Supports QR Code & Cash on Delivery, with Telegram Bot order notifications.',
      tech: ['Laravel', 'Vue.js', 'MySQL', 'OAuth'],
      link: '#',
      github: {
        frontend: 'https://github.com/Rathana-SOKHA/ecommerce-frontend',
        backend: 'https://github.com/Rathana-SOKHA/ecommerce-backend'
      },
      image: ecommerceImage
    },
    {
      id: 3,
      title: 'E-Learning Management System',
      description: 'A full-stack e-learning platform for managing courses, students, lessons, and learning activities with secure authentication and role-based access.',
      tech: ['Node.js', 'Vue.js', 'MySQL', 'TypeScript'],
      link: '',
      github: {
        frontend: 'https://github.com/Rathana-SOKHA/E_Learning_Management_System_Frontend',
        backend: 'https://github.com/Rathana-SOKHA/E_Learning_Management_System_Backend'
      },
      image: elearningImage
    },
    {
      id: 4,
      title: 'Food Delivery Website',
      description: 'A responsive food delivery web application where users can explore meals, browse menus, and order their favorite food online with a simple and user-friendly interface.',
      tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      link: 'https://food-webiste-seven.vercel.app/',
      github: 'https://github.com/Rathana-SOKHA/Food_Website',
      image: foodImage
    },
    {
      id: 5,
      title: 'Music Player App',
      description: 'A responsive music player web app with smooth playback, track navigation, volume control, recently played songs, and a clean, user-friendly interface.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      link: 'https://music-player-mauve-six.vercel.app/',
      github: 'https://github.com/Rathana-SOKHA/Music_Player',
      image: musicImage
    },
    {
      id: 6,
      title: 'PNC Student Life',
      description: 'A student community website showcasing PNC Cambodia’s student life, activities, events, and campus experience through a clean and responsive interface.',
      tech: ['HTML', 'CSS', 'SASS'],
      link: '#',
      github: '',
      image: pncImage
    },  
    // {
    //   id: 7,
    //   title: 'Online Shopping Platform',
    //   description: 'A sleek streaming application interface with video player, recommendations engine, and user-friendly navigation. Optimized for all device sizes.',
    //   tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
    //   link: 'https://my-portfolio-sooty-sigma-90.vercel.app/',
    //   github: 'https://github.com/Rathana-SOKHA/my_portfolio',
    //   image: folioNowImage
    // },
    // {
    //   id: 8,
    //   title: 'Music Player App',
    //   description: 'A sleek streaming application interface with video player, recommendations engine, and user-friendly navigation. Optimized for all device sizes.',
    //   tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
    //   link: 'https://my-portfolio-sooty-sigma-90.vercel.app/',
    //   github: 'https://github.com/Rathana-SOKHA/my_portfolio',
    //   image: folioNowImage
    // },
    // {
    //   id: 9,
    //   title: 'Online Shopping Platform',
    //   description: 'A sleek streaming application interface with video player, recommendations engine, and user-friendly navigation. Optimized for all device sizes.',
    //   tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
    //   link: 'https://my-portfolio-sooty-sigma-90.vercel.app/',
    //   github: 'https://github.com/Rathana-SOKHA/my_portfolio',
    //   image: folioNowImage
    // }
  ];

  const accentColor = '#14b8a6';

  // Check if a link is valid (not empty or placeholder)
  const hasValidLink = (link) => link && link !== '#' && link.trim() !== '';

  // Pagination
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const openCodeModal = useCallback((project) => {
    const gh = project.github;
    // If it's a single string URL, open it directly (no modal needed)
    if (typeof gh === 'string') {
      window.open(gh, '_blank', 'noopener,noreferrer');
      return;
    }
    // If it's an object with frontend/backend, open the modal
    setModalProject(project);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalProject(null);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [modalOpen, closeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

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
                  {hasValidLink(project.link) ? (
                    <a href={project.link} className="project-btn project-btn-primary" target="_blank" rel="noopener noreferrer">
                      <span className="project-btn-content">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M7 17L17 7" />
                          <path d="M8 7h9v9" />
                        </svg>
                        <span>View Live</span>
                      </span>
                    </a>
                  ) : (
                    <span className="project-btn project-btn-primary project-btn-coming-soon">
                      <span className="project-btn-content">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>Coming Soon</span>
                      </span>
                    </span>
                  )}
                  <button
                    type="button"
                    className="project-btn project-btn-secondary"
                    onClick={() => openCodeModal(project)}
                  >
                    <span className="project-btn-content">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 18c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3A5.6 5.6 0 0 0 20 5.1 5.2 5.2 0 0 0 19.8 1S18.7.7 16.5 2.2a14.6 14.6 0 0 0-7.7 0C6.6.7 5.5 1 5.5 1A5.2 5.2 0 0 0 5.3 5.1 5.6 5.6 0 0 0 4.1 9c0 5.7 3.4 6.9 6.7 7.3a3.5 3.5 0 0 0-1 2.7V21" />
                      </svg>
                      <span>Code</span>
                    </span>
                  </button>
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

      {/* ===== Repo Selection Modal ===== */}
      {modalOpen && modalProject && (
        <div className="repo-modal-overlay" onClick={closeModal}>
          <div className="repo-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button className="repo-modal-close" onClick={closeModal} aria-label="Close modal">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="repo-modal-header">
              <div className="repo-modal-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3A5.6 5.6 0 0 0 20 5.1 5.2 5.2 0 0 0 19.8 1S18.7.7 16.5 2.2a14.6 14.6 0 0 0-7.7 0C6.6.7 5.5 1 5.5 1A5.2 5.2 0 0 0 5.3 5.1 5.6 5.6 0 0 0 4.1 9c0 5.7 3.4 6.9 6.7 7.3a3.5 3.5 0 0 0-1 2.7V21" />
                </svg>
              </div>
              <h3 className="repo-modal-title">{modalProject.title}</h3>
              <p className="repo-modal-subtitle">Select a repository to view on GitHub</p>
            </div>

            {/* Repo Options */}
            <div className="repo-modal-options">
              {modalProject.github.frontend && (
                <a
                  href={modalProject.github.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-option"
                >
                  <div className="repo-option-icon repo-option-frontend">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div className="repo-option-info">
                    <span className="repo-option-label">Frontend</span>
                    <span className="repo-option-url">{modalProject.github.frontend.replace('https://github.com/', '')}</span>
                  </div>
                  <svg className="repo-option-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              )}

              {modalProject.github.backend && (
                <a
                  href={modalProject.github.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-option"
                >
                  <div className="repo-option-icon repo-option-backend">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                  </div>
                  <div className="repo-option-info">
                    <span className="repo-option-label">Backend</span>
                    <span className="repo-option-url">{modalProject.github.backend.replace('https://github.com/', '')}</span>
                  </div>
                  <svg className="repo-option-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
