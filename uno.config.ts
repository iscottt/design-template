import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex items-center justify-center',
  },
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        script: 'Homemade Apple',
      },
    }),
  ],
  rules: [
    ['text-df', { color: 'var(--text-color)' }],
    ['rounded-card', { 'border-radius': 'var(--card-radius)' }],
    ['rounded-card-inner', { 'border-radius': 'var(--inner-radius)' }],
    ['bg-card', { background: 'var(--magazine-bg)' }],
    ['shadow-card', { 'box-shadow': 'var(--card-inset)' }],
    ['shadow-card-inset', { 'box-shadow': 'var(--inset-shadow)' }],
    ['p-card', { padding: 'var(--card-padding)' }],
  ],
})
