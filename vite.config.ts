import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: ['93d2-2409-40f0-29-f353-8dc8-ef3e-8bd3-df00.ngrok-free.app']
  }
});
