import CompanyFooter from "./CompanyFooter";
import FooterLinks from "./FooterLinks";

import { footerLinksData } from "data/footerLinksData";
import ContactLinks from "./ContactLinks";

const Footer = () => {
  return (
    <footer className="px-5 py-10 bg-black">
      <div className="space-y-10 md:flex md:flex-wrap md:space-y-0 md:justify-around">
        <CompanyFooter></CompanyFooter>
        <div className="flex flex-wrap justify-between w-full md:max-w-max md:justify-evenly md:space-x-24">
          {footerLinksData &&
            footerLinksData.map((data, index) => (
              <FooterLinks
                linksTitle={data.heading}
                links={data.links}
                key={index}
              />
            ))}
        </div>
        <ContactLinks></ContactLinks>
      </div>
      <hr className="w-full h-[2px] bg-gray-500 my-10 border-0" />
      <p className="text-sm font-light text-center text-gray-300">
        Copyright 2021 Bi . All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;