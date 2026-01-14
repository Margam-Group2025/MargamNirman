"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    projectDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        projectDetails: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const services = [
    "Real Estate Services",
    "Construction Services",
    "Home & Interior Services",
    "Bricknbar E-commerce",
    "General Consultation",
  ];

  return (
    <div className="min-h-screen bg-background">
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
              Request Consultation
            </h1>
            <p className="font-paragraph text-xl text-secondary max-w-4xl mx-auto">
              Let's discuss your project and explore how we can bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-lg shadow-lg"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Tell Us About Your Project
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    Thank You!
                  </h3>
                  <p className="font-paragraph text-base text-secondary">
                    We've received your consultation request. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full"
                      placeholder="+91 123 456 7890"
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceType" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                      Service Type *
                    </Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleChange('serviceType', value)}>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="projectDetails" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="projectDetails"
                      required
                      value={formData.projectDetails}
                      onChange={(e) => handleChange('projectDetails', e.target.value)}
                      className="w-full min-h-[150px]"
                      placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-base font-medium"
                  >
                    Submit Consultation Request
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Why Choose Our Consultation Services?
                </h2>
                <div className="space-y-4">
                  {[
                    'Expert guidance from experienced professionals',
                    'Customized solutions tailored to your needs',
                    'Transparent pricing and timeline estimates',
                    'Comprehensive project planning and execution',
                    'Ongoing support throughout your project',
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-soft-gold flex-shrink-0 mt-0.5" />
                      <p className="font-paragraph text-base text-foreground">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-soft-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-paragraph text-sm font-medium text-secondary mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+911234567890"
                        className="font-paragraph text-base text-foreground hover:text-soft-gold transition-colors"
                      >
                        +91 7749950999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-soft-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-paragraph text-sm font-medium text-secondary mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:info@margamnirman.com"
                        className="font-paragraph text-base text-foreground hover:text-soft-gold transition-colors"
                      >
                        admin@margamnirman.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-soft-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-paragraph text-sm font-medium text-secondary mb-1">
                        Office
                      </h4>
                      <p className="font-paragraph text-base text-foreground">
                        Margam Nirman,3rd Floor, <br />
                        C/o-Hdfc bank,Biju Pattnaik College Rd,<br />
                        Jaydev Vihar, Bhubaneswar,odisha 751013
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://static.wixstatic.com/media/a3674d_0ba21a87c72e42db92ce5471c23e0305~mv2.png?originWidth=640&originHeight=512"
                  alt="Consultation meeting at Margam Nirman"
                  className="w-full h-full object-cover"
                  width={700}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
