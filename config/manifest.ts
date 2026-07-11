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
  name: "Bank",
  short_name: "Bank",
  description: "Score keeping tool for the dice game bank",
  theme_color: background,
  background_color: foreground,
  display: "standalone",
  start_url: "/Bank/",
  icons: [
    {
      src: "bank-building-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "bank-building-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
};
