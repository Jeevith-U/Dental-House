import React, { useState } from "react";

const About = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center py-10">
      <p className="text-5xl font-semibold mb-10 font-caveat flex flex-col justify-start">
        Why choose dental house?
      </p>
      <div className="flex justify-center items-center">
        <div className="px-4 w-full h-full flex flex-col justify-center items-center font-comfortaa font-extrabold">
          <div className="flex w-full h-full justify-evenly items-center">
            <ul className="flex w-full h-full flex-col justify-evenly items-stretch">
              <Card
                text={"Finest Dental Care"}
                image={"bg-finest-dental-care"}
              />
              <Card text={"Tranquil Environment"} image={"bg-tranquil-env"} />
              <Card text={"Latest Procedures"} image={"bg-latest-procedures"} />
            </ul>
            <ul className="flex w-full h-full flex-col justify-evenly items-stretch">
              <Card
                text={"Quality and Ethics"}
                image={"bg-quality-and-ethics"}
              />
              <Card text={"Personalized Care"} image={"bg-personalized-care"} />
              <Card
                text={"Enhanced Confidence"}
                image={"bg-enhanced-confidence"}
              />
            </ul>
          </div>
        </div>
        <div className="flex w-11/12 flex-row-reverse justify-center items-center">
          <div>
            <div className="px-8 mb-8 w-full flex flex-col font-comfortaa text-center text-md justify-center items-center">
              <p>
                We at Dental House offer the finest dental care to our patients
                in Mysore. Our aim is to provide high quality dental treatment
                in a tranquil, relaxed and friendly environment. We are
                specialized in all the latest dental procedures.
              </p>
              <p className="mt-4 mb-4  font-extrabold text-sky-500">
                <span className="text-slate-700 text-3xl">{"[ "}</span>
                <span className="text-2xl">
                  If you are seeking quality, ethical standards, and value for
                  your time? Then Dental House is the perfect choice for you⚡
                </span>
                <span className="text-slate-700 text-3xl">{" ]"}</span>
              </p>
              <p>
                Our passion lies in crafting beautiful smiles, and we have had
                the privilege of transforming the smiles of hundreds of
                patients. Our commitment to excellence and personalized care
                guarantees that each individual leaves our clinic with enhanced
                confidence and complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const Card = ({ text, image }) => {
  const [cardHovered, setCardHovered] = useState(false);
  return (
    <li
      className={`flex justify-start items-end h-32 mx-3 my-2 shadow-md ${image} bg-cover overflow-y-hidden`}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      {/* <span className="bg-bg-orange p-1 rounded-full"></span> */}
      <div
        className={`text-white w-full px-2 h-full pt-1.5 transition-all ease-in-out duration-300 ${
          cardHovered ? "-translate-y-0 bg-opacity-80 bg-sky-500" : "translate-y-24 bg-opacity-50 bg-black"
        }`}
      >
        <p>{text}</p>
        <p className="text-xs font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus eligendi expedita, id nulla vel recusandae adipisci repellat consequatur sit.</p>
      </div>
    </li>
  );
};
