/** @type {import('prettier').Config} */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
