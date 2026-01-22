import { Helmet } from "react-helmet-async";

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
    </section>
  );
};

export default Services;
