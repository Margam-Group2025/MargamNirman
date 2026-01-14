import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const NewHero = () => {
  return (
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/20 z-10" /> {/* Overlay */}
          <img 
            src="https://static.wixstatic.com/media/a3674d_6fe68fee3b76436abcb656e3d4fc045a~mv2.png?originWidth=1152&originHeight=768"
            alt="Margam Nirman Architectural Excellence"
            id="hero-bg"
            className="h-full w-full opacity-20 grayscale"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Typography */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px w-12 bg-soft-gold" />
                  <span className="font-paragraph text-sm tracking-[0.2em] uppercase text-soft-gold">Est. Excellence</span>
                </div>
              </div>
              
              <div delay={0.1}>
                <h1 className="font-heading text-7xl lg:text-9xl font-bold leading-[0.9] tracking-tight text-primary">
                  Building <br />
                  <span className="text-soft-gold italic pr-4">Your</span>
                  Vision
                </h1>
              </div>

              <div delay={0.2}>
                <p className="font-paragraph text-xl lg:text-2xl text-secondary max-w-xl leading-relaxed border-l-2 border-soft-gold/30 pl-6">
                  We orchestrate the art of construction, real estate, and interior design to create spaces that inspire and endure.
                </p>
              </div>

              <div delay={0.3}>
                <div className="flex flex-wrap gap-6 pt-4">
                  <Link href="/servicepage" className="group relative px-8 py-4 bg-primary text-white overflow-hidden rounded-sm">
                    <span className="relative z-10 flex items-center gap-2 font-paragraph tracking-wide">
                      Explore Expertise <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-soft-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                  </Link>
                  <Link href="/consultation" className="group px-8 py-4 border border-primary/20 hover:border-primary text-primary transition-colors rounded-sm">
                    <span className="flex items-center gap-2 font-paragraph tracking-wide">
                      Book Consultation
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full">
              <motion.div 
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0 0 0 0)' }}
                transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
                className="absolute inset-0 z-10"
              >
                <img
                  src="https://static.wixstatic.com/media/a3674d_9ba469d7773c45b0a09e0e9978179df6~mv2.png?originWidth=1152&originHeight=768"
                  alt="Modern Architecture Detail"
                  width={800}
                  className="w-full h-full object-cover shadow-2xl"
                />
                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-soft-gold/40 -z-10" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="font-paragraph text-xs tracking-widest text-secondary uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-soft-gold to-transparent" />
        </motion.div>
      </section>
  );
};

export default NewHero;
