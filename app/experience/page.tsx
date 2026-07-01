"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Building2, Landmark, Briefcase, 
  ShieldCheck, ArrowRight, Quote, Scale, Globe, ChevronDown 
} from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

export default function ExperiencePage() {
  const [activeCase, setActiveCase] = useState<number | null>(null);

  // Data Sektor Industri
  const sectors = [
    { icon: <Landmark size={32} />, name: "Perbankan & Keuangan", desc: "Mewakili bank nasional dan asing dalam sindikasi kredit dan restrukturisasi." },
    { icon: <Building2 size={32} />, name: "Properti & Real Estate", desc: "Pendampingan akuisisi lahan komersial dan sengketa konstruksi bernilai tinggi." },
    { icon: <Globe size={32} />, name: "Teknologi & Telekomunikasi", desc: "Kepatuhan privasi data, lisensi infrastruktur, dan sengketa paten teknologi." },
    { icon: <Briefcase size={32} />, name: "Energi & Pertambangan", desc: "Navigasi regulasi kompleks, kontrak bagi hasil, dan arbitrase komersial." },
  ];

  // Data Rekam Jejak (Pengalaman Kasus)
  const caseStudies = [
    {
      title: "Restrukturisasi Utang Multinasional (PKPU)",
      client: "Konglomerasi Properti Terkemuka",
      value: "Rp 5.2 Triliun",
      desc: "Berhasil mencapai homologasi (perdamaian) dalam proses PKPU yang kompleks dengan lebih dari 100 kreditur sindikasi asing dan domestik.",
      category: "Litigasi & Resolusi Sengketa"
    },
    {
      title: "Merger & Akuisisi Lintas Batas",
      client: "Perusahaan Fintech Asia Tenggara",
      value: "USD 120 Juta",
      desc: "Menjadi konsultan hukum utama dalam proses due diligence, negosiasi, dan penyusunan SPA tanpa kendala regulatori.",
      category: "Hukum Korporasi"
    },
    {
      title: "Kemenangan Arbitrase Internasional",
      client: "Perusahaan Konstruksi BUMN",
      value: "USD 45 Juta",
      desc: "Memenangkan klien dalam sengketa infrastruktur di forum Singapore International Arbitration Centre (SIAC) melawan kontraktor asing.",
      category: "Arbitrase Internasional"
    },
    {
      title: "Perlindungan Hak Kekayaan Intelektual",
      client: "Brand F&B Global",
      value: "Keamanan Aset",
      desc: "Berhasil membatalkan pendaftaran merek itikad tidak baik oleh pihak lokal di Pengadilan Niaga, mengembalikan hak eksklusif klien.",
      category: "Hak Kekayaan Intelektual"
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen selection:bg-[#D4AF37] selection:text-[#0F172A]">
      
      {/* 1. HERO SECTION (Disamakan dengan AboutPage) */}
      <section className="relative w-full h-[90vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664177922-928394b2951b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A]" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center mt-20">
          <FadeIn>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
              Portofolio Firma
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 tracking-tight leading-[1.1]">
              Klien & <br className="hidden md:block"/>
              <span className="italic font-light text-slate-300">Pengalaman Kami.</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Selama lebih dari dua dekade, kami dipercaya untuk menavigasi kompleksitas hukum dan memberikan hasil yang meyakinkan bagi klien global.
            </p>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </section>

      {/* 2. SEKTOR INDUSTRI KLIEN (Desain Modern Grid Interaktif) */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Sektor Industri Klien</h2>
                <div className="w-16 h-1 bg-[#D4AF37]"></div>
              </div>
              <p className="text-slate-500 max-w-md md:text-right text-lg">
                Pendekatan yang dirancang khusus mengikuti lanskap komersial dan regulasi spesifik dari masing-masing industri.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <FadeIn delay={index * 0.1} key={index}>
                <div className="group h-full p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-[#0F172A] hover:shadow-2xl hover:shadow-[#0F172A]/10 transition-all duration-500 relative overflow-hidden">
                  {/* Efek Latar Belakang Lingkaran saat di Hover */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-white border border-slate-100 group-hover:border-transparent group-hover:bg-[#1E293B] flex items-center justify-center text-[#0F172A] group-hover:text-[#D4AF37] mb-8 transition-colors duration-500 shadow-sm">
                      {sector.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#0F172A] group-hover:text-white mb-4 transition-colors duration-500">
                      {sector.name}
                    </h3>
                    <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed transition-colors duration-500">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REKAM JEJAK / STUDI KASUS (Bento Grid Style Modern) */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20 text-center">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                Rekam Jejak Strategis
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Transparansi dalam eksekusi dan komitmen pada hasil akhir. Berikut adalah portofolio perkara menonjol yang telah diselesaikan.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((item, index) => (
              <FadeIn delay={index * 0.1} key={index}>
                <motion.div 
                  className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm hover:shadow-xl relative overflow-hidden group transition-shadow duration-500"
                  onHoverStart={() => setActiveCase(index)}
                  onHoverEnd={() => setActiveCase(null)}
                >
                  {/* Garis Aksen Vertikal Animasi */}
                  <motion.div 
                    className="absolute top-0 left-0 w-1.5 bg-[#D4AF37]"
                    initial={{ height: "0%" }}
                    animate={{ height: activeCase === index ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  <div className="flex items-center gap-2 mb-8">
                    <ShieldCheck size={20} className="text-[#D4AF37]" />
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">{item.category}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <div className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-colors duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-slate-500">Klien</span>
                      <span className="text-sm font-bold text-[#0F172A] text-right">{item.client}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-500">Nilai Perkara</span>
                      <span className="text-sm font-bold text-[#D4AF37] px-3 py-1 bg-[#D4AF37]/10 rounded-full">{item.value}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONI KLIEN (Clean Minimalist Dark Theme) */}
      <section className="py-32 bg-[#0F172A] relative overflow-hidden">
        {/* Dekorasi Air Terjun Grafis */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/5 to-transparent blur-3xl opacity-50 rounded-full pointer-events-none"></div>
        <div className="absolute opacity-[0.03] -right-20 bottom-0 pointer-events-none">
          <Scale size={600} className="text-white" />
        </div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <Quote size={48} className="text-[#D4AF37] mx-auto mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Kepercayaan yang Terbukti</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimoni 1 */}
              <div className="bg-[#1E293B]/40 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-slate-700/50 hover:border-[#D4AF37]/50 transition-colors duration-500 group">
                <p className="text-slate-300 text-lg italic leading-relaxed mb-10 group-hover:text-white transition-colors">
                  "Ketajaman analisis hukum dan pendekatan pragmatis dari tim mereka sangat krusial dalam menyelamatkan perusahaan kami dari ancaman kepailitan. Sebuah firma hukum dengan integritas tinggi yang langka."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-[#D4AF37] font-bold font-serif">
                    DU
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-wide">Direktur Utama</h4>
                    <p className="text-[#D4AF37] text-sm font-medium">Perusahaan Manufaktur Multinasional</p>
                  </div>
                </div>
              </div>

              {/* Testimoni 2 */}
              <div className="bg-[#1E293B]/40 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-slate-700/50 hover:border-[#D4AF37]/50 transition-colors duration-500 group">
                <p className="text-slate-300 text-lg italic leading-relaxed mb-10 group-hover:text-white transition-colors">
                  "Proses akuisisi lintas negara yang sangat rumit berhasil dieksekusi dengan sempurna. Mereka tidak hanya memahami kerumitan hukum, tetapi juga memahami esensi bisnis kami secara mendalam."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-[#D4AF37] font-bold font-serif">
                    CF
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-wide">Chief Financial Officer (CFO)</h4>
                    <p className="text-[#D4AF37] text-sm font-medium">Fintech Group Asia</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. CALL TO ACTION (Elegant Minimalist) */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl font-bold text-[#0F172A] mb-6">Butuh Pendampingan Hukum Eksekutif?</h2>
            <p className="text-slate-500 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Diskusikan kebutuhan korporasi atau perkara hukum Anda dengan mitra pengacara kami secara rahasia dan komprehensif.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#0F172A] hover:bg-[#D4AF37] text-white hover:text-[#0F172A] px-10 py-5 rounded-full font-bold transition-all duration-500 shadow-xl hover:shadow-[#D4AF37]/30 group"
            >
              Jadwalkan Konsultasi 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}