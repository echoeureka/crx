import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from 'rollup-plugin-chrome-extension'
import manifest from './src/manifest'
import zip from 'rollup-plugin-zip'
import { resolve } from 'path'

const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    crx({ manifest }),
    isProd && zip({ dir: 'releases' })
  ]
})
