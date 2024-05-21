import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './public/index.html',
    './components/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

