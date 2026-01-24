import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/logo-cosmic-flow-digital.jpg"
            alt="Cosmic Flow Digital"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="footer-title">Cosmic Flow Digital</p>
            <p className="footer-note">Desarrollo web · E-commerce · Growth</p>
            <p className="footer-legal">
              Aviso de privacidad · Términos (cuando estén listos)
            </p>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/services">Servicios</Link>
          <Link to="/packages">Paquetes</Link>
          <Link to="/process">Proceso</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {year} Cosmic Flow Digital</p>
      </div>
    </footer>
  );
};

export default Footer;
