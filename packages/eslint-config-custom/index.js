module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'turbo',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  // 此处是supervison的配置（先放这）
  rules: {
    'no-continue': 0,
    'no-control-regex': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/jsx-one-expression-per-line': 0,
    // 'import/no-unresolved': [1, { ignore: ['^@/', '^umi/'] }],
    // 'import/no-extraneous-dependencies': [2, { optionalDependencies: true }],
    'import/no-unresolved': 0, // 我认为应该单独配置
    'import/no-extraneous-dependencies': 0, // 我认为应该单独配置
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'generator-star-spacing': [0],
    'consistent-return': [0],
    'global-require': [0],
    'import/prefer-default-export': [0],
    'react/jsx-no-bind': [0],
    'react/jsx-curly-brace-presence': 0,
    'react/destructuring-assignment': 0,
    'react/prefer-stateless-function': [0],
    'no-else-return': [0],
    'no-restricted-syntax': [0],
    'no-use-before-define': [0],
    'no-nested-ternary': [0],
    'arrow-body-style': [0],
    'import/extensions': [0],
    'no-bitwise': [0],
    'no-cond-assign': [0],
    'require-yield': [1],
    'react/no-did-mount-set-state': [0],
    'linebreak-style': [0],
    'react/jsx-indent': ['error', 2],
    'jsx-a11y/label-has-associated-control': [0],
    'no-plusplus': 0,
    'no-unused-expressions': 0,
    'no-shadow': 0,
    'prefer-template': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'react/no-danger': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-unused-vars': 1,
    'func-names': 0,
    'object-shorthand': 0,
    'no-param-reassign': 0,
    'no-multiple-empty-lines': 0,
    'prefer-destructuring': 0,
  },
  globals: {
    BMapGL: true,
    BMapGLLib: true,
    UMI_ENV: true,
    CURRENT_SYSTEM: true,
    PUBLIC_RESOURCE: true,
    PUBLIC_RESOURCE_NOSLASH: true,
    c: true,
    portalurl: true,
    LOGIN_VERIFY: true,
    DEVICE_VERIFY: true,
    DUAL_LOGIN: true,
    CLOSE_LOGIN_PAGE: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
};
