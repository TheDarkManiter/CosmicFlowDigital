import { Helmet } from "react-helmet-async";

const Process = () => {
  return (
    <section className="page">
      <Helmet>
        <title>Proceso | Cosmic Flow Digital</title>
        <meta
          name="description"
          content="Un proceso claro para lanzar rápido y escalar con calidad: estrategia, diseño, desarrollo, medición y mejora continua."
        />
      </Helmet>
      <div className="container">
        <h1>Proceso de trabajo</h1>
        <p className="lead">
          Metodología clara, transparente y enfocada en resultados reales.
        </p>
        <ol className="process-list">
          <li>
            <h3>Descubrimiento</h3>
            <p>
              Revisamos tu negocio, tu oferta y tus objetivos para definir el
              enfoque correcto.
            </p>
          </li>
          <li>
            <h3>Diseño estratégico</h3>
            <p>
              Construimos la narrativa, la estructura y el flujo para convertir
              visitas en clientes.
            </p>
          </li>
          <li>
            <h3>Implementación</h3>
            <p>
              Diseñamos y desarrollamos con velocidad, cuidando performance y
              detalles.
            </p>
          </li>
          <li>
            <h3>Evolución</h3>
            <p>Medimos, ajustamos y mejoramos para seguir creciendo contigo.</p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Process;
