import React from 'react' 
import Link from 'next/link'
import Image from 'next/image' 

const Logo = () => { 
    return ( 
    <Link href="/">
         <Image src="/logo/Margam.png" 
          width={200} height={42} alt='logo'
          className='p-2'>
         </Image> 
     </Link> 
     
 ) } 
export default Logo