import CTA from "../components/CTA";

const Home = () => {
  return (
    <section className="page">
      <div className="container hero">
        <div>
          <p className="eyebrow">Agencia digital boutique</p>
          <h1>
            Base técnica y estratégica para escalar tu marca con visión de
            futuro.
          </h1>
          <p className="lead">
            Cosmic Flow Digital combina estrategia, diseño y tecnología para
            construir experiencias de alto nivel. Esta es una base lista para
            conectar con tu stack real.
          </p>
          <div className="hero-actions">
            <CTA
              label="Agenda una llamada"
              helper="Placeholder: conecta tu canal oficial de contacto."
              href="#"
            />
            <CTA label="Ver servicios" href="/services" />
          </div>
        </div>
        <div className="hero-card">
          <p className="hero-card-title">Checklist inicial</p>
          <ul>
            <li>Arquitectura React + Vite preparada para crecer.</li>
            <li>Rutas listas para SEO y marketing.</li>
            <li>Estilos escalables con variables CSS.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
