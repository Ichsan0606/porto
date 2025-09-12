"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with Next.js and Tailwind CSS.",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "E-commerce App",
    desc: "A modern e-commerce platform with shopping cart and checkout.",
    link: "https://your-ecommerce-link.com",
  },
  {
    title: "Dashboard Admin",
    desc: "An interactive dashboard with charts and authentication.",
    link: "https://your-dashboard-link.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 py-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 mb-10"
      >
        Projects
      </motion.h2>

      {/* Projects grid */}
      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }} // muncul & hilang saat discroll
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition relative"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
