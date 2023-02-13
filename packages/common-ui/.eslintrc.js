console.log(__dirname, '__dirname__dirname');

module.exports = {
  extends: ['@ifss/eslint-config-custom'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
