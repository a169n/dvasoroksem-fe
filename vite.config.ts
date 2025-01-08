import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";
import vitePluginEnvCompatible from "vite-plugin-env-compatible";

dotenv.config();

export default defineConfig({
  base: "/",
  plugins: [react(), svgr(), vitePluginEnvCompatible()],
  assetsInclude: ["**/*.MP4", "**/*.jpg", "**/*.png", "**/*.gif"],
  server: {
    open: "/",
    port: 3001,
    hmr: true,
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@src": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
    assetsDir: "assets",
    outDir: "dist",
    minify: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});