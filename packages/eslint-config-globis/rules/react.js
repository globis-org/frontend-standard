const rules = {
  // FixMe https://github.com/yannickcr/eslint-plugin-react/issues/1846
  'react/button-has-type': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  'react/jsx-key': ['error', { checkFragmentShorthand: true }],
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
}

module.exports = { rules }
