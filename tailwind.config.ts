import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'instasany-brand': '#2A4B46',
        'instasany-brand-default': '#CCEC60',
        'instasany-brand-light': '#5D8A83',
        'instasany-brand-dark': '#1D3531',
        'instasany-neutral-100': '#0A1D2E',
        'instasany-neutral-200': '#29394A',
        'instasany-neutral-300': '#475567',
        'instasany-neutral-400': '#7C8999',
        'instasany-neutral-500': '#A6AEB8',
        'instasany-neutral-600': '#CDD1D6',
      },

      maxWidth: {
        grid: '77.5rem', // 1240px
        hero: '66rem', // 1156px
        'grid-icons': '53.4375rem', // 855px
        'grid-mockups': '59.8125rem', // 957px
      },

      height: {
        hero: '54.625rem',
      },

      backgroundImage: {
        hero: 'url(/images/instasany/bg-hero.svg)',
      },
    },
  },
  plugins: [],
}
export default config
