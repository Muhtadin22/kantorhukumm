import FadeIn from "@/components/motion/FadeIn";
import { ShieldCheck, BookOpen, Scale, Target, Users, Globe, ChevronDown } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: Target, title: "Ketajaman Strategis", desc: "Menganalisis setiap sudut regulasi untuk menemukan celah dan peluang, mengubah hambatan regulasi menjadi keuntungan kompetitif bagi klien." },
    { icon: BookOpen, title: "Rigoritas Akademis", desc: "Pendekatan berbasis doktrin dan preseden terbaru. Setiap penyusunan argumen hukum kami didasarkan pada riset yang mendalam dan tak terbantahkan." },
    { icon: ShieldCheck, title: "Integritas Etik", desc: "Kerahasiaan absolut dan kepatuhan penuh terhadap standar etika profesi advokat. Kepercayaan klien adalah aset tertinggi kami." },
    { icon: Users, title: "Kemitraan Jangka Panjang", desc: "Kami tidak sekadar bereaksi terhadap masalah. Kami berperan sebagai penasihat strategis yang tumbuh bersama ekspansi bisnis klien." }
  ];

  const milestones = [
    { year: "1999", title: "Pendirian Firma", desc: "Didirikan di tengah krisis moneter untuk memberikan restrukturisasi hukum bagi perusahaan-perusahaan nasional." },
    { year: "2008", title: "Ekspansi Internasional", desc: "Membuka afiliasi pertama dengan firma hukum di Singapura untuk memfasilitasi transaksi lintas negara (Cross-border M&A)." },
    { year: "2015", title: "Top 10 Litigation Firm", desc: "Diakui oleh Legal500 dan Chambers Asia-Pacific sebagai salah satu firma litigasi komersial terbaik di Indonesia." },
    { year: "2026", title: "Era Digital & Inovasi", desc: "Mempelopori divisi khusus untuk hukum teknologi, privasi data (PDP), dan keamanan siber korporasi." },
  ];

  return (
    <div className="w-full bg-white min-h-screen selection:bg-[#D4AF37] selection:text-[#0F172A]">
      
      {/* 1. HERO SECTION (Immersive & Minimalist) */}
      <section className="relative w-full h-[90vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664177922-928394b2951b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A]" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center mt-20">
          <FadeIn>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Sejarah & Visi</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 tracking-tight leading-[1.1]">
              Keadilan Melalui <br/>
              <span className="italic font-light text-slate-300">Presisi & Keunggulan.</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Merevolusi lanskap pelayanan hukum korporasi di Indonesia dengan standar global sejak 1999.
            </p>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} strokeWidth={1} />
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
                Satya & Partners lahir dari keyakinan bahwa layanan hukum tidak seharusnya hanya bersifat reaktif. 
              </p>
              <p className="mb-8">
                Kami memposisikan diri sebagai mitra strategis yang mengantisipasi risiko sebelum menjadi krisis, dan merancang solusi sebelum sengketa terjadi. Pemahaman mendalam kami terhadap dinamika ekonomi makro dan mikrokosmos regulasi Indonesia memungkinkan kami memberikan nasihat yang tidak hanya sah secara hukum, tetapi juga viabel secara komersial.
              </p>
              <p>
                Dengan didukung oleh tim litigator tangguh dan konsultan korporasi elit, kami secara konsisten mewakili entitas multinasional, Badan Usaha Milik Negara (BUMN), hingga konglomerasi swasta terkemuka dalam transaksi paling kompleks dan sengketa dengan risiko tertinggi di berbagai yurisdiksi.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-200">
                <div>
                  <h4 className="text-4xl font-serif font-bold text-[#0F172A] mb-2">Top 10</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Litigation Firm</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif font-bold text-[#0F172A] mb-2">150+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Korporasi Global</p>
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

      {/* 4. HISTORY / MILESTONES (Vertical Timeline) */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl font-bold text-[#0F172A] mb-4">Jejak Langkah Kami</h2>
              <p className="text-slate-500">Transformasi dari firma butik menjadi raksasa hukum korporasi.</p>
            </div>
          </FadeIn>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-1/2 md:translate-x-[50%] space-y-16">
            {milestones.map((item, i) => (
              <FadeIn delay={0.1 * i} key={i}>
                <div className="relative pl-8 md:pl-0">
                  {/* Titik Timeline */}
                  <div className="absolute w-4 h-4 bg-[#D4AF37] rounded-full left-[-9px] md:left-[-8px] top-1 shadow-[0_0_0_4px_rgba(212,175,55,0.2)]"></div>
                  
                  {/* Konten Timeline */}
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right md:-ml-[50%]" : "md:pl-16 md:ml-0"}`}>
                    <span className="text-[#D4AF37] font-bold text-xl font-serif block mb-2">{item.year}</span>
                    <h4 className="text-2xl font-bold text-[#0F172A] mb-3">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (Interactive Bento Grid) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Nilai Fundamental</h2>
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

      {/* 6. GLOBAL REACH (Minimalist Banner) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <FadeIn>
            <Globe className="w-12 h-12 mx-auto text-slate-400 mb-6" />
            <h3 className="font-serif text-2xl text-[#0F172A] font-bold mb-4">Jaringan Global & Afiliasi</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Melalui keanggotaan aktif dalam jaringan hukum internasional terkemuka, kami memiliki kapasitas penuh untuk mendampingi transaksi bisnis lintas batas (*cross-border*) klien kami di kawasan Asia Tenggara, Eropa, dan Amerika Utara.
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}