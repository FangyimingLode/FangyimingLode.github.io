---
id: ReactBase
title: React基础问题
---
## 1. React中的key的作用
和type值一起标记当前节点的唯一性
```js
function reconcileSingleElement(
    returnFiber, 
    currentFirstChild, 
    element, 
    expirationTime){
    const key = element.key;
}
```
主要判断key的元素是否可以复用，如果不能复用就删除重新创建
如果是两个数组比较 使用map 进行映射 元素的key就是map的key， value是fiber值

## 2. React总refs
1. 可以用过refs 获取组件值比如输入框
## 3. React生命周期
## 4. React事件系统
## 5. React细解setState
## 6. React组件通信
## 7. React函数组件与class组件如何选择
## 8. React性能优化方案
## 9. 总结