import React, { useState } from "react";
import implant from "/images/dental-implant.png";
import cleaning from "/images/tooth-brush.png";
import filling from "/images/cavity.png";
import rootcanal from "/images/rootcanal.png";
import denture from "/images/denture.png";
import braces from "/images/braces.png";
import { GoInfo } from "react-icons/go";
import RevealOnScroll from "../Util/RevealOnScroll";

const Treatement = () => {
  const modalities = [
    {
      icon: braces,
      image: "bg-braces",
      tribute_link: "https://www.flaticon.com/free-icons/dentist",
      tribute_text: "Dentist icons created by Smashicons - Flaticon",
      name: "Dental Bonding",
      text: "Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile",
    },
    {
      icon: rootcanal,
      image: "bg-root-canal",
      tribute_link: "https://www.flaticon.com/free-icons/root-canal",
      tribute_text: "Root canal icons created by Pop Vectors - Flaticon",
      name: "Root Canal",
      text: "A root canal is a dental procedure that is used to repair teeth that are infected. Some people fear root canal treatments because they assume they are painful.",
    },
    {
      icon: implant,
      image: "bg-dental-crown",
      tribute_link: "https://www.flaticon.com/free-icons/tooth",
      tribute_text: "Tooth icons created by fatihicon - Flaticon",
      name: "Dental Crown",
      text: "A dental crown is a dental prosthesis which replaces the visible part of a tooth. It restores their original shape, strength, and improve their appearance.",
    },
    {
      icon: denture,
      image: "bg-dentures",
      tribute_link: "https://www.flaticon.com/free-icons/denture",
      tribute_text: "Denture icons created by Freepik - Flaticon",
      name: "Dentures",
      text: "Have you lost most or all of your teeth? Dentures are removable appliances that can replace missing teeth.",
    },
    {
      icon: filling,
      image: "bg-teeth-filling",
      tribute_link: "https://www.flaticon.com/free-icons/tooth",
      tribute_text: "Tooth icons created by Soodesign - Flaticon",
      name: "Cosmetic Filling",
      text: "Cosmetic fillings are made of composite resin and glass particles. They are cemented onto the existing teeth using a bonding agent.",
    },
    {
      icon: cleaning,
      image: "bg-teeth-cleaning",
      tribute_link: "https://www.flaticon.com/free-icons/tooth-brush",
      tribute_text: "Tooth Brush icons created by Freepik - Flaticon",
      name: "Teeth Cleaning",
      text: "Visit the dentist every six months - one year for teeth cleanings. Tartar is a hard buildup of plaque that forms on the teeth.",
    },
  ];

  return (
    <div
      className={`w-full h-max flex justify-center transfor transition-all duration-300 bg-bg-gray`}
    >
      <div className="w-11/12 h-full flex flex-col justify-center items-center text-slate-700">
        <h1 className="text-5xl mt-10 font-semibold p-4 font-head flex flex-col items-center justify-center bg-transparent bg-opacity-70 w-full">
          <span className="h-16">Our Cutting-Edge Dental Procedures</span>{" "}
          <span className="h-16">for Exceptional Results</span>
        </h1>
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-rows-2 grid-flow-col-dense gap-8 w-11/12 py-10 overflow-visible">
            {/* ITERATING OVER THE LIST OF MODALITIES */}
            {modalities.map((modality, key) => (
              <RevealOnScroll key={key} >
                <ModalityCard modality={modality} index={key} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatement;

export const ModalityCard = ({ modality, index }) => {
  const [cardHovered, setCardHovered] = useState(false);

  const { icon, image, tribute_link, tribute_text, name, text } = modality;

  return (
    <div
      className={`flex flex-col justify-center items-center px-2 font-body  bg-opacity-60 transform transition-all ease-in-out duration-300 h-max shadow-lg rounded-lg ${
        cardHovered ? " bg-opacity-95 scale-110" : "scale-100"
      } ${
        index === 3 || index === 4 || index === 0
          ? "bg-bg-blue text-slate-700"
          : "bg-white"
      }`}
      id={image}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div className="text-sm text-center w-full">
        <Tribute link={tribute_link} text={tribute_text} show={cardHovered} />
      </div>
      <div className="px-4 w-full flex justify-start items-center">
        <img
          src={icon}
          className={`p-2 mx-2 transform transition-all ease-in-out duration-300 ${
            cardHovered
              ? "w-14 rounded-full bg-white"
              : "w-20 rounded-lg bg-transparent"
          }`}
        />
        <p
          className={`${
            cardHovered ? "text-xl" : "text-xl"
          } font-extrabold mt-2 text-cente w-ma opacity-90`}
        >
          {name}
        </p>
      </div>
      <p
        className={`flex flex-col h-32 justify-start items-center px-6 py-3 text-sm`}
      >
        <span>{text}</span>
      </p>
    </div>
  );
};

export const Tribute = ({ link, text, show }) => {
  const [tributeHovered, setTributeHovered] = useState(false);
  return (
    <div className={`h-5 w-full flex justify-end mx-3 pr-2`}>
      <div
        className={`flex justify-end items-center opacity-80  p-1 ${
          show
            ? "w-full opacity-80 text-slate-500"
            : "rounded-full text-transparent"
        } ${tributeHovered ? "text-xxs" : "text-xs"}`}
        onMouseEnter={() => setTributeHovered(true)}
        onMouseLeave={() => setTributeHovered(false)}
      >
        <a href={link} target="_blank" className={`font-mono underline`}>
          {tributeHovered ? text : <GoInfo />}
        </a>
      </div>
    </div>
  );
};
