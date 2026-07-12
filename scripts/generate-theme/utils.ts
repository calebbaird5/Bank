import {
  isScaleVariantThemeObject,
  isThemeObject,
  type ScaleVariant,
  type ThemeObject,
} from "../../config/theme/types";

export function generateScaledVariables(
  variable: string,
  variants: ScaleVariant[],
): string {
  return variants
    .map(({ name, multiplier, base }) => {
      if (base) {
        return `${variable}-${name}: var(${variable.trim()});`;
      }

      return `${variable}-${name}: calc(var(${variable.trim()}) * ${multiplier});`;
    })
    .join("\n");
}

export function generateVariables(
  values: ThemeObject,
  {
    prefix = "  -",
    mode = "values",
    format,
  }: { prefix?: string; mode?: "variables" | "values"; format?: "hsl" } = {},
): string {
  return Object.entries(values)
    .map(([key, value]) => {
      let normalizedKey;

      if (typeof value === "string") {
        if (key === "DEFAULT") normalizedKey = prefix;
        else normalizedKey = `${prefix}-${key}`;
      } else if (isScaleVariantThemeObject(value)) {
        if (mode === "variables") {
          return generateScaledVariables(`${prefix}-${key}`, value.VARIANTS);
        } else return `${prefix}-${key}: ${value.DEFAULT};`;
      } else if (isThemeObject(value)) {
        const nextPrefix = `${prefix}-${key}`;
        return generateVariables(value, {
          prefix: nextPrefix,
          mode,
          format,
        });
      } else {
        throw new Error(
          `Invalid value for key "${key}": ${JSON.stringify(value)}`,
        );
      }

      let normalizedValue =
        mode === "variables" ? `var(${normalizedKey.trim()})` : value;
      if (format === "hsl") {
        normalizedValue = `hsl(${normalizedValue})`;
      }
      return `${normalizedKey}: ${normalizedValue};`;
    })
    .join("\n");
}
