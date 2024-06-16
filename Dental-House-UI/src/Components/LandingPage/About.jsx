import React from "react";

const About = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center py-10">
      <div className="mt-8 flex w-11/12 flex-row-reverse justify-center items-center">
        <div>
          <div className="px-8 mb-8 w-full flex flex-col font-comfortaa text-center text-md justify-center items-center">
            <p>
              We at Dental House offer the finest dental care to our patients in
              Mysore. Our aim is to provide high quality dental treatment in a
              tranquil, relaxed and friendly environment. We are specialized in
              all the latest dental procedures.
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
              Our passion lies in crafting beautiful smiles, and we have had the
              privilege of transforming the smiles of hundreds of patients. Our
              commitment to excellence and personalized care guarantees that
              each individual leaves our clinic with enhanced confidence and
              complete satisfaction.
            </p>
          </div>
          <div className="px-20 w-full flex flex-col justify-center items-center font-comfortaa font-extrabold">
            <div className="flex w-full justify-evenly items-center">
              <ul>
                <Card text={"Finest Dental Care"} />
                <Card text={"Tranquil Environment"} />
                <Card text={"Latest Procedures"} />
              </ul>
              <ul>
                <Card text={"Quality and Ethics"} />
                <Card text={"Personalized Care"} />
                <Card text={"Enhanced Confidence"} />
              </ul>
            </div>
          </div>
        </div>
        <p className="p-4 text-5xl font-semibold mb-8 font-caveat flex flex-col justify-start">
          <span>Why</span>
          <span> Choose</span>
          <span> Dental</span>
          <span> House?</span>
        </p>
      </div>
    </div>
  );
};

export default About;

export const Card = ({ text }) => {
  return (
    <li className="flex justify-start items-center">
      <span className="bg-bg-orange p-1 rounded-full"></span>
      <p className="ml-3">{text}</p>
    </li>
  );
};
