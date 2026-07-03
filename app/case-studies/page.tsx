import FadeIn from "@/components/motion/FadeIn";
import { ArrowRight, ChevronDown, Building2, TrendingUp, Scale, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "CS-01",
      category: "Restrukturisasi & Kepailitan (PKPU)",
      industry: "Manufaktur & Tekstil",
      value: "IDR 450 Juta",
      title: "Restrukturisasi Utang Konglomerasi Tekstil Terbesar di Asia Tenggara",
      challenge: "Klien menghadapi ancaman likuidasi dari sindikasi 15 bank asing dan domestik akibat krisis pasokan global, dengan struktur utang lintas yurisdiksi yang sangat kompleks.",
      solution: "Tim Satya & Partners merancang proposal perdamaian (Composition Plan) agresif yang mencakup debt-to-equity swap dan perpanjangan tenor. Kami berhasil meyakinkan 85% kreditur konkuren untuk menyetujui rencana tersebut dalam voting PKPU di Pengadilan Niaga.",
      partner: "Ahmad Abbas, S.H., LL.M.",
      icon: TrendingUp
    },
    {
      id: "CS-02",
      category: "Arbitrase Internasional",
      industry: "Infrastruktur & Energi",
      value: "IDR 1.2 Miliar",
      title: "Kemenangan Sengketa EPC (Engineering, Procurement, Construction) di SIAC",
      challenge: "BUMN Energi Indonesia dituntut ganti rugi oleh kontraktor multinasional asal Eropa atas tuduhan wanprestasi dan keterlambatan serah terima lahan proyek PLTU.",
      solution: "Melalui pembuktian forensik konstruksi yang teliti dan argumen doktrinal terkait 'Force Majeure' dalam hukum Indonesia, kami mematahkan seluruh klaim penggugat di hadapan majelis arbitrase Singapore International Arbitration Centre (SIAC).",
      partner: "Dr. Satya Wardhana, S.H.",
      icon: Scale
    },
    {
      id: "CS-03",
      category: "Merger & Akuisisi (M&A)",
      industry: "Teknologi Keuangan (Fintech)",
      value: "IDR 3.5 Triliun",
      title: "Akuisisi Strategis Startup Fintech Nasional oleh Decacorn Global",
      challenge: "Proses akuisisi terhambat oleh regulasi batas kepemilikan asing yang ketat di sektor jasa keuangan dan persetujuan kompleks dari Bank Indonesia serta Otoritas Jasa Keuangan (OJK).",
      solution: "Merancang struktur transaksi berlapis menggunakan skema kepemilikan tidak langsung (indirect ownership) yang sepenuhnya patuh pada hukum positif Indonesia, memastikan transaksi selesai tepat waktu tanpa teguran regulator.",
      partner: "Andira Kirana, S.H., M.H.",
      icon: Building2
    },
    {
      id: "CS-04",
      category: "Kekayaan Intelektual",
      industry: "Farmasi & Kesehatan",
      value: "Tidak Terhingga (Aset Paten)",
      title: "Mempertahankan Hak Paten Obat Esensial Multinasional",
      challenge: "Perusahaan farmasi global menghadapi gugatan pembatalan paten obat esensial mereka oleh pabrikan generik lokal dengan dalih 'tidak adanya kebaruan' (lack of novelty).",
      solution: "Bekerja sama dengan saksi ahli farmakologi terkemuka, kami membuktikan di Pengadilan Niaga hingga tingkat Kasasi di Mahkamah Agung bahwa invensi klien memiliki langkah inventif yang tidak dapat diprediksi sebelumnya.",
      partner: "Bimo Wicaksono, S.H.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen selection:bg-[#D4AF37] selection:text-[#0F172A] pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[80vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A]" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center mt-20">
          <FadeIn>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Rekam Jejak & Keberhasilan</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 tracking-tight leading-[1.1]">
              Studi <span className="italic font-light text-slate-300">Kasus.</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Mewakili klien dalam sengketa paling kompleks dan transaksi paling krusial. Bukti nyata dari komitmen kami terhadap presisi strategis dan hasil akhir.
            </p>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </section>

      {/* 2. STATISTIK HIGHLIGHT */}
      <section className="container mx-auto px-6 max-w-7xl -mt-16 relative z-20 mb-20">
        <FadeIn>
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="py-4">
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">USD 5B+</h3>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Total Nilai Transaksi Dijaga</p>
            </div>
            <div className="py-4">
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">92%</h3>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Tingkat Kemenangan Litigasi</p>
            </div>
            <div className="py-4">
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">150+</h3>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Korporasi Multinasional</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. CASE STUDIES GRID */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="space-y-16">
          {caseStudies.map((cs, i) => (
            <FadeIn delay={0.1 * i} key={cs.id}>
              <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  
                  {/* Left Column: Metadata & Value */}
                  <div className="bg-[#0F172A] text-white p-10 lg:w-1/3 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 opacity-5">
                      <cs.icon size={250} />
                    </div>
                    
                    <div className="relative z-10 mb-10">
                      <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-4 block">Ref: {cs.id}</span>
                      <h4 className="font-serif text-2xl font-bold mb-4">{cs.category}</h4>
                      <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                        <Building2 size={16} className="text-[#D4AF37]" />
                        <span>Industri: {cs.industry}</span>
                      </div>
                    </div>

                    <div className="relative z-10 border-t border-slate-700 pt-6 mt-auto">
                      <p className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-1">Nilai Sengketa / Transaksi</p>
                      <p className="text-3xl font-serif text-[#D4AF37] font-bold">{cs.value}</p>
                    </div>
                  </div>

                  {/* Right Column: Details */}
                  <div className="p-10 lg:p-14 lg:w-2/3">
                    <h3 className="font-serif text-3xl font-bold text-[#0F172A] mb-8 leading-tight group-hover:text-[#D4AF37] transition-colors">
                      {cs.title}
                    </h3>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="flex items-center gap-2 text-[#0F172A] font-bold uppercase tracking-wider text-sm mb-3">
                          <CheckCircle2 size={18} className="text-red-500" /> Tantangan & Isu Hukum
                        </h4>
                        <p className="text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-100">
                          {cs.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-[#0F172A] font-bold uppercase tracking-wider text-sm mb-3">
                          <CheckCircle2 size={18} className="text-emerald-500" /> Strategi & Resolusi
                        </h4>
                        <p className="text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-100">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Lead Partner</p>
                        <p className="text-[#0F172A] font-bold">{cs.partner}</p>
                      </div>
                      <Link href="/contact" className="w-12 h-12 rounded-full bg-slate-100 hover:bg-[#D4AF37] text-[#0F172A] hover:text-white flex items-center justify-center transition-all">
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="container mx-auto px-6 max-w-5xl mt-32 text-center">
        <FadeIn>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0F172A] font-bold mb-6">
            Lindungi Kepentingan Komersial Anda
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
            Biarkan rekam jejak kami berbicara. Tim kami siap merumuskan mitigasi hukum terbaik untuk perusahaan Anda.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex bg-[#0F172A] hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-md transition-all items-center justify-center gap-3 shadow-lg"
          >
            Hubungi Tim Advokat <ArrowRight size={20} />
          </Link>
        </FadeIn>
      </section>

    </div>
  );
}