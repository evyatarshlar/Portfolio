
const About = ({ t }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll">{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <p>{t('about.text')}</p>
            <div className="about-details">
              <div className="detail-item animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <h4>{t('about.bootcamp')}</h4>
                <p>{t('about.bootcampDesc')}</p>
              </div>
              <div className="detail-item animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <h4>{t('about.additionalTitle')}</h4>
                <p>{t('about.additionalInfo.line1')}</p>
                <p>{t('about.additionalInfo.line2')}</p>
                <p>{t('about.additionalInfo.line3')}</p>
                <p>{t('about.additionalInfo.line4')}</p>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item animate-on-scroll">
              <h3>640+</h3>
              <p>{t('about.stats.hours')}</p>
            </div>
            <div className="stat-item animate-on-scroll">
              <h3>2+</h3>
              <p>{t('about.stats.experience')}</p>
            </div>
            <div className="stat-item animate-on-scroll">
              <h3>7+</h3>
              <p>{t('about.stats.projects')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;