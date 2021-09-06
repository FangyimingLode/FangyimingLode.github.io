---
id: KOA2
title: KOA2 源码
---

我们来一起实现一下 KOA2 的简单源码，KOA 实际上是对一个 node http 服务的一个上层封装，eggJs，是加入一些企业上使用的东西，我们来回顾一下上次使用 node 的 http 服务的简单代码

```js
const http = require('http');
const server = http.createServe((request, response) => {
    console.log('this is a req');
    response.end('hello world');
})
server.listen(3000)
```

这样我们就在 3000 端口监听了一个 node 服务
我们在实现一下 KOA 的核心功能

- context 上下文

1. 首先我们写个简单的 koa 的服务分析需求 (万年不变的 hello world)

```js
const Koa = require("Koa");
const app = new Koa();

app.use((ctx) => {
  ctx.body = "hello world";
});

app.listen(3000, () => {
  console.log("监听3000端口");
});
```

很显然，我们需要实现一个 Koa 的类，这个类里面有两个函数

- listen
- 用来监听端口，使用 http 模块，然后吧 req, res 传递到出来，当时 koa 里面使用 context 作为上下文，我们得把 req, res 挂在到 context 对象上面，
- use 存储函数，listen 的时候执行
  我们先不考虑 context 对象，实现一个版本

```js
const http = require("http");
class Koa {
  listen(...args) {
    const server = http.createServer((req, res) => {
      this.callback(req, res);
    });
  }
  use(callback) {
    this.callback = callback;
  }
}
module.exports = Koa;
```

然后前面的例子需要修改一下

```js
app.use((req, res) => {
  req.writeHead(200);
  req.end("hello world");
});
```

实现 context 上下文
这里是类似 Vue 的数据劫持，这里使用 get set 语法
创建 3 个文件，分别是 request.js, response.js, context.js

```js
module.export ={
    get url () {
        return this.req.url
    },
    get method() {
        return this.req.method.toLowerCase();
    }
}
```

```js
module.export = {
    get body(){
        return this._body;
    },
    set body(val) {
        this._body = val;
    },
}

```

```js
module.export = {
  get url() {
    return this.request.url;
  },
  get body() {
    return this.response.body;
  },
  set body(val) {
    this.response.body = val;
  },
  get method() {
    return this.requset.method;
  },
};
```
