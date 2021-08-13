const OutLink = ({ href, children, className, title }) => {
  return (
    <a
      href={href}
      className={className}
      title={title}
      aria-label={title}
      rel="noreferrer"
      target="_blank">
      {children}
    </a>
  );
};

export default OutLink;
