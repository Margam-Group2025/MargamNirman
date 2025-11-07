import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import SliderBtn from './SliderBtn'

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
        {/* slide 1 */}
        <SwiperSlide>
            <div className='px-12 mb:pl-60 w-full flex items-center gap-9 h-full'>
                <div className='relative hidden xl:flex w-[90px] h-[90px]'>
                    <Image src="/Testimonals/avatar.jpg"
                      fill 
                      className="object-contain"
                      quality={100}
                      alt="img" 
                      />
                </div>
                {/* text */}
                <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit placeat, dignissimos omnis nostrum at vero soluta, eligendi a doloribus deserunt ipsa assumenda quos laboriosam voluptate ipsam atque cupiditate quis optio.</p>
                    <p>Jone Deo</p>
                </div>
            </div>
         </SwiperSlide>
         {/* slide 2 */}
         <SwiperSlide>
            <div className='px-12 mb:pl-60 w-full flex items-center gap-9 h-full'>
                <div className='relative hidden xl:flex w-[90px] h-[90px]'>
                    <Image src="/Testimonals/avatar.jpg"
                      fill 
                      className="object-contain"
                      quality={100}
                      alt="img" 
                      />
                </div>
                {/* text */}
                <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit placeat, dignissimos omnis nostrum at vero soluta, eligendi a doloribus deserunt ipsa assumenda quos laboriosam voluptate ipsam atque cupiditate quis optio.</p>
                    <p>Jone Deo</p>
                </div>
            </div>
         </SwiperSlide>
         {/* slide 3 */}
         <SwiperSlide>
            <div className='px-12 mb:pl-60 w-full flex items-center gap-9 h-full'>
                <div className='relative hidden xl:flex w-[90px] h-[90px]'>
                    <Image src="/Testimonals/avatar.jpg"
                      fill 
                      className="object-contain"
                      quality={100}
                      alt="img" 
                      />
                </div>
                {/* text */}
                <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit placeat, dignissimos omnis nostrum at vero soluta, eligendi a doloribus deserunt ipsa assumenda quos laboriosam voluptate ipsam atque cupiditate quis optio.</p>
                    <p>Jone Deo</p>
                </div>
            </div>
         </SwiperSlide>
         {/* slide 4 */}
         <SwiperSlide>
            <div className='px-12 mb:pl-60 w-full flex items-center gap-9 h-full'>
                <div className='relative hidden xl:flex w-[90px] h-[90px]'>
                    <Image src="/Testimonals/avatar.jpg"
                      fill 
                      className="object-contain"
                      quality={100}
                      alt="img" 
                      />
                </div>
                {/* text */}
                <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit placeat, dignissimos omnis nostrum at vero soluta, eligendi a doloribus deserunt ipsa assumenda quos laboriosam voluptate ipsam atque cupiditate quis optio.</p>
                    <p>Jone Deo</p>
                </div>
            </div>
         </SwiperSlide>

         {/* slider btn */}
         <div>
            <SliderBtn/>
         </div>
    </Swiper>
  )
}

export default Slider