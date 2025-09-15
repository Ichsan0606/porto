"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  MdDesignServices,
  MdHomeRepairService,
  MdArchitecture,
  MdChair,
  MdRoofing,
  MdBuild,
} from "react-icons/md";

export default function Services() {
  const services = [
    { name: "Design 3D Interior & Eksterior", icon: MdDesignServices, color: "text-blue-600" },
    { name: "Renovasi Rumah & Bangunan", icon: MdHomeRepairService, color: "text-green-600" },
    { name: "Arsitektur & Perencanaan", icon: MdArchitecture, color: "text-indigo-600" },
    { name: "Furniture Custom", icon: MdChair, color: "text-orange-600" },
    { name: "Atap & Eksterior", icon: MdRoofing, color: "text-red-600" },
    { name: "Kontraktor Umum", icon: MdBuild, color: "text-gray-700" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
    exit: { opacity: 0 },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-4xl font-bold text-gray-800 mb-10"
      >
        Our Services
      </motion.h2>

      <AnimatePresence>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.08,
                }}
                className="group px-6 py-8 bg-white rounded-xl shadow text-center font-medium text-gray-700 transition cursor-pointer flex flex-col items-center hover:bg-blue-600 hover:text-white"
              >
                <Icon className={`text-4xl ${service.color} group-hover:text-white`} />
                <span className="mt-4 text-lg">{service.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
