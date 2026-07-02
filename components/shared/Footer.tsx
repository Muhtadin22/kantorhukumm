"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
// Import brand icons dari react-icons
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  // 1. Tautan cepat disesuaikan dengan Navbar
  const quickLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang LSHI", href: "/about" },
    { label: "Klien & Pengalaman Kami", href: "/experience" },
    { label: "Publikasi", href: "/insights" },
  ];

  // 2. Data Sosial Media menggunakan react-icons
  const socialLinks = [
    { icon: <FaLinkedinIn size={18} />, href: "#" },
    { icon: <FaInstagram size={18} />, href: "#" },
    { icon: <FaXTwitter size={18} />, href: "#" },
  ];

  return (
    <footer className="bg-[#0F172A] relative overflow-hidden text-slate-300 border-t border-slate-800">
      {/* Efek Latar Belakang Subtle (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Info & Logo OBH */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-baseline mb-6 group">
              <span className="text-4xl font-black tracking-tighter text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
                OB
              </span>
              <span className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] to-amber-200 transition-transform duration-300 group-hover:scale-105">
                H
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] ml-1 mb-1.5 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              Firma hukum terkemuka yang menggabungkan ketajaman akademis dan keunggulan litigasi untuk memberikan solusi strategis bagi bisnis dan korporasi.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0F172A] transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#D4AF37]"></span> Tautan Cepat
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2 text-[#D4AF37] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" /> 
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#D4AF37]"></span> Hubungi Kami
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <MapPin className="text-[#D4AF37]" size={18} />
                  </div>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed pt-2">
                    Jl. Jend. Sudirman Kav. 52-53,<br />SCBD, Jakarta Selatan 12190,<br />Indonesia
                  </span>
                </li>
              </ul>
              
              <ul className="space-y-6 text-sm">
                <li className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <Phone className="text-[#D4AF37]" size={18} />
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors font-medium">
                    +62 21 555 0192
                  </span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <Mail className="text-[#D4AF37]" size={18} />
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors font-medium">
                    contact@obhpartners.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} OBH & Partners. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}