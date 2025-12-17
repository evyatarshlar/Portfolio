import { Code, Server, Database, Globe } from 'lucide-react';
import { skills } from '../data/skills';

const Skills = ({ t }) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title animate-on-scroll">{t.skills.title}</h2>
        <div className="skills-grid">
          <div className="skill-category animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <div className="skill-icon">
              <Code size={32} />
            </div>
            <h3>{t.skills.frontend}</h3>
            <div className="skill-list">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="skill-icon">
              <Server size={32} />
            </div>
            <h3>{t.skills.backend}</h3>
            <div className="skill-list">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="skill-icon">
              <Database size={32} />
            </div>
            <h3>{t.skills.database}</h3>
            <div className="skill-list">
              {skills.database.map((skill, index) => (
                <span key={index} className="skill-tag" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="skill-icon">
              <Globe size={32} />
            </div>
            <h3>{t.skills.tools}</h3>
            <div className="skill-list">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;