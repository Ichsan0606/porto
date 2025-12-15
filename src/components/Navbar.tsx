"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = [
        "home",
        "about",
        "services",
        "projects",
        "gallery",
        "contact",
      ];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const getHref = (id: string) => {
    if (id === "home") return "/";
    return isHome ? `#${id}` : `/#${id}`;
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all ${
        isScrolled
          ? "bg-white/70 shadow backdrop-blur-md"
          : "bg-white/50 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo/logo-amg.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-bold text-blue-600">
            Abbah Mitra Global
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={getHref(link.id)}
                className={`transition-colors ${
                  active === link.id && isHome
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={getHref(link.id)}
                  className={`block ${
                    active === link.id && isHome
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
