import { useEffect, useState } from "react";
import Logo from "components/shared/Logo";
import Hamburger from "hamburger-react";

import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [NavState, setNavState] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, [NavState]);

  const listenScroll = () => {
    if (window.innerWidth > 968 && window.scrollY > 200) {
      setNavState(false);
    } else {
      setNavState(true);
    }
  };

  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    let body = document.querySelector("body");
    isOpen
      ? body.classList.add("overflow-hidden")
      : body.classList.remove("overflow-hidden");
  }, [isOpen]);
  return (
    <header
      className={`top-0 z-50 flex items-center justify-between w-full p-4 bg-black md:p-8 md:fixed ${
        NavState ? "md:bg-transparent" : ""
      }`}
    >
      <div className="z-50 rounded-full md:hidden">
        <Hamburger
          size="20"
          rounded
          label="Show Menu"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-40 bg-black bg-opacity-30 cursor-pointer ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <MobileMenu isOpen={isOpen}></MobileMenu>
      <Logo className="w-10" />

      <NavMenu></NavMenu>
    </header>
  );
};

export default Header;
