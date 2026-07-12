import type { ThemeObject } from "./types";

/**
 * Solarized Light
 *
 * Based on:
 * base3  #fdf6e3
 * base2  #eee8d5
 * base1  #93a1a1
 * base0  #839496
 * base00 #657b83
 * base01 #586e75
 *
 * Accents:
 * blue    #268bd2
 * cyan    #2aa198
 * green   #859900
 * yellow  #b58900
 * orange  #cb4b16
 * red     #dc322f
 */
export const light: ThemeObject = {
  background: "44 87% 94%", // base3
  foreground: "192 13% 40%", // base00

  border: "44 20% 82%", // base2/base1
  input: "44 20% 82%",
  ring: "205 69% 49%", // blue

  primary: {
    DEFAULT: "205 69% 49%", // blue
    foreground: "44 87% 94%",
    hover: "205 69% 43%",
    active: "205 69% 36%",
    muted: "205 40% 70%",
    subtle: "205 50% 90%",
  },

  secondary: {
    DEFAULT: "175 59% 40%", // cyan
    foreground: "44 87% 94%",
    hover: "175 59% 34%",
    active: "175 59% 28%",
    subtle: "175 40% 88%",
  },

  muted: {
    DEFAULT: "44 25% 88%", // base2
    foreground: "192 13% 52%", // base0
    hover: "44 25% 84%",
    active: "44 25% 78%",
  },

  accent: {
    DEFAULT: "68 100% 30%", // green
    foreground: "44 87% 94%",
    hover: "68 100% 25%",
    active: "68 100% 20%",
    subtle: "68 50% 88%",
  },

  destructive: {
    DEFAULT: "1 71% 52%", // red
    foreground: "44 87% 94%",
    hover: "1 71% 46%",
    active: "1 71% 40%",
    subtle: "1 60% 90%",
  },

  surface: {
    DEFAULT: "44 35% 96%", // base3
    hover: "44 30% 90%",
  },

  card: {
    DEFAULT: "44 35% 91%", // base2
    foreground: "192 100% 15%", // base01
  },

  popover: {
    DEFAULT: "44 35% 91%",
    foreground: "192 100% 15%",
  },

  selection: "44 20% 82%",
} as const;

/**
 * Solarized Dark
 *
 * Based on:
 * base03 #002b36
 * base02 #073642
 * base01 #586e75
 * base00 #657b83
 * base0  #839496
 * base1  #93a1a1
 */
export const dark: ThemeObject = {
  background: "192 100% 11%", // base03
  foreground: "194 13% 52%", // base0

  border: "192 50% 22%", // base02
  input: "192 50% 22%",
  ring: "205 80% 60%",

  primary: {
    DEFAULT: "205 80% 60%", // blue
    foreground: "192 100% 11%",
    hover: "205 80% 66%",
    active: "205 80% 52%",
    muted: "205 40% 45%",
    subtle: "205 40% 20%",
  },

  secondary: {
    DEFAULT: "175 59% 45%", // cyan
    foreground: "192 100% 11%",
    hover: "175 59% 52%",
    active: "175 59% 38%",
    subtle: "175 40% 18%",
  },

  muted: {
    DEFAULT: "192 50% 18%", // base02
    foreground: "194 13% 65%", // base1
    hover: "192 50% 23%",
    active: "192 50% 28%",
  },

  accent: {
    DEFAULT: "68 100% 40%", // green
    foreground: "192 100% 11%",
    hover: "68 100% 48%",
    active: "68 100% 32%",
    subtle: "68 40% 16%",
  },

  destructive: {
    DEFAULT: "1 71% 55%", // red
    foreground: "192 100% 11%",
    hover: "1 71% 62%",
    active: "1 71% 45%",
    subtle: "1 45% 18%",
  },

  surface: {
    DEFAULT: "192 90% 15%", // between base03/base02
    hover: "192 80% 19%",
  },

  card: {
    DEFAULT: "192 70% 17%", // base02-ish
    foreground: "194 13% 65%",
  },

  popover: {
    DEFAULT: "192 70% 19%",
    foreground: "194 13% 65%",
  },

  selection: "192 50% 22%",
} as const;
