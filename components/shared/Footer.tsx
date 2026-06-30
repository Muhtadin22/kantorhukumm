import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  // 1. Definisikan daftar tautan beserta rute URL-nya
  const quickLinks = [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Area Praktik", href: "/area-praktik" },
    { label: "Tim Pengacara", href: "/tim-pengacara" },
    { label: "Publikasi", href: "/publikasi" },
    { label: "Karir", href: "/karir" }
  ];

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-bold text-white mb-4 block">
              Satya <span className="text-[#D4AF37]">&</span> Partners
            </Link>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Firma hukum terkemuka di Jakarta yang menggabungkan ketajaman akademis dan keunggulan litigasi untuk memberikan solusi hukum strategis bagi bisnis dan individu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Tautan Cepat</h4>
            <ul className="space-y-3">
              {/* 2. Map data quickLinks ke dalam komponen Link */}
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#D4AF37] transition-colors flex items-center text-sm">
                    <ChevronRight size={14} className="mr-2 text-[#D4AF37]" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontak Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#D4AF37] shrink-0" size={18} />
                <span>Jl. Jend. Sudirman Kav. 52-53,<br />SCBD, Jakarta Selatan 12190,<br />Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#D4AF37] shrink-0" size={18} />
                <span>+62 21 555 0192</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#D4AF37] shrink-0" size={18} />
                <span>contact@satyapartners.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Satya & Partners. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}