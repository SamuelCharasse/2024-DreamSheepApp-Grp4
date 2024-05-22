import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './public/index.html',
    './components/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {
      colors: {customPurple:'#B8B7EE',
    },
  },
  plugins: [],
} satisfies Config

