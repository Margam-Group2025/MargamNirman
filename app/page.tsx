"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home  from "@/components/Home";
import Topbar from "@/components/Topbar";

export default function RootLayout() {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
       <div>
        <Topbar />
        {/* Normal Header */}
        <Header />

        {/* Sticky Header */}
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
            headerActive ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Header />
        </div>

        {/* HOME PAGE CONTENT (NO ROUTING) */}
        <main>
          <Home />
        </main>

        <Footer />
      </div>
  );
}
