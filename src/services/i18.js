import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {

      en: {
        translation: {
          nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Evyatar Shlar',
      title: 'Full-Stack Developer',
      subtitle: 'Building modern web applications with React, Node.js, and cutting-edge technologies',
      cta: 'View My Work',
      contact: 'Get In Touch'
    },
    about: {
      title: 'About Me',
      text: 'I\'m a passionate Full-Stack Developer with extensive experience in modern web technologies. I specialize in creating single-page applications using React.js, Node.js, Vue.js, and Angular. As a team player and problem solver, I focus on writing clean, efficient code and delivering exceptional user experiences.',
      experience: 'Professional Experience',
      bootcamp: 'Full-Stack Bootcamp Graduate',
      bootcampDesc: '640-hour intensive program emphasizing best practices, clean code, and Agile workflow',
      languages: 'Languages',
      hebrew: 'Hebrew - Native',
      english: 'English - Proficient'
    },
    skills: {
      title: 'Technical Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools & Others'
    },
    projects: {
      title: 'My Projects',
      bestbnb: {
        title: 'Bestbnb - Airbnb Clone',
        desc: 'Full-featured e-commerce marketplace application built with React, Node.js, and MongoDB',
        tech: 'React • Node.js • Redux • MongoDB • Express'
      },
      portfolio: {
        title: 'Portfolio Website',
        desc: 'Responsive portfolio website with internationalization and dark mode support',
        tech: 'React • SCSS • i18n'
      },
      ecommerce: {
        title: 'E-Commerce Platform',
        desc: 'Modern shopping platform with payment integration and admin dashboard',
        tech: 'Vue.js • Node.js • MySQL'
      }
    },
    contact: {
      mail: 'Send me an email',
      github: 'Open my GitHub profile',
      linkedin: 'Open my LinkedIn profile',
      whatsapp: 'Send me a message on WhatsApp',
    },
    footer: {
      copyright: '© 2024 Evyatar Shlar. All rights reserved.',
      builtWith: 'Built with React & Love'
    }
        },
      },

    he: {
        translation: {
           nav: {
      about: 'אודות',
      skills: 'כישורים',
      projects: 'פרויקטים',
      contact: 'צור קשר'
    },
    hero: {
      greeting: 'שלום, אני',
      name: 'אביתר שלר',
      title: 'מפתח Full-Stack',
      subtitle: 'בונה אפליקציות ווב מודרניות עם React, Node.js וטכנולוגיות מתקדמות',
      cta: 'צפה בעבודות',
      contact: 'צור קשר'
    },
    about: {
      title: 'אודות',
      text: 'אני מפתח Full-Stack נלהב עם ניסיון רב בטכנולוגיות ווב מודרניות. אני מתמחה ביצירת יישומי עמוד יחיד באמצעות React.js, Node.js, Vue.js ו-Angular. כשחקן צוות ופותר בעיות, אני מתמקד בכתיבת קוד נקי ויעיל ובמתן חוויות משתמש יוצאות דופן.',
      experience: 'ניסיון מקצועי',
      bootcamp: 'בוגר בוטקאמפ Full-Stack',
      bootcampDesc: 'תוכנית אינטנסיבית בת 640 שעות עם דגש על שיטות עבודה מומלצות וקוד נקי',
      languages: 'שפות',
      hebrew: 'עברית - שפת אם',
      english: 'אנגלית - שליטה טובה'
    },
    skills: {
      title: 'כישורים טכנולוגיים',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'מסדי נתונים',
      tools: 'כלים ואחרים'
    },
    projects: {
      title: 'הפרויקטים שלי',
      bestbnb: {
        title: 'Bestbnb - שיבוט Airbnb',
        desc: 'אפליקציית מרקטפלייס מסחר אלקטרוני מלאה הבנויה עם React, Node.js ו-MongoDB',
        tech: 'React • Node.js • Redux • MongoDB • Express'
      },
      portfolio: {
        title: 'אתר תיק עבודות',
        desc: 'אתר תיק עבודות רספונסיבי עם תמיכה בינלאומית ומצב חשוך',
        tech: 'React • SCSS • i18n'
      },
      ecommerce: {
        title: 'פלטפורמת מסחר אלקטרוני',
        desc: 'פלטפורמת קנייה מודרנית עם אינטגרציית תשלומים ולוח בקרה',
        tech: 'Vue.js • Node.js • MySQL'
      }
    },
    contact: {
      mail: 'שלח לי מייל',
      github: 'פתח את הגיטהאב שלי',
      linkedin: 'פתח את הפרופיל שלי בלינקדאין',
      whatsapp: 'שלח לי הודעה בוואטסאפ',
    },
    footer: {
      copyright: '© 2024 אביתר שלר. כל הזכויות שמורות.',
      builtWith: 'נבנה עם React ואהבה'
    }
        },
      },
    },
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  })

export default i18n
