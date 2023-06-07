/*
  line-breaks:
  linebreak-style': ['error', 'windows'] - (in vscode use crlf in this file)
  (linebreak in windows looks is - \r\n)
  https://eslint.org/docs/latest/rules/linebreak-style
  https://stackoverflow.com/questions/39114446/how-can-i-write-a-eslint-rule-for-linebreak-style-changing-depending-on-windo

  react/jsx-indent - 4 - indents
  'no-unused-vars': 'warn' - use warning when var is unused
  'react/react-in-jsx-scope': 'off' - after React 17, should off
  'react/jsx-props-no-spreading': 'warn' - spread for props is bad, except ui components
  'react/function-component-definition': 'off' -
  means that should use function declaration instead of arrow func in component

  you should add to translate this string:
  'i18next/no-literal-string': ['error', { markupOnly: true }]

  overrides - means that we are for all this files in key "files" override
  rule in key "rules"
*/

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-filename-extension':
      [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'i18next/no-literal-string':
      ['error',
        {
          markupOnly: true,
          ignoreAttribute: ['data-testid', 'to'],
        },
      ],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    'jsx-a11y/no-static-element-interactions': 'off', // semantic filter, use later
    'jsx-a11y/click-events-have-key-events': 'off', // semantic filter, use later
    'react-hooks/rules-of-hooks': 'error', // Check rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Check effect dependencies
    'no-param-reassign': 'off', // allow to change functions args (immer js for slices)
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
