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
        <div className="mt-20 h-screen w-full min-h-screen flex flex-col justify-center items-center">
          <div className="w-11/12 flex flex-col justify-center items-center text-slate-700" >
            {/*style={{backgroundImage : `url(${tretbg})`}}*/}
            <h1 className="text-5xl font-medium text-left w-full mb-10">
              Treatement
            </h1>
            <div className="grid grid-cols-3 gap-20">
              <Card
                src={braces}
                text="Dental bonding is a technique used to correct imperfections with
                    your teeth to give you a better-looking smile"
              />
              <Card
                src={rootcanal}
                text=" A root canal is a dental procedure that is used to repair teeth
                    that are infected or badly decayed. Some people fear root canal
                    treatments because they assume they are painful."
              />
              <Card
                src={implant}
                text="A dental crown is a dental prosthesis which replaces the visible
                    part of a tooth. A dental crown functions to strengthen teeth,
                    restore their original shape, and improve their appearance."
              />
              <Card
                src={dentures}
                text="Have you lost most or all of your teeth? Dentures are removable
                    appliances that can replace missing teeth."
              />
              <Card
                src={filling}
                text=" Cosmetic fillings, or tooth- colored fillings, are made of
                    composite resin and glass particles. They are cemented onto the
                    existing teeth using a bonding agent."
              />
              <Card
                src={cleaning}
                text=" You should visit the dentist every six months - one year for teeth
                    cleanings. Tartar is a hard buildup of plaque that forms on the teeth."
              />
            </div>
          </div>
        </div>
  );
};

export default Treatement;

export const Card = ({ src, text }) => {
  return (
    <div className="transfor transition-transform duration-300 hover:scale-110 p-4 rounded-md flex flex-col justify-between items-center">
      <div className="w-2/4">
        <img src={src} className="w-full" />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};
