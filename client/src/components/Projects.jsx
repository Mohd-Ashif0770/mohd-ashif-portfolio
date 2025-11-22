import React, { useState, useEffect } from 'react';
import { projectAPI } from '../utils/apiService';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await projectAPI.getAll();
      
      // Define the correct order: DeltaGPT, WonderLust, Vyntra, Zerodha Clone
      const projectOrder = [
        'deltagpt-ai-chatbot',
        'wonderlust-hotel-booking-app',
        'vyntra-video-call-app',
        'zerodha-clone',
      ];
      
      // Sort projects according to the specified order
      const sortedProjects = projectOrder
        .map((slug) => response.data.find((p) => p.slug === slug))
        .filter(Boolean);
      
      // Add any remaining projects that weren't in the order list
      const remainingProjects = response.data.filter(
        (p) => !projectOrder.includes(p.slug)
      );
      
      setProjects([...sortedProjects, ...remainingProjects]);
      setError(null);
    } catch (err) {
      setError('Failed to load projects. Please try again later.');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  // Define gradient colors for top borders matching Lovable design exactly
  const getBorderGradient = (slug) => {
    const gradients = {
      'deltagpt-ai-chatbot': ['#A855F7', '#3B82F6'], // Purple → Blue
      'wonderlust-hotel-booking-app': ['#2DD4BF', '#22D3EE'], // Cyan → Teal
      'vyntra-video-call-app': ['#3B82F6', '#14B8A6'], // Blue → Aqua
      'zerodha-clone': ['#EC4899', '#8B5CF6'], // Pink → Purple
    };
    
    return gradients[slug] || ['#00D9FF', '#00FF99']; // Default gradient
  };

  return (
    <section
      id="projects"
      className="py-5 unified-bg section-spacing"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '10rem',
        paddingBottom: '10rem',
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold"
          data-aos="fade-up"
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            marginBottom: '2.5rem',
          }}
        >
          <span className="text-white">Featured </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #B026FF 50%, #FF6BFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Projects
          </span>
        </h2>
        {loading ? (
          <div className="text-center py-5">
            <div
              className="spinner-border"
              role="status"
              style={{
                width: '3rem',
                height: '3rem',
                borderWidth: '4px',
                borderColor: '#00D9FF',
                borderRightColor: 'transparent',
              }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div
            className="alert text-center border-0"
            role="alert"
            style={{
              background: 'rgba(10, 10, 26, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              color: '#ff6b6b',
              border: '1px solid rgba(255, 107, 107, 0.3)',
            }}
          >
            {error}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-5">
            <p style={{ color: '#C8D1E0', fontSize: '1.1rem' }}>
              No projects available at the moment.
            </p>
          </div>
        ) : (
          <div className="row g-4">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                gradientColors={getBorderGradient(project.slug)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
