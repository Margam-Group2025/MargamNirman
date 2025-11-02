"use client";
import React from 'react'
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { div } from 'framer-motion/client';

const statsData =[
  {
    endCountNum : 25,
    endCountText: "%",
    text: "Years of Experience"
  },
  {
    endCountNum : 150,
    endCountText: "+",
    text: "Projects Completed"
  },
  {
    endCountNum : 100,
    endCountText: "%",
    text: "Client Satisfaction"
  },
  {
    endCountNum : 50,
    endCountText: "+",
    text: "Awards Won"
  }
]
const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.2 });
  return (
    <div ref={ref} className='mt-16 xl:mt-32 bg-primary py-10 w-full'>
      <div className='container mx-auto h-full'>
        <div className='text-white flex justify-between items-center flex-wrap gap-y-6 md:flex-nowrap h-full flex-row xl:text-left'>
          {statsData.map((item,index)=>{
            return(
              <div className='w-full' key={index}>
                <div className='text-5xl font-bold mb-2'>
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      delay={0.5}
                      duration={3} 
                      />
                  )}
                <span>{item.endCountText}</span>
                </div>
                <span>{item.text}</span> 
                </div>
            )
          })}
        </div>
        </div>
    </div>
  )
}

export default Stats