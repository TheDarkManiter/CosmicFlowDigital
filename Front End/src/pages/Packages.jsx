import { Helmet } from "react-helmet-async";
import PricingCard from "../components/PricingCard";

const Packages = () => {
  const plans = [
    {
      title: "Landing Básica",
      slug: "web-landing-basic",
      price: "$100 USD",
      description: "Una landing sencilla para empezar con presencia online clara.",
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
      price: "$300 USD",
      description:
        "Más enfoque en conversión: WhatsApp + formulario para capturar leads.",
      items: [
        "Landing o sitio corto (3–4 secciones)",
        "Botón a WhatsApp + formulario de leads",
        "Copy claro con CTAs estratégicos",
        "SEO básico (estructura + headings)",
        "Tracking básico (medición inicial)",
      ],
      ctaTo:
        "/contact?package=web-conversion&utm_source=packages&utm_medium=site&utm_campaign=web",
    },
    {
      title: "Web + SEO + Leads (BD)",
      slug: "web-seo-leads",
      price: "$600 USD",
      description:
        "SEO más trabajado + backend con base de datos para campañas y seguimiento de leads.",
      items: [
        "Sitio completo (5–7 secciones)",
        "SEO on-page mejorado (textos clave + estructura)",
        "Backend + base de datos de leads",
        "Formularios conectados (campañas)",
        "Pixel + eventos básicos (Lead/Contact/WhatsAppClick)",
      ],
      ctaTo:
        "/contact?package=web-seo-leads&utm_source=packages&utm_medium=site&utm_campaign=web",
    },
    {
      title: "E-commerce Completo",
      slug: "web-ecommerce",
      price: "$1200 USD",
      description:
        "Tienda online completa con conversión, medición y base para escalar.",
      items: [
        "Catálogo + checkout",
        "Pagos (según plataforma)",
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
          content="Paquetes de desarrollo web con pago único. Sitios modernos, rápidos y listos para convertir y crecer con medición."
        />
        <meta
          property="og:title"
          content="Paquetes de Desarrollo Web | Cosmic Flow Digital"
        />
        <meta
          property="og:description"
          content="Paquetes de desarrollo web con pago único. Sitios modernos, rápidos y listos para convertir y crecer con medición."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="container">
        <h1>Paquetes de Desarrollo Web</h1>
        <p className="lead">Pago único · Web lista para convertir y crecer.</p>
        <p className="lead">
          Construimos sitios modernos y rápidos que comunican claro, capturan
          leads y se preparan para escalar con medición.
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
            <li>Inversión en anuncios NO incluida.</li>
            <li>
              Costos externos (dominio/hosting/herramientas) se cotizan por
              separado.
            </li>
            <li>Los tiempos dependen del alcance y entregables.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Packages;
