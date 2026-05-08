import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      school: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      year: '2018 - 2022',
      grade: '3.8/4.0 GPA',
      details: 'Specialized in Web Development and Software Engineering. Completed honors program with distinction.',
      highlights: ['Web Development', 'Data Structures', 'Software Engineering', 'Database Design']
    },
    {
      id: 2,
      school: 'Advanced Web Development Bootcamp',
      degree: 'Full Stack Developer Certification',
      year: '2022 - 2023',
      grade: 'Completed',
      details: 'Intensive 12-week bootcamp focusing on modern web technologies and best practices in software development.',
      highlights: ['React.js', 'Node.js', 'MongoDB', 'Full Stack Development']
    },
    {
      id: 3,
      school: 'Online Learning Platform',
      degree: 'Specialization in Advanced React Patterns',
      year: '2023 - Present',
      grade: 'In Progress',
      details: 'Advanced coursework covering cutting-edge React patterns, performance optimization, and architectural best practices.',
      highlights: ['React Hooks', 'State Management', 'Performance', 'Testing']
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solution Architect', issuer: 'Amazon AWS', date: '2023' },
    { name: 'React Developer Certificate', issuer: 'freeCodeCamp', date: '2023' },
    { name: 'Google Cloud Associate Cloud Engineer', issuer: 'Google Cloud', date: '2022' }
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        {/* Section Header */}
        <div className="education-header">
          <h2>Education & Certifications</h2>
          <span className="header-underline"></span>
          <p className="section-subtitle">My academic journey and professional certifications</p>
        </div>

        <div className="education-content">
          {/* Education Timeline */}
          <div className="education-timeline">
            <h3 className="timeline-title">Educational Background</h3>
            
            <div className="timeline">
              {educationData.map((edu, index) => (
                <div key={edu.id} className="timeline-item">
                  {/* Timeline Dot & Line */}
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {index !== educationData.length - 1 && <div className="timeline-line"></div>}
                  </div>

                  {/* Timeline Content */}
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h4 className="edu-school">{edu.school}</h4>
                        <p className="edu-degree">{edu.degree}</p>
                      </div>
                      <span className="edu-year">{edu.year}</span>
                    </div>

                    <p className="edu-grade">{edu.grade}</p>
                    <p className="edu-details">{edu.details}</p>

                    {/* Highlights Tags */}
                    <div className="edu-highlights">
                      {edu.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-badge">{highlight}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="certifications-section">
            <h3 className="cert-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon">🏆</div>
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <button className="cert-button">View Credential</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
