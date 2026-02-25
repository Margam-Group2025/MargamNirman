import React from 'react'
import Link from 'next/link'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import path from 'path'

const socials =[
  {
    icon: <FaFacebookF />,
    path: 'https://www.facebook.com'
  },
  {
    icon: <FaTwitter />,  
    path: 'https://www.twitter.com'
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com'
  },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com'
  }
]
const Socials = ({conatinerStyles , iconStyles}) => {
  return (
    <div className={`${conatinerStyles}`}>
      {socials.map((item,index)=>{
        return(
          <Link href={item.path} key={index} className={`${iconStyles}`}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials