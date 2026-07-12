import { mkdirSync, writeFileSync } from "fs";
import { theme } from "../../config/theme";
import { generateVariables } from "./utils";
import { isThemeColors } from "../../config/theme/types";
import path from "path";

export function generateTheme() {
  console.log("Generating theme CSS from theme object...");
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
${generateVariables(colors.light, { prefix: "  --color", mode: "variables", format: "hsl" })}
${generateVariables(rest, { mode: "variables" })}
}
`;

  const file = path.resolve("src/styles/generated-theme.css");
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, css);

  console.log("Generated theme CSS");
}
