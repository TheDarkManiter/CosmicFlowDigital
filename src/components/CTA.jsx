const CTA = ({ label, helper, href, variant = "inline" }) => {
  const className = variant === "floating" ? "cta-floating" : "cta-inline";

  return (
    <div className={className}>
      <a className="cta-button" href={href}>
        {label}
      </a>
      {helper ? <span className="cta-helper">{helper}</span> : null}
    </div>
  );
};

export default CTA;
