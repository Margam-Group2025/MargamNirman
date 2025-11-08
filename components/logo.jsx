import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Logo = () => {
  return (
    <Link href="">
        <Image src="/logo/Margam.png" width={230} height={48} alt='logo'></Image>
    </Link>
  )
}

export default Logo