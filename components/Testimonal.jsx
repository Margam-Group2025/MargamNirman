import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Pretitle from './Pretitle'
import Slider from './Slider'
const Testimonal = () => {
  return (
    <section className='pt-16 xl:pt-32'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row relative'>
          <div className='flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0'>
            <Pretitle text="Testimonal"/>
            <h2 className='h2 mb-6 '>Build On Trust ,Proven By Results</h2>
            <p className='mb-10 max-w-[420px]'>
              Our clients love us! But don't just take our word for it. Hear what
              they have to say about working with us.
            </p>
            <Button text="Work with us"></Button>
          </div>
          {/* img & slider */}
          <div className='flex-1 flex flex-col xl:flex-row xl:justify-end'>
            <div className='relative hidden xl:flex xl:w-[570px] xl:h-[580px]'>
           <Image
            src="/hero.jpeg"
            fill
            className='object-cover'
            quality={100}
            alt="Client testimonial"
           />
           </div>
            <div className='xl:absolute xl:bottom-0 xl:right-[160px] 
            relative max-w-max bg-pink-300'>
              <Slider/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonal