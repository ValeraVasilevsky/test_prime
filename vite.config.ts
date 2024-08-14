import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
      utils: fileURLToPath(new URL("./src/utils", import.meta.url)),
    },
  },

  server: {
    port: 8080,
  },
});
