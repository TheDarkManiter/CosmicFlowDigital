import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="page">
      <Helmet>
        <title>Servicios | Cosmic Flow Digital</title>
        <meta
          name="description"
          content="Landing pages, sitios corporativos y e-commerce con enfoque en conversión, claridad y crecimiento. UX/UI, copy, SEO base, analítica e integraciones."
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
        <h2>Planes mensuales de crecimiento y mantenimiento</h2>
        <p className="lead">
          Servicios recurrentes para que tu web y tus redes trabajen de forma
          constante, sin que tengas que preocuparte por la parte técnica o de
          contenido.
        </p>
        <div className="pricing-grid">
          <article className="pricing-card">
            <p className="pricing-title">Manejo de Redes Sociales</p>
            <p className="pricing-price">Desde $3,500 MXN / mes</p>
            <ul className="pricing-list">
              <li>Gestión de 1 o 2 redes sociales</li>
              <li>Calendario mensual de contenido</li>
              <li>Publicaciones enfocadas en visibilidad y marca</li>
              <li>Copy y diseño alineado a tu identidad</li>
              <li>Respuesta básica a mensajes (horario laboral)</li>
            </ul>
            <Link
              className="cta-button"
              to="/contact?service=mensual&plan=redes"
            >
              Solicitar propuesta
            </Link>
          </article>
          <article className="pricing-card">
            <p className="pricing-title">Mantenimiento Web</p>
            <p className="pricing-price">Desde $2,500 MXN / mes</p>
            <ul className="pricing-list">
              <li>Revisión y mantenimiento del sitio</li>
              <li>Ajustes menores de contenido</li>
              <li>Revisión de formularios y enlaces</li>
              <li>Soporte técnico básico</li>
              <li>Monitoreo general del sitio</li>
            </ul>
            <Link
              className="cta-button"
              to="/contact?service=mensual&plan=mantenimiento"
            >
              Solicitar propuesta
            </Link>
          </article>
          <article className="pricing-card highlight">
            <p className="package-badge">Recomendado</p>
            <p className="pricing-title">Web + Redes (Mensual)</p>
            <p className="pricing-price">Desde $8,500 MXN / mes</p>
            <ul className="pricing-list">
              <li>Manejo de redes sociales</li>
              <li>Mantenimiento web</li>
              <li>Soporte prioritario</li>
              <li>Acompañamiento continuo</li>
            </ul>
            <p className="pricing-description">
              Recomendado para marcas que quieren crecer sin fricción.
            </p>
            <Link
              className="cta-button"
              to="/contact?service=mensual&plan=web-redes"
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
