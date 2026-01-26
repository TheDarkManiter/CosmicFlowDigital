import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${isCompact ? " is-compact" : ""}`}>
      <div className="container header-content header-bar">
        <div className="brand">
          <img
            className="brand-logo"
            src="/logo-cosmic-flow-digital.jpg"
            alt="Cosmic Flow Digital"
          />
          <div>
            <p className="brand-name">Cosmic Flow Digital</p>
            <p className="brand-tagline">Marketing Digital</p>
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
