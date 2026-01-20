import CTA from "../components/CTA";

const Contact = () => {
  return (
    <section className="page">
      <div className="container">
        <h1>Contacto</h1>
        <p className="lead">
          Placeholder: agrega tus canales oficiales (correo, teléfono,
          formulario o WhatsApp).
        </p>
        <div className="contact-card">
          <p>
            Email oficial: <span className="placeholder">pendiente</span>
          </p>
          <p>
            WhatsApp: <span className="placeholder">pendiente</span>
          </p>
          <CTA
            label="Solicitar contacto"
            helper="Placeholder: enlaza a tu CRM o formulario real."
            href="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
