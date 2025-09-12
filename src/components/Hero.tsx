"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-6"
    >
      <AnimatePresence mode="wait">
        {/* Nama */}
        <motion.div
          key="hero-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <h1 className="text-5xl font-extrabold text-gray-800">
            Hi, I’m <span className="text-blue-600">Mohamad Ichsan Maulana</span>
          </h1>
        </motion.div>

        {/* Typing Effect */}
        <motion.div
          key="hero-typing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: false }}
          className="mt-4 text-xl text-gray-600"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Web Enthusiast",
              2000,
              "Next.js + Tailwind Lover",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          key="hero-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: false }}
          className="mt-4 text-lg text-gray-600 max-w-2xl"
        >
          <p>
            I’m passionate about building modern, responsive web apps that bring
            ideas to life 🚀
          </p>
        </motion.div>

        {/* Tombol */}
        <motion.div
          key="hero-button"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            View My Project
          </a>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
