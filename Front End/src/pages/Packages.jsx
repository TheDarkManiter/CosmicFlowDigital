import { Helmet } from "react-helmet-async";
import PricingCard from "../components/PricingCard";

const Packages = () => {
  const plans = [
    {
      title: "Landing Básica",
      slug: "web-landing-basic",
      price: "Desde $300 USD",
      description:
        "Una landing profesional para comenzar con presencia online clara y confiable.",
      items: [
        "1 página (hero + propuesta + contacto)",
        "Botón a WhatsApp",
        "Diseño responsive",
        "SEO mínimo (title + description)",
        "Publicación online",
      ],
      ctaTo:
        "/contact?package=web-landing-basic&utm_source=packages&utm_medium=site&utm_campaign=web",
    },
    {
      title: "Web Conversion",
      slug: "web-conversion",
      price: "Desde $800 USD",
      description: "Más enfoque en conversión y captación real de clientes.",
      items: [
        "Landing o sitio corto (3-4 secciones)",
        "WhatsApp + formulario de leads",
        "Copy optimizado con CTAs estratégicos",
        "SEO base (estructura + headings)",
        "Tracking básico (medición inicial)",
      ],
      ctaTo:
        "/contact?package=web-conversion&utm_source=packages&utm_medium=site&utm_campaign=web",
    },
    {
      title: "Web + SEO + Leads (BD)",
      slug: "web-seo-leads",
      price: "Desde $1000 USD",
      description:
        "SEO más trabajado + backend con base de datos para campañas y seguimiento.",
      items: [
        "Sitio completo (5-7 secciones)",
        "SEO on-page mejorado",
        "Backend + base de datos de leads",
        "Formularios conectados",
        "Pixel + eventos básicos (Lead/Contact/WhatsAppClick)",
      ],
      ctaTo:
        "/contact?package=web-seo-leads&utm_source=packages&utm_medium=site&utm_campaign=web",
    },
    {
      title: "E-commerce Completo",
      slug: "web-ecommerce",
      price: "Desde $1500 USD",
      description: "Tienda online lista para vender y escalar.",
      items: [
        "Catálogo + checkout",
        "Integración de pagos (según plataforma)",
        "SEO base para productos",
        "Captura de leads + medición",
        "Preparado para campañas",
      ],
      ctaTo:
        "/contact?package=web-ecommerce&utm_source=packages&utm_medium=site&utm_campaign=web",
    },
  ];

  return (
    <section className="page">
      <Helmet>
        <title>Paquetes de Desarrollo Web | Cosmic Flow Digital</title>
        <meta
          name="description"
          content="Paquetes de desarrollo web con pago único. Sitios modernos, rápidos y estratégicos que comunican claro, capturan leads y se preparan para escalar con medición."
        />
        <meta
          property="og:title"
          content="Paquetes de Desarrollo Web | Cosmic Flow Digital"
        />
        <meta
          property="og:description"
          content="Paquetes de desarrollo web con pago único. Sitios modernos, rápidos y estratégicos que comunican claro, capturan leads y se preparan para escalar con medición."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="container">
        <h1>Paquetes de Desarrollo Web</h1>
        <p className="lead">Pago único · Web lista para convertir y crecer.</p>
        <p className="lead">
          Construimos sitios modernos, rápidos y estratégicos que comunican
          claro, capturan leads y se preparan para escalar con medición.
        </p>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <PricingCard
              key={plan.slug}
              {...plan}
              ctaLabel="Solicitar propuesta"
            />
          ))}
        </div>
        <div className="contact-card">
          <h2>Notas importantes</h2>
          <ul className="lead-list">
            <li>La inversión en anuncios no está incluida.</li>
            <li>
              Costos externos como dominio, hosting o herramientas se cotizan
              por separado.
            </li>
            <li>
              Los tiempos de entrega dependen del alcance y entregables
              acordados.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Packages;
