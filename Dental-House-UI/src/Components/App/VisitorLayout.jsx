import React, { useRef } from "react";
import Header from "../HeaderAndFooter/Header";
import Landingpage from "../LandingPage/Landingpage";
import Treatement from "../LandingPage/Treatement";
import Reviews from "../LandingPage/Reviews";
import Tips from "../LandingPage/Tips";
import Contact from "../LandingPage/Contact";
import About from "../LandingPage/About";
import QnA from "../LandingPage/QnA";

const VisitorLayout = () => {
  const landingpageRef = useRef(null);
  const aboutRef = useRef(null);
  const treatementRef = useRef(null);
  const tipsRef = useRef(null);
  const contactRef = useRef(null);
  const reviewRef = useRef(null);

  return (
    <>
      <Header
        refs={{
          landingpageRef,
          aboutRef,
          treatementRef,
          tipsRef,
          reviewRef,
          contactRef,
        }}
      />
      <div ref={landingpageRef}>
        <Landingpage />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={treatementRef}>
        <Treatement />
      </div>
      <div ref={reviewRef}>
        <Reviews />
      </div>
      <div ref={tipsRef}>
        <Tips />
      </div>
      <QnA />
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default VisitorLayout;
