import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './public/index.html',
    './components/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {
      colors: {
        customPurple:'#B8B7EE',
      },
    },
  },
  plugins: [],
}

export default config;