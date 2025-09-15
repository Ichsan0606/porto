"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "WhatsApp",
      link: "https://wa.me/6287821334043",
      icon: <Phone size={28} />,
      color: "text-green-500",
    },
    {
      name: "Email",
      link: "mailto:abbah.mitraglobal@gmail.com?subject=Permintaan%20Penawaran&body=Halo%20Abbah%20Mitra%20Global%2C%0A%0ASaya%20ingin%20bertanya%20tentang%20jasa%20kontraktor%20Anda.%0A%0ATerima%20kasih.",
      icon: <Mail size={28} />,
      color: "text-red-500",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/abbahmitraglobal?igsh=NHY1MmsybmltOGRp&utm_source=qr",
      icon: <Instagram size={28} />,
      color: "text-pink-500",
    },
    {
      name: "YouTube",
      link: "https://youtube.com/@abbahmitraglobal2843",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.9 2.5 12 2.5 12 2.5h-.1s-5.9 0-8.6.3c-.4 0-1.3 0-2.1 1C.7 4.5.5 6.2.5 6.2S0 8.1 0 9.9v1.9c0 1.8.5 3.7.5 3.7s.2 1.7.8 2.4c.8.9 1.9.8 2.4.9 1.8.2 7.3.3 7.3.3s5.9 0 8.6-.3c.4 0 1.3 0 2.1-1 .6-.7.8-2.4.8-2.4s.5-1.8.5-3.7V9.9c0-1.8-.5-3.7-.5-3.7zM9.6 14.6V8.4l6.3 3.1-6.3 3.1z" />
        </svg>
      ),
      color: "text-red-600",
    },
    {
      name: "TikTok",
      link: "https://tiktok.com/@abbahmitraglobal",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 2c0 1.2.5 2.4 1.3 3.3.8.9 1.9 1.4 3 1.4V9c-1.6 0-3.1-.5-4.3-1.5v6.3c0 2.6-2.1 4.7-4.7 4.7S3 16.4 3 13.8s2.1-4.7 4.7-4.7c.2 0 .5 0 .7.1v2.1c-.2-.1-.4-.1-.7-.1-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6 2.6-1.2 2.6-2.6V2h2.2z" />
        </svg>
      ),
      color: "text-black",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 py-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 mb-12 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Layout 2 Kolom */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Kiri: Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {contacts.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className={`mb-3 ${item.color}`}>{item.icon}</div>
              <p className="font-semibold text-gray-800">{item.name}</p>
            </motion.a>
          ))}
        </div>

        {/* Kanan: Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-96 rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.745893511898!2d107.01867077586897!3d-6.29708576163282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69911b65b54df1%3A0xbd502fded1d1a15!2sABBAH%20MITRA%20GLOBAL!5e0!3m2!1sid!2sid!4v1757927562434!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
