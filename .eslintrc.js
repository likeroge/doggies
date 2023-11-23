module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'default-param-last': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/no-unresolved': [1, {caseSensitive: false}],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.tsx']}],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
