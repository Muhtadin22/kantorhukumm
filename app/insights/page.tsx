import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Mail } from "lucide-react";

export default function InsightsPage() {
  // Data artikel yang diperkaya dengan gambar, penulis, dan waktu baca
  const articles = [
    { 
      title: "Kewajiban Lapor Pemilik Manfaat (Beneficial Ownership) Bagi Korporasi", 
      excerpt: "Ketentuan terbaru transparansi korporasi untuk mencegah tindak pidana pencucian uang dan penghindaran pajak di Indonesia.",
      date: "24 Mei 2026", 
      cat: "Kepatuhan",
      author: "Ahmad Abbas, S.H., LL.M.",
      readTime: "6 Menit",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Perlindungan Hukum Pemegang Saham Minoritas dalam Skema M&A", 
      excerpt: "Analisis hak appraisal dan mekanisme perlindungan terhadap dilusi kepemilikan saham dalam transaksi akuisisi strategis.",
      date: "10 Mei 2026", 
      cat: "Korporasi",
      author: "Andira Kirana, S.H., M.H.",
      readTime: "8 Menit",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Analisis Putusan MA Terkait Eksekusi Putusan Arbitrase Internasional", 
      excerpt: "Tantangan dan preseden hukum dalam penerapan Konvensi New York 1958 di yurisdiksi peradilan Indonesia.",
      date: "02 Mei 2026", 
      cat: "Litigasi",
      author: "Dr. Satya Wardhana, S.H.",
      readTime: "10 Menit",
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Urgensi Pendaftaran Merek di Era Perdagangan Digital Lintas Negara", 
      excerpt: "Strategi mitigasi sengketa domain, cybersquatting, dan pembajakan merek dagang di platform e-commerce global.",
      date: "18 April 2026", 
      cat: "Hak Kekayaan Intelektual",
      author: "Bimo Wicaksono, S.H.",
      readTime: "5 Menit",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
  ];

  const categories = ["Semua Topik", "Korporasi", "Litigasi", "Kepatuhan", "Hak Kekayaan Intelektual", "Ketenagakerjaan"];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-[#0F172A] pt-32 pb-24 text-center">
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">Jurnal & Publikasi Hukum</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg px-6 leading-relaxed">
            Eksplorasi wawasan strategis, analisis regulasi terbaru, dan kajian doktrinal dari para pakar hukum di Satya & Partners.
          </p>
        </FadeIn>
      </section>

      <section className="container mx-auto px-6 max-w-7xl -mt-10">
        {/* Featured Article */}
        <FadeIn>
          <Link href="#" className="group block relative rounded-3xl overflow-hidden mb-16 shadow-2xl h-[450px] lg:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1600" 
              alt="Featured Article" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-14 lg:w-3/4">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-[#D4AF37] text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide">
                  Artikel Sorotan
                </span>
                <span className="text-slate-300 text-sm flex items-center"><Clock size={14} className="mr-1.5"/> 12 Menit Baca</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors leading-tight">
                Dampak Berlakunya UU Pelindungan Data Pribadi (PDP) Terhadap Operasional Bisnis Multinasional
              </h2>
              
              <p className="text-slate-300 text-lg mb-6 line-clamp-2">
                Analisis komprehensif mengenai kewajiban pengendali data, ancaman sanksi administratif, hingga langkah mitigasi strategis yang harus segera diimplementasikan oleh pelaku usaha di yurisdiksi Indonesia.
              </p>
              
              <div className="flex items-center justify-between border-t border-slate-600/50 pt-4">
                <p className="text-white font-medium text-sm">Oleh: <span className="text-[#D4AF37]">Ahmad Abbas, S.H., LL.M.</span></p>
                <span className="text-white text-sm flex items-center group-hover:text-[#D4AF37] transition-colors">
                  Baca Artikel <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-slate-200 pb-6">
            {categories.map((cat, i) => (
              <button 
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0 
                  ? "bg-[#0F172A] text-white shadow-md" 
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#0F172A] hover:text-[#0F172A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-24">
          {articles.map((post, i) => (
            <FadeIn delay={0.1 * i} key={i}>
              <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                {/* Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-sm shadow-sm">
                    <span className="text-[#D4AF37] font-bold text-xs tracking-widest uppercase">{post.cat}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
                    <span className="flex items-center"><Calendar size={14} className="mr-1.5 text-[#D4AF37]"/> {post.date}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-1.5 text-[#D4AF37]"/> {post.readTime}</span>
                  </div>
                  
                  <Link href="#" className="flex-grow">
                    <h3 className="font-serif text-2xl font-bold text-[#0F172A] leading-snug mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </Link>

                  {/* Author & CTA */}
                  <div className="border-t border-slate-100 pt-5 flex justify-between items-center mt-auto">
                    <p className="text-sm font-medium text-slate-700">{post.author}</p>
                    <Link href="#" className="text-[#0F172A] p-2 bg-slate-50 rounded-full group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Newsletter Subscription Section */}
        <FadeIn>
          <div className="bg-[#0F172A] rounded-3xl p-10 md:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 opacity-5">
              <Mail size={300} className="text-white" />
            </div>
            
            <div className="lg:w-1/2 relative z-10">
              <h3 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">Berlangganan Buletin Hukum</h3>
              <p className="text-slate-300 text-lg">
                Dapatkan pembaruan regulasi terbaru, buletin bulanan, dan analisis hukum langsung ke kotak masuk Anda.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 relative z-10">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Alamat Email Perusahaan Anda" 
                  className="w-full p-4 rounded-lg bg-white/10 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#D4AF37] hover:bg-white text-[#0F172A] font-bold px-8 py-4 rounded-lg transition-colors whitespace-nowrap"
                >
                  Berlangganan
                </button>
              </form>
              <p className="text-slate-500 text-xs mt-3">Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami.</p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}