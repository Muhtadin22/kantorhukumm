import FadeIn from "@/components/motion/FadeIn";
import ContactForm from "@/components/shared/ContactForm";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <section className="bg-[#0F172A] pt-32 pb-24 text-center">
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">Jadwalkan Konsultasi</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg px-6">
            Kerahasiaan Anda adalah prioritas kami. Hubungi tim Satya & Partners untuk peninjauan kasus secara mendalam.
          </p>
        </FadeIn>
      </section>

      <section className="py-24 container mx-auto px-6 max-w-7xl -mt-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Kiri: Info Kontak */}
            <div className="lg:col-span-2 bg-[#0F172A] p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="font-serif text-3xl font-bold mb-8">Informasi Kontak</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Kantor Utama</h4>
                      <p className="text-slate-300 leading-relaxed">Gedung Satya Tower, Lt. 15<br/>Jl. Jend. Sudirman Kav. 52-53, SCBD<br/>Jakarta Selatan 12190</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Telepon Resmi</h4>
                      <p className="text-slate-300">+62 21 555 0192 (Hunting)<br/>Senin - Jumat, 08:00 - 17:00 WIB</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Korespondensi Email</h4>
                      <p className="text-slate-300">legal@satyapartners.co.id</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opsi Fast Response WhatsApp */}
              <div className="relative z-10 mt-16 pt-8 border-t border-slate-700">
                <p className="text-sm text-slate-400 mb-4">Untuk keperluan darurat atau respons cepat:</p>
                <Link 
                  href="https://wa.me/6281234567890?text=Halo%20Satya%20%26%20Partners,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20hukum." 
                  target="_blank"
                  className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-3 px-4 rounded-md transition-colors"
                >
                  <MessageCircle className="mr-2" size={20} /> Chat via WhatsApp
                </Link>
              </div>
            </div>

            {/* Kanan: Form Kontak */}
            <div className="lg:col-span-3 p-10 md:p-12">
              <h2 className="font-serif text-3xl font-bold text-[#0F172A] mb-2">Tinggalkan Pesan</h2>
              <p className="text-slate-500 mb-8">Silakan isi detail perkara Anda secara singkat. Tim advokat kami akan merespons dalam waktu 1x24 jam kerja.</p>
              
              {/* Komponen Form Client yang telah dibuat sebelumnya */}
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}