import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation clicks
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsNavOpen(false);

    // If we're on a different page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = '/';
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        isScrolled ? 'scrolled' : ''
      }`}
      style={{
        transition: 'all 0.3s ease',
        padding: isScrolled ? '10px 0' : '20px 0',
        background: isScrolled
          ? 'rgba(26, 26, 46, 0.95)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold me-3"
          to="/"
          onClick={() => {
            setIsNavOpen(false);
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          style={{
            background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '1.5rem',
          }}
        >
          Mohd Ashif
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation"
          style={{
            border: 'none',
            outline: 'none',
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  marginRight: '30px',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0099FF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  marginRight: '30px',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0099FF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills"
                onClick={(e) => handleNavClick(e, 'skills')}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  marginRight: '30px',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0099FF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#education"
                onClick={(e) => handleNavClick(e, 'education')}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  marginRight: '30px',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0099FF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                }}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  marginRight: '30px',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0099FF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0099FF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
