import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen text-slate-800 flex flex-col justify-center items-center bg-gray-100 pt-10"
    >
      <div className="w-11/12 px-10 py-4 flex justify-center items-start bg-opacity-55">
        <div className="w-3/6 flex justify-center items-center">
          <div className="w-5/6 mt-12 mr-auto h-96 flex justify-center items-center rounded-xl border-2 border-slate-700">
            {/* <img src={hospital} className="h-full rounded-lg" /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.3957503738616!2d76.6307613!3d12.289114000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf659f1c3d7549%3A0xc1e4b0528b94fac2!2sDental%20House!5e0!3m2!1sen!2sin!4v1719312878383!5m2!1sen!2sin"
              // width="600"
              // height="450"
              className="w-full h-full rounded-xl border-2 border-slate-700"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
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
              <textarea
                placeholder="Do you have anything to say? (optional)"
                className="w-full h-32 px-2 py-3 mt-4 bg-transparent border-2 border-bg-dark rounded-lg placeholder:text-slate-500 text-slate-800 text-sm"
              />
              <button
                className="bg-star-blue hover:bg-emerald-400 text-slate-50 mt-6 py-2 px-8 rounded-lg font-body font-extrabold transition-colors duration-300 ease-in-out ml-auto border-2 border-transparent hover:border-emerald-400"
                type="button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="h-16 w-full mt-auto text-slate-400 flex justify-center items-start bg-bg-dark">
        <p className="mt-auto mb-2">
          The Dental House, we perfect your smile ❤️ Dr. Varsha Gupta - Dental
          surgeon
        </p>
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
      className="outline-none mr-1 px-2 py-3 bg-transparent border-2 rounded-lg border-bg-dark w-full placeholder:text-slate-500 text-slate-800"
    />
  );
};
