import React from "react";
import doctorimg from "../images/DoctorImg.jpeg";
const Landingpage = () => {
  return (
    <div className="h-screen w-full min-h-screen bg-opacity-40 text-slate-800 flex justify-center">
      <div className="h-full w-full flex justify-center items-center bg-bg-blue bg-opacity-55">
      <div className="mt-8 flex w-11/12 h-full justify-center items-center">
        <div className="w-3/5 px-10">
          <div className="w-full py-2">
            <h1 className="text-6xl font-medium mb-4 w-full font-head">
              Dr. Varsha Gupta
            </h1>
            
          </div>
          <div className="w-full py-2 mb-10">
            <p className="text-2xl font-medium mb-2 font-head">
              Dental surgeon <span className="text-sky-500">|</span> Bachelor Of
              Dental Surgery (BDS)
            </p>
            <p className="text-sm font-body">
              Dr. Varsha is a dedicated and compassionate dental surgeon with a
              Bachelor Of Dental Surgery (BDS) degree and a prestigious
              fellowship in aesthetic and cosmetic dentistry. Dr. Varsha also
              has a heartfelt interest in pediatric dentistry. She brings a
              wealth of expertise to her practice, specialising in enhancing
              smiles with advanced treatments.
            </p>
          </div>
          <button className="bg-sky-500 hover:bg-slate-50 hover:text-slate-700 text-slate-50 py-2 px-4 rounded-lg font-body font-extrabold transition-colors duration-300 ease-in-out">
            Request Appointment
          </button>
        </div>
        <div className="w-2/5 h-full flex flex-col items-center justify-end">
          <div className="flex h-1/6 justify-end items-end mb-2 mr-24">
            <div className="p-2 mb-4 mr-2 bg-slate-700 rounded-tl-full rounded-bl-full rounded-tr-full h-max opacity-85"></div>
            <div className="p-6 bg-white opacity-80 rounded-tl-full rounded-br-full rounded-tr-full h-max"></div>
          </div>
          <div className="w-10/12 h-full">
            <div className="shadow-md rounded-tl-full rounded-bl-full rounded-tr-full bg-slate-100 ">
              <img
                src={doctorimg}
                alt="Doctor-img"
                className="w-full rounded-tl-full rounded-bl-full rounded-tr-full pb-2 pl-2 transfor transition-transform duration-700 ease-in-out hover:-translate-x-2"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Landingpage;
