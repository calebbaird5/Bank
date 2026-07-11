import type { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
  name: "Bank",
  short_name: "Bank",
  description: 'Scoring tool for the dice game "Bank"',
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone",
  start_url: "/Bank",
  icons: [
    {
      src: "bank-building-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "bank-building.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
};
