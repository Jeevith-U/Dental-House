import React, { useState } from "react";
import RevealOnScroll from "../Util/RevealOnScroll";
import RevealFromRight from "../Util/RevealFromRight";
import RevealFromLeft from "../Util/RevealFromLeft";

const Tips = () => {
  const tips = [
    {
      headline: "Brush Regularly and Properly",
      explainer:
        "Brush twice a day with a soft-bristled toothbrush for at least two minutes to protect your gums and teeth from decay.",
      bg: "bg-brush",
    },
    {
      headline: "Floss Daily",
      explainer:
        "Floss daily to remove food particles and plaque from areas your toothbrush can't reach, ensuring healthy gums.",
      bg: "bg-floss",
    },
    {
      headline: "Limit Sugary and Acidic Foods",
      explainer:
        "Reduce sugary and acidic foods to prevent tooth decay and enamel erosion, maintaining a strong, healthy smile.",
      bg: "bg-sugar",
    },
  ];
  const tips_vertical = [
    {
      headline: "Maintain a Healthy Diet",
      explainer:
        "Eat fruits, veggies, dairy, and lean proteins to provide essential nutrients for strong teeth and overall oral health.",
      bg: "bg-diet",
    },
    {
      headline: "Avoid Tobacco Products",
      explainer:
        "Avoid tobacco to reduce the risk of gum disease and protect your oral health from harmful chemicals.",
      bg: "bg-tobacco",
    },
    {
      headline: "Visit Your Dentist Regularly",
      explainer:
        "Schedule check-ups every 3-6 months for early detection and prevention of dental issues, keeping your smile bright.",
      bg: "bg-dentist",
    },
  ];

  return (
    <div
      className={`w-screen h-max flex justify-center mb-10 transfor transition-all duration-300 bg-gray-100`}
    >
      <div className="w-11/12 h-max mb-4 flex justify-center items-start text-slate-700">
        <div className="w-full flex flex-col justify-start items-center">
          <h1 className="text-5xl mt-10 font-semibold p-4 font-head flex flex-col items-center justify-center bg-transparent bg-opacity-70 w-full text-start">
            Top Tips To Elevate Your Oral Health
          </h1>
          <div className="w-11/12 mt-10 flex flex-col justify-center items-end h-max">
            {tips_vertical.map((tip, index) => {
              const { headline, explainer, bg } = tip;
              return (
                  <TipsCard headline={headline} explainer={explainer} bg={bg} />
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col-reverse justify-start items-center">
          <h1 className="text-5xl mt-10 font-semibold p-4 font-head flex flex-col items-center justify-center bg-transparent bg-opacity-70 w-full text-end">
            Your well-being is our top priority ❤️
          </h1>
          <div className="w-11/12 mt-10 flex flex-col justify-center items-end h-max">
            {tips.map((tip, index) => {
              const { headline, explainer, bg } = tip;
              return (
                  <TipsCard key={index} headline={headline} explainer={explainer} bg={bg} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;

export const TipsCard = ({ headline, explainer, bg }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="h-40 w-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`h-full ${bg} bg-cover transform transition-transform ease-in-out duration-300 -mx-0.5 ${
          hovered ? "-translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`h-full p-0.5 bg-transparent flex flex-col justify-end items-center font-body -translate-y-full`}
      >
        <p
          className={`px-1.5 py-2 text-lg mb-auto w-full text-left font-bold border-b-2 border-b-slate-700`}
        >
          {headline}
        </p>
        <p className="px-1.5 py-4 text-sm w-full text-left bg-gray-100 bg-opacity-80">
          {explainer}
        </p>
      </div>
    </div>
  );
};
