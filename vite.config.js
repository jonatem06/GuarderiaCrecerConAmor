// vite.config.js
import tailwindcss from '@tailwindcss/vite'; // Import Tailwind CSS plugin
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // Add Tailwind CSS plugin
  ],
  server: {
    host: true, // Crucial para que Vite escuche en 0.0.0.0
    port: 3000, // Asegura que escuche en el puerto 3000
    allowedHosts: ['*', 'applicable-rs-thailand-cave.trycloudflare.com'],
    watch: {
        usePolling: true // Útil en entornos virtualizados o con volúmenes montados
    },
    
  },
})