import type { Config } from 'tailwindcss'

import tailwindTypograph from '@tailwindcss/typography'

const config: Config = {
  content: ['./src/**/index.html', './src/**/*{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypograph],
}

export default config
