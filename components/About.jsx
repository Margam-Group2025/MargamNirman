"use client";
import React from "react";
import Pretitle from "./Pretitle";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center gap-12 xl:gap-0">
          {/* Text Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="max-w-[540px] mx-auto xl:mx-0 text-center xl:text-left">
              <Pretitle text="About Us" />
              <motion.h2
                className="h2 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Focused on Delivering Excellence in Every Project
              </motion.h2>
              <motion.p
                className="mb-10 text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our team of experienced professionals is dedicated to providing
                top-notch services that exceed client expectations. We specialize
                in a wide range of industries, ensuring tailored solutions that
                drive success and foster long-term partnerships.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button text="Contact Us" />
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 flex justify-center xl:justify-end relative"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="relative w-[300px] h-[340px] md:w-[380px] md:h-[420px] xl:w-[444px] xl:h-[493px]">
              {/* Accent box behind image */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent rounded-2xl -z-10"></div>

              {/* Image */}
              <Image
                src="/about.jpg"
                alt="About image"
                fill
                className="object-cover rounded-2xl shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 444px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
