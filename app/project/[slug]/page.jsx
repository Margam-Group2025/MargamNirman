"use client";
import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projectData from "@/app/data/projectData";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Building2, Calendar, MapPin } from "lucide-react";

const ProjectDetailPage = ({ params }) => {
  const { slug } = use(params); 

  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projectData.find(
      (item) => item._id === slug
    );

    setProject(foundProject || null);
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

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="py-24 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-6">
            Service Not Found
          </h1>
          <Link
            href="/project"
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
        {/* Hero Section with Full-Width Image */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden bg-foreground">
        {/* Background Image */}
        {project.mainImage && (
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-0"
          >
            <img
              src={project.mainImage}
              alt={project.projectName || 'Project hero image'}
              className="w-full h-full object-cover"
              width={1920}
            />
          </motion.div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-8 left-6 lg:left-12 z-20"
        >
          <Link
            href="/project"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 font-paragraph text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 lg:px-12 pb-16 lg:pb-24">
          <div className="mx-auto max-w-[120rem]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                {project.projectCategory && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm text-foreground rounded-full font-paragraph text-sm font-semibold">
                    <Building2 className="h-4 w-4 text-soft-gold" />
                    {project.projectCategory}
                  </span>
                )}
                {project.projectStatus && (
                  <span className={`px-4 py-2 rounded-full font-paragraph text-sm font-semibold ${
                    project.projectStatus.toLowerCase() === 'completed'
                      ? 'bg-green-500/90 text-white'
                      : 'bg-blue-500/90 text-white'
                  }`}>
                    {project.projectStatus}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {project.projectName}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-8 text-white/90">
                {project.projectLocation && (
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-soft-gold flex-shrink-0" />
                    <span className="font-paragraph text-lg">{project.projectLocation}</span>
                  </div>
                )}

                {project.completionDate && (
                  <div className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-soft-gold flex-shrink-0" />
                    <span className="font-paragraph text-lg">
                      {format(new Date(project.completionDate), 'MMMM yyyy')}
                    </span>
                  </div>
                )}
              </div>

              {/* Short Description */}
              {project.shortDescription && (
                <p className="font-paragraph text-xl text-white/80 max-w-2xl mt-8 leading-relaxed">
                  {project.shortDescription}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Project Overview Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Overview */}
                <div className="mb-16">
                  <h2 className="font-heading text-4xl font-bold text-foreground mb-8">
                    Project Overview
                  </h2>

                  {project.fullDescription && (
                    <p className="font-paragraph text-lg text-foreground leading-relaxed whitespace-pre-line mb-8">
                      {project.fullDescription}
                    </p>
                  )}
                </div>

                {/* Key Specifications */}
                {project.keySpecifications && (
                  <div className="mb-16">
                    <h3 className="font-heading text-3xl font-bold text-foreground mb-8">
                      Key Specifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.keySpecifications.split('\n').map((spec, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: idx * 0.1 }}
                          className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                          <CheckCircle2 className="h-6 w-6 text-soft-gold flex-shrink-0 mt-1" />
                          <p className="font-paragraph text-base text-foreground leading-relaxed">
                            {spec}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar - Project Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-2xl shadow-lg sticky top-24"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
                  Project Details
                </h3>
                
                <div className="space-y-8 mb-10">
                  {project.projectCategory && (
                    <div>
                      <h4 className="font-paragraph text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
                        Project Type
                      </h4>
                      <p className="font-paragraph text-lg text-foreground font-medium">
                        {project.projectCategory}
                      </p>
                    </div>
                  )}

                  {project.projectLocation && (
                    <div>
                      <h4 className="font-paragraph text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
                        Location
                      </h4>
                      <p className="font-paragraph text-lg text-foreground font-medium">
                        {project.projectLocation}
                      </p>
                    </div>
                  )}

                  {project.completionDate && (
                    <div>
                      <h4 className="font-paragraph text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
                        Completion Date
                      </h4>
                      <p className="font-paragraph text-lg text-foreground font-medium">
                        {format(new Date(project.completionDate), 'MMMM dd, yyyy')}
                      </p>
                    </div>
                  )}

                  {project.projectStatus && (
                    <div>
                      <h4 className="font-paragraph text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
                        Status
                      </h4>
                      <span className={`inline-block px-4 py-2 rounded-full font-paragraph text-sm font-semibold ${
                        project.projectStatus.toLowerCase() === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.projectStatus}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-10 border-t border-foreground/10">
                  <h4 className="font-heading text-lg font-bold text-foreground mb-6">
                    Interested in a Similar Project?
                  </h4>
                  <div className="space-y-3">
                    <Link
                      href="/consultation"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg px-6 py-3 font-paragraph font-semibold hover:bg-primary/90 transition-all duration-300"
                    >
                      Request Consultation
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 border-2 border-primary text-primary rounded-lg px-6 py-3 font-paragraph font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-heading text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Ready to Bring Your <br />
              <span className="text-soft-gold italic">Vision to Life?</span>
            </h2>
            
            <p className="font-paragraph text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed">
              Let our team of experts guide you through your construction journey with the same dedication and excellence we've demonstrated in this project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-soft-gold text-foreground rounded-lg px-10 py-4 font-paragraph font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground rounded-lg px-10 py-4 font-paragraph font-semibold hover:bg-primary-foreground hover:text-white transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
