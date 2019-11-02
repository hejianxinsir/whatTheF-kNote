> 这是 react-app quick start 的翻译。原文见：https://create-react-app.dev/docs/getting-started/

## 开始
```
npx create-react-app my-app
cd my-app
npm start
```
- 如果你用 *npm install -g create-react-app* 全局安装了 *create-react-app*，建议你 *npm uninstall -g create-react-app* 卸载掉，如此方可保证 *npx* 一直是使用最新版的。

- 然后打开 http://localhost:3000/ 看看你的 app。

- 当你准备部署代码了，用 *npm run build* 创建精简版的 bundle 。

### 快速开始
无需下载、配置像 webpack 或 babel 这样的工具。因为这些已经内置了，无需你操心。

### 创建 app
前提是，需要你有 8.10 及以上版本的 Node（server 不需要）。可以使用 nvm（macOS/Linux）或 nvm-windows 在不同项目里切换 Node 版本。

创建新的 app ，在以下方法中选择对应的一个。

**npx**
```
npx create-react-app my-app

// npx 要 npm 5.2+ 版本
```

**npm**
```
npm init react-app my-app

// npm init 要 npm 6+ 版本
```

**Yarn**
```
yarn create react-app my-app

// 需要 Yarn 0.25+ 版本，才能使用 yarn create
```

**Selecting a package manager**
创建新 app 时，CLI 会使用 Yarn 下载依赖（dependencies）。如果你有 Yarn 了，偏要用 npm，你可以在创建 app 命令行后面接 --use-npm，比如：
```
npx create-react-app my-app --use-npm
```

### 输出
选以上某个命令运行，都会在当前目录下生成一个 **my-app** 的目录。在这个目录下，会自动初始化项目并且生成依赖（dependencies）。

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
		├── App.js
		├── App.test.js
		├── index.css
		├── index.js
		├── logo.svg
		└── serviceWorker.js
```

接着你可以 cd my-app 了。

在创建的项目里，你可以使用内置的命令：
```
npm start or yarn start
```
运行上述命令，打开 http://localhost:3000 查看一下。

你改了代码，这个页面就会自动更新。

```
npm test or yarn test
```
不会翻译原文：Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.

```
npm run build or yarn build
```
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.
