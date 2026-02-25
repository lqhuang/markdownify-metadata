//@ts-check
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
// @ts-expect it's fine without types
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintReact from '@eslint-react/eslint-plugin'

import autoImports from './.wxt/eslint-auto-imports.mjs'

export default defineConfig(
  autoImports,
  eslintConfigPrettier,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  eslintReact.configs['recommended-type-checked'],
  // tailwind.configs['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@eslint-react/naming-convention/filename': ['warn', 'kebab-case'],

      // FIXME: temporarily disabled for refactoring / optimization
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  { ignores: ['dist/', '.wxt/', '.output/'] },
)
