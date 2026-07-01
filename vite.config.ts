import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// GitHub Pages base path — change "/my-portfolio/" to match your repo name.
// For a user site (username.github.io) or custom domain, set base: "/".
export default defineConfig({
  base: "/my-portfolio/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
  server: { port: 8080 },
});
