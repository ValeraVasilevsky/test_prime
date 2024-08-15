import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      app: fileURLToPath(new URL("./src/app", import.meta.url)),
      shared: fileURLToPath(new URL("./src/shared", import.meta.url)),
    },
  },

  server: {
    port: 8080,
  },
});
