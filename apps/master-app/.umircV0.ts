import { defineConfig } from 'umi';
import { APP_LIST } from './src/constants';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: APP_LIST,
    },
  },
});
