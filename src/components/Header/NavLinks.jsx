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
        <ul className="absolute left-0 hidden px-5 font-light bg-gray-900 divide-y divide-gray-300 min-w-[200px] top-6 group-hover:block">
          {dropLinks &&
            dropLinks.map((each, index) => (
              <li
                className={`relative py-3 ${
                  each.hasMoreItems ? "deep-nest" : ""
                }`}
                key={index}
              >
                <InLink href={each.link} className="flex items-center">
                  {each.label}
                  {each.hasMoreItems && (
                    <RiArrowRightSLine color="white" className="ml-1" />
                  )}
                </InLink>
                {each.hasMoreItems && (
                  <ul className="absolute top-0 hidden px-5 font-light bg-gray-900 divide-y divide-gray-300 -right-48 deep-nest-ele min-w-[200px]">
                    {each.moreItems &&
                      each.moreItems.map((each, index) => (
                        <InLink
                          className="block py-3"
                          key={index}
                          href={each.link}
                        >
                          {each.label}
                        </InLink>
                      ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
