//@ts-check
import tsESLint from 'typescript-eslint'
// @ts-expect it's fine without types
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintReact from '@eslint-react/eslint-plugin'

export default tsESLint.config(
  eslintConfigPrettier,
  tsESLint.configs.recommendedTypeChecked,
  tsESLint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
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
  { ignores: ['dist/**'] },
)
