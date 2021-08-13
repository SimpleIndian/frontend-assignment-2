import OutLink from "components/shared/OutLink";
import { MdCall, MdMail, MdLocationOn } from "react-icons/md";

const LinksLayout = ({ icon, heading, children }) => {
  return (
    <div className="flex">
      {icon}
      <div className="ml-3">
        <h5 className="text-white">{heading}</h5>
        {children}
      </div>
    </div>
  );
};

const ContactLinks = () => {
  return (
    <div className="space-y-5">
      <LinksLayout heading="Mail Us" icon={<MdMail color="#ffff" size="24" />}>
        <OutLink
          href="mailto:hello@xyz.com"
          className="font-light text-gray-300"
        >
          hello@xyz.com
        </OutLink>
      </LinksLayout>
      <LinksLayout
        heading="Call Us"
        icon={<MdCall color="#ffff" size="24"></MdCall>}
      >
        <OutLink href="tel:698467654" className="font-light text-gray-300">
          +91 698467654
        </OutLink>
      </LinksLayout>
      <LinksLayout
        heading="Address"
        icon={<MdLocationOn color="#ffff" size="24" />}
      >
        <p className="font-light text-gray-300">
          xyz US Highway 17 North,
          <br /> Suite 209 Surfside Beach, <br /> SC 29575
        </p>
      </LinksLayout>
    </div>
  );
};

export default ContactLinks;
