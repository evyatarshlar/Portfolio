import { Github, ExternalLink } from 'lucide-react';

const Projects = ({ t }) => {
  const projects = [
    {
      id: 'bestbnb',
      image: 'https://res.cloudinary.com/dv2brrhll/image/upload/v1748337517/logo_mgzycg.png',
      github: 'https://github.com/evyatarshlar/bestbnb',
      demo: 'https://bestbnb.onrender.com/'
    },
    {
      id: 'portfolio',
      image: 'https://res.cloudinary.com/dv2brrhll/image/upload/v1748333129/My_ChatGPT_image_quuzy8.png',
      github: 'https://github.com/evyatarshlar/Portfolio',
      demo: 'https://evyatarshlar.github.io/Portfolio/'
    },
     {
      id: 'yomi',
      image: 'https://res.cloudinary.com/dv2brrhll/image/upload/v1765970935/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2025-12-17_132832_dlqmey.png',
      demo: 'https://yomi.org.il/onboarding/welcome'
    },
     {
      id: 'smartplay',
      image: 'https://res.cloudinary.com/dv2brrhll/image/upload/v1751148532/smartplay_logo_preview_rev_1_zquf3u.png',
      demo: 'https://app--smart-play-kids-dd261dad.base44.app'
    },
     {
      id: 'meme',
      image: 'https://res.cloudinary.com/dv2brrhll/image/upload/v1751149979/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2025-06-29_013251_oafaqz.png',
      github: 'https://github.com/evyatarshlar/Meme-Generator',
      demo: 'https://evyatarshlar.github.io/Meme-Generator/#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll">{t.projects.title}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card animate-on-scroll">
              <div className="project-image">
                <img src={project.image} alt={t.projects[project.id].title} />
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
                <h3>{t.projects[project.id].title}</h3>
                <p>{t.projects[project.id].desc}</p>
                <div className="project-tech">
                  {t.projects[project.id].tech}
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