import React from 'react';
import logo from '../images/logo.jpg';

const Header2 = () => {
  return (
    <div>
      <header className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-12 w-12" />
            <span className="text-4xl text-white ml-4">Dental House</span>
          </div>
          <nav>
            <ul className="flex space-x-8 text-white">
              <li>Home</li>
              <li>Contact</li>
              <li>More</li>
              <li>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Request Appointment
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header2;
