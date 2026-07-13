import type { ManifestOptions } from "vite-plugin-pwa";
import { dark } from "./theme/colors";
import { hslToHex } from "./theme/utils";

if (!dark.background || typeof dark.background !== "string") {
  throw new Error("Missing or invalid dark theme background color.");
} else if (!dark.foreground || typeof dark.foreground !== "string") {
  throw new Error("Missing or invalid dark theme foreground color.");
}
const background = hslToHex(dark.background);
const foreground = hslToHex(dark.foreground);
console.log("background", background, "foreground", foreground);

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
