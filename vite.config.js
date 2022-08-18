import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */

export default ({ mode }) => {
  return defineConfig({
    server: {
      open: mode !== "production" ? true : false,
    },
    plugins: [react()],
  });
};
