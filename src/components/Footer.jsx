import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-brand-mark">
            <span className="_poweredText_1y24i_155">Powered by</span>
            <img
              className="footer-logo"
              src="/logo-cosmic-flow-digital.jpg"
              alt="Cosmic Flow Digital"
              loading="lazy"
              decoding="async"
            />
            <div className="_powered_1y24i_141">
              <span className="_poweredText_1y24i_155">Desarrollado por</span>
              <p className="_poweredName_1y24i_183">
                ISC Luis M Santa Maria
              </p>
            </div>
          </div>
          <div>
            <p className="footer-title">Cosmic Flow Digital</p>
            <p className="footer-note">
              Diseño, tráfico y conversión en un solo flujo.
            </p>
            <p className="footer-note">Cancún, Q. Roo.</p>
            <p className="footer-legal">
              Aviso de privacidad · Términos (cuando estén listos)
            </p>
          </div>
        </div>
        <div className="footer-links">
          <span className="footer-title">Explorar</span>
          <Link to="/services">Planes mensuales</Link>
          <Link to="/packages">Paquetes web</Link>
          <Link to="/process">Proceso</Link>
          <Link to="/contact">Contacto</Link>
        </div>
        <div className="footer-links">
          <span className="footer-title">Contacto directo</span>
          <a
            href="https://wa.me/525578296609"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <Link to="/contact">Solicitar propuesta</Link>
          <span className="footer-title footer-title--spaced">Síguenos</span>
          <div className="footer-social">
            <a
              href="#"
              aria-label="Instagram (próximamente)"
              aria-disabled="true"
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.5 7a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 16.5 7z" />
                <path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.81 4.81 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.11 3.11 0 0 1 12 15.1z" />
                <path d="M17.7 1H6.3A5.3 5.3 0 0 0 1 6.3v11.4A5.3 5.3 0 0 0 6.3 23h11.4a5.3 5.3 0 0 0 5.3-5.3V6.3A5.3 5.3 0 0 0 17.7 1zm3.1 16.7a3.1 3.1 0 0 1-3.1 3.1H6.3a3.1 3.1 0 0 1-3.1-3.1V6.3a3.1 3.1 0 0 1 3.1-3.1h11.4a3.1 3.1 0 0 1 3.1 3.1z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook (próximamente)"
              aria-disabled="true"
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 8.6V6.8c0-.6.4-.8.7-.8h2V3.1h-2.7c-3 0-3.7 2.2-3.7 3.6v1.9H8v2.9h1.8V21h3.3v-9.5h2.5l.4-2.9z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn (próximamente)"
              aria-disabled="true"
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zm-1.6 17h3.2V9.4H3.38zM9.1 9.4v11.1h3.2v-6.2c0-3.3 4.2-3.6 4.2 0v6.2h3.2v-7.4c0-5.6-6.4-5.4-7.4-2.6V9.4z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok (próximamente)"
              aria-disabled="true"
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.6 3.5c.6 1.1 1.6 1.9 2.9 2.1v3a6.1 6.1 0 0 1-2.9-.7v6.1a5.3 5.3 0 1 1-5.3-5.3c.4 0 .8 0 1.2.1v3.2a2.2 2.2 0 1 0 1.7 2.1V3.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {year} Cosmic Flow Digital</p>
      </div>
    </footer>
  );
};

export default Footer;
