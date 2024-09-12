// eslint.config.js
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import reactRefresh from 'eslint-plugin-react-refresh';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
    {
        files: ['src/**/*.{js,jsx,ts,tsx}'], // Specify the files to lint
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 2021,
            sourceType: 'module',
            parserOptions: {
                project: './tsconfig.eslint.json',
                tsconfigRootDir: __dirname,
            },
        },
        plugins: {
            react, // React plugin
            'react-hooks': reactHooks, // React Hooks plugin
            'jsx-a11y': jsxA11y, // JSX Accessibility plugin
            import: importPlugin, // Import plugin
            promise: promisePlugin, // Promise plugin
            'react-refresh': reactRefresh, // React Refresh plugin
        },
        rules: {
            'react/react-in-jsx-scope': 'off', // Disable React in scope for React 17+
            'react-hooks/rules-of-hooks': 'error', // Enforce the Rules of Hooks
            'react-hooks/exhaustive-deps': 'warn', // Warn on missing dependencies
            'jsx-a11y/anchor-is-valid': 'off', // Adjust as needed
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                },
            ],
            'promise/always-return': 'warn', // Promise rules
            'promise/no-return-wrap': 'error', // Prevent wrapping values in promise
        },
        settings: {
            react: {
                version: 'detect', // Automatically detect the React version
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
            },
        },
    },
];
