import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mui/material'], // Exclude the problematic dependency
  },
  resolve: {
    alias: {
      '@': '/src',
    },
    define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env, // Optional, if you need `process.env`
  },
  },
})


