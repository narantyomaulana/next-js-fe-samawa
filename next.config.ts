import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "be-samawa.test",
        port: "", // Jika port kosong, Anda bisa menghapusnya
        pathname: "/**", // Memastikan semua path diizinkan
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Opsional: Anda bisa menambahkan pengaturan lain, seperti svgo
            svgo: true, // Aktifkan optimasi SVG
            prettier: false, // Nonaktifkan format otomatis
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false, // Biarkan viewBox tetap ada untuk fleksibilitas scaling
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
