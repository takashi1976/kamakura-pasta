// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpine from "@astrojs/alpinejs";
import react from "@astrojs/react"; // Reactインテグレーションをインポート
import relativeLinks from "astro-relative-links";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    relativeLinks(),
    react(),
    alpine({ entrypoint: "/src/entrypoint" })
  ]
});
