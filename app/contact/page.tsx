"use client";

import React, { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  // 1. STATE UNTUK FORM CERDAS
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    category: false,
    message: false,
  });

  // 2. LOGIKA VALIDASI
  const isValidName = formData.name.length >= 3;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isValidCategory = formData.category !== "";
  const isValidMessage = formData.message.length >= 10;

  const isFormValid = isValidName && isValidEmail && isValidCategory && isValidMessage;

  // Handler perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler blur (saat user selesai mengetik dan pindah kolom)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // 3. HANDLER SUBMIT UNTUK DIRECT KE WHATSAPP (REVISI ENCODE URL)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isFormValid) {
      // Nomor WA Admin (Gunakan format internasional tanpa tanda +)
      const adminPhone = "6287788216357"; 
      
      // Template pesan murni (lebih mudah dibaca dan diatur)
      const textMessage = `Halo *OBH & Partners*, saya ingin menjadwalkan konsultasi. Berikut adalah detail data diri dan perkara saya:

*Nama / Perusahaan:* ${formData.name}
*Email:* ${formData.email}
*Kategori Masalah:* ${formData.category}

*Deskripsi Perkara:*
${formData.message}

Mohon arahan lebih lanjut. Terima kasih.`;

      // ENCODE: Memastikan karakter seperti spasi, enter, atau simbol (&, @) aman masuk ke dalam URL
      const encodedMessage = encodeURIComponent(textMessage);

      // Buat URL WhatsApp API
      const waUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

      // Buka tab baru ke WhatsApp
      window.open(waUrl, "_blank");

      // Reset form setelah berhasil diarahkan
      setFormData({ name: "", email: "", category: "", message: "" });
      setTouched({ name: false, email: false, category: false, message: false });
    }
  };

  // Helper untuk menentukan warna border berdasarkan validasi
  const getInputClass = (isValid: boolean, isTouched: boolean) => {
    const base = "w-full p-4 rounded-lg bg-slate-50 border outline-none transition-all duration-300";
    if (!isTouched) return `${base} border-slate-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]`;
    if (isValid) return `${base} border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-green-50/30`;
    return `${base} border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 bg-red-50/30`;
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen relative selection:bg-[#D4AF37] selection:text-[#0F172A]">
      
      {/* HEADER SECTION */}
      <section className="bg-[#0F172A] pt-32 pb-24 text-center">
        <FadeIn>
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">
            Layanan Terpadu
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">Jadwalkan Konsultasi</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg px-6 leading-relaxed">
            Kerahasiaan Anda adalah prioritas absolut kami. Hubungi tim OBH & Partners untuk peninjauan kasus secara mendalam dan strategis.
          </p>
        </FadeIn>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-24 container mx-auto px-6 max-w-7xl -mt-10 relative z-10">
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              
              {/* KIRI: INFO KONTAK & MAPS */}
              <div className="lg:col-span-2 bg-[#0F172A] flex flex-col relative overflow-hidden">
                {/* Ornamen Latar */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl z-0"></div>
                <div className="absolute top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl z-0"></div>
                
                <div className="p-10 md:p-12 text-white relative z-10 flex-grow">
                  <h2 className="font-serif text-3xl font-bold mb-8">Informasi Kontak</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors">
                        <MapPin className="text-[#D4AF37]" size={20} />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Kantor Utama</h4>
                        <p className="text-slate-400 leading-relaxed text-sm">Gedung OBH Tower, Lt. 15<br/>Jl. Jend. Sudirman Kav. 52-53, SCBD<br/>Jakarta Selatan 12190</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors">
                        <Phone className="text-[#D4AF37]" size={20} />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Telepon Resmi</h4>
                        <p className="text-slate-400 text-sm">+62 21 555 0192 (Hunting)<br/>Senin - Jumat, 08:00 - 17:00 WIB</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors">
                        <Mail className="text-[#D4AF37]" size={20} />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Email Korporat</h4>
                        <p className="text-slate-400 text-sm">contact@obhpartners.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EMBED GOOGLE MAPS */}
                <div className="h-64 w-full relative z-10 border-t border-slate-700/50 grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.267237090885!2d106.8060383!3d-6.2284589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14555555555%3A0x123456789abcdef!2sSCBD%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Kantor OBH & Partners"
                  />
                </div>
              </div>

              {/* KANAN: FORM KONTAK CERDAS */}
              <div className="lg:col-span-3 p-10 md:p-14 lg:p-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Tinggalkan Pesan</h2>
                <p className="text-slate-500 mb-10 text-lg">Silakan isi detail perkara Anda secara singkat. Data ini akan otomatis diteruskan ke WhatsApp representatif kami.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Field Nama */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-slate-700 mb-2 tracking-wide uppercase">Nama Lengkap / Perusahaan</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Masukkan nama entitas hukum atau personal Anda" 
                        className={getInputClass(isValidName, touched.name)}
                      />
                      {touched.name && isValidName && <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />}
                      {touched.name && !isValidName && <AlertCircle className="absolute right-4 top-4 text-red-400 w-5 h-5" />}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Field Email */}
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2 tracking-wide uppercase">Alamat Email</label>
                      <div className="relative">
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="email@perusahaan.com" 
                          className={getInputClass(isValidEmail, touched.email)}
                        />
                        {touched.email && isValidEmail && <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />}
                        {touched.email && !isValidEmail && <AlertCircle className="absolute right-4 top-4 text-red-400 w-5 h-5" />}
                      </div>
                    </div>

                    {/* Dropdown Kategori */}
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2 tracking-wide uppercase">Jenis Masalah Hukum</label>
                      <div className="relative">
                        <select 
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${getInputClass(isValidCategory, touched.category)} appearance-none font-medium text-slate-700`}
                        >
                          <option value="" disabled>Pilih area praktik...</option>
                          <option value="Hukum Korporasi & Komersial">Hukum Korporasi & Komersial</option>
                          <option value="Litigasi & Sengketa">Litigasi & Sengketa</option>
                          <option value="Hak Kekayaan Intelektual">Hak Kekayaan Intelektual</option>
                          <option value="Hukum Ketenagakerjaan">Hukum Ketenagakerjaan</option>
                          <option value="Lainnya / Konsultasi Umum">Lainnya / Konsultasi Umum</option>
                        </select>
                        {touched.category && isValidCategory && <CheckCircle2 className="absolute right-10 top-4 text-green-500 w-5 h-5" />}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Field Pesan */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-slate-700 mb-2 tracking-wide uppercase">Deskripsi Singkat Perkara</label>
                    <div className="relative">
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jelaskan secara singkat latar belakang masalah hukum yang Anda hadapi. Pesan minimal 10 karakter..." 
                        rows={6}
                        className={getInputClass(isValidMessage, touched.message)}
                      ></textarea>
                      {touched.message && isValidMessage && <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />}
                    </div>
                    {touched.message && !isValidMessage && (
                      <p className="text-red-400 text-xs mt-2 font-medium flex items-center gap-1"><AlertCircle size={14}/> Pesan terlalu singkat (minimal 10 karakter).</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={!isFormValid}
                      className={`w-full font-bold py-5 px-8 rounded-xl transition-all duration-500 flex items-center justify-center gap-3 ${
                        isFormValid 
                        ? "bg-[#0F172A] hover:bg-[#D4AF37] text-white hover:text-[#0F172A] shadow-xl hover:shadow-2xl hover:-translate-y-1" 
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      Kirim Pesan ke WhatsApp <MessageCircle size={20} className={isFormValid ? "text-green-400 group-hover:text-white" : ""} />
                    </button>
                    <p className="text-slate-500 text-sm text-center mt-6">
                      Tindakan ini akan membuka aplikasi WhatsApp Anda. Kerahasiaan data dijamin sepenuhnya.
                    </p>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* GLOBAL FLOATING WHATSAPP BUTTON (FAB) */}
      <a 
        href="https://wa.me/6287788216357?text=Halo%20OBH%20%26%20Partners,%20saya%20butuh%20bantuan%20hukum%20segera." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] bg-[#25D366] hover:bg-[#1ebd5a] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center animate-bounce-slow"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-4 bg-white text-[#0F172A] text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap border border-slate-100">
          Layanan Darurat 24/7
        </span>
      </a>

    </div>
  );
}