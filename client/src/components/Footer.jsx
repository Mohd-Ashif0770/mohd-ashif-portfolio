import React from 'react';

const Footer = () => {
  return (
    <footer
      className="py-4"
      style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0" style={{ color: '#B8C5D6', fontSize: '0.95rem' }}>
              © {new Date().getFullYear()} Mohd Ashif | All Rights Reserved
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a
              href="https://github.com/Mohd-Ashif0770"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              aria-label="GitHub"
              style={{
                color: '#B8C5D6',
                fontSize: '1.3rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#00D9FF';
                e.target.style.transform = 'scale(1.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#B8C5D6';
                e.target.style.transform = 'scale(1)';
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
                color: '#B8C5D6',
                fontSize: '1.3rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#0099FF';
                e.target.style.transform = 'scale(1.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#B8C5D6';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
