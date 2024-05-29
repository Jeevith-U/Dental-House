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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, quod illo porro nulla id eaque vitae, obcaecati atque
              nam odio laboriosam vero numquam vel! Harum nam cupiditate facilis
              natus dignissimos nesciunt illo, a nobis dicta facere libero,
              voluptate adipisci debitis qui maxime beatae sint quaerat ipsa
              magnam dolorum quibusdam modi!
            </p>
          </div>
          <div className="px-4 py-2">
            <p className="text-xl font-medium mb-2">QUALIFICATION</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, quod illo porro nulla id eaque vitae, obcaecati atque
              nam odio laboriosam vero numquam vel! Harum nam cupiditate facilis
              natus dignissimos nesciunt illo, a nobis dicta facere libero,
              voluptate adipisci debitis qui maxime beatae sint quaerat ipsa
              magnam dolorum quibusdam modi!
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
