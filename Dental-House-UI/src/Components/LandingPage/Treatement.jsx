import React from "react";
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
import braces from "../images/braces.png"

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
              <a
                href="https://www.flaticon.com/free-icons/dentist"
                title="dentist icons"
                className="underline text-sm font-mono"
              >
                Dentist icons created by Smashicons - Flaticon
              </a>
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
              <a
                href="https://www.flaticon.com/free-icons/root-canal"
                title="root canal icons"
                className="underline text-sm font-mono"
              >
                Root canal icons created by Pop Vectors - Flaticon
              </a>
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
              <a
                href="https://www.flaticon.com/free-icons/tooth"
                title="tooth icons"
                className="underline text-sm font-mono"
              >
                Tooth icons created by fatihicon - Flaticon
              </a>
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
              <a
                href="https://www.flaticon.com/free-icons/denture"
                title="denture icons"
                className="underline text-sm font-mono"
              >
                Denture icons created by Freepik - Flaticon
              </a>
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
              <a
                href="https://www.flaticon.com/free-icons/tooth"
                title="tooth icons"
                className="underline text-sm font-mono"
              >
                Tooth icons created by Soodesign - Flaticon
              </a>
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
              <a
                href="https://www.flaticon.com/free-icons/tooth-brush"
                title="Tooth Brush icons"
                className="underline text-sm font-mono"
              >
                Tooth Brush icons created by Freepik - Flaticon
              </a>
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
    <div className="transfor transition-all duration-150 hover:scale-110 hover:bg-sky-500 hover:text-white p-4 rounded-md flex flex-col justify-center items-center font-comfortaa text-sm text-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-full flex-col justify-center items-center">
          <div className="text-3xl">{icon}</div>
          <p className="text-lg font-extrabold">{name}</p>
        </div>
        <p>{text}</p>
        <span className="text-sm">{tribute}</span>
      </div>
    </div>
  );
};
