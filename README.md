# Turborepo Create React App starter


## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [create-react-app](https://create-react-app.dev) app
- `web`: another [create-react-app](https://create-react-app.dev) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `tools`: a lib of utils
- `config`: some common options
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-react` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript -> todo
- [Prettier](https://prettier.io) for code formatting

## Using this example

Run the following command:

```sh
pnpm install
pnpm run dev
```

## todo
- gitigonre 和 eslintignore 处理
- @ifss/config 还能提取更多通用配置（比如ts配置）
- library单测
- 单个仓库启动依赖的turbo配置
- npm私有仓库配置
- ci cd 配置
- 环境变量turbo缓存优化
- 组件库文档地址托管
- ******迁移umi项目到app******

