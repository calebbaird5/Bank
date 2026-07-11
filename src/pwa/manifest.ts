import type { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
  name: "Starter-App",
  short_name: "starter",
  description: "Launging platform for web apps",
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone",
  start_url: "/",
  icons: [
    {
      src: "app-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "app-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
};
