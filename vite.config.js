// vite.config.js
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    host: true, // Crucial para que Vite escuche en 0.0.0.0
    port: 3000, // Asegura que escuche en el puerto 3000
    allowedHosts: ['*', 'receive-enrolled-lying-start.trycloudflare.com'],
    watch: {
        usePolling: true // Útil en entornos virtualizados o con volúmenes montados
    },
    
  },
})