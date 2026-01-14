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
import { Link as ScrollLink } from 'react-scroll'
import { RiMenu3Fill } from 'react-icons/ri'

const Links = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Projects', to: 'projects' },
  { name: 'Consultation', to: 'consultation' },
  { name: 'Contact', to: 'contact' },
]

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Menu Button */}
      <SheetTrigger
        className="text-white flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>

      {/* Mobile Menu Panel */}
      <SheetContent
        side="right"
        className="bg-black text-white p-6 flex flex-col"
      >
        {/* Accessibility title (hidden) */}
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle>Mobile Navigation</SheetTitle>
          </VisuallyHidden>
          <SheetDescription />
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-8 mt-8">
          {Links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              smooth
              spy
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium uppercase cursor-pointer hover:text-gray-400 transition-colors duration-200"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default NavMobile
