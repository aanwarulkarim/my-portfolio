import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// Tailwind should be configured via PostCSS (postcss.config.cjs) and tailwind.config.cjs
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
