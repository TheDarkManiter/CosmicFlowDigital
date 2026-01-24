const CTA = ({ label, helper, href, variant = "inline", onClick }) => {
  if (variant === "floating") {
    const handleClick = (event) => {
      if (!onClick) {
        return;
      }

      event.preventDefault();
      onClick({ location: "floating-cta" });
      window.open(href, "_blank", "noopener,noreferrer");
    };

    return (
      <a
        className="cta-floating"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        onClick={handleClick}
      >
        <svg
          className="cta-floating-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.4 0 .02 5.38 0 12.02c0 2.12.55 4.2 1.6 6.04L0 24l6.18-1.62a12 12 0 0 0 5.86 1.5h.01c6.64 0 12.02-5.38 12.02-12.02 0-3.2-1.24-6.2-3.55-8.38ZM12.04 21.9h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.67.96.98-3.58-.23-.37A9.84 9.84 0 0 1 2.2 12.02C2.2 6.6 6.63 2.18 12.04 2.18c2.64 0 5.12 1.02 6.99 2.9a9.8 9.8 0 0 1 2.9 6.96c0 5.42-4.42 9.86-9.89 9.86Zm5.43-7.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.57-.49-.49-.66-.49h-.56c-.2 0-.52.07-.78.37-.27.3-1.03 1-1.03 2.43 0 1.43 1.05 2.82 1.2 3.01.15.2 2.08 3.18 5.04 4.46.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.12.56-.08 1.72-.7 1.96-1.38.25-.68.25-1.25.17-1.38-.07-.12-.27-.2-.56-.35Z" />
        </svg>
      </a>
    );
  }

  return (
    <div className="cta-inline">
      <a className="cta-button" href={href}>
        {label}
      </a>
      {helper ? <span className="cta-helper">{helper}</span> : null}
    </div>
  );
};

export default CTA;
