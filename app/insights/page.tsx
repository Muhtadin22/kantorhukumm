import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";

export default function InsightsPage() {
  const articles = [
    { title: "Kewajiban Lapor Pemilik Manfaat (Beneficial Ownership) Bagi Korporasi", date: "24 Mei 2026", cat: "Kepatuhan" },
    { title: "Perlindungan Hukum terhadap Pemegang Saham Minoritas dalam M&A", date: "10 Mei 2026", cat: "Korporasi" },
    { title: "Analisis Putusan MA Terkait Sengketa Arbitrase Komersial", date: "02 Mei 2026", cat: "Litigasi" },
    { title: "Urgensi Pendaftaran Merek di Era Perdagangan Digital lintas Negara", date: "18 April 2026", cat: "HKI" },
  ];

  return (
    <div className="w-full bg-white min-h-screen pb-24">
      <section className="bg-[#0F172A] pt-32 pb-24 text-center">
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">Jurnal & Publikasi Hukum</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg px-6">Perspektif tajam dan analisis doktrinal dari meja redaksi Satya & Partners.</p>
        </FadeIn>
      </section>

      <section className="container mx-auto px-6 max-w-7xl mt-12">
        {/* Featured Article */}
        <FadeIn>
          <Link href="#" className="group block relative rounded-2xl overflow-hidden mb-16 shadow-2xl h-[400px]">
            <div className="absolute inset-0 bg-slate-800" /> {/* Ganti dengan Image riil */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <span className="bg-[#D4AF37] text-[#0F172A] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide mb-4 inline-block">Artikel Sorotan</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 group-hover:underline decoration-[#D4AF37] decoration-2 underline-offset-8">
                Dampak Berlakunya UU Pelindungan Data Pribadi (PDP) Terhadap Operasional Bisnis Multinasional
              </h2>
              <p className="text-slate-300 max-w-3xl line-clamp-2 md:line-clamp-none">
                Analisis komprehensif mengenai kewajiban pengendali data, sanksi denda administratif, hingga langkah mitigasi yang harus segera diimplementasikan oleh pelaku usaha.
              </p>
            </div>
          </Link>
        </FadeIn>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((post, i) => (
            <FadeIn delay={0.1 * i} key={i}>
              <article className="border-b border-slate-200 pb-8 group">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase">{post.cat}</span>
                  <span className="text-slate-400 text-sm flex items-center"><Calendar size={14} className="mr-1"/> {post.date}</span>
                </div>
                <Link href="#" className="flex items-start justify-between group-hover:text-[#D4AF37] transition-colors">
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] pr-4 leading-snug">{post.title}</h3>
                  <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-[#D4AF37] shrink-0 mt-1" />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}