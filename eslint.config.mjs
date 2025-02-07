import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginSortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import eslintPluginNoUnusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    ignores: ['**/*.config.js', '**/*.config.ts'],
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort,
      'sort-destructure-keys': eslintPluginSortDestructureKeys,
      'unused-imports': eslintPluginNoUnusedImports,
    },
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^(react|react-dom)(/.*|$)', '^(next)(/.*|$)', '^@?\\w'],
            ['^(src)(/.*|$)'],
            ['^'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'sort-destructure-keys/sort-destructure-keys': [
        'warn',
        {
          caseSensitive: false,
        },
      ],
    },
  },
  ...compat.config({
    extends: ['next'],
    rules: {
      'react/jsx-sort-props': [
        'warn',
        { callbacksLast: true, shorthandFirst: true },
      ],
    },
  }),
];

export default eslintConfig;
