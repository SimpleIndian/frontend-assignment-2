import { useEffect, useState } from "react";
import Logo from "components/shared/Logo";
import { GiHamburgerMenu } from "react-icons/gi";

import NavMenu from "./NavMenu";
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

  return (
    <header
      className={`top-0 z-50 flex items-center justify-between w-full p-4 bg-black md:p-8 md:fixed ${
        NavState ? "md:bg-transparent" : ""
      }`}
    >
      <GiHamburgerMenu color="white" size="24" className="md:hidden" />
      <Logo className="w-10" />
      <NavMenu></NavMenu>
    </header>
  );
};

export default Header;
