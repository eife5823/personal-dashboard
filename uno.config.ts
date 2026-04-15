import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerVariantGroup,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      customizations: {
        iconCustomizer(collection, icon, props) {
          if (collection === 'tabler') {
            props.minWidth = '12px'
            props.minHeight = '12px'
          }
        }
      }
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: [
    ['flex-column', 'flex flex-col'],
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
      blue: {
        100: '#14203A'
      },
      purple: {
        100: '#7B90D2'
      }
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    screens: {
      '2xl': '1400px'
    }
  },
  rules: [
    ['bg-forecast', { 
      background: 'linear-gradient(0deg, #0E1421 0%, #1D325F 50%, #0E1421 100%)' 
    }],
    ['bg-favorites', {
      background: 'linear-gradient(0deg, #14213D 50%, #121A2D 100%)' 
    }]
  ]
})
