"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl" /> },
    { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-sky-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-4xl text-gray-800" /> },
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
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-4xl font-bold text-gray-800 mb-10"
      >
        My Skills
      </motion.h2>

      <AnimatePresence>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }} // muncul & hilang lagi saat discroll
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.08,
                backgroundColor: "#2563eb",
                color: "#fff",
              }}
              className="px-6 py-6 bg-white rounded-xl shadow text-center font-medium text-gray-700 transition cursor-pointer flex flex-col items-center"
            >
              {skill.icon}
              <span className="mt-3">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
