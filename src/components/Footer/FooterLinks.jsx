import InLink from "components/shared/InLink";

const FooterLinks = ({ links, linksTitle }) => {
  return (
    <div>
      <h4 className="py-3 text-xl text-white capitalize">{linksTitle}</h4>
      <ul className="space-y-3 font-light text-gray-300 capitalize">
        {links &&
          links.map((eachLink) => (
            <li>
              <InLink href={eachLink.link}>{eachLink.label}</InLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
