import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/arc": {
        target: "node_modules/@arc-web/components",
        rewrite: (path) => path.replace(/^\/arc/, ""),
      },
    },
  },
});
