import React from "react";
import Landingpage from "../LandingPage/Landingpage";
import Treatement from "../LandingPage/Treatement";
import QnA from "../LandingPage/QnA";
import Tips from "../LandingPage/Tips";
import About from "../LandingPage/About";
import Contact from "../LandingPage/Contact";
import Header from "../Header/Header";

const App = () => {
  return (
    <>
      <Header />
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
