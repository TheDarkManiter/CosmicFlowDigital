import { Helmet } from "react-helmet-async";
import CTA from "../components/CTA";

const Contact = () => {
  return (
    <section className="page">
      <Helmet>
        <title>Contacto | Cosmic Flow Digital</title>
        <meta
          name="description"
          content="Cuéntanos tu objetivo y recibe una propuesta clara. WhatsApp y correo para iniciar tu proyecto."
        />
      </Helmet>
      <div className="container">
        <h1>Contacto</h1>
        <p className="lead">
          Cuéntanos tu objetivo y te respondemos con una propuesta clara y
          enfocada.
        </p>
        <div className="contact-card">
          <p>WhatsApp: +52 55 7829 6609</p>
          <p>Correo: cosmicflowdgt@gmail.com</p>
          <CTA
            label="Hablar por WhatsApp"
            helper="Respuesta rápida en horario laboral (L–V)."
            href="https://wa.me/525578296609"
          />
          <a
            className="cta-button cta-secondary"
            href="mailto:cosmicflowdgt@gmail.com?subject=Quiero%20cotizar%20con%20Cosmic%20Flow%20Digital"
          >
            Escribir por correo
          </a>
        </div>
        <div className="contact-card">
          <h2>Qué enviarnos</h2>
          <ul className="lead-list">
            <li>Nombre y marca</li>
            <li>Objetivo principal del sitio</li>
            <li>Fecha estimada de lanzamiento</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
