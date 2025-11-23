import React, { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const bioParagraph1 = `I'm **Mohd Ashif**, a passionate Full Stack MERN Developer who loves crafting clean, efficient, and scalable web applications. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I aim to turn ideas into functional, user-friendly digital products.`;

  const bioParagraph2 = `I enjoy solving problems and continuously learning new technologies to stay ahead in the ever-evolving tech world. My goal is to create web experiences that are not only visually appealing but also highly performant and accessible.`;

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

        <div className="row align-items-center g-4">
          {/* Portrait Photo - Left Side */}
          <div className="col-lg-4 col-md-5" data-aos="fade-right">
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                padding: '4px',
                background: 'linear-gradient(135deg, #00D9FF 0%, #B026FF 100%)',
                boxShadow:
                  '0 0 30px rgba(0, 217, 255, 0.5), 0 0 60px rgba(176, 38, 255, 0.3)',
                marginRight: '-20px',
                zIndex: 2,
                transform: 'translateX(10px)',
                height: '300px',
                width: '300px',
              }}
            >
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'rgba(10, 10, 26, 0.9)',
                }}
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Mohd Ashif"
                  className="img-fluid "
                  style={{
                    display: 'block',
                    objectFit: 'cover',
                    height: '290px',
                    width: '300px',
                  }}
                  onError={(e) => {
                    e.target.src = `https://github.com/Mohd-Ashif0770.png`;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Main Content Card - Right Side */}
          <div className="col-lg-8 col-md-7" data-aos="fade-left">
            <div
              style={{
                background: 'rgba(10, 10, 26, 0.95)',
                borderRadius: '24px',
                padding: '40px',
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
                  fontSize: '1.1rem',
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
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  marginTop: '1.2rem',
                  marginBottom: '30px',
                }}
              >
                {bioParagraph2}
              </div>

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
    </section>
  );
};

export default About;
