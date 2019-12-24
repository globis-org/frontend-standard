module.exports = {
  extends: ['airbnb', 'airbnb/hooks', './shared.js'],
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,
    // FixMe https://github.com/yannickcr/eslint-plugin-react/issues/1846
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
  },
}
