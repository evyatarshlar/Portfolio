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
            additionalTitle: "More About Me",
            additionalInfo: {
              line1: "I have hands-on experience building complex full-stack applications such as Bestbnb (Airbnb clone), Yomi (Daily Talmud Learning Platform), and SmartPlay (AI-powered educational games). I focus on scalable, maintainable code and seamless user experiences.",
              line2: "I leverage AI tools to optimize workflows and improve code quality, and actively monitor and fix issues using Sentry.",
              line3: "I'm not just a developer - I'm a self-motivated fast learner who adapts quickly to new technologies and environments.",
              line4: "I thrive in collaborative settings and enjoy tackling challenges - whether technical or user-centered."
            },
            stats: {
              hours: "Hours of Training",
              experience: "Years Experience",
              projects: "Projects Completed"
            }
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
            yomi: {
              title: 'Daily Talmud Learning Platform',
              desc: 'Web platform for daily Talmud learning with interactive frontend, backend logic, bug tracking via Sentry, and AI-assisted optimizations',
              tech: 'Angular • Tailwind • NestJS • MongoDB'
            },
            smartplay: {
              title: 'Educational games Website',
              desc: 'Educational games platform with AI creation for kids to learn letters, numbers, and shapes',
              tech: 'React • Tailwind • Base44'
            },
            meme: {
              title: 'Meme Generator Website',
              desc: 'Create humorous memes with text, emojis & images. Fun and easy!',
              tech: 'Canvas • JavaScript • CSS'
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
        }
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
            additionalTitle: "עוד קצת עליי",
            additionalInfo: {    
              line1: "צברתי ניסיון מעשי בפיתוח אפליקציות Full-Stack מורכבות כגון Bestbnb (שיבוט Airbnb), יומי (פלטפורמת לימוד יומי בגמרא), ו‑SmartPlay (משחקים חינוכיים עם בינה מלאכותית). אני מתמקד בקוד סקלאבילי, נקי וחוויית משתמש חלקה.",
              line2: "אני משתמש בכלי AI לייעול תהליכים ולשיפור איכות הקוד, ומטפל באופן פעיל בבאגים באמצעות Sentry.",
              line3: "אני לא רק מפתח, אני לומד מהיר ובעל מוטיבציה עצמית, שמסתגל במהירות לטכנולוגיות וסביבות חדשות.",
              line4: "אני משגשג בעבודה בצוות ואוהב להתמודד עם אתגרים טכניים או כאלה שמצריכים פתרונות מותאמים למשתמש."
            },
            stats: {
              hours: "שעות הכשרה",
              experience: "שנות ניסיון",
              projects: "פרויקטים שבוצעו"
            }
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
            yomi: {
              title: 'פלטפורמת לימוד יומי בגמרא',
              desc: 'פלטפורמת ווב ללימוד יומי בגמרא עם ממשק אינטראקטיבי, לוגיקת Backend, טיפול בבאגים באמצעות Sentry ואופטימיזציות בעזרת AI',
              tech: 'Angular • Tailwind • NestJS • MongoDB'
            },
            smartplay: {
              title: 'אתר משחקים חינוכיים',
              desc: 'פלטפורמה למשחקים חינוכיים עם יצירה ב-AI, ללימוד אותיות, מספרים וצורות',
              tech: 'React • Tailwind • Base44'
            },
            meme: {
              title: 'אתר ליצירת ממים',
              desc: 'צור ממים הומוריסטיים עם טקסט, אימוג\'ים ותמונות. כיף וקל!',
              tech: 'Canvas • JavaScript • CSS'
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
        }
      }
    },
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already does escaping
    }
  })

export default i18n
