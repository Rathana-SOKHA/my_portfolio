import TypewriterTitle from '../components/animations/TypewriterTitle';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import '../styles/Projects.css';
import ScrollReveal from '../components/animations/ScrollReveal';
import ParallaxImage from '../components/animations/ParallaxImage';
import musicImage from '../assets/projects/music.png';
import foodImage from '../assets/projects/food.png';
import pncImage from '../assets/projects/pnc_life.png';
import pncSelectionImage from "../assets/projects/pncSelection.png";
import ecommerceImage from "../assets/projects/ecommerce.png";
import elearningImage from "../assets/projects/elearning.png";

const projects = [
  {
    id: 1,
    code: "PROJ_01",
    type: "FULL_STACK",
    category: "FULL_STACK",
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
    category: "FULL_STACK",
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
    category: "FULL_STACK",
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
    category: "FRONTEND",
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
    category: "FRONTEND",
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
    category: "FRONTEND",
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
  const projectFilters = [
    { id: 'ALL', label: 'ALL PROJECTS' },
    { id: 'FULL_STACK', label: 'FULL STACK' },
    { id: 'FRONTEND', label: 'WEB APPS' },
  ];

  // Pagination
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === 'ALL' || project.category === activeFilter;
    const searchableText = [
      project.title,
      project.description,
      project.type,
      ...project.tech,
    ].join(' ').toLowerCase();

    return matchesCategory && searchableText.includes(normalizedQuery);
  });
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const selectFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const updateSearchQuery = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

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
    <section className="cyber-projects-section [position:relative] [width:100%] [padding:120px_4%_100px] [background-color:#0b0d12] [background:radial-gradient(ellipse_at_50%_20%,_rgba(32,_36,_48,_0.65)_0%,_rgba(13,_15,_20,_0.95)_60%,_#08090c_100%)] [color:#ffffff] [overflow:hidden] [box-sizing:border-box] [font-family:Poppins,_sans-serif] [scroll-margin-top:80px] max-[1023px]:[padding:90px_20px_70px] max-[767px]:[padding:70px_16px_50px] max-[480px]:[padding:60px_12px_40px] [[data-theme='light']_&]:[background-color:#f8fafc] [[data-theme='light']_&]:[color:#0f172a]" id="projects">
      {/* Background Grid & Ambience */}
      <div className="projects-bg-grid [position:absolute] [inset:0] [background-image:linear-gradient(to_right,_rgba(255,_255,_255,_0.02)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,_255,_255,_0.02)_1px,_transparent_1px)] [background-size:70px_70px] [background-position:center_top] [pointer-events:none] [z-index:0] [mask-image:radial-gradient(circle_at_50%_20%,_black_40%,_transparent_90%)] [-webkit-mask-image:radial-gradient(circle_at_50%_20%,_black_40%,_transparent_90%)] [[data-theme='light']_&]:[background-image:linear-gradient(to_right,_rgba(15,_23,_42,_0.03)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(15,_23,_42,_0.03)_1px,_transparent_1px)]" aria-hidden="true" />
      <div className="projects-ambient-glow [position:absolute] [top:30%] [right:8%] [width:550px] [height:550px] [background:radial-gradient(circle,_rgba(229,_169,_71,_0.06)_0%,_transparent_70%)] [border-radius:50%] [pointer-events:none] [z-index:0]" aria-hidden="true" />

      <div className="projects-container [position:relative] [max-width:1400px] [margin:0_auto] [z-index:2]">
        {/* Section Header Tag & Title */}
        <ScrollReveal animation="fade-up" delay={0}>
          <div className="projects-header-tag [display:inline-flex] [align-items:center] [gap:10px] [margin-bottom:14px]">
            <span className="tag-cross [.projects-header-tag_&]:[color:#e5a947] [.projects-header-tag_&]:[font-size:1.1rem] [.projects-header-tag_&]:[font-weight:700] [.projects-header-tag_&]:[text-shadow:0_0_10px_rgba(229,_169,_71,_0.6)]">+</span>
            <span className="tag-mono [.projects-header-tag_&]:[font-family:Space_Mono,_monospace] [.projects-header-tag_&]:[font-size:clamp(0.72rem,_0.82vw,_0.86rem)] [.projects-header-tag_&]:[font-weight:700] [.projects-header-tag_&]:[letter-spacing:0.18em] [.projects-header-tag_&]:[color:#94a3b8] [.projects-header-tag_&]:[text-transform:uppercase]">// 04. FEATURED_BUILDS</span>
            <span className="tag-bracket [.projects-header-tag_&]:[font-family:Space_Mono,_monospace] [.projects-header-tag_&]:[font-size:0.72rem] [.projects-header-tag_&]:[color:#e5a947] [.projects-header-tag_&]:[letter-spacing:0.1em]">[ DEPLOYED_WORK ]</span>
          </div>

          <TypewriterTitle
            className="projects-main-title [font-family:Montserrat,_Poppins,_-apple-system,_sans-serif] [font-size:clamp(2.2rem,_3.8vw,_3.8rem)] [font-weight:900] [letter-spacing:-0.01em] [line-height:1.15] [color:#ffffff] [margin:0_0_55px] [max-width:950px] [text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_3px_0_#64748b,_0_6px_18px_rgba(0,_0,_0,_0.85)] [&_.title-word]:[color:#ffffff] [&_.title-word]:[-webkit-text-fill-color:#ffffff] [&_.title-word]:[background:none] [&_.title-word]:[filter:none] [&_.title-word]:[display:inline-block] [&_.title-word]:[text-shadow:0_1px_0_#cbd5e1,_0_2px_0_#94a3b8,_0_3px_0_#64748b,_0_6px_18px_rgba(0,_0,_0,_0.85)] max-[1023px]:[font-size:clamp(1.9rem,_4.5vw,_3rem)] max-[1023px]:[line-height:1.08] max-[1023px]:[margin-bottom:42px] max-[767px]:[margin-bottom:35px] max-[767px]:[font-size:clamp(1.6rem,_8vw,_2.7rem)] max-[767px]:[line-height:1.05] max-[767px]:[max-width:100%] max-[767px]:[letter-spacing:-0.04em] max-[480px]:[font-size:clamp(1.3rem,_10vw,_2.1rem)] max-[480px]:[line-height:1.08] max-[480px]:[letter-spacing:-0.05em] [[data-theme='light']_&]:[color:#0f172a] [[data-theme='light']_&]:[text-shadow:0_1px_0_#ffffff,_0_2px_0_#e2e8f0,_0_4px_12px_rgba(0,_0,_0,_0.15)]"
            text="FEATURED "
            goldText="PROJECTS"
          />
        </ScrollReveal>

        {/* Interactive project filters and search */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="projects-controls [display:flex] [align-items:center] [justify-content:space-between] [gap:20px] [margin:-20px_0_14px] [padding:14px] [border:1px_solid_rgba(255,_255,_255,_0.07)] [background:rgba(10,_13,_20,_0.52)] max-[767px]:[align-items:stretch] max-[767px]:[flex-direction:column] max-[767px]:[gap:12px] max-[767px]:[margin-top:-12px] [[data-theme='light']_&]:[background:rgba(255,_255,_255,_0.75)] [[data-theme='light']_&]:[border-color:rgba(15,_23,_42,_0.1)]">
            <div className="projects-filter-list [display:flex] [flex-wrap:wrap] [gap:8px]" role="group" aria-label="Filter projects by category">
              {projectFilters.map((filter) => {
                const count = filter.id === 'ALL'
                  ? projects.length
                  : projects.filter((project) => project.category === filter.id).length;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    className={`projects-filter-btn  [display:inline-flex] [align-items:center] [gap:9px] [padding:9px_12px] [color:#94a3b8] [background:transparent] [border:1px_solid_transparent] [font-family:Space_Mono,_monospace] [font-size:0.7rem] [font-weight:700] [letter-spacing:0.07em] [cursor:pointer] [transition:color_0.2s_ease,_background-color_0.2s_ease,_border-color_0.2s_ease] [&:hover]:[color:#ffffff] [&:hover]:[border-color:rgba(229,_169,_71,_0.35)] [&:hover]:[outline:none] [&:focus-visible]:[color:#ffffff] [&:focus-visible]:[border-color:rgba(229,_169,_71,_0.35)] [&:focus-visible]:[outline:none] [[data-theme='light']_&]:[color:#475569] [[data-theme='light']_&:hover]:[color:#0f172a] [[data-theme='light']_&:focus-visible]:[color:#0f172a] ${activeFilter === filter.id ? 'active [.projects-filter-btn&]:[color:#ffffff] [.projects-filter-btn&]:[background:rgba(229,_169,_71,_0.1)] [.projects-filter-btn&]:[border-color:rgba(229,_169,_71,_0.65)] [[data-theme=\'light\']_.projects-filter-btn&]:[color:#0f172a]' : ''}`}
                    onClick={() => selectFilter(filter.id)}
                    aria-pressed={activeFilter === filter.id}
                  >
                    <span>{filter.label}</span>
                    <span className="projects-filter-count [color:#f8ce72] [font-size:0.65rem]">{count.toString().padStart(2, '0')}</span>
                  </button>
                );
              })}
            </div>

            <label className="projects-search [display:flex] [align-items:center] [gap:10px] [width:min(100%,_290px)] [min-width:220px] [padding:9px_12px] [border:1px_solid_rgba(255,_255,_255,_0.1)] [background:rgba(4,_5,_8,_0.55)] [transition:border-color_0.2s_ease,_box-shadow_0.2s_ease] [&:focus-within]:[border-color:rgba(229,_169,_71,_0.75)] [&:focus-within]:[box-shadow:0_0_14px_rgba(229,_169,_71,_0.12)] [&_input]:[width:100%] [&_input]:[min-width:0] [&_input]:[color:#ffffff] [&_input]:[background:transparent] [&_input]:[border:0] [&_input]:[outline:0] [&_input]:[font-family:Space_Mono,_monospace] [&_input]:[font-size:0.7rem] [&_input]:[letter-spacing:0.06em] [&_input::placeholder]:[color:#64748b] [&_input::placeholder]:[opacity:1] [&_input::-webkit-search-cancel-button]:[cursor:pointer] max-[767px]:[width:auto] [[data-theme='light']_&]:[background:#ffffff] [[data-theme='light']_&]:[border-color:rgba(15,_23,_42,_0.12)] [[data-theme='light']_&_input]:[color:#0f172a] [[data-theme='light']_&_input::placeholder]:[color:#64748b]">
              <svg className="projects-search-icon [width:16px] [height:16px] [flex:0_0_auto] [stroke:#f8ce72] [stroke-width:1.8]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 4.2 4.2" />
              </svg>
              <input
                type="search"
                className="projects-search-input"
                placeholder="Search projects by tech, keyword..."
                value={searchQuery}
                onChange={updateSearchQuery}
                aria-label="Search projects by name or technology"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="projects-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </label>
          </div>

          <p className="projects-results-count [margin:0_0_20px] [color:#64748b] [font-family:Space_Mono,_monospace] [font-size:0.66rem] [letter-spacing:0.12em] [&_span]:[color:#f8ce72]" aria-live="polite">
            SHOWING <span>{currentProjects.length}</span> OF <span>{filteredProjects.length}</span> PROJECTS
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="projects-grid [display:grid] [grid-template-columns:repeat(3,_1fr)] [gap:28px] [margin-bottom:50px] max-[1280px]:[grid-template-columns:repeat(2,_1fr)] max-[1280px]:[gap:22px] max-[1023px]:[grid-template-columns:repeat(2,_1fr)] max-[1023px]:[gap:20px] max-[767px]:[grid-template-columns:1fr] max-[767px]:[gap:20px]" aria-live="polite">
          {currentProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="fade-up"
              delay={index * 60}
              threshold={0.08}
            >
              <article className="cyber-project-card [position:relative] [background:rgba(10,_13,_20,_0.7)] [backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)] [border:1px_solid_rgba(255,_255,_255,_0.07)] [border-radius:4px] [padding:18px_18px_16px] [display:flex] [flex-direction:column] [transition:transform_0.3s_cubic-bezier(0.16,_1,_0.3,_1),_border-color_0.3s_ease,_box-shadow_0.3s_ease] [box-shadow:0_15px_35px_rgba(0,_0,_0,_0.5)] [height:100%] [box-sizing:border-box] [@media(hover:hover)_and_(pointer:fine)]:[&:hover]:[transform:translateY(-5px)] [@media(hover:hover)_and_(pointer:fine)]:[&:hover]:[border-color:rgba(229,_169,_71,_0.4)] [@media(hover:hover)_and_(pointer:fine)]:[&:hover]:[box-shadow:0_22px_50px_rgba(0,_0,_0,_0.7),_0_0_25px_rgba(229,_169,_71,_0.18)] [[data-theme='light']_&]:[background:rgba(255,_255,_255,_0.95)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.08)] [[data-theme='light']_&]:[box-shadow:0_15px_35px_rgba(0,_0,_0,_0.06)]">
                {/* HUD Corner Brackets */}
                <div className="corner-bracket corner-top-left [[data-theme='light']_.cyber-project-card_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.cyber-modal-dialog_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
                <div className="corner-bracket corner-top-right [[data-theme='light']_.cyber-project-card_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.cyber-modal-dialog_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
                <div className="corner-bracket corner-bottom-left [[data-theme='light']_.cyber-project-card_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.cyber-modal-dialog_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
                <div className="corner-bracket corner-bottom-right [[data-theme='light']_.cyber-project-card_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.cyber-modal-dialog_&]:[border-color:rgba(15,_23,_42,_0.25)]" />

                {/* Card Top Technical Strip */}
                <div className="card-hud-strip [display:flex] [align-items:center] [justify-content:space-between] [padding-bottom:12px] [margin-bottom:14px] [border-bottom:1px_solid_rgba(255,_255,_255,_0.06)]">
                  <span className="proj-code [font-family:Space_Mono,_monospace] [font-size:0.76rem] [font-weight:700] [color:#e5a947] [letter-spacing:0.14em]">{project.code}</span>
                  <span className="proj-type-badge [display:inline-flex] [align-items:center] [gap:6px] [font-family:Space_Mono,_monospace] [font-size:0.65rem] [font-weight:700] [letter-spacing:0.1em] [color:#94a3b8] [text-transform:uppercase]">
                    <span className="proj-status-dot [width:6px] [height:6px] [background-color:#e5a947] [border-radius:50%] [box-shadow:0_0_6px_#e5a947]" />
                    {project.type}
                  </span>
                </div>

                {/* Project Image Viewport */}
                <div className="project-image-viewport [position:relative] [width:100%] [height:200px] [border-radius:4px] [overflow:hidden] [background:#0d0f17] [border:1px_solid_rgba(255,_255,_255,_0.05)] [display:flex] [align-items:center] [justify-content:center] [margin-bottom:18px] max-[767px]:[height:180px] max-[480px]:[height:160px]">
                  <div className="viewfinder-crosses" aria-hidden="true">
                    <span className="vf-cross tl [.viewfinder-crosses_&]:[position:absolute] [.viewfinder-crosses_&]:[color:rgba(229,_169,_71,_0.6)] [.viewfinder-crosses_&]:[font-family:Space_Mono,_monospace] [.viewfinder-crosses_&]:[font-size:0.85rem] [.viewfinder-crosses_&]:[line-height:1] [.viewfinder-crosses_&]:[z-index:4] [.viewfinder-crosses_&]:[user-select:none] [.vf-cross&]:[top:8px] [.vf-cross&]:[left:8px]">+</span>
                    <span className="vf-cross tr [.viewfinder-crosses_&]:[position:absolute] [.viewfinder-crosses_&]:[color:rgba(229,_169,_71,_0.6)] [.viewfinder-crosses_&]:[font-family:Space_Mono,_monospace] [.viewfinder-crosses_&]:[font-size:0.85rem] [.viewfinder-crosses_&]:[line-height:1] [.viewfinder-crosses_&]:[z-index:4] [.viewfinder-crosses_&]:[user-select:none] [.vf-cross&]:[top:8px] [.vf-cross&]:[right:8px]">+</span>
                    <span className="vf-cross bl [.viewfinder-crosses_&]:[position:absolute] [.viewfinder-crosses_&]:[color:rgba(229,_169,_71,_0.6)] [.viewfinder-crosses_&]:[font-family:Space_Mono,_monospace] [.viewfinder-crosses_&]:[font-size:0.85rem] [.viewfinder-crosses_&]:[line-height:1] [.viewfinder-crosses_&]:[z-index:4] [.viewfinder-crosses_&]:[user-select:none] [.vf-cross&]:[bottom:8px] [.vf-cross&]:[left:8px]">+</span>
                    <span className="vf-cross br [.viewfinder-crosses_&]:[position:absolute] [.viewfinder-crosses_&]:[color:rgba(229,_169,_71,_0.6)] [.viewfinder-crosses_&]:[font-family:Space_Mono,_monospace] [.viewfinder-crosses_&]:[font-size:0.85rem] [.viewfinder-crosses_&]:[line-height:1] [.viewfinder-crosses_&]:[z-index:4] [.viewfinder-crosses_&]:[user-select:none] [.vf-cross&]:[bottom:8px] [.vf-cross&]:[right:8px]">+</span>
                  </div>

                  {project.image ? (
                    <ParallaxImage
                      src={project.image}
                      alt={project.title}
                      className="project-screenshot [width:100%] [height:100%] [object-fit:cover] [object-position:top_center] [transition:transform_0.5s_cubic-bezier(0.16,_1,_0.3,_1),_filter_0.4s_ease] [filter:brightness(0.92)_contrast(1.05)] [@media(hover:hover)_and_(pointer:fine)]:[.cyber-project-card:hover_&]:[transform:scale(1.035)] [@media(hover:hover)_and_(pointer:fine)]:[.cyber-project-card:hover_&]:[filter:brightness(1)_contrast(1.1)]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="image-placeholder [font-family:Space_Mono,_monospace] [font-size:0.78rem] [color:#64748b] [letter-spacing:0.14em]">NO_PREVIEW</div>
                  )}

                  <div className="image-viewport-glow [position:absolute] [inset:0] [background:linear-gradient(to_top,_rgba(10,_13,_20,_0.75)_0%,_transparent_50%)] [pointer-events:none] [z-index:2]" />
                </div>

                {/* Project Card Body */}
                <div className="project-card-body [display:flex] [flex-direction:column] [flex:1]">
                  <h3 className="project-title [font-family:Montserrat,_Poppins,_sans-serif] [font-size:1.12rem] [font-weight:800] [color:#ffffff] [margin:0_0_10px] [line-height:1.35] [letter-spacing:-0.01em] [transition:color_0.25s_ease] [@media(hover:hover)_and_(pointer:fine)]:[.cyber-project-card:hover_&]:[color:#f8ce72] [[data-theme='light']_&]:[color:#0f172a]">{project.title}</h3>
                  <p className="project-description [font-size:0.86rem] [line-height:1.65] [color:#94a3b8] [margin:0_0_16px] [flex:1] [[data-theme='light']_&]:[color:#475569]">{project.description}</p>

                  {/* Tech Stack Pills */}
                  <div className="project-tech-pills [display:flex] [flex-wrap:wrap] [gap:7px] [margin-bottom:20px]">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-pill [display:inline-flex] [align-items:center] [gap:3px] [padding:4px_9px] [background:rgba(255,_255,_255,_0.04)] [border:1px_solid_rgba(255,_255,_255,_0.08)] [border-radius:3px] [font-family:Space_Mono,_monospace] [font-size:0.68rem] [font-weight:600] [color:#cbd5e1] [letter-spacing:0.04em] [transition:all_0.2s_ease] [@media(hover:hover)_and_(pointer:fine)]:[.cyber-project-card:hover_&]:[border-color:rgba(229,_169,_71,_0.25)] [@media(hover:hover)_and_(pointer:fine)]:[.cyber-project-card:hover_&]:[background:rgba(229,_169,_71,_0.06)] [[data-theme='light']_&]:[background:rgba(0,_0,_0,_0.03)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.08)] [[data-theme='light']_&]:[color:#1e293b]">
                        <span className="pill-prefix [.tech-pill_&]:[color:#e5a947] [.tech-pill_&]:[font-weight:700]">#</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Card Footer Actions */}
                <div className="project-card-footer [display:flex] [align-items:center] [gap:10px] [padding-top:14px] [border-top:1px_solid_rgba(255,_255,_255,_0.06)]">
                  {hasValidLink(project.link) ? (
                    <a
                      href={project.link}
                      className="cyber-project-btn live-btn [display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [padding:10px_16px] [border-radius:4px] [font-family:Space_Mono,_monospace] [font-size:0.74rem] [font-weight:700] [letter-spacing:0.12em] [text-transform:uppercase] [text-decoration:none] [cursor:pointer] [transition:all_0.25s_cubic-bezier(0.16,_1,_0.3,_1)] [box-sizing:border-box] max-[767px]:[padding:10px_12px] max-[767px]:[font-size:0.7rem] max-[480px]:[width:100%] max-[480px]:[box-sizing:border-box] max-[480px]:[justify-content:center] [.cyber-project-btn&]:[flex:1] [.cyber-project-btn&]:[background:linear-gradient(90deg,_rgba(20,_15,_12,_0.95)_0%,_rgba(28,_20,_16,_0.9)_100%)] [.cyber-project-btn&]:[border:1.5px_solid_#e5a947] [.cyber-project-btn&]:[color:#ffffff] [.cyber-project-btn&]:[box-shadow:0_0_12px_rgba(229,_169,_71,_0.2)] [.cyber-project-btn&:hover]:[background:#e5a947] [.cyber-project-btn&:hover]:[color:#ffffff] [.cyber-project-btn&:hover]:[box-shadow:0_0_20px_rgba(229,_169,_71,_0.6)] [.cyber-project-btn&:hover]:[transform:translateY(-2px)]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="btn-text">VIEW LIVE</span>
                      <span className="btn-arrow [.cyber-project-btn.live-btn_&]:[color:#e5a947] [.cyber-project-btn.live-btn_&]:[font-weight:800] [.cyber-project-btn.live-btn_&]:[transition:transform_0.2s_ease,_color_0.2s_ease] [.cyber-project-btn.live-btn:hover_&]:[color:#ffffff] [.cyber-project-btn.live-btn:hover_&]:[transform:translateX(3px)]">&gt;</span>
                    </a>
                  ) : (
                    <div className="cyber-project-btn coming-soon-btn [display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [padding:10px_16px] [border-radius:4px] [font-family:Space_Mono,_monospace] [font-size:0.74rem] [font-weight:700] [letter-spacing:0.12em] [text-transform:uppercase] [text-decoration:none] [cursor:pointer] [transition:all_0.25s_cubic-bezier(0.16,_1,_0.3,_1)] [box-sizing:border-box] max-[767px]:[padding:10px_12px] max-[767px]:[font-size:0.7rem] max-[480px]:[width:100%] max-[480px]:[box-sizing:border-box] max-[480px]:[justify-content:center] [.cyber-project-btn&]:[flex:1] [.cyber-project-btn&]:[background:rgba(255,_255,_255,_0.03)] [.cyber-project-btn&]:[border:1px_solid_rgba(255,_255,_255,_0.1)] [.cyber-project-btn&]:[color:#64748b] [.cyber-project-btn&]:[cursor:default]">
                      <span className="cs-pulse [width:6px] [height:6px] [border-radius:50%] [background:#e5a947] [box-shadow:0_0_6px_#e5a947]" />
                      <span className="btn-text">COMING SOON</span>
                    </div>
                  )}

                  {project.github ? (
                    <button
                      type="button"
                      className="cyber-project-btn code-btn [display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [padding:10px_16px] [border-radius:4px] [font-family:Space_Mono,_monospace] [font-size:0.74rem] [font-weight:700] [letter-spacing:0.12em] [text-transform:uppercase] [text-decoration:none] [cursor:pointer] [transition:all_0.25s_cubic-bezier(0.16,_1,_0.3,_1)] [box-sizing:border-box] max-[767px]:[padding:10px_12px] max-[767px]:[font-size:0.7rem] max-[480px]:[width:100%] max-[480px]:[box-sizing:border-box] max-[480px]:[justify-content:center] [.cyber-project-btn&]:[background:rgba(255,_255,_255,_0.04)] [.cyber-project-btn&]:[border:1px_solid_rgba(255,_255,_255,_0.14)] [.cyber-project-btn&]:[color:#cbd5e1] [.cyber-project-btn&:hover]:[border-color:#e5a947] [.cyber-project-btn&:hover]:[color:#ffffff] [.cyber-project-btn&:hover]:[background:rgba(229,_169,_71,_0.12)] [.cyber-project-btn&:hover]:[transform:translateY(-2px)] [.cyber-project-btn&:hover]:[box-shadow:0_0_14px_rgba(229,_169,_71,_0.3)] [[data-theme='light']_.cyber-project-btn&]:[background:rgba(0,_0,_0,_0.03)] [[data-theme='light']_.cyber-project-btn&]:[border-color:rgba(0,_0,_0,_0.12)] [[data-theme='light']_.cyber-project-btn&]:[color:#0f172a]"
                      onClick={() => openCodeModal(project)}
                      title="View Source Code"
                    >
                      <span className="code-tag [.cyber-project-btn.code-btn_&]:[color:#e5a947] [.cyber-project-btn.code-btn_&]:[font-weight:800]">&lt;/&gt;</span>
                      <span className="btn-text">CODE</span>
                    </button>
                  ) : (
                    <div className="cyber-project-btn private-btn [display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [padding:10px_16px] [border-radius:4px] [font-family:Space_Mono,_monospace] [font-size:0.74rem] [font-weight:700] [letter-spacing:0.12em] [text-transform:uppercase] [text-decoration:none] [cursor:pointer] [transition:all_0.25s_cubic-bezier(0.16,_1,_0.3,_1)] [box-sizing:border-box] max-[767px]:[padding:10px_12px] max-[767px]:[font-size:0.7rem] max-[480px]:[width:100%] max-[480px]:[box-sizing:border-box] max-[480px]:[justify-content:center] [.cyber-project-btn&]:[background:rgba(255,_255,_255,_0.02)] [.cyber-project-btn&]:[border:1px_solid_rgba(255,_255,_255,_0.06)] [.cyber-project-btn&]:[color:#475569] [.cyber-project-btn&]:[cursor:default]" title="Internal Academic Project">
                      <span className="btn-text">PRIVATE</span>
                    </div>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
          {currentProjects.length === 0 && (
            <p className="projects-empty-state [grid-column:1_/_-1] [margin:0] [padding:42px_20px] [color:#94a3b8] [border:1px_dashed_rgba(255,_255,_255,_0.14)] [font-family:Space_Mono,_monospace] [font-size:0.8rem] [letter-spacing:0.08em] [text-align:center] [[data-theme='light']_&]:[color:#475569] [[data-theme='light']_&]:[border-color:rgba(15,_23,_42,_0.18)]">
              NO PROJECTS MATCH THAT SEARCH. TRY ANOTHER KEYWORD.
            </p>
          )}
        </div>

        {/* Cyber Pagination */}
        {totalPages > 1 && (
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="projects-pagination [display:flex] [align-items:center] [justify-content:center] [gap:14px] [margin-top:20px] [margin-bottom:45px]">
              <button
                className={`pagination-cyber-btn [display:inline-flex] [align-items:center] [gap:6px] [padding:8px_16px] [background:rgba(12,_15,_22,_0.65)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:4px] [color:#94a3b8] [font-family:Space_Mono,_monospace] [font-size:0.78rem] [font-weight:700] [letter-spacing:0.08em] [cursor:pointer] [transition:all_0.25s_ease] [&:hover:not(.disabled)]:[border-color:#e5a947] [&:hover:not(.disabled)]:[color:#ffffff] [&:hover:not(.disabled)]:[background:rgba(229,_169,_71,_0.1)] [[data-theme='light']_&]:[background:rgba(255,_255,_255,_0.9)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.08)] [[data-theme='light']_&]:[color:#475569] max-[480px]:[padding:6px_10px] max-[480px]:[font-size:0.68rem] ${currentPage === 1 ? 'disabled [.pagination-cyber-btn&]:[opacity:0.35] [.pagination-cyber-btn&]:[cursor:not-allowed]' : ''}`}
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <span className="btn-bracket [.pagination-cyber-btn_&]:[color:rgba(255,_255,_255,_0.3)]">[</span>
                <span>&lt; PREV</span>
                <span className="btn-bracket [.pagination-cyber-btn_&]:[color:rgba(255,_255,_255,_0.3)]">]</span>
              </button>

              <div className="pagination-numbers [display:flex] [gap:8px]">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`pagination-number-btn ${currentPage === page ? 'active [.projects-filter-btn&]:[color:#ffffff] [.projects-filter-btn&]:[background:rgba(229,_169,_71,_0.1)] [.projects-filter-btn&]:[border-color:rgba(229,_169,_71,_0.65)] [[data-theme=\'light\']_.projects-filter-btn&]:[color:#0f172a]' : ''}`}
                    onClick={() => setCurrentPage(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                className={`pagination-cyber-btn [display:inline-flex] [align-items:center] [gap:6px] [padding:8px_16px] [background:rgba(12,_15,_22,_0.65)] [border:1px_solid_rgba(255,_255,_255,_0.1)] [border-radius:4px] [color:#94a3b8] [font-family:Space_Mono,_monospace] [font-size:0.78rem] [font-weight:700] [letter-spacing:0.08em] [cursor:pointer] [transition:all_0.25s_ease] [&:hover:not(.disabled)]:[border-color:#e5a947] [&:hover:not(.disabled)]:[color:#ffffff] [&:hover:not(.disabled)]:[background:rgba(229,_169,_71,_0.1)] [[data-theme='light']_&]:[background:rgba(255,_255,_255,_0.9)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.08)] [[data-theme='light']_&]:[color:#475569] max-[480px]:[padding:6px_10px] max-[480px]:[font-size:0.68rem] ${currentPage === totalPages ? 'disabled [.pagination-cyber-btn&]:[opacity:0.35] [.pagination-cyber-btn&]:[cursor:not-allowed]' : ''}`}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <span className="btn-bracket [.pagination-cyber-btn_&]:[color:rgba(255,_255,_255,_0.3)]">[</span>
                <span>NEXT &gt;</span>
                <span className="btn-bracket [.pagination-cyber-btn_&]:[color:rgba(255,_255,_255,_0.3)]">]</span>
              </button>
            </div>
          </ScrollReveal>
        )}

      </div>

      {/* ===== High-Tech Repo Selection Modal with AnimatePresence ===== */}
      <AnimatePresence>
        {modalOpen && modalProject && (
          <motion.div
            className="cyber-modal-overlay [position:fixed] [inset:0] [z-index:9999] [display:flex] [align-items:center] [justify-content:center] [background:rgba(4,_5,_8,_0.82)] [backdrop-filter:blur(14px)] [-webkit-backdrop-filter:blur(14px)] [padding:20px] [animation:cyberModalFade_0.25s_ease-out]"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="cyber-modal-dialog [position:relative] [width:100%] [max-width:520px] [background:rgba(10,_13,_20,_0.95)] [border:1px_solid_rgba(229,_169,_71,_0.35)] [border-radius:4px] [padding:32px_28px_28px] [box-shadow:0_25px_70px_rgba(0,_0,_0,_0.85),_0_0_35px_rgba(229,_169,_71,_0.18)] [animation:cyberModalSlide_0.3s_cubic-bezier(0.16,_1,_0.3,_1)] max-[767px]:[padding:24px_18px_20px] [[data-theme='light']_&]:[background:#ffffff] [[data-theme='light']_&]:[border-color:rgba(229,_169,_71,_0.4)] [[data-theme='light']_&]:[box-shadow:0_25px_70px_rgba(0,_0,_0,_0.15)]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Modal HUD Corner Brackets */}
              <div className="corner-bracket corner-top-left [[data-theme='light']_.cyber-project-card_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.cyber-modal-dialog_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
              <div className="corner-bracket corner-top-right [[data-theme='light']_.cyber-project-card_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.cyber-modal-dialog_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
              <div className="corner-bracket corner-bottom-left [[data-theme='light']_.cyber-project-card_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.cyber-modal-dialog_&]:[border-color:rgba(15,_23,_42,_0.25)]" />
              <div className="corner-bracket corner-bottom-right [[data-theme='light']_.cyber-project-card_&]:[border-color:rgba(15,_23,_42,_0.25)] [[data-theme='light']_.cyber-modal-dialog_&]:[border-color:rgba(15,_23,_42,_0.25)]" />

              {/* Close Button */}
              <button className="cyber-modal-close [position:absolute] [top:14px] [right:14px] [width:32px] [height:32px] [background:rgba(255,_255,_255,_0.05)] [border:1px_solid_rgba(255,_255,_255,_0.12)] [border-radius:4px] [color:#94a3b8] [font-size:0.9rem] [cursor:pointer] [display:flex] [align-items:center] [justify-content:center] [transition:all_0.2s_ease] [&:hover]:[background:#e5a947] [&:hover]:[border-color:#e5a947] [&:hover]:[color:#ffffff] [&:hover]:[transform:rotate(90deg)]" onClick={closeModal} aria-label="Close modal">
                ✕
              </button>

              {/* Modal Header */}
              <div className="cyber-modal-header [margin-bottom:24px]">
                <span className="modal-header-tag [font-family:Space_Mono,_monospace] [font-size:0.72rem] [font-weight:700] [letter-spacing:0.16em] [color:#e5a947] [display:block] [margin-bottom:6px]">// REPO_SOURCE_SELECTOR</span>
                <h3 className="cyber-modal-title [font-family:Montserrat,_Poppins,_sans-serif] [font-size:1.25rem] [font-weight:800] [color:#ffffff] [margin:0_0_6px] [line-height:1.35] [[data-theme='light']_&]:[color:#0f172a]">{modalProject.title}</h3>
                <p className="cyber-modal-subtitle [font-size:0.82rem] [color:#94a3b8] [margin:0] [[data-theme='light']_&]:[color:#64748b]">Choose repository module to explore on GitHub:</p>
              </div>

              {/* Repo Options */}
              <div className="cyber-modal-options [display:flex] [flex-direction:column] [gap:12px]">
                {modalProject.github.frontend && (
                  <a
                    href={modalProject.github.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-repo-option [display:flex] [align-items:center] [gap:16px] [padding:16px] [background:rgba(14,_18,_26,_0.75)] [border:1px_solid_rgba(255,_255,_255,_0.08)] [border-radius:4px] [text-decoration:none] [cursor:pointer] [transition:all_0.25s_ease] [&:hover]:[background:rgba(22,_28,_40,_0.95)] [&:hover]:[border-color:#e5a947] [&:hover]:[transform:translateX(4px)] [&:hover]:[box-shadow:0_0_16px_rgba(229,_169,_71,_0.2)] [[data-theme='light']_&]:[background:rgba(0,_0,_0,_0.02)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.08)]"
                  >
                    <div className="repo-badge frontend-badge [padding:6px_10px] [border-radius:3px] [font-family:Space_Mono,_monospace] [font-size:0.7rem] [font-weight:700] [letter-spacing:0.1em] [flex-shrink:0] [background:rgba(97,_218,_251,_0.15)] [border:1px_solid_rgba(97,_218,_251,_0.35)] [color:#61dafb]">
                      <span>FRONTEND</span>
                    </div>
                    <div className="repo-info-col [display:flex] [flex-direction:column] [flex:1] [min-width:0]">
                      <span className="repo-role-label [font-size:0.88rem] [font-weight:700] [color:#ffffff] [margin-bottom:2px] [[data-theme='light']_&]:[color:#0f172a]">Client Interface Repository</span>
                      <span className="repo-slug-text [font-family:Space_Mono,_monospace] [font-size:0.74rem] [color:#94a3b8] [white-space:nowrap] [overflow:hidden] [text-overflow:ellipsis] [[data-theme='light']_&]:[color:#64748b]">
                        {modalProject.github.frontend.replace('https://github.com/', '')}
                      </span>
                    </div>
                    <span className="repo-arrow-action [color:#e5a947] [font-weight:800] [font-size:1.1rem] [transition:transform_0.2s_ease] [.cyber-repo-option:hover_&]:[transform:translateX(4px)]">&gt;</span>
                  </a>
                )}

                {modalProject.github.backend && (
                  <a
                    href={modalProject.github.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-repo-option [display:flex] [align-items:center] [gap:16px] [padding:16px] [background:rgba(14,_18,_26,_0.75)] [border:1px_solid_rgba(255,_255,_255,_0.08)] [border-radius:4px] [text-decoration:none] [cursor:pointer] [transition:all_0.25s_ease] [&:hover]:[background:rgba(22,_28,_40,_0.95)] [&:hover]:[border-color:#e5a947] [&:hover]:[transform:translateX(4px)] [&:hover]:[box-shadow:0_0_16px_rgba(229,_169,_71,_0.2)] [[data-theme='light']_&]:[background:rgba(0,_0,_0,_0.02)] [[data-theme='light']_&]:[border-color:rgba(0,_0,_0,_0.08)]"
                  >
                    <div className="repo-badge backend-badge [padding:6px_10px] [border-radius:3px] [font-family:Space_Mono,_monospace] [font-size:0.7rem] [font-weight:700] [letter-spacing:0.1em] [flex-shrink:0] [background:rgba(229,_169,_71,_0.15)] [border:1px_solid_rgba(229,_169,_71,_0.35)] [color:#f8ce72]">
                      <span>BACKEND</span>
                    </div>
                    <div className="repo-info-col [display:flex] [flex-direction:column] [flex:1] [min-width:0]">
                      <span className="repo-role-label [font-size:0.88rem] [font-weight:700] [color:#ffffff] [margin-bottom:2px] [[data-theme='light']_&]:[color:#0f172a]">Server & API Repository</span>
                      <span className="repo-slug-text [font-family:Space_Mono,_monospace] [font-size:0.74rem] [color:#94a3b8] [white-space:nowrap] [overflow:hidden] [text-overflow:ellipsis] [[data-theme='light']_&]:[color:#64748b]">
                        {modalProject.github.backend.replace('https://github.com/', '')}
                      </span>
                    </div>
                    <span className="repo-arrow-action [color:#e5a947] [font-weight:800] [font-size:1.1rem] [transition:transform_0.2s_ease] [.cyber-repo-option:hover_&]:[transform:translateX(4px)]">&gt;</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
