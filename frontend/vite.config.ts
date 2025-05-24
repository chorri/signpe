import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "../static/dist"),
    emptyOutDir: true,
  },
  base: "/static/dist/",
  server: {
    proxy: {
      '/predict': 'http://localhost:10000',
      '/get_users': 'http://localhost:10000'
    }
  }
});