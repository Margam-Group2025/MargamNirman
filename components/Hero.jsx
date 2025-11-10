import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="h-[70vh] md:h-[90vh] bg-hero bg-no-repeat bg-cover bg-center relative flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/60 to-black/80 z-10"></div>

      {/* Content */}
      <div className="container mx-auto relative z-20 px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center
          xl:items-start max-w-3xl"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            DISCOVER YOUR DREAM HOME
          </motion.h1>

          <motion.p 
            className="text-base md:text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            From concept to completion, we ensure every detail is optimized for strength,
            durability, and aesthetic appeal — creating spaces that stand the test of time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Button text="Explore our Work" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
