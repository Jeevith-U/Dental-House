import React from "react";
import logo from "../../../public/images/logo.svg";

const Header = ({ scrollToSection, refs }) => {
  return (
      <header className="py-0.5 bg-bg-blue shadow-sm text-gray-700 fixed z-50 w-full flex justify-center items-center font-cormorant-garamond">
        <div className="w-11/12 py-1 flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-r-2 border-slate-50 pr-2">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
            </div>
            <div className="flex flex-col text-3xl px-2 font-extrabold font-comfortaa">
              <p>Dental House</p>
            </div>
          </div>
          <nav className="font-comfortaa">
            <ul className="flex justify-center items-center space-x-8 font-semibold cursor-pointer">
              <li onClick={() => scrollToSection(refs.landingpageRef)}>Home</li>
              <li onClick={() => scrollToSection(refs.aboutRef)}>About Us</li>
              <li onClick={() => scrollToSection(refs.treatementRef)}>Modalities</li>
              <li onClick={() => scrollToSection(refs.reviewRef)}>Reviews</li>
              <li onClick={() => scrollToSection(refs.contactRef)}>Contact us</li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;
