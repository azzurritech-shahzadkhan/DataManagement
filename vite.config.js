import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    // eslint-disable-next-line no-irregular-whitespace
    strictPort: true,
// eslint-disable-next-line no-irregular-whitespace
  },
});