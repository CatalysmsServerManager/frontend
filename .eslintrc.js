module.exports = {
  'extends': [
    'react-app',
    //'plugin:jsx-a11y/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'tsConfigRootDir': './packages/**/tsconfig.json',
  },
  'plugins': [
    'jsx-a11y',
    'react-hooks',
    //'import',
  ],
  'ignorePatterns': [
    'packages/**/node_modules',
    'packages/**/dist',
    'packages/**/build',
    'packages/ui/storybook-static',
    ".eslintrc.js",
    "config-overrides.js",
    "jest.config.js",
  ],
  'rules': {
    'eol-last': 2,
    'eqeqeq': 2,
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1
      }
    ],
    'keyword-spacing': 2,
    'linebreak-style': [
      2,
      'unix'
    ],
    'no-case-declarations': 0,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [
      2,
      {
        'max': 1,
        'maxEOF': 0,
        'maxBOF': 0
      }
    ],
    'no-return-assign': 2,
    'no-trailing-spaces': 2,
    'no-useless-escape': 0,
    'no-var': 2,
    'no-void': 2,
    'semi': [
      2,
      'always'
    ],
    'object-curly-spacing': [
      2,
      'always'
    ],
    'padded-blocks': [
      1,
      'never'
    ],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'no-console': 1,
    'quotes': [
      2,
      'single'
    ],
    'space-before-function-paren': [
      2,
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'space-in-parens': [
      2,
      'never'
    ],
    'space-infix-ops': [
      2,
      {
        'int32Hint': true
      }
    ],
    'strict': 0,
    'no-extraneous-dependencies': 'off',
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 2,
    'jsx-quotes': [
      2,
      'prefer-double'
    ],
    'react/no-array-index-key': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-first-prop-new-line': [
      2,
      'multiline'
    ],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-sort-default-props': 2,
    'react/jsx-sort-props': [
      2,
      {
        'ignoreCase': true
      }
    ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': [
      2,
      {
        'return': 'parens-new-line'
      }
    ],
    'react/prefer-stateless-function': 2,
    'react/prop-types': 0,
    'react/sort-comp': [
      1,
      {
        'order': [
          'lifecycle',
          'render',
          'static-methods',
          'everything-else'
        ]
      }
    ],
    'react/display-name': 0
  }
};
