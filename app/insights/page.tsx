"use client";

import React, { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Mail, X } from "lucide-react";

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
  // 2. Berikan tipe data pada useState: bisa berupa 'Article' atau 'null'
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // 3. (Opsional namun disarankan) Berikan tipe pada array articles
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
    },
    { 
      title: "Panduan Pendirian PT PMA di Ibu Kota Nusantara (IKN)", 
      excerpt: "Insentif fiskal, prosedur perizinan berusaha, dan kepastian hak atas tanah bagi investor asing di wilayah IKN.",
      content: "Sebagai proyek strategis nasional, IKN menawarkan berbagai super deduction tax, tax holiday, serta jaminan Hak Guna Usaha (HGU) hingga 95 tahun yang menggiurkan bagi Penanaman Modal Asing (PMA). \n\nNamun, proses pendirian PT PMA di wilayah otorita IKN memiliki perbedaan prosedural dibandingkan daerah lain yang menggunakan sistem OSS secara umum. Artikel ini merinci tahapan perizinan khusus, syarat kemitraan dengan entitas lokal, dan cara memaksimalkan insentif pajak yang tersedia.",
      date: "15 Maret 2026", 
      cat: "Korporasi",
      author: "Andira Kirana, S.H., M.H.",
      readTime: "8 Menit",
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Menavigasi Sengketa Pajak Transfer Pricing Multinasional", 
      excerpt: "Pendekatan Mutual Agreement Procedure (MAP) versus Pengadilan Pajak dalam sengketa afiliasi lintas negara.",
      content: "Pemeriksaan atas transaksi afiliasi (transfer pricing) oleh otoritas pajak semakin agresif. Ketika perusahaan multinasional terkena koreksi pajak ganda (double taxation), mereka dihadapkan pada pilihan: mengajukan banding ke Pengadilan Pajak atau menggunakan Mutual Agreement Procedure (MAP).\n\nKajian ini membandingkan efektivitas waktu, biaya, dan tingkat keberhasilan dari kedua jalur penyelesaian sengketa tersebut, lengkap dengan studi kasus penerapan Advance Pricing Agreement (APA) sebagai alat pencegahan sengketa di masa depan.",
      date: "01 Maret 2026", 
      cat: "Kepatuhan",
      author: "Ahmad Abbas, S.H., LL.M.",
      readTime: "11 Menit",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const categories = ["Semua Topik", "Korporasi", "Litigasi", "Kepatuhan", "Hak Kekayaan Intelektual", "Ketenagakerjaan"];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24 relative">
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
          <button 
            onClick={() => setSelectedArticle(articles[0])}
            className="group block relative w-full text-left rounded-3xl overflow-hidden mb-16 shadow-2xl h-[450px] lg:h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1600" 
              alt="Featured Article" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
            
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
                  Baca Artikel Lengkap <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </button>
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
                  
                  <button onClick={() => setSelectedArticle(post)} className="flex-grow text-left">
                    <h3 className="font-serif text-2xl font-bold text-[#0F172A] leading-snug mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </button>

                  {/* Author & CTA */}
                  <div className="border-t border-slate-100 pt-5 flex justify-between items-center mt-auto">
                    <p className="text-sm font-medium text-slate-700">{post.author}</p>
                    <button 
                      onClick={() => setSelectedArticle(post)} 
                      className="text-[#0F172A] p-2 bg-slate-50 rounded-full group-hover:bg-[#D4AF37] group-hover:text-white transition-colors"
                      aria-label="Baca selengkapnya"
                    >
                      <ArrowRight size={18} />
                    </button>
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

      {/* MODAL / POPUP ARTIKEL LENGKAP */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0F172A]/80 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header / Banner Modal */}
            <div className="relative h-48 sm:h-64 shrink-0 w-full">
              <img 
                src={selectedArticle.img} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/60 rounded-full text-white backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 right-4 text-white">
                <span className="bg-[#D4AF37] text-[#0F172A] text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-3 inline-block">
                  {selectedArticle.cat}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Konten Artikel */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-4 text-slate-500 text-sm">
                <div className="flex items-center gap-4">
                  <span className="flex items-center"><Calendar size={16} className="mr-2 text-[#D4AF37]"/> {selectedArticle.date}</span>
                  <span className="flex items-center"><Clock size={16} className="mr-2 text-[#D4AF37]"/> {selectedArticle.readTime}</span>
                </div>
                <div className="font-medium text-slate-700">
                  Ditulis oleh: <span className="text-[#0F172A]">{selectedArticle.author}</span>
                </div>
              </div>

              {/* Teks Konten */}
              <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:mb-4 text-slate-700">
                {/* 4. Berikan tipe data (string, number) pada argumen di fungsi map */}
                {selectedArticle.content.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-base sm:text-lg mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}