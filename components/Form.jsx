import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { Input } from './ui/input'
import Button from './Button'

const Form = () => {
  return (
    <form className='flex flex-col'>
      <div className='flex flex-col gap-[20px] mb-[20px]'>
        <Input type='text' placeholder='Full Name' />
        <Input type='email' placeholder='Email Address' />

        {/* Fixed section */}
        <div className='flex flex-col xl:flex-row gap-[20px]'>
          <Input type='tel' placeholder='Phone number' />
          <Select>
            <SelectTrigger className='w-full rounded-none h-[54px] text-secondary outline-none'>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a Service</SelectLabel>
                <SelectItem value='construction'>Construction</SelectItem>
                <SelectItem value='real estate'>Real Estate</SelectItem>
                <SelectItem value='home & interior'>Home & Interior</SelectItem>
                <SelectItem value='consultation'>Consultation</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <textarea
          className="h-[180px] resize-none rounded-none"
          placeholder="Enter your Message"
        />
        <Button text="Send Message" />
      </div>
    </form>
  )
}

export default Form
