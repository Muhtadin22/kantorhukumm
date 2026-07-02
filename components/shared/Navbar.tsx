"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Deteksi scroll untuk efek glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup mobile menu saat rute berubah
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // --- Data Struktur Menu Sesuai Permintaan ---
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang OBH", href: "/about" },
    { name: "Klien & Pengalaman Kami", href: "/experience" },
    { name: "Publikasi", href: "/insights" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#0F172A]/95 backdrop-blur-xl border-slate-800/80 shadow-2xl shadow-black/20 py-3"
          : "bg-[#0F172A] border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between relative">
          
          {/* 1. Logo Menggunakan Teks "OBH" (Desain Modern) */}
          <Link href="/" className="flex items-center z-10 flex-shrink-0 group">
            <div className="flex items-baseline transition-transform duration-300 group-hover:scale-105">
              <span className="text-3xl font-black tracking-tighter text-white drop-shadow-sm">
                OB
              </span>
              <span className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] to-amber-200">
                H
              </span>
              {/* Elemen titik emas kecil sebagai aksen modern */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] ml-1 mb-1 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
            </div>
          </Link>

          {/* 2. Menu Desktop - Posisi Tengah Absolut */}
          <div className="hidden lg:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors py-1 group ${
                  pathname === item.href ? "text-[#D4AF37]" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
                {/* Underline animasi hover */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* 3. CTA Desktop & Tombol Mobile */}
          <div className="flex items-center gap-4 z-10">
            
            {/* CTA Desktop "Hubungi Kami" */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center group relative overflow-hidden bg-[#D4AF37] text-[#0F172A] px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-[1px]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hubungi Kami
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Efek Kilap (Shimmer) saat di-hover */}
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            {/* Hamburger Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-slate-300 hover:text-[#D4AF37] focus:outline-none p-2 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#0F172A] border-t border-slate-800 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-all ${
                    pathname === item.href
                      ? "text-[#D4AF37] bg-slate-800/50 border-l-4 border-[#D4AF37]"
                      : "text-slate-300 hover:text-[#D4AF37] hover:bg-slate-800/40 border-l-4 border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* CTA Mobile */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-6 mx-2 text-center bg-[#D4AF37] text-[#0F172A] px-5 py-4 rounded-full text-base font-bold shadow-lg hover:shadow-[#D4AF37]/20 transition-all"
              >
                Hubungi Kami Sekarang <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}