import React from 'react';
import review1 from '../Images/Review Images/review1.png';
import review2 from '../Images/Review Images/review2.png';
import review3 from '../Images/Review Images/review3.png';
import review4 from '../Images/Review Images/review4.png';
import review5 from '../Images/Review Images/review5.png';
import review6 from '../Images/Review Images/review6.png';
import review7 from '../Images/Review Images/review7.png';
import review8 from '../Images/Review Images/review8.png';
import review9 from '../Images/Review Images/review9.png';

export const Reviews = () => {
  return (
    <div className="h-screen w-full min-h-screen bg-gray-500 flex justify-center items-center font-serif">
      <div className="h-screen min-h-screen flex justify-center items-center w-11/12 mt-14">
        <div className="grid grid-cols-3 gap-4 p-10 w-full">
          <div className="p-4">
            <img src={review1} alt="Review 1" className="w-full h-auto max-h-60 object-contain" />
          </div>
          <div className="p-4">
            <img src={review2} alt="Review 2" className="w-full h-auto max-h-60 object-contain" />
          </div>
          <div className="p-4">
            <img src={review3} alt="Review 3" className="w-full h-auto max-h-60 object-contain" />
          </div>
          <div className="p-4">
            <img src={review4} alt="Review 4" className="w-full h-auto max-h-60 object-contain" />
          </div>
          <div className="p-4">
            <img src={review5} alt="Review 5" className="w-full h-auto max-h-60 object-contain" />
          </div>
          <div className="p-4">
            <img src={review6} alt="Review 6" className="w-full h-auto max-h-60 object-contain" />
          </div>
          <div className="p-4">
            <img src={review7} alt="Review 7" className="w-full h-auto max-h-60 object-contain" />
          </div>
          <div className="p-4">
            <img src={review8} alt="Review 8" className="w-full h-auto max-h-60 object-contain" />
          </div>
          <div className="p-4">
            <img src={review9} alt="Review 9" className="w-full h-auto max-h-60 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
