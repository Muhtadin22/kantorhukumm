"use client";

import FadeIn from "@/components/motion/FadeIn";
import { ShieldCheck, BookOpen, Scale, Target, Users, ChevronDown } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: Target, title: "PEMBELAAN PIDANA (Criminal Defense)", desc: "Pendampingan hukum menyeluruh bagi tersangka dan terdakwa dalam proses peradilan pidana, memastikan hak-hak konstitusional terlindungi di setiap tahap persidangan." },
    { icon: BookOpen, title: "HUKUM KELUARGA (Family Law)", desc: "Mediasi dan advokasi dalam sengketa perceraian, hak asuh anak, pembagian harta gono-gini, serta perlindungan terhadap kekerasan dalam rumah tangga." },
    { icon: ShieldCheck, title: "HAK TENAGA KERJA (Labor Rights)", desc: "Perlindungan hak-hak buruh dan pekerja dari pemutusan hubungan kerja sepihak, eksploitasi, serta pelanggaran kontrak dan upah minimum." },
    { icon: Users, title: "HAK ASASI MANUSIA (Human Rights)", desc: " Advokasi dan litigasi strategis untuk kasus-kasus pelanggaran hak asasi manusia, diskriminasi, serta kebebasan berekspresi dan berkeyakinan." }
  ];

  return (
    <div className="w-full bg-white min-h-screen selection:bg-[#D4AF37] selection:text-[#0F172A]">
      
      {/* 1. HERO SECTION (Tampilan Lebih Mewah dan Enak Dilihat) */}
      <section className="relative w-full h-[90vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        {/* Background dengan efek parallax ringan dan overlay gradien yang lebih dalam */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664177922-928394b2951b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed bg-center opacity-[0.15] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-[#0F172A]/90 to-[#0F172A]" />
        
        {/* Ornamen Cahaya di Belakang Teks */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center mt-20">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-8 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">Profil Organisasi Bantuan Hukum</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 font-bold mb-6 tracking-tight leading-[1.15]">
              ADAPTIF <span className="text-[#D4AF37] opacity-50">•</span> INOVATIF <span className="text-[#D4AF37] opacity-50">•</span> RESPONSIF <br/>
              <span className="italic font-light text-[#D4AF37] text-4xl md:text-5xl lg:text-6xl mt-4 block">
                Untuk Semua Kalangan.
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"></div>
            
            <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Kami hadir sebagai benteng keadilan, membantu masyarakat yang sedang dalam masalah hukum dan permasalahan lain terkait hukum tanpa memandang latar belakang.
            </p>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-[#D4AF37] transition-colors cursor-pointer">
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </section>

      {/* 2. OVERVIEW (Modern Sticky Scroll Layout) */}
      <section className="py-32 container mx-auto px-6 max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Kiri: Sticky Title */}
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

          {/* Kanan: Scrolling Content */}
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

              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-200">
                <div>
                  <h4 className="text-4xl font-serif font-bold text-[#0F172A] mb-2">4 Pilar</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Praktik Hukum Utama</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif font-bold text-[#0F172A] mb-2">100%</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Dedikasi Untuk Semua Kalangan</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 3. STATEMENT QUOTE (Oversized & Bold) */}
      <section className="bg-[#0F172A] py-32 relative overflow-hidden">
        {/* Dekorasi Kutipan Raksasa di Background */}
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

      {/* 5. CORE VALUES (Interactive Bento Grid) */}
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

    </div>
  );
}