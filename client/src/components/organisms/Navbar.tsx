import Logo from "../../assets/icons/sana-logo.svg";
import MenuIcon from "../../assets/icons/menu-icon.svg";
import MobileSidebar from "./MobileSidebar";

import { useState } from "react";

const Navbar = () => {
  const [sidebarIsActive, setSidebarIsActive] = useState(false);

  const toggleMenu = () => setSidebarIsActive(!sidebarIsActive);

  return (
    <>
      {sidebarIsActive ? (
        <MobileSidebar toggleMenu={toggleMenu} />
      ) : (
        <>
          <div className="absolute z-10 mt-1 flex w-full items-center justify-between px-5">
            <div>
              <img
                className="w-16 sm:w-24 md:w-36"
                src={Logo}
                alt="sana logo"
              />
            </div>
            <div className="cursor-pointer" onClick={toggleMenu}>
              <img className="md:hidden" src={MenuIcon} alt="menu icon" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
