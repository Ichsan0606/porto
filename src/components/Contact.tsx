"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "WhatsApp",
      link: "https://wa.me/6281234567890", // ganti nomor WA kamu
      icon: <Phone size={28} />,
      color: "text-green-500",
    },
    {
      name: "Email",
      link: "mailto:yourmail@example.com",
      icon: <Mail size={28} />,
      color: "text-red-500",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/yourusername",
      icon: <Instagram size={28} />,
      color: "text-pink-500",
    },
    {
      name: "YouTube",
      link: "https://youtube.com/@yourchannel",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.9 2.5 12 2.5 12 2.5h-.1s-5.9 0-8.6.3c-.4 0-1.3 0-2.1 1C.7 4.5.5 6.2.5 6.2S0 8.1 0 9.9v1.9c0 1.8.5 3.7.5 3.7s.2 1.7.8 2.4c.8.9 1.9.8 2.4.9 1.8.2 7.3.3 7.3.3s5.9 0 8.6-.3c.4 0 1.3 0 2.1-1 .6-.7.8-2.4.8-2.4s.5-1.8.5-3.7V9.9c0-1.8-.5-3.7-.5-3.7zM9.6 14.6V8.4l6.3 3.1-6.3 3.1z" />
        </svg>
      ),
      color: "text-red-600",
    },
    {
      name: "TikTok",
      link: "https://tiktok.com/@yourusername",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.5 2c0 1.2.5 2.4 1.3 3.3.8.9 1.9 1.4 3 1.4V9c-1.6 0-3.1-.5-4.3-1.5v6.3c0 2.6-2.1 4.7-4.7 4.7S3 16.4 3 13.8s2.1-4.7 4.7-4.7c.2 0 .5 0 .7.1v2.1c-.2-.1-.4-.1-.7-.1-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6 2.6-1.2 2.6-2.6V2h2.2z" />
        </svg>
      ),
      color: "text-black",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-20 border"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 mb-10"
      >
        Contact Me
      </motion.h2>

      {/* Contact Cards */}
      <div className="grid gap-6 md:grid-cols-3 w-full max-w-4xl">
        {contacts.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className={`mb-3 ${item.color}`}>{item.icon}</div>
            <p className="font-semibold text-gray-800">{item.name}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
