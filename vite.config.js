import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@emotion/react', replacement: fileURLToPath(new URL('./node_modules/@emotion/react', import.meta.url)) },
      { find: '@emotion/styled', replacement: fileURLToPath(new URL('./node_modules/@emotion/styled', import.meta.url)) },
    ],
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', '@mui/material', '@mui/icons-material'],
  },
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite",
      },
    },
  },

  plugins: [
    react(),
  ],
  base: './',
})
