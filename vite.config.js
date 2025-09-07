import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// ...existing code...
export default defineConfig({
  base: '/React_Project/', // <-- Set base to repo name
  plugins: [react()],
})
// ...existing code...
