import { defineConfig } from 'father';

const path = require('path');

export default defineConfig({
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]], // 如果项目antd是全量引入的，则不需配置了,此处作用是当前组件库引入antd时会按需引入
  esm: {},
  cjs: {},
  // umd: {},
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  platform: 'browser',
});
