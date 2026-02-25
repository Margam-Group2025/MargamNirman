"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import services from "@/app/data/serviceData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="font-paragraph text-xl text-secondary max-w-4xl mx-auto">
              Comprehensive solutions for real estate, construction, and interior design tailored to your unique needs
            </p>
          </motion.div>
        </div>
      </section>
      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          {loading ? (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-secondary">Loading services...</p>
            </div>
          ) : services.length > 0 ? (
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    {service.serviceImage && (
                      <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                        <img
                           src={service.serviceImage}
                           alt={service.serviceName}
                           className="w-full h-full object-cover"
                        width={800}
                        />
                      </div>
                    )}
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                      {service.serviceName}
                    </h2>
                    
                    {service.shortDescription && (
                      <p className="font-paragraph text-xl text-soft-gold mb-6">
                        {service.shortDescription}
                      </p>
                    )}

                    {service.detailedDescription && (
                      <p className="font-paragraph text-base text-foreground leading-relaxed mb-8">
                        {service.detailedDescription}
                      </p>
                    )}

                    {service.keyFeatures && (
                      <div className="mb-8">
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                          Key Features
                        </h3>
                        <div className="space-y-3">
                          {service.keyFeatures.split('\n').map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <ArrowRight className="h-5 w-5 text-soft-gold flex-shrink-0 mt-0.5" />
                              <p className="font-paragraph text-base text-foreground">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href={`/servicepage/${service._id}`}
                      className="inline-flex items-center gap-2 bg-primary text-white rounded-lg px-6 py-3 font-paragraph font-medium hover:bg-primary/90 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-secondary">
                Service information will be available soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-5xl font-bold mb-6">
              Need Expert Consultation?
            </h2>
            <p className="font-paragraph text-xl mb-10 max-w-3xl mx-auto text-white">
              Our team of experts is ready to discuss your project requirements and provide tailored solutions.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-soft-gold text-foreground rounded-lg px-8 py-4 font-paragraph font-medium hover:bg-soft-gold/90 transition-colors"
            >
              Request Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div><br />
      <div className="border-t border-border/20"></div>
      <Footer />
      </section>
    </>
  );
};

export default Services;