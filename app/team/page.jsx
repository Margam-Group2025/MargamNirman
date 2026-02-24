"use client";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Samikshya Pattnaik",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Specialized in React, Next.js, and modern UI animations.",
    linkedin: "#",
    github: "#",
    email: "mailto:hello@example.com",
  },
  {
    name: "Amit Kumar",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Expert in Node.js, APIs, databases, and scalable systems.",
    linkedin: "#",
    github: "#",
    email: "mailto:hello@example.com",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Designs clean, user‑focused interfaces and brand systems.",
    linkedin: "#",
    github: "#",
    email: "mailto:hello@example.com",
  },
  {
    name: "Rahul Das",
    role: "SEO Specialist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "Helps brands rank higher with data‑driven SEO strategies.",
    linkedin: "#",
    github: "#",
    email: "mailto:hello@example.com",
  },
];

export default function OurTeamPage() {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Meet Our <span className="text-indigo-600">Team</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate professionals building modern, scalable, and
            user‑friendly digital experiences.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-indigo-600 font-medium">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-4">
                  <a href={member.linkedin} aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5 text-gray-500 hover:text-indigo-600" />
                  </a>
                  <a href={member.github} aria-label="GitHub">
                    <Github className="w-5 h-5 text-gray-500 hover:text-indigo-600" />
                  </a>
                  <a href={member.email} aria-label="Email">
                    <Mail className="w-5 h-5 text-gray-500 hover:text-indigo-600" />
                  </a>
                </div>

                {/* Bio Button */}
                <button
                  onClick={() => setActiveMember(member)}
                  className="mt-5 text-sm font-medium text-indigo-600 hover:underline"
                >
                  View Bio
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Want to work with us?
          </h2>
          <p className="mt-3 text-gray-600">
            Let’s build something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Contact Our Team
          </a>
        </div>
      </div>

      {/* Bio Modal */}
      {activeMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <img
              src={activeMember.image}
              alt={activeMember.name}
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-center">
              {activeMember.name}
            </h3>
            <p className="text-indigo-600 text-center">
              {activeMember.role}
            </p>
            <p className="mt-4 text-gray-600 text-center">
              {activeMember.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
