import React from "react";

const QnA = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center py-4 mb-4">
      <div className="flex flex-col w-11/12 justify-center items-center">
        <h1 className="text-5xl font-semibold mb-4 font-caveat text-left w-full">
          QnA
        </h1>

        {/* <div className="w-20 p-0.5 bg-slate-400 h-full">
          <div className="h-12 w-40 bg-bg-orange p left-5"></div>
        </div> */}
        <div className="grid border-l-bg-orange border-l-2 h-max w-4/5">
          <QnACard
            question={"Should we clean the tooth on a daily basis"}
            answer={
              "Yes! you should get the teeth cleaned every 6-12 months. Because plaque and calculus will damage your gums."
            }
          />
          <QnACard
            question={"Will the tooth shake after cleaning"}
            answer={
              "If you get your teeth cleaned every 6-12 months. Your gums will be strong and that will make your teeth strong. Because in the cleaning procedure we remove the plaque and calculus which gets deposited between teeth and gums."
            }
          />
          <QnACard
            question={"Will eyes become weak after extraction"}
            answer={""}
          />
          <QnACard
            question={"Why to replace the missing tooth"}
            answer={
              "If you dot replace your missing tooth and the opposite tooth will try to cover the space and the neighbouring teeth will tilt. And that in future will create problems in your TMJ joint."
            }
          />
          <QnACard
            question={"Why treat milk tooth? They will fall in a few years"}
            answer={
              "Cavities and infection spread fast in children. If you don't treat the small fillings, it will result in rct and then we will need to remove the tooth.f we remove the tooth in an early stage then it will result in crowding or overlapping of the permanent tooth. And children will not be able to learn to chew properly."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default QnA;

export const QnACard = ({ question, answer }) => {
  return (
    <div className="inline-flex px-4 py-2 font-comfortaa">
      <div className="flex flex-col justify-start">
        <p className="font-extrabold text-slate-700 mb-2">{question + "❓"}</p>
        <p className="text-sm text-slate-600">{answer}</p>
      </div>
    </div>
  );
};
