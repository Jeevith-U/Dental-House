import React from 'react'
import tretbg from '../images/treatement.jpg'
import braces from '../images/braces.png'
import cleaning from '../images/cleaning.png'
import rootcanal from '../images/rootcanal.png'
import implant from '../images/implant.png'
import dentures from'../images/dentures.png'
import filling from '../images/filling.png'

const Treatement = () => {
  return (
    <div>
       <div className='min-h-screen bg-cover bg-center' style={{backgroundImage : `url(${tretbg})`}}> 
        <div className='font-extrabold text-4xl text-white font ml-10 font-serif'>Treatement</div>
           
           <div className='grid grid-cols-3 gap-20 p-4 '>
                <div className= 'shadow-2xl transfor transition-transform duration-300 hover:scale-110 p-4 rounded-md'>
                        <img src={braces} alt="braces image" />
                        <div className='font-serif text-white'><p>Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile</p></div>
                </div>
                <div className='shadow-2xl transfor transition-transform duration-300 hover:scale-110 p-4 rounded-md'>
                        <img src={rootcanal} alt="rootcanal image" className='w-48'/>
                        <div className='font-serif text-white'><p> A root canal is a dental procedure that is used to repair teeth that are infected or badly decayed. Some people fear root canal treatments because they assume they are painful.</p></div>
                </div>
                <div className='shadow-2xl transform transition-transform duration-300
                hover:scale-110 p-4 rounded-md'>
                        <img src={implant} alt="implant image" className='w-48' />
                        <div className='font-serif text-white W'><p>A dental crown is a dental prosthesis which replaces the visible part of a tooth. A dental crown functions to strengthen teeth, restore their original shape, and improve their appearance.</p></div>
                </div>
                <div className='shadow-2xl transform transition-transform duration-300 hover:scale-110 p-2 rounded-md'>
                        <img src={dentures} alt="dentures.png" className='w-48' />
                        <div className='font-serif text-white'><p>Have you lost most or all of your teeth? Dentures are removable appliances that can replace missing teeth. </p></div>
                </div>
                <div className='shadow-2xl transform transition-transform duration-300 hover:scale-110 p-2 rounded-md'>
                        <img src={filling} alt="" />
                        <div className='font-serif text-white'><p>Cosmetic fillings, or tooth- colored fillings, are made of composite resin and glass particles. They are cemented onto the existing teeth using a bonding agent.</p></div>
                </div>
                <div className='shadow-2xl transfor transition-transform duration-300 hover:scale-110 p-4 rounded-md'>
                        <img src={cleaning} alt="cleaning," />
                        <div className='font-serif text-white'><p>You should visit the dentist every six months - one year for teeth cleanings. Tartar is a hard buildup of plaque that forms on the teeth. </p></div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Treatement
