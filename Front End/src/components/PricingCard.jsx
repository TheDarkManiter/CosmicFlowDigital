import { Link } from "react-router-dom";

const PricingCard = ({
  title,
  price,
  description,
  items,
  highlight,
  ctaLabel,
  ctaTo,
}) => {
  const isExternalCta =
    typeof ctaTo === "string" && /^https?:\/\//i.test(ctaTo);
  const resolvedLabel = ctaLabel || "Solicitar propuesta";

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
      {ctaTo ? (
        isExternalCta ? (
          <a
            className="pricing-cta"
            href={ctaTo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {resolvedLabel}
          </a>
        ) : (
          <Link className="pricing-cta" to={ctaTo}>
            {resolvedLabel}
          </Link>
        )
      ) : null}
    </article>
  );
};

export default PricingCard;
