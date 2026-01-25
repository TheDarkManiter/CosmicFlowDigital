import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="page">
      <Helmet>
        <title>Planes Mensuales | Cosmic Flow Digital</title>
        <meta
          name="description"
          content="Planes mensuales de crecimiento en Cancún, Q. Roo. Mantenimiento, SEO, contenido y optimización para seguir mejorando después del primer mes."
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
          <h2>Planes Mensuales de Crecimiento</h2>
          <p className="lead">Después del primer mes</p>
          <p className="lead">
            La publicidad sin medición es gasto. La medición sin optimización es
            oportunidad perdida.
          </p>
        </div>
        <div className="pricing-grid">
          <article className="pricing-card">
            <p className="pricing-title">Flow Basic</p>
            <p className="pricing-price">$150 USD / mes · aprox. $3,000 MXN</p>
            <ul className="pricing-list">
              <li>Mantenimiento web</li>
              <li>SEO técnico ligero</li>
              <li>Redes sociales: 6 posts</li>
              <li>Seguimiento básico de Pixel</li>
              <li>Monitoreo general</li>
            </ul>
            <Link
              className="cta-button"
              to="/contact?service=mensual&plan=flow-basic"
            >
              Solicitar propuesta
            </Link>
          </article>
          <article className="pricing-card">
            <p className="pricing-title">Flow Growth</p>
            <p className="pricing-price">$275 USD / mes · aprox. $5,500 MXN</p>
            <ul className="pricing-list">
              <li>Mantenimiento web continuo</li>
              <li>SEO on-page básico</li>
              <li>Redes sociales: 10 posts</li>
              <li>Monitoreo y ajustes de Pixel</li>
              <li>Optimización básica de conversiones</li>
              <li>Revisión de formularios y flujos</li>
            </ul>
            <Link
              className="cta-button"
              to="/contact?service=mensual&plan=flow-growth"
            >
              Solicitar propuesta
            </Link>
          </article>
          <article className="pricing-card highlight">
            <p className="package-badge">Recomendado</p>
            <p className="pricing-title">Flow Scale</p>
            <p className="pricing-price">$425 USD / mes · aprox. $8,500 MXN</p>
            <ul className="pricing-list">
              <li>Mantenimiento web prioritario</li>
              <li>SEO on-page + optimización continua</li>
              <li>Ajustes de contenido SEO</li>
              <li>Redes sociales: 14 posts</li>
              <li>Optimización de tasa de conversión (CRO)</li>
              <li>Segmentación por comportamiento</li>
              <li>Acompañamiento estratégico mensual</li>
            </ul>
            <Link
              className="cta-button"
              to="/contact?service=mensual&plan=flow-scale"
            >
              Solicitar propuesta
            </Link>
          </article>
          <article className="pricing-card">
            <p className="pricing-title">Flow Ecosystem</p>
            <p className="pricing-price">$600 USD / mes · aprox. $12,000 MXN</p>
            <ul className="pricing-list">
              <li>Mantenimiento web avanzado</li>
              <li>SEO continuo + mejoras de contenido</li>
              <li>Estrategia de crecimiento orgánico</li>
              <li>Redes sociales: 20 posts</li>
              <li>Gestión y optimización SEA</li>
              <li>Pixel, eventos y segmentación avanzada</li>
              <li>Optimización continua de conversiones</li>
            </ul>
            <p className="pricing-description">⚠️ Inversión publicitaria no incluida.</p>
            <Link
              className="cta-button"
              to="/contact?service=mensual&plan=flow-ecosystem"
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
