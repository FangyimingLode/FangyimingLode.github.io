---
id: webpack01
title: webpack工程化实战

---

## Webpack入门

安装webpack并不全局安装，会锁死webpack版本，如果不指定版本会默认安装webpack5

```shell
npm install webpack@4.43.0 webpack-cli@3.3.12 -D
```

创建webpack.config.js

```js
const path = require('path')
module.export = {
    entry: './scr/index.js',
    output: {
        // 绝对路径
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    // 打包模式
    mode: 'development',
}
```

多入口，多出口配置

```js
const path = require('path');
module.exports = {
    entry: {
        main: './src/index.js',
        list: './src/list.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    mode: 'development',
}
```

## webpack核心概念

Bundle <-- chunk <-- module
bundle有几个chunk  就是有几个eval

- chunk: 代码块，一个chunk可能有多个模块组合而成，也用于代码合并与分割
- bundle: 资源经过webpack流程解析编译而成文件
- entry:  顾名思义，就是入口起点，用来高速webpack用哪个文件作为构建依赖图的起点。webpack会根据entry递归的去寻找依赖，每个依赖都将被它处理，最后出去到打包成功中
- output: output配置描述了webpack打包的输出配置，包含输出文件的命名，位置等信息
- loader: 默认情况下，webpack仅支持js或者json文件通过loader，可以让他解析其他类型的文件充当翻译的角色，理论上只要有相应的loader，就可以处理任何类型的文件。
- plugin: loader主要的职责就是让webpack认识更多的文件类型，而plugin的职责则是让其可以控制构建流程，从而执行一些特俗任务。插件的功能非常强大，可以完成各种 各样的任务。
- mode: 4.0开始，webpack支持零配置，皆在开发人员减少上手难度同时加入mode的概念，用于指定打包的目标环境，一遍在打包过程中启用webpack针对不同的环境内置的优化 

```js
//  多页面应用
module.exports = {
    entry: {
        // main chunk名称
        index: './src/index.js',
        list: './src/list.js',
        detail: './src/detail.js'
    }
}
```

一个bundle文件也可以对用多个chunk

```js
entry: [
    './src/index.js',
    './sec/list.js'
]
```

## 样式处理

- 集成css样式处理:css-loader style-loader
- 创建index.css
  
  ```console
  npm instal style-loader css-loader -D 
  ```
  
  ```js
  
  ```

moudle: {
    rules: [
        {
            test: /\.css$/,
            use:['style-loader', 'css-loader']
        }
    ]
}
// 集成sass less

# sass

npm install node-sass sass-loader -D

# less

npm i
npm install less less-loader -D

module: {
    rules: [
        {
            test: /\.scss$
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.less$/
            use: ['style-loader', 'css-loader', 'less-loader']
        }
    ]
}

```
- 集成postcss
  相当于babeljs
  postcss 主要功能只有两个： 
  1. 把css解析成JS可以操作的抽象复发书AST
  2. 调用插件来处理AST并得到结果


经过几个loader处理，css 最终是打包在js中的，运行时会插入到head中，但是一般生产环境会把css
分离出来

### Plugin
- 作用于整个webpack打包过程
- webpack的打包过程是有(生命周期概念)钩子


plugin 可以在webpack运行的某个阶段的时候，帮你做一下事情，类似生命周期的概念，扩展插件，在webpack构建流程中的特定实际注入扩展逻辑改变构建结果或者做你想要的事情
```
