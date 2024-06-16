import React from "react";
import logo from "../images/logo.jpg";

const Header2 = () => {
  return (
      <header className="bg-transparent text-gray-700 absolute w-full flex justify-center items-center">
        <div className="w-11/12 py-1 flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-r-2 border-slate-50 pr-2">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
            </div>
            <div className="flex flex-col text-xl font-bold">
              <span className="px-2">Dental</span>
              <span className="px-2">House</span>
            </div>
          </div>
          <nav className="font-sans">
            <ul className="flex justify-center items-center space-x-8 font-semibold">
              <li>Home</li>
              <li>Reminder</li>
              <li>Contact</li>
              <li>
                <button className="bg-slate-100 hover:bg-indigo-600 hover:text-slate-50 text-slate-700 font-bold py-2 px-4 rounded-lg">
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
