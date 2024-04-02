import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      manifest: {
        name: "Duplo App",
        short_name: "duplo",
        description: "duplo",
        icons: [
          {
            src: "./public/images/vite.svg",
            type: "image/svg",
            sizes: "192x192"
          },
          {
            src: "./public/images/vite.svg",
            sizes: "512x512",
            type: "image/svg"
          },
          {
            src: "./public/images/vite.svg",
            sizes: "512x512",
            type: "image/svg",
            purpose: "any maskable"
          }
        ],
        start_url: "index.html",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        lang: "ja"
      }
    })
  ],
})