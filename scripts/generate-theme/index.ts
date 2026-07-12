import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { theme } from "../../config/theme";
import { generateVariables } from "./utils";
import {
  isScaleVariantThemeObject,
  isThemeColors,
  type ThemeObject,
} from "../../config/theme/types";
import { hslToHex } from "../../config/theme/utils";

export function generateTheme() {
  console.log("Generating Theme...");

  generateThemeCss();
  generateThemeObject();

  console.log("Theme Files Generated Successfully!");
}

function generateThemeCss() {
  const { colors, ...rest } = theme;

  if (!isThemeColors(colors)) {
    throw new Error(
      "Colors object must have both light and dark themes with the same structure.",
    );
  }

  const css = `/* AUTO-GENERATED FILE. DO NOT EDIT. */

:root {
${generateVariables(colors.light, { prefix: "  --color" })}
${generateVariables(rest)}
}

.dark {
${generateVariables(colors.dark, { prefix: "  --color" })}
}

@theme inline {
${generateVariables(colors.light, {
  prefix: "  --color",
  mode: "variables",
  format: "hsl",
})}
${generateVariables(rest, {
  mode: "variables",
})}
}
`;

  writeGeneratedFile("src/styles/generated-theme.css", css);
}

function isHslColor(value: string): boolean {
  return /^\d+\s+\d+%\s+\d+%$/.test(value);
}
function generateToken(value: string, css: string) {
  if (!isHslColor(value)) {
    return {
      value,
      css,
    };
  }

  return {
    value,
    hsl: value,
    hex: hslToHex(value),
    css,
  };
}

function generateTokens(
  obj: ThemeObject,
  prefix = "--",
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const tokenPath = key === "DEFAULT" ? prefix : `${prefix}-${key}`;

      if (typeof value === "string") {
        return [key, generateToken(value, tokenPath)];
      }

      if (isScaleVariantThemeObject(value)) {
        return [
          key,
          {
            DEFAULT: generateToken(value.DEFAULT, tokenPath),
            ...Object.fromEntries(
              value.VARIANTS.map((variant) => [
                variant.name,
                {
                  css: `${tokenPath}-${variant.name}`,
                },
              ]),
            ),
          },
        ];
      }

      return [key, generateTokens(value, tokenPath)];
    }),
  );
}

function generateThemeObject() {
  if (!isThemeColors(theme.colors)) {
    throw new Error(
      "Colors object must have both light and dark themes with the same structure.",
    );
  }
  const tokens = {
    colors: {
      light: generateTokens(theme.colors.light, "--color"),
      dark: generateTokens(theme.colors.dark, "--color"),
    },
    ...generateTokens(
      Object.fromEntries(
        Object.entries(theme).filter(([key]) => key !== "colors"),
      ),
      "--",
    ),
  };

  const output = `/* AUTO-GENERATED FILE. DO NOT EDIT. */

export const theme = ${JSON.stringify(theme, null, 2)} as const;

export const tokens = ${JSON.stringify(tokens, null, 2)} as const;
`;

  writeGeneratedFile("src/theme/generated-theme.ts", output);
}

function writeGeneratedFile(filename: string, content: string) {
  const file = path.resolve(filename);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, content);
}
