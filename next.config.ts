import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tambahkan konfigurasi images di dalam object ini
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Jika Anda memiliki konfigurasi lain sebelumnya, letakkan di bawah sini
  // reactStrictMode: true,
};

export default nextConfig;