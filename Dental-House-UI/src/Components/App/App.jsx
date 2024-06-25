import React, { useRef } from "react";
import Landingpage from "../LandingPage/Landingpage";
import Treatement from "../LandingPage/Treatement";
import QnA from "../LandingPage/QnA";
import Tips from "../LandingPage/Tips";
import About from "../LandingPage/About";
import Contact from "../LandingPage/Contact";
import Header from "../Header/Header";
import Footer from "../Header/Footer";

const App = () => {
  const landingpageRef = useRef(null);
  const aboutRef = useRef(null);
  const treatementRef = useRef(null);
  const tipsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        refs={{
          landingpageRef,
          aboutRef,
          treatementRef,
          tipsRef,
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
      <div ref={tipsRef}>
        <Tips />
      </div>
      <QnA />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
