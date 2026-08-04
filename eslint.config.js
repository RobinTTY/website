import openWcConfig from '@open-wc/eslint-config';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist/**', 'out-tsc/**', 'custom-elements.json'],
  },
  openWcConfig,
  tseslint.configs.recommended,
  prettierConfig,
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'import-x/no-unresolved': 'off',
      'import-x/extensions': ['error', 'always', { ignorePackages: true }],
    },
  }
);
