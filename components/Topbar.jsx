import React from 'react'
import { RiPhoneFill , RiMailFill } from 'react-icons/ri'
import Socials from './Socials'
const Topbar = () => {
  return (
    <section className='py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#f6cb56] to-[#efbc3b] 
     flex items-center '
     id="home">
      <div className='container mx-auto '>
        <div className='flex flex-col xl:flex-row items-center justify-between gap-6'>
          <div className='hidden xl:flex items-center gap-8'>
            {/* phone */}
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-primary text-white flex items-center justify-center'>
                <RiPhoneFill size={20} />
              </div>
              <p className='font-medium text-primary '>+91 7749950999</p>
            </div>
            {/* mail */}
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-primary text-white flex items-center justify-center'>
                <RiMailFill size={20} />
              </div>
              <p className='font-medium text-primary '>margamnirman@gmail.com</p>
              </div>
          </div>
          {/* socials */}
          <Socials 
          conatinerStyles="flex item-center gap-8 mx-auto xl:mx-0"
          iconStyles="text-primary"
          />
        </div>
      </div>
    </section>
  )
}

export default Topbar