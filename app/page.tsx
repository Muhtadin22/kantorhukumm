import Image from "next/image";
import Link from "next/link";
import { Scale, Shield, Briefcase, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn"; 

export default function Home() {
  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION (Revisi: Hero Image/Video & CTA yang Dominan) */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
        {/* Hero Background Image */}
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Suasana Kantor Firma Hukum Profesional"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay untuk menjamin keterbacaan teks */}
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
              
              {/* Copywriting Scannable */}
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

              {/* Hierarki Visual CTA yang Dipertegas */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                {/* Primary CTA: Dominan dengan glow shadow */}
                <Link 
                  href="/contact" 
                  className="bg-[#D4AF37] hover:bg-[#b8952b] text-[#0F172A] font-extrabold px-10 py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                >
                  Konsultasi Sekarang <ChevronRight size={20} />
                </Link>
                {/* Secondary CTA: Outline tipis */}
                <Link 
                  href="/practice-areas" 
                  className="bg-transparent border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  Lihat Area Praktik
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR SECTION (Revisi: Dipindah tepat di bawah Hero) */}
      <section className="bg-white py-8 border-b border-slate-200 z-20 relative shadow-sm">
        <div className="container mx-auto px-6 text-center">
          <FadeIn delay={0.1}>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Dipercaya Oleh Korporasi Terkemuka & Tersertifikasi Oleh
            </p>
            {/* Logo Klien/Mitra */}
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

      {/* 4. PRACTICE AREAS OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">Bidang Layanan Kami</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Empat pilar praktik hukum yang menjadi fondasi pelayanan kami kepada masyarakat, didukung oleh kompetensi tim yang adaptif, inovatif, dan responsif untuk semua kalangan.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Link href="/practice-areas/korporasi" className="block bg-slate-50 p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0F172A] shadow-sm transition-colors">
                  <Briefcase className="text-[#D4AF37] w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#D4AF37] transition-colors">Pembelaan Pidana (Criminal Defense)</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                 Pendampingan hukum menyeluruh bagi tersangka dan terdakwa dalam proses peradilan pidana, memastikan hak-hak konstitusional terlindungi di setiap tahap persidangan.
                </p>
                <span className="text-[#0F172A] font-bold inline-flex items-center group-hover:text-[#D4AF37] transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/practice-areas/litigasi" className="block bg-slate-50 p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0F172A] shadow-sm transition-colors">
                  <Scale className="text-[#D4AF37] w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#D4AF37] transition-colors">Hukum Keluarga (Family Law)</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Mediasi dan advokasi dalam sengketa perceraian, hak asuh anak, pembagian harta gono-gini, serta perlindungan terhadap kekerasan dalam rumah tangga.
                </p>
                <span className="text-[#0F172A] font-bold inline-flex items-center group-hover:text-[#D4AF37] transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link href="/practice-areas/hki" className="block bg-slate-50 p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0F172A] shadow-sm transition-colors">
                  <Shield className="text-[#D4AF37] w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#D4AF37] transition-colors">Hak Tenaga Kerja (Labor Rights)</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Perlindungan hak-hak buruh dan pekerja dari pemutusan hubungan kerja sepihak, eksploitasi, serta pelanggaran kontrak dan upah minimum.
                </p>
                <span className="text-[#0F172A] font-bold inline-flex items-center group-hover:text-[#D4AF37] transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeIn>
             <FadeIn delay={0.3}>
              <Link href="/practice-areas/hki" className="block bg-slate-50 p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0F172A] shadow-sm transition-colors">
                  <Shield className="text-[#D4AF37] w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#D4AF37] transition-colors">Hak Asasi Manusia (Human Rights)</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Advokasi dan litigasi strategis untuk kasus-kasus pelanggaran hak asasi manusia, diskriminasi, serta kebebasan berekspresi dan berkeyakinan.
                </p>
                <span className="text-[#0F172A] font-bold inline-flex items-center group-hover:text-[#D4AF37] transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US / VALUE PROPOSITION */}
      <section className="py-24 bg-slate-50">
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
                    <p className="text-slate-600">Tim kami memiliki kompetensi tinggi untuk memberikan solusi hukum terbaik, serta senantiasa menjaga kepercayaan masyarakat melalui kerja yang profesional dan bertanggung jawab..</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-xl mb-2">Pendekatan Adaptif, Inovatif, & Responsif</h4>
                    <p className="text-slate-600">Setiap langkah pendampingan kami jalankan dengan tanggap dan penuh inovasi untuk memastikan hak-hak masyarakat terlindungi sesuai dengan prinsip "keadilan untuk semua, hak untuk setiap insan"..</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-xl mb-2">Integritas & Loyalitas Tinggi</h4>
                    <p className="text-slate-600">Kami secara konsisten menjunjung tinggi kejujuran dan etika dalam setiap langkah pengabdian, serta setia memegang teguh amanah dan visi misi organisasi..</p>
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