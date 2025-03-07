import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true, // Mantiene el puerto fijo sin cambios aleatorios
  },
  assetsInclude: ['**/*.glb'], // Asegura que los archivos .glb se incluyan en el build
});
