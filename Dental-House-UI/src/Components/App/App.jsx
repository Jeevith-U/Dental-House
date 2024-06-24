import React from "react";
import Header2 from "../Header/Header2";
import Landingpage from "../LandingPage/Landingpage";
import Treatement from "../LandingPage/Treatement";
import QnA from "../LandingPage/QnA";
import Tips from "../LandingPage/Tips";
import About from "../LandingPage/About";
import Contact from "../LandingPage/Contact";

const App = () => {
  return (
    <>
      <Header2 />
      <Landingpage />
      <About/>
      <Treatement />
      <Tips />
      <QnA />
      <Contact/>
    </>
  );
};

export default App;
