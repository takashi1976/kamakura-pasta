// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpine from "@astrojs/alpinejs";
import relativeLinks from "astro-relative-links";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [relativeLinks(), alpine({ entrypoint: "/src/entrypoint" })]
});
