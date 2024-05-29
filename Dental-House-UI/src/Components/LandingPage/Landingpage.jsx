import React from "react";
import doctorimg from "../images/Doctor.jpeg";
const Landingpage = () => {
  return (
    <div className="h-screen w-full min-h-screen bg-gradient-to-b from-indigo-400 from-5% to-slate-50 to-70% flex justify-center items-center font-serif">
      <div className="h-screen min-h-screen flex justify-center items-center w-11/12">
        <div className="w-3/5">
          <div className="px-4 py-2">
            <h1 className="text-5xl font-medium mb-4">Dr. Varsha Gupta</h1>
            <p className="text-xl font-medium mb-2">DENTIST</p>
            <p className="mb-6">
            I am Dr. Varsha a dedicated and compassionate dental surgeon with exceptional skill and passion in dentistry. I bring a wealth of expertise to her practice, specializing in enhancing smiles with advanced cosmetic treatments. I also have a heartfelt interest in pediatric dentistry, where my gentle approach ensures that children feel comfortable and cared for during their dental visits, fostering a positive attitude toward oral health from an early age.
            </p>
          </div>
          <div className="px-4 py-2">
            <p className="text-xl font-medium mb-2">QUALIFICATION</p>
            <p>
            I have completed dental surgeon with a Bachelor of Dental Surgery (BDS) degree and a prestigious fellowship in aesthetic and cosmetic dentistry.
            I am specialized in all the basic & latest dental procedures including dental implants, teeth whitening, porcelain veneers, smile corrections, gap closures, fixed teeth, root canal treatment, gum surgery, braces, kids dentistry, laser dentistry, gummy smile correction metal free 
            </p>
          </div>
        </div>
        <div className="w-2/5 h-full flex items-center justify-center">
          <div className="w-7/12">
            <img
              src={doctorimg}
              alt="Doctor-img"
              className="w-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
