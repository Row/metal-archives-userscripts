// eslint-disable-next-line no-undef
module.exports = {
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'env': {
    'es6': true,
    'browser': true,
    'greasemonkey': true,
  },
  'extends': 'eslint:recommended',
  'rules': {
    'no-trailing-spaces': [
      'error',
    ],
    'prefer-template': [
      'error',
    ],
    'indent': [
      'error',
      4,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'space-before-blocks': [
      'error',
    ],
    'space-infix-ops': [
      'error',
    ],
    'keyword-spacing': [
      'error',
    ],
    'eol-last': [
      'error',
    ],
    'no-multiple-empty-lines': [
      'error',
    ],
    'space-in-parens': [
      'error',
    ],
    'array-bracket-spacing': [
      'error',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'max-len': [
      'error',
      { 'code': 100 },
    ],
    'block-spacing': [
      'error',
      'always',
    ],
    'comma-spacing': [
      'error',
    ],
    'computed-property-spacing': [
      'error',
    ],
    'key-spacing': [
      'error',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'semi': [
      'error',
      'always',
    ],
  },
};
