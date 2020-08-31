// ruleset for JavaScript and TypeScript
const baseRules = {
  // FixMe https://github.com/benmosher/eslint-plugin-import/issues/1615
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      mjs: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/order': ['error', { 'newlines-between': 'always' }],
  'import/prefer-default-export': 'off',
}

module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    ...baseRules,
  },
  overrides: [
    {
      // RuleSet for TypeScript
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        ...baseRules,
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'all',
            ignoreRestSiblings: false,
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/unbound-method': 'off',
      },
      overrides: [
        {
          files: ['**/*.config.*', '**/*.spec.*', '.storybook/**/*'],
          rules: {
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
          },
        },
      ],
    },
  ],
}
