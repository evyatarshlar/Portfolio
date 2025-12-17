import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = ({ t }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll">{t('projects.title')}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card animate-on-scroll">
              <div className="project-image">
                <img src={project.image} alt={t(`projects.${project.id}.title`)} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                    )}
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{t(`projects.${project.id}.title`)}</h3>
                <p>{t(`projects.${project.id}.desc`)}</p>
                <div className="project-tech">
                  {t(`projects.${project.id}.tech`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;