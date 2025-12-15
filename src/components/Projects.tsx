"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-20"
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

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.desc}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  View Project
                  <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
