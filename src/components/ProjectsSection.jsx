import React, { useState } from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Check if image is a file path or gradient class
  const isImageFile = project.image && (project.image.includes('.png') || project.image.includes('.jpg') || project.image.includes('.jpeg') || project.image.includes('.webp'));
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = (e) => {
    console.error('Image failed to load:', project.image);
    setImageError(true);
  };
  
  return (
    <div className={`project-card group ${project.featured ? 'featured' : ''}`}>
      <div className="project-image-container">
        {isImageFile && !imageError ? (
          <div className="image-wrapper">
            {/* Loading shimmer effect */}
            {!imageLoaded && (
              <div className="image-loading-shimmer">
                <div className="shimmer-animation"></div>
              </div>
            )}
            
            <img 
              src={project.image} 
              alt={project.title}
              className={`project-image ${imageLoaded ? 'loaded' : 'loading'}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            
            {/* Premium overlay with enhanced effects */}
            <div className="image-overlay">
              <div className="overlay-gradient"></div>
              <div className="overlay-pattern"></div>
              
              {/* Content overlay */}
              <div className="project-image-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && (
                    <div className="featured-badge">
                      <span className="badge-text">Featured</span>
                      <div className="badge-glow"></div>
                    </div>
                  )}
                </div>
                
                {/* Hover preview button */}
                <div className="preview-button">
                  <Eye size={20} />
                  <span>Preview</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Gradient fallback with enhanced styling
          <div className={`gradient-background ${project.image || 'gradient-purple-blue'}`}>
            <div className="gradient-overlay"></div>
            <div className="project-image-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.featured && (
                  <div className="featured-badge">
                    <span className="badge-text">Featured</span>
                    <div className="badge-glow"></div>
                  </div>
                )}
              </div>
              
              <div className="preview-button">
                <Eye size={20} />
                <span>Preview</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="project-content">
        <p className="project-description">{project.description}</p>
        <div className="tech-tags">
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a 
            href={project.github} 
            className="project-link github-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (project.github === '#') {
                e.preventDefault();
                alert('GitHub link not available');
              }
            }}
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          <a 
            href={project.live} 
            className="project-link live-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (project.live === '#') {
                e.preventDefault();
                alert('Live demo not available');
              }
            }}
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ 
  title = "Featured Projects",
  projects = [
    {
      id: 1,
      title: 'Movie Database App',
      description: 'Full-stack movie application with Node.js backend, featuring user authentication, movie search, ratings, and personal watchlists.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/App.png',
      github: 'https://github.com/Stephenpleasant/Fullstack',
      live: 'https://fullstack-zhg6.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Frontend',
      description: 'Responsive e-commerce interface built with React and Bootstrap, featuring product catalogs, cart functionality, and checkout flow.',
      tech: ['HTML', 'JavaScript', 'CSS'],
      image: '/E-commerce.png',
      github: 'https://github.com/Stephenpleasant/E-commerce',
      live: 'https://ecommerce-blush-seven-80.vercel.app/'
    },
    {
      id: 3,
      title: 'Compounding Calculator',
      description: 'Interactive task management application with drag-and-drop functionality, built using React hooks and modern JavaScript.',
      tech: ['React', 'JavaScript', 'CSS3', 'LocalStorage API'],
      image: '/compounding-calculator.png',
      github: 'https://github.com/Stephenpleasant/Compounding-Calculator',
      live: 'https://compounding-calculator-w6np.vercel.app/'
    },
    {
      id: 4,
      title: 'Weather API Integration',
      description: 'Weather application consuming external APIs, showcasing API integration skills and responsive design principles.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      image: 'gradient-blue-cyan',
      github: '#',
      live: '#'
    }
  ]
}) => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">{title}</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default ProjectsSection;