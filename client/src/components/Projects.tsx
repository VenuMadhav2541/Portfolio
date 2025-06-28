import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Fake News Detection using DeBERT",
      tech: ["NLP", "Deep Learning", "Transformers", "Python"],
      description: "Created a Fake News Detection app processing text, URLs, and images for improved accuracy in identifying misinformation. Constructed an advanced DeBERT v3-based model achieving over 99% accuracy on real-world datasets.",
      icon: "fas fa-brain",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      githubLink: "https://github.com/VenuMadhav2541",
      demoLink: "#"
    },
    {
      title: "Calendar Application for Communication Tracking",
      tech: ["ReactJS", "Node.js", "MongoDB", "JWT"],
      description: "Architected and deployed a full-stack calendar application for 500+ users using ReactJS, Node.js, and MongoDB. Integrated JWT-based role-based access control and drag-and-drop calendar UI for real-time scheduling.",
      icon: "fas fa-calendar-alt",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      githubLink: "https://github.com/VenuMadhav2541",
      demoLink: "#"
    },
    {
      title: "3D Portfolio Website",
      tech: ["React", "Three.js", "WebGL", "CSS3"],
      description: "Interactive 3D portfolio website showcasing projects and skills with smooth animations, typing effects, and responsive design. Features modern UI/UX principles and optimized performance.",
      icon: "fas fa-code",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      githubLink: "https://github.com/VenuMadhav2541",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" ref={elementRef} className={`section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div 
              className="project-image" 
              style={{ background: project.gradient }}
            >
              <i className={project.icon}></i>
            </div>
            <div className="project-overlay">
              <div className="project-links">
                <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={project.demoLink} className="project-link">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
