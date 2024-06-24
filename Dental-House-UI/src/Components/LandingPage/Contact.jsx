import React from "react";
import hospital from "../images/hospital.jpeg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full bg-opacity-40 text-slate-800 flex justify-center items-start bg-bg-blue"
    >
      <div className="w-11/12 px-6 py-4 flex justify-center items-start bg-opacity-55">
        <div className="w-3/6 flex justify-center items-center">
          <div className="w-3/5 mt-12 h-96 scale-110 hover:scale-105 bg-white rounded-lg transition-transform ease-in-out duration-300">
            <img src={hospital} className="h-full rounded-lg" />
          </div>
        </div>
        <div className="w-3/6 flex flex-col justify-start items-start">
          {/*  CONTACT US SECTION */}
          <div className="flex flex-col justify-start items-start">
            <h1 className="font-head text-5xl my-2 ">Contact us</h1>
            <ContactData type={"Phone"} value={"+91 9888076756"} />
            <ContactData type={"Email"} value={"drvarshagupta@gmail.com"} />
          </div>
          {/* REQUEST APPOINTMENT */}
          <div className="w-full">
            <h2 className="mt-8 mb-2 font-body text-xl">Request Appointment</h2>
            <form className="w-full flex flex-col justify-center items-center">
              <div className="w-full text-sm flex justify-center items-center">
                <Input placeholder={"Name: "} />
                <Input placeholder={"Ph.no: "} />
              </div>
              <textarea placeholder="Do you have anything to say? (optional)" className="w-full h-32 p-2 mt-4 bg-transparent border-2 border-slate-700 rounded-lg placeholder:text-slate-500 text-slate-800 text-sm"/>
              <button
                className="bg-sky-500 hover:bg-sky-400 text-slate-50 mt-6 py-2 px-8 rounded-lg font-body font-extrabold transition-colors duration-300 ease-in-out ml-auto border-2 border-transparent hover:border-sky-500"
                type="button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export const ContactData = ({ type, value }) => {
  return (
    <div className="font-body mt-4">
      <h2 className="text-base font-bold  my-2">{type}</h2>
      <p className="text-xs">{value}</p>
    </div>
  );
};

export const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="outline-none mr-1 p-2 bg-transparent border-b-2 border-b-gray-700 w-full placeholder:text-slate-500 text-slate-800"
    />
  );
};
