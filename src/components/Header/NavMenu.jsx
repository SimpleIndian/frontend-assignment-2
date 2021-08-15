import { BsBag, BsThreeDots } from "react-icons/bs";
import { AiOutlineAlignRight } from "react-icons/ai";
import { RiSearch2Line, RiShoppingCart2Line } from "react-icons/ri";
import NavLinks from "./NavLinks";
import { navLinksData } from "data/navLinksData";

export const IconLink = ({ children }) => {
  return (
    <div className="p-2 rounded-full ring-2 ring-gray-500">{children}</div>
  );
};

const NavMenu = () => {
  return (
    <nav className="">
      <div className="items-center hidden space-x-8 md:flex justify-evenly">
        {navLinksData &&
          navLinksData.map((data, index) => (
            <NavLinks
              navHeading={data.heading}
              key={index}
              dropLinks={data.links}
              hasElements={data.hasElements}
              fullLink={data.fullLink}
            />
          ))}
        <div className="flex items-center space-x-4 text-white">
          <IconLink>
            <RiSearch2Line size={18} />
          </IconLink>
          <IconLink>
            <RiShoppingCart2Line size={18} />
          </IconLink>
        </div>
        <AiOutlineAlignRight color="white" size={24} />
      </div>
      <div className="flex items-center space-x-4 text-white md:hidden">
        <BsBag color="white" size={24} />
        <BsThreeDots color="white" size={24} />
      </div>
    </nav>
  );
};

export default NavMenu;
