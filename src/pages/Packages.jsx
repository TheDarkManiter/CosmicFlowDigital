import { Helmet } from "react-helmet-async";
import PricingCard from "../components/PricingCard";

const Packages = () => {
  const plans = [
    {
      title: "Flow Start",
      slug: "flow-start",
      price: "$500 USD · aprox. $10,000 MXN",
      description: "Ideal para lanzar y empezar a medir desde el día uno.",
      items: [
        "Landing o sitio corto (hasta 4 secciones)",
        "Mensaje comercial claro y CTAs estratégicos",
        "Integración de formulario o WhatsApp",
        "Diseño responsive y optimizado",
        "SEO técnico inicial",
        "Configuración de Meta Pixel y eventos básicos",
        "Base de segmentación inicial",
        "1 mes incluido: mantenimiento web",
        "1 mes incluido: SEO técnico ligero",
        "1 mes incluido: redes sociales (6 posts)",
        "1 mes incluido: monitoreo básico de conversiones",
      ],
    },
    {
      title: "Flow Growth",
      slug: "flow-growth",
      price: "$900 USD · aprox. $18,000 MXN",
      description: "Más solicitado. Sitio completo con conversión y medición.",
      items: [
        "Sitio web completo (hasta 6–7 secciones)",
        "Estructura enfocada en conversión",
        "Contenido optimizado",
        "Integración con WhatsApp y formularios",
        "SEO on-page base",
        "Configuración completa de Meta Pixel",
        "Eventos personalizados (leads, clics, envíos)",
        "Segmentación inicial para campañas",
        "1 mes incluido: mantenimiento web",
        "1 mes incluido: SEO on-page básico",
        "1 mes incluido: redes sociales (10 posts)",
        "1 mes incluido: ajustes iniciales de conversión",
      ],
      highlight: true,
    },
    {
      title: "Flow Authority",
      slug: "flow-authority",
      price: "$1,350 USD · aprox. $27,000 MXN",
      description: "Web estratégica con base sólida para crecer.",
      items: [
        "Web estratégica con estructura SEO",
        "Optimización de contenidos clave",
        "Preparación para crecimiento orgánico",
        "Base de contenidos para redes y sitio",
        "Pixel + eventos avanzados",
        "Segmentación por comportamiento",
        "Preparación para campañas SEA",
        "1 mes incluido: mantenimiento web",
        "1 mes incluido: SEO continuo inicial",
        "1 mes incluido: redes sociales (14 posts)",
        "1 mes incluido: optimización de tasa de conversión (CRO básica)",
      ],
    },
    {
      title: "Flow Ecosystem",
      slug: "flow-ecosystem",
      price: "$1,750 USD · aprox. $35,000 MXN",
      description: "Ecosistema completo para escalar con datos.",
      items: [
        "Web + SEO estratégico",
        "Automatización básica de leads",
        "Integración avanzada de formularios y WhatsApp",
        "Tracking completo + Pixel + eventos",
        "Segmentación avanzada",
        "Preparación y estructura para SEA",
        "1 mes incluido: mantenimiento web avanzado",
        "1 mes incluido: SEO activo",
        "1 mes incluido: redes sociales (20 posts)",
        "1 mes incluido: optimización continua de conversiones",
      ],
    },
  ];

  return (
    <section className="page">
      <Helmet>
        <title>Paquetes de Lanzamiento | Cosmic Flow Digital</title>
        <meta
          name="description"
          content="Paquetes de lanzamiento en Cancún, Q. Roo. Pago único con 1 mes incluido para medir, optimizar y convertir desde el inicio."
        />
        <meta
          property="og:title"
          content="Paquetes de Lanzamiento | Cosmic Flow Digital"
        />
        <meta
          property="og:description"
          content="Paquetes de lanzamiento en Cancún, Q. Roo. Pago único con 1 mes incluido para medir, optimizar y convertir desde el inicio."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="container">
        <h1>Paquetes de Lanzamiento</h1>
        <p className="lead">
          Pago único · Todos incluyen 1 mes de crecimiento y medición
        </p>
        <div className="contact-card">
          <p className="lead">
            No se puede optimizar lo que no se mide. Por eso todos nuestros
            paquetes incluyen configuración de tracking, pixel y base de
            segmentación.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              {...plan}
              ctaLabel="Solicitar propuesta"
              ctaTo={`/contact?package=${plan.slug}`}
            />
          ))}
        </div>
        <div className="contact-card">
          <h2>Notas importantes</h2>
          <ul className="lead-list">
            <li>Precios en USD como referencia</li>
            <li>Conversión aproximada a MXN</li>
            <li>Inversión en anuncios no incluida</li>
            <li>Herramientas externas se cotizan por separado</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Packages;
