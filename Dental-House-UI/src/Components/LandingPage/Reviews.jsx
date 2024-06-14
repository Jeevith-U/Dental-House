import React from 'react'
import review1 from '../Images/Review Images/review1.png'
import review2 from '../Images/Review Images/review2.png'
import review3 from '../Images/Review Images/review3.png'
import review4 from '../Images/Review Images/review4.png'
import review5 from '../Images/Review Images/review5.png'
import review6 from '../Images/Review Images/review6.png'
import review7 from '../Images/Review Images/review7.png'
import review8 from '../Images/Review Images/review8.png'
import review9 from '../Images/Review Images/review1.png'
export const Reviews = () => {
  return (
    <div className="h-screen w-full min-h-screen bg-gray-500 flex justify-center items-center font-serif">
      <div className="h-screen min-h-screen flex justify-center items-center w-11/12 mt-14">
        <div className='grid grid-cols-3 gap-4 p-4 w-full'>
          <div className=' p-4'>
            <img src={review1} /> 
          </div>
          <div className=' p-4'>
            <img src={review2} /> 
          </div>
          <div className=' p-4'>
             <img src={review3} /> 
          </div>
          <div className=' p-4'>
             <img src={review4} />  
          </div>
          <div className=' p-4'>
              <img src={review5} />   
          </div>
          <div className=' p-4'>
              <img src={review6} /> 
          </div>
          <div className=' p-4'>
              <img src={review7} /> 
          </div>
          <div className=' p-4'>
              <img src={review8} /> 
          </div>
          <div className=' p-4'>
            <img src={review9} />
          </div>
        </div>
      </div>
    </div>
  )
}
