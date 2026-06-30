"use client";

import React, { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.");
      // Reset form (opsional)
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
    <div className="w-full bg-slate-50 min-h-screen relative">
      {/* HEADER SECTION */}
      <section className="bg-[#0F172A] pt-32 pb-24 text-center">
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">Jadwalkan Konsultasi</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg px-6">
            Kerahasiaan Anda adalah prioritas kami. Hubungi tim Satya & Partners untuk peninjauan kasus secara mendalam.
          </p>
        </FadeIn>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-24 container mx-auto px-6 max-w-7xl -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* KIRI: INFO KONTAK & MAPS */}
            <div className="lg:col-span-2 bg-[#0F172A] flex flex-col relative overflow-hidden">
              {/* Ornamen Latar */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0"></div>
              
              <div className="p-10 md:p-12 text-white relative z-10 flex-grow">
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

              {/* EMBED GOOGLE MAPS */}
              <div className="h-64 w-full relative z-10 border-t border-slate-700/50 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.267237090885!2d106.8060383!3d-6.2284589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14555555555%3A0x123456789abcdef!2sSCBD%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor Satya & Partners"
                />
              </div>
            </div>

            {/* KANAN: FORM KONTAK CERDAS */}
            <div className="lg:col-span-3 p-10 md:p-12">
              <h2 className="font-serif text-3xl font-bold text-[#0F172A] mb-2">Tinggalkan Pesan</h2>
              <p className="text-slate-500 mb-8">Silakan isi detail perkara Anda secara singkat. Tim advokat kami akan merespons dalam waktu 1x24 jam kerja.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Field Nama */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Nama Lengkap / Perusahaan</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan nama lengkap Anda" 
                      className={getInputClass(isValidName, touched.name)}
                    />
                    {touched.name && isValidName && <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />}
                    {touched.name && !isValidName && <AlertCircle className="absolute right-4 top-4 text-red-400 w-5 h-5" />}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Field Email */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Alamat Email</label>
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
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Jenis Masalah Hukum</label>
                    <div className="relative">
                      <select 
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${getInputClass(isValidCategory, touched.category)} appearance-none`}
                      >
                        <option value="" disabled>Pilih area praktik...</option>
                        <option value="korporasi">Hukum Korporasi & Komersial</option>
                        <option value="litigasi">Litigasi & Sengketa</option>
                        <option value="hki">Hak Kekayaan Intelektual</option>
                        <option value="ketenagakerjaan">Hukum Ketenagakerjaan</option>
                        <option value="lainnya">Lainnya / Konsultasi Umum</option>
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
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Deskripsi Singkat Perkara</label>
                  <div className="relative">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Jelaskan secara singkat latar belakang masalah hukum yang Anda hadapi..." 
                      rows={5}
                      className={getInputClass(isValidMessage, touched.message)}
                    ></textarea>
                    {touched.message && isValidMessage && <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />}
                  </div>
                  {touched.message && !isValidMessage && (
                    <p className="text-red-400 text-xs mt-1">Pesan minimal 10 karakter.</p>
                  )}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={!isFormValid}
                  className={`w-full font-bold py-4 px-8 rounded-lg transition-all duration-300 ${
                    isFormValid 
                    ? "bg-[#0F172A] hover:bg-[#1a2744] text-white shadow-lg" 
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Kirim Pesan Penawaran
                </button>
                <p className="text-slate-500 text-xs text-center mt-4">
                  Dengan mengirimkan formulir ini, Anda menyetujui kebijakan privasi kami.
                </p>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL FLOATING WHATSAPP BUTTON (FAB) */}
      <a 
        href="https://wa.me/6281234567890?text=Halo%20Satya%20%26%20Partners,%20saya%20butuh%20bantuan%20hukum%20segera." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] bg-[#25D366] hover:bg-[#1ebd5a] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center animate-bounce-slow"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-4 bg-white text-[#0F172A] text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
          Layanan Darurat 24/7
        </span>
      </a>

    </div>
  );
}