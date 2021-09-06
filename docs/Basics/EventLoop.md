---
id: EventLoop
title: Node与浏览器的事件循环机制
---

## 浏览器中的事git 件循环
aaa
Javascript 代码的执行过程中，除了依靠函数调用栈来搞定函数的执行顺序以外，还依靠任务队列(task queue)来搞定另外一些代码的执行。整个执行过程，我们称为事件循环过程，一个线程中，事件循环是唯一的，但是任务队列可以拥有多个。任务队列又分为 macro-task(宏任务)和 micro-task(微任务)，在最新标准中，他们分别被称为 tasks 和 jobs

macro-task(宏任务) 大概包括：

- script(代码整体)
- setTimeout
- setInterval
- setImmediate
- I/O
- UI render

micro-task(微任务) 大概包括:

- process.nextTick
- Promise.then
- async/await (等价于 Promise.then)
- MutationObserver(HTML5 新特性)

总体结论就是：

- 执行宏任务
- 然后执行宏任务产生的微任务
- 若微任务在执行过程中产生了新的微任务，则继续执行微任务
- 任务执行完毕，再回到宏任务中进行下一轮循环

### Promise

Promise 相对来说比较特殊，在 new Promise() 中传入的回调函数会立即执行的，但是它的 then()方法是在执行栈之后，任务队列之前执行的，它属于微任务

### process.nextTick

process.nextTick 是 Nodejs 提供的一个与任务队列有关的方法，他产生的任务是放在执行栈的尾部，并不属于宏任务和微任务，因此它的任务总是放在所有异步任务之前。

### async/await 执行顺序

我们知道 async 会隐式返回一个 Promise 作为结果的函数，那么可以简单理解为: await 后面的函数在执行完毕后，await 会产生一个微任务(Promise.then 是微任务)。但是我们要注意微任务产生的实际，他是执行完 await 后，直接跳出 async 函数，执行其他代码(此处是协程的运作，A 暂停执行，控制权交给 B)。其他代码执行完毕后，再回到 async 函数去执行剩下的代码，然后把 await 后面的代码注册到微任务队列中，例如:

```js
console.log("script start");
async function async1() {
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2 end");
}
async1();

setTimeout(function () {
  console.log("setTimeout");
}, 0);

new Promise((resolve) => {
  console.log("Promise");
  resolve();
})
  .then(() => {
    console.log("promise1");
  })
  .then(() => {
    console.log("promise2");
  });

console.log("script end2");
// 旧版输出如下，但是请继续看完本文下面的注意那里，新版有改动
// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout
```

分析这段代码:

1. 执行代码，输出 script start
2. 执行 async(), 调用了 async2(), 然后输出 async2 end,此时会保留 async1 的上下文，然后跳出 async1
3. 遇到 setTimeout，产生一个宏任务
4. 执行 Promise，输出 Promise，遇到 then，产生第一个宏任务，继续执行代码，输出 script end
5. 当前宏任务执行完毕，开始执行当前宏任务产生的微任务，输出 promise1，然后又遇到 then，产生一个新的微任务
6. 执行微任务，输出 promise2，此时微任务队列已清空，执行权交给 async1
7. 执行 await 后代码，输出 async1 end
8. 所有微任务队列均已执行完毕，开始执行下一个宏任务，打印 setTimeout

注意
新版 chrome 并不是像上面那么样执行顺序，它优化 await 的执行速度，await 变得更早执行了，输出为

```js
// script start => async2 end => Promise => script end => async1 end => promise1 => promise2 => setTimeout
```

但这种做法其实违反了规范，但是规范也是可以更改的，这是 V8 团队一个 PR，目前新版打印已经修改
分两种情况进行讨论

1. 如果 await 后面直接跟的为一个变量，比如 await 1。这种情况相当于直接把 await 后面的代码注册一个微任务，可以理解为 Promise.then(await 后面的代码)，然后跳出函数去执行其他代码。
2. 如果 await 后面跟的是一个异步函数的调用，比如上面的代码修改为：

```js
console.log("script end");
async function async1() {
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 end");
  return Promise.resolve().then(() => {
    console.log("async2 end1");
  });
}
async1();

setTimeout(() => {
  console.log("setTimeout");
}, 0);
new Promise((resolve) => {
  console.log("Promise");
  resolve();
})
  .then(() => console.log("promise1"))
  .then(() => console.log("promise2"));

console.log("script end");
```

输出为:

```js
// script start => async2 end => Promise => script end => async2 end1 => promise1 => promise2 => async1 end => setTimeout
```

此时执行完 await 并不会吧 await 后面的代码注册到微任务队列中，而是执行完 await 之后，直接跳出了函数，执行其他同步代码，知道其他代码吗执行完毕后，再回到这里讲 await 后面的代码推到微任务队列中执行。注意，此时微任务队列中是有之前注册的其他微任务，所以这种秦光会限制性其他的微任务。可以理解为 await 后面的代码会在本轮循环后面最后被执行

### 优先级

1. 同步任务
2. process.nextTick
3. Promise
4. setTimeout、setInterval
5. setImmediate
6. setTimeout、setInterval time > 0

## nodeJS 中的事件循环

用样式使用 V8 引擎的 Nodejs 也同样有事件循环。事件循环是 Node 处理非阻塞 I/O 的操作机制。Node 中实现事件循环依赖是 libuv 引擎。由于 Node11 之后，事件循环的一些原理发生了改变，

### 宏任务和微任务

macro-task 包括：

- setTimeout
- setInterval
- setImmediate
- script(整体代码)
- I/O 操作

micro-task 包括：

- process.nextTick(与普通微任务有区别，在微任务队列执行之前执行)
- Promise.then 回调

import Mermaid from '../Mermaid';

<Mermaid chart={`
    graph TD
        A[timers] --> B[pending callbacks]
        B[pending callbacks] --> C[idle, prepare]
        a[incoming: data, ect] -- connections --> D[poll]
        C[idle, prepare] --> D[poll]
        D[poll] --> E[close callbacks]
        E[close callbacks] --> A[timers]`} 
/>



因此，上图可以简化为一下流程

1. 输入数据阶段(incoming data)
2. 轮询阶段(poll)
3. 检查阶段(check)
4. 关闭事件回调阶段(close callback)
5. 定时器检测阶段(timers)
6. I/O 事件回调阶段(I/O callbacks)

- timers-定时器检测阶段：本阶段执行 timers 的回调，即 setTimeout, setInterval 里面的回调函数。
- I/O callbacks-I/O 事件回调阶段：执行延迟到下一个循环迭代的 I/O 回调，即上一轮循环中未被执行的一些 I/O 回调
- 闲置阶段(idlle, prepare): 仅供内部使用
- poll-轮询阶段：检索新的 I/O 事件；执行与 I/O 相关的回调
- check-检查阶段：setImmediate 回调函数在此阶段执行
- close callback-关闭事件回调阶段：一些关闭的回调函数如:socket.on('close',...)
