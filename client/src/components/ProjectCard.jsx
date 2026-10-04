import React from 'react';

const ProjectCard = ({ project, gradientColors = ['#00D9FF', '#00FF99'] }) => {
  const getDescription = () => {
    const customDescriptions = {
      'deltagpt-ai-chatbot':
        'A modern AI chatbot built using OpenAI API, React, and Node.js. Supports JWT-based auth, persistent chat history, and real-time responses with a clean and intuitive UI.',
      'wonderlust-hotel-booking-app':
        'A full-stack hotel booking platform with authentication, image uploads, reviews, and CRUD listings. Users can manage hotels, post reviews, and explore stays easily.',
      'vyntra-video-call-app':
        'A real-time video calling app built with WebRTC and Socket.io. Includes peer-to-peer rooms, screen sharing, chat, and a smooth responsive interface.',
      'zerodha-clone':
        "A UI clone of India's leading trading platform. Built with modern frontend components featuring clean layout, responsive charts, and interactive dashboard elements.",
    };

    return customDescriptions[project.slug] || project.longDescription || project.shortDescription;
  };

  const description = getDescription();
  const gradientString = `linear-gradient(90deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`;
  return (
    <div className="col-lg-6 col-md-6 mb-4">
      <div
        className="card h-100 border-0"
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div
          style={{
            height: '4px',
            background: gradientString,
            width: '100%',
          }}
        />

        <div className="card-body p-4 d-flex flex-column" style={{ padding: '2rem' }}>
          <h5
            className="card-title mb-3"
            style={{
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '1.75rem',
              lineHeight: 1.3,
              marginBottom: '1.5rem',
            }}
          >
            {project.title}
          </h5>

          <p
            className="card-text flex-grow-1 mb-4 project-desc"
            style={{
              color: '#D7E2F3',
              lineHeight: 1.7,
              fontSize: '0.93rem',
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
                      display: 'inline-block',
                      marginBottom: '4px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div
            className="mt-auto project-card-buttons"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '1rem',
              flexWrap: 'nowrap',
              overflow: 'visible',
              paddingTop: '8px',
              paddingBottom: '4px',
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
                  background: 'linear-gradient(135deg, #00D9FF 0%, #0088FF 50%, #7928CA 100%)',
                  color: '#ffffff',
                  fontWeight: 500,
                  borderRadius: '12px',
                  padding: '0.75rem 1.4rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease-in-out',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(0, 217, 255, 0.35)',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexShrink: 0,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 217, 255, 0.55), 0 0 15px rgba(121, 40, 202, 0.35)';
                  e.currentTarget.style.filter = 'brightness(1.08)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 217, 255, 0.35)';
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
              >
                <i className="fas fa-external-link-alt" aria-hidden="true" />
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
                  padding: '0.75rem 1.4rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease-in-out',
                  fontSize: '0.95rem',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexShrink: 0,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.color = '#C8D1E0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
              >
                <i className="fab fa-github" aria-hidden="true" />
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
