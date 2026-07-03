"use client";

import React from "react";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
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

// Sub-Komponen Reusable untuk Kartu Pengacara
const LawyerCard = ({ member, index }: { member: TeamMember; index: number }) => (
  <FadeIn delay={index * 0.15}>
    <div className="group relative overflow-hidden rounded-xl bg-slate-900 h-[480px] cursor-pointer">
      {/* Border Interaktif */}
      <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-[#D4AF37]/60 transition-colors duration-700 z-30 pointer-events-none"></div>

      {/* Foto Profil */}
      <Image 
        src={member.image} 
        alt={member.name}
        fill
        className="object-cover object-top grayscale-[80%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110 z-0"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500 z-10" />
      
      {/* Konten Teks */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
        <div className="w-8 h-[2px] bg-[#D4AF37] mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out delay-100"></div>

        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="text-[#D4AF37] font-semibold text-[11px] tracking-widest uppercase mb-2 block">
            {member.role}
          </span>
          <h3 className="font-serif text-2xl font-bold text-white mb-2 leading-snug">
            {member.name}
          </h3>
          
          <div className="overflow-hidden">
            <p className="text-slate-300 text-sm font-light mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
              Spesialisasi: <span className="font-medium text-white">{member.specialty}</span>
            </p>
          </div>
          
          {/* Interaksi Sosial & Tombol Profil */}
          <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 border-t border-white/10 pt-4 mt-2">
            <div className="flex gap-3">
              <a href="#" aria-label={`LinkedIn ${member.name}`} className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#0F172A] transition-all duration-300">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#" aria-label={`Email ${member.name}`} className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#0F172A] transition-all duration-300">
                <Mail size={14} />
              </a>
            </div>
            
            <div className="flex items-center text-[#D4AF37] text-xs font-semibold tracking-wider uppercase group/btn">
              <span className="mr-2">Profil</span>
              <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </FadeIn>
);

export default function TeamPage() {
  return (
    <section className="relative w-full bg-[#0F172A] min-h-screen pt-32 pb-24 selection:bg-[#D4AF37] selection:text-[#0F172A] overflow-hidden">
      
      {/* Dekorasi Background Premium */}
      <div className="absolute top-0 inset-x-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e293b] via-[#0F172A] to-[#0F172A] z-0"></div>
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Header Utama */}
        <FadeIn>
          <div className="text-center mb-24 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-xs">
                Profil Profesional
              </span>
              <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Tim Hukum Kami
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Didukung oleh barisan advokat tangguh, berintegritas, dan berpengalaman tinggi dalam memecahkan kompleksitas hukum untuk setiap kalangan.
            </p>
          </div>
        </FadeIn>

        {/* Section 1: Board of Partners */}
        <div className="mb-20">
          <FadeIn>
            <div className="mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-serif text-white font-semibold tracking-wide">Board of Partners</h2>
              <p className="text-slate-400 text-sm mt-1 font-light">Para pemimpin dan pengambil keputusan strategis firma.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {partners.map((member, index) => (
              <LawyerCard key={`partner-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Section 2: Senior Associates */}
        <div className="mb-20">
          <FadeIn>
            <div className="mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-serif text-white font-semibold tracking-wide">Senior Associates</h2>
              <p className="text-slate-400 text-sm mt-1 font-light">Praktisi hukum senior yang mengawal kompleksitas penyelesaian perkara.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {seniorAssociates.map((member, index) => (
              <LawyerCard key={`senior-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Section 3: Associates */}
        <div className="mb-10">
          <FadeIn>
            <div className="mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-serif text-white font-semibold tracking-wide">Associates</h2>
              <p className="text-slate-400 text-sm mt-1 font-light">Barisan pengacara dinamis yang melakukan riset, advokasi, dan penyiapan perkara.</p>
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