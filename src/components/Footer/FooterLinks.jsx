import InLink from "components/shared/InLink";

const FooterLinks = ({ links, linksTitle }) => {
  return (
    <div className="mb-5">
      <h4 className="pb-3 text-xl text-white capitalize">{linksTitle}</h4>
      <ul className="space-y-3 font-light text-gray-300 capitalize">
        {links &&
          links.map((eachLink, index) => (
            <li key={index}>
              <InLink href={eachLink.link}>{eachLink.label}</InLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
