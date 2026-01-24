import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-content header-bar">
        <div className="brand">
          <img
            className="brand-logo"
            src="/logo-cosmic-flow-digital.jpg"
            alt="Cosmic Flow Digital"
          />
          <div>
            <p className="brand-name">Cosmic Flow Digital</p>
            <p className="brand-tagline">Deja tu huella online.</p>
          </div>
        </div>
        <nav className="main-nav">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/services">Servicios</NavLink>
          <NavLink to="/packages">Paquetes</NavLink>
          <NavLink to="/process">Proceso</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </nav>
        <div className="header-actions">
          <NavLink className="header-cta" to="/contact">
            Cotizar
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
