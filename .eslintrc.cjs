module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module', // Still 'module' for the code it lints
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off', // For Vite/React 17+
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['vite.config.ts', 'postcss.config.js', 'tailwind.config.js', '.eslintrc.cjs', 'dist/', 'node_modules/'],
};
