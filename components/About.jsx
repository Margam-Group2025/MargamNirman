import React from 'react'
import Pretitle from './Pretitle'
import Button from './Button'
const About = () => {
  return (
    <div className='pt-16 xl:pt-32 ' id="about">
      <div className='container mx-auto'>
        <div className='flex flex-colgap-12 xl:ga-0 xl:flex-row xl:items-center'>
          {/* text */}

          <div className="flex-1">
            <div className='max-w-[540px]'>
            {/* heading */}
            <Pretitle text="About us"/>
            <h2 className='h2 mb-6'>
              Focused on Delivering Excellence In Every Project
            </h2>
            <p className='mb-11'>
              Our team of experienced professionals is dedicated to providing top-notch services that exceed client expectations. We specialize in a wide range of industries, ensuring tailored solutions that drive success and foster long-term partnerships.
            </p>
            {/* <div>
              <img src="" alt="" width={154} height={38}/>
              <p>Company CEO</p>
            </div> */}
            <Button text="Contact us"></Button>
          </div>
        </div> 
        {/* image */}
        <div className='flex-1 xl:flex xl:justify-center'>
          <div className='relative xl:w-[444px] xl:h-[493px]'>
         <div className='xl:w-[444px] xl:h-[493px] bg-accent absolute -top-4 -left-4 -z-10'>
          <img src="about.jpg" alt="img" width={430} height={480}/>
         </div>
         </div>
         </div>
      </div>
    </div>
    </div>
  )
}

export default About