import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="page">
      <Helmet>
        <title>Cosmic Flow Digital | Deja tu huella online</title>
        <meta
          name="description"
          content="Desarrollo web y growth en Cancún. Creamos sitios, landing pages y e-commerce listos para convertir visitas en clientes."
        />
        <meta property="og:title" content="Cosmic Flow Digital | Deja tu huella online" />
        <meta
          property="og:description"
          content="Desarrollo web y growth en Cancún. Creamos sitios, landing pages y e-commerce listos para convertir visitas en clientes."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container hero hero--cosmic">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Desarrollo web con enfoque en resultados</p>
            <h1>Deja tu huella online con una web que vende.</h1>
            <p className="lead">
              Somos un estudio que diseña y construye sitios web que se ven bien
              y funcionan mejor. Te ayudamos a atraer clientes, generar leads y
              convertir visitas en ventas con una presencia digital clara y
              profesional.
            </p>
            <ul className="hero-bullets">
              <li>Velocidad que se nota</li>
              <li>SEO + textos que convencen</li>
              <li>Métricas claras</li>
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
              <Link className="cta-button cta-secondary" to="/services">
                Ver servicios
              </Link>
            </div>
            <p className="hero-microcopy">
              Respuesta rápida · Brief sencillo · Propuesta en 24–48 h
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-panel">
              <div className="visual-grid">
                <div className="visual-tile visual-tile--wide" />
                <div className="visual-tile" />
                <div className="visual-tile" />
              </div>
              <div className="visual-glow" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-section">
        <div className="container stack-block">
          <div>
            <p className="eyebrow">Web Start</p>
            <h2>Web Start · Cotización personalizada</h2>
            <p className="subheadline">
              Diseñado para marcas que necesitan salir rápido con una presencia
              clara, profesional y enfocada en conversión.
              Incluye:
            </p>
            <ul className="lead-list">
              <li>Landing page enfocada en conversión</li>
              <li>Formulario de contacto + seguimiento básico</li>
              <li>Diseño mobile-first optimizado</li>
              <li>Base técnica lista para escalar</li>
            </ul>
            <p className="fineprint">
              Los resultados dependen de tu industria, tu inversión y la
              ejecución.
            </p>
          </div>
          <div className="stack-metrics">
            <div className="metric-card">
              <p className="metric-value">+38%</p>
              <p className="metric-label">Leads</p>
            </div>
            <div className="metric-card">
              <p className="metric-value">2.4x</p>
              <p className="metric-label">Retorno</p>
            </div>
            <div className="metric-card">
              <p className="metric-value">1-3</p>
              <p className="metric-label">Semanas de lanzamiento</p>
            </div>
            <div className="metric-card">
              <p className="metric-value">Seguimiento claro</p>
              <p className="metric-label">Control del proceso</p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-section">
        <div className="container">
          <div className="section-heading">
            <h2>Resultados claros. Proceso transparente.</h2>
            <p className="lead">
              Combinamos estrategia, diseño y desarrollo para avanzar rápido sin
              perder calidad.
            </p>
          </div>
          <ul className="trust-list">
            <li>Lanzamiento en 1–3 semanas (según alcance)</li>
            <li>Diseño mobile-first</li>
            <li>SEO técnico + textos que convierten</li>
            <li>Captura de leads + seguimiento (WhatsApp, email, CRM)</li>
            <li>Soporte cercano y mejoras por iteración</li>
          </ul>
        </div>
      </div>

      <div className="home-section">
        <div className="container">
          <div className="section-heading">
            <h2>Soluciones enfocadas en conversión y crecimiento</h2>
            <p className="lead">
              Resumen ejecutivo. El detalle completo vive en Servicios y
              Paquetes.
            </p>
          </div>
          <div className="services-grid">
            <article className="feature-card service-card">
              <span className="service-icon" aria-hidden="true" />
              <h3>Desarrollo Web</h3>
              <p>
                Landing pages y sitios corporativos con diseño profesional,
                carga rápida y enfoque en conversión.
              </p>
            </article>
            <article className="feature-card service-card">
              <span className="service-icon" aria-hidden="true" />
              <h3>E-commerce</h3>
              <p>
                Tiendas optimizadas para convertir: catálogo claro, checkout
                confiable y automatizaciones.
              </p>
            </article>
            <article className="feature-card service-card">
              <span className="service-icon" aria-hidden="true" />
              <h3>Optimización & Growth</h3>
              <p>
                Mejoramos tu experiencia, tus textos y tus métricas para que
                cada visita cuente.
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
            <h2>Paquetes de Landing + Formulario</h2>
            <p className="lead">
              Elige un punto de partida y escala cuando tu negocio lo pida.
            </p>
          </div>
          <div className="packages-grid">
            <article className="package-card">
              <h3>Web Start</h3>
              <p>Para empezar con una landing clara.</p>
            </article>
            <article className="package-card package-card--highlight">
              <p className="package-badge">Más solicitado</p>
              <h3>Web Growth</h3>
              <p>Para generar leads constantes y dar seguimiento.</p>
            </article>
            <article className="package-card">
              <h3>Web + SEO</h3>
              <p>Para campañas y lanzamientos.</p>
            </article>
            <article className="package-card">
              <h3>Web + SEO + Redes</h3>
              <p>Para escalar con seguimiento y automatización.</p>
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
            <h2>Ideas en movimiento, marcas en expansión</h2>
            <p className="lead">
              Selección breve de proyectos en curso. Resultados varían por
              industria y ejecución.
            </p>
          </div>
          <div className="project-grid">
            <article className="feature-card project-card">
              <p className="project-tag">Caso ejemplo (demo interno)</p>
              <h3>Brisa Norte Bistro</h3>
              <p>Reservas y visibilidad local.</p>
              <p className="project-result">+28% reservas online</p>
            </article>
            <article className="feature-card project-card">
              <p className="project-tag">Caso ejemplo (demo interno)</p>
              <h3>Pulse Fit Studio</h3>
              <p>Leads para membresías.</p>
              <p className="project-result">3.1x tasa de registro</p>
            </article>
            <article className="feature-card project-card">
              <p className="project-tag">Caso ejemplo (demo interno)</p>
              <h3>Nexa Realty</h3>
              <p>Prospectos calificados.</p>
              <p className="project-result">+42% leads calificados</p>
            </article>
            <article className="feature-card project-card">
              <p className="project-tag">Caso ejemplo (demo interno)</p>
              <h3>Soluna Market</h3>
              <p>Conversión en carrito.</p>
              <p className="project-result">+19% conversión</p>
            </article>
          </div>
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
