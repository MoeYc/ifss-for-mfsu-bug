import { defineConfig } from 'father';

const path = require('path');

export default defineConfig({
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
  esm: {},
  cjs: {},
  umd: {},
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  platform: 'browser',
});
