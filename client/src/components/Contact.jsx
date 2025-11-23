import React, { useState, useEffect } from 'react';
import { contactAPI } from '../utils/apiService';
import Toast from './Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // Add placeholder styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      #name::placeholder,
      #phone::placeholder,
      #email::placeholder,
      #message::placeholder {
        color: #B8C5D6 !important;
        opacity: 0.7 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      await contactAPI.submit(formData);
      setToast({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setToast({
        type: 'error',
        message:
          error.response?.data?.message ||
          'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-5 unified-bg section-spacing"
      style={{
        position: 'relative',
        paddingTop: '10rem',
        paddingBottom: '10rem',
      }}
    >
      <div className="container-fluid">
        <h2
          className="text-center mb-5 fw-bold"
          data-aos="fade-up"
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            marginBottom: '2.5rem',
          }}
        >
          <span className="text-white">Let's </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #B026FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Connect
          </span>
        </h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="row g-4">
              {/* Left Column - Contact Form */}
              <div className="col-lg-6 mb-4 " data-aos="fade-right">
                <div
                  className="card border-0 shadow-lg h-100"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '1px solid rgba(0, 217, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="name"
                        className="form-label"
                        style={{ color: 'white', fontWeight: 600 }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        style={{
                          background: 'rgba(26, 26, 46, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          padding: '12px',
                          color: '#E0E6F0',
                          fontSize: '1rem',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                      <style>
                        {`
                          #name::placeholder,
                          #phone::placeholder,
                          #email::placeholder,
                          #message::placeholder {
                            color: #B8C5D6;
                            opacity: 0.7;
                          }
                        `}
                      </style>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="phone"
                        className="form-label"
                        style={{ color: 'white', fontWeight: 600 }}
                      >
                        Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Mobile Number"
                        style={{
                          background: 'rgba(26, 26, 46, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          padding: '12px',
                          color: '#E0E6F0',
                          fontSize: '1rem',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="form-label"
                        style={{ color: 'white', fontWeight: 600 }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        style={{
                          background: 'rgba(26, 26, 46, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          padding: '12px',
                          color: '#E0E6F0',
                          fontSize: '1rem',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="form-label"
                        style={{ color: 'white', fontWeight: 600 }}
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        style={{
                          background: 'rgba(26, 26, 46, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          padding: '12px',
                          color: '#E0E6F0',
                          fontSize: '1rem',
                          resize: 'vertical',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn w-100 border-0"
                      disabled={loading}
                      style={{
                        background: 'linear-gradient(135deg, #00D9FF 0%, #00FF99 100%)',
                        color: '#1a1a2e',
                        fontWeight: 700,
                        borderRadius: '12px',
                        padding: '14px',
                        fontSize: '1rem',
                        boxShadow: '0 8px 20px rgba(0, 217, 255, 0.4)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!loading) {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 12px 30px rgba(0, 217, 255, 0.6)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 20px rgba(0, 217, 255, 0.4)';
                      }}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column - Get in Touch */}
              <div className="col-lg-6" data-aos="fade-left">
                <div className="h-100 d-flex flex-column">
                  <h4
                    className="mb-3"
                    style={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.75rem',
                    }}
                  >
                    Get in Touch
                  </h4>
                  <p
                    className="mb-4"
                    style={{
                      color: '#B8C5D6',
                      lineHeight: '1.8',
                      fontSize: '1rem',
                    }}
                  >
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision. Feel free to
                    reach out!
                  </p>
                  <div className="contact-info">
                    {/* Email Card */}
                    <div
                      className="mb-3 card border-0"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: '20px',
                        border: '1px solid rgba(0, 217, 255, 0.2)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 217, 255, 0.3), 0 4px 20px rgba(0, 0, 0, 0.5)';
                        e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
                        e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)';
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: 'rgba(0, 217, 255, 0.2)',
                            border: '2px solid #00D9FF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '15px',
                            color: '#00D9FF',
                            fontSize: '1.5rem',
                          }}
                        >
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                          <p className="mb-1" style={{ color: 'white', fontWeight: 600, margin: 0 }}>
                            Email
                          </p>
                          <a
                            href="mailto:mohdashif0770@gmail.com"
                            className="text-decoration-none"
                            style={{ color: '#B8C5D6', fontSize: '0.95rem' }}
                          >
                            mohdashif0770@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* LinkedIn Card */}
                    <div
                      className="mb-3 card border-0"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: '20px',
                        border: '1px solid rgba(0, 153, 255, 0.2)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 153, 255, 0.3), 0 4px 20px rgba(0, 0, 0, 0.5)';
                        e.currentTarget.style.borderColor = 'rgba(0, 153, 255, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
                        e.currentTarget.style.borderColor = 'rgba(0, 153, 255, 0.2)';
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: 'rgba(0, 153, 255, 0.2)',
                            border: '2px solid #0099FF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '15px',
                            color: '#0099FF',
                            fontSize: '1.5rem',
                          }}
                        >
                          <i className="fab fa-linkedin"></i>
                        </div>
                        <div>
                          <p className="mb-1" style={{ color: 'white', fontWeight: 600, margin: 0 }}>
                            LinkedIn
                          </p>
                          <a
                            href="https://www.linkedin.com/in/mohd-ashif/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                            style={{ color: '#B8C5D6', fontSize: '0.95rem' }}
                          >
                            Connect with me
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* GitHub Card */}
                    <div
                      className="mb-3 card border-0"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: '20px',
                        border: '1px solid rgba(176, 38, 255, 0.2)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(176, 38, 255, 0.3), 0 4px 20px rgba(0, 0, 0, 0.5)';
                        e.currentTarget.style.borderColor = 'rgba(176, 38, 255, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
                        e.currentTarget.style.borderColor = 'rgba(176, 38, 255, 0.2)';
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: 'rgba(176, 38, 255, 0.2)',
                            border: '2px solid #B026FF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '15px',
                            color: '#B026FF',
                            fontSize: '1.5rem',
                          }}
                        >
                          <i className="fab fa-github"></i>
                        </div>
                        <div>
                          <p className="mb-1" style={{ color: 'white', fontWeight: 600, margin: 0 }}>
                            GitHub
                          </p>
                          <a
                            href="https://github.com/Mohd-Ashif0770"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                            style={{ color: '#B8C5D6', fontSize: '0.95rem' }}
                          >
                            Check out my work
                          </a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;
