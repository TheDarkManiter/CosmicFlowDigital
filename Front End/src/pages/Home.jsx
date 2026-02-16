import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import fbaLogo from "../assets/clients/logo-fighting-bulls-academy.svg";

const Home = () => {
  return (
    <section className="page">
      <Helmet>
        <title>Cosmic Flow Digital | Diseño, tráfico y conversión</title>
        <meta
          name="description"
          content="Diseño web, SEO, contenido y publicidad en Cancún, Q. Roo. Creamos sistemas digitales que atraen, miden y convierten."
        />
        <meta
          property="og:title"
          content="Cosmic Flow Digital | Diseño, tráfico y conversión"
        />
        <meta
          property="og:description"
          content="Diseño web, SEO, contenido y publicidad en Cancún, Q. Roo. Creamos sistemas digitales que atraen, miden y convierten."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container hero hero--cosmic">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Cosmic Flow Digital</h1>
            <h2 className="eyebrow">
              Diseño, tráfico y conversión en un solo flujo
            </h2>
            <p className="lead">
              Creamos sistemas digitales que atraen, miden y convierten. Web,
              contenido, SEO y publicidad trabajan juntos, no por separado.
            </p>
            <ul className="hero-bullets">
              <li>Web, contenido, SEO y ads alineados</li>
              <li>Tracking y eventos desde el día uno</li>
              <li>Mensajes claros para convertir</li>
              <li>WhatsApp, formularios e integraciones</li>
            </ul>
            <div className="hero-actions">
              <a
                className="cta-button"
                href="https://wa.me/525578296609"
                target="_blank"
                rel="noreferrer"
              >
                Hablemos por WhatsApp
              </a>
              <Link className="cta-button cta-secondary" to="/contact">
                Agendar llamada
              </Link>
            </div>
            <p className="hero-microcopy">
              Respuesta rápida · Brief sencillo · Propuesta en 24–48 h
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-panel">
              <div className="visual-grid">
                <img
                  className="visual-tile visual-tile--wide"
                  src="/promera%20imegen.webp"
                  alt="Composición premium de interfaz digital para crecimiento"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="visual-tile"
                  src="/segunda%20imagen.webp"
                  alt="Detalle de experiencia web optimizada para conversión"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="visual-tile"
                  src="/tercera%20imagen.webp"
                  alt="Texturas y luces de marca con estilo cósmico"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="visual-glow" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-section">
        <div className="container">
          <div className="section-heading">
            <h2>Paquetes de Desarrollo Web</h2>
            <p className="lead">
              Elige un punto de partida claro, con precios simples y enfoque en
              conversión.
            </p>
          </div>
          <div className="packages-grid">
            <article className="package-card">
              <h3>Landing Básica</h3>
              <p>Desde $300 USD</p>
              <p>Presencia simple para empezar.</p>
            </article>
            <article className="package-card package-card--highlight">
              <p className="package-badge">Más solicitado</p>
              <h3>Web Conversion</h3>
              <p>Desde $800 USD</p>
              <p>WhatsApp + formulario para capturar leads.</p>
            </article>
            <article className="package-card">
              <h3>Web + SEO + Leads</h3>
              <p>Desde $1000 USD</p>
              <p>SEO mejorado y base de leads para campañas.</p>
            </article>
          </div>
          <Link className="text-link" to="/packages">
            Ver paquetes
          </Link>
        </div>
      </div>

      <div className="home-section">
        <div className="container">
          <div className="section-heading">
            <h2>Tráfico con intención, crecimiento con medición</h2>
            <p className="lead">
              Tráfico sin estrategia no convierte.
              <br />
              Publicidad sin medición no escala.
              <br />
              En Cosmic Flow Digital conectamos web, SEO, contenido y ads para
              mejorar la tasa de conversión, no solo la visibilidad.
            </p>
          </div>
          <ul className="trust-list">
            <li>Tracking y eventos desde el inicio</li>
            <li>Diseño enfocado en conversión</li>
            <li>SEO técnico + contenido persuasivo</li>
            <li>Captura de leads con WhatsApp, formularios o CRM</li>
            <li>Optimización continua por iteración</li>
          </ul>
        </div>
      </div>

      <div className="home-section">
        <div className="container">
          <div className="section-heading">
            <h2>Un solo sistema, cuatro frentes alineados</h2>
            <p className="lead">
              La estrategia vive en cada punto de contacto, no en piezas sueltas.
            </p>
          </div>
          <div className="services-grid">
            <article className="feature-card service-card">
              <span className="service-icon" aria-hidden="true" />
              <h3>Web estratégica</h3>
              <p>
                Sitios y landings que convierten con estructura clara y CTA
                efectivos.
              </p>
            </article>
            <article className="feature-card service-card">
              <span className="service-icon" aria-hidden="true" />
              <h3>Contenido + SEO</h3>
              <p>
                Mensajes que posicionan y persuaden para sostener el crecimiento.
              </p>
            </article>
            <article className="feature-card service-card">
              <span className="service-icon" aria-hidden="true" />
              <h3>Ads + medición</h3>
              <p>
                Segmentación, eventos y datos que permiten optimizar cada peso.
              </p>
            </article>
          </div>
          <Link className="text-link" to="/services">
            Ver servicios y paquetes
          </Link>
        </div>
      </div>

      <div className="home-section">
        <div className="container">
          <div className="section-heading">
            <h2>Ideas en movimiento, marcas en expansión</h2>
            <p className="lead">
              Selección breve de proyectos en curso. Resultados varían por
              industria y ejecución.
            </p>
          </div>
          <div className="project-grid">
            <article className="feature-card project-card">
              <p className="project-tag">Cliente</p>
              <div className="project-header">
                <img
                  className="project-logo"
                  src={fbaLogo}
                  alt="Logo Fighting Bulls Academy"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h3>Fighting Bulls Academy</h3>
                  <p>
                    Sitio web enfocado en conversión para academia de artes
                    marciales.
                  </p>
                </div>
              </div>
              <p className="project-result">
                Web responsive · CTA a WhatsApp · Estructura clara
              </p>
              <a
                className="text-link project-link"
                href="https://fightingbullsacademy.pages.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Ver sitio
              </a>
            </article>
            <article className="feature-card project-card">
              <p className="project-tag">Demo interno</p>
              <h3>Pulse Fit Studio</h3>
              <p>Leads para membresías.</p>
              <p className="project-result">Estructura lista para leads</p>
            </article>
            <article className="feature-card project-card">
              <p className="project-tag">Demo interno</p>
              <h3>Nexa Realty</h3>
              <p>Prospectos calificados.</p>
              <p className="project-result">Calificación de prospectos</p>
            </article>
            <article className="feature-card project-card">
              <p className="project-tag">Demo interno</p>
              <h3>Soluna Market</h3>
              <p>Conversión en carrito.</p>
              <p className="project-result">Checkout claro y confiable</p>
            </article>
          </div>
        </div>
      </div>

      <div className="home-section">
        <div className="container">
          <div className="section-heading">
            <h2>Crecimiento mensual</h2>
            <p className="lead">
              Planes mensuales de redes, SEO y campañas con medición.
            </p>
          </div>
          <ul className="lead-list">
            <li>6/12/20 posts + campaña SEA</li>
            <li>Ads aparte (tú decides el presupuesto)</li>
          </ul>
          <Link className="text-link" to="/services">
            Ver planes mensuales
          </Link>
        </div>
      </div>

      <div className="home-section">
        <div className="container final-cta">
          <div>
            <p className="eyebrow">Siguiente paso</p>
            <h2>Construyamos tu presencia digital con impacto real</h2>
            <p className="lead">
              Cuéntanos tu objetivo y te proponemos un plan claro, medible y
              alineado con tu marca.
            </p>
          </div>
          <div className="hero-actions">
            <a
              className="cta-button"
              href="https://wa.me/525578296609"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp directo
            </a>
            <Link className="cta-button cta-secondary" to="/contact">
              Agendar llamada
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
