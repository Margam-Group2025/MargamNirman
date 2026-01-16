import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import Link from 'next/link'
import { RiMenu3Fill } from 'react-icons/ri'

const Links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/servicepage' },
  { name: 'Projects', to: '/project' },
  { name: 'Consultation', to: '/consultation' },
  { name: 'Contact', to: '/contact' },
]

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-white flex items-center justify-center text-3xl"
      >
        <RiMenu3Fill />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-black text-white p-6 flex flex-col"
      >
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle>Mobile Navigation</SheetTitle>
          </VisuallyHidden>
          <SheetDescription />
        </SheetHeader>

        <nav className="flex flex-col gap-8 mt-8">
          {Links.map((link, index) => (
            <Link
              key={index}
              href={link.to}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium uppercase hover:text-gray-400 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default NavMobile
