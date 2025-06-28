import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Achievements: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const achievements = [
    {
      icon: "fas fa-trophy",
      title: "1st Prize - Web Development Contest",
      description: "Achieved 1st Prize in a college-wide Web Development contest by delivering a highly responsive MERN-based application, showcasing modern UI/UX design and seamless database integration."
    },
    {
      icon: "fas fa-medal",
      title: "1st Prize - WEB MANTRA",
      description: "Earned 1st Prize in WEB MANTRA, a college coding contest organized by the SWAA club (Department of MCA), by demonstrating advanced skills in web development."
    },
    {
      icon: "fas fa-certificate",
      title: "Azure Fundamentals (AZ-900)",
      description: "Microsoft Azure Fundamentals certification demonstrating understanding of cloud concepts, Azure services, and Azure management tools."
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Wipro Talent-Next Program",
      description: "Completed C#(.Net) Full Stack and Artificial Intelligence tracks in the prestigious Wipro Talent-Next Program, gaining industry-relevant skills."
    },
    {
      icon: "fas fa-code",
      title: "Multiple Udemy Certifications",
      description: "Completed certifications in Agile Project Management, Linux Command Line, Git, MS SQL, Entity Framework Core, ASP.NET Core 9, and Azure DevOps."
    },
    {
      icon: "fas fa-star",
      title: "Academic Excellence",
      description: "Maintaining excellent academic performance with CGPA of 9.04 in B.Tech CSE (AI & ML) and consistently high grades across all educational levels."
    }
  ];

  return (
    <section id="achievements" ref={elementRef} className={`section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Achievements & Certifications</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">
              <i className={achievement.icon}></i>
            </div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
