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

  // Close menu when clicking outside
  useEffect(() => {
    if (isNavOpen) {
      const handleClickOutside = (e) => {
        if (!e.target.closest('.navbar') && !e.target.closest('.mobile-menu-panel')) {
          setIsNavOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isNavOpen]);

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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
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
          zIndex: 1030,
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
              background: 'transparent',
              padding: '8px',
              zIndex: 1040,
            }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: isNavOpen
                  ? `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")`
                  : `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
                transition: 'all 0.35s ease',
                width: '30px',
                height: '30px',
              }}
            ></span>
          </button>
          {/* Desktop Menu */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto d-none d-lg-flex">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    className="nav-link"
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
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
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Slide-in Menu */}
      <div
        className={`mobile-menu-panel ${isNavOpen ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target.classList.contains('mobile-menu-panel')) {
            setIsNavOpen(false);
          }
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1035,
          pointerEvents: isNavOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
          opacity: isNavOpen ? 1 : 0,
        }}
      >
        {/* Backdrop Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
          }}
        ></div>

        {/* Slide-in Panel */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '320px',
            maxWidth: '85vw',
            background: 'rgba(30, 30, 60, 0.98)',
            backdropFilter: 'blur(18px)',
            boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(90, 0, 255, 0.2)',
            paddingTop: '2rem',
            paddingBottom: '3rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            transform: isNavOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.35s ease-out',
            overflowY: 'auto',
            borderLeft: '2px solid rgba(0, 153, 255, 0.3)',
          }}
        >
          {/* Close Button */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '2rem',
            }}
          >
            <button
              onClick={() => setIsNavOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.color = '#0099FF';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Menu Items */}
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {navItems.map((item, index) => (
              <li
                key={item.id}
                style={{
                  marginBottom: '1.5rem',
                  opacity: isNavOpen ? 1 : 0,
                  transform: isNavOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `all 0.35s ease ${index * 0.05}s`,
                }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    display: 'block',
                    padding: '12px 0',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#0099FF';
                    e.target.style.paddingLeft = '10px';
                    const underline = e.target.querySelector('.menu-underline');
                    if (underline) underline.style.width = '60px';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.paddingLeft = '0';
                    const underline = e.target.querySelector('.menu-underline');
                    if (underline) underline.style.width = '0';
                  }}
                >
                  {item.label}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: 0,
                      width: 0,
                      height: '2px',
                      background: 'linear-gradient(135deg, #00D9FF, #B026FF)',
                      transition: 'width 0.3s ease',
                    }}
                    className="menu-underline"
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
