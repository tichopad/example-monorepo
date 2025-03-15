import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Default recommended JS configuration
  pluginJs.configs.recommended,
  // Recommended strict TS configuration
  tseslint.configs.strict,
  // Turns off rules conflicting with Prettier
  eslintConfigPrettier,
);
