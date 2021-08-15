import InLink from "components/shared/InLink";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { useRouter } from "next/router";

const NavLinks = ({ fullLink, navHeading, dropLinks, hasElements }) => {
  const router = useRouter();

  return (
    <ul className="flex space-x-5 text-white capitalize">
      <li className="relative group">
        <InLink href={fullLink} className="relative flex items-center">
          {router.pathname === fullLink ? (
            <span className="absolute top-0 block w-1 h-1 rounded-full bg-primary -left-2" />
          ) : (
            ""
          )}
          {navHeading}
          {hasElements && <RiArrowDownSLine color="white" className="ml-1" />}
        </InLink>
        <ul className="absolute left-0 hidden px-5 font-light bg-gray-900 divide-y divide-gray-300 min-w-max top-6 group-hover:block">
          {dropLinks &&
            dropLinks.map((each, index) => (
              <li className="py-3" key={index}>
                <InLink href={each.link} className="flex items-center">
                  {each.label}
                  {each.hasArrow && (
                    <RiArrowRightSLine color="white" className="ml-1" />
                  )}
                </InLink>
              </li>
            ))}
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
