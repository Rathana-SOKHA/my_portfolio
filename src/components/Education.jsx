import '../styles/Education.css';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const educationData = [
    {
      id: 1,
      school: 'Passerelles Numériques Cambodia',
      degree: 'Associate Degree in Web Programming',
      year: '2025 - Present',
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
      details: 'Intensive 12-week bootcamp focusing on modern web technologies and best practices in software development.',
      highlights: ['React.js', 'Node.js', 'MongoDB', 'Full Stack Development'],
      icon: '📘',
      color: '#5eead4'
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        {/* Section Header */}
        <div className="education-header">
          <h2>Education</h2>
        </div>

        <div className="education-content">
          {/* Education Timeline */}
          <div className="timeline">
            <div className="timeline-line"></div>
            {educationData.map((edu, index) => (
              <ScrollReveal
                key={edu.id}
                animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                delay={index * 150}
                threshold={0.2}
              >
                <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  {/* Timeline Marker Dot */}
                  <div
                    className="timeline-marker"
                    style={{
                      background: `linear-gradient(135deg, ${edu.color}, #5eead4)`,
                      boxShadow: `0 0 0 4px rgba(20, 184, 166, 0.15), 0 0 20px ${edu.color}44`
                    }}
                  ></div>

                  {/* Content Card */}
                  <div className="edu-card">
                    {/* Glow overlay */}
                    <div className="edu-card-glow" style={{ background: `radial-gradient(ellipse at 50% -20%, ${edu.color}18, transparent 60%)` }}></div>

                    {/* Card content */}
                    <div className="edu-card-inner">
                      {/* Top section: icon + school + year */}
                      <div className="edu-card-top">
                        <div
                          className="edu-icon-circle"
                          style={{
                            background: `linear-gradient(135deg, ${edu.color}20, #5eead420)`,
                            borderColor: `${edu.color}30`
                          }}
                        >
                          <span className="edu-icon-symbol">{edu.icon}</span>
                        </div>
                        <div className="edu-card-heading">
                          <h3 className="edu-school-name">{edu.school}</h3>
                          <p className="edu-degree-name" style={{ color: edu.color }}>{edu.degree}</p>
                        </div>
                      </div>

                      {/* Year */}
                      <div className="edu-year-row">
                        <span className="edu-year-icon">📅</span>
                        <span className="edu-year-text">{edu.year}</span>
                      </div>

                      {/* Description */}
                      <p className="edu-description">{edu.details}</p>

                      {/* Tags */}
                      <div className="edu-tags">
                        {edu.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="edu-tag"
                            style={{
                              background: `${edu.color}12`,
                              borderColor: `${edu.color}25`,
                              color: edu.color
                            }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
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
