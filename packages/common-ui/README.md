# ui
 ### 如果自己项目是babel编译，可安装 babel-plugin-import 实现按需引入
  [
    'import',
    {
      "libraryName": "@ifss/ui",
      "libraryDirectory": "esm",   // default: lib
      "style": (name: string, file: Object) => {
        return `${name}/index.less`;
      }
    }
  ]
