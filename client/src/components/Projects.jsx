import React from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // Define the correct order: DeltaGPT, WonderLust, Vyntra, Zerodha Clone
  const projectOrder = [
    'deltagpt-ai-chatbot',
    'wonderlust-hotel-booking-app',
    'vyntra-video-call-app',
    'zerodha-clone',
  ];

  // Sort projects according to the specified order
  const sortedProjects = projectOrder
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter(Boolean);

  // Add any remaining projects that weren't in the order list
  const remainingProjects = projectsData.filter(
    (p) => !projectOrder.includes(p.slug)
  );

  const projects = [...sortedProjects, ...remainingProjects];

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
      className="pt-5 unified-bg section-spacing"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '10rem',
        // paddingBottom: '10rem',
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold"
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
        {projects.length === 0 ? (
          <div className="text-center py-5">
            <p style={{ color: '#C8D1E0', fontSize: '1.1rem' }}>
              No projects available at the moment.
            </p>
          </div>
        ) : (
          <div className="row g-4">
            {projects.map((project) => (
              <ProjectCard
                key={project._id || project.slug}
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
