import Logo from "../../assets/icons/sana-logo.svg";
import MenuIcon from "../../assets/icons/menu-icon.svg";
import MobileSidebar from "./MobileSidebar";

import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";

import Button from "../atoms/Button";

const navLinks = [
  {
    name: "home",
    url: "#",
  },
  {
    name: "about us",
    url: "#about",
  },
  {
    name: "services",
    url: "#services",
  },
  {
    name: "products",
    url: "#products",
  },
  {
    name: "career",
    url: "#career",
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
                {navLinks.map((data, index) =>
                  data.url.startsWith("#") ? (
                    // <ScrollLink
                    //   key={index}
                    //   to={data.url.substring(2)} // Remove '#' for ScrollLink's `to` prop
                    //   smooth={true}
                    //   duration={500}
                    //   offset={-80} // Adjust offset for fixed headers if needed
                    //   className="cursor-pointer text-nowrap rounded-[24px] px-2 py-2 capitalize text-[#505050] opacity-100 transition-all hover:scale-105 hover:bg-white hover:text-black lg:px-4"
                    // >
                    // </ScrollLink>
                    <a
                      href={"/" + data.url}
                      className="cursor-pointer text-nowrap rounded-[24px] px-2 py-2 capitalize text-[#505050] opacity-100 transition-all hover:scale-105 hover:bg-white hover:text-black lg:px-4"
                    >
                      {data.name}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      className="text-nowrap rounded-[24px] px-2 py-2 capitalize text-[#505050] opacity-100 transition-all hover:scale-105 hover:bg-white hover:text-black lg:px-4"
                      to={data.url}
                    >
                      {data.name}
                    </Link>
                  ),
                )}
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
