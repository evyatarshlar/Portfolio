
const About = ({ t }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll">{t.about.title}</h2>
        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <p>{t.about.text}</p>
            <div className="about-details">
              <div className="detail-item animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <h4>{t.about.bootcamp}</h4>
                <p>{t.about.bootcampDesc}</p>
              </div>
              <div className="detail-item animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <h4>{t.about.languages}</h4>
                <p>{t.about.hebrew}</p>
                <p>{t.about.english}</p>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item animate-on-scroll">
              <h3>640+</h3>
              <p>Hours of Training</p>
            </div>
            <div className="stat-item animate-on-scroll">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item animate-on-scroll">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;