"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import {
  MdOutlineRealEstateAgent,
  MdOutlineAddHomeWork,
} from "react-icons/md";
import { PiWallFill, PiUserGearFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";

// Services data
const servicesData = [
  {
    key: "home-interior",
    title: "Home and Interior",
    description:
      "Transform your living spaces with our expert interior painting services. We use high-quality paints and techniques to bring your vision to life, ensuring a flawless finish that enhances the beauty of your home.",
    icon: <MdOutlineAddHomeWork size={60} />,
    imageUrl: "/services/interior-painting.jpg",
    serviceList: [
      "Ecommerce Platform Development",
      "Product Listing and Management",
      "Secure Payment Integration",
      "User-Friendly Interface Design",
      "Order Tracking and Management",
      "Customer Support Integration",
    ],
    thumbs: ["/services/ecommerce1.jpg", "/services/ecommerce2.jpg"],
  },
  {
    key: "construction-services",
    title: "Construction Services",
    description:
      "From foundation to finishing touches, our construction services cover every aspect of building your dream home or commercial space. We prioritize quality craftsmanship, timely delivery, and budget-friendly solutions.",
    icon: <FaTools size={40} />,
    imageUrl: "/services/construction.jpg",
    serviceList: [
      "Residential Construction",
      "Project Management and Planning",
      "Quality Assurance and Safety",
      "Custom Design",
      "Sustainable Building Practices",
      "Post-Construction Support",
    ],
    thumbs: ["/services/construction1.jpg", "/services/construction2.jpg"],
  },
  {
    key: "real-estate-services",
    title: "Real Estate Services",
    description:
      "Navigate the real estate market with confidence using our comprehensive services. Whether you're buying, selling, or renting, our experienced agents provide personalized support to help you achieve your property goals.",
    icon: <MdOutlineRealEstateAgent size={40} />,
    imageUrl: "/services/real-estate.jpg",
    serviceList: [
      "Property Buying and Selling",
      "Rental and Leasing Services",
      "Market Analysis and Valuation",
      "Property Management Solutions",
      "Legal and Financial Guidance",
      "Client-Centric Approach",
    ],
    thumbs: ["/services/realestate1.jpg", "/services/realestate2.jpg"],
  },
  {
    key: "consultation-services",
    title: "Consultation Services",
    description:
      "Our expert consultation services offer tailored advice and strategies to help you make informed decisions about your property investments, renovations, and maintenance. We work closely with you to understand your needs and provide actionable solutions.",
    icon: <PiUserGearFill size={40} />,
    imageUrl: "/services/consultation.jpg",
    serviceList: [
      "Property Investment Advice",
      "Renovation and Maintenance Planning",
      "Market Trend Analysis",
      "Customized Consultation Sessions",
      "Risk Assessment and Management",
      "Ongoing Support and Follow-Up",
    ],
    thumbs: ["/services/consultation1.jpg", "/services/consultation2.jpg"],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("home-interior");

  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <Pretitle text="Our Services" center/>
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Offering tailored construction solutions, from planning to
            completion, with a focus on quality and innovation.
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="home-interior"
          onValueChange={(value) => setActiveTab(value)}
          className="flex flex-col xl:flex-row w-full gap-[30px]"
        >
          {/* Tabs List */}
          <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
            {servicesData.map((item) => (
              <TabsTrigger
                key={item.key}
                value={item.key}
                className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none"
              >
                <div
                  className={`w-[98px] h-[98px] flex items-center justify-center absolute left-0 transition-colors duration-300 ${
                    activeTab === item.key
                      ? "bg-primary text-white"
                      : "bg-accent text-primary"
                  }`}
                >
                  <div className="text-4xl">{item.icon}</div>
                </div>
                <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[180px] ml-28">
                  {item.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          <div className="flex-1 bg-white shadow-custom p-[30px] rounded-2xl overflow-hidden relative">
            <AnimatePresence mode="wait">
              {servicesData.map(
                (item) =>
                  activeTab === item.key && (
                    <TabsContent key={item.key} value={item.key}>
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col xl:flex-row gap-6 xl:gap-[40px]"
                      >
                        {/* Thumbnails */}
                        <div className="flex gap-4 xl:flex-col">
                          {item.thumbs.map((thumb, index) => (
                            <div
                              key={index}
                              className="relative w-[140px] h-[140px] xl:w-[200px] xl:h-[200px]"
                            >
                              <Image
                                src={thumb}
                                fill
                                alt="thumb img"
                                className="object-cover rounded-xl"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Text content */}
                        <div className="flex-1">
                          <h3 className="h3 mb-6">{item.title}</h3>
                          <p className="mb-10 text-gray-600">
                            {item.description}
                          </p>

                          <ul className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                            {item.serviceList.map((service, index) => (
                              <li
                                key={index}
                                className="text-base flex items-center gap-2"
                              >
                                <PiWallFill className="text-primary" />
                                {service}
                              </li>
                            ))}
                          </ul>

                          <Button text="Learn More" />
                        </div>
                      </motion.div>
                    </TabsContent>
                  )
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
