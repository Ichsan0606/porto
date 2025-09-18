"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Modern Living Room",
    desc: "Elegant modern living room design with natural lighting and minimal furniture.",
    link: "/",
    img: "/projects/project-1.jpeg",
  },
  {
    title: "Luxury Bedroom",
    desc: "Cozy bedroom with warm tones and luxury furnishing for ultimate comfort.",
    link: "/",
    img: "/projects/project-2.jpeg",
  },
  {
    title: "Minimalist Kitchen",
    desc: "Clean minimalist kitchen with functional layout and modern appliances.",
    link: "/",
    img: "/projects/project-3.jpeg",
  },
  {
    title: "Office Workspace",
    desc: "Productive and stylish workspace with ergonomic furniture and storage solutions.",
    link: "/",
    img: "/projects/project-4.jpeg",
  },
  {
    title: "Dining Room",
    desc: "Elegant dining room with contemporary design for family and guests.",
    link: "/",
    img: "/projects/project-5.jpeg",
  },
  {
    title: "Bathroom Design",
    desc: "Modern bathroom design with clean lines and relaxing atmosphere.",
    link: "/",
    img: "/projects/project-6.jpeg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-white  px-6 py-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 mb-10"
      >
        Interior Projects
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
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition relative"
            >
              {/* Gambar */}
              <div className="w-full h-48 relative">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 select-none pointer-events-none"
                />
              </div>

              {/* Content */}
              <div className="p-6">
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
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
