import CompanyFooter from "./CompanyFooter";
import FooterLinks from "./FooterLinks";

import { footerLinksData } from "data/footerLinksData";
import ContactLinks from "./ContactLinks";

export const Footer = () => {
  return (
    <footer className="p-5 bg-black">
      <CompanyFooter></CompanyFooter>
      <div>
        {footerLinksData &&
          footerLinksData.map((data) => (
            <FooterLinks linksTitle={data.heading} links={data.links} />
          ))}
      </div>
      <ContactLinks></ContactLinks>
    </footer>
  );
};
