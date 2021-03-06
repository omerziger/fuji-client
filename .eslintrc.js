module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-extra-boolean-cast': 'off',
  },
};
