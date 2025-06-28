import React, { useEffect, useRef } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { initializeThreeScene } from '../utils/three-scene';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const typingText = useTypingEffect([
    "Building scalable web applications",
    "Creating AI-powered solutions", 
    "Developing with modern technologies",
    "Passionate about clean code",
    "Always learning and growing"
  ], 100, 50, 2000);

  useEffect(() => {
    if (canvasRef.current) {
      initializeThreeScene(canvasRef.current);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <h1 className="hero-title">Venu Madhav Bandarupalli</h1>
        <p className="hero-subtitle">Full Stack Developer & AI/ML Engineer</p>
        <div className="typing-text">{typingText}</div>
        <div className="cta-buttons">
          <a 
            href="#projects" 
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          >
            <i className="fas fa-code"></i>
            View My Work
          </a>
          <a 
            href="#contact" 
            className="btn btn-secondary"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            <i className="fas fa-envelope"></i>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
