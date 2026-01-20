"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Building2,
  Hammer,
  Home,
  ShoppingCart,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
  MoveRight,
} from 'lucide-react';
import Hero from './Hero';

// --- Data ---

const CANONICAL_SERVICES = [
  {
    icon: Building2,
    title: 'Real Estate Services',
    description:
      'Bespoke residential & commercial property solutions tailored to your exacting standards.',
    link: '/servicepage',
    imageId: 'service-real-estate',
  },
  {
    icon: Hammer,
    title: 'Construction Services',
    description:
      'End-to-end construction, civil work, and project execution with uncompromising quality.',
    link: '/servicepage',
    imageId: 'service-construction',
  },
  {
    icon: Home,
    title: 'Home & Interior',
    description:
      'Interior design, modular kitchen, renovation, and turnkey solutions for modern living.',
    link: '/servicepage',
    imageId: 'service-interior',
  },
  {
    icon: ShoppingCart,
    title: 'Bricknbar E-commerce',
    description:
      'The premier online platform for sourcing premium building & construction materials.',
    link: '/servicepage',
    imageId: 'service-bricknbar',
  },
];

const CANONICAL_VALUES = [
  {
    title: 'Quality Craftsmanship',
    description: 'Excellence in every detail, from foundation to finish.',
  },
  {
    title: 'Timely Delivery',
    description: 'Respecting your time with projects completed on schedule.',
  },
  {
    title: 'Innovative Solutions',
    description: 'Modern approaches to construction and design challenges.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your vision is our blueprint. We build around your dreams.',
  },
];

// --- Helper Components ---

const Reveal = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParallaxImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div
        style={{ y, scale }}
        className="w-full h-[120%] absolute -top-[10%] left-0"
      >
        <img
          src={src}
          alt={alt}
          width={1200}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-soft-gold/40 to-transparent" />
);

// --- Main Component ---

export default function HomePage() {
  const containerRef = useRef(null);

  useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground selection:bg-soft-gold/30"
    >
      {/* HERO */}
      <Hero className="mt-0"/>

      {/* DIVIDER */}

      <SectionDivider />
      {/* --- INTRODUCTION / VISION --- */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <Reveal>
                  <h2 className="font-heading text-5xl lg:text-6xl text-primary mb-6">
                    The Art of <br />
                    <span className="text-soft-gold italic">Precision</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="w-24 h-1 bg-primary mb-8" />
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="font-paragraph text-lg text-secondary leading-relaxed">
                    At Margam Nirman, we don't just build structures; we craft legacies. Our philosophy is rooted in the seamless integration of robust engineering and refined aesthetics.
                  </p>
                </Reveal>
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-24">
              <Reveal className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-[4/5] relative overflow-hidden group">
                  <ParallaxImage 
                    src="https://static.wixstatic.com/media/a3674d_3abdc975045146c486732975cd5d8f1f~mv2.png?originWidth=768&originHeight=960"
                    alt="Interior Design Excellence"
                    id="vision-1"
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="space-y-6">
                  <h3 className="font-heading text-3xl text-primary">Holistic Approach</h3>
                  <p className="font-paragraph text-secondary">
                    From the first sketch to the final coat of paint, our integrated services ensure that your vision remains uncompromised. We bridge the gap between architectural dreams and structural reality.
                  </p>
                  <Link href="/about" className="inline-flex items-center gap-2 text-soft-gold hover:text-primary transition-colors font-paragraph uppercase tracking-widest text-sm border-b border-soft-gold pb-1">
                    Read Our Story <MoveRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>

              <Reveal className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div className="md:order-2 aspect-[4/3] relative overflow-hidden">
                   <ParallaxImage 
                    src="https://static.wixstatic.com/media/a3674d_d2a19fe47e104d6d874073ff1f0a0b77~mv2.png?originWidth=768&originHeight=960"
                    alt="Construction Precision"
                    id="vision-2"
                    className="h-full w-full"
                  />
                </div>
                <div className="md:order-1 space-y-6 text-right md:text-left">
                  <h3 className="font-heading text-3xl text-primary">Unwavering Standards</h3>
                  <p className="font-paragraph text-secondary">
                    Quality is not an act, it is our habit. We employ cutting-edge technology and traditional craftsmanship to deliver projects that stand the test of time.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          {CANONICAL_SERVICES.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Link
                href={service.link}
                className="block border-t border-primary-foreground/10 py-16"
              >
                <h3 className="text-3xl mb-2">{service                                                          .title}</h3>
                <p className="opacity-70">{service.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
     {/* --- BRICKNBAR SPOTLIGHT (E-Commerce) --- */}
      <section className="relative py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative rounded-2xl overflow-hidden bg-primary text-white">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              <div className="relative h-full min-h-[400px] lg:min-h-full overflow-hidden">
                <ParallaxImage 
                  src="https://static.wixstatic.com/media/a3674d_6cad3e7703db4bea8ee876271a51e4fd~mv2.png?originWidth=960&originHeight=576"
                  alt="Construction Materials"
                  id="bricknbar-bg"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent lg:hidden" />
              </div>
              
              <div className="relative p-12 lg:p-20 flex flex-col justify-center">
                <Reveal>
                  <div className="flex items-center gap-3 mb-6">
                    <ShoppingCart className="w-6 h-6 text-soft-gold" />
                    <span className="font-paragraph tracking-widest uppercase text-sm">Bricknbar</span>
                  </div>
                  <h2 className="font-heading text-4xl lg:text-6xl mb-6">
                    Sourcing Excellence <br /> Made Simple
                  </h2>
                  <p className="font-paragraph text-lg text-primary-foreground/80 mb-10 max-w-md">
                    Access a curated catalog of premium building materials. From foundation to finishing touches, Bricknbar connects you with quality.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="www.bricknbar.com" 
                      className="inline-flex items-center justify-center gap-2 bg-soft-gold text-primary px-8 py-4 rounded-sm font-medium hover:bg-white transition-colors"
                    >
                      Shop Materials <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link 
                      href="/consultation" 
                      className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-sm font-medium hover:bg-primary-foreground hover:text-black transition-colors"
                    >
                      Material Consultation
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* VALUES */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal className="text-center mb-20">
            <h2 className="font-heading text-5xl lg:text-6xl text-primary mb-6">The Margam Standard</h2>
            <p className="font-paragraph text-secondary text-lg max-w-2xl mx-auto">
              Our reputation is built on four pillars of excellence that define every project we undertake.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 border-t border-l border-primary/10">
            {CANONICAL_VALUES.map((value, index) => (
              <Reveal key={index} delay={index * 0.1} className="group border-r border-b border-primary/10 p-12 hover:bg-white hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="font-heading text-8xl text-soft-gold">{index + 1}</span>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-soft-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-soft-gold group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-6 h-6 text-soft-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl text-primary mb-4">{value.title}</h3>
                  <p className="font-paragraph text-secondary group-hover:text-primary transition-colors">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
