import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import RevealOnScroll from "../Util/RevealOnScroll";

export const Reviews = () => {
  const reviews = [
    {
      name: "Agnes D'Souza",
      profile: "bg-pr1",
      rating: 5,
      review:
        "I had a wonderful experience with Dr.Varsha. She is an awesome doc, very amicable, dedicated and committed to render best services to her patients. Many of my cavities are beautifully filled especially the gap in front. I am so happy. Now I can smile very confidently. I have recommended and spoken about her to my family, friends and relatives. I  intend to get back to her to avail her services in the future as well.",
    },
    {
      name: "Chandru Nagaraj",
      profile: "bg-pr2",
      rating: 5,
      review:
        "Dr. Varsha Gupta is very friendly, Professional and Supportive. She used to answer lot of our queries. She is having good professional experience. Many times me and my wife had been to Dr.Varsha's clinic. Even the complicated teeth conditions she used to make it cure, she won't mind taking multiple sessions for the same cost of treatment. Frankly speaking, we had been to multiple other Dental clinics prior to this, they were too expensive in Mysore. One of my relative suggested us Dr. Varsha's clinic `The Dental House` . This is the best place one can visit for the dental treatment to get it done at very affordable price. One great thing about Dr. Varsha is, out of practice hours also she used to pic our calls and address to our queries which is really kind nature of her. Overall I can say, this is a must to visit clinic for any Dental treatment at very reasonable and affordable price.",
    },
    {
      name: "Jackie Ganatra",
      rating: 5,
      profile: "bg-pr3",
      review:
        "Sure! Here's a sample review for a dental clinic. I recently visited Dental House for a routine check-up and was thoroughly impressed with the service. The friendly and professional, and the clinic was clean and well-maintained. The dentist took the time to explain everything clearly and addressed all of my concerns. I left feeling confident in my dental health and would highly recommend this clinic to others.",
    },
    {
      name: "Neha Gowda",
      rating: 5,
      profile: "bg-pr4",
      review:
        "I sought treatment from Dr. Varsha and Dr. Pruthvin for a tooth extraction a week ago, and I must say, I was genuinely impressed. Their approach was nothing short of exceptional—both doctors exuded professionalism, displayed impeccable manners, and responded promptly to my needs. Their expertise not only ensured a successful procedure but also left me with an enhanced and confident smile i genuinely recommended this place for my family and friends.",
    },
  ];

  return (
    <div
      className={`w-screen h-screen bg-smile bg-cover bg-no-repeat mt-14 flex flex-col justify-center items-center pb-4 transfor transition-all duration-300 overflow-visible`}
    >
      <div className="w-11/12 h-full flex flex-col justify-center items-center text-slate-700 absolute z-10 overflow-visible">
        <div className="grid grid-flow-col grid-rows-2 gap-8 overflow-visible p-10">
          {reviews.map((item, index) => {
            return (
              <RevealOnScroll key={index}>
                <ReviewCard item={item} />
              </RevealOnScroll>
            );
          })}
        </div>
        <a
          className="text-star-blue py-2 px-4 ml-auto rounded-lg font-body font-extrabold  border-2 border-star-blue hover:bg-star-blue bg-bg-gray hover:text-bg-gray transition-colors duration-300 ease-in-out mb-0 flex justify-center items-center"
          target="_blank"
          href="https://www.google.com/maps/place/Dental+House/@12.2891192,76.6281864,17z/data=!4m8!3m7!1s0x3baf659f1c3d7549:0xc1e4b0528b94fac2!8m2!3d12.289114!4d76.6307613!9m1!1b1!16s%2Fg%2F11h4x2rcfd?entry=ttu"
        >
          {"Read more.. "}
        </a>
      </div>
    </div>
  );
};

export default Reviews;

export const ReviewCard = ({ item }) => {
  const [reviewHovered, setReviewHovered] = useState(false);
  const { name, review, profile } = item;

  return (
    <div
      onMouseEnter={() => setReviewHovered(true)}
      onMouseLeave={() => setReviewHovered(false)}
    >
      <div
        className={`w-80 p-4 m-5 bg-bg-gray border-2 border-bg-dark rounded-xl transition-all ease-in-out duration-500 absolute translate-x-16 shadow-xl -translate-y-36 ${
          reviewHovered ? "scale-110 z-10 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="flex justify-start items-center p-1">
          <div
            className={`${profile} bg-contain p-7 bg-no-repeat rounded-full`}
          />
          <div className="ml-2 flex flex-col justify-center items-start">
            <p className="font-head font-bold text-xl">{name}</p>
            <div className="text-amber-500 flex justify-center items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        <p className="font-body text-xs text-clip h-max w-full">{review}</p>
      </div>
      <div
        className={`w-80 px-4 py-2 m-5 transition-all ease-in-out duration-700 flex flex-col justify-center items-center ${
          reviewHovered ? "opacity-30" : "opacity-100"
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <div
            className={`${profile} bg-contain p-6 bg-no-repeat rounded-full`}
          />
          <div className="flex flex-col justify-center items-center">
            <p className="font-head font-bold text-xl">{name}</p>
            <div className="text-amber-500 flex justify-center items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        <p className="font-body text-xs text-clip h-20 overflow-clip text-center">
          {review}
        </p>
      </div>
    </div>
  );
};
