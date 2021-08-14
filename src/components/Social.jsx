import {
  RiTwitterFill,
  RiPinterestLine,
  RiBehanceFill,
  RiDribbbleLine,
  RiInformationLine,
} from "react-icons/ri";
import OutLink from "./shared/OutLink";
import InLink from "./shared/InLink";

const socialLinks = [
  { icon: <RiTwitterFill size={20} />, link: "https:google.com" },
  { icon: <RiPinterestLine size={20} />, link: "https:google.com" },
  { icon: <RiBehanceFill size={20} />, link: "https:google.com" },
  { icon: <RiDribbbleLine size={20} />, link: "https:google.com" },
];

const Social = ({ className }) => {
  return (
    <div className={`px-3 text-white hidden md:block ${className}`}>
      <InLink href="#" className="block py-3">
        <RiInformationLine size={32} />
      </InLink>
      {socialLinks &&
        socialLinks.map((each, index) => (
          <OutLink href={each.link} key={index} className="block py-3">
            {each.icon}
          </OutLink>
        ))}
    </div>
  );
};

export default Social;
