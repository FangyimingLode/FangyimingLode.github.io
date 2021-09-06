---
id: VueProxy
title: 数据响应式
---

Vue 采用数据劫持的方式，Vue2 和 Vue3 的区别是使用 DefineProperty 和 Proxy，也就是一次一个属性劫持, 一次劫持一个对象。
Proxy 可以更好的拦截对象的行为，Reflect 可以更优雅的操纵对象

- 针对整个对象定制而不是针对对象的属性，所以不需要 keys 进行遍历
- 支持数组，这个 DefineProperty 不具备，省去了重载数组方法这的 hack 过程
- Proxy 的第二个参数可以有 13 种拦截方法，这比起 Object.definePropery()要更加丰富
- Proxy 作为新标准受到浏览器厂商的重担关注和性能优化，相比之下，Object.definePropery()是一个已有的老方法
- 可以通过递归方便的进行对象嵌套

## DefineProperty

```js
let effective;
function effect(fun) {
  effective = fun;
}
function reactive(data) {
  if (typeof data !== "object" || data === null) {
    return data;
  }
  Object.keys(data).forEach((key) => {
    let value = data[key];
    // 递归调用
    reactive(value);
    Object.defineProperty(data, key, {
      emumerable: false,
      configurable: true,
      get: () => {
        return value;
      },
      set: (newVal) => {
        if (newVal !== value) {
          effective();
          value = newVal;
        }
      },
    });
  });
  return data;
}
```

数组的方式

```js
const oldArrayProperty = Array.prototype;
const proto = Object.create(oldArrayProperty);

["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
  (method) => {
    // 函数劫持
    proto[method] = function () {
      effective();
      oldArrayPrototype[method].call(this, ...arguments);
    };
  }
);
// 数组通过数据劫持提供响应式
if (Array.isArray(data)) {
  data.__proto__ = proto;
}
```

## Proxy

```js
function reactive(data) {
  if (typeof data !== "object" || data === null) {
    return data;
  }
  const observed = new Proxy(data, {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);

      return typeof result !== "object" ? result : reactive(result);
    },
    set(target, key, receiver) {
        effective()

        const ret = Reflect.set(target, key, value, receiver)
        return ret
    },
    deleteProperty(target, key) {
        const ret = Reflect.deleteProperty(target, key);
        return ret
    }
  });
  return observed
}
```
