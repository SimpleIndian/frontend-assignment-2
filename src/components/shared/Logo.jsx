import InLink from "./InLink";

const Logo = ({ className }) => {
  return (
    <InLink href="/" className={className}>
      <img src="/logo.png" alt="company logo" width="80" height="64" />
    </InLink>
  );
};

export default Logo;
