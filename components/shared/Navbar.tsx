"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // State untuk mengontrol dropdown pada mobile
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup mobile dropdown saat rute berubah
  useEffect(() => {
    setOpenDropdown(null);
    setIsOpen(false);
  }, [pathname]);

  // --- Data Struktur Menu Baru ---
  const navStructure = [
    { name: "Beranda", href: "/" },
    {
      name: "Tentang Kami",
      children: [
        { name: "Profil Firma", href: "/about" },
        { name: "Tim Pengacara", href: "/team" },
      ],
    },
    {
      name: "Layanan",
      children: [
        { name: "Area Praktik", href: "/practice-areas" },
        { name: "Rekam Jejak", href: "/case-studies" },
      ],
    },
    { name: "Publikasi", href: "/insights" },
  ];

  // --- Komponen untuk Dropdown di Desktop ---
  const DesktopDropdown = ({ item }: { item: any }) => {
    return (
      <div className="relative group">
        <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors py-1">
          {item.name}
          <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
        </button>
        {/* Dropdown Menu */}
        <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-1 group-hover:translate-y-0">
          <div className="bg-[#1E293B] border border-slate-700 rounded-sm shadow-2xl p-2 backdrop-blur-xl">
            {item.children.map((child: any) => (
              <Link
                key={child.name}
                href={child.href}
                className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // --- Komponen untuk Dropdown di Mobile ---
  const MobileDropdown = ({ item }: { item: any }) => {
    const isActive = openDropdown === item.name;
    return (
      <div>
        <button
          onClick={() => setOpenDropdown(isActive ? null : item.name)}
          className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-slate-300 hover:text-[#D4AF37] transition-colors border-l-4 border-transparent"
        >
          {item.name}
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${isActive ? "rotate-180 text-[#D4AF37]" : ""}`}
          />
        </button>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden bg-slate-800/30 ml-4 border-l border-slate-700/50"
            >
              {item.children.map((child: any) => (
                <Link
                  key={child.name}
                  href={child.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2.5 text-sm text-slate-400 hover:text-[#D4AF37] transition-colors"
                >
                  {child.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

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
          
          {/* 1. Logo */}
          <Link href="/" className="flex items-center gap-2 z-10 flex-shrink-0">
            <span className="font-serif text-2xl font-bold text-white tracking-wide hover:opacity-90 transition-opacity">
              Satya <span className="text-[#D4AF37]">&</span> Partners
            </span>
          </Link>

          {/* 2. Menu Desktop - Posisi Tengah Absolut */}
          <div className="hidden lg:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
            {navStructure.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.name} item={item} />
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    pathname === item.href ? "text-[#D4AF37]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {/* Underline animasi */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              )
            )}
          </div>

          {/* 3. CTA Desktop & Tombol Mobile */}
          <div className="flex items-center gap-4 z-10">
            {/* CTA Desktop - Desain Lebih Eksklusif */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center group relative overflow-hidden bg-[#D4AF37] text-[#0F172A] px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-[1px]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hubungi Kami
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Efek Shimmer */}
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

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#0F172A] border-t border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-1">
              {navStructure.map((item) =>
                item.children ? (
                  <MobileDropdown key={item.name} item={item} />
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-sm transition-all ${
                      pathname === item.href
                        ? "text-[#D4AF37] bg-slate-800/50 border-l-4 border-[#D4AF37]"
                        : "text-slate-300 hover:text-[#D4AF37] hover:bg-slate-800/40 border-l-4 border-transparent"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
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