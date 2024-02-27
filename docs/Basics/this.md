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

function create(fn, ...args){
    const obj = Object.create(fn.prototype)
    const result = fn.apply(obj, args)
    if(result && typeof result === 'Object' || typeof result === 'function') {
        return result
    }
    return obj
}
```

### 组合继承

这种继承会调用两次 Person，在 new Person 一次，在 Student 里面 apply 一次
```js
function Person(name, age) {
    this.name = name;
    this.arge = age
}

Person.prototype.test = 'this is a test;';
Person.prototype.testFunc = function (){
    console.log('1')
}

function Student(name, age, gender, score) {
    Person.apply(this, [name, age]);
    this.gender = gender;
    this.score = score;
}

Student.prototype = new Person()
Student.prototype.testStuFunc = function (){
    console.log('2')
}
```

### 寄生组合继承(圣杯继承)

```js
function inherit(target, origin) {
    function F(){}
    F.prototype = origin.prototype;
    target.prototype = new F();
    target.prototype.constructor = target
}

function New (fn){
    const result = Object.create();
    that.fn = this
    if()
}
```
