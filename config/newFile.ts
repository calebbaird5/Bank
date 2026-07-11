if (!light.background || typeof light.background !== "string") {
  throw new Error("Missing or invalid light theme background color.");
} else if (!light.foreground || typeof light.foreground !== "string") {
  throw new Error("Missing or invalid light theme foreground color.");
}
