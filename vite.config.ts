import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { dirResolver, DirResolverHelper } from 'vite-auto-import-resolvers'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    DirResolverHelper(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [
        // https://github.com/dishait/vite-auto-import-resolvers
        dirResolver(),
        dirResolver({ target: 'src/composables' }),
        dirResolver({ target: 'src/stores' })
      ],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ['src/components', 'src/views', 'src/views/*/components']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    sourcemap: true,
    cssMinify: true,
    minify: 'esbuild'
  }
})
