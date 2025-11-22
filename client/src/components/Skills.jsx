import React from 'react';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'Frontend',
      icon: 'fas fa-code',
      iconColor: '#00D9FF', // Teal
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
      iconColor: '#B026FF', // Purple
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      iconColor: '#0099FF', // Blue
      skills: ['MongoDB', 'Mongoose', 'MySQL'],
    },
    {
      title: 'Testing',
      icon: 'fas fa-vial',
      iconColor: '#00D9FF', // Teal
      skills: ['Manual Testing', 'API Testing (Postman)', 'Jest'],
    },
    {
      title: 'Tools & Platforms',
      icon: 'fas fa-tools',
      iconColor: '#B026FF', // Purple
      skills: [
        'Git',
        'GitHub',
        'GitHub Actions',
        'CI/CD',
        'GitHub Copilot',
        'Render',
        'Vercel',
      ], // This card spans 2 columns
    },
  ];

  return (
    <section
      id="skills"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold"
          data-aos="fade-up"
          style={{
            fontSize: '3rem',
            fontWeight: 800,
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
              className={category.isWide ? 'col-lg-8 col-md-12' : 'col-lg-4 col-md-6'}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card h-100 border-0"
                style={{
                  background: 'rgba(10, 10, 26, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '30px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 217, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                {/* Icon in rounded square */}
                <div className="mb-4">
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${category.iconColor}20, ${category.iconColor}40)`,
                      border: `1px solid ${category.iconColor}40`,
                    }}
                  >
                    <i
                      className={category.icon}
                      style={{
                        fontSize: '1.5rem',
                        color: category.iconColor,
                      }}
                    ></i>
                  </div>
                </div>

                {/* Title */}
                <h4
                  className="mb-4"
                  style={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                  }}
                >
                  {category.title}
                </h4>

                {/* Skills tags */}
                <div className="d-flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#E0E6F0',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.borderColor = category.iconColor;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
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
