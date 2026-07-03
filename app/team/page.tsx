"use client";

import React from "react";
import Image from "next/image";
import { Mail, ArrowRight, Gavel, Scale, Briefcase } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import FadeIn from "@/components/motion/FadeIn"; 

// Tipe Data
type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  image: string;
};

// Data: Board of Partners
const partners: TeamMember[] = [
  {
    name: "Ahmad Abbas, S.H., LL.M.",
    role: "Founder & Managing Partner",
    specialty: "Litigasi & Hukum Korporasi",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Satya Wardhana, S.H., M.H.",
    role: "Senior Partner",
    specialty: "Hukum Pidana & HAM",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Andira Kirana, S.H., M.H.",
    role: "Partner",
    specialty: "Hukum Keluarga & Perdata",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Hendra Wijaya, S.H., LL.M.",
    role: "Partner",
    specialty: "Hukum Pajak & Kepailitan",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
  }
];

// Data: Senior Associates
const seniorAssociates: TeamMember[] = [
  {
    name: "Ratna Kumala, S.H., M.H.",
    role: "Senior Associate",
    specialty: "Hukum Ketenagakerjaan",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Reza Rahardian, S.H., M.Kn.",
    role: "Senior Associate",
    specialty: "Hukum Properti & Agraria",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Fitri Amanda, S.H.",
    role: "Senior Associate",
    specialty: "Hak Kekayaan Intelektual (HKI)",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
  }
];

// Data: Associates
const associates: TeamMember[] = [
  {
    name: "Kevin Sanjaya, S.H.",
    role: "Associate",
    specialty: "Hukum Perusahaan",
    image: "https://images.unsplash.com/photo-1600878459190-67ebde4f07a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Nabila Putri, S.H.",
    role: "Associate",
    specialty: "Alternatif Penyelesaian Sengketa",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef4374b48?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Bayu Aji, S.H.",
    role: "Associate",
    specialty: "Litigasi Pidana",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Sarah Melati, S.H.",
    role: "Associate",
    specialty: "Hukum Lingkungan",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800"
  }
];

// Sub-Komponen Reusable untuk Kartu Pengacara (Premium Glassmorphism Design)
const LawyerCard = ({ member, index }: { member: TeamMember; index: number }) => (
  <FadeIn delay={index * 0.15}>
    <div className="group relative overflow-hidden rounded-2xl bg-slate-800 h-[500px] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)]">
      
      {/* Gambar Utama */}
      <Image 
        src={member.image} 
        alt={member.name}
        fill
        className="object-cover object-top grayscale-[75%] group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
      
      {/* Gradient Transisi Lembut */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
      
      {/* Glassmorphism Content Card di Bawah */}
      <div className="absolute bottom-4 left-4 right-4 z-20 overflow-hidden rounded-xl bg-[#0F172A]/70 backdrop-blur-md border border-white/10 p-5 transform translate-y-4 group-hover:translate-y-0 group-hover:border-[#D4AF37]/50 transition-all duration-500 ease-out">
        
        {/* Indikator Aksen Emas */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></div>

        <span className="text-[#D4AF37] font-semibold text-[10px] tracking-[0.2em] uppercase mb-1.5 block">
          {member.role}
        </span>
        <h3 className="font-serif text-xl font-bold text-white mb-1 line-clamp-1">
          {member.name}
        </h3>
        
        <p className="text-slate-300 text-xs font-light mb-4">
          Spesialisasi: <span className="font-medium text-white">{member.specialty}</span>
        </p>
        
        {/* Tombol Sosial & Aksi (Tersembunyi hingga di hover) */}
        <div className="flex items-center justify-between opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 delay-100 border-t border-white/10 pt-4 mt-2">
          <div className="flex gap-2">
            <a href="#" aria-label={`LinkedIn ${member.name}`} className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#0F172A] transition-all duration-300">
              <FaLinkedinIn size={12} />
            </a>
            <a href="#" aria-label={`Email ${member.name}`} className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#0F172A] transition-all duration-300">
              <Mail size={12} />
            </a>
          </div>
          
          <div className="flex items-center text-[#D4AF37] text-xs font-semibold tracking-wider uppercase group/btn">
            <span className="mr-1.5">Profil Lengkap</span>
            <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
      
    </div>
  </FadeIn>
);

export default function TeamPage() {
  return (
    <section className="relative w-full bg-[#0F172A] min-h-screen pb-24 selection:bg-[#D4AF37] selection:text-[#0F172A] overflow-hidden">
      
      {/* Background Orbs & Gradients Global yang Disesuaikan */}
      <div className="absolute top-0 inset-x-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e293b]/50 via-[#0F172A] to-[#0F172A] z-0 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative z-10 w-full min-h-[50vh] flex flex-col items-center justify-center pt-40 pb-20 px-6 lg:px-12 border-b border-white/5">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Tagline Elegan */}
            <div className="inline-flex items-center gap-4 mb-8 px-6 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-xs">
                Profil Profesional
              </span>
            </div>
            
            {/* Judul Utama dengan Gradient Emas */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              Mengenal Lebih Dekat <br/>
              <span className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-transparent bg-clip-text inline-block mt-2">
                Tim Hukum Kami
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
              Didukung oleh barisan advokat tangguh, berintegritas, dan berpengalaman tinggi dalam memecahkan kompleksitas hukum dari berbagai spektrum industri.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* ================= TEAM GRID SECTION ================= */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 pt-24">
        
        {/* Kategori 1: Board of Partners */}
        <div className="mb-24">
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37]/5"></div>
                <Gavel size={24} strokeWidth={1.5} className="relative z-10" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-white font-bold tracking-wide">Board of Partners</h2>
                <p className="text-slate-400 text-sm mt-1 font-light">Para pemimpin dan pengambil keputusan strategis firma.</p>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/30 to-transparent ml-4"></div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {partners.map((member, index) => (
              <LawyerCard key={`partner-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Kategori 2: Senior Associates */}
        <div className="mb-24">
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37]/5"></div>
                <Briefcase size={24} strokeWidth={1.5} className="relative z-10" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-white font-bold tracking-wide">Senior Associates</h2>
                <p className="text-slate-400 text-sm mt-1 font-light">Praktisi hukum senior yang mengawal kompleksitas penyelesaian perkara.</p>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/30 to-transparent ml-4"></div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {seniorAssociates.map((member, index) => (
              <LawyerCard key={`senior-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Kategori 3: Associates */}
        <div className="mb-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37]/5"></div>
                <Scale size={24} strokeWidth={1.5} className="relative z-10" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-white font-bold tracking-wide">Associates</h2>
                <p className="text-slate-400 text-sm mt-1 font-light">Barisan pengacara dinamis yang melakukan riset, advokasi, dan penyiapan perkara.</p>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/30 to-transparent ml-4"></div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {associates.map((member, index) => (
              <LawyerCard key={`associate-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}