import FadeIn from "@/components/motion/FadeIn";
import { Mail, GraduationCap, Scale, Briefcase, Award, Quote } from "lucide-react";

// Komponen SVG Kustom untuk LinkedIn
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function TeamPage() {
  // 1. Data Pemilik Perusahaan / Managing Partner
  const founder = {
    name: "Ahmad Abbas, S.H., LL.M.",
    role: "Founder & Managing Partner",
    edu: "S1 Ilmu Hukum - Universitas Indonesia | LL.M - Harvard Law School",
    bar: "PERADI, AKPI, HKHPM",
    expertise: "Corporate Restructuring & Commercial Litigation",
    quote: "Integritas bukanlah sekadar kepatuhan pada aturan, melainkan komitmen absolut untuk melindungi kepentingan klien dengan cara yang paling terhormat.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" // Gunakan potret profesional asli
  };

  // 2. Data 6 Pengacara Lainnya
  const team = [
    { 
      name: "Dr. Satya Wardhana, S.H.", 
      role: "Senior Partner", 
      edu: "S3 Ilmu Hukum - Universitas Gadjah Mada",
      bar: "PERADI, AAI",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      name: "Andira Kirana, S.H., M.H.", 
      role: "Partner - Corporate", 
      edu: "S2 Hukum Bisnis - Universitas Padjadjaran",
      bar: "PERADI, HKHPM",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      name: "Bimo Wicaksono, S.H.", 
      role: "Senior Associate", 
      edu: "S1 Ilmu Hukum - Universitas Diponegoro",
      bar: "PERADI",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      name: "Clara Monica, S.H., LL.M.", 
      role: "Senior Associate", 
      edu: "LL.M - Melbourne Law School",
      bar: "PERADI",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      name: "David Pratama, S.H.", 
      role: "Associate", 
      edu: "S1 Ilmu Hukum - Universitas Airlangga",
      bar: "PERADI",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      name: "Elena Kusuma, S.H.", 
      role: "Junior Associate", 
      edu: "S1 Ilmu Hukum - Universitas Indonesia",
      bar: "PERADI (Calon)",
      img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=600" 
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-32">
      {/* Header Section */}
      <section className="bg-[#0F172A] pt-32 pb-24 text-center">
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">Profil Penasihat Hukum</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg px-6">
            Di balik setiap kemenangan hukum, terdapat tim litigasi dan negosiator yang bekerja dengan presisi analitis dan standar etika tertinggi.
          </p>
        </FadeIn>
      </section>

      {/* 1. KARTU UTAMA: FOUNDER & MANAGING PARTNER */}
      <section className="container mx-auto px-6 max-w-7xl -mt-12 relative z-10">
        <FadeIn>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col lg:flex-row group">
            {/* Foto Founder */}
            <div className="w-full lg:w-2/5 relative h-[400px] lg:h-auto overflow-hidden">
              <img 
                src={founder.img} 
                alt={founder.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/80 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Detail Founder */}
            <div className="w-full lg:w-3/5 bg-[#0F172A] p-10 md:p-14 text-white relative flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award size={120} className="text-[#D4AF37]" />
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-bold tracking-widest uppercase rounded-sm mb-4">
                  {founder.role}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">{founder.name}</h2>
                <p className="text-[#D4AF37] mb-8 font-medium">{founder.expertise}</p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="text-slate-400 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{founder.edu}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Scale className="text-slate-400 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{founder.bar}</span>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 mb-8">
                  <Quote className="text-[#D4AF37] w-6 h-6 mb-2 opacity-50" />
                  <p className="font-serif italic text-slate-300 leading-relaxed">
                    "{founder.quote}"
                  </p>
                </blockquote>

                <div className="flex gap-4">
                  <button className="bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0F172A] p-3 rounded-full transition-colors border border-white/10 hover:border-transparent">
                    <Mail size={20} />
                  </button>
                  <button className="bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0F172A] p-3 rounded-full transition-colors border border-white/10 hover:border-transparent">
                    <LinkedinIcon size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Pembatas / Label Tim */}
      <section className="container mx-auto px-6 max-w-7xl mt-24 mb-12">
        <div className="flex items-center gap-6">
          <h3 className="font-serif text-2xl font-bold text-[#0F172A] uppercase tracking-wide">Partners & Associates</h3>
          <div className="flex-grow h-px bg-slate-200"></div>
        </div>
      </section>

      {/* 2. KARTU TIM (6 Pengacara) */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((lawyer, i) => (
            <FadeIn delay={0.1 * i} key={i}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full">
                
                {/* Bagian Foto */}
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={lawyer.img} 
                    alt={lawyer.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  />
                  {/* Label Posisi Mengambang */}
                  <div className="absolute top-4 left-4 bg-[#0F172A]/90 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-slate-700/50">
                    <p className="text-[#D4AF37] font-bold text-xs tracking-wider uppercase">{lawyer.role}</p>
                  </div>
                </div>

                {/* Bagian Info */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-6 group-hover:text-[#D4AF37] transition-colors">{lawyer.name}</h3>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex gap-4 text-slate-600 text-sm">
                      <GraduationCap className="w-5 h-5 text-[#D4AF37] shrink-0" />
                      <span className="leading-relaxed">{lawyer.edu}</span>
                    </div>
                    <div className="flex gap-4 text-slate-600 text-sm">
                      <Scale className="w-5 h-5 text-[#D4AF37] shrink-0" />
                      <span>{lawyer.bar}</span>
                    </div>
                  </div>

                  {/* Tombol Sosial */}
                  <div className="border-t border-slate-100 pt-6 flex justify-between items-center mt-auto">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kontak Langsung</span>
                    <div className="flex gap-3">
                      <button className="text-slate-400 hover:text-[#0F172A] transition-colors p-2 hover:bg-slate-50 rounded-full" aria-label="Email">
                        <Mail size={18} />
                      </button>
                      <button className="text-slate-400 hover:text-[#0077b5] transition-colors p-2 hover:bg-slate-50 rounded-full" aria-label="LinkedIn">
                        <LinkedinIcon size={18} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}