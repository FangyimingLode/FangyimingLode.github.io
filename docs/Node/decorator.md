---
id: DECORATOR 
title: 装饰器
---
概念介绍
> 装饰器模式允许像一个现有对象添加新的功能，同事又不改变其结构。
> 这种类型的设计模式属于结构性模式，他是最为现有的类的一个包装
>
> 这种模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整性的前提下，提供额外的功能
>

## 类与方法的装饰器

```js
function aClass(id) {
    console.log('aClass id', id);
    return (target) => console.log('aClass id', id);
}

function aMethod(id) {
    console.log('aMethod', id);
    return (target, property, descriptor) => console.log('aMethod', id);
}
@aClass(1)
@aClass(2)
class Example {
    @aMethod(1)
    @aMethod(2)
    method(){}
}
```