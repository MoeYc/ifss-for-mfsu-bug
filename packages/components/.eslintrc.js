module.exports = {
  extends: ['@ifss/eslint-config-custom'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-extraneous-dependencies': 0 // 内部库忽略依赖
  }
};
