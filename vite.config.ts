import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from 'rollup-plugin-chrome-extension'
import manifest from './src/manifest'
import zip from 'rollup-plugin-zip'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    AutoImport({
      imports: ['vue', 'vue/macros', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts'
    }),
    vue({
      reactivityTransform: true
    }),
    crx({ manifest }),
    isProd && zip({ dir: 'releases' })
  ]
})
