import '../styles/Education.css';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const educationData = [
    {
      id: 1,
      school: 'Passerelles Numériques Cambodia',
      degree: 'Associate Degree in Web Programming',
      year: '2025 - Present',
      // grade: '3.8/4.0 GPA',
      details: 'Specialized in Web Development and Software Engineering. Completed honors program with distinction.',
      highlights: ['Web Development', 'Data Structures', 'Software Engineering', 'Database Design'],
      icon: '🎓',
      color: '#14b8a6'
    },
    {
      id: 2,
      school: 'Graduate',
      degree: 'Full Stack Developer Certification',
      year: '2022 - 2023',
      grade: 'Completed',
      details: 'Intensive 12-week bootcamp focusing on modern web technologies and best practices in software development.',
      highlights: ['React.js', 'Node.js', 'MongoDB', 'Full Stack Development'],
      icon: '📘',
      color: '#5eead4'
    },
    {
      id: 3,
      school: 'Online Learning Platform',
      degree: 'Specialization in Advanced React Patterns',
      year: '2023 - Present',
      grade: 'In Progress',
      details: 'Advanced coursework covering cutting-edge React patterns, performance optimization, and architectural best practices.',
      highlights: ['React Hooks', 'State Management', 'Performance', 'Testing'],
      icon: '⚛️',
      color: '#2dd4bf'
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        {/* Section Header */}
        <div className="education-header">
          {/* <span className="header-badge">Academic Journey</span> */}
          <h2>
            <span className="header-icon">🎓</span> Education
          </h2>
          {/* <p className="header-subtitle">My path of learning and growth in software development</p> */}
        </div>

        <div className="education-content">
          {/* Education Timeline */}
          <div className="timeline">
            <div className="timeline-center-line"></div>
            {educationData.map((edu, index) => (
              <ScrollReveal
                key={edu.id}
                animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                delay={index * 150}
                threshold={0.2}
              >
                <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  {/* Timeline Content */}
                  <div className="timeline-content">
                    <div className="timeline-marker-dot"></div>
                    
                    {/* Card Top Accent */}
                    <div className="card-accent" style={{ background: `linear-gradient(135deg, ${edu.color}, #5eead4)` }}></div>

                    {/* Year Badge */}
                    <div className="edu-year-badge" style={{ background: `linear-gradient(135deg, ${edu.color}22, #5eead422)`, borderColor: `${edu.color}44`, color: edu.color }}>
                      <span className="year-icon">📅</span>
                      {edu.year}
                    </div>

                    {/* School & Degree */}
                    <div className="edu-main">
                      <div className="edu-icon-wrapper" style={{ background: `linear-gradient(135deg, ${edu.color}22, #5eead422)`, borderColor: `${edu.color}33` }}>
                        <span className="edu-icon-text">{edu.icon}</span>
                      </div>
                      <div className="edu-info">
                        <h4 className="edu-school">{edu.school}</h4>
                        <p className="edu-degree" style={{ color: edu.color }}>{edu.degree}</p>
                      </div>
                    </div>

                    {/* Grade */}
                    <div className="edu-grade-row">
                      <span className="grade-dot" style={{ background: edu.color }}></span>
                      <span className="edu-grade">{edu.grade}</span>
                    </div>

                    {/* Details */}
                    <p className="edu-details">{edu.details}</p>

                    {/* Highlights Tags */}
                    <div className="edu-highlights">
                      {edu.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-badge">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Glow */}
                    <div className="card-bottom-glow" style={{ background: `radial-gradient(ellipse at center, ${edu.color}15, transparent 70%)` }}></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
