"use client";

import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonal from "@/components/Testimonal";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Topbar always visible */}
      <Topbar />
      <Header />
      {/* Sticky header that appears after scrolling */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-500 ${
          headerActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* Page sections */}
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonal />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
