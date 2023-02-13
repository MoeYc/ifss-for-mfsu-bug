import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // fastRefresh: {},
  dynamicImport: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1',
          entry: 'http://localhost:5001',
        },
        {
          name: 'app2',
          entry: 'http://localhost:5002',
        },
      ],
    },
  },
  // 配置微应用关联的路由
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/app1',
          microApp: 'app1',
        },
        {
          path: '/app2',
          microApp: 'app2',
        },
      ],
    },
  ],
});
