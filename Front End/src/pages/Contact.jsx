import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "http://localhost:3000")
    .replace(/\/$/, "");
  const packageOptions = useMemo(
    () => [
      { slug: "web-landing-basic", label: "Landing Básica (Web)" },
      { slug: "web-conversion", label: "Web Conversion (Web)" },
      { slug: "web-seo-leads", label: "Web + SEO + Leads (BD)" },
      { slug: "web-ecommerce", label: "E-commerce Completo (Web)" },
    ],
    []
  );
  const monthlyOptions = useMemo(
    () => [
      {
        slug: "monthly-basic",
        label: "Monthly Basic (Mensual) — 6 posts + campaña",
      },
      {
        slug: "monthly-growth",
        label: "Monthly Growth (Mensual) — 12 posts + campaña",
      },
      {
        slug: "monthly-pro",
        label: "Monthly Pro (Mensual) — 20 posts + seguimiento",
      },
    ],
    []
  );
  const monthlyPlanByParam = useMemo(
    () => ({
      "monthly-basic": "monthly-basic",
      "monthly-growth": "monthly-growth",
      "monthly-pro": "monthly-pro",
    }),
    []
  );
  const allOptions = useMemo(
    () => [...packageOptions, ...monthlyOptions],
    [monthlyOptions, packageOptions]
  );
  const packageMessageBySlug = useMemo(
    () => ({
      "web-landing-basic": "quiero una landing sencilla para empezar",
      "web-conversion": "quiero captar leads con WhatsApp y formulario",
      "web-seo-leads": "quiero SEO más fuerte y una base de leads para campañas",
      "web-ecommerce": "quiero vender en línea con e-commerce completo",
      "monthly-basic": "quiero presencia mensual con contenido y campaña básica",
      "monthly-growth": "quiero crecer con más contenido y mejor campaña",
      "monthly-pro": "quiero seguimiento completo y optimización continua",
    }),
    []
  );
  const defaultPackageSlug = "web-conversion";
  const selectedPackageSlug = useMemo(() => {
    const slug = searchParams.get("package");
    if (slug && allOptions.some((option) => option.slug === slug)) {
      return slug;
    }
    const service = searchParams.get("service");
    const plan = searchParams.get("plan");
    if (service === "mensual" && plan && monthlyPlanByParam[plan]) {
      return monthlyPlanByParam[plan];
    }
    return defaultPackageSlug;
  }, [allOptions, defaultPackageSlug, monthlyPlanByParam, searchParams]);
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, package: selectedPackageSlug }));
  }, [selectedPackageSlug]);

  const requiredFields = [
    "package",
    "name",
    "whatsapp",
    "business",
    "objective",
    "consent",
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
  const isEmailValid = Boolean(formData.email && formData.email.trim());
  const isEmailFormValid = isFormValid && isEmailValid;

  const packageLabel =
    allOptions.find((option) => option.slug === formData.package)?.label ||
    "Web Conversion";

  const buildMessage = () => {
    const packageIntent =
      packageMessageBySlug[formData.package] ||
      packageMessageBySlug["web-conversion"];
    const isMonthly = monthlyOptions.some(
      (option) => option.slug === formData.package
    );
    const selectionLabel = isMonthly ? "Plan Mensual" : "Paquete Web";
    const lines = [
      `Hola, soy ${formData.name}.`,
      `Tipo: ${selectionLabel}.`,
      `Plan seleccionado: ${packageLabel} (${packageIntent}).`,
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

  const runIfValid = async (action) => {
    if (!isFormValid) {
      touchFields(requiredFields);
      return;
    }
    await action();
  };

  const runIfValidEmail = async (action) => {
    if (!isEmailFormValid) {
      touchFields([...requiredFields, "email"]);
      return;
    }
    await action();
  };

  const sendLead = async () => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    try {
      setIsSubmitting(true);
      setSubmitError("");
      setSubmitSuccess(false);

      const payload = {
        package_slug: formData.package,
        business: formData.business.trim(),
        objective: formData.objective,
        name: formData.name.trim(),
        whatsapp: formData.whatsapp.trim(),
        email: formData.email ? formData.email.trim() : undefined,
        message: formData.message ? formData.message.trim().slice(0, 2000) : undefined,
        consent: Boolean(formData.consent),
        utm_source: utmSource || undefined,
        utm_medium: utmMedium || undefined,
        utm_campaign: utmCampaign || undefined,
        utm_content: utmContent || undefined,
      };

      const response = await fetch(`${apiBaseUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) {
        let errorMessage = "No se pudo enviar el formulario.";
        try {
          const data = await response.json();
          if (data && data.message) {
            errorMessage = data.message;
          }
        } catch {
          // Ignore JSON parse errors.
        }
        throw new Error(errorMessage);
      }

      setSubmitSuccess(true);
      return true;
    } catch (error) {
      setSubmitError(error.message || "No se pudo enviar el formulario.");
      return false;
    } finally {
      clearTimeout(timeout);
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await runIfValid(async () => {
      const sent = await sendLead();
      const whatsappUrl = `https://wa.me/525578296609?text=${encodedMessage}`;
      if (!sent) {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        return;
      }
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  };

  const handleEmailClick = async () => {
    await runIfValidEmail(async () => {
      const sent = await sendLead();
      if (!sent) {
        window.location.href = mailtoHref;
        return;
      }
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
          Cuéntanos tu objetivo y te respondemos con una propuesta clara en
          24–48 horas.
        </p>
        <p className="lead">
          Si buscas desarrollo web, manejo de redes o mantenimiento mensual,
          cuéntanos tu objetivo y te orientamos.
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
              Elige el servicio o paquete y dinos lo esencial para prepararte
              una propuesta clara. Toma menos de 60 segundos.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            {step === 1 ? (
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="package">Servicio o paquete</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(touched.package && errors.package)}
                    required
                  >
                    {allOptions.map((option) => (
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
                    <option value="Posicionarme (SEO)">Posicionarme (SEO)</option>
                    <option value="Lanzar una campaña">Lanzar una campaña</option>
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
                  <label htmlFor="email">Email (si deseas respuesta por correo)</label>
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
                  {touched.consent && errors.consent ? (
                    <span className="form-error">{errors.consent}</span>
                  ) : null}
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
                  <button className="cta-button" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar por WhatsApp"}
                  </button>
                  <button
                    className="cta-button cta-secondary"
                    type="button"
                    onClick={handleEmailClick}
                    disabled={!isEmailFormValid || isSubmitting}
                  >
                    Enviar por correo
                  </button>
                </>
              )}
            </div>
            {submitSuccess ? (
              <p className="form-trust">Enviado correctamente.</p>
            ) : null}
            {submitError ? <p className="form-error">{submitError}</p> : null}
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
