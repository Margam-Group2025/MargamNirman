"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";
import { motion } from "framer-motion";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-primary text-gray-300">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[20px]"
        >
          {/* Logo and Text */}
          <div className="flex-1 pt-4">
            <Link href="/" className="flex mb-6">
              <Image src="/logo/Margam.png" width={210} height={40} alt="logo" />
            </Link>
            <p className="text-border max-w-[280px] leading-relaxed text-sm">
              Building excellence through innovation, integrity, and unmatched
              craftsmanship. Let’s create something extraordinary together.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-8 border-b border-border/20 pb-3 inline-block">
              Contact
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4 hover:text-white transition-all">
                <RiMapPin2Fill className="text-accent text-xl mt-1" />
                <p>Margam Nirman,3rd Floor,C/o-Hdfc bank,Biju Pattnaik College Rd,Jaydev Vihar, Bhubaneswar,odisha 751013</p>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-all">
                <RiMailFill className="text-accent text-xl" />
                <p>admin@margamnirman.com</p>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-all">
                <RiPhoneFill className="text-accent text-xl" />
                <p>+91 7749950999</p>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-8 border-b border-border/20 pb-3 inline-block">
              Newsletter
            </h4>
            <p className="mb-8 text-sm leading-relaxed">
              Subscribe to our newsletter and stay updated with the latest
              insights, trends, and project updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#3a3b3d] h-14 w-full pl-5 pr-14 rounded-lg outline-none placeholder:text-gray-400 text-sm focus:ring-2 focus:ring-accent transition-all"
              />
              <button className="bg-accent absolute right-2 top-2 bottom-2 w-10 h-10 rounded-lg text-primary text-xl flex items-center justify-center hover:bg-accent/90 transition-all">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-border/20"></div>

      {/* Bottom Footer */}
      <div className="container mx-auto xl:px-0 py-10 flex flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-border text-sm text-center xl:text-left">
          © {new Date().getFullYear()} <span className="text-white font-medium">Margam Nirman</span>. All rights reserved.
        </p>
        <Socials
          conatinerStyles="flex gap-6 text-white"
          iconStyles="hover:text-accent transition-all text-lg"
        />
      </div>
    </footer>
  );
};

export default Footer;
