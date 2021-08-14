import InLink from "./InLink";

const Logo = ({ className }) => {
  return (
    <InLink href="/">
      <img src="/logo.png" alt="company logo" className={className} />
    </InLink>
  );
};

export default Logo;
