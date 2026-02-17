import { defineConfig } from 'eslint/config';
import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default defineConfig([
	// Base configs, later configs override earlier configs
	js.configs.recommended,
	tseslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	react.configs.flat.recommended as ConfigWithExtends,
	react.configs.flat['jsx-runtime'] as ConfigWithExtends,
	reactHooks.configs.flat.recommended,
	eslintConfigPrettier,

	// Custom rules
	{
		settings: {
			react: {
				version: '19.0',
			},
		},
		rules: {
			'no-console': 'warn',
			eqeqeq: 'error',
			'react/prop-types': 'off',
		},
	},

	// Global variables and Parser Options
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.bunBuiltin,
			},
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},

	// Ignore patterns
	{
		ignores: ['**/dist/**', '**/node_modules/**', '**/*.d.ts', '**/*.lock'],
	},
]);
