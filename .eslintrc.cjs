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
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'space-in-parens': ['error', 'never'],
    'no-multiple-empty-lines': 'warn',
    'no-console': 'warn',
    'no-use-before-define': 'error',
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    semi: ['warn', 'never'],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'no-trailing-spaces': 'error',
    'no-multi-str': 'off',
    'import/no-duplicates': 'error',
    quotes: ['error', 'single'],
  },
}
