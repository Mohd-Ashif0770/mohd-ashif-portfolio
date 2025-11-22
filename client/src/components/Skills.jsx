import React from 'react';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'Frontend',
      icon: 'fas fa-code',
      iconGradient: 'linear-gradient(135deg, #00D9FF 0%, #0099FF 100%)',
      iconColor: '#00D9FF',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
        'Tailwind CSS',
        'React.js',
        'Redux',
        'EJS',
      ],
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      iconGradient: 'linear-gradient(135deg, #B026FF 0%, #FF6BFF 100%)',
      iconColor: '#B026FF',
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      iconGradient: 'linear-gradient(135deg, #0099FF 0%, #14B8A6 100%)',
      iconColor: '#0099FF',
      skills: ['MongoDB', 'Mongoose', 'MySQL'],
    },
    {
      title: 'Testing',
      icon: 'fas fa-vial',
      iconGradient: 'linear-gradient(135deg, #FFD700 0%, #0099FF 100%)',
      iconColor: '#FFD700',
      skills: ['Manual Testing', 'API Testing (Postman)', 'Jest'],
    },
    {
      title: 'Tools & Platforms',
      icon: 'fas fa-tools',
      iconGradient: 'linear-gradient(135deg, #FF6B35 0%, #FF6BFF 100%)',
      iconColor: '#FF6B35',
      skills: [
        'Git',
        'GitHub',
        'GitHub Actions',
        'CI/CD',
        'GitHub Copilot',
        'Render',
        'Vercel',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-5 unified-bg section-spacing"
      style={{
        position: 'relative',
        paddingTop: '10rem',
        paddingBottom: '10rem',
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold"
          data-aos="fade-up"
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            marginBottom: '2.5rem',
          }}
        >
          <span className="text-white">Skills &</span>{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #B026FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Technologies
          </span>
        </h2>
        <div className="row g-4">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-4 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ marginBottom: '2rem' }}
            >
              <div
                className="card h-100 border-0"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  border: `1px solid ${category.iconColor}30`,
                  boxShadow: `0 4px 20px rgba(0, 0, 0, 0.4), 0 0 30px ${category.iconColor}15`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 8px 40px rgba(0, 0, 0, 0.5), 0 0 50px ${category.iconColor}30`;
                  e.currentTarget.style.borderColor = `${category.iconColor}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 20px rgba(0, 0, 0, 0.4), 0 0 30px ${category.iconColor}15`;
                  e.currentTarget.style.borderColor = `${category.iconColor}30`;
                }}
              >
                {/* Glow effect overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-2px',
                    borderRadius: '24px',
                    background: category.iconGradient,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: -1,
                    filter: 'blur(8px)',
                  }}
                  className="card-glow"
                ></div>

                {/* Icon with gradient background and glow */}
                <div className="mb-4 text-center">
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '70px',
                      height: '70px',
                      borderRadius: '20px',
                      background: category.iconGradient,
                      boxShadow: `0 8px 25px ${category.iconColor}40, 0 0 40px ${category.iconColor}20`,
                      marginBottom: '1rem',
                    }}
                  >
                    <i
                      className={category.icon}
                      style={{
                        fontSize: '2rem',
                        color: 'white',
                      }}
                    ></i>
                  </div>
                </div>

                {/* Title */}
                <h4
                  className="mb-4 text-center"
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '1.65rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {category.title}
                </h4>

                {/* Skills tags */}
                <div className="d-flex flex-wrap gap-2" style={{ gap: '10px' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: '#D4DFEE',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderRadius: '10px',
                        border: 'none',
                        padding: '6px 14px',
                        transition: 'all 0.2s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.color = '#FFFFFF';
                        e.target.style.borderColor = category.iconColor;
                        e.target.style.boxShadow = `0 0 15px ${category.iconColor}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.target.style.color = '#D4DFEE';
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
