import react from 'eslint-plugin-react';
import globals from 'globals';
import browser from './browser.js';

export default [
  ...browser,
  {
    files: ['**/*.{js,jsx}'],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: globals.browser,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      'react/jsx-boolean-value': 'error',
      // C'mon it's just JSX
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      // Just... don't
      'react/prop-types': 'off',
    },
    // Ugh ...
    settings: {
      ...react.configs.flat.recommended.settings,
      react: {
        version: '18',
      },
    },
  },
];
