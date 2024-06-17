import React, { useEffect, useState } from "react";
import implant from "../images/dental-implant.png";
import cleaning from "../images/tooth-brush.png";
import filling from "../images/cavity.png";
import rootcanal from "../images/rootcanal.png";
import denture from "../images/denture.png";
import braces from "../images/braces.png";
import { GoInfo } from "react-icons/go";

const Treatement = () => {
  const [bg, setBg] = useState("");
  const modalities = [
    // {},
    {
      icon: braces,
      image: "bg-braces",
      tribute_link: "https://www.flaticon.com/free-icons/dentist",
      tribute_text: "Dentist icons created by Smashicons - Flaticon",
      name: "Dental Bonding",
      text: "Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile",
    },
    // {},
    {
      icon: rootcanal,
      image: "bg-root-canal",
      tribute_link: "https://www.flaticon.com/free-icons/root-canal",
      tribute_text: "Root canal icons created by Pop Vectors - Flaticon",
      name: "Root Canal",
      text: "A root canal is a dental procedure that is used to repair teeth that are infected. Some people fear root canal treatments because they assume they are painful.",
    },
    // {},
    {
      icon: implant,
      image: "bg-dental-crown",
      tribute_link: "https://www.flaticon.com/free-icons/tooth",
      tribute_text: "Tooth icons created by fatihicon - Flaticon",
      name: "Dental Crown",
      text: "A dental crown is a dental prosthesis which replaces the visible part of a tooth. It restores their original shape, strength, and improve their appearance.",
    },
    // {},
    // {},
    // {},
    {
      icon: denture,
      image: "bg-dentures",
      tribute_link: "https://www.flaticon.com/free-icons/denture",
      tribute_text: "Denture icons created by Freepik - Flaticon",
      name: "Dentures",
      text: "Have you lost most or all of your teeth? Dentures are removable appliances that can replace missing teeth.",
    },
    // {},
    {
      icon: filling,
      image: "bg-teeth-filling",
      tribute_link: "https://www.flaticon.com/free-icons/tooth",
      tribute_text: "Tooth icons created by Soodesign - Flaticon",
      name: "Cosmetic Filling",
      text: "Cosmetic fillings are made of composite resin and glass particles. They are cemented onto the existing teeth using a bonding agent.",
    },
    // {},
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
      className={`w-full h-screen bg-bg-blue flex justify-center pb-4 transfor transition-all duration-300 ${bg} bg-cover`}
    >
      <div className="w-full h-max mb-4 flex flex-col justify-center items-center text-slate-800">
        <h1 className="text-5xl mt-4 mb-2 font-semibold p-4 font-caveat flex flex-col jc items-center justify-center bg-white bg-opacity-60 w-full">
          <span>Our Cutting-Edge Dental Procedures</span>{" "}
          <span>for Exceptional Results</span>
        </h1>
        <div>
          <div className="grid grid-rows-2 grid-flow-col">
            {/* ITERATING OVER THE LIST OF MODALITIES */}
            {modalities.map((modality, key) => (
              <ModalityCard
                modality={modality}
                setBg={setBg}
                bg={bg}
                key={key}
              />
            ))}
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Treatement;

export const ModalityCard = ({ modality, setBg, bg }) => {
  const [cardHovered, setCardHovered] = useState(false);

  const { icon, image, tribute_link, tribute_text, name, text } = modality;

  useEffect(() => {
    const e = document.getElementById(image);
    e && setBg(image);
  }, [cardHovered]);
  return (
    <div
      // className={`h-20 hover:h-44 w-20 hover:w-8/12 transfor transition-all duration-500 ${image} bg-cover hover:bg-sky-500 hover:text-white rounded-md font-comfortaa text-sm text-center text-white  overflow-y-hidden`}
      className={`w-full`}
    >
      <p
        className={`flex flex-col h-28 jc items-center px-6 py-3 bg-black opacity-60 text-white transform transition-all ease-in-out duration-300 ${
          bg === image && cardHovered ? "opacity-60" : "opacity-0"
        }`}
      >
        <span>{text}</span>
      </p>
      {icon ? (
        <div
          className="flex w- flex-col justify-center items-center px-2 mb-3 mt-2 font-comfortaa"
          id={image}
        >
          <div
            className="text-3xl mx-4 "
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
          >
            <p className="text-sm text-center w-full">
              <Tribute link={tribute_link} text={tribute_text} />
            </p>
            <img
              src={icon}
              className="w-12 p-2 rounded-full bg-white bg-opacity-70"
            />
          </div>
          <p className="text-lg font-extrabold mt-2 text-cente w-max">
            {name}
          </p>
        </div>
      ) : (
        <div></div>
      )}
      {/* <p className="text-sm text-center w-full">
        <Tribute link={tribute_link} text={tribute_text} />
      </p>
      <div
        className={`w-full h-full flex flex-col justify-start items-center transform transition-transform ease-in-out duration-500 opacity-60 ${
          cardHovered ? "-translate-y-0 bg-black opacity-50" : "translate-y-28  bg-black opacity-60"
        }`}
      >
        <div className="flex flex-col w-full justify-start items-center px-2 mb-3 mt-2">
          <div className="text-3xl mx-4">
            <img src={icon} className="w-12 p-2 rounded-full bg-white" />
          </div>
          <p className="text-lg font-extrabold mt-2">{name}</p>
        </div>
        <p className="flex flex-col jc items-center pr-3">
          <span>{text}</span>
        </p>
      </div> */}
    </div>
  );
};

export const Tribute = ({ link, text }) => {
  const [tributeHovered, setTributeHovered] = useState(false);
  return (
    <div className={`h-5 w-full flex justify-end`}>
      <div
        className={`flex justify-end items-center absolute opacity-80  p-1 ${
          tributeHovered
            ? "w-full opacity-80 text-xxs text-black"
            : " rounded-full text-xs text-slate-400"
        }`}
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
