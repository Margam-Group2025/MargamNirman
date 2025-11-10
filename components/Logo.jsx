import React from 'react' 
import Link from 'next/link'
import Image from 'next/image' 

const Logo = () => { 
    return ( 
    <Link href="/home">
         <Image src="/logo/Margam.png" 
          width={200} height={42} alt='logo'>
         </Image> 
     </Link> 
     
 ) } 
export default Logo