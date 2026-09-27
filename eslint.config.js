import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';

import moduleBoundariesRule from './eslint/module-boundaries-rule.js';

export default defineConfig([
  globalIgnores(['dist', 'dist-app', 'coverage', 'public', 'packages/*/dist', 'apps/*/dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    // Route files keep the component that composes a module page next to `Route`. It must stay
    // unexported so the router plugin can code-split it, and the plugin handles its HMR.
    files: ['src/routes/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    files: [
      'src/modules/**/*.{ts,tsx}',
      'packages/*/src/**/*.{ts,tsx}',
      'apps/*/src/**/*.{ts,tsx}',
    ],
    plugins: {
      local: { rules: { 'module-boundaries': moduleBoundariesRule } },
    },
    rules: {
      'local/module-boundaries': 'error',
    },
  },
]);
