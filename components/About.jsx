"use client";
import React from "react";
import Pretitle from "./Pretitle";
import Button from "./Button";
import Image from "next/image";

const About = () => {
  return (
    <section className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center gap-12 xl:gap-0">
          {/* Text Section */}
          <div className="flex-1">
            <div className="max-w-[540px] mx-auto xl:mx-0 text-center xl:text-left">
              <Pretitle text="About Us" />
              <h2 className="h2 mb-6">
                Focused on Delivering Excellence in Every Project
              </h2>
              <p className="mb-10 text-gray-600 leading-relaxed">
                Our team of experienced professionals is dedicated to providing
                top-notch services that exceed client expectations. We
                specialize in a wide range of industries, ensuring tailored
                solutions that drive success and foster long-term partnerships.
              </p>
              <Button text="Contact Us" />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center xl:justify-end relative">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
