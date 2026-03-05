import { defineConfig, presetIcons, transformerVariantGroup, presetWind4 } from 'unocss'
// import presetWind4 from '@unocss/preset-wind4'
// import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [presetWind4(), presetIcons()],
  transformers: [transformerVariantGroup()],
  shortcuts: [
    ['flex-center', 'flex items-center justify-center'],
    ['flex-left', 'flex items-center justify-start'],
    ['flex-space-between', 'flex items-center justify-between'],
    ['flex-space-around', 'flex items-center justify-around']
  ],
  theme: {
    colors: {
      white: '#FCFAF2',
      black: '#080808',
      primary: '#060C1A',
      secondary: '#0E1421',
      purple: {
        100: '#7B90D2'
      }
    }
    // breakpoints: {
    //   xs: '320px',
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    //   '2xl': '1536px'
    // }
  }
})
