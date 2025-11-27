import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import { FlatCompat } from "@eslint/eslintrc";

// For extending legacy configs like eslint:recommended and prettier
const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default defineConfig([
  globalIgnores(['dist']),
  // Extend recommended ESLint rules and Prettier
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:prettier/recommended"),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
