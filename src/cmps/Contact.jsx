import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = ({ t }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll">{t.nav.contact}</h2>
        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <div className="contact-links">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=evyatar.szlar@gmail.com" target="_blank" rel="noopener noreferrer" data-tooltip={t.contact.mail}>
                <Mail size={24} />
              </a>
              <a href="https://github.com/evyatarshlar" target="_blank" rel="noopener noreferrer" data-tooltip={t.contact.github}>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/evyatar-shlar-62074030b/" target="_blank" rel="noopener noreferrer" data-tooltip={t.contact.linkedin}>
                <Linkedin size={24} />
              </a>
              <a href="https://wa.me/972537220413" target="_blank" rel="noopener noreferrer" data-tooltip={t.contact.whatsapp}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347M11.99 0C5.373 0 0 5.373 0 11.99c0 2.114.552 4.162 1.6 5.975L0 24l6.211-1.584a11.93 11.93 0 0 0 5.778 1.474h.005c6.616 0 11.99-5.373 11.99-11.99S18.607 0 11.99 0" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;