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
        {/* Judul */}
        <motion.div
          key="hero-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <h1 className="text-5xl font-extrabold text-gray-800">
            Selamat Datang di{" "}
            <span className="text-blue-600">Abbah Mitra Global</span>
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
              "Kontraktor Interior",
              2000,
              "Kontraktor Eksterior",
              2000,
              "Solusi Bangun & Renovasi",
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
            Abbah Mitra Global merupakan kontraktor yang ahli dalam{" "}
            <span className="font-semibold text-blue-600">
              interior dan eksterior
            </span>
            . Kami berkomitmen memberikan hasil terbaik dengan desain modern,
            fungsional, dan berkualitas tinggi.
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
            Lihat Proyek Kami
          </a>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
