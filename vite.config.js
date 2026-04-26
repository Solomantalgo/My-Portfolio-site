import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-connect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/connect' || req.url === '/connect/') {
            req.url = '/connect/index.html';
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        connect: resolve(__dirname, 'connect/index.html'),
      },
    },
  },
})
