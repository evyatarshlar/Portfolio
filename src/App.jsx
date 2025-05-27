import { useState, useEffect, useRef } from 'react';
import { translations } from './services/translations';
import Navbar from './cmps/Navbar';
import Hero from './cmps/Hero';
import About from './cmps/About';
import Skills from './cmps/Skills';
import Projects from './cmps/Projects';
import Contact from './cmps/Contact';
import Footer from './cmps/Footer';

export function App(){
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observerRef = useRef(null);
  const animatedElements = useRef(new Set());
  const t = translations[language];
  const isRTL = language === 'he';

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          entry.target.classList.remove('animate-out');
          animatedElements.current.add(entry.target);
        } else {
          entry.target.classList.remove('animate-in');
          entry.target.classList.add('animate-out');
          animatedElements.current.delete(entry.target);
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
    elementsToObserve.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
      elementsToObserve.forEach(el => {
        if (observerRef.current && !animatedElements.current.has(el)) {
          observerRef.current.observe(el);
        }
      });
    }, 100);
  }, [language]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'he' : 'en';
    setLanguage(newLang);
    document.documentElement.setAttribute('dir', newLang === 'he' ? 'rtl' : 'ltr');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`portfolio ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        t={t}
      />
      <Hero t={t} scrollToSection={scrollToSection} />
      <About t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
};

export default App;
