import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (isVisible && !animateSkills) {
      setTimeout(() => {
        setAnimateSkills(true);
      }, 300);
    }
  }, [isVisible, animateSkills]);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", percentage: 90 },
        { name: "Java", percentage: 85 },
        { name: "C#", percentage: 80 },
        { name: "SQL", percentage: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "ReactJS", percentage: 92 },
        { name: "Node.js", percentage: 88 },
        { name: "Express.js", percentage: 85 },
        { name: "ASP.NET Core", percentage: 82 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Microsoft Azure", percentage: 85 },
        { name: "Git", percentage: 90 },
        { name: "MongoDB", percentage: 88 },
        { name: "Azure DevOps", percentage: 80 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "NLP", percentage: 88 },
        { name: "Transformers", percentage: 85 },
        { name: "Deep Learning", percentage: 82 },
        { name: "RESTful APIs", percentage: 90 }
      ]
    }
  ];

  return (
    <section id="skills" ref={elementRef} className={`section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{
                      width: animateSkills ? `${skill.percentage}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
