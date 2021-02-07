# expand-cross-env

---

### 描述:

基于[cross-env](https://github.com/kentcdodds/cross-env#readme)的扩展,使之支持文件配置环境变量。

### 安装：

```
npm install @web-growing/expand-cross-env -D
```

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

### 说明：

命令行参数、`.cross-env.js` 、 `.cross-env.json` 可并存。

命名冲突时的优先级: 命令行参数 > `.cross-env.js` > `.cross-env.json`
