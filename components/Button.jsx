import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const Button = ({text}) => {
  return (
    <button className='w-[210px] h-[54px] py-[10px] pl-[10px] pr-[5px] flex items-center
     justify-between min-w-[200px] group bg-accent'>
        <div className='flex-1 text-center tracking-[1.2px] font-primary font-bold
        text-primary text-sm uppercase'>
            {text}
        </div>
        <div className='w-11 h-11 bg-primary flex items-center justify-center'>
            <RiArrowRightSLine className='text-accent text-2xl group-hover:translate-x-1
            transition-transform duration-300 ease-in-out'/>
        </div>
     </button>
  )
}

export default Button