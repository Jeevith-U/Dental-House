import React from "react";
import logo from "../images/logo.jpg";

const Header2 = () => {
  return (
      <header className="bg-bg-blue text-gray-700 absolute w-full flex justify-center items-center font-cormorant-garamond">
        <div className="w-11/12 py-1 flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-r-2 border-slate-50 pr-2">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
            </div>
            <div className="flex flex-col text-xl font-extrabold font-comfortaa">
              <span className="px-2">Dental</span>
              <span className="px-2">House</span>
            </div>
          </div>
          <nav className="font-comfortaa">
            <ul className="flex justify-center items-center space-x-8 font-semibold">
              <li>About Us</li>
              <li>Modalities</li>
              <li>QnA</li>
              <li>Reviews</li>
              <li>
                <button className="bg-slate-50 hover:bg-sky-500 hover:text-slate-50 text-slate-700 font-bold py-2 px-4 rounded-lg transition-colors duration-150 ease-in-out hidden">
                  Request Appointment
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header2;
