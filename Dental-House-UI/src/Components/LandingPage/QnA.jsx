import React from "react";
import Slider from "react-slick";

const QnA = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  
  return (
    <div className="border-y border-y-transparent hover:border-y-bg-dark hover:border-opacity-20 py-10 bg-bg-blue bg-opacity-75 h-max">
      <Slider {...settings} className="overflow-y-hidden">
        <QnACard
          question={"Should we clean the tooth on a daily basis"}
          answer={
            "Yes! You should get your teeth cleaned every 6-12 months because plaque and calculus can damage your gums."
          }
        />
        <QnACard
          question={"Will the tooth shake after cleaning"}
          answer={
            "If you get your teeth cleaned every 6-12 months, your gums will be strong, which will make your teeth strong. During the cleaning procedure, we remove the plaque and calculus that get deposited between your teeth and gums."
          }
        />
        <QnACard
          question={"Will eyes become weak after extraction"}
          answer={
            "No, extracting teeth does not weaken your eyes. There is no direct connection between dental extractions and eye health."
          }
        />
        <QnACard
          question={"Why treat milk tooth? They will fall in a few years"}
          answer={
            "If you don't treat the small fillings, it will result in RCT and then we will need to remove the tooth. If we remove the tooth at an early stage, it will result in crowding or overlapping of the permanent tooth, and children will not be able to learn to chew properly."
          }
        />
        <QnACard
          question={"Why to replace the missing tooth"}
          answer={
            "If you don't replace your missing tooth, the opposite tooth will try to cover the space, and the neighboring teeth will tilt. This can create problems with your TMJ joint in the future."
          }
        />
      </Slider>
    </div>
  );
};

export default QnA;

export const QnACard = ({ question, answer }) => {
  return (
    <div className="inline-flex px-4 py-2 font-body m-2">
      <div className="flex flex-col justify-start">
        <p className="font-extrabold text-slate-700 mb-2">{question + "❓"}</p>
        <p className="text-sm text-slate-600">{answer}</p>
      </div>
    </div>
  );
};
