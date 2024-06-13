import React from 'react'

const Footer = () => {
  return (
    <div className='min-h-96 bg-gray-600 flex justify-between items-start p-4'>
    <div className='flex flex-col space-y-4'>
      <div className='ml-40'>
          <div>
            <img src="path/to/image1.jpg" alt="Image 1" className="h-32 w-32 object-cover"/>
          </div>
          <div>
            <img src="path/to/image2.jpg" alt="Image 2" className="h-32 w-32 object-cover"/>
          </div>
          <div>
            <img src="path/to/image3.jpg" alt="Image 3" className="h-32 w-32 object-cover"/>
          </div>
      </div>
    </div>
  
    <div className='flex flex-col justify-center mr-40 '>
      <h1 className='text-white mb-4 text-2xl'>Follow us:</h1>
  
      <div>
        <div className='font-serif text-white text-xl'>Phone 📞</div>
        <div><a href="tel:+917208001030"></a>+91 7208001030</div>
      </div>

      <div>
        <div className='font-serif text-white text-xl'>Email 📧 </div>
        <div className='bg-slate-200'>
          <a href="mailto:drvarsha@outlook.com"><button>drvarsha@outlook.com</button></a></div>

      </div>

      {/* <div className="flex space-x-4 ">

        <a href="#" className="text-white">Facebook</a>
        <a href="#" className="text-white">Twitter</a>
        <a href="#" className="text-white">Instagram</a>
      </div> */}

      <div>
          <div className='font-serif text-white text-xl'>Location</div>
          <div className='max-w-xs p-4'>Shop 187/A, Anikethana Rd, opp. Ashokapuram Police Station, I Block, Kuvempu Nagara, Mysuru, Karnataka 570023</div>
      </div>
    </div>
  </div>
  
  )
}

export default Footer
