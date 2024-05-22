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
        LightPurple:'#B8B7EE',
        DarkPurple:'#61609D'
      },
    },
  },
  plugins: [],
}

export default config;