import path from "path";
import type { Plugin } from "vite";
import { generateTheme } from ".";

export function themePlugin(): Plugin {
  return {
    name: "generate-theme",

    buildStart() {
      generateTheme();
    },

    handleHotUpdate({ file, server }) {
      const themePath = path.resolve("config/theme");

      if (!file.startsWith(themePath)) {
        return;
      }

      console.log("Theme changed, regenerating CSS...");
      generateTheme();

      const cssFile = path.resolve("src/styles/generated-theme.css");
      const modules = server.moduleGraph.getModulesByFile(cssFile);

      if (modules) {
        for (const module of modules) {
          server.moduleGraph.invalidateModule(module);
        }

        return [...modules];
      }
    },
  };
}
