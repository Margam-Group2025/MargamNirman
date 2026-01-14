"use client";
import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
 import Header from "@/components/Header";
import Footer from "@/components/Footer";
import services from "@/app/data/serviceData";

const Page = ({ params }) => {
const { slug } = use(params);

  const [loading, setLoading] = useState(true);
  const [service, setService] = useState(null);

  useEffect(() => {
  const foundService = services.find(
    (item) => item._id === slug
  );

  setService(foundService || null);
  setLoading(false);
}, [slug]);

 if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="py-24 text-center">
          <p className="font-paragraph text-lg text-secondary">Loading service details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="py-24 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-6">
            Service Not Found
          </h1>
          <Link
            href="/servicepage"
            className="inline-flex items-center gap-2 text-primary hover:text-soft-gold transition-colors font-paragraph"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/servicepage"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-paragraph mb-8"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Services
            </Link>

            <h1 className="font-heading text-6xl lg:text-7xl font-bold text-foreground mb-6">
              {service.serviceName}
            </h1>

            {service.shortDescription && (
              <p className="font-paragraph text-2xl text-soft-gold max-w-4xl">
                {service.shortDescription}
              </p>
            )}
          </motion.div>
        </div>
      </section>

     {/* Service Image */}
      {service.serviceImage && (
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[21/9] rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src={service.serviceImage}
                alt={service.serviceName || 'Service image'}
                className="w-full h-full object-cover"
                width={1600}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* DETAILS */}
      {/* Service Details */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                  Service Overview
                </h2>

                {service.detailedDescription && (
                  <div className="prose prose-lg max-w-none mb-12">
                    <p className="font-paragraph text-lg text-foreground leading-relaxed whitespace-pre-line">
                      {service.detailedDescription}
                    </p>
                  </div>
                )}

                {service.keyFeatures && (
                  <div className="mb-12">
                    <h3 className="font-heading text-3xl font-semibold text-foreground mb-6">
                      Key Features & Benefits
                    </h3>
                    <div className="space-y-4">
                      {service.keyFeatures.split('\n').map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 bg-background p-6 rounded-lg">
                          <ArrowRight className="h-6 w-6 text-soft-gold flex-shrink-0 mt-1" />
                          <p className="font-paragraph text-base text-foreground">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-background p-8 rounded-lg sticky top-24"
              >
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Get Started
                </h3>
                
                <p className="font-paragraph text-base text-secondary mb-8">
                  Ready to discuss your project? Our experts are here to help you every step of the way.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/consultation"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white rounded-lg px-6 py-3 font-paragraph font-medium hover:bg-primary/90 transition-colors"
                  >
                    Request Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-transparent text-primary border border-primary rounded-lg px-6 py-3 font-paragraph font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>

                  {service.callToActionUrl && (
                    <a
                      href={service.callToActionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-soft-gold text-foreground rounded-lg px-6 py-3 font-paragraph font-medium hover:bg-soft-gold/90 transition-colors"
                    >
                      Learn More
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <div className="mt-8 pt-8 border-t border-secondary/20">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Related Services
                  </h4>
                  <Link
                    href="/servicepage"
                    className="text-primary hover:text-soft-gold transition-colors font-paragraph text-sm"
                  >
                    View All Services →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
