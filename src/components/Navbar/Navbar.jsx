import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] shadow-lg rounded-b-xl">
      {/* Portfolio Title with Larger and Stylish Font */}
      <span className="text-3xl md:text-5xl font-extrabold tracking-wide text-[#3b82f6] hover:text-[#2563eb] transition-all duration-300 ease-in-out">
        Portfolio
      </span>

      {/* Navigation Menu */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-medium md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-8 transition-all duration-300 ease-in-out`}
      >
        <a href="#About">
          <li className="text-lg md:text-xl transition-all duration-300 p-1 md:p-0 hover:text-[#3b82f6]">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-lg md:text-xl transition-all duration-300 p-1 md:p-0 hover:text-[#3b82f6]">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-lg md:text-xl transition-all duration-300 p-1 md:p-0 hover:text-[#3b82f6]">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-lg md:text-xl transition-all duration-300 p-1 md:p-0 hover:text-[#3b82f6]">
            Contact
          </li>
        </a>
      </ul>

      {/* Mobile menu toggle button */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 text-[#3b82f6] transition-all duration-300 transform hover:scale-110"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 text-[#3b82f6] transition-all duration-300 transform hover:scale-110"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
