"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang OBH", href: "/about" },
    { label: "Klien & Pengalaman Kami", href: "/experience" },
    { label: "Publikasi", href: "/insights" },
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn size={18} />, href: "#" },
    { icon: <FaInstagram size={18} />, href: "#" },
    { icon: <FaXTwitter size={18} />, href: "#" },
  ];

  return (
    <footer className="bg-white relative overflow-hidden text-slate-600 border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
      
      {/* Garis Aksen Emas di Paling Atas Footer */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70"></div>
      
      {/* Efek Latar Belakang Subtle (Pendaran Halus di Sudut) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 lg:px-12 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Info & Logo Gambar */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-8 group">
              <div className="relative h-12 w-[160px] lg:h-16 lg:w-[220px] transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="/obh.png" 
                  alt="Logo OBH & Partners" 
                  fill 
                  sizes="(max-width: 1024px) 160px, 220px"
                  className="object-contain object-left drop-shadow-sm" 
                  priority
                />
              </div>
            </Link>
            <p className="text-slate-500 mb-8 leading-relaxed text-sm font-medium">
              Firma hukum terkemuka yang menggabungkan ketajaman akademis dan keunggulan litigasi untuk memberikan solusi strategis bagi bisnis dan korporasi.
            </p>
            
            {/* Social Icons - Tema Terang */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:bg-[#0F172A] hover:border-[#0F172A] hover:text-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-[#0F172A] font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#D4AF37]"></span> Tautan Cepat
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center text-sm font-semibold text-slate-500 hover:text-[#0F172A] transition-colors"
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
            <h4 className="text-[#0F172A] font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#D4AF37]"></span> Hubungi Kami
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors shadow-sm">
                    <MapPin className="text-[#D4AF37]" size={18} />
                  </div>
                  <span className="text-slate-500 font-medium group-hover:text-[#0F172A] transition-colors leading-relaxed pt-1.5">
                    Plaza Aminta Lt. 5/504, Jl. Let. Jen. TB Simatupang Kav.10,<br />Pondok Pinang, Kebayoran Lama, Jakarta Selatan 12310,<br />Indonesia
                  </span>
                </li>
              </ul>
              
              <ul className="space-y-6 text-sm">
                <li className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors shadow-sm">
                    <Phone className="text-[#D4AF37]" size={18} />
                  </div>
                  <span className="text-slate-500 group-hover:text-[#0F172A] transition-colors font-bold">
                    +62 21 555 0192
                  </span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors shadow-sm">
                    <Mail className="text-[#D4AF37]" size={18} />
                  </div>
                  <span className="text-slate-500 group-hover:text-[#0F172A] transition-colors font-bold">
                    obh-yppalkamal@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-semibold">
          <p>&copy; {new Date().getFullYear()} OBH YPP AL-KAMAL. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-[#0F172A] transition-colors">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:text-[#0F172A] transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}