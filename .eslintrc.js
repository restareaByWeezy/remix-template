module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'react-app/jest', 'airbnb-typescript', 'prettier'],
  plugins: ['json-format', 'simple-import-sort'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {},
      typescript: {
        directory: './src',
      },
    },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/extensions': ['off'],
    '@typescript-eslint/no-unused-vars':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': 'error',
    'react/jsx-key': 'error',
    'import/no-extraneous-dependencies': 'off',
  },
  ignorePatterns: [
    '**/__generated__/**/*',
    '**/dist/**/*',
    '.eslintrc.js',
    'cz-config.js',
  ],
};
