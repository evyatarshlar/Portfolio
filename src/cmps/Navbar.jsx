import { Menu, X } from 'lucide-react';

const Navbar = ({ language, toggleLanguage, theme, toggleTheme, isMenuOpen, setIsMenuOpen, scrollToSection, t }) => {
  const isRTL = language === 'he';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>ES</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''} ${isRTL ? 'rtl' : 'ltr'}`}>
          <a href="#about" onClick={() => scrollToSection('about')} dir="auto">{t('nav.about')}</a>
          <a href="#skills" onClick={() => scrollToSection('skills')} dir="auto">{t('nav.skills')}</a>
          <a href="#projects" onClick={() => scrollToSection('projects')} dir="auto">{t('nav.projects')}</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} dir="auto">{t('nav.contact')}</a>
        </div>

        <div className="nav-controls">
          <button onClick={toggleLanguage} className="lang-toggle">
            {language === 'en' ? 'HE' : 'EN'}
          </button>
          <div className="toggle-container">
            <input
              type="checkbox"
              id="theme-toggle"
              className="toggle-checkbox"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <label htmlFor="theme-toggle" className="toggle-label">
              <span className="slider"></span>
            </label>
          </div>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;