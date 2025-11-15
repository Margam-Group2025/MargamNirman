"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pretitle from "./Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";

// Example project data
const workData = [
  {
    img: "/works/img1.webp",
    name: "Work 1",
    description: "A luxury triplex project showcasing modern architecture, smart layouts, and premium finishes.",
    link: "https://www.google.com/",
  },
  {
    img: "/works/img2.webp",
    name: "Work 2",
    description: "Elegant apartment complex blending modern comfort with eco-friendly construction.",
    link: "https://www.google.com/",
  },
  {
    img: "/works/img3.webp",
    name: "Work 3",
    description: "Every corner of this residence reflects thoughtful planning, from its smart home integrations to its high-end finishes.",
    link: "https://www.google.com/",
  },
  {
    img: "/works/img4.webp",
    name: "Work 4",
    description: "Premium materials and elegant textures come together to create a home that feels both contemporary and inviting.",
    link: "https://www.google.com/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Work = () => {
  return (
    <section className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="Our Work" center />
          <h2 className="h2 mb-3"> Our Signature Creations</h2>
          <p className="mb-11 max-w-[450px] mx-auto text-muted-foreground">
            Explore a selection of our recent projects that showcase our
            expertise and commitment to excellence. From innovative designs to
            cutting-edge solutions, see how we bring ideas to life.
          </p>
        </motion.div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {workData.map((work, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[380px] overflow-hidden group rounded-2xl shadow-md"
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <Image
                src={work.img}
                alt={work.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                quality={100}
              />

              {/* Overlay Box */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] 
                bg-primary rounded-xl flex justify-between items-center text-white p-4
                md:translate-y-[150px] md:group-hover:translate-y-0 transition-all duration-500"
              >
                <div>
                  <h4 className="font-primary font-semibold uppercase text-sm mb-1">
                    {work.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs">
                    <RiCheckboxCircleFill className="text-accent text-base" />
                    <p>{work.description}</p>
                  </div>
                </div>

                <Link
                  href={work.link}
                  target="_blank"
                  className="w-[44px] h-[44px] xl:w-[60px] xl:h-[60px] bg-accent
                  text-primary text-2xl flex justify-center items-center rounded-full
                  hover:scale-110 transition-transform duration-300"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
