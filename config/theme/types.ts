export interface ScaleVariant {
  name: string;
  multiplier?: number;
  base?: boolean;
}

export interface ScaleVariantThemeObject {
  DEFAULT: string;
  VARIANTS: ScaleVariant[];
}

export interface ThemeObject {
  [key: string]: string | ScaleVariantThemeObject | ThemeObject;
}

export function isThemeColors(colors: ThemeObject[string]): colors is {
  light: ThemeObject;
  dark: ThemeObject;
} {
  return (
    typeof colors !== "object" ||
    !("dark" in colors) ||
    !("light" in colors) ||
    typeof colors.light !== "object" ||
    typeof colors.dark !== "object" ||
    !Array.isArray(colors.light) ||
    !Array.isArray(colors.dark)
  );
}

export function isScaleVariantThemeObject(obj: ThemeObject[string]): obj is {
  DEFAULT: string;
  VARIANTS: ScaleVariant[];
} {
  return (
    typeof obj === "object" &&
    "DEFAULT" in obj &&
    typeof obj.DEFAULT === "string" &&
    "VARIANTS" in obj &&
    Array.isArray(obj.VARIANTS) &&
    obj.VARIANTS.every(
      (variant) =>
        typeof variant === "object" &&
        "name" in variant &&
        typeof variant.name === "string",
    )
  );
}

export function isThemeObject(obj: unknown): obj is ThemeObject {
  return (
    typeof obj === "object" &&
    obj !== null &&
    !Array.isArray(obj) &&
    Object.values(obj).every(
      (value) =>
        typeof value === "string" ||
        Array.isArray(value) ||
        isThemeObject(value),
    )
  );
}
