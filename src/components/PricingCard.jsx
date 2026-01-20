const PricingCard = ({ title, price, description, items, highlight }) => {
  return (
    <article className={highlight ? "pricing-card highlight" : "pricing-card"}>
      <header>
        <p className="pricing-title">{title}</p>
        <p className="pricing-price">{price}</p>
        <p className="pricing-description">{description}</p>
      </header>
      <ul className="pricing-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="pricing-cta" type="button">
        Solicitar propuesta
      </button>
    </article>
  );
};

export default PricingCard;
