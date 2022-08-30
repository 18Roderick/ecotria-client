import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */

export default ({ mode }) => {
  return defineConfig({
    server: {
      open: mode !== "production" ? true : false,
      proxy: {
        "/api": {
          target: "http://165.22.24.209:5007/ecotria_api/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [react()],
    preview: {
      port: 3000,
    },
  });
};
