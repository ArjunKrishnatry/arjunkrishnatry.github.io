import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL for GitHub Pages deployment
  // Since this is a user/org site (username.github.io), use '/'
  base: '/',
  build: {
    // Output directory
    outDir: 'dist',
    // Generate source maps for debugging
    sourcemap: false,
  },
  // Development server settings
  server: {
    port: 5173,
    open: true,
  },
})
