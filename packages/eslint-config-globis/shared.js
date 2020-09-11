const { rules: baseRules } = require('./rules/base')
const {
  rules: baseTypeScriptRules,
  configFileRules: baseTypeScriptConfigFileRules,
} = require('./rules/typescript')

module.exports = {
  rules: { ...baseRules },
  overrides: [
    {
      // RuleSet for JavaScript
      files: ['**/*.js', '**/*.jsx'],
      extends: ['plugin:prettier/recommended'],
    },
    {
      // RuleSet for TypeScript
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
      ],
      rules: {
        ...baseTypeScriptRules,
      },
      overrides: [
        {
          files: ['**/*.config.*', '**/*.spec.*', '.storybook/**/*'],
          rules: {
            ...baseTypeScriptConfigFileRules,
          },
        },
      ],
    },
  ],
}
