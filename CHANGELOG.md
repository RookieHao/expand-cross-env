# CHANGELOG

最新使用方式请参考[README](./README.md)。

## 2021-01-19 (V1.0.0-alpha.1)

### 使用方法：

- 命令行：

  > 同 [cross-env](https://github.com/kentcdodds/cross-env#readme)

- 配置文件

  > 默认启用，如需禁用配置文件功能可在命令行加入 `--nof`;

  ```shell
  exp-cross-env --nof NODE_ENV=development ...
  ```

  > 项目根目录创建 `.cross-env.js` 或者 `.cross-env.json` 文件

  配置文件特殊属性说明：

  - resolveContext: 路径解析上下文, 用来配合 pathVars 使用;

    默认值: process.cwd();

  - pathVars{ key: value } : 变量值为路径时使用;

    例如:

    ```
    module.exports = {
      resolveContext: "",
      pathVars: {
        renderDir: "./renderer"
      }
    }
    ```

    pathVars 中的 value 为相对路径时, 会使用 `path.resolve(resolveContext,value)`解析。

## 2021-02-7 (V1.0.0-alpha.2)

### 修改记录：

- 配置文件参数配置修改:
  - 支持以函数的方式设置值。
  - 移除 resolveContext、pathVars 属性,推荐采用函数的方式。
  - 字符串类型的值不再进行额外处理。

### 修改目的：

- 简化配置文件数据结构,便于使用和理解。

### 使用方法：

- 命令行：

  > 同 [cross-env](https://github.com/kentcdodds/cross-env#readme)

- 配置文件

  > 默认启用，如需禁用配置文件功能可在命令行加入 `--nof`;

  ```shell
  exp-cross-env --nof NODE_ENV=development ...
  ```

  > 项目根目录创建 `.cross-env.js` 或者 `.cross-env.json` 文件

  js 文件中支持函数类型的值,函数参数为 nodejs 的 path 模块

  **For Example :**

  ```
  module.exports = {
    NODE_ENV: "development",
    COMAND: "build",
    filePath: path => path.resolve(__dirname,"xxx.ext"),

    ...

  }
  ```
