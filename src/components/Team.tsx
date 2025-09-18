"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Linkedin, Phone } from "lucide-react";

const team = [
  {
    name: "Ichsan Maulana",
    role: "Project Manager",
    img: "/avatar/avatar1.jpg",
    desc: "Mengatur alur proyek, memastikan timeline dan kualitas terjaga.",
    socials: {
      instagram: "https://instagram.com/ichsan",
      linkedin: "https://linkedin.com/in/ichsan",
      whatsapp: "https://wa.me/6287821334043",
    },
  },
  {
    name: "Budi Santoso",
    role: "Site Supervisor",
    img: "/avatar/avatar2.jpg",
    desc: "Mengawasi jalannya pembangunan di lapangan.",
    socials: {
      instagram: "https://instagram.com/budi",
      linkedin: "https://linkedin.com/in/budi",
      whatsapp: "https://wa.me/628123456789",
    },
  },
  {
    name: "Andi Pratama",
    role: "Architect",
    img: "/avatar/avatar1.jpg",
    desc: "Merancang desain arsitektur modern sesuai kebutuhan klien.",
    socials: {
      instagram: "https://instagram.com/andi",
      linkedin: "https://linkedin.com/in/andi",
      whatsapp: "https://wa.me/628987654321",
    },
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 mb-12 text-center"
      >
        Our Team
      </motion.h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full justify-items-center">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center group cursor-pointer transition w-80"
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="rounded-full object-cover border-4 border-blue-500 group-hover:border-blue-700 transition"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-600">
              {member.name}
            </h3>
            <p className="text-gray-500 mb-3">{member.role}</p>
            <p className="text-sm text-gray-600 mb-4">{member.desc}</p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {member.socials.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition"
                >
                  <Instagram size={20} />
                </a>
              )}
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {member.socials.whatsapp && (
                <a
                  href={member.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 transition"
                >
                  <Phone size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
