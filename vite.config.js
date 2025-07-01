import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto hace que Vite escuche en 0.0.0.0
    port: 3000, // Asegura que escuche en el puerto 3000
    watch: {
        usePolling: true // Útil en entornos virtualizados o con volúmenes montados
    }
  },
})
