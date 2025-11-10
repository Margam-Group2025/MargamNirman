"use client";
import React from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri';
import {Link as ScrollLink} from 'react-scroll';
import NavMobile from './NavMobile';
import Logo from './Logo'
const Links =[
  {name: 'Home', to: 'home'},
  {name: 'About', to: 'about'},
  {name: 'Services', to: 'services'},
  {name: 'Projects', to: 'projects'},
  {name: 'Contact', to: 'contact'},

]
const Header = () => {
  return (
    <header className='bg-primary py-4 sticky top-0 z-50'>
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
      {/* logo */}
      <div>
        <Logo/>
      </div>
      <nav className='hidden xl:flex items-center gap-12'>
      <ul className='flex'>
        {Links.map((link, index) => {
          return (
            <li key={index}
            className='text-white text-sm uppercase font-primary font-medium 
            tracking-[1.2px] after:content-[""] after:block after:w-full after:h-[2px] 
            after:bg-white after:scale-x-0 after:origin-right after:transition-transform 
            after:duration-300 hover:after:scale-x-100 hover:after:origin-left 
            mr-[42px] last:mr-0 cursor-pointer'
            >
              <ScrollLink to={link.to} 
              smooth 
              spy 
              className="cursor-pointer"
              activeClass="text-accent"
              >
              {link.name}
              </ScrollLink>
              </li>
          )
        })}
          
      </ul>
      {/* button */}
      <button className='w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex 
      items-center justify-between min-w-[200px] bg-white group'>
        <div className='flex-1 text-center tracking-[1.2px] font-primary font-bold 
        text-primary text-sm uppercase'>
          Get a quote 
        </div>
        <div className='w-11 h-11 bg-primary flex items-center justify-center '>
          <RiArrowRightUpLine className='text-white group-hover:rotate-45 transition-all duration-200'/>
        </div>
      </button>
      </nav>
      {/* nav mobile */}
      <div className='xl:hidden'>
        <NavMobile />
        </div>
    </div>
    </div>
    </header>
  )
}

export default Header