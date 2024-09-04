import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
const { defineConfig } = require('@vue/cli-service');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://bb.vdev.tech',
        changeOrigin: true,  // Handles the origin of the host header to the target URL
        secure: false,       // If you're targeting an HTTPS server and need to accept self-signed certificates
        pathRewrite: { '^/api': '/api' },  // Strips the '/api' prefix when forwarding the request
      }
    }
  }
})
