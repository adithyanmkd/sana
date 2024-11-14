import Logo from "../../assets/icons/sana-logo.svg";
import MenuIcon from "../../assets/icons/menu-icon.svg";
import MobileSidebar from "./MobileSidebar";

import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../atoms/Button";

const navLinks = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about us",
    url: "#",
  },
  {
    name: "services",
    url: "#",
  },
  {
    name: "products",
    url: "#",
  },
  {
    name: "career",
    url: "#",
  },
];

const Navbar = () => {
  const [sidebarIsActive, setSidebarIsActive] = useState(false);

  const toggleMenu = () => setSidebarIsActive(!sidebarIsActive);

  return (
    <>
      {sidebarIsActive ? (
        <MobileSidebar toggleMenu={toggleMenu} />
      ) : (
        <>
          <div className="absolute left-1/2 z-10 mt-3 flex w-full max-w-screen-lg -translate-x-1/2 transform items-center justify-between px-5">
            <div>
              <img className="w-16 sm:w-24" src={Logo} alt="sana logo" />
            </div>
            <div className="cursor-pointer">
              <img
                className="md:hidden"
                onClick={toggleMenu}
                src={MenuIcon}
                alt="menu icon"
              />
              <div className="hidden space-x-5 rounded-[30px] bg-white bg-opacity-80 px-2 py-2 md:flex">
                {navLinks.map((data, index) => (
                  <Link
                    className="text-nowrap rounded-[24px] px-2 py-2 capitalize text-[#505050] opacity-100 transition-all hover:scale-105 hover:bg-white hover:text-black lg:px-4"
                    key={index}
                    to={data.url}
                  >
                    {data.name}
                  </Link>
                ))}
                <Button label="Contact Us" classname="text-nowrap" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
