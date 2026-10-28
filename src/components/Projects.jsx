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

const projects = [
  {
    id: 1,
    code: "PROJ_01",
    type: "FULL_STACK",
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
    code: "PROJ_02",
    type: "E-COMMERCE",
    title: 'E-Commerce Platform & Order System',
    description: 'A full-stack e-commerce solution with product browsing, wishlist, cart, checkout, admin management panel, QR Code payment, and Telegram Bot order notifications.',
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
    code: "PROJ_03",
    type: "EDTECH",
    title: 'E-Learning Management System',
    description: 'A full-stack e-learning platform for managing courses, students, lessons, and learning activities with secure authentication and role-based access control.',
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
    code: "PROJ_04",
    type: "WEB_APP",
    title: 'Food Delivery Web App',
    description: 'A responsive food delivery web application where users can explore meals, browse menus, and order their favorite food online with a simple, fluid interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    link: 'https://food-webiste-seven.vercel.app/',
    github: 'https://github.com/Rathana-SOKHA/Food_Website',
    image: foodImage
  },
  {
    id: 5,
    code: "PROJ_05",
    type: "MULTIMEDIA",
    title: 'Music Player Web Application',
    description: 'A responsive music player web app with smooth playback, track navigation, volume control, playlist history, and clean audio visual controls.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    link: 'https://music-player-mauve-six.vercel.app/',
    github: 'https://github.com/Rathana-SOKHA/Music_Player',
    image: musicImage
  },
  {
    id: 6,
    code: "PROJ_06",
    type: "COMMUNITY",
    title: 'PNC Student Life Portal',
    description: 'A student community website showcasing PNC Cambodia’s student life, activities, events, and campus experience through a clean, responsive interface.',
    tech: ['HTML', 'CSS', 'SASS'],
    link: '#',
    github: '',
    image: pncImage
  }
];

export default function Projects() {
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
    if (!gh) return;
    if (typeof gh === 'string') {
      window.open(gh, '_blank', 'noopener,noreferrer');
      return;
    }
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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  return (
    <section className="cyber-projects-section" id="projects">
      {/* Background Grid & Ambience */}
      <div className="projects-bg-grid" aria-hidden="true" />
      <div className="projects-ambient-glow" aria-hidden="true" />

      <div className="projects-container">
        {/* Section Header Tag */}
        <div className="projects-header-tag">
          <span className="tag-cross">+</span>
          <span className="tag-mono">// 04. FEATURED_BUILDS</span>
          <span className="tag-bracket">[ DEPLOYED_WORK ]</span>
        </div>

        <h2 className="projects-main-title">
          FEATURED <span className="title-orange">PROJECTS</span>
        </h2>

        {/* Projects Grid */}
        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="fade-up"
              delay={index * 80}
              threshold={0.08}
            >
              <article className="cyber-project-card">
                {/* HUD Corner Brackets */}
                <div className="corner-bracket corner-top-left" />
                <div className="corner-bracket corner-top-right" />
                <div className="corner-bracket corner-bottom-left" />
                <div className="corner-bracket corner-bottom-right" />

                {/* Card Top Technical Strip */}
                <div className="card-hud-strip">
                  <span className="proj-code">{project.code}</span>
                  <span className="proj-type-badge">
                    <span className="proj-status-dot" />
                    {project.type}
                  </span>
                </div>

                {/* Project Image Viewport */}
                <div className="project-image-viewport">
                  <div className="viewfinder-crosses" aria-hidden="true">
                    <span className="vf-cross tl">+</span>
                    <span className="vf-cross tr">+</span>
                    <span className="vf-cross bl">+</span>
                    <span className="vf-cross br">+</span>
                  </div>

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-screenshot"
                      loading="lazy"
                    />
                  ) : (
                    <div className="image-placeholder">NO_PREVIEW</div>
                  )}

                  <div className="image-viewport-glow" />
                </div>

                {/* Project Card Body */}
                <div className="project-card-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Tech Stack Pills */}
                  <div className="project-tech-pills">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-pill">
                        <span className="pill-prefix">#</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Card Footer Actions */}
                <div className="project-card-footer">
                  {hasValidLink(project.link) ? (
                    <a
                      href={project.link}
                      className="cyber-project-btn live-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="btn-text">VIEW LIVE</span>
                      <span className="btn-arrow">&gt;</span>
                    </a>
                  ) : (
                    <div className="cyber-project-btn coming-soon-btn">
                      <span className="cs-pulse" />
                      <span className="btn-text">COMING SOON</span>
                    </div>
                  )}

                  {project.github ? (
                    <button
                      type="button"
                      className="cyber-project-btn code-btn"
                      onClick={() => openCodeModal(project)}
                      title="View Source Code"
                    >
                      <span className="code-tag">&lt;/&gt;</span>
                      <span className="btn-text">CODE</span>
                    </button>
                  ) : (
                    <div className="cyber-project-btn private-btn" title="Internal Academic Project">
                      <span className="btn-text">PRIVATE</span>
                    </div>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Cyber Pagination */}
        {totalPages > 1 && (
          <div className="projects-pagination">
            <button
              className={`pagination-cyber-btn ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <span className="btn-bracket">[</span>
              <span>&lt; PREV</span>
              <span className="btn-bracket">]</span>
            </button>

            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-num-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page < 10 ? `0${page}` : page}
                </button>
              ))}
            </div>

            <button
              className={`pagination-cyber-btn ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <span className="btn-bracket">[</span>
              <span>NEXT &gt;</span>
              <span className="btn-bracket">]</span>
            </button>
          </div>
        )}

        {/* Section Footer HUD Readout */}
        <div className="projects-footer-hud">
          <div className="hud-readout-left">
            <span className="readout-cross">+</span>
            <span className="readout-text">
              WORKSPACE_METRICS: <span className="readout-orange">{projects.length} PROJECTS CATALOGED</span>
            </span>
          </div>

          <div className="hud-readout-center" aria-hidden="true">
            <div className="crosshair-row">
              <span>+</span><span>+</span><span>+</span>
            </div>
          </div>

          <div className="hud-readout-right" aria-hidden="true">
            <div className="hud-slashes">
              <span>/</span><span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== High-Tech Repo Selection Modal ===== */}
      {modalOpen && modalProject && (
        <div className="cyber-modal-overlay" onClick={closeModal}>
          <div className="cyber-modal-dialog" onClick={(e) => e.stopPropagation()}>
            {/* Modal HUD Corner Brackets */}
            <div className="corner-bracket corner-top-left" />
            <div className="corner-bracket corner-top-right" />
            <div className="corner-bracket corner-bottom-left" />
            <div className="corner-bracket corner-bottom-right" />

            {/* Close Button */}
            <button className="cyber-modal-close" onClick={closeModal} aria-label="Close modal">
              ✕
            </button>

            {/* Modal Header */}
            <div className="cyber-modal-header">
              <span className="modal-header-tag">// REPO_SOURCE_SELECTOR</span>
              <h3 className="cyber-modal-title">{modalProject.title}</h3>
              <p className="cyber-modal-subtitle">Choose repository module to explore on GitHub:</p>
            </div>

            {/* Repo Options */}
            <div className="cyber-modal-options">
              {modalProject.github.frontend && (
                <a
                  href={modalProject.github.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-repo-option"
                >
                  <div className="repo-badge frontend-badge">
                    <span>FRONTEND</span>
                  </div>
                  <div className="repo-info-col">
                    <span className="repo-role-label">Client Interface Repository</span>
                    <span className="repo-slug-text">
                      {modalProject.github.frontend.replace('https://github.com/', '')}
                    </span>
                  </div>
                  <span className="repo-arrow-action">&gt;</span>
                </a>
              )}

              {modalProject.github.backend && (
                <a
                  href={modalProject.github.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-repo-option"
                >
                  <div className="repo-badge backend-badge">
                    <span>BACKEND</span>
                  </div>
                  <div className="repo-info-col">
                    <span className="repo-role-label">Server & API Repository</span>
                    <span className="repo-slug-text">
                      {modalProject.github.backend.replace('https://github.com/', '')}
                    </span>
                  </div>
                  <span className="repo-arrow-action">&gt;</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
