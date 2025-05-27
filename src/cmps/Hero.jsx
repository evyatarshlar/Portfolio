
const Hero = ({ t, scrollToSection }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-name">{t.hero.name}</h1>
          <h2 className="hero-title">{t.hero.title}</h2>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              {t.hero.cta}
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              {t.hero.contact}
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <img src="https://res.cloudinary.com/dv2brrhll/image/upload/v1748333129/My_ChatGPT_image_quuzy8.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;