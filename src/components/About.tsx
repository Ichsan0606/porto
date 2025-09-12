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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>

            {/* Description */}
            <p className="max-w-3xl text-lg text-gray-600 leading-relaxed mb-8">
              <span className="font-semibold text-blue-600">
                Abbah Mitra Global
              </span>{" "}
              adalah kontraktor yang berfokus pada solusi{" "}
              <span className="font-semibold text-gray-800">
                interior dan eksterior
              </span>{" "}
              dengan standar kualitas tinggi. Kami berpengalaman dalam{" "}
              <span className="font-semibold text-gray-800">
                desain 3D, pembangunan, renovasi, hingga furniture custom
              </span>{" "}
              yang disesuaikan dengan kebutuhan klien.  
              Dengan tim profesional, kami berkomitmen menghadirkan hasil
              terbaik yang fungsional, estetis, dan tahan lama.
            </p>

            {/* Video YouTube */}
            <div className="w-full max-w-3xl aspect-video rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/3nccgQ6p4VQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
