module.exports = {
  overrides: [
    {
      // RuleSet for JavaScript
      files: ['**/*.js', '**/*.jsx'],
      extends: ['airbnb/base', './shared.js'],
    },
    {
      // RuleSet for TypeScript
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['airbnb-typescript/base', './shared.js'],
    },
  ],
}
