// vite.config.js (or vite.config.ts)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// Import 'fileURLToPath' from 'url' to convert file URL to a path
import { fileURLToPath } from 'url';

// Get the directory name of the current module using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});