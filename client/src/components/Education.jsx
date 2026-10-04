import React from 'react';

const BORDER_COLOR = 'rgba(90, 0, 255, 0.5)';
const BORDER_COLOR_HOVER = 'rgba(0, 153, 255, 0.8)';
const SHADOW_COLOR = 'rgba(90, 0, 255, 0.3)';

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
      duration: 'Completed in 2025',
      icon: 'fas fa-book-open',
      status: 'Completed',
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
      className="pt-5 unified-bg section-spacing"
      style={{ position: 'relative', paddingTop: '10rem' }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold text-white"
          style={{
            width: '100%',
            fontSize: 'clamp(2.4rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.5px',
            marginBottom: '2.5rem',
          }}
        >
           <span className="text-white">Education&nbsp; &amp; &nbsp;</span>
          <span
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #B026FF 50%, #FF6BFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
             Certifications
          </span>
        </h2>

        <div className="row g-4">
          {educationItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  background: 'rgba(30, 30, 60, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  padding: '30px',
                  border: `2px solid ${BORDER_COLOR}`,
                  transition:
                    'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 16px 36px rgba(0, 0, 0, 0.4), 0 0 24px ${SHADOW_COLOR}`;
                  e.currentTarget.style.borderColor = BORDER_COLOR_HOVER;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.borderColor = BORDER_COLOR;
                }}
              >
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
                    <i className={`${item.icon} fa-2x`} />
                  </div>
                </div>

                <h4
                  className="text-center mb-3"
                  style={{
                    color: '#E0E6F0',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    lineHeight: 1.4,
                  }}
                >
                  {item.degree}
                </h4>

                <p
                  className="text-center mb-3"
                  style={{
                    color: '#B8C5D6',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    marginBottom: '15px',
                  }}
                >
                  <i
                    className="fas fa-university me-2"
                    style={{ color: '#0099FF' }}
                    aria-hidden="true"
                  />
                  {item.institution}
                </p>

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
                      aria-hidden="true"
                    />
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
