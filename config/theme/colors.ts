import type { ThemeObject } from "./types";

export const light: ThemeObject = {
  background: "44 87% 94%",
  foreground: "192 100% 15%",
  border: "44 20% 78%",
  input: "44 20% 78%",
  ring: "205 69% 49%",
  primary: {
    DEFAULT: "205 69% 49%",
    foreground: "44 87% 94%",
    hover: "205 69% 44%",
    active: "205 69% 38%",
    muted: "205 50% 60%",
    subtle: "205 60% 90%",
  },
  secondary: {
    DEFAULT: "192 35% 42%",
    foreground: "44 87% 94%",
    hover: "192 35% 36%",
    active: "192 35% 30%",
    subtle: "192 35% 88%",
  },
  muted: {
    DEFAULT: "44 25% 88%",
    foreground: "192 12% 40%",
    hover: "44 25% 84%",
    active: "44 25% 78%",
  },
  accent: {
    DEFAULT: "68 100% 30%",
    foreground: "192 100% 15%",
    hover: "68 100% 26%",
    active: "68 100% 22%",
    subtle: "68 60% 88%",
  },
  destructive: {
    DEFAULT: "1 71% 52%",
    foreground: "44 87% 94%",
    hover: "1 71% 46%",
    active: "1 71% 40%",
    subtle: "1 60% 90%",
  },
  surface: {
    DEFAULT: "44 87% 96%",
    hover: "44 30% 90%",
  },
  card: {
    DEFAULT: "45 35% 88%",
    foreground: "192 100% 15%",
  },
  popover: {
    DEFAULT: "45 35% 88%",
    foreground: "192 100% 15%",
  },
} as const;

export const dark: ThemeObject = {
  background: "192 100% 11%",
  foreground: "44 87% 94%",
  border: "192 81% 18%",
  input: "192 81% 18%",
  ring: "205 80% 60%",
  primary: {
    DEFAULT: "205 80% 60%",
    Foreground: "192 100% 11%",
    Hover: "205 80% 55%",
    Active: "205 80% 48%",
    Muted: "205 40% 45%",
    Subtle: "205 30% 20%",
  },
  secondary: {
    DEFAULT: "192 35% 30%",
    foreground: "44 87% 94%",
    hover: "192 35% 36%",
    active: "192 35% 42%",
    subtle: "192 35% 18%",
  },
  muted: {
    DEFAULT: "192 81% 14%",
    foreground: "44 30% 70%",
    hover: "192 81% 18%",
    active: "192 81% 22%",
  },
  accent: {
    DEFAULT: "68 100% 40%",
    foreground: "192 100% 11%",
    hover: "68 100% 35%",
    active: "68 100% 30%",
    subtle: "68 40% 18%",
  },
  destructive: {
    DEFAULT: "1 71% 55%",
    foreground: "192 100% 11%",
    hover: "1 71% 48%",
    active: "1 71% 42%",
    subtle: "1 40% 18%",
  },
  surface: {
    DEFAULT: "192 100% 13%",
    surfaceHover: "192 81% 16%",
  },
  card: {
    DEFAULT: "192 81% 14%",
    foreground: "44 87% 94%",
  },
  popover: {
    DEFAULT: "192 81% 16%",
    foreground: "44 87% 94%",
  },
} as const;
