"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, Shield, Briefcase, ChevronRight, CheckCircle2, ArrowRight, Users, X } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn"; 
import { motion, AnimatePresence } from "framer-motion";

// 1. Tipe data untuk Layanan
type PracticeArea = {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: string[];
};

export default function Home() {
  // 2. State untuk mengontrol Pop-up (Modal)
  const [selectedService, setSelectedService] = useState<PracticeArea | null>(null);

  // 3. Data Layanan (Termasuk deskripsi lengkap untuk pop-up)
  const services: PracticeArea[] = [
    {
      id: "pidana",
      icon: Briefcase,
      title: "Pembelaan Pidana (Criminal Defense)",
      shortDesc: "Pendampingan hukum menyeluruh bagi tersangka dan terdakwa dalam proses peradilan pidana, memastikan hak-hak konstitusional terlindungi.",
      fullDesc: [
        "Layanan pembelaan pidana kami mencakup pendampingan dari tahap penyelidikan dan penyidikan di Kepolisian, penuntutan di Kejaksaan, hingga proses persidangan di Pengadilan.",
        "Kami berkomitmen untuk memastikan bahwa hak-hak asasi dan konstitusional klien kami (baik sebagai pelapor, saksi, tersangka, maupun terdakwa) sepenuhnya dihormati dan tidak dilanggar selama proses hukum berlangsung.",
        "Tim kami memiliki rekam jejak yang solid dalam menangani kasus-kasus tindak pidana umum maupun tindak pidana khusus (seperti korupsi, pencucian uang, dan kejahatan siber)."
      ]
    },
    {
      id: "keluarga",
      icon: Scale,
      title: "Hukum Keluarga (Family Law)",
      shortDesc: "Mediasi dan advokasi dalam sengketa perceraian, hak asuh anak, pembagian harta gono-gini, serta perlindungan terhadap kekerasan dalam rumah tangga.",
      fullDesc: [
        "Permasalahan hukum keluarga seringkali menguras emosi dan membutuhkan kepekaan tinggi. Kami hadir memberikan pendampingan hukum yang tidak hanya presisi secara undang-undang, tetapi juga mengedepankan pendekatan humanis.",
        "Layanan kami meliputi mediasi pra-perceraian, gugatan perceraian, sengketa hak asuh anak (hadhanah), pembagian harta bersama (gono-gini), hingga penetapan ahli waris.",
        "Selain itu, kami juga aktif memberikan advokasi perlindungan hukum bagi korban Kekerasan Dalam Rumah Tangga (KDRT) untuk menjamin keselamatan dan keadilan bagi mereka."
      ]
    },
    {
      id: "ketenagakerjaan",
      icon: Shield,
      title: "Hak Tenaga Kerja (Labor Rights)",
      shortDesc: "Perlindungan hak-hak buruh dan pekerja dari pemutusan hubungan kerja sepihak, eksploitasi, serta pelanggaran kontrak dan upah minimum.",
      fullDesc: [
        "Hak-hak pekerja adalah pilar penting dalam keadilan sosial. Kami mendedikasikan layanan ini untuk membela tenaga kerja dari perlakuan sewenang-wenang dan eksploitasi oleh perusahaan.",
        "Kami menangani perselisihan pemutusan hubungan kerja (PHK) sepihak, tuntutan pembayaran pesangon yang tidak sesuai aturan, perselisihan hak (seperti upah yang tidak dibayar), hingga perselisihan antar serikat pekerja.",
        "Advokat kami memiliki pengalaman mendalam beracara di Pengadilan Hubungan Industrial (PHI) dan melakukan mediasi bipartit/tripartit di Dinas Ketenagakerjaan."
      ]
    },
    {
      id: "ham",
      icon: Users,
      title: "Hak Asasi Manusia (Human Rights)",
      shortDesc: "Advokasi dan litigasi strategis untuk kasus-kasus pelanggaran hak asasi manusia, diskriminasi, serta kebebasan berekspresi dan berkeyakinan.",
      fullDesc: [
        "Sebagai Organisasi Bantuan Hukum (OBH), pembelaan terhadap Hak Asasi Manusia adalah inti dari nafas perjuangan kami. Keadilan harus dapat diakses oleh semua lapisan masyarakat tanpa diskriminasi.",
        "Kami melakukan litigasi struktural untuk melawan ketidakadilan yang sistemik, mendampingi korban penggusuran paksa, sengketa lahan struktural, kriminalisasi aktivis, dan pelanggaran kebebasan berekspresi.",
        "Melalui kajian yang mendalam dan kolaborasi dengan berbagai LSM/NGO, kami memastikan suara kaum marjinal terdengar jelas di ruang sidang maupun di mata publik."
      ]
    }
  ];

  return (
    <div className="w-full selection:bg-[#D4AF37] selection:text-[#0F172A]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Suasana Kantor Firma Hukum Profesional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          <div className="lg:col-span-8 pt-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-600/50 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <p className="text-slate-200 text-sm font-medium">Keadilan Untuk Semua, Hak Untuk Setiap Insan.</p>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 drop-shadow-lg">
                Keadilan Untuk Semua, Hak Untuk Setiap Insan. <span className="text-[#D4AF37] italic">Otoritatif</span> & Presisi.
              </h1>
              
              <div className="text-slate-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto lg:mx-0">
                <p className="mb-4">
                  Memberikan pendampingan dan solusi hukum terbaik bagi masyarakat dengan prinsip Adaptif, Inovatif, dan Responsif melalui:
                </p>
                <ul className="flex flex-col gap-3 text-base md:text-lg">
                  <li className="flex items-center justify-center lg:justify-start gap-3">
                    <CheckCircle2 size={20} className="text-[#D4AF37] shrink-0" />
                    <span>Pendampingan menyeluruh dalam <strong> Pembelaan Pidana </strong> dan  <strong>Hukum Keluarga</strong></span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-3">
                    <CheckCircle2 size={20} className="text-[#D4AF37] shrink-0" />
                    <span>Perlindungan dan advokasi yang tegas untuk <strong>Hak Tenaga Kerja</strong></span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-3">
                    <CheckCircle2 size={20} className="text-[#D4AF37] shrink-0" />
                    <span>Litigasi strategis untuk penegakan <strong>Hak Asasi Manusia (HAM)</strong></span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link 
                  href="/contact" 
                  className="bg-[#D4AF37] hover:bg-[#b8952b] text-[#0F172A] font-extrabold px-10 py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                >
                  Konsultasi Sekarang <ChevronRight size={20} />
                </Link>
                <Link 
                  href="/about" 
                  className="bg-transparent border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  Tentang Kami
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR SECTION */}
      <section className="bg-white py-8 border-b border-slate-200 z-20 relative shadow-sm">
        <div className="container mx-auto px-6 text-center">
          <FadeIn delay={0.1}>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Dipercaya Oleh Korporasi Terkemuka & Tersertifikasi Oleh
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl md:text-2xl font-serif font-bold text-slate-800">BumiCorp.</span>
              <span className="text-xl md:text-2xl font-sans font-black text-slate-800">AEROLINK</span>
              <span className="text-xl md:text-2xl font-mono font-bold text-slate-800">NusaBank</span>
              <span className="text-xl md:text-2xl font-serif italic font-bold text-slate-800">Gading Estate</span>
              <span className="text-xl md:text-2xl font-sans font-bold text-slate-800">TECHINDO</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. PERFORMANCE INDICATORS (Stats) */}
      <section className="bg-slate-50 py-12 relative z-10 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
              <div className="p-4">
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A]">25+</h3>
                <p className="text-slate-500 mt-2 font-medium">Tahun Pengalaman</p>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A]">1.2k+</h3>
                <p className="text-slate-500 mt-2 font-medium">Perkara Selesai</p>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A]">$50M+</h3>
                <p className="text-slate-500 mt-2 font-medium">Aset Terselamatkan</p>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A]">15</h3>
                <p className="text-slate-500 mt-2 font-medium">Pengacara Senior</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. PRACTICE AREAS OVERVIEW (Revisi menggunakan Modal/Pop-up) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">Bidang Layanan Kami</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Empat pilar praktik hukum yang menjadi fondasi pelayanan kami kepada masyarakat, didukung oleh kompetensi tim yang adaptif, inovatif, dan responsif.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn delay={index * 0.1} key={service.id}>
                {/* Menggunakan BUTTON untuk men-trigger Pop-up */}
                <button 
                  onClick={() => setSelectedService(service)}
                  className="flex flex-col text-left bg-slate-50 p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full w-full group"
                >
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0F172A] shadow-sm transition-colors">
                    <service.icon className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.shortDesc}
                  </p>
                  <span className="text-[#0F172A] font-bold inline-flex items-center group-hover:text-[#D4AF37] transition-colors mt-auto">
                    Pelajari Lebih Lanjut <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- KOMPONEN POP-UP (MODAL) --- */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0F172A]/80 backdrop-blur-md"
          >
            {/* Area klik luar untuk menutup */}
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setSelectedService(null)} 
            />

            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden relative shadow-2xl z-10"
            >
              
              {/* Header Modal */}
              <div className="bg-[#0F172A] p-8 sm:p-10 relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-[#D4AF37] rounded-full text-white backdrop-blur-md transition-colors duration-300 z-10"
                >
                  <X size={24} />
                </button>

                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                    <selectedService.icon className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              {/* Body Modal (Teks Detail) */}
              <div className="p-8 sm:p-10 overflow-y-auto bg-slate-50">
                <div className="prose prose-lg max-w-none prose-slate text-slate-700">
                  {selectedService.fullDesc.map((paragraph, idx) => (
                    <p key={idx} className="mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Tombol Aksi di dalam Modal */}
                <div className="mt-10 pt-8 border-t border-slate-200">
                  <Link 
                    href={`/contact?service=${selectedService.id}`} 
                    className="inline-flex bg-[#0F172A] hover:bg-[#D4AF37] text-white hover:text-[#0F172A] font-bold px-8 py-4 rounded-xl transition-all items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
                  >
                    Konsultasikan Masalah Ini <ChevronRight size={20} />
                  </Link>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- END MODAL --- */}

      {/* 5. WHY CHOOSE US / VALUE PROPOSITION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F172A] mb-6">
                Mengapa Memilih <br />OBH YPP AL-KAMAL?
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
               Kami tidak sekadar memberikan bantuan hukum biasa; kami hadir sebagai pendamping yang berdedikasi untuk memberikan solusi hukum terbaik bagi masyarakat dari semua kalangan.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-xl mb-2">Kapabilitas & Kredibilitas Profesional</h4>
                    <p className="text-slate-600">Tim kami memiliki kompetensi tinggi untuk memberikan solusi hukum terbaik, serta senantiasa menjaga kepercayaan masyarakat melalui kerja yang profesional dan bertanggung jawab.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-xl mb-2">Pendekatan Adaptif, Inovatif, & Responsif</h4>
                    <p className="text-slate-600">Setiap langkah pendampingan kami jalankan dengan tanggap dan penuh inovasi untuk memastikan hak-hak masyarakat terlindungi sesuai dengan prinsip "keadilan untuk semua, hak untuk setiap insan".</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-xl mb-2">Integritas & Loyalitas Tinggi</h4>
                    <p className="text-slate-600">Kami secara konsisten menjunjung tinggi kejujuran dan etika dalam setiap langkah pengabdian, serta setia memegang teguh amanah dan visi misi organisasi.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000" 
                  alt="Timbangan Keadilan Hukum"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/90 to-transparent flex items-end p-10">
                  <blockquote className="border-l-4 border-[#D4AF37] pl-6 text-white z-10">
                    <p className="font-serif text-2xl font-medium italic mb-4">"Dalam hukum, presisi bukanlah pilihan, melainkan kewajiban absolut."</p>
                    <footer className="font-bold text-[#D4AF37]">— Dr. Satya Wardhana, S.H., LL.M.</footer>
                  </blockquote>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        {/* Latar Belakang Aksen Tipis */}
        <div className="absolute -right-20 -top-20 opacity-5">
          <Scale size={400} className="text-white" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6">
              Butuh Pendampingan Hukum Segera?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
              Tim pengacara kami siap menganalisis kasus Anda dan merumuskan strategi hukum yang presisi. Jadwalkan sesi konsultasi eksklusif dengan mitra kami.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex bg-[#D4AF37] hover:bg-white text-[#0F172A] font-extrabold px-12 py-5 rounded-md transition-all items-center justify-center gap-2 shadow-xl hover:scale-105"
            >
              Hubungi Pengacara Kami
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}