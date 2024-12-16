import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // Agar Vite bisa memproses file .glb
});