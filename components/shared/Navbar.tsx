"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang OBH", href: "/about" },
    { name: "Klien & Pengalaman Kami", href: "/experience" },
    { name: "Tim Pengacara", href: "/team" },
    { name: "Publikasi", href: "/insights" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled
          ? "bg-white/95 backdrop-blur-xl border-stone-200/80 shadow-lg shadow-stone-200/50 py-3"
          : "bg-white border-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between relative">

          <Link href="/" className="flex items-center z-10 flex-shrink-0 group">
            <div className="relative h-12 w-[200px] lg:h-20 lg:w-[260px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/obh.png"
                alt="Logo OBH & Partners"
                fill
                sizes="(max-width: 1024px) 160px, 220px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-bold transition-colors py-1 group tracking-wide ${pathname === item.href ? "text-[#D4AF37]" : "text-[#0F172A] hover:text-[#D4AF37]"
                  }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2.5px] rounded-full bg-[#D4AF37] transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 z-10">
            {/* CTA Desktop "Hubungi Kami" - Premium Gold Gradient */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#0F172A] px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-[1px] group"
            >
              Hubungi Kami
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#0F172A] hover:text-[#D4AF37] focus:outline-none p-2 transition-colors"
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
            className="lg:hidden bg-white border-t border-stone-100 overflow-hidden shadow-2xl absolute w-full top-full left-0"
          >
            <div className="px-6 pt-4 pb-8 space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-bold rounded-md transition-all ${pathname === item.href
                      ? "text-[#0F172A] bg-stone-50 border-l-4 border-[#D4AF37]"
                      : "text-slate-600 hover:text-[#0F172A] hover:bg-stone-50 border-l-4 border-transparent"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* CTA Mobile - Premium Gold Gradient */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-6 mx-2 text-center bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#0F172A] px-5 py-4 rounded-xl text-base font-bold shadow-lg transition-all active:scale-95"
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