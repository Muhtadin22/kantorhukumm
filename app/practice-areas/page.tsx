import FadeIn from "@/components/motion/FadeIn";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PracticeAreasPage() {
  const practices = [
    {
      title: "Hukum Korporasi & Komersial",
      desc: "Menavigasi lanskap regulasi yang kompleks untuk mengamankan transaksi bisnis harian maupun strategis perusahaan Anda.",
      subs: ["Merger & Akuisisi (M&A)", "Joint Ventures & Penanaman Modal Asing", "Tata Kelola Perusahaan (GCG)", "Penyusunan Kontrak Komersial"]
    },
    {
      title: "Litigasi & Penyelesaian Sengketa",
      desc: "Representasi agresif di semua tingkat peradilan, dari Pengadilan Negeri hingga Mahkamah Agung, serta arbitrase komersial.",
      subs: ["Sengketa Perdata & Komersial", "Arbitrase Nasional (BANI) & Internasional", "Hukum Kepailitan & PKPU", "Sengketa Tata Usaha Negara"]
    },
    {
      title: "Kekayaan Intelektual & Teknologi",
      desc: "Perlindungan aset tidak berwujud yang menjadi keunggulan kompetitif perusahaan Anda di era ekonomi digital.",
      subs: ["Pendaftaran Paten, Merek & Hak Cipta", "Sengketa Pelanggaran HKI", "Lisensi & Waralaba", "Kepatuhan Perlindungan Data Pribadi (PDP)"]
    },
    {
      title: "Ketenagakerjaan & Hubungan Industrial",
      desc: "Solusi hukum preventif dan kuratif untuk menjaga harmoni industrial sekaligus melindungi kepentingan perusahaan.",
      subs: ["Penyusunan Peraturan Perusahaan", "Sengketa PHK", "Perjanjian Kerja Bersama (PKB)", "Tenaga Kerja Asing (TKA)"]
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">
      <section className="bg-[#0F172A] pt-32 pb-24 text-center">
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">Area Ekspertise</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg px-6">Spektrum layanan hukum komprehensif dengan fokus pada kedalaman analitis dan efektivitas taktis.</p>
        </FadeIn>
      </section>

      <section className="container mx-auto px-6 max-w-7xl -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {practices.map((item, i) => (
            <FadeIn delay={0.1 * i} key={i}>
              <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-10 h-full flex flex-col group">
                <div className="flex-grow">
                  <h2 className="font-serif text-3xl font-bold text-[#0F172A] mb-4">{item.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-8">{item.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {item.subs.map((sub, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#D4AF37] w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="inline-flex items-center text-[#0F172A] font-bold group-hover:text-[#D4AF37] transition-colors mt-auto">
                  Konsultasi Kasus Ini <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}