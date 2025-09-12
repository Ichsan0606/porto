"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  // observer untuk cek apakah section kelihatan di viewport
  const { ref, inView } = useInView({
    triggerOnce: false, // biar bisa fade in/out tiap scroll
    threshold: 0.2, // muncul kalau 20% section kelihatan
  });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-6 py-20"
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            key="about-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>

            {/* Description */}
            <p className="max-w-3xl text-lg text-gray-600 leading-relaxed">
              I am a passionate frontend developer with a strong focus on building
              modern, responsive, and user-friendly web applications. Skilled in{" "}
              <span className="font-semibold text-blue-600">Next.js</span> and{" "}
              <span className="font-semibold text-blue-600">Tailwind CSS</span>, I
              love turning ideas into reality through clean and efficient code.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
