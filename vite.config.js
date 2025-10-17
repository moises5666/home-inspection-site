import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for React. This config enables the React plugin so that
// JSX syntax is transformed properly during both local development and the
// production build on Vercel. No additional configuration is needed.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});