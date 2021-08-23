import InLink from "components/shared/InLink";
import { navLinksData } from "data/navLinksData";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const MobileMenu = ({ isOpen }) => {
  return (
    <nav
      className={`fixed  z-40 w-[300px] bottom-0 bg-gray-700 transition-all overflow-y-auto top-0 ${
        isOpen ? "left-0" : "left-[-300px]"
      }`}
    >
      <div className="p-5 mt-16 ">
        <Accordion className="space-y-10 transition-all" allowZeroExpanded>
          {navLinksData.map((each, index) =>
            each.hasElements ? (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="flex justify-between">
                      <InLink href={each.fullLink} className="capitalize ">
                        {each.heading}
                      </InLink>
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? (
                            <RiArrowUpSLine size={20} />
                          ) : (
                            <RiArrowDownSLine size={20} />
                          )
                        }
                      </AccordionItemState>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="mt-4">
                    {each.links.map((data, index) =>
                      data.hasMoreItems ? (
                        <div className="block p-3 capitalize" key={index}>
                          <Accordion allowZeroExpanded>
                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>
                                  <div className="flex justify-between">
                                    <InLink
                                      href={data.link}
                                      className="capitalize "
                                    >
                                      {data.label}
                                    </InLink>
                                    <AccordionItemState>
                                      {({ expanded }) =>
                                        expanded ? (
                                          <RiArrowUpSLine size={20} />
                                        ) : (
                                          <RiArrowDownSLine size={20} />
                                        )
                                      }
                                    </AccordionItemState>
                                  </div>
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                {data.moreItems.map((more, index) => (
                                  <div className="mt-4" key={index}>
                                    <InLink
                                      href={more.link}
                                      className="block p-3 capitalize"
                                    >
                                      {more.label}
                                    </InLink>
                                  </div>
                                ))}
                              </AccordionItemPanel>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      ) : (
                        <InLink
                          href={data.link}
                          className="block p-3 capitalize"
                          key={index}
                        >
                          {data.label}
                        </InLink>
                      )
                    )}
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ) : (
              <InLink
                href={each.fullLink}
                className="block capitalize"
                key={index}
              >
                {each.heading}
              </InLink>
            )
          )}
        </Accordion>
      </div>
    </nav>
  );
};

export default MobileMenu;
