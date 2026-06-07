import Image from "next/image";
import Link from "next/link";
import { Scale, Shield, Briefcase, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn"; // Pastikan path ini benar

export default function Home() {
  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Placeholder gambar hero - gunakan gambar gedung Jakarta/SCBD asli */}
          <div className="w-full h-full bg-slate-800" />
          {/* Catatan: Menggunakan syntax Tailwind v4 yang telah diperbarui */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 pt-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <p className="text-slate-300 text-sm font-medium">Firma Hukum Korporasi & Litigasi Terkemuka</p>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6">
                Representasi Hukum yang <span className="text-[#D4AF37] italic">Otoritatif</span> & Presisi.
              </h1>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Satya & Partners memberikan solusi hukum strategis dengan standar etika dan kedalaman akademis tertinggi untuk sengketa komersial, litigasi kompleks, dan kepatuhan perusahaan di Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact" 
                  className="bg-[#D4AF37] hover:bg-[#b8952b] text-[#0F172A] font-bold px-8 py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
                >
                  Konsultasi Hukum <ChevronRight size={20} />
                </Link>
                <Link 
                  href="/practice-areas" 
                  className="bg-transparent border border-slate-500 hover:border-slate-300 hover:bg-slate-800/50 text-white font-semibold px-8 py-4 rounded-md transition-all flex items-center justify-center"
                >
                  Lihat Area Praktik
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS SECTION */}
      <section className="bg-white py-16 border-b border-slate-200 relative -mt-8 z-20 mx-4 md:mx-12 rounded-xl shadow-xl">
        <div className="container mx-auto px-6">
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
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

      {/* 3. PRACTICE AREAS OVERVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">Ekspertise Kami</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Memberikan representasi hukum yang komprehensif, didukung oleh riset akademis yang mendalam dan pengalaman praksis di persidangan.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 h-full group">
                <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0F172A] transition-colors">
                  <Briefcase className="text-[#D4AF37] w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4">Hukum Korporasi & Komersial</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Pendampingan hukum untuk restrukturisasi perusahaan, merger & akuisisi, kepatuhan regulasi, serta penyusunan kontrak komersial yang memitigasi risiko bisnis secara efektif.
                </p>
                <Link href="/practice-areas" className="text-[#0F172A] font-bold inline-flex items-center group-hover:text-[#D4AF37] transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 h-full group">
                <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0F172A] transition-colors">
                  <Scale className="text-[#D4AF37] w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4">Litigasi & Resolusi Sengketa</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Representasi agresif namun taktis di peradilan perdata, pidana khusus, pengadilan niaga, dan forum arbitrase nasional maupun internasional oleh litigator tangguh.
                </p>
                <Link href="/practice-areas" className="text-[#0F172A] font-bold inline-flex items-center group-hover:text-[#D4AF37] transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 h-full group">
                <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0F172A] transition-colors">
                  <Shield className="text-[#D4AF37] w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4">Kekayaan Intelektual (HKI)</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Perlindungan komprehensif untuk paten, merek dagang, desain industri, dan hak cipta guna mengamankan aset tidak berwujud perusahaan Anda dari ancaman plagiarisme.
                </p>
                <Link href="/practice-areas" className="text-[#0F172A] font-bold inline-flex items-center group-hover:text-[#D4AF37] transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US / VALUE PROPOSITION */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F172A] mb-6">
                Mengapa Memilih <br />Satya & Partners?
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Kami tidak sekadar memberikan nasihat hukum; kami memberikan panduan strategis yang didesain secara spesifik untuk melindungi kepentingan klien.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-xl mb-2">Kedalaman Pengetahuan Akademis</h4>
                    <p className="text-slate-600">Sebagian besar mitra kami bergelar doktor hukum dan aktif sebagai akademisi, memastikan argumen hukum selalu didasarkan pada doktrin dan preseden terbaru.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-xl mb-2">Pendekatan Berorientasi Hasil</h4>
                    <p className="text-slate-600">Setiap langkah litigasi maupun perancangan kontrak dieksekusi dengan satu tujuan: memenangkan dan mengamankan posisi klien secara sah dan meyakinkan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-xl mb-2">Integritas Tak Tertandingi</h4>
                    <p className="text-slate-600">Kami mematuhi kode etik profesi yang ketat, menjamin kerahasiaan penuh, komunikasi yang transparan, dan menghindari konflik kepentingan.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                {/* Ganti dengan gambar kantor/tim pengacara */}
                <div className="absolute inset-0 bg-slate-800" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/80 to-transparent flex items-end p-10">
                  <blockquote className="border-l-4 border-[#D4AF37] pl-6 text-white">
                    <p className="font-serif text-2xl font-medium italic mb-4">"Dalam hukum, presisi bukanlah pilihan, melainkan kewajiban absolut."</p>
                    <footer className="font-bold text-[#D4AF37]">— Dr. Satya Wardhana, S.H., LL.M.</footer>
                  </blockquote>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-[#0F172A]">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6">
              Butuh Pendampingan Hukum Segera?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
              Tim pengacara kami siap menganalisis kasus Anda dan merumuskan strategi hukum yang presisi. Jadwalkan sesi konsultasi eksklusif dengan mitra kami.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex bg-[#D4AF37] hover:bg-white text-[#0F172A] font-bold px-10 py-4 rounded-md transition-all items-center justify-center gap-2 shadow-lg"
            >
              Hubungi Kami Sekarang
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}