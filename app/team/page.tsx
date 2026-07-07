"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight, ChevronDown, Award } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import FadeIn from "@/components/motion/FadeIn"; 

// ================= DATA STRUKTUR ORGANISASI =================

type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  image: string;
  quote?: string;
};

// 1. KETUA UMUM (Top Level)
const ketuaUmum: TeamMember = {
  name: "Ahmad Abbas, S.H., LL.M.",
  role: "Ketua Umum / Founder",
  specialty: "Litigasi & Hukum Korporasi",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  quote: "Keadilan bukanlah sekadar retorika di ruang sidang, melainkan hak absolut yang harus diperjuangkan dengan presisi dan integritas tanpa kompromi."
};

// 2. JAJARAN PANITIA (Mid Level - Baris 2)
const panitia: TeamMember[] = [
  {
    name: "Dr. Satya Wardhana, S.H., M.H.",
    role: "Wakil Ketua Umum",
    specialty: "Hukum Pidana & HAM",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Andira Kirana, S.H., M.H.",
    role: "Sekretaris Jenderal",
    specialty: "Hukum Keluarga & Perdata",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Hendra Wijaya, S.H., LL.M.",
    role: "Bendahara Umum",
    specialty: "Hukum Pajak & Kepailitan",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
  }
];

// 3. ANGGOTA (Base Level - Baris 3)
const anggota: TeamMember[] = [
  {
    name: "Ratna Kumala, S.H., M.H.",
    role: "Anggota Litigasi",
    specialty: "Hukum Ketenagakerjaan",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Reza Rahardian, S.H., M.Kn.",
    role: "Anggota Non-Litigasi",
    specialty: "Hukum Properti & Agraria",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Fitri Amanda, S.H.",
    role: "Anggota Riset",
    specialty: "Hak Kekayaan Intelektual",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Kevin Sanjaya, S.H.",
    role: "Anggota Humas",
    specialty: "Hukum Perusahaan",
    image: "https://images.unsplash.com/photo-1600878459190-67ebde4f07a5?auto=format&fit=crop&q=80&w=800"
  }
];

// ================= KOMPONEN KARTU BERWIBAWA (STANDARD) =================
const ProfileCard = ({ member, index }: { member: TeamMember; index: number }) => (
  <FadeIn delay={index * 0.15}>
    <div className="group relative overflow-hidden bg-[#0F172A] border border-stone-800 h-120 cursor-pointer transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.2)]">
      
      {/* Gambar dengan filter dramatis */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={member.image} 
          alt={member.name}
          fill
          className="object-cover object-top grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      
      {/* Overlay gradien gelap untuk memastikan teks terbaca */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Konten Teks di bagian bawah kartu */}
      <div className="absolute bottom-0 left-0 w-full p-6 border-l-4 border-transparent group-hover:border-[#D4AF37] transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] font-bold text-[10px] tracking-[0.2em] uppercase mb-2 block">
          {member.role}
        </span>
        <h3 className="font-serif text-2xl font-bold text-white mb-1 line-clamp-1 group-hover:text-[#FCF6BA] transition-colors">
          {member.name}
        </h3>
        <p className="text-stone-400 text-xs font-light mb-4">
          Spesialisasi: <span className="font-medium text-stone-200">{member.specialty}</span>
        </p>
        
        {/* Fitur Sosial (Muncul saat hover) */}
        <div className="flex items-center justify-between opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 delay-100 border-t border-stone-700/50 pt-4 mt-2">
          <div className="flex gap-3">
            <a href="#" className="text-stone-400 hover:text-[#D4AF37] transition-colors">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="text-stone-400 hover:text-[#D4AF37] transition-colors">
              <Mail size={16} />
            </a>
          </div>
          <div className="flex items-center text-[#D4AF37] text-xs font-semibold tracking-wider uppercase group/btn">
            <span className="mr-1.5">Profil</span>
            <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
      
    </div>
  </FadeIn>
);

export default function TeamPage() {
  return (
    <div className="relative w-full bg-[#0F172A] min-h-screen pb-24 selection:bg-[#D4AF37] selection:text-[#0F172A] overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[70vh] bg-[#0F172A] flex items-center justify-center overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664177922-928394b2951b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0F172A]/70 via-[#0F172A]/90 to-[#0F172A]" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center mt-20">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-8 bg-stone-900/50 border border-stone-800 px-6 py-2 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-stone-300 font-bold tracking-[0.2em] uppercase text-xs">Struktur Organisasi</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 tracking-tight leading-[1.15]">
              Pilar Keadilan <br />
              <span className="italic font-light text-transparent bg-clip-text bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
                Tim Hukum Kami.
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"></div>
            
            <p className="text-stone-300 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Struktur komando yang solid, diisi oleh barisan advokat tangguh, berintegritas, dan berpengalaman tinggi dalam memecahkan kompleksitas hukum.
            </p>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-500">
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </section>

      {/* ================= STRUKTUR ORGANISASI SECTION ================= */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 pt-20">
        
        {/* TINGKAT 1: KETUA UMUM (Featured Card Mewah) */}
        <div className="mb-32">
          <FadeIn>
            <div className="flex flex-col items-center mb-12 text-center">
              <div className="w-12 h-12 rounded-none bg-stone-900 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)] rotate-45">
                <Award size={20} className="-rotate-45" />
              </div>
              <h2 className="text-4xl font-serif text-white font-bold tracking-wide uppercase">Ketua Umum</h2>
              <div className="w-12 h-1 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent mt-6"></div>
            </div>
            
            <div className="relative group overflow-hidden bg-stone-900 border border-stone-800 flex flex-col md:flex-row items-center transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_15px_50px_-15px_rgba(212,175,55,0.3)]">
              {/* Gambar Ketua */}
              <div className="w-full md:w-2/5 h-100 md:h-125 relative overflow-hidden">
                <Image 
                  src={ketuaUmum.image} 
                  alt={ketuaUmum.name}
                  fill
                  className="object-cover object-top grayscale-50 group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-stone-900 via-stone-900/50 to-transparent" />
              </div>
              
              {/* Info Ketua */}
              <div className="w-full md:w-3/5 p-10 md:p-16 relative z-10">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] font-bold text-xs tracking-[0.3em] uppercase mb-3 block">
                  {ketuaUmum.role}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                  {ketuaUmum.name}
                </h3>
                <p className="text-stone-400 text-sm font-medium uppercase tracking-widest mb-8 border-b border-stone-800 pb-4 inline-block">
                  Spesialisasi: <span className="text-stone-200">{ketuaUmum.specialty}</span>
                </p>
                
                <blockquote className="font-serif text-xl md:text-2xl text-stone-300 italic leading-relaxed mb-8 border-l-4 border-[#D4AF37] pl-6">
                  "{ketuaUmum.quote}"
                </blockquote>
                
                <Link href="#" className="inline-flex items-center text-[#D4AF37] text-sm font-semibold tracking-widest uppercase hover:text-white transition-colors group/btn">
                  Lihat Profil Lengkap 
                  <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Garis Penghubung Struktur */}
        <div className="w-px h-24 bg-linear-to-b from-[#D4AF37]/50 to-transparent mx-auto -mt-20 mb-12 hidden md:block"></div>

        {/* TINGKAT 2: JAJARAN PANITIA */}
        <div className="mb-32">
          <FadeIn>
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-3xl font-serif text-stone-200 font-bold tracking-wide">Jajaran Panitia</h2>
              <p className="text-stone-500 text-sm mt-2 font-light">Pilar strategis dalam manajemen dan operasional firma.</p>
              <div className="w-12 h-1 bg-linear-to-r from-transparent via-stone-700 to-transparent mt-6"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {panitia.map((member, index) => (
              <ProfileCard key={`panitia-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Garis Penghubung Struktur */}
        <div className="w-px h-24 bg-linear-to-b from-stone-700 to-transparent mx-auto -mt-20 mb-12 hidden md:block"></div>

        {/* TINGKAT 3: ANGGOTA */}
        <div className="mb-10">
          <FadeIn>
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-3xl font-serif text-stone-200 font-bold tracking-wide">Anggota</h2>
              <p className="text-stone-500 text-sm mt-2 font-light">Barisan advokat tangguh yang menjadi ujung tombak penanganan perkara.</p>
              <div className="w-12 h-1 bg-linear-to-r from-transparent via-stone-700 to-transparent mt-6"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {anggota.map((member, index) => (
              <ProfileCard key={`anggota-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}