"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Deteksi scroll untuk mengubah style navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Area Praktik", href: "/practice-areas" },
    { name: "Tim Pengacara", href: "/team" },
    { name: "Artikel", href: "/insights" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#0F172A]/90 backdrop-blur-md border-slate-800 shadow-lg py-2"
          : "bg-[#0F172A] border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl font-bold text-white tracking-wide group-hover:opacity-80 transition-opacity">
              Satya <span className="text-[#D4AF37]">&</span> Partners
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group text-sm font-medium transition-colors ${
                    isActive ? "text-[#D4AF37]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Animasi Garis Bawah (Underline Sweep) */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
            
            {/* Tombol CTA Desktop */}
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-[#D4AF37] text-[#0F172A] px-6 py-2.5 rounded-sm text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Konsultasi <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Efek kilap pada tombol */}
              <div className="absolute inset-0 h-full w-full bg-white/20 -translate-x-full skew-x-12 group-hover:animate-shimmer" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav (Dengan animasi Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0F172A] border-t border-slate-800 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-md transition-all ${
                      isActive
                        ? "text-[#D4AF37] bg-slate-800/50 border-l-4 border-[#D4AF37]"
                        : "text-slate-300 hover:text-[#D4AF37] hover:bg-slate-800 border-l-4 border-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-6 text-center bg-[#D4AF37] text-[#0F172A] px-5 py-4 rounded-md text-base font-bold shadow-lg flex items-center justify-center gap-2"
              >
                Konsultasi Sekarang <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}