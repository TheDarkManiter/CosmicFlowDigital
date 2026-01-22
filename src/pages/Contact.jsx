import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const packageOptions = useMemo(
    () => [
      { slug: "web-start", label: "Web Start" },
      { slug: "web-growth", label: "Web Growth" },
      { slug: "web-seo", label: "Web + SEO" },
      { slug: "web-seo-redes", label: "Web + SEO + Redes" },
    ],
    []
  );
  const defaultPackageSlug = "web-growth";
  const selectedPackageSlug = useMemo(() => {
    const slug = searchParams.get("package");
    if (slug && packageOptions.some((option) => option.slug === slug)) {
      return slug;
    }
    return defaultPackageSlug;
  }, [packageOptions, searchParams]);

  const [formData, setFormData] = useState({
    package: selectedPackageSlug,
    name: "",
    whatsapp: "",
    email: "",
    business: "",
    objective: "Generar leads",
    message: "",
    consent: false,
  });
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setFormData((prev) => ({ ...prev, package: selectedPackageSlug }));
  }, [selectedPackageSlug]);

  const requiredFields = [
    "package",
    "name",
    "whatsapp",
    "business",
    "objective",
  ];

  const getErrors = (data) => {
    return requiredFields.reduce((acc, field) => {
      const value = data[field];
      if (!value || value.toString().trim() === "") {
        acc[field] = "Este campo es obligatorio.";
      }
      return acc;
    }, {});
  };

  const errors = getErrors(formData);
  const isFormValid = Object.keys(errors).length === 0;

  const packageLabel =
    packageOptions.find((option) => option.slug === formData.package)?.label ||
    "Web Growth";

  const buildMessage = () => {
    const lines = [
      `Hola, soy ${formData.name}. Quiero cotizar el paquete ${packageLabel}.`,
      `Negocio: ${formData.business}.`,
      `Objetivo: ${formData.objective}.`,
      `WhatsApp: ${formData.whatsapp}.`,
    ];

    if (formData.email) {
      lines.push(`Email: ${formData.email}.`);
    }

    if (formData.message) {
      lines.push(`Detalles: ${formData.message}`);
    }

    lines.push(`Consentimiento: ${formData.consent ? "Sí" : "No"}.`);

    return lines.join("\n");
  };

  const messageText = buildMessage();
  const encodedMessage = encodeURIComponent(messageText);
  const mailtoSubject = encodeURIComponent(`Cotización ${packageLabel}`);
  const mailtoHref = `mailto:cosmicflowdgt@gmail.com?subject=${mailtoSubject}&body=${encodedMessage}`;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const touchRequiredFields = () => {
    setTouched((prev) => ({
      ...prev,
      ...requiredFields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {}),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      touchRequiredFields();
      return;
    }
    const whatsappUrl = `https://wa.me/525578296609?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = () => {
    if (!isFormValid) {
      touchRequiredFields();
      return;
    }
    window.location.href = mailtoHref;
  };

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
          Cuéntanos tu objetivo y te respondemos con una propuesta clara en 24–48
          horas.
        </p>
        <div className="contact-card contact-form-card">
          <div className="form-header">
            <h2>Formulario rápido</h2>
            <p className="lead">
              Elige el paquete y dinos lo esencial para prepararte una propuesta
              clara.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="package">Paquete</label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.package && errors.package)}
                >
                  {packageOptions.map((option) => (
                    <option key={option.slug} value={option.slug}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {touched.package && errors.package ? (
                  <span className="form-error">{errors.package}</span>
                ) : null}
              </div>
              <div className="form-field">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.name && errors.name)}
                  required
                />
                {touched.name && errors.name ? (
                  <span className="form-error">{errors.name}</span>
                ) : null}
              </div>
              <div className="form-field">
                <label htmlFor="whatsapp">WhatsApp</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="+52 55 1234 5678"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.whatsapp && errors.whatsapp)}
                  required
                />
                {touched.whatsapp && errors.whatsapp ? (
                  <span className="form-error">{errors.whatsapp}</span>
                ) : null}
              </div>
              <div className="form-field">
                <label htmlFor="email">Email (opcional)</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="business">Negocio / giro</label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Ej. clínica estética, agencia de viajes"
                  value={formData.business}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.business && errors.business)}
                  required
                />
                {touched.business && errors.business ? (
                  <span className="form-error">{errors.business}</span>
                ) : null}
              </div>
              <div className="form-field">
                <label htmlFor="objective">Objetivo</label>
                <select
                  id="objective"
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.objective && errors.objective)}
                  required
                >
                  <option value="Generar leads">Generar leads</option>
                  <option value="Vender en línea">Vender en línea</option>
                  <option value="Posicionarme (SEO)">
                    Posicionarme (SEO)
                  </option>
                  <option value="Lanzar una campaña">
                    Lanzar una campaña
                  </option>
                </select>
                {touched.objective && errors.objective ? (
                  <span className="form-error">{errors.objective}</span>
                ) : null}
              </div>
              <div className="form-field full-width">
                <label htmlFor="message">Mensaje (opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos un poco más..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field full-width form-consent">
                <label className="checkbox-label" htmlFor="consent">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  Acepto ser contactado por WhatsApp o correo.
                </label>
              </div>
            </div>
            <div className="form-actions">
              <button className="cta-button" type="submit">
                Enviar por WhatsApp
              </button>
              <button
                className="cta-button cta-secondary"
                type="button"
                onClick={handleEmailClick}
                disabled={!isFormValid}
              >
                Enviar por correo
              </button>
            </div>
            <div className="form-trust">
              <p>Respuesta rápida en horario laboral.</p>
              <p>Brief sencillo · Propuesta en 24–48 h</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
