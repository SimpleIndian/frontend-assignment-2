import Link from 'next/link';

const InLink = ({ href, children, className, title }) => {
  return (
    <Link href={href}>
      <a className={className} aria-label={title} title={title}>
        {children}
      </a>
    </Link>
  );
};

export default InLink;
