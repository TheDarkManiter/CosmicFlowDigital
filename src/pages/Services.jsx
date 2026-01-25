import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="page">
      <Helmet>
        <title>Planes Mensuales | Cosmic Flow Digital</title>
        <meta
          name="description"
          content="Planes mensuales para crecer tu marca con contenido, SEO, mantenimiento y campañas. Ads se invierten aparte."
        />
      </Helmet>
      <div className="container">
        <h1>Servicios estratégicos</h1>
        <p className="lead">
          Diseñamos experiencias digitales claras, rápidas y enfocadas en
          resultados de negocio.
        </p>
        <div className="grid-3">
          <article className="feature-card">
            <h3>Branding & experiencia</h3>
            <p>
              Definimos identidad visual y tono para que cada punto de contacto
              se vea profesional y consistente.
            </p>
          </article>
          <article className="feature-card">
            <h3>Web & producto digital</h3>
            <p>
              Construimos sitios y productos web con enfoque en conversión,
              velocidad y confianza.
            </p>
          </article>
          <article className="feature-card">
            <h3>Growth & automatización</h3>
            <p>
              Integramos herramientas que ayudan a captar, ordenar y dar
              seguimiento a tus leads.
            </p>
          </article>
        </div>
      </div>
      <div className="container">
        <div className="section-heading">
          <h2>Planes Mensuales para crecer tu marca</h2>
          <p className="lead">
            Contenido constante, mantenimiento y campañas con medición. Ads se
            invierten aparte (tú decides el presupuesto).
          </p>
        </div>
        <div className="pricing-grid">
          <article className="pricing-card">
            <p className="pricing-title">Monthly Basic</p>
            <p className="pricing-price">$60 USD / mes</p>
            <p className="pricing-description">
              Presencia activa con base sólida.
            </p>
            <ul className="pricing-list">
              <li>1 red social</li>
              <li>6 posts al mes</li>
              <li>Mantenimiento web básico</li>
              <li>SEO ligero</li>
              <li>1 campaña SEA pequeña (config + seguimiento básico)</li>
              <li>Ads no incluidos</li>
            </ul>
            <Link
              className="cta-button"
              to="/contact?service=mensual&plan=monthly-basic&utm_source=services&utm_medium=site&utm_campaign=monthly"
            >
              Solicitar propuesta
            </Link>
          </article>
          <article className="pricing-card">
            <p className="pricing-title">Monthly Growth</p>
            <p className="pricing-price">$100 USD / mes</p>
            <p className="pricing-description">
              Más contenido y mejor segmentación.
            </p>
            <ul className="pricing-list">
              <li>1–2 redes sociales</li>
              <li>12 posts al mes</li>
              <li>SEO on-page básico</li>
              <li>1 campaña más completa (mejor segmentación)</li>
              <li>Optimización ligera mensual</li>
              <li>Ads no incluidos</li>
            </ul>
            <Link
              className="cta-button"
              to="/contact?service=mensual&plan=monthly-growth&utm_source=services&utm_medium=site&utm_campaign=monthly"
            >
              Solicitar propuesta
            </Link>
          </article>
          <article className="pricing-card">
            <p className="pricing-title">Monthly Pro</p>
            <p className="pricing-price">$250 USD / mes</p>
            <p className="pricing-description">
              Seguimiento completo y optimización continua.
            </p>
            <ul className="pricing-list">
              <li>2–3 redes sociales</li>
              <li>20 posts al mes</li>
              <li>SEO continuo</li>
              <li>Seguimiento completo + optimización</li>
              <li>Campañas SEA con mejora continua</li>
              <li>Ads no incluidos</li>
            </ul>
            <Link
              className="cta-button"
              to="/contact?service=mensual&plan=monthly-pro&utm_source=services&utm_medium=site&utm_campaign=monthly"
            >
              Solicitar propuesta
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
