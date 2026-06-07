"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

// Schema Validasi Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Nama harus diisi minimal 2 karakter." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  subject: z.string().min(5, { message: "Subjek harus diisi minimal 5 karakter." }),
  message: z.string().min(10, { message: "Pesan terlalu singkat (minimal 10 karakter)." }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulasi pengiriman data ke server/API
    setTimeout(() => {
      console.log("Data form terkirim:", values);
      setSuccess(true);
      setIsSubmitting(false);
      reset();
      
      // Sembunyikan pesan sukses setelah 5 detik
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {success && (
        <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-md font-medium">
          Pesan Anda telah berhasil dikirim. Tim legal kami akan segera menghubungi Anda.
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
          <input 
            {...register("name")} 
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" 
            placeholder="John Doe" 
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Email Perusahaan / Pribadi</label>
          <input 
            {...register("email")} 
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" 
            placeholder="john@company.com" 
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Subjek Konsultasi</label>
        <input 
          {...register("subject")} 
          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" 
          placeholder="Cth: Sengketa Kontrak Komersial" 
        />
        {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Detail Kronologi / Kebutuhan</label>
        <textarea 
          {...register("message")} 
          rows={6} 
          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none" 
          placeholder="Jelaskan secara garis besar masalah hukum yang sedang Anda hadapi..."
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
      </div>

      <button 
        disabled={isSubmitting} 
        type="submit" 
        className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-lg transition-all disabled:opacity-70 flex justify-center items-center"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Mengirim Data...
          </span>
        ) : (
          "Kirim Permintaan Konsultasi"
        )}
      </button>
    </form>
  );
}