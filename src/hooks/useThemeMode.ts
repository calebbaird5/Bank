export function useThemeMode() {
  const [htmlElement] = document.getElementsByTagName("html");
  const isDark = htmlElement.classList.contains("dark");
  const themeMode: "dark" | "light" = isDark ? "dark" : "light";

  return {
    isDark,
    themeMode,
    toggleThemeMode: () => htmlElement.classList.toggle("dark"),
    setThemeMode: (mode: "light" | "dark") =>
      mode === "dark"
        ? htmlElement.classList.add("dark")
        : htmlElement.classList.remove("dark"),
  };
}
