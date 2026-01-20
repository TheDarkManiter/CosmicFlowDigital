import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const plans = [
    {
      title: "Launch Strategy",
      price: "USD 4.500",
      description: "Estrategia y base técnica para lanzar rápido.",
      items: [
        "Workshop inicial",
        "Diseño UI esencial",
        "Setup de analítica",
      ],
    },
    {
      title: "Growth Engine",
      price: "USD 9.800",
      description: "Sistema completo de crecimiento para escalar.",
      items: [
        "Roadmap trimestral",
        "Optimización CRO",
        "Automatizaciones clave",
      ],
      highlight: true,
    },
    {
      title: "Cosmic Enterprise",
      price: "Desde USD 18.000",
      description: "Soluciones a medida para marcas globales.",
      items: [
        "Arquitectura multi-equipo",
        "Roadmap anual",
        "Squad dedicado",
      ],
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <h1>Pricing ancla</h1>
        <p className="lead">
          Paquetes premium de alto valor. Ajusta cifras y entregables según tu
          oferta real.
        </p>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
