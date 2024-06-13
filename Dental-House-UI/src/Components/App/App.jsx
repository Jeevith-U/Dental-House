import React from 'react'
import Header2 from '../HeaderAndFooter/Header2'
import Landingpage from '../LandingPage/Landingpage'
import Treatement from '../LandingPage/Treatement'
import QnA from '../LandingPage/QnA'
import Tips from '../LandingPage/Tips'
import Footer from '../HeaderAndFooter/Footer'
import Forms from '../Forms/Forms'
import { Reviews } from '../LandingPage/Reviews'

const App = () => {
  return (
    <>
     <Header2/>
     <Landingpage/>
     <Treatement/>
     <QnA/>
     {/* <Forms/> */}
     <Reviews/>
    <Footer/>
    </>
     
  )
}

export default App