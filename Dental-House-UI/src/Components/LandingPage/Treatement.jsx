import React, { useState } from "react";
import { TbDentalBroken } from "react-icons/tb";
import { TbDental } from "react-icons/tb";
import { LiaTeethOpenSolid } from "react-icons/lia";
import { LiaTeethSolid } from "react-icons/lia";
import { RiBrushLine } from "react-icons/ri";
import { PiCrownSimple } from "react-icons/pi";
import implant from "../images/dental-implant.png";
import cleaning from "../images/tooth-brush.png";
import filling from "../images/cavity.png";
import rootcanal from "../images/rootcanal.png";
import denture from "../images/denture.png";
import braces from "../images/braces.png";

const Treatement = () => {
  return (
    <div className="w-full bg-bg-blue flex justify-center py-4">
      <div className="w-11/12 h-max mb-4 mt-4 flex flex-col justify-center items-center text-slate-700">
        <h1 className="text-6xl font-semibold pb-10 font-caveat flex flex-col jc items-center">
          <span>Our Cutting-Edge Dental Procedures</span>{" "}
          <span>for Exceptional Results</span>
        </h1>
        <div className="grid grid-cols-3 gap-20">
          <Card
            icon={
              <img src={braces} className="w-12 p-2 rounded-full bg-white" />
            }
            tribute={
              <Tribute
                link={"https://www.flaticon.com/free-icons/dentist"}
                text={"Dentist icons created by Smashicons - Flaticon"}
              />
            }
            name={"Dental Bonding"}
            text="Dental bonding is a technique used to correct imperfections with
                    your teeth to give you a better-looking smile"
          />
          <Card
            icon={
              <img src={rootcanal} className="w-12 p-2 rounded-full bg-white" />
            }
            name={"Root Canal"}
            tribute={
              <Tribute
                link={"https://www.flaticon.com/free-icons/root-canal"}
                text={"Root canal icons created by Pop Vectors - Flaticon"}
              />
            }
            text=" A root canal is a dental procedure that is used to repair teeth
                    that are infected or badly decayed. Some people fear root canal
                    treatments because they assume they are painful."
          />
          <Card
            icon={
              <img src={implant} className="w-12 p-2 rounded-full bg-white" />
            }
            name={"Dental Crown"}
            tribute={
              <Tribute
                link={"https://www.flaticon.com/free-icons/tooth"}
                text={"Tooth icons created by fatihicon - Flaticon"}
              />
            }
            text="A dental crown is a dental prosthesis which replaces the visible
                    part of a tooth. A dental crown functions to strengthen teeth,
                    restore their original shape, and improve their appearance."
          />
          <Card
            icon={
              <img src={denture} className="w-12 p-2 rounded-full bg-white" />
            }
            name={"Dentures"}
            tribute={
              <Tribute
                link={"https://www.flaticon.com/free-icons/denture"}
                text={"Denture icons created by Freepik - Flaticon"}
              />
            }
            text="Have you lost most or all of your teeth? Dentures are removable
                    appliances that can replace missing teeth."
          />
          <Card
            icon={
              <img src={filling} className="w-12 p-2 rounded-full bg-white" />
            }
            name={"Cosmetic Filling"}
            tribute={
              <Tribute
                link={"https://www.flaticon.com/free-icons/tooth"}
                text={"Tooth icons created by Soodesign - Flaticon"}
              />
            }
            text=" Cosmetic fillings, or tooth- colored fillings, are made of
                    composite resin and glass particles. They are cemented onto the
                    existing teeth using a bonding agent."
          />
          <Card
            icon={
              <img src={cleaning} className="w-12 p-2 rounded-full bg-white" />
            }
            tribute={
              <Tribute
                link={"https://www.flaticon.com/free-icons/tooth-brush"}
                text={"Tooth Brush icons created by Freepik - Flaticon"}
              />
            }
            name={"Teeth Cleaning"}
            text=" You should visit the dentist every six months - one year for teeth
                    cleanings. Tartar is a hard buildup of plaque that forms on the teeth."
          />
        </div>
      </div>
    </div>
  );
};

export default Treatement;

export const Card = ({ icon, text, name, tribute }) => {
  return (
    <div className="transfor transition-all duration-150 hover:scale-110 hover:bg-sky-500 hover:text-white p-4 pt-0 pr-1 rounded-md flex flex-col justify-center items-center font-comfortaa text-sm text-center">
      <p className="text-sm text-center w-full mb-auto">{tribute}</p>
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-full flex-col justify-center items-center pr-4">
          <div className="text-3xl">{icon}</div>
          <p className="text-lg font-extrabold">{name}</p>
        </div>
        <p className="flex flex-col jc items-center pr-3">
          <span>{text}</span>
        </p>
      </div>
    </div>
  );
};

export const Tribute = ({ link, text }) => {

  return (
    <div className={`h-5 mb-3 w-full flex justify-end`}>
      <div
        className={`flex justify-center items-center text-bg-blue opacity-80 text-xxs p-1`}
      >
        <a
          href={link}
          target="_blank"
          className={`font-mono underline`}
        >
          {text}
        </a>
      </div>
    </div>
  );
};
