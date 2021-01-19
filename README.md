# expand-cross-env

---

### 描述:

基于[cross-env](https://github.com/kentcdodds/cross-env#readme)的扩展,使之支持文件配置环境变量。

### 安装：

```
npm install @web-growing/expand-cross-env -D
```

### 使用：

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

### 说明：

命令行参数、`.cross-env.js` 、 `.cross-env.json` 可并存。

命名冲突时的优先级: 命令行参数 > `.cross-env.js` > `.cross-env.json`
