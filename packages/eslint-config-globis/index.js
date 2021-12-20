const { rules: reactRules } = require('./rules/react')

module.exports = {
  overrides: [
    {
      // RuleSet for JavaScript
      files: ['**/*.js', '**/*.jsx'],
      extends: ['airbnb', 'airbnb/hooks', './shared.js'],
      rules: {
        ...reactRules,
      },
    },
    {
      // RuleSet for TypeScript
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', './shared.js'],
      rules: {
        ...reactRules,
      },
    },
  ],
}
