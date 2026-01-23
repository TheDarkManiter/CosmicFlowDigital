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
  const packageMessageBySlug = useMemo(
    () => ({
      "web-start": "quiero una presencia profesional clara",
      "web-growth": "quiero leads constantes y seguimiento",
      "web-seo": "quiero posicionarme en Google y crecer orgánico",
      "web-seo-redes": "quiero coherencia web+redes para crecer marca",
    }),
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
  const utmSource = searchParams.get("utm_source");
  const utmMedium = searchParams.get("utm_medium");
  const utmCampaign = searchParams.get("utm_campaign");
  const utmContent = searchParams.get("utm_content");
  const utmValues = [utmSource, utmMedium, utmCampaign, utmContent];
  const hasUtm = utmValues.some(Boolean);
  const utmLine = utmValues.map((value) => value || "-").join("/");

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
  const [step, setStep] = useState(1);

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
  const step1Fields = ["package", "business", "objective"];

  const getErrors = (data, fields = requiredFields) => {
    return fields.reduce((acc, field) => {
      const value = data[field];
      if (!value || value.toString().trim() === "") {
        acc[field] = "Este campo es obligatorio.";
      }
      return acc;
    }, {});
  };

  const errors = getErrors(formData);
  const step1Errors = getErrors(formData, step1Fields);
  const isFormValid = Object.keys(errors).length === 0;
  const isStep1Valid = Object.keys(step1Errors).length === 0;

  const packageLabel =
    packageOptions.find((option) => option.slug === formData.package)?.label ||
    "Web Growth";

  const buildMessage = () => {
    const packageIntent =
      packageMessageBySlug[formData.package] || packageMessageBySlug["web-growth"];
    const lines = [
      `Hola, soy ${formData.name}.`,
      `Paquete: ${packageLabel} (${packageIntent}).`,
      `Negocio: ${formData.business}.`,
      `Objetivo: ${formData.objective}.`,
      `WhatsApp: ${formData.whatsapp}.`,
    ];

    if (formData.email) {
      lines.push(`Email: ${formData.email}.`);
    }

    lines.push(
      `Detalles: ${
        formData.message && formData.message.trim()
          ? formData.message
          : "Sin comentarios adicionales."
      }`
    );

    lines.push(`Consentimiento: ${formData.consent ? "Sí" : "No"}.`);
    if (hasUtm) {
      lines.push(`UTM: ${utmLine}`);
    }

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

  const touchFields = (fields) => {
    setTouched((prev) => ({
      ...prev,
      ...fields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {}),
    }));
  };

  const handleContinue = () => {
    if (!isStep1Valid) {
      touchFields(step1Fields);
      return;
    }
    setStep(2);
  };

  const runIfValid = (action) => {
    if (!isFormValid) {
      touchFields(requiredFields);
      return;
    }
    action();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runIfValid(() => {
      const whatsappUrl = `https://wa.me/525578296609?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  };

  const handleEmailClick = () => {
    runIfValid(() => {
      window.location.href = mailtoHref;
    });
  };

  const handleFormSubmit = (event) => {
    if (step === 1) {
      event.preventDefault();
      handleContinue();
      return;
    }
    handleSubmit(event);
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
            <div className="step-indicator" role="list">
              <span
                className={step === 1 ? "step active" : "step"}
                aria-current={step === 1 ? "step" : undefined}
              >
                Paso 1 de 2 · Tu proyecto
              </span>
              <span
                className={step === 2 ? "step active" : "step"}
                aria-current={step === 2 ? "step" : undefined}
              >
                Paso 2 de 2 · Contacto
              </span>
            </div>
            <h2>Formulario rápido</h2>
            <p className="lead">
              Elige el paquete y dinos lo esencial para prepararte una propuesta
              clara. Toma menos de 60 segundos.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            {step === 1 ? (
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
                    required
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
                <div className="form-field full-width">
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
              </div>
            ) : (
              <div className="form-grid">
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
            )}
            <div className="form-actions">
              {step === 1 ? (
                <button
                  className="cta-button"
                  type="button"
                  onClick={handleContinue}
                  disabled={!isStep1Valid}
                >
                  Continuar
                </button>
              ) : (
                <>
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
                </>
              )}
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
