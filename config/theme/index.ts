import { light, dark } from "./colors";
import type { ThemeObject } from "./types";

export const theme: ThemeObject = {
  colors: { light, dark },
  font: {
    sans: '"Geist Variable", sans-serif',
    heading: '"Geist Variable", sans-serif',
  },
  radius: {
    DEFAULT: "0.625rem",
    VARIANTS: [
      { name: "sm", multiplier: 0.6 },
      { name: "md", multiplier: 0.8 },
      { name: "lg", base: true },
      { name: "xl", multiplier: 1.4 },
      { name: "2xl", multiplier: 1.8 },
      { name: "3xl", multiplier: 2.2 },
      { name: "4xl", multiplier: 2.6 },
    ],
  },
} as const;
