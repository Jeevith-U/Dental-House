import React from "react";
import profile from "/images/profile.png";
import { motion } from "framer-motion";

const Landingpage = () => {
  return (
    <div className="h-screen w-full min-h-screen bg-opacity-40 text-slate-800 flex justify-center">
      <div className="h-full w-full flex justify-center items-center bg-bg1 bg-cover">
        <div className="mt-8 flex w-11/12 h-max justify-center items-center">
          {/* <RevealFromLeft> */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-3/5 px-10"
          >
            <h1 className="text-6xl h-20 font-medium w-full font-head">
              Dr. Varsha Gupta
            </h1>
            <div className="w-full py-2 mb-10">
              <p className="text-2xl font-medium mb-2 font-head">
                Dental surgeon <span className="text-star-blue">|</span>{" "}
                Bachelor Of Dental Surgery (BDS)
              </p>
              <p className="text-sm font-body">
                Dr. Varsha is a dedicated and compassionate dental surgeon with
                a Bachelor Of Dental Surgery (BDS) degree and a prestigious
                fellowship in aesthetic and cosmetic dentistry. Dr. Varsha also
                has a heartfelt interest in pediatric dentistry. She brings a
                wealth of expertise to her practice, specialising in enhancing
                smiles with advanced treatments.
              </p>
            </div>
            <button
              className="bg-star-blue hover:bg-emerald-400 text-slate-50 py-2 px-4 rounded-lg font-body font-extrabold border-2 border-transparent hover:border-emerald-400 transition-colors duration-300 ease-in-out"
              type="button"
            >
              Request Appointment
            </button>
          </motion.div>
          {/* </RevealFromLeft> */}
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-2/5 h-full flex flex-col items-center justify-end">
            <div className="flex h-1/6 justify-end items-end mb-1 mr-24">
              <div className="p-2 mb-4 mr-2 bg-slate-700 rounded-full h-max opacity-70"></div>
              <div className="p-6 bg-white opacity-80 rounded-full h-max"></div>
            </div>
            <div className="w-9/12 h-full">
              <div className="rounded-full bg-transparent overflow-x-hidden bg-white bg-opacity-60">
                <img
                  src={profile}
                  alt="Doctor-img"
                  className="w-full rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
