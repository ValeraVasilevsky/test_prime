import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      app: fileURLToPath(new URL("./src/app", import.meta.url)),
      features: fileURLToPath(new URL("./src/features", import.meta.url)),
      pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
      shared: fileURLToPath(new URL("./src/shared", import.meta.url)),
      widgets: fileURLToPath(new URL("./src/widgets", import.meta.url)),
    },
  },

  server: {
    port: 8080,
  },

  base: "/test_prime/",
  build: {
    sourcemap: true,
  },
});
