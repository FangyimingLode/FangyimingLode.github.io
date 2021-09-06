---
id: this
title: this
---
## This 五种绑定形式

```js
function foo(){
    'use strice';
    console.log(this.a)
}
var a = 2;
foo()
```
```js
function foo(){
    console.log(this.a)
}
var a =2 ;
(function(){
    'use strict';
    foo()
})()
```
### 隐式绑定
```js
function foo(){
    console.log(this.a)
}
var obj = {
    a: 2,
    foo
}
obj.foo()
```
### 显示绑定
```js
function foo(){
    console.log(this.a)
}
var obj = {
    a: 2
}
foo.call(obj)
```

### 手写一个new
```js
function create(){
    const obj = new Object();
    const con = [].shift().call(arguments);
    obj.__proto__ = con.prototype;
    const ret = con.apply(obj, arguments);
    return ret instanceof  Object ? ret : obj
}
```