const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    semi: [2, 'never'],
    'arrow-parens': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
      },
    ],
    'import/extensions': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'template-curly-spacing': 'off',
    'jsx-quotes': ['error', 'prefer-single'], // comillas simples
    "max-len": ["error", {"code": 500, "tabWidth": 2}], // máximo length por fila
    "no-empty": "error", // no lineas vacías
    "no-multiple-empty-lines": [2, { "max": 1 }], // máximo 1 fila vacía
    "react/prop-types": 0, // los proptypes no son obligatorios, pero es buena práctica
    "react/react-in-jsx-scope": "off", // no es necesario declarar react en un archivo
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }], // nunca se deja espacio despues de las clases
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],// espacios despues del nombre de la función
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-one-expression-per-line": 0, // inhabilita sola una expreción por linea
    "arrow-body-style": 0,
    "react/no-array-index-key": 0,
    "quote-props": [
      "error",
      "as-needed"
    ],
    "no-plusplus": 0,
    "react/no-danger": 0,
    "no-underscore-dangle": 0,
    "camelcase": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "comma-dangle": "off",
    "react/button-has-type": 0,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/jsx-fragments": 0, // no validar fragments
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'indent': [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'newline-per-chained-call': 0,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-no-target-blank': 0,
    'react/jsx-props-no-spreading': 0,
    'react/self-closing-comp': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'app'],
      },
    },
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
