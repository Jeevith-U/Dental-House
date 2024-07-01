import React, { forwardRef } from "react";
import logo from "/images/logo.svg";

const Header = ({ refs }) => {
  const links = [
    {
      name: "Home",
      ref: { nav: refs.landingpageRef },
    },
    {
      name: "About us",
      ref: { nav: refs.aboutRef },
    },
    {
      name: "Modalities",
      ref: { nav: refs.treatementRef },
    },
    {
      name: "Reviews",
      ref: { nav: refs.reviewRef },
    },
    {
      name: "Contact us",
      ref: { nav: refs.contactRef },
    },
  ];

  return (
    <header className="py-0.5 bg-bg-blue shadow-sm text-gray-700 fixed z-50 w-full flex justify-center items-center font-body">
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
            {links.map((link, index) => {
              return (
                <MyLink key={index} ref={link.ref}>
                  {link.name}
                </MyLink>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

export const MyLink = forwardRef((props, ref) => {
  console.log(ref);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      key={MyLink.key}
      onClick={() => scrollToSection(ref.nav)}
      className={`transition-colors ease-in-out duration-150 hover:bg-star-blue px-2 py-1 hover:text-white rounded-lg focus:text-white focus:bg-star-blue`}
    >
      {props.children}
    </li>
  );
});
