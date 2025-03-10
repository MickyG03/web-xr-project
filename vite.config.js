import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/web-xr-project/", // Match your repo name for GitHub Pages
  build: {
    target: "esnext", // Needed for WebXR
  },
});
