import React, { useState, useEffect } from 'react';
import { contactAPI } from '../utils/apiService';
import Toast from './Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
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
      className="py-5 px-4 unified-bg section-spacing"
      style={{
        position: 'relative',
        paddingTop: '10rem',
        paddingBottom: '10rem',
      }}
    >
      <div className="contact-section-wrapper">
        <h2
          className="text-center fw-bold"
          data-aos="fade-up"
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            marginBottom: '2rem',
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
        <div className="contact-layout-container">
          {/* Left Column - Contact Form */}
          <div className="contact-form" data-aos="fade-right">
            <div className="contact-card">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="form-label card-title"
                    style={{ color: 'white', fontWeight: 600 }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <style>
                    {`
                          #name::placeholder,
                          #phone::placeholder,
                          #message::placeholder {
                            color: #B8C5D6;
                            opacity: 0.7;
                          }
                        `}
                  </style>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="phone"
                    className="form-label card-title"
                    style={{ color: 'white', fontWeight: 600 }}
                  >
                    Mobile
                  </label>
                  <input
                    type="tel"
                    className="form-control contact-input"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Mobile Number"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="message"
                    className="form-label card-title"
                    style={{ color: 'white', fontWeight: 600 }}
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control contact-input contact-textarea"
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={loading}
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
          <div className="get-in-touch" data-aos="fade-left">
            <div className="contact-card">
              <h4 className="get-in-touch-title">Get in Touch</h4>
              <p className="get-in-touch-text">
                I'm always open to discussing new projects, creative ideas. Feel free to reach out!
              </p>
              <div className="contact-info">
                {/* Email Card */}
                <a
                  href="mailto:mohdashif0770@gmail.com"
                  className="contact-info-card"
                >
                  <div className="icon-box email">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <p>Email</p>
                    <span className="contact-info-link">
                      mohdashif0770@gmail.com
                    </span>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/mohd-ashif/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-card"
                >
                  <div className="icon-box linkedin">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="info-content">
                    <p>LinkedIn</p>
                    <span className="contact-info-link">Connect with me</span>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href="https://github.com/Mohd-Ashif0770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-card"
                >
                  <div className="icon-box github">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="info-content">
                    <p>GitHub</p>
                    <span className="contact-info-link">Check out my work</span>
                  </div>
                </a>
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
