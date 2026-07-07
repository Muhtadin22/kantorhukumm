"use client";

import { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, BookOpen, Scale, Target, Users, ChevronDown, 
  MessageSquare, Search, FileSignature, Gavel, Plus, Minus 
} from "lucide-react";

export default function AboutPage() {
  // State untuk mengontrol Accordion FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const values = [
    { icon: Target, title: "PEMBELAAN PIDANA (Criminal Defense)", desc: "Pendampingan hukum menyeluruh bagi tersangka dan terdakwa dalam proses peradilan pidana, memastikan hak-hak konstitusional terlindungi di setiap tahap persidangan." },
    { icon: BookOpen, title: "HUKUM KELUARGA (Family Law)", desc: "Mediasi dan advokasi dalam sengketa perceraian, hak asuh anak, pembagian harta gono-gini, serta perlindungan terhadap kekerasan dalam rumah tangga." },
    { icon: ShieldCheck, title: "HAK TENAGA KERJA (Labor Rights)", desc: "Perlindungan hak-hak buruh dan pekerja dari pemutusan hubungan kerja sepihak, eksploitasi, serta pelanggaran kontrak dan upah minimum." },
    { icon: Users, title: "HAK ASASI MANUSIA (Human Rights)", desc: " Advokasi dan litigasi strategis untuk kasus-kasus pelanggaran hak asasi manusia, diskriminasi, serta kebebasan berekspresi dan berkeyakinan." }
  ];

  // Data Alur Kerja
  const workflow = [
    { icon: MessageSquare, title: "Konsultasi Awal", desc: "Sesi tatap muka atau virtual untuk memetakan duduk perkara dan legal standing Anda secara komprehensif." },
    { icon: Search, title: "Analisis & Strategi", desc: "Tim ahli kami melakukan telaah dokumen dan merumuskan taktik hukum yang paling efektif dan presisi." },
    { icon: FileSignature, title: "Tanda Tangan Kuasa", desc: "Pengesahan perikatan hukum melalui Surat Kuasa Khusus sebagai landasan legalitas pendampingan kami." },
    { icon: Gavel, title: "Eksekusi Pendampingan", desc: "Implementasi strategi litigasi maupun non-litigasi secara all-out demi melindungi hak dan kepentingan Anda." }
  ];

  // Data FAQ
  const faqs = [
    {
      q: "Apakah data dan cerita saya dijamin kerahasiaannya?",
      a: "Tentu. Segala informasi, dokumen, dan keterangan yang Anda sampaikan mutlak dilindungi oleh prinsip Hak Ingkar dan Kerahasiaan Advokat (Attorney-Client Privilege) sesuai dengan Undang-Undang Advokat. Data Anda dijamin 100% aman dan tidak akan bocor ke pihak manapun."
    },
    {
      q: "Dokumen apa saja yang harus disiapkan saat pertemuan pertama?",
      a: "Untuk mengoptimalkan waktu konsultasi, kami menyarankan Anda membawa identitas diri (KTP/Paspor), kronologis kejadian tertulis (jika ada), serta dokumen pendukung terkait (seperti surat perjanjian, bukti transfer, sertifikat, atau surat somasi yang diterima)."
    },
    {
      q: "Apakah melayani klien dari luar wilayah Jakarta?",
      a: "Ya, kami menangani perkara dari seluruh yurisdiksi di Indonesia. Untuk efisiensi, kami menyediakan fasilitas konsultasi virtual (via Zoom/Google Meet) bagi klien luar kota, sebelum memutuskan pertemuan fisik atau pendampingan langsung di lokasi perkara."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-white min-h-screen selection:bg-[#D4AF37] selection:text-[#0F172A]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664177922-928394b2951b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A]" />

        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center mt-20">
          <FadeIn>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
              Profil Organisasi Bantuan Hukum
            </span>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 tracking-tight leading-[1.1]">
              Benteng Keadilan <br className="hidden md:block"/>
              <span className="italic font-light text-slate-300">Untuk Semua Kalangan.</span>
            </h1>

            <div className="flex flex-row items-center justify-center gap-3 md:gap-6 mb-8 text-[#D4AF37] font-bold tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase">
              <span>Adaptif</span>
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4AF37]"></span>
              <span>Inovatif</span>
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4AF37]"></span>
              <span>Responsif</span>
            </div>
            
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Kami hadir sebagai benteng keadilan, membantu masyarakat yang sedang dalam masalah hukum dan permasalahan lain terkait hukum tanpa memandang latar belakang.
            </p>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="py-32 container mx-auto px-6 max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <FadeIn>
                <div className="w-12 h-1 bg-[#D4AF37] mb-6"></div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
                  Mendefinisikan Ulang Standar Advokasi.
                </h2>
              </FadeIn>
            </div>
          </div>
          <div className="lg:w-2/3 prose prose-lg md:prose-xl text-slate-600">
            <FadeIn delay={0.2}>
              <p className="lead text-2xl text-[#0F172A] font-medium mb-8">
                OBH YPP AL-KAMAL lahir dari keyakinan mendasar bahwa keadilan bukanlah privilese, melainkan hak mutlak bagi setiap insan.
              </p>
              <p className="mb-8">
                Kami memposisikan diri bukan sekadar sebagai pemberi bantuan hukum, melainkan sebagai pendamping dan pelindung strategis yang memastikan masyarakat dari semua kalangan tidak pernah berjalan sendirian dalam menghadapi kerumitan masalah hukum. Pendekatan kami yang adaptif, inovatif, dan responsif memungkinkan kami memberikan solusi hukum terbaik yang bermartabat dan tepat sasaran.
              </p>
              <p>
                Berlandaskan pada pilar integritas, kapabilitas, loyalitas, dan kredibilitas, setiap langkah pengabdian kami berpusat pada kerja yang profesional dan bertanggung jawab. Didukung oleh tim advokat dan pembela umum yang berdedikasi tinggi, kami secara konsisten memberikan pendampingan menyeluruh dan perlindungan hak konstitusional masyarakat melalui empat fondasi layanan utama: Pembelaan Pidana, Hukum Keluarga, Hak Tenaga Kerja, dan Hak Asasi Manusia.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. STATEMENT QUOTE */}
      <section className="bg-[#0F172A] py-32 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 text-[300px] text-white/5 font-serif leading-none select-none">"</div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <FadeIn>
            <Scale className="text-[#D4AF37] w-16 h-16 mx-auto mb-10 opacity-80" />
            <blockquote className="font-serif text-3xl md:text-5xl text-white leading-tight mb-12 italic">
              "Kemenangan di ruang sidang dimulai jauh sebelum palu diketuk. Ia dibangun di atas fondasi riset yang tak terbantahkan dan integritas yang tak tergoyahkan."
            </blockquote>
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-px bg-[#D4AF37] mb-6"></div>
              <h4 className="font-bold text-xl text-white tracking-wide uppercase">Ahmad Abbas, S.H., LL.M.</h4>
              <p className="text-[#D4AF37] mt-2 font-medium tracking-widest text-sm uppercase">Founder & Managing Partner</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. ALUR KERJA KAMI (New Feature) */}
      <section className="py-32 bg-white relative border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                Transparansi Proses
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                Alur Kerja Kami
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Kami merancang proses pendampingan yang jelas dan terstruktur agar Anda merasa aman dan memegang kendali atas setiap tahap penyelesaian perkara.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, i) => (
              <FadeIn delay={0.1 * i} key={i}>
                <div className="relative group p-8 rounded-3xl bg-slate-50 hover:bg-[#0F172A] transition-colors duration-500 h-full border border-slate-100 hover:border-[#0F172A]">
                  <div className="absolute top-6 right-6 text-6xl font-black text-slate-200 group-hover:text-white/5 transition-colors duration-500 select-none">
                    0{i + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#1E293B] transition-colors duration-500 relative z-10">
                    <step.icon className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-4 group-hover:text-white transition-colors duration-500 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-500 relative z-10">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (Bidang Pelayanan) */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Bidang Pelayanan Kami</h2>
                <div className="w-16 h-1 bg-[#D4AF37]"></div>
              </div>
              <p className="text-slate-500 max-w-md md:text-right">
                Empat pilar yang mendasari setiap keputusan, analisis, dan tindakan kami dalam mewakili klien.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {values.map((val, i) => (
              <FadeIn delay={0.1 * i} key={i}>
                <div className="bg-white p-12 h-full group hover:bg-[#0F172A] transition-colors duration-500 cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-[#1E293B] transition-colors duration-500">
                    <val.icon className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-white transition-colors duration-500">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-400 transition-colors duration-500">
                    {val.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (New Feature) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                Pertanyaan Umum
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-slate-500 text-lg">
                Informasi yang sering ditanyakan calon klien sebelum memulai konsultasi hukum.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <FadeIn delay={0.1 * index} key={index}>
                  <div 
                    className={`border rounded-2xl transition-all duration-300 ${
                      isOpen ? "border-[#D4AF37] bg-white shadow-lg shadow-[#D4AF37]/5" : "border-slate-200 bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-6 md:px-8 flex justify-between items-center focus:outline-none"
                    >
                      <h4 className={`font-serif text-lg md:text-xl font-bold pr-4 transition-colors ${isOpen ? "text-[#0F172A]" : "text-slate-700"}`}>
                        {faq.q}
                      </h4>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#0F172A] text-white" : "bg-slate-200 text-slate-500"}`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 md:px-8 md:pb-8 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}