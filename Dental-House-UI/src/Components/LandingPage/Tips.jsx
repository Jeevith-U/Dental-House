import React from "react";

const Tips = () => {
  const tips = [
    {
      headline: "Brush Regularly and Properly",
      explainer:
        "Brush twice a day with a soft-bristled toothbrush for at least two minutes to protect your gums and teeth from decay.",
    },
    {
      headline: "Floss Daily",
      explainer:
        "Floss daily to remove food particles and plaque from areas your toothbrush can't reach, ensuring healthy gums.",
    },
    {
      headline: "Limit Sugary and Acidic Foods",
      explainer:
        "Reduce sugary and acidic foods to prevent tooth decay and enamel erosion, maintaining a strong, healthy smile.",
    },
    {
      headline: "Maintain a Healthy Diet",
      explainer:
        "Eat fruits, veggies, dairy, and lean proteins to provide essential nutrients for strong teeth and overall oral health.",
    },
    {
      headline: "Avoid Tobacco Products",
      explainer:
        "Avoid tobacco to reduce the risk of gum disease and protect your oral health from harmful chemicals.",
    },
    {
      headline: "Visit Your Dentist Regularly",
      explainer:
        "Schedule check-ups every 3-6 months for early detection and prevention of dental issues, keeping your smile bright.",
    },
  ];

  return (
    <div
      className={`w-full h-max flex justify-center pb-4 mb-10 transfor transition-all duration-300 bg-white`}
    >
      <div className="w-11/12 h-max mb-4 flex flex-col justify-center items-center text-slate-700">
        <h1 className="text-5xl my-10 font-semibold p-4 font-head flex flex-col items-center justify-center bg-transparent bg-opacity-70 w-full">
          Top Tips To Elevate Your Oral Health
        </h1>
        <div className="flex justify-center items-start">
          {tips.map((tip, index) => {
            const { headline, explainer } = tip;
            return (
              <div key={index}>
                <p className="text-xl">{headline}</p>
                <p>{explainer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tips;
