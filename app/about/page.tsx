import FadeIn from "@/components/motion/FadeIn";
import Image from "next/image";
import { ShieldCheck, BookOpen, Scale, Award, Target, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: Target, title: "Ketajaman Strategis", desc: "Menganalisis setiap sudut regulasi untuk menemukan celah dan peluang bagi klien." },
    { icon: BookOpen, title: "Rigoritas Akademis", desc: "Pendekatan berbasis doktrin dan preseden terbaru dalam setiap penyusunan argumen hukum." },
    { icon: ShieldCheck, title: "Integritas Etik", desc: "Kerahasiaan absolut dan kepatuhan penuh terhadap standar etika profesi advokat." },
    { icon: Users, title: "Kemitraan Jangka Panjang", desc: "Berperan sebagai penasihat strategis yang tumbuh bersama bisnis klien." }
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0F172A] pt-32 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-5" />
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-6 tracking-tight">Keadilan Melalui <br/><span className="text-[#D4AF37] italic">Presisi & Keunggulan</span></h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg px-6 leading-relaxed">
            Sejak didirikan, Satya & Partners telah merevolusi lanskap pelayanan hukum korporasi di Indonesia dengan menggabungkan ketelitian analitis dan taktik litigasi yang progresif.
          </p>
        </FadeIn>
      </section>

      {/* Firm Overview & Quote */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-slate-100 rounded-full -z-10" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">Mendefinisikan Ulang Standar Advokasi.</h2>
              <div className="prose prose-lg text-slate-600 max-w-none">
                <p className="mb-4">
                  Satya & Partners lahir dari keyakinan bahwa layanan hukum tidak seharusnya hanya bersifat reaktif. Kami memposisikan diri sebagai mitra strategis yang mengantisipasi risiko sebelum menjadi krisis, dan merancang solusi sebelum sengketa terjadi.
                </p>
                <p>
                  Dengan pemahaman mendalam mengenai hukum positif Indonesia dan dinamika bisnis global, kami mewakili perusahaan multinasional, BUMN, hingga konglomerasi swasta dalam transaksi paling kompleks dan sengketa paling berisiko tinggi.
                </p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 relative">
              <Award className="text-[#D4AF37] w-12 h-12 mb-6 opacity-80" />
              <blockquote className="font-serif text-2xl text-[#0F172A] leading-snug italic mb-6">
                "Kemenangan di ruang sidang dimulai jauh sebelum palu diketuk. Ia dibangun di atas fondasi riset yang tak terbantahkan dan integritas yang tak tergoyahkan."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full" /> {/* Placeholder Image */}
                <div>
                  <h4 className="font-bold text-[#0F172A]">Dr. Satya Wardhana, S.H., LL.M.</h4>
                  <p className="text-sm text-slate-500">Managing Partner</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Nilai-Nilai Fundamental Kami</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <FadeIn delay={0.1 * i} key={i}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#D4AF37]/50 transition-colors h-full">
                  <val.icon className="text-[#D4AF37] w-10 h-10 mb-6" />
                  <h3 className="font-bold text-[#0F172A] text-xl mb-3">{val.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}