module.exports = {
  extends: ['airbnb', 'airbnb/hooks', './shared.js'],
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,
  },
}
