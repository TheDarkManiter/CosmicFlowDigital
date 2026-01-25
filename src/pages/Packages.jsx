import { Helmet } from "react-helmet-async";
import PricingCard from "../components/PricingCard";

const Packages = () => {
  const plans = [
    {
      title: "Web Start",
      slug: "web-start",
      price: "Desde $9,500 MXN",
      description: "Ideal para comenzar y presentar tu marca con claridad.",
      items: [
        "Landing o sitio corto con estructura clara",
        "Mensaje comercial y llamados a la acción",
        "Formulario o WhatsApp directo",
      ],
    },
    {
      title: "Web Growth",
      slug: "web-growth",
      price: "Desde $16,500 MXN",
      description: "El más solicitado para convertir visitas en clientes.",
      items: [
        "Secciones pensadas para vender y responder dudas",
        "Contenido optimizado para conversión",
        "Medición básica de resultados",
      ],
      highlight: true,
    },
    {
      title: "Web + SEO",
      slug: "web-seo",
      price: "Desde $24,500 MXN",
      description: "Para atraer visitas orgánicas y sostener crecimiento.",
      items: [
        "SEO base en estructura y contenidos",
        "Secciones estratégicas para posicionar",
        "Revisión y mejoras de contenido",
      ],
    },
    {
      title: "Web + SEO + Redes",
      slug: "web-seo-redes",
      price: "Desde $32,000 MXN",
      description: "Presencia completa para generar flujo constante.",
      items: [
        "Base de contenidos para redes y sitio",
        "Integración con WhatsApp y formularios",
        "Seguimiento y ajustes según objetivos",
      ],
    },
  ];

  return (
    <section className="page">
      <Helmet>
        <title>Paquetes | Cosmic Flow Digital</title>
        <meta
          name="description"
          content="Paquetes de desarrollo web en Cancún. Elige Web Start, Web Growth, Web + SEO o Web + SEO + Redes para impulsar tu marca."
        />
        <meta property="og:title" content="Paquetes | Cosmic Flow Digital" />
        <meta
          property="og:description"
          content="Paquetes de desarrollo web en Cancún. Elige Web Start, Web Growth, Web + SEO o Web + SEO + Redes para impulsar tu marca."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="container">
        <h1>Paquetes</h1>
        <p className="lead">
          Opciones claras para lanzar, crecer y vender con una web profesional.
        </p>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              {...plan}
              ctaLabel="Solicitar propuesta"
              ctaTo={`/contact?package=${plan.slug}&utm_source=site&utm_medium=cta&utm_campaign=packages&utm_content=${plan.slug}`}
            />
          ))}
        </div>
        <div className="contact-card">
          <h2>¿Listo para empezar?</h2>
          <p className="lead">
            Cuéntanos tu objetivo y te recomendamos el paquete ideal para tu
            negocio.
          </p>
          <a
            className="cta-button"
            href="https://wa.me/525578296609"
            target="_blank"
            rel="noreferrer"
          >
            Hablar por WhatsApp
          </a>
        </div>
        <div className="contact-card">
          <h2>Costos externos no incluidos</h2>
          <p className="lead">
            Algunos servicios requieren pagos directos a terceros y no están
            incluidos en los paquetes, salvo que se indique lo contrario.
          </p>
          <ul className="lead-list">
            <li>Dominio web (.com, .mx, etc.)</li>
            <li>Hosting</li>
            <li>Correos profesionales</li>
            <li>Herramientas externas (CRM, email marketing, anuncios)</li>
          </ul>
          <p className="footer-note">
            Estos costos se cotizan por separado y se contratan a nombre del
            cliente.
          </p>
        </div>
        <div className="contact-card">
          <h2>Preguntas frecuentes</h2>
          <ul className="lead-list">
            <li>
              <strong>¿Incluye dominio y hosting?</strong> No, se cotizan por
              separado para que el sitio quede a tu nombre.
            </li>
            <li>
              <strong>¿Cuánto tarda el desarrollo?</strong> Depende del alcance,
              normalmente entre 1 y 3 semanas.
            </li>
            <li>
              <strong>¿Puedo cambiar de paquete?</strong> Sí, puedes escalar si
              tu negocio lo necesita.
            </li>
            <li>
              <strong>¿Ofrecen mantenimiento mensual?</strong> Sí, tenemos
              planes mensuales para web y redes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Packages;
