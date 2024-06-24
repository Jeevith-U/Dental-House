import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-opacity-40 text-slate-800 flex justify-center items-start bg-bg-blue">
      <div className="w-11/12 px-6 py-4 flex justify-center items-start bg-opacity-55">
        <div className="w-3/6 flex justify-center items-center">
          <div className="w-3/5 h-96 bg-white">
            <img src="#" />
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
            <h2 className="mt-8 font-body text-xl">Request Appointment</h2>
            <form className="w-full flex flex-col justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Name: "
                  className="outline-none mr-1 p-2 bg-transparent border-b-2 border-b-gray-700 w-full placeholder:text-slate-600 text-slate-800"
                />
                <input
                  type="text"
                  placeholder="Ph.no: "
                  className="outline-none mr-1 p-2 bg-transparent border-b-2 border-b-gray-700 w-full placeholder:text-slate-600 text-slate-800"
                />
              </div>
              <button className="bg-sky-500 hover:bg-slate-50 hover:text-slate-700 text-slate-50 mt-4 py-2 px-8 rounded-lg font-body font-extrabold transition-colors duration-300 ease-in-out ml-auto">
                Send
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
