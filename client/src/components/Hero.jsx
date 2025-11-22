import React from 'react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center min-vh-100"
      style={{
        background:
          'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(0, 153, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(90, 0, 255, 0.2) 0%, transparent 50%)',
        }}
      ></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h1
              className="display-4 fw-bold mb-4"
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                lineHeight: '1.2',
              }}
            >
              <span className="text-white">Hi, I'm </span>
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #00D9FF 0%, #0099FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 800,
                }}
              >
                Mohd
              </span>{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #B026FF 0%, #FF6BFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 800,
                }}
              >
                Ashif
              </span>
              <span style={{ marginLeft: '10px' }}>👋</span>
            </h1>
            <p
              className="lead mb-3"
              style={{ color: '#B8C5D6', fontSize: '1.1rem', fontWeight: 400 }}
            >
              Full Stack MERN Developer
            </p>
            <p
              className="mb-4"
              style={{
                color: '#B8C5D6',
                fontSize: '1rem',
                opacity: 0.9,
                lineHeight: '1.6',
              }}
            >
              I build scalable web applications with clean, modern design.
            </p>
            <div className="d-flex gap-3 mb-4 flex-wrap align-items-center">
              <button
                className="btn btn-lg border-0"
                onClick={scrollToProjects}
                style={{
                  background:
                    'linear-gradient(135deg, #00D9FF 0%, #00FF99 100%)',
                  color: '#1a1a2e',
                  fontWeight: 700,
                  borderRadius: '10px',
                  padding: '12px 30px',
                  boxShadow: '0 8px 20px rgba(0, 217, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow =
                    '0 12px 30px rgba(0, 217, 255, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow =
                    '0 8px 20px rgba(0, 217, 255, 0.4)';
                }}
              >
                View My Work
                <i className="fas fa-arrow-down"></i>
              </button>
            </div>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/Mohd-Ashif0770"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '2px solid white',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = '#00D9FF';
                  e.target.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-ashif/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '2px solid white',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = '#00D9FF';
                  e.target.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 text-center mt-5 mt-lg-0"
            data-aos="fade-left"
          >
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  background:
                    'linear-gradient(135deg, rgba(0, 217, 255, 0.4), rgba(0, 153, 255, 0.4))',
                  borderRadius: '50%',
                  filter: 'blur(15px)',
                  zIndex: 0,
                  animation: 'pulse 3s ease-in-out infinite',
                }}
              ></div>
              <img
                src="/assets/profile.jpg"
                alt="Mohd Ashif"
                className="img-fluid rounded-circle shadow-lg position-relative"
                style={{
                  width: '400px',
                  height: '400px',
                  maxWidth: '100%',
                  objectFit: 'cover',
                  border: '4px solid rgba(0, 217, 255, 0.8)',
                  zIndex: 1,
                  boxShadow:
                    '0 0 30px rgba(0, 217, 255, 0.5), 0 20px 60px rgba(0, 0, 0, 0.4)',
                }}
                onError={(e) => {
                  e.target.src = `https://github.com/Mohd-Ashif0770.png`;
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
