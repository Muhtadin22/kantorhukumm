"use client";

import React, { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Mail, X, ChevronDown, Tag } from "lucide-react";

// 1. Definisikan tipe data untuk Artikel
interface Article {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  cat: string;
  author: string;
  readTime: string;
  img: string;
}

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Semua Topik");

  const articles: Article[] = [
    { 
      title: "Kewajiban Lapor Pemilik Manfaat (Beneficial Ownership) Bagi Korporasi", 
      excerpt: "Ketentuan terbaru transparansi korporasi untuk mencegah tindak pidana pencucian uang dan penghindaran pajak di Indonesia.",
      content: "Peraturan Presiden Nomor 13 Tahun 2018 telah menetapkan prinsip mengenali Pemilik Manfaat dari Korporasi. Langkah ini diambil pemerintah Indonesia sebagai komitmen global dalam mencegah tindak pidana pencucian uang (TPPU) dan pendanaan terorisme. Korporasi kini diwajibkan untuk mengidentifikasi, memverifikasi, dan melaporkan informasi pemilik manfaatnya kepada instansi berwenang. \n\nKegagalan dalam melaporkan data ini dapat berujung pada sanksi administratif hingga pembekuan izin usaha. Oleh karena itu, perusahaan harus segera melakukan audit internal dan menyesuaikan anggaran dasarnya agar sejalan dengan prinsip transparansi ini.",
      date: "24 Mei 2026", 
      cat: "Kepatuhan",
      author: "Ahmad Abbas, S.H., LL.M.",
      readTime: "6 Menit",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Perlindungan Hukum Pemegang Saham Minoritas dalam Skema M&A", 
      excerpt: "Analisis hak appraisal dan mekanisme perlindungan terhadap dilusi kepemilikan saham dalam transaksi akuisisi strategis.",
      content: "Dalam proses Mergers and Acquisitions (M&A), pemegang saham minoritas rentan mengalami dilusi nilai saham maupun kehilangan suara strategis. Berdasarkan UU Perseroan Terbatas No. 40 Tahun 2007, hukum Indonesia mengakomodasi perlindungan melalui 'Hak Appraisal', di mana pemegang saham yang tidak setuju dengan keputusan akuisisi berhak meminta perseroan membeli sahamnya dengan harga wajar.\n\nNamun, praktiknya sering kali terkendala dalam valuasi harga saham yang adil. Artikel ini mengupas strategi legal yang bisa diterapkan oleh pemegang saham minoritas melalui RUPS maupun pengajuan gugatan perbuatan melawan hukum jika terjadi ketidakadilan dalam proses M&A.",
      date: "10 Mei 2026", 
      cat: "Korporasi",
      author: "Andira Kirana, S.H., M.H.",
      readTime: "8 Menit",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Analisis Putusan MA Terkait Eksekusi Putusan Arbitrase Internasional", 
      excerpt: "Tantangan dan preseden hukum dalam penerapan Konvensi New York 1958 di yurisdiksi peradilan Indonesia.",
      content: "Pelaksanaan (eksekusi) putusan arbitrase internasional di Indonesia masih menghadapi tantangan serius. Meskipun Indonesia telah meratifikasi Konvensi New York 1958 melalui Keppres No. 34 Tahun 1981, pengadilan nasional terkadang menolak eksekusi dengan dalih 'ketertiban umum' (public policy).\n\nMelalui analisis beberapa putusan Mahkamah Agung terbaru, terlihat adanya pergeseran paradigma menuju pendekatan yang lebih pro-arbitrase, di mana ruang lingkup penolakan eksekusi semakin dipersempit. Hal ini memberikan kepastian hukum yang lebih baik bagi investor asing yang memilih penyelesaian sengketa di luar yurisdiksi Indonesia.",
      date: "02 Mei 2026", 
      cat: "Litigasi",
      author: "Dr. Satya Wardhana, S.H.",
      readTime: "10 Menit",
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Urgensi Pendaftaran Merek di Era Perdagangan Digital Lintas Negara", 
      excerpt: "Strategi mitigasi sengketa domain, cybersquatting, dan pembajakan merek dagang di platform e-commerce global.",
      content: "Perdagangan digital menghapus batas geografis, namun secara hukum, pelindungan merek tetap bersifat teritorial. Banyak pelaku UMKM dan perusahaan lokal terkejut saat mengetahui merek mereka telah didaftarkan oleh pihak lain di negara tujuan ekspor atau digunakan dalam nama domain secara tidak sah (cybersquatting).\n\nLangkah pencegahan terbaik adalah melakukan pendaftaran merek secara proaktif melalui Protokol Madrid yang memfasilitasi pendaftaran di berbagai yurisdiksi secara serentak, serta menggunakan layanan monitoring digital untuk mendeteksi pelanggaran merek di platform e-commerce sejak dini.",
      date: "18 April 2026", 
      cat: "Hak Kekayaan Intelektual",
      author: "Bimo Wicaksono, S.H.",
      readTime: "5 Menit",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Dinamika PKPU dan Kepailitan di Sektor Properti Komersial", 
      excerpt: "Kajian atas lonjakan restrukturisasi utang perusahaan pengembang dan mitigasi risiko bagi kreditur sindikasi.",
      content: "Sektor properti komersial mengalami tekanan likuiditas yang signifikan, memicu lonjakan permohonan Penundaan Kewajiban Pembayaran Utang (PKPU). Dalam situasi ini, kreditur sindikasi harus sangat berhati-hati dalam menyetujui proposal perdamaian (homologasi).\n\nArtikel ini membahas langkah taktis bagi kreditur dalam mengamankan hak tanggungan mereka, mencegah debitur nakal yang menyembunyikan aset, serta bagaimana menavigasi proses pemungutan suara dalam rapat kreditur yang kerap kali dipenuhi konflik kepentingan.",
      date: "05 April 2026", 
      cat: "Litigasi",
      author: "Dr. Satya Wardhana, S.H.",
      readTime: "7 Menit",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Implikasi Hukum Ketenagakerjaan Pasca-Omnibus Law Terkini", 
      excerpt: "Penyesuaian klausul perjanjian kerja, pesangon, dan tenaga kerja alih daya (outsourcing) sesuai PP terbaru.",
      content: "Perubahan regulasi turunan dari UU Cipta Kerja terus bergulir. Peraturan Pemerintah (PP) terbaru membawa implikasi langsung terhadap cara perusahaan menyusun Perjanjian Kerja Waktu Tertentu (PKWT) dan skema kompensasi pemutusan hubungan kerja (PHK).\n\nPerusahaan dituntut untuk melakukan pembaruan pada Peraturan Perusahaan (PP) atau Perjanjian Kerja Bersama (PKB) mereka untuk menghindari perselisihan hubungan industrial. Penekanan khusus diberikan pada restriksi dan perluasan sektor bagi tenaga kerja alih daya (outsourcing).",
      date: "22 Maret 2026", 
      cat: "Ketenagakerjaan",
      author: "Ratna Kumala, S.H., M.H.",
      readTime: "9 Menit",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const categories = ["Semua Topik", "Korporasi", "Litigasi", "Kepatuhan", "Hak Kekayaan Intelektual", "Ketenagakerjaan"];

  // Filter logika
  const filteredArticles = activeCategory === "Semua Topik" 
    ? articles 
    : articles.filter(article => article.cat === activeCategory);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24 relative selection:bg-[#D4AF37] selection:text-[#0F172A]">
      
      {/* 1. HERO SECTION (Seragam dengan About & Experience) */}
      <section className="relative w-full h-[90vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664177922-928394b2951b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A]" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center mt-20">
          <FadeIn>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
              Pusat Pengetahuan
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 tracking-tight leading-[1.1]">
              Jurnal & <br className="hidden md:block"/>
              <span className="italic font-light text-slate-300">Publikasi Hukum.</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Eksplorasi wawasan strategis, analisis regulasi terbaru, dan kajian doktrinal dari para pakar hukum di OBH & Partners.
            </p>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-7xl pt-24">
        
        {/* 2. FEATURED ARTICLE (Modern Editorial Card) */}
        <FadeIn>
          <button 
            onClick={() => setSelectedArticle(articles[0])}
            className="group block relative w-full text-left rounded-3xl overflow-hidden mb-20 shadow-xl hover:shadow-2xl h-[500px] lg:h-[550px] transition-all duration-500"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1600" 
                alt="Featured Article" 
                className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-1000 ease-out" 
              />
            </div>
            {/* Gradien gelap yang elegan */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:w-4/5 flex flex-col justify-end h-full">
              <div className="flex flex-wrap items-center gap-4 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-[#D4AF37] text-[#0F172A] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  Sorotan Utama
                </span>
                <span className="text-slate-200 text-sm flex items-center font-medium bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Clock size={14} className="mr-2 text-[#D4AF37]"/> 12 Menit Baca
                </span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors duration-500 leading-tight">
                Dampak Berlakunya UU Pelindungan Data Pribadi (PDP) Terhadap Operasional Bisnis Multinasional
              </h2>
              
              <p className="text-slate-300 text-lg mb-8 line-clamp-2 md:line-clamp-3 max-w-3xl">
                Analisis komprehensif mengenai kewajiban pengendali data, ancaman sanksi administratif, hingga langkah mitigasi strategis yang harus segera diimplementasikan oleh pelaku usaha di yurisdiksi Indonesia.
              </p>
              
              <div className="flex items-center justify-between border-t border-slate-500/50 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-[#D4AF37] flex items-center justify-center text-xs font-bold text-white">
                    AA
                  </div>
                  <p className="text-white font-medium text-sm">Oleh <span className="text-[#D4AF37]">Ahmad Abbas, S.H., LL.M.</span></p>
                </div>
                <span className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 group-hover:bg-[#D4AF37] text-white group-hover:text-[#0F172A] backdrop-blur-sm transition-all duration-300">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </button>
        </FadeIn>

        {/* 3. CATEGORY FILTERS (Interactive & Scrollable on Mobile) */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2 mb-12 border-b border-slate-200 pb-6 overflow-x-auto scrollbar-hide">
            <Tag size={20} className="text-slate-400 mr-2 shrink-0" />
            {categories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat 
                  ? "bg-[#0F172A] text-white shadow-lg shadow-[#0F172A]/20 scale-105" 
                  : "bg-white text-slate-500 border border-slate-200 hover:border-[#0F172A] hover:text-[#0F172A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* 4. ARTICLE GRID (Bento/Modern Card dengan AnimatePresence) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((post, i) => (
              <motion.article 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={post.title}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-500 group flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedArticle(post)}
              >
                {/* Thumbnail */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                    <span className="text-[#0F172A] font-bold text-xs tracking-wider uppercase">{post.cat}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Efek Garis Emas saat Hover */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <div className="flex items-center gap-4 text-slate-400 text-xs font-medium mb-4 pt-2 uppercase tracking-wide">
                    <span className="flex items-center"><Calendar size={14} className="mr-1.5 text-[#D4AF37]"/> {post.date}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-1.5 text-[#D4AF37]"/> {post.readTime}</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] leading-snug mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed line-clamp-3 mb-8 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Author & CTA */}
                  <div className="border-t border-slate-100 pt-5 flex justify-between items-center mt-auto">
                    <p className="text-sm font-semibold text-[#0F172A]">{post.author}</p>
                    <div className="text-slate-400 group-hover:text-[#D4AF37] transition-colors duration-300 flex items-center text-sm font-bold">
                      Baca <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
          
          {/* Pesan jika kategori kosong */}
          {filteredArticles.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-slate-500 text-lg">Belum ada artikel untuk kategori ini.</p>
            </div>
          )}
        </motion.div>

        {/* 5. NEWSLETTER SECTION (Elegant CTA) */}
        <FadeIn>
          <div className="bg-[#0F172A] rounded-[2.5rem] p-10 md:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            {/* Dekorasi Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute -left-10 -bottom-10 opacity-5 pointer-events-none">
              <Mail size={250} className="text-white" />
            </div>
            
            <div className="lg:w-1/2 relative z-10">
              <h3 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">Berlangganan <br/> <span className="text-[#D4AF37] italic">Buletin Hukum.</span></h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Dapatkan pembaruan regulasi terbaru, buletin bulanan, dan analisis hukum eksklusif langsung ke kotak masuk Anda.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 relative z-10">
              <form className="flex flex-col sm:flex-row gap-4 bg-white/5 p-2 rounded-2xl border border-slate-700 backdrop-blur-sm">
                <input 
                  type="email" 
                  placeholder="Alamat Email Perusahaan" 
                  className="w-full p-4 bg-transparent text-white placeholder-slate-400 focus:outline-none transition-all"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#D4AF37] hover:bg-white text-[#0F172A] font-bold px-8 py-4 rounded-xl transition-colors whitespace-nowrap shadow-lg shadow-[#D4AF37]/20"
                >
                  Berlangganan
                </button>
              </form>
              <p className="text-slate-500 text-sm mt-4 text-center lg:text-left">
                Dengan berlangganan, Anda menyetujui <a href="#" className="text-slate-400 underline hover:text-white">Kebijakan Privasi</a> kami.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 6. MODAL / POPUP ARTIKEL LENGKAP (Framer Motion Enhanced) */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0F172A]/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative shadow-2xl"
            >
              
              {/* Header / Banner Modal */}
              <div className="relative h-64 sm:h-80 shrink-0 w-full">
                <img 
                  src={selectedArticle.img} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
                
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 p-2.5 bg-white/20 hover:bg-[#D4AF37] rounded-full text-white backdrop-blur-md transition-colors duration-300 z-10"
                >
                  <X size={24} />
                </button>

                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 text-white z-10">
                  <span className="bg-[#D4AF37] text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block">
                    {selectedArticle.cat}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight max-w-3xl">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Konten Artikel */}
              <div className="p-6 sm:p-10 overflow-y-auto bg-slate-50">
                <div className="flex flex-wrap items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 mb-8 gap-4 shadow-sm">
                  <div className="flex items-center gap-6 text-slate-500 text-sm font-medium uppercase tracking-wide">
                    <span className="flex items-center"><Calendar size={18} className="mr-2 text-[#D4AF37]"/> {selectedArticle.date}</span>
                    <span className="flex items-center"><Clock size={18} className="mr-2 text-[#D4AF37]"/> {selectedArticle.readTime}</span>
                  </div>
                  <div className="font-semibold text-slate-700 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-xs">
                      {selectedArticle.author.charAt(0)}
                    </div>
                    {selectedArticle.author}
                  </div>
                </div>

                {/* Teks Konten */}
                <div className="prose prose-lg max-w-none prose-slate prose-headings:font-serif prose-a:text-[#D4AF37] prose-p:leading-loose text-slate-700 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
                  {selectedArticle.content.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-6 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}