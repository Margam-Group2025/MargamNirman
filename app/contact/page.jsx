"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Mail, MapPin, Clock, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form after 3 seconds (simulate submission)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7749950999 ",
      link: "tel:+91 7749950999",
    },
    {
      icon: Mail,
      title: "Email",
      content: "admin@margamnirman.com",
      link: "mailto:admin@margamnirman.com",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Margam Nirman,3rd Floor C/o-Hdfc bank,Biju Pattnaik College Rd Jaydev Vihar Bhubaneswar,odisha 751013"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 10:00 AM - 7:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

     <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="font-paragraph text-xl text-secondary max-w-4xl mx-auto">
              Get in touch with our team. We're here to answer your questions and discuss your project needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-slate-100">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '+91 7749950999',
                link: 'tel:+91 7749950999',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'admin@margamnirman.com',
                link: 'mailto:admin@margamnirman.com',
              },
              {
                icon: MapPin,
                title: 'Office',
                content: 'Margam Nirman,3rd Floor C/o-Hdfc bank,Biju Pattnaik College Rd Jaydev Vihar Bhubaneswar,odisha 751013',
                link: null,
              },
              {
                icon: Clock,
                title: 'Business Hours',
                content: 'Fri - Wed: 10:00 AM - 7:00 PM',
                link: null,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-backgound rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-soft-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="font-paragraph text-base text-secondary hover:text-soft-gold transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="font-paragraph text-base text-secondary">
                    {item.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="font-paragraph text-lg text-secondary mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="bg-background p-12 rounded-lg text-center">
                  <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="font-paragraph text-base text-secondary">
                    Thank you for contacting us. We'll respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        placeholder="Enter your name"
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full"
                        placeholder="+91 123 456 7890"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        className="w-full"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full min-h-[200px]"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map/Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-background p-10 rounded-lg">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Visit Our Office
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-paragraph text-sm font-medium text-secondary mb-2">
                      Address
                    </h4>
                    <p className="font-paragraph text-base text-foreground">
                      Margam Nirman,3rd Floor C/o-Hdfc bank,<br />Biju Pattnaik College Rd <br />Jaydev Vihar Bhubaneswar,odisha 751013
                    </p>
                  </div>

                  <div>
                    <h4 className="font-paragraph text-sm font-medium text-secondary mb-2">
                      Office Hours
                    </h4>
                    <p className="font-paragraph text-base text-foreground">
                      Friday - Wednesday 10:00 AM - 7:00 PM<br />
                      Thusday: Closed
                    </p>
                  </div>

                  <div>
                    <h4 className="font-paragraph text-sm font-medium text-secondary mb-2">
                      Get Directions
                    </h4>
                    <p className="font-paragraph text-sm text-secondary">
                      Our office is conveniently located in the heart of the construction district, easily accessible by public transport and with ample parking available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-10 rounded-lg">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Quick Response
                </h3>
                <p className="font-paragraph text-base text-foreground mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <p className="font-paragraph text-base text-foreground">
                  For urgent matters, please call us directly at{' '}
                  <a
                    href="tel:+911234567890"
                    className="text-soft-gold hover:underline font-medium"
                  >
                    +91 7749950999
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
