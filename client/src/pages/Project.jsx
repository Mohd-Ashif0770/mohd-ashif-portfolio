import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectAPI } from '../utils/apiService';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      setLoading(true);
      const response = await projectAPI.getById(id);
      setProject(response.data);
      setError(null);
    } catch (err) {
      setError('Project not found');
      console.error('Error fetching project:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div
          className="container text-center py-5 min-vh-100 d-flex align-items-center justify-content-center"
          style={{
            marginTop: '80px',
            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%)',
          }}
        >
          <div
            className="spinner-border"
            role="status"
            style={{
              width: '3rem',
              height: '3rem',
              borderWidth: '4px',
              borderColor: '#5A00FF',
              borderRightColor: 'transparent',
            }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !project) {
    return (
      <>
        <Navbar />
        <div
          className="container text-center py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center"
          style={{
            marginTop: '80px',
            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%)',
          }}
        >
          <h2
            style={{
              background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Project Not Found
          </h2>
          <p className="text-muted mb-4">
            {error || 'The project you are looking for does not exist.'}
          </p>
          <Link
            to="/"
            className="btn"
            style={{
              background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
              border: 'none',
              color: 'white',
              fontWeight: 600,
            }}
          >
            Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div
        className="container py-5 min-vh-100"
        style={{
          marginTop: '80px',
          background: 'linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%)',
        }}
      >
        <Link
          to="/#projects"
          className="btn mb-4"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '2px solid #5A00FF',
            color: '#5A00FF',
            fontWeight: 600,
            borderRadius: '10px',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#5A00FF';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.9)';
            e.target.style.color = '#5A00FF';
          }}
        >
          <i className="fas fa-arrow-left me-2"></i>
          Back to Projects
        </Link>
        <div
          className="card shadow-lg border-0 p-4"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
          }}
        >
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="img-fluid rounded mb-4"
                  style={{
                    width: '100%',
                    maxHeight: '500px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  }}
                />
              )}
              <h1
                className="mb-4"
                style={{
                  background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 700,
                }}
              >
                {project.title}
              </h1>
              <p className="lead mb-4" style={{ color: '#555', lineHeight: '1.8' }}>
                {project.shortDescription}
              </p>
              {project.longDescription && (
                <div className="mb-4">
                  <h3
                    style={{
                      background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    About This Project
                  </h3>
                  <p className="text-muted" style={{ lineHeight: '1.8' }}>
                    {project.longDescription}
                  </p>
                </div>
              )}
              {project.techStack && project.techStack.length > 0 && (
                <div className="mb-4">
                  <h3
                    style={{
                      background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Technologies Used
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="badge px-3 py-2"
                        style={{
                          background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
                          color: 'white',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          borderRadius: '20px',
                          border: 'none',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="d-flex gap-3 flex-wrap">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      background: 'linear-gradient(135deg, #5A00FF, #0099FF)',
                      border: 'none',
                      color: 'white',
                      fontWeight: 600,
                      borderRadius: '10px',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(90, 0, 255, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <i className="fas fa-external-link-alt me-2"></i>
                    View Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      background: 'rgba(90, 0, 255, 0.1)',
                      border: '2px solid #5A00FF',
                      color: '#5A00FF',
                      fontWeight: 600,
                      borderRadius: '10px',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#5A00FF';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(90, 0, 255, 0.1)';
                      e.target.style.color = '#5A00FF';
                    }}
                  >
                    <i className="fab fa-github me-2"></i>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
