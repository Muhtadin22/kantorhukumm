"use client";

import FadeIn from "@/components/motion/FadeIn";
import { CheckCircle2, ArrowRight, ChevronDown, Scale, Briefcase, Shield, Users, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PracticeAreasPage() {
  const [activeSection, setActiveSection] = useState("corporate");

  // Efek untuk mendeteksi scroll dan mengaktifkan menu sidebar secara dinamis
  useEffect(() => {
    const handleScroll = () => {
      const sections = practices.map(p => document.getElementById(p.id));
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const practices = [
    {
      id: "corporate",
      num: "01",
      icon: Briefcase,
      title: "Hukum Korporasi & Komersial",
      desc: "Kami merancang kerangka hukum yang memitigasi risiko tanpa menghambat laju komersial. Pendampingan menyeluruh untuk aksi korporasi strategis perusahaan lokal maupun multinasional.",
      subs: ["Merger & Akuisisi (M&A) Lintas Batas", "Restrukturisasi & Likuidasi Perusahaan", "Tata Kelola Perusahaan (GCG)", "Joint Ventures & Penanaman Modal Asing"],
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      head: {
        name: "Andira Kirana, S.H., M.H.",
        role: "Head of Corporate Practice",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
      }
    },
    {
      id: "litigation",
      num: "02",
      icon: Scale,
      title: "Litigasi & Resolusi Sengketa",
      desc: "Representasi agresif namun taktis. Litigator kami dikenal atas argumen doktrinal yang tajam dan penguasaan presisi prosedural di semua tingkat peradilan dan forum arbitrase.",
      subs: ["Sengketa Komersial & Pemegang Saham", "Arbitrase Internasional (SIAC, ICC, BANI)", "Hukum Kepailitan & PKPU", "Litigasi Pidana Khusus (Tindak Pidana Korupsi)"],
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
      head: {
        name: "Dr. Satya Wardhana, S.H.",
        role: "Head of Litigation & Dispute Resolution",
        img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200"
      }
    },
    {
      id: "ip",
      num: "03",
      icon: Shield,
      title: "Kekayaan Intelektual & Teknologi",
      desc: "Melindungi keunggulan kompetitif Anda di era ekonomi digital. Pengamanan aset tidak berwujud dari pendaftaran hingga penindakan hukum terhadap pelanggaran di pengadilan niaga.",
      subs: ["Pendaftaran Paten, Merek & Hak Cipta Global", "Sengketa Pelanggaran HKI (Litigasi Niaga)", "Lisensi, Waralaba & Alih Teknologi", "Audit Kepatuhan Pelindungan Data Pribadi (PDP)"],
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      head: {
        name: "Bimo Wicaksono, S.H.",
        role: "Partner, IP & Technology",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
      }
    },
    {
      id: "employment",
      num: "04",
      icon: Users,
      title: "Ketenagakerjaan & Industrial",
      desc: "Membantu korporasi menyeimbangkan efisiensi bisnis dengan kepatuhan mutlak terhadap undang-undang ketenagakerjaan, meredam risiko perselisihan industrial secara sistematis.",
      subs: ["Penyusunan Peraturan Perusahaan (PP) & PKB", "Pendampingan PHK Massal & Restrukturisasi SDM", "Sengketa di Pengadilan Hubungan Industrial (PHI)", "Kepatuhan Penggunaan Tenaga Kerja Asing (TKA)"],
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
      head: {
        name: "Clara Monica, S.H., LL.M.",
        role: "Senior Associate, Employment",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
      }
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen selection:bg-[#D4AF37] selection:text-[#0F172A] pb-32">
      
      {/* 1. HERO SECTION (Sama persis dengan About Page) */}
      <section className="relative w-full h-[90vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664177922-928394b2951b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A]" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center mt-20">
          <FadeIn>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Layanan Strategis</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 tracking-tight leading-[1.1]">
              Area Ekspertise & <br/>
              <span className="italic font-light text-slate-300">Praktik Hukum.</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Spektrum layanan komprehensif yang dirancang untuk menjawab kompleksitas tantangan bisnis modern melalui kedalaman analitis dan efektivitas taktis.
            </p>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </section>

      {/* 2. SPLIT LAYOUT (Sticky Navigation + Scrolling Content) */}
      <section className="container mx-auto px-6 max-w-7xl pt-32">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* SIDEBAR NAVIGATION (Sticky) */}
          <aside className="hidden lg:block lg:w-1/4 relative">
            <div className="sticky top-32">
              <h4 className="font-serif text-xl font-bold text-[#0F172A] mb-8 border-b border-slate-200 pb-4">Indeks Layanan</h4>
              <nav className="flex flex-col space-y-4">
                {practices.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-left text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
                      activeSection === item.id 
                      ? "text-[#D4AF37] translate-x-2" 
                      : "text-slate-400 hover:text-[#0F172A] hover:translate-x-1"
                    }`}
                  >
                    {item.num} — {item.title}
                  </button>
                ))}
              </nav>

              {/* Quick Contact Box in Sidebar */}
              <div className="mt-16 bg-[#0F172A] rounded-xl p-8 text-white shadow-xl">
                <h5 className="font-bold mb-4">Butuh advis segera?</h5>
                <p className="text-sm text-slate-400 mb-6">Hubungi saluran khusus klien korporat kami.</p>
                <Link href="tel:+62215550192" className="flex items-center gap-3 text-[#D4AF37] hover:text-white transition-colors mb-3">
                  <Phone size={18} /> <span className="font-bold">+62 21 555 0192</span>
                </Link>
                <Link href="mailto:legal@satyapartners.co.id" className="flex items-center gap-3 text-[#D4AF37] hover:text-white transition-colors">
                  <Mail size={18} /> <span className="text-sm">Kirim Email</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="w-full lg:w-3/4 space-y-32">
            {practices.map((item, i) => (
              <div id={item.id} key={item.id} className="scroll-mt-32">
                <FadeIn delay={0.1}>
                  {/* Header Area */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-px bg-[#D4AF37]"></div>
                    <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Praktik {item.num}</span>
                  </div>
                  
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-8 leading-tight">
                    {item.title}
                  </h2>
                  
                  {/* Hero Image for this Section */}
                  <div className="w-full h-[400px] rounded-3xl overflow-hidden relative mb-10 shadow-lg">
                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0F172A]/20" />
                  </div>

                  <p className="text-slate-600 text-xl leading-relaxed mb-12">
                    {item.desc}
                  </p>

                  {/* Sub-Services Grid (Bento Style) */}
                  <h4 className="font-bold text-[#0F172A] mb-6 uppercase tracking-wider text-sm border-b border-slate-200 pb-2">Kapasitas Layanan Spesifik</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                    {item.subs.map((sub, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#D4AF37]/50 hover:shadow-md transition-all flex items-start gap-4 group">
                        <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="text-[#0F172A] font-medium leading-relaxed">{sub}</span>
                      </div>
                    ))}
                  </div>

                  {/* KEY CONTACT / PARTNER IN CHARGE CARD */}
                  <div className="bg-slate-100 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-slate-200">
                    <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                      <img src={item.head.img} alt={item.head.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1 block">Key Contact</span>
                      <h4 className="font-serif text-2xl font-bold text-[#0F172A] mb-1">{item.head.name}</h4>
                      <p className="text-[#D4AF37] font-medium text-sm mb-4">{item.head.role}</p>
                      <Link href="/contact" className="inline-flex items-center text-sm font-bold text-[#0F172A] hover:text-[#D4AF37] transition-colors">
                        Jadwalkan Sesi Konsultasi <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>

                </FadeIn>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}