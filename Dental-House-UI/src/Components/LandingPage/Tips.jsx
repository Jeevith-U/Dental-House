import React, { useState } from "react";

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
      className={`w-full h-max flex justify-center pb-4 mb-10 transfor transition-all duration-300 bg-gray-100`}
    >
      <div className="w-11/12 h-max mb-4 flex flex-col justify-center items-center text-slate-700">
        <h1 className="text-5xl mt-10 font-semibold p-4 font-head flex flex-col items-center justify-center bg-transparent bg-opacity-70 w-full">
          Top Tips To Elevate Your Oral Health
        </h1>
        <div className="flex justify-center items-center h-max">
          {tips.map((tip, index) => {
            const { headline, explainer, bg } = tip;
            return (
              <TipsCard
                headline={headline}
                explainer={explainer}
                bg={bg}
                key={index}
              />
            );
          })}
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
      className="h-96 overflow-y-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`h-full ${bg} bg-cover flex flex-col justify-end items-center transform transition-transform ease-in-out duration-300 ${
          hovered ? "-translate-y-0" : "translate-y-full"
        }`}
      ></div>
      <div
        className={`h-full p-0.5 bg-transparent flex flex-col justify-end items-center -translate-y-full font-body`}
      >
        <p className="px-1.5 py-4 text-lg mb-auto w-full h-1/5 text-left font-bold pb-4 border-b-2 border-b-slate-700">{headline}</p>
        <p className="px-1.5 py-4 text-sm w-full text-left bg-slate-100 bg-opacity-80">{explainer}</p>
      </div>
    </div>
  );
};
