import React from 'react'
import doctorimg from "../images/Doctor.jpeg"
const Landingpage = () => {
  return (
    <div>
      <div className="background bg-custom-gradient min-h-screen">
        <div className="container">
            <div className="image flex-1 lg:ml-4 p-4 w-13 ">
                <div className="bg-white p-4 rounded-lg shadow-lg flex items-end justify-center">
                    <img src = {doctorimg} alt='Doctor-img' className= ""/>
                </div>
            </div>
            <div className="About">
                <div className="bio">Bio</div>
                <div className="Education"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage
