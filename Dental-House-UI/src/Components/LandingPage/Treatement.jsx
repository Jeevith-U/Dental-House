import React from "react";
import tretbg from "../images/treatement.jpg";
import braces from "../images/braces.png";
import cleaning from "../images/cleaning.png";
import rootcanal from "../images/rootcanal.png";
import implant from "../images/implant.png";
import dentures from "../images/dentures.png";
import filling from "../images/filling.png";

const Treatement = () => {
  return (
    <div className="w-full bg-bg-blue flex justify-center py-4">
      <div className="w-11/12 flex flex-col justify-center items-center text-slate-700">
        <h1 className="text-6xl font-semibold pb-8 font-caveat flex flex-col jc items-center">
          <span>Our Cutting-Edge Dental Procedures</span> <span>for Exceptional Results</span>
        </h1>
        <div className="grid grid-cols-3 gap-20">
          <Card
            // src={braces}
            name={"Dental Bonding"}
            text="Dental bonding is a technique used to correct imperfections with
                    your teeth to give you a better-looking smile"
          />
          <Card
            // src={rootcanal}
            name={"Root Canal"}
            text=" A root canal is a dental procedure that is used to repair teeth
                    that are infected or badly decayed. Some people fear root canal
                    treatments because they assume they are painful."
          />
          <Card
            // src={implant}
            name={"Dental Crown"}
            text="A dental crown is a dental prosthesis which replaces the visible
                    part of a tooth. A dental crown functions to strengthen teeth,
                    restore their original shape, and improve their appearance."
          />
          <Card
            // src={dentures}
            name={"Dentures"}
            text="Have you lost most or all of your teeth? Dentures are removable
                    appliances that can replace missing teeth."
          />
          <Card
            // src={filling}
            name={"Cosmetic Filling"}
            text=" Cosmetic fillings, or tooth- colored fillings, are made of
                    composite resin and glass particles. They are cemented onto the
                    existing teeth using a bonding agent."
          />
          <Card
            // src={cleaning}
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

export const Card = ({ src, text, name }) => {
  return (
    <div className="transfor transition-all duration-150 hover:scale-110 hover:bg-sky-500 hover:text-white p-4 rounded-md flex flex-col justify-center items-center font-comfortaa text-sm text-center">
      <div className="w-2/4">
        <img src={src} className="w-full" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg font-extrabold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
