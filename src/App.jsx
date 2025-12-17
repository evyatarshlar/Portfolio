import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './cmps/Navbar';
import Hero from './cmps/Hero';
import About from './cmps/About';
import Skills from './cmps/Skills';
import Projects from './cmps/Projects';
import Contact from './cmps/Contact';
import Footer from './cmps/Footer';

export function App(){
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observerRef = useRef(null);
  const animatedElements = useRef(new Set());
  const isRTL = i18n.language === 'he';

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLang);
  };

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
  }, [i18n.language]);

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
        language={i18n.language}
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
