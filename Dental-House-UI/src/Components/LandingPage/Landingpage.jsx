import React from "react";
import doctorimg from "../images/DoctorImg.jpeg";
const Landingpage = () => {
  return (
    <div className="h-screen w-full min-h-screen bg-bg-blue flex justify-center items-center">
      <div className="mt-14 flex w-full mx-10 justify-center items-center">
        <div className="w-3/5">
          <div className="w-full px-4 py-2">
            <h1 className="text-5xl font-medium mb-4 w-full">Dr. Varsha Gupta</h1>
            <p className="text-xl font-medium mb-2">About Us</p>
            <p className="mb-6">
            We at Dental House offer  the finest dental care to our patients in Mysore. Our aim is to provide high quality dental treatment in a tranquil, relaxed and friendly environment. We specialized in all the latest dental procedures. If you are looking for quality, ethics and value for your time then Dental House is the right place for you. At Dental House we have had the joy of crafting beautiful smiles for hundreds of patients. Our commitment to excellence and personalized care ensures that each individual leaves our clinic with enhanced, confidence and satisfaction.
            </p>
          </div>
          <div className="w-full px-4 py-2">
            <p className="text-xl font-medium mb-2">QUALIFICATION</p>
            <p>
            Dr. Varsha is a dedicated and compassionate dental surgeon with a Bachelor Of Dental Surgery (BDS) degree and a prestigious fellowship in aesthetic and cosmetic dentistry. Dr. Varsha also has a heartfelt interest in pediatric dentistry. She brings a wealth of expertise to her practice, specialising in enhancing smiles with advanced treatments.
            </p>
          </div>
        </div>
        <div className="w-2/5 flex items-center justify-end">
          <div className="w-10/12">
            <img
              src={doctorimg}
              alt="Doctor-img"
              className="w-full rounded-tl-full rounded-bl-full rounded-tr-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
