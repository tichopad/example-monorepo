import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Default recommended JS configuration
  pluginJs.configs.recommended,
  // Turns off rules conflicting with Prettier
  eslintConfigPrettier,
];
