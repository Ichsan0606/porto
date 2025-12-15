"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

const slides = [
  {
    bg: "/banner/banner_1.jpg",
    text: "Kontraktor Interior",
  },
  {
    bg: "/banner/banner_2.jpg",
    text: "Solusi Bangun & Renovasi",
  },
  {
    bg: "/banner/banner_3.jpg",
    text: "Kontraktor Eksterior",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // ganti tiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[current].bg}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].bg})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Title */}
        <motion.h1
          key="hero-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white"
        >
          Selamat Datang di{" "}
          <span className="text-blue-400">Abbah Mitra Global</span>
        </motion.h1>

        {/* Typing */}
        <motion.div
          key={`typing-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-xl text-gray-200"
        >
          <TypeAnimation
            sequence={[
              slides[current].text,
              2000,
              "",
            ]}
            speed={50}
            cursor={true}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          key="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-lg text-gray-200"
        >
          Abbah Mitra Global merupakan kontraktor ahli interior dan eksterior.
          Kami menghadirkan desain modern, fungsional, dan berkualitas tinggi.
        </motion.p>

        {/* Button */}
        <motion.div
          key="hero-button"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Lihat Proyek Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
