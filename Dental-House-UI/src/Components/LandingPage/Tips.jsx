import React from 'react'

const Tips = () => {
  return (
    <div>
      <div className='h-screen w-full min-h-screen bg-gradient-to-b from-indigo-400 from-5% to-slate-50 to-70% flex justify-center items-center font-serif'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-slate-400  shadow-2xl transfor transition-transform duration-300 hover:scale-110 p-4 rounded-md font-serif text-white'>
              <h1 className='text-xl  font-semibold'>Brush Regularly and Properly😁  :</h1>
              <div><p>Brush your teeth at least twice a day—once in the morning and once before bed.
              Ensure you're brushing for at least two minutes each time, using a soft-bristled toothbrush and gentle circular motions to avoid damaging your gums.</p></div>
            </div>
            <div className='bg-slate-400 shadow-2xl transfor transition-transform duration-300 hover:scale-110 p-4 rounded-md font-serif text-white'>
            <h1 className='text-xl  font-semibold'>Floss Daily:</h1>
              <div><p>Flossing removes food particles and plaque from between your teeth and under the gumline, areas that a toothbrush can't reach.Use dental floss or interdental brushes to clean between your teeth at least once a day.</p></div>
            </div>
            <div className='bg-slate-400  shadow-2xl transfor transition-transform duration-300 hover:scale-110 p-4 rounded-md font-serif text-white'>
              <h1 className='text-xl  font-semibold'>Limit Sugary and Acidic Foods 🧊🍹 :</h1>
              <div><p>Sugary foods and drinks feed harmful bacteria in your mouth. These bacteria produce acids as they digest the sugars, which can erode the tooth enamel and lead to cavities. By reducing sugar intake, you limit the fuel for these bacteria, thereby reducing the risk of tooth decay.</p></div>
            </div>
            <div className='bg-slate-400 shadow-2xl transfor transition-transform duration-300 hover:scale-110 p-4 rounded-md font-serif text-white'>
            <h1 className='text-xl  font-semibold'>Maintain a Healthy Diet 🍛 :</h1>
              <div><p>Eat plenty of fruits, vegetables, dairy products, and lean proteins to provide essential nutrients like calcium and vitamin D, which are vital for strong teeth.Limit sugary and acidic foods and drinks, as they can erode enamel and lead to cavities.</p></div>
            </div>
            <div className='bg-slate-400 shadow-2xl transfor transition-transform duration-300 hover:scale-110 p-4 rounded-md font-serif text-white'>
            <h1 className='text-xl  font-semibold'>Avoid Tobacco Products 🚭 :</h1>
              <div><p>Tobacco use significantly increases the risk of developing gum disease. The chemicals in tobacco can impair blood flow to the gums, leading to inflammation, infection, and the destruction of gum tissue and bone that support the teeth.</p></div>
            </div>
            <div className='bg-slate-400 shadow-2xl transfor transition-transform duration-300 hover:scale-110 p-4 rounded-md font-serif text-white'>

            <h1 className='text-xl  font-semibold'>Visit your dentist for regular checkup every 3-6 months 🧑🏻‍⚕️ :</h1>
              <div><p>Regular dental visits allow for early detection of issues such as cavities, gum disease, oral cancer, and other dental problems. Early treatment can prevent these conditions from worsening, reducing the need for more complex and costly procedures later on.</p></div>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default Tips
