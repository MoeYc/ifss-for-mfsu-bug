import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login/index.jsx' },
    {
      path: '/',
      component: '@/pages/Security',
      routes: [
        { path: '/', redirect: '/my' },
        // { path: '/home', component: '@/pages/home' },
        { path: '/my', component: '@/pages/my' },
        { path: '/my/a', exact: false, component: '@/pages/my111' },
      ],
    },
    // { path: '/my', component: '@/pages/my' },
  ],
  // fastRefresh: {},
  dynamicImport: {},
  qiankun: {
    slave: {},
  },
});
