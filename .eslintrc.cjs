module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        'no-unused-vars': 0,
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': [
      1,
      { allowConstantExport: true },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      2,
      {
        allowExpressions: true,
      },
    ],
    'max-len': [
      1, {
        code: 100,
      },
    ],
    'object-shorthand': 0,
    semi: [2, 'always'],
    quotes: [2, 'single', {
      avoidEscape: true
    }],
    'semi': [2, 'always'],
    'quotes': [2, 'single', 'avoid-escape'],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'eol-last': [2, 'always'],
    indent: [2, 2, { SwitchCase: 1 }],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0 }],
    'no-console': 2,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-function-type': 2,
    'object-curly-newline': [2, {
      'multiline': true,
      'minProperties': 4,
      'consistent': true,
    }],
    'object-property-newline': [2, { 'allowAllPropertiesOnSameLine': true }],
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    'comma-dangle': [2, 'always-multiline'],
    '@typescript-eslint/no-explicit-any': 2,
    "sort-keys": ["error", "asc", { "caseSensitive": true, "natural": false, "minKeys": 2 }],
  },
}