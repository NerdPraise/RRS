import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@Pages': resolve(root, 'pages'),
      '@Assets': resolve(root, 'assets'),
      '@Components': resolve(root, 'components/index'),
    },
  },
})
