// @ts-check
import react from '@eslint-react/eslint-plugin'
// @ts-expect-error: don't want to install @types/eslint-config-prettier
import eslintConfigPrettier from 'eslint-config-prettier'
import tsESlint from 'typescript-eslint'

export default [
  react.configs.recommended,
  ...tsESlint.configs.recommendedTypeChecked,
  ...tsESlint.configs.stylisticTypeChecked,
  // ...eslintPluginStorybook.configs['flat/recommended'],
  // eslintPluginStorybookRecommended,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
  },
  {
    rules: {
      '@eslint-react/naming-convention/filename': ['warn', 'kebab-case'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@eslint-react/no-array-index-key': 'off', // 'warn'
      '@typescript-eslint/no-unused-vars': 'off', // 'warn'
    },
  },
  eslintConfigPrettier,
]
