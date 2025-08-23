import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Dockerコンテナ内からアクセスできるようにする
    port: 5173,      // Viteのデフォルトポート
    proxy: {
      // '/api' へのリクエストをバックエンドに転送する
      '/api': {
        target: 'http://backend:8000',
        changeOrigin: true,
      },
    },
  },
})