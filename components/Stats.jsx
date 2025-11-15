"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 15,
    endCountText: "%",
    text: "Years of Experience",
  },
  {
    endCountNum: 11,
    endCountText: "+",
    text: "Projects Completed",
  },
  {
    endCountNum: 100,
    endCountText: "%",
    text: "Client Satisfaction",
  },
  {
    endCountNum: 10,
    endCountText: "+",
    text: "Achivements",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="mt-16 xl:mt-32 bg-primary py-12 w-full text-white"
    >
      <div className="container mx-auto">
        <div
          className="
            grid grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-4 
            gap-y-10 gap-x-6 
            text-center
            items-center
          "
        >
          {statsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-2 flex items-center">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.endCountNum}
                    delay={0.3}
                    duration={2.5}
                  />
                )}
                <span className="ml-1">{item.endCountText}</span>
              </div>
              <p className="text-sm sm:text-base xl:text-lg text-white/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
