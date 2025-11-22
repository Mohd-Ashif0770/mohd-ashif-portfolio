import React from 'react';

const ProjectCard = ({ project, borderGradient }) => {
  // Use longDescription if available, otherwise fall back to shortDescription
  const description = project.longDescription || project.shortDescription;

  return (
    <div className="col-lg-6 col-md-6 mb-4" data-aos="fade-up">
      <div
        className="card h-100 border-0"
        style={{
          background: 'rgba(10, 10, 26, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 217, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }}
      >
        {/* Gradient top border */}
        <div
          style={{
            height: '4px',
            background: borderGradient || 'linear-gradient(135deg, #00D9FF 0%, #00FF99 100%)',
            width: '100%',
          }}
        ></div>

        <div className="card-body p-4 d-flex flex-column">
          {/* Title */}
          <h5
            className="card-title mb-3"
            style={{
              color: 'white',
              fontWeight: 700,
              fontSize: '1.5rem',
            }}
          >
            {project.title}
          </h5>

          {/* Description */}
          <p
            className="card-text flex-grow-1 mb-4"
            style={{
              color: '#B8C5D6',
              lineHeight: '1.7',
              fontSize: '1rem',
              minHeight: '60px',
            }}
          >
            {description}
          </p>

          {/* Technologies - Make sure all are visible */}
          <div className="mb-4">
            {project.techStack && project.techStack.length > 0 && (
              <div className="d-flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2"
                    style={{
                      background: 'rgba(255, 255, 255, 0.25)',
                      color: '#E0E6F0',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      display: 'inline-block',
                      marginBottom: '4px',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-2 mt-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn d-inline-flex align-items-center gap-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: '10px',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
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
                className="btn d-inline-flex align-items-center gap-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: '10px',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
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
