import React from 'react';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      degree: "Bachelor's Degree in Computer Application (BCA)",
      institution: 'M.J.P. Rohilkhand University, U.P',
      duration: '2021 – 2024',
      icon: 'fas fa-graduation-cap',
      status: 'Completed',
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Course',
      institution: 'EasySkill Career Academy, Surat',
      duration: '2025 – Ongoing',
      icon: 'fas fa-book-open',
      status: 'Ongoing',
    },
    {
      id: 3,
      degree: 'MERN Stack Web Development – Delta Course',
      institution: 'Apna College',
      duration: 'Completed in 2025',
      icon: 'fas fa-laptop-code',
      status: 'Completed',
    },
  ];

  return (
    <section
      id="education"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold text-white"
          data-aos="fade-up"
          style={{
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            position: 'relative',
            display: 'inline-block',
            width: '100%',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block',
            }}
          >
            Education
          </span>
          <span
            style={{
              display: 'block',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
              margin: '10px auto 0',
              borderRadius: '2px',
            }}
          ></span>
        </h2>
        <div className="row g-4">
          {educationItems.map((item, index) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  background: 'rgba(30, 30, 60, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  padding: '30px',
                  border: '2px solid rgba(90, 0, 255, 0.5)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow:
                    '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(90, 0, 255, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow =
                    '0 20px 40px rgba(90, 0, 255, 0.4), 0 0 30px rgba(0, 153, 255, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(0, 153, 255, 0.8)';
                  const glow = e.currentTarget.querySelector('.card-glow');
                  if (glow) glow.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(90, 0, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(90, 0, 255, 0.5)';
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
                    borderRadius: '24px',
                    background:
                      'linear-gradient(135deg, rgba(90, 0, 255, 0.6), rgba(0, 153, 255, 0.6))',
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
                      background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
                      color: 'white',
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      boxShadow: '0 8px 20px rgba(90, 0, 255, 0.3)',
                    }}
                  >
                    <i className={`${item.icon} fa-2x`}></i>
                  </div>
                </div>

                {/* Degree/Title */}
                <h4
                  className="text-center mb-3"
                  style={{
                    color: '#E0E6F0',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    lineHeight: '1.4',
                  }}
                >
                  {item.degree}
                </h4>

                {/* Institution */}
                <p
                  className="text-center mb-3"
                  style={{
                    color: '#B8C5D6',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '15px',
                  }}
                >
                  <i
                    className="fas fa-university me-2"
                    style={{ color: '#0099FF' }}
                  ></i>
                  {item.institution}
                </p>

                {/* Duration and Status */}
                <div className="d-flex justify-content-between align-items-center">
                  <div
                    style={{
                      color: '#E0E6F0',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                  >
                    <i
                      className="fas fa-calendar-alt me-2"
                      style={{ color: '#0099FF' }}
                    ></i>
                    {item.duration}
                  </div>
                  <span
                    className="badge px-3 py-2"
                    style={{
                      background:
                        item.status === 'Completed'
                          ? 'linear-gradient(135deg, rgba(40, 167, 69, 0.2), rgba(40, 167, 69, 0.3))'
                          : 'linear-gradient(135deg, rgba(90, 0, 255, 0.2), rgba(0, 153, 255, 0.3))',
                      color:
                        item.status === 'Completed' ? '#28a745' : '#0099FF',
                      border: `1px solid ${
                        item.status === 'Completed'
                          ? 'rgba(40, 167, 69, 0.5)'
                          : 'rgba(0, 153, 255, 0.5)'
                      }`,
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
