import React from 'react'
import { RiChat1Line ,RiMapPin2Line,RiSmartphoneLine } from 'react-icons/ri'
import Socials from './Socials'
import Form from './Form'
const Contact = () => {
  return (
    <section className='pt-16 xl:pt-32' id='contact'>
      <div className='container mx-auto'>
        <div className='w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent'>
          <div className='flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]'>
          {/* info */}
          <div className='w-full xl:max-w-[380px] xl:pr-[70px] xl:border-border/40 h-[640px]'>
           <h4 className='text-[26px] font-primary font-bold mb-6'>Contact us</h4>
           <p className='mb-9'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita hic soluta iure iste quos porro debitis beatae minima doloremque.
            </p>
            {/* contact item */}
            <div className='flex flex-col gap-[20px] mb-16'>
              {/* contact item */}
              <div className='flex items-start gap-[20px]'>
                <div>
                 <RiChat1Line className='text-[28px] text-accent'/>
                </div>
                <div>
                  <h5 className='text-[22px] font-semibold font-primary landing-d-none mb-2'>Chat With Us</h5>
                  <p className='mb-4'>Our team here to help you</p>
                  <p className='font-semibold text-primary'>margamnirman@gmail.com</p>
                </div>
               </div>
              <div className='flex items-start gap-[20px]'>
                <div>
                 <RiSmartphoneLine className='text-[28px] text-accent'/>
                </div>
                <div>
                  <h5 className='text-[22px] font-semibold font-primary landing-d-none mb-2'>Phone</h5>
                  <p className='mb-4'>Mon-Sat from 10am to 7pm</p>
                  <p className='font-semibold text-primary'>+91 1234567890</p>
                </div>
                </div>
              <div className='flex items-start gap-[20px]'>
                <div>
                 <RiMapPin2Line className='text-[28px] text-accent'/>
                </div>
                <div>
                  <h5 className='text-[22px] font-semibold font-primary landing-d-none mb-2'>Office</h5>
                  <p className='mb-4'>Come to our office </p>
                  <p className='font-semibold text-primary'>Margam Nirman,3rd Floor,C/o-Hdfc bank,Jaydev Vihar, Bhubaneswar,odisha 751013</p>
                </div>
              </div>
            </div>
            <Socials 
              conatinerStyles="flex gap-[40px]"
              iconStyles="text-primary text-[20px]"/>
          </div>
          
          {/* form */}
          <div className='flex-1'>
            <h2 className='h2 mb-3 '>Request A Quote</h2>
            <p className='mb-9'>
              Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. Iure explicabo recusandae optio? 
               Ipsa aspernatur eaque ducimus quis, incidunt sequi sit cum tenetur beatae voluptates velit culpa, voluptatem, rem reiciendis atque.
            </p>
            <Form />
          </div>
        </div>
        </div>
      </div>
     </section>

  )
}

export default Contact