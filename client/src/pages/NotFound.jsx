import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div
        className="unified-bg min-vh-100 d-flex flex-column align-items-center justify-content-center text-center px-3"
        style={{
          paddingTop: '120px',
          paddingBottom: '80px',
        }}
      >
        <div
          className="p-5 rounded-4 shadow-lg position-relative"
          style={{
            maxWidth: '600px',
            width: '100%',
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          }}
        >
          <h1
            className="fw-extrabold mb-2"
            style={{
              fontSize: 'clamp(5rem, 12vw, 8rem)',
              fontWeight: 900,
              lineHeight: 1,
              background:
                'linear-gradient(135deg, #00D9FF 0%, #B026FF 50%, #FF6BFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-2px',
            }}
          >
            404
          </h1>

          <h2
            className="fw-bold text-white mb-3"
            style={{ fontSize: '1.75rem' }}
          >
            Page Not Found
          </h2>

          <p
            className="mb-4"
            style={{ color: '#B8C5D6', fontSize: '1.05rem', lineHeight: '1.6' }}
          >
            Oops! The page you are looking for doesn't exist, has been removed,
            or the URL might be mistyped.
          </p>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link
              to="/"
              className="btn border-0 d-inline-flex align-items-center gap-2"
              style={{
                background:
                  'linear-gradient(135deg, #00D9FF 0%, #B026FF 100%)',
                color: '#ffffff',
                fontWeight: 600,
                borderRadius: '12px',
                padding: '0.8rem 1.6rem',
                fontSize: '1rem',
                boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 8px 25px rgba(0, 217, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 4px 20px rgba(0, 217, 255, 0.3)';
              }}
            >
              <i className="fas fa-home"></i>
              Back to Home
            </Link>

            <Link
              to="/#projects"
              className="btn d-inline-flex align-items-center gap-2"
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(255, 255, 255, 0.2)',
                color: '#C8D1E0',
                fontWeight: 600,
                borderRadius: '12px',
                padding: '0.8rem 1.6rem',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.color = '#C8D1E0';
              }}
            >
              <i className="fas fa-code"></i>
              View Projects
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
