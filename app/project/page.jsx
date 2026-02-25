"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';
import projectData from '../data/projectData';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setProjects(projectData);
    setLoading(false);
  }, []);

  const categories = [
    'All',
    ...new Set(projects.map(p => p.projectCategory).filter(Boolean))
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(p => p.projectCategory === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

     {/* Hero Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-soft-gold" />
              <span className="font-paragraph text-sm tracking-[0.2em] uppercase text-soft-gold font-medium">Our Portfolio</span>
            </div>
            
            <h1 className="font-heading text-6xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
              Exceptional <br />
              <span className="text-soft-gold italic">Projects</span>
            </h1>
            
            <p className="font-paragraph text-xl lg:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio of completed and ongoing projects that showcase our commitment to architectural excellence and quality craftsmanship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      {categories.length > 1 && (
        <section className="py-12 bg-background border-b border-foreground/5">
          <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-paragraph font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-foreground border border-foreground/10 hover:border-soft-gold hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Projects */}
      <section className="py-32 bg-background">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          {loading ? (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-secondary">Loading projects...</p>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
                    {project.mainImage && (
                      <img
                        src={project.mainImage}
                        alt={project.projectName || 'Project image'}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        width={600}
                      />
                    )}
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    {project.projectCategory && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-foreground rounded-full font-paragraph text-xs font-semibold tracking-wide">
                          {project.projectCategory}
                        </span>
                      </div>
                    )}
                    
                    {/* Status Badge */}
                    {project.projectStatus && (
                      <div className="absolute top-4 right-4">
                        <span className={`inline-block px-4 py-2 rounded-full font-paragraph text-xs font-semibold backdrop-blur-sm ${
                          project.projectStatus.toLowerCase() === 'completed'
                            ? 'bg-green-500/90 text-white'
                            : 'bg-blue-500/90 text-white'
                        }`}>
                          {project.projectStatus}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-soft-gold transition-colors duration-300">
                      {project.projectName}
                    </h3>

                    {project.shortDescription && (
                      <p className="font-paragraph text-base text-secondary mb-6 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    )}

                    {/* Meta Information */}
                    <div className="space-y-3 mb-8 pb-8 border-b border-foreground/5">
                      {/* {project.projectLocation && (
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-soft-gold flex-shrink-0" />
                          <span className="font-paragraph text-sm text-foreground font-medium">{project.projectLocation}</span>
                        </div>
                      )} */}

                      {project.completionDate && (
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-soft-gold flex-shrink-0" />
                          <span className="font-paragraph text-sm text-foreground font-medium">
                            {format(new Date(project.completionDate), 'MMM yyyy')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    {/* <Link
                      href={`/project/${project._id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-soft-gold transition-colors font-paragraph font-semibold text-sm tracking-wide group/btn"
                    >
                      View Project
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link> */}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-secondary">
                {selectedCategory === 'All' 
                  ? 'Project information will be available soon.'
                  : `No projects found in the ${selectedCategory} category.`
                }
              </p>
            </div>
          )}
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
              Ready to Start <br />
              <span className="text-soft-gold italic">Your Project?</span>
            </h2>
            
            <p className="font-paragraph text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed">
              Let our team of experts guide you through every step of your construction journey with professionalism and excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-soft-gold text-white rounded-lg px-10 py-4 font-paragraph font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request Consultation
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
}
