import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div className="w-full bg-bg-gray flex flex-col justify-center items-center py-10">
      <div className="w-11/12 h-max mb-4 flex flex-col justify-center items-center text-slate-700">
        <p className="text-5xl font-semibold my-10 font-head h-16">
          Why choose dental house?
        </p>
        <div className="flex justify-center items-center">
          <div className="px-4 w-full h-max flex flex-col justify-center items-center font-body font-extrabold">
            <div className="flex w-full h-max justify-evenly items-center overflow-y-visible">
              <ul className="flex w-full h-max flex-col justify-evenly items-stretch">
                <Card
                  text={"Finest Dental Care"}
                  desc={
                    "We deliver top-tier dental services, ensuring optimal results for our patients"
                  }
                  image={"bg-finest-dental-care"}
                />
                <Card
                  text={"Tranquil Environment"}
                  desc={
                    " Our clinic provides a calm and friendly atmosphere to make your visits pleasant and stress-free"
                  }
                  image={"bg-tranquil-env"}
                />
                <Card
                  text={"Latest Procedures"}
                  desc={
                    "We specialize in cutting-edge dental treatments, staying at the forefront of dental technology and innovation."
                  }
                  image={"bg-latest-procedures"}
                />
              </ul>
              <ul className="flex w-full h-full flex-col justify-evenly items-stretch">
                <Card
                  text={"Quality and Ethics"}
                  desc={
                    "We uphold the highest standards of quality and ethical practices in all our services."
                  }
                  image={"bg-quality-and-ethics"}
                />
                <Card
                  text={"Personalized Care"}
                  desc={
                    " Every patient receives customized treatment plans tailored to their unique needs and preferences"
                  }
                  image={"bg-personalized-care"}
                />
                <Card
                  text={"Enhanced Confidence"}
                  desc={
                    "Our goal is to help you achieve a smile that boosts your confidence and enhances your overall well-being."
                  }
                  image={"bg-enhanced-confidence"}
                />
              </ul>
            </div>
          </div>
          <div className="flex w-11/12 flex-row-reverse justify-center items-center">
            <div className="px-8 w-full flex flex-col font-body text-center text-md justify-center items-center">
              <p>
                The finest dental care to our patients in Mysore, providing a
                high quality dental treatment in a tranquil, relaxed and
                friendly environment.
              </p>
              <p className="mt-4 mb-4 text-2xl  font-extrabold text-slate-700">
                <span>
                  If you are seeking
                  <TypeAnimation
                    sequence={[
                      " quality",
                      2000,
                      " ethical standards",
                      3000,
                      " value for your time",
                      3000,
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    className="text-bg-orange"
                  />
                </span>
                <br />
                <span className="text-slate-700">
                  {" "}
                  then Dental House is the perfect choice for you.
                </span>
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

export const Card = ({ text, image, desc }) => {
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <li
      className={`flex justify-start items-end h-32 mx-3 my-2 shadow-md overflow-y-hidden ${image} bg-cover`}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div
        className={`text-white w-full px-2 h-full pt-1.5 transition-all ease-in-out duration-300 ${
          cardHovered
            ? "-translate-y-0 bg-opacity-60 bg-bg-dark"
            : "translate-y-24 bg-opacity-50 bg-black"
        }`}
      >
        <p>{text}</p>
        <p className="text-sm font-light">{desc}</p>
      </div>
    </li>
  );
};
