import type { ManifestOptions } from "vite-plugin-pwa";
import { light } from "./theme/colors";
import { hslToHex } from "./theme/utils";

if (!light.background || typeof light.background !== "string") {
  throw new Error("Missing or invalid light theme background color.");
} else if (!light.foreground || typeof light.foreground !== "string") {
  throw new Error("Missing or invalid light theme foreground color.");
}
const background = hslToHex(light.background);
const foreground = hslToHex(light.foreground);

export const manifest: Partial<ManifestOptions> = {
  name: "Starter-App",
  short_name: "starter",
  description: "Launging platform for web apps",
  theme_color: background,
  background_color: foreground,
  display: "standalone",
  start_url: "/Vite-React-Tailwind-Chadcn-Starter-App",
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
