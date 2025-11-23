import React, { useState } from 'react';

const ProjectCard = ({ project, gradientColors = ['#00D9FF', '#00FF99'] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use custom descriptions if available, otherwise fall back to longDescription or shortDescription
  const getDescription = () => {
    // Custom shorter descriptions matching Lovable design
    const customDescriptions = {
      'deltagpt-ai-chatbot': 'A modern AI chatbot built using OpenAI API, React, and Node.js. Supports JWT-based auth, persistent chat history, and real-time responses with a clean and intuitive UI.',
      'wonderlust-hotel-booking-app': 'A full-stack hotel booking platform with authentication, image uploads, reviews, and CRUD listings. Users can manage hotels, post reviews, and explore stays easily.',
      'vyntra-video-call-app': 'A real-time video calling app built with WebRTC and Socket.io. Includes peer-to-peer rooms, screen sharing, chat, and a smooth responsive interface.',
      'zerodha-clone': "A UI clone of India's leading trading platform. Built with modern frontend components featuring clean layout, responsive charts, and interactive dashboard elements.",
    };
    
    return customDescriptions[project.slug] || project.longDescription || project.shortDescription;
  };

  const description = getDescription();

  // Create gradient string for top border
  const gradientString = `linear-gradient(90deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`;
  const hoverGradientString = `linear-gradient(90deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`;

  return (
    <div className="col-lg-6 col-md-6 mb-4" data-aos="fade-up">
      <div
        className="card h-100 border-0"
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: isHovered
            ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(168, 85, 247, 0.1)'
            : '0 4px 15px rgba(0, 0, 0, 0.3)',
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient top border */}
        <div
          style={{
            height: '4px',
            background: isHovered ? hoverGradientString : gradientString,
            width: '100%',
            transition: 'all 0.3s ease',
            opacity: isHovered ? 1 : 0.9,
            boxShadow: isHovered
              ? `0 0 20px ${gradientColors[0]}40`
              : 'none',
          }}
        ></div>

        <div className="card-body p-4 d-flex flex-column" style={{ padding: '2rem' }}>
          {/* Title */}
          <h5
            className="card-title mb-3"
            style={{
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '1.75rem',
              lineHeight: '1.3',
              marginBottom: '1.5rem', // Increased spacing under title (2-4px more)
            }}
          >
            {project.title}
          </h5>

          {/* Description - Limited to 3 lines */}
          <p
            className="card-text flex-grow-1 mb-4 project-desc"
            style={{
              color: '#D7E2F3',
              lineHeight: '1.7',
              fontSize: '0.93rem', // Reduced from 1rem for compact look
              marginBottom: '1.5rem',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </p>

          {/* Technologies - Pill badges with improved contrast */}
          <div className="mb-4">
            {project.techStack && project.techStack.length > 0 && (
              <div className="d-flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2"
                    style={{
                      background: '#1F2535',
                      color: '#D1D5E0',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      borderRadius: '9999px',
                      border: 'none',
                      display: 'inline-block',
                      marginBottom: '4px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#2A3441';
                      e.target.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#1F2535';
                      e.target.style.color = '#D1D5E0';
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div
            className="mt-auto project-card-buttons"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '1rem',
              flexWrap: 'nowrap',
              overflow: 'hidden',
              maxWidth: '100%',
              minWidth: '260px',
            }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-0"
                style={{
                  background: 'linear-gradient(135deg, #00D9FF 0%, #00FF99 100%)',
                  color: '#0E1525',
                  fontWeight: 500,
                  borderRadius: '12px',
                  padding: '0.75rem 1.3rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(0, 217, 255, 0.3)',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 217, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 217, 255, 0.3)';
                }}
              >
                <i className="fas fa-external-link-alt"></i>
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: 'transparent',
                  border: '1.5px solid rgba(255, 255, 255, 0.2)',
                  color: '#C8D1E0',
                  fontWeight: 500,
                  borderRadius: '12px',
                  padding: '0.75rem 1.3rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.target.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.color = '#C8D1E0';
                }}
              >
                <i className="fab fa-github"></i>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
