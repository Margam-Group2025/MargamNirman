"use client"
import React from 'react'
import {useSwiper} from 'swiper/react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const SliderBtn = () => {
    const swiper = useSwiper();
  return (
    <div className='w-max absolute bottom-2 right-2 flex gap-1 z-10'>
        <button className='bg-accent text-white rounded-full flex items-center justify-center
        w-10 h-10'>
            <RiArrowLeftSLine size={30} onClick={() => swiper.slidePrev()}/>
        </button>
        <button className='bg-accent text-white rounded-full flex items-center justify-center
        w-10 h-10'>
            <RiArrowRightSLine size={30} onClick={() => swiper.slideNext()}/>
        </button>
    </div>
  )
}

export default SliderBtn