---
id: Node01
title: Node 基础api与CLI, 实现CLI工具
---

## fs

fs 是在 node 环境中读取本地文件的 API，分为同步读取和异步读取，同步读取基本不怎么常用，通常来说用异步读取，

```js
const fs = require("fs");

// 同步读取
const data = fs.readFileSync("./conf.js");
console.log("data:", data); // 二进制 Buffer
console.log("data:", data.toString());

// 异步读取
fs.readFile("./conf.js", (err, data) => {
  if (err) throw err;
  console.log("data:", data.toString());
}); // 在node 中有一个约定，错误优先，第一个返回值是error对象
```

如果都用回调的方式，会产生回调地狱，在 node

```js
(async () => {
  const fs = require("fs");
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  const data = await readFile("./conf.js");
  console.log("data", data.toString());
})();
```

promisify API 简写

```js
module.exports = function promisify(fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      args.push(function (err, ...arg) {
        if (err) {
          reject(err);
        } else {
          resolve(...args);
        }
      });
      fn.apply(null, args);
    });
  };
};
```

## Buffer 缓冲区

> 读取数据类型为 Buffer
> 常用在 TCP 流、文件系统操作、网络通信，本地文件，Buffer 主要处理二进制文件的

```js
const buf1 = Buffer.alloc(10); // 分配缓冲区 10 -> 10个字节

const buf2 = Buffer.from("a"); // 开辟一个缓冲区 存储一个字符串
console.log(buf2); // <Buffer> <61>  存储 a的ASCII 码
const buf3 = Buffer.from("中文");
const buf3 = Buffer.concat([buf2, buf3]);
```

## Http

首先创建一个最基本的 http 服务，在浏览器地址栏输入 localhost:3000 就可以看到文字: hello world.

🤔： 这里为什么是 response.end 的方法，如果是`response.body = 'abc'` 不是更加明显吗

```js
const http = require('http');
const server = http.createServe((request, response) => {
    console.log('this is a req');
    response.end('hello world');
    console.log(getPrototypeChain(response))
})
server.listen(3000)
```

我们写一个函数打印一下 response 的原型链

```js
function getPrototypeChain(obj) {
  const protoChain = [];
  while ((obj = Object.getPrototypeOf(obj))) {
    protoChain.push(obj);
  }
  return potoChain;
}
```

继承了 Stream(流) 中的 end 函数
Stream 是用于与node中流数据交互的接口

```js
const fs = require('fs');
const rs2 = fs.createReadStream('./01.jpg');
const ws2 = fs.createWriteStream('./02.jpg');

rs2.pipe(ws2);
// 这里pipe函数是管道，读出图片流，写入文件流
```

我们写一点复杂的代码，创建一个最基础的页面服务

```js
const http = require('http');
const server = http.createServe((request, response) => {
 const {url} = requset;
 if(url === '/' && method === 'GET') {
   fs.readFile('index/hhtml', (err, data) => {
     if(err) {
       response.writeHead(500, {'Content-Type': 'text/plain:charset=utf-8'}); // 解析中文
      response.end('500 系统开小菜')
       return;
     }
     response.statusCode = 200;
     response.setHeader('Content-Type', 'text/html')
     response.end(data)
   });
 } else if(url ==='/users' && method ==='GET') {
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify({name: 'TOM'}))
 } else {
       response.statusCode = 404;
       response.setHeader('Content-Type', 'text/html');
       response.end('404 nopage')
 }
})
server.listen(3000)
```

---

## 实现 CLI 工具

首先： 我们先创建初始化项目，并且创建 bin 文件夹，在里面创建一个 js 脚本

```shell
npm init -y
mkdir ./bin
touch ./bin/index.js
```

让我们你使用 CRA(create react app)或者 Vue 的时候，都会有一个终端界面，接下来我们也打造一个差不多的终端界面像这样

我们需要安装一些包,执行以下命令,并且修改package.json中的bin指定脚本

```shell
npm init -y
npm i commander download-git-repo ora handlebars figlet clear chalk open -s

// package.json
"bin": {
  "Cli": './bin/index.js'
}
```

然后我们要在终端中使用，需要把Link本地的npm

``` shell
npm link
```

如果要在终端输入显示这样的结果，我们需要在 package.json 中注册以下，

然后我们执行`sudo npm link`，成功我们在终端输入命令就会出现上面图中的结果

```js
#!/usr/bin/env node
const program = require("commander");

program.version(require("./package.json").version); //读取package中的版本号

// 当我们在终端驶入

program
  .command("init <name>")
  .description("init project")
  .action((item) => {
    console.log("init" + item);
  });
// 固定写法 process 代表主进程 argv 代表程序中所有参数
Progress.parse(process.argv);
```

在终端直接输cli 会看到相应界面
接下来我们需要打造一个欢迎界面

```js
// /lib/init.js
const { promisify } = require("util");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require('figlet');

const log = content => console.log(chalk.green(content))
module.exports = async (name) => {
  // 打印欢界面
  clear();
  const data = await figlet('Welcome');
  log(data);
};
```

```js
// /bin/index.js
program
  .command('init <name>')
  .description('init project')
  .action(require('../lib/init'))

function classof(value){
  if(typeof value === 'object'){
    return Object.prototype.toString().call(value)
  } else {
    return typeof value
  }
}
```

## 克隆脚手架

/lib/download.js

```js
const { promisify } = require('util')
module.exports.clone = async function(repo, desc) {
  const download = promisify(require('download-git-repo'));
  const ora = require('ora');
  const process = ora('下载.....${repo}')
  process.start();
  await download(repo, desc);
  process.succeed();
}
```

/lib/init.js

```js
const { clone } = require('./download');
module.exports.init = async name => {
  log('🚀创建项目:' + name)
  await clone('url', name)
}
```

下载成功之后我们需要安装依赖

```js
// 对接输出流
const spawn = async (...args) => {
  const { spawn } = require('child_process');
  return new Promise(resolve => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('close', () => {
      resolve()
    })
  })
}

module.exports.init = async name => {
  log('安装依赖')
  await spawn('cnpm', ['install', { cwd: `./${name}`}])
  log(chalk.green(`
  👌安装完成：To get Start:
  ===========================
  cd ${name}
  npm run serve
  ===========================
  `))
}
```

### 启动项目

启动项目之后我们需要打开浏览器, 安装node open 包

```js
const open = require('open')
module.exports.init = async name => {
  open('http://localhost:8080');
  await spawn('npm', ['run', 'serve'], {cwd: `./${name}`})
}
```

### 约定路由功能

- loader文件扫描

- 代码模板渲染
  /lib/refresh.js

  ```js
  const fs = require('fs');
  const handlebars = require('handlebars');
  module.exports = async () => {
  // 获取页面列表
  const list =
    fs.readdirSync('./src/views')
      .filter(v => v !== 'Home.vue')
      .map(v => ({
        name: v.replace('.vue','').toLowerCase(),
        file: v
      }));
  // 生成路由定义
  compile({list}, './src/router.hs','./template/router.js')

  // 生成菜单

  compile({list}, './src/App.vue', './template/App.vue')
  }
  ```

  ```js
  function compile(meta, filePath, templatePath) {
    if(fs.existsSync(templatePath)) {

      const content = fs.readFileSync(templatePath).toString();
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(filePath, result);

    }
    console.log(chalk.green('🚀${filePath} 创建成功'))
  }

  ```

最后修改/bin/index.js里面的文件

```js
program
  .command('refresh')
  .description('refresh routers...')
  .action(require('../lib/refresh'));
```
