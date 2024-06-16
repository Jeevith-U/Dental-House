import React from 'react'
import insta from '../Images/insta 3.png'
import footerimg from '../Images/footer_img1.jpeg'

const Footer = () => {
  return (
    <div className='min-h-96 bg-gray-600 flex justify-between items-start p-4'>
    <div className='flex flex-col space-y-4'>
      <div className='ml-40'>
          <div className=' border-white border-8 p-0'>
            <img src={footerimg} alt="Image 1" className="h-auto w-96 object-cover"/>
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

       <div className="flex space-x-4 ">

        <a href="https://www.instagram.com/drvarshadentalhouse?igsh=MXFsNzd6cGI5NGYzOQ%3D%3D" className="text-white"><img src={insta} className='w-8 m-3' /> </a>
      </div> 

      <div>
  <div className='font-serif text-white text-xl'>
    <a href="https://www.google.com/maps/place/Dental+House/@12.289114,76.6307613,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf659f1c3d7549:0xc1e4b0528b94fac2!8m2!3d12.289114!4d76.6307613!16s%2Fg%2F11h4x2rcfd?entry=ttu" target="_blank" rel="noopener noreferrer">Location</a>
  </div>
  <a href="https://www.google.com/maps/place/Dental+House/@12.289114,76.6307613,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf659f1c3d7549:0xc1e4b0528b94fac2!8m2!3d12.289114!4d76.6307613!16s%2Fg%2F11h4x2rcfd?entry=ttu" target="_blank" rel="noopener noreferrer">
    <div className='max-w-xs p-4'>Shop 187/A, Anikethana Rd, opp. Ashokapuram Police Station, I Block, Kuvempu Nagara, Mysuru, Karnataka 570023</div>
  </a>
</div>
    </div>
  </div>
  
  )
}

export default Footer
