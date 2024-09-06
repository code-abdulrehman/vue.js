import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite' // Make sure to import defineConfig from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// Vite configuration
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
})
