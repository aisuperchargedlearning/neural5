import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    // Ensure environment variables are properly exposed
    'process.env.VITE_API_ENDPOINT': JSON.stringify(process.env.VITE_API_ENDPOINT),
  },
});