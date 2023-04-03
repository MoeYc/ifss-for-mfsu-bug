import { defineConfig } from "umi";
import { winPath } from '@umijs/utils';
import path from 'path';

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  chainWebpack: (config: any) => {
    // console.log(config.toString(), 'config.toString()');
  },
  mfsu: {
    strategy: 'normal',
  },
  monorepoRedirect: {
    srcDir: ['src', '/'],
  },
});
