import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={elementRef} className={`section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="profile-card animate-float">
            <div className="profile-photo">
              <i className="fas fa-user"></i>
            </div>
            <h3>Venu Madhav</h3>
            <p>Full Stack Developer</p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">APIs Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Users Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p>Dynamic Full Stack Developer with over 1 year of practical experience in developing and deploying scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Proficient in integrating AI and machine learning features into web applications, enhancing functionality and user experience.</p>
          
          <p>I possess a solid understanding of software engineering principles, data structures, and object-oriented programming. My expertise spans across modern web technologies, cloud platforms like Microsoft Azure, and cutting-edge AI/ML implementations.</p>
          
          <p>Currently pursuing B.Tech in Computer Science & Engineering with specialization in AI & ML, maintaining an impressive CGPA of 9.04. I'm passionate about creating innovative solutions that bridge the gap between traditional web development and emerging AI technologies.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
