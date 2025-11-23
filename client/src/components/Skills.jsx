import React from 'react';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'Frontend',
      icon: 'fas fa-code',
      iconGradient: 'linear-gradient(135deg, #00D9FF, #0099FF)',
      borderGradient:
        'linear-gradient(135deg, rgba(0, 217, 255, 0.6), rgba(0, 153, 255, 0.6))',
      borderColor: 'rgba(0, 217, 255, 0.5)',
      borderColorHover: 'rgba(0, 153, 255, 0.8)',
      shadowColor: 'rgba(0, 217, 255, 0.3)',
      shadowColorHover: 'rgba(0, 153, 255, 0.4)',
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
      iconGradient: 'linear-gradient(135deg, #B026FF, #FF6BFF)',
      borderGradient:
        'linear-gradient(135deg, rgba(176, 38, 255, 0.6), rgba(255, 107, 255, 0.6))',
      borderColor: 'rgba(176, 38, 255, 0.5)',
      borderColorHover: 'rgba(255, 107, 255, 0.8)',
      shadowColor: 'rgba(176, 38, 255, 0.3)',
      shadowColorHover: 'rgba(255, 107, 255, 0.4)',
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      iconGradient: 'linear-gradient(135deg, #0099FF, #14B8A6)',
      borderGradient:
        'linear-gradient(135deg, rgba(0, 153, 255, 0.6), rgba(20, 184, 166, 0.6))',
      borderColor: 'rgba(0, 153, 255, 0.5)',
      borderColorHover: 'rgba(20, 184, 166, 0.8)',
      shadowColor: 'rgba(0, 153, 255, 0.3)',
      shadowColorHover: 'rgba(20, 184, 166, 0.4)',
      skills: ['MongoDB', 'Mongoose', 'MySQL'],
    },
    {
      title: 'Testing',
      icon: 'fas fa-vial',
      iconGradient: 'linear-gradient(135deg, #A855F7, #0099FF)',
      borderGradient:
        'linear-gradient(135deg, rgba(168, 85, 247, 0.6), rgba(0, 153, 255, 0.6))',
      borderColor: 'rgba(168, 85, 247, 0.5)',
      borderColorHover: 'rgba(0, 153, 255, 0.8)',
      shadowColor: 'rgba(168, 85, 247, 0.3)',
      shadowColorHover: 'rgba(0, 153, 255, 0.4)',
      skills: ['Manual Testing', 'API Testing (Postman)', 'Jest'],
    },
    {
      title: 'Tools & Platforms',
      icon: 'fas fa-tools',
      iconGradient: 'linear-gradient(135deg, #FF6B35, #FF6BFF)',
      borderGradient:
        'linear-gradient(135deg, rgba(255, 107, 53, 0.6), rgba(255, 107, 255, 0.6))',
      borderColor: 'rgba(255, 107, 53, 0.5)',
      borderColorHover: 'rgba(255, 107, 255, 0.8)',
      shadowColor: 'rgba(255, 107, 53, 0.3)',
      shadowColorHover: 'rgba(255, 107, 255, 0.4)',
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
      className="pt-5 unified-bg section-spacing"
      style={{
        position: 'relative',
        paddingTop: '10rem',
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold text-white"
          data-aos="fade-up"
          style={{
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            position: 'relative',
            display: 'block',
            width: '100%',
            fontSize: 'clamp(2.4rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.5px',
            marginBottom: '2.5rem',
          }}
        >
          <span style={{ color: '#FFFFFF' }}>Skills &</span>{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #00D9FF, #B026FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            Technologies
          </span>
          <span
            style={{
              display: 'block',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(135deg, #00D9FF, #B026FF)',
              margin: '10px auto 0',
              borderRadius: '2px',
            }}
          ></span>
        </h2>
        <div className="row g-4">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ marginBottom: '2.5rem' }}
            >
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  background: 'rgba(30, 30, 60, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '26px',
                  padding: '30px',
                  border: `2px solid ${category.borderColor}`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${category.shadowColor}`;
                  e.currentTarget.style.borderColor = category.borderColorHover;
                  const glow = e.currentTarget.querySelector('.card-glow');
                  if (glow) glow.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1)`;
                  e.currentTarget.style.borderColor = category.borderColor;
                  const glow = e.currentTarget.querySelector('.card-glow');
                  if (glow) glow.style.opacity = '0';
                }}
              >
                {/* Neon border glow effect */}
                <div
                  className="card-glow"
                  style={{
                    position: 'absolute',
                    inset: '-2px',
                    borderRadius: '26px',
                    background: category.borderGradient,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: -1,
                    filter: 'blur(8px)',
                  }}
                ></div>

                {/* Icon with gradient background */}
                <div className="text-center mb-4">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px',
                      borderRadius: '50%',
                      background: category.iconGradient,
                      color: 'white',
                      width: '86px',
                      height: '86px',
                      margin: '0 auto',
                      boxShadow: `0 8px 20px ${category.shadowColor}`,
                      position: 'relative',
                    }}
                  >
                    <i className={`${category.icon} fa-2x`}></i>
                  </div>
                </div>

                {/* Title */}
                <h4
                  className="text-center mb-4"
                  style={{
                    color: '#E0E6F0',
                    fontWeight: 700,
                    fontSize: '1.65rem',
                    lineHeight: '1.4',
                    marginBottom: '20px',
                  }}
                >
                  {category.title}
                </h4>

                {/* Skills tags */}
                <div
                  className="d-flex flex-wrap justify-content-center"
                  style={{ gap: '10px' }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      style={{
                        background: 'rgba(255, 255, 255, 0.09)',
                        color: '#D8E3F0',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderRadius: '12px',
                        padding: '6px 18px',
                        transition: 'all 0.2s ease',
                        display: 'inline-block',
                        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.color = '#FFFFFF';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = `0 4px 12px ${category.shadowColorHover}, inset 0 1px 2px rgba(0, 0, 0, 0.1)`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.09)';
                        e.target.style.color = '#D8E3F0';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow =
                          'inset 0 1px 2px rgba(0, 0, 0, 0.1)';
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
