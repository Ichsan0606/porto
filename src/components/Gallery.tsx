"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/Gallery/1.jpeg",
    "/Gallery/2.jpeg",
    "/Gallery/3.jpeg",
    "/Gallery/4.jpeg",
    "/Gallery/5.jpeg",
    "/Gallery/6.jpeg",
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen bg-white py-20 px-6 flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 mb-10"
      >
        Gallery
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <AnimatePresence>
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg group bg-white"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 select-none pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
