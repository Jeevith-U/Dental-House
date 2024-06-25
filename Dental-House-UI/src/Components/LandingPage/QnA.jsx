
 import React from 'react'
 
 const QnA = () => {
   return (
    <div className='min-h-screen bg-gradient-to-b from-indigo-400 from-5% to-slate-50 to-70%'>
    <div className='bg-slate-400 flex h-10 '>
      <div className='mr-4'>
        <button>QnA</button>
      </div>
      <div className='mr-4'>
        <button>Tips</button>
      </div>
      <div>
        <button>Rating</button>
      </div>
    </div>
    <div className='flex font-serif h-full'>
      <div className='body space-y-6 mb-2'>
        <div>
            <div className='text-xl font-serif font-semibold mb-2'><p>1. Should we clean the tooth on a daily basis?</p></div>
            <div className='font-serif'><p>Ans:- Yes! You should get your teeth cleaned every 6-12 months because plaque and calculus can damage your gums.</p></div>
            </div>
        <div>
              <div className='text-xl font-serif font-semibold mb-2'><p>2. Will the tooth shake after cleaning?</p></div>
                <div className='font-serif'><p>Ans:- If you get your teeth cleaned every 6-12 months, your gums will be strong, which will make your teeth strong. During the cleaning procedure, we remove the plaque and calculus that get deposited between your teeth and gums.</p></div>
          </div>
        <div>
            <div className='text-xl font-serif font-semibold mb-2'><p>3. Will eyes become weak after extraction?</p></div>
                    <div className='font-serif'><p>Ans:- No, extracting teeth does not weaken your eyes. There is no direct connection between dental extractions and eye health.</p></div>
            </div>

            <div>
            <div className='text-xl font-serif font-semibold mb-2'><p>4. Why to replace the missing tooth?</p></div>
                    <div className='font-serif'><p>Ans:- If you don't replace your missing tooth, the opposite tooth will try to cover the space, and the neighboring teeth will tilt. This can create problems with your TMJ joint in the future.</p></div>
            </div>

            <div>
            <div className='text-xl font-serif font-semibold mb-2'><p>5. Why treat milk tooth? They will fall in a few years?</p></div>
                    <div className='font-serif'><p>Ans:- If you don't treat the small fillings, it will result in RCT and then we will need to remove the tooth. If we remove the tooth at an early stage, it will result in crowding or overlapping of the permanent tooth, and children will not be able to learn to chew properly.</p></div>
            </div>
      </div>
    </div>
  </div>
   )
 }
 
 export default QnA
 