import '../styles/Education.css';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: 'Pursuing Associate Degree at',
      school: 'Passerelles Numériques Cambodia (PNC)',
      subtitle: 'in Web Programming',
      year: '2025 - Present',
      icon: '🎓',
      color: '#14b8a6'
    },
    {
      id: 2,
      title: 'Graduated Bacll certificate',
      school: 'Phnom Kravanh High School',
      subtitle: 'Diploma with Grade C achievement.',
      year: '2023 - 2024',
      details: '',
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
                      <div className="edu-card-main">
                        <h3 className="edu-degree-name" style={{ color: edu.color }}>{edu.title}</h3>
                        <p className="edu-school-name">{edu.school}</p>
                        {edu.subtitle && <p className="edu-subtitle">{edu.subtitle}</p>}
                        {edu.details && <p className="edu-description">{edu.details}</p>}
                      </div>

                      <div className="edu-year-row">
                        <span className="edu-year-text">{edu.year}</span>
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
