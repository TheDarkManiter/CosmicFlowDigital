import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            ✦
          </span>
          <div>
            <p className="brand-name">Cosmic Flow Digital</p>
            <p className="brand-tagline">Crecimiento digital con visión galáctica</p>
          </div>
        </div>
        <nav className="main-nav">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/services">Servicios</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/process">Proceso</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
