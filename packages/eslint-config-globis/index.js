const { rules: reactRules } = require('./rules/react')

module.exports = {
  rules: {
    ...reactRules,
  },
  overrides: [
    {
      // RuleSet for JavaScript
      files: ['**/*.js', '**/*.jsx'],
      extends: ['airbnb', 'airbnb/hooks', './shared.js', 'prettier/react'],
    },
    {
      // RuleSet for TypeScript
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        './shared.js',
        'prettier/react',
      ],
    },
  ],
}
