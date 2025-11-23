import React, { useState, useEffect } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bioParagraph1 = `I'm Mohd Ashif, a Full Stack MERN Developer who enjoys transforming ideas into fast, intuitive, and scalable web applications. I work with MongoDB, Express.js, React, and Node.js to build products that are clean in design, efficient in performance, and smooth in user experience.`;

  const bioParagraph2 = `I focus on writing maintainable code, implementing secure backends, and crafting responsive UIs that work seamlessly across devices. Through hands-on projects and real industry internship experience, I’ve built features like authentication flows, REST APIs, chat interfaces, and dynamic UI components.`;

  const bioParagraph3 = `I love exploring new technologies, improving existing solutions, and solving real-world problems. My goal is simple: build modern web experiences that look great, perform well, and deliver meaningful value to users.`;

  return (
    <section
      id="about"
      className="pt-5 unified-bg section-spacing"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '10rem',
        // paddingBottom: '0rem !important',
      }}
    >
      {/* Subtle diagonal lines pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
          pointerEvents: 'none',
        }}
      ></div>

      <div className="container position-relative">
        <h2
          className="text-center mb-5 fw-bold"
          data-aos="fade-up"
          style={{
            fontSize: '3rem',
            color: 'white',
            fontWeight: 800,
            marginBottom: '2.5rem',
          }}
        >
          <span className="text-white">About </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #B026FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Me
          </span>
        </h2>

        <div className="row justify-content-center">
          {/* Main Content Card - Centered */}
          <div className="col-12" data-aos="fade-up">
            <div
              className="mx-auto"
              style={{
                width: '100%',
                maxWidth: '750px',
                background: 'rgba(10, 10, 26, 0.95)',
                borderRadius: '24px',
                padding: isMobile ? '30px 20px' : '40px',
                border: '2px solid transparent',
                backgroundImage:
                  'linear-gradient(rgba(10, 10, 26, 0.95), rgba(10, 10, 26, 0.95)), linear-gradient(135deg, #00D9FF 0%, #B026FF 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow:
                  '0 0 40px rgba(0, 217, 255, 0.3), 0 0 80px rgba(176, 38, 255, 0.2), 0 20px 60px rgba(0, 0, 0, 0.5)',
                position: 'relative',
              }}
            >
              {/* First Paragraph */}
              <div
                style={{
                  color: 'white',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.8',
                  marginBottom: '1.2rem',
                }}
              >
                {bioParagraph1.split('**').map((part, index) => {
                  if (index % 2 === 1) {
                    // This is the bold/highlighted part (Mohd Ashif)
                    return (
                      <span
                        key={index}
                        style={{
                          color: '#00D9FF',
                          fontWeight: 700,
                        }}
                      >
                        {part}
                      </span>
                    );
                  }
                  return <span key={index}>{part}</span>;
                })}
              </div>

              {/* Second Paragraph */}
              <div
                style={{
                  color: 'white',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.8',
                  marginTop: '1.2rem',
                  marginBottom: '1.2rem',
                }}
              >
                {bioParagraph2}
              </div>

              {/* Third Paragraph */}
              <div
                style={{
                  color: 'white',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.8',
                  marginTop: '1.2rem',
                  marginBottom: '30px',
                }}
              >
                {bioParagraph3}
              </div>

              <div style={{ textAlign: 'center', width: '100%' }}>
                <a
                  href="/assets/Resume.pdf"
                  download="Mohd-Ashif-Resume.pdf"
                  className="btn border-0 d-inline-flex align-items-center gap-2"
                  style={{
                    background:
                      'linear-gradient(135deg, #00D9FF 0%, #B026FF 100%)',
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: '12px',
                    padding: '14px 28px',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    boxShadow: '0 8px 20px rgba(0, 217, 255, 0.4)',
                    transition: 'all 0.3s ease',
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
                  <i className="fas fa-download"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
