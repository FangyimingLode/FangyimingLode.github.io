---
id: React-interview
title: React面试十问

---

## React中key是什么，有什么用处

在diff中告诉React 某些节点渲染稳定

## React中Refs是什么，如何使用，需要注意什么，

## React中生命周期

## React中事件系统

## React-细节setState

## React组件通信

## React中函数组件和class如何选择

## React性能优化方案

## React Diff策略

React Diff策略

1. 在web UI 中DOM节点跨层级的移动操作比较少，可以忽略不计
2. 拥有相同节点的类会渲染相同的组件，拥有不同的组件会渲染不同的组件
3. 对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。（key 的作用

基于上述三个策略，react 对tree diff， component diff，element diff 算法进行了优化

- tree Diff
  React通过updateChildren 对Virtual Dom树进行层级比较，即同一个父节点下的所有子节点。
  当发现节点已经不存在，则该节点对其子节点会被完全删除掉，不会用于进一步的比较
  
  ```js
  updateChildren: function ()
  ```
  
  当出现跨层级移动式，对于不同层级的几点，只有创建和删除操作。
  当跟节点发现子节点中A消失，就会直接销毁A；当D
  发现多了一个子节点A，则会创建新的A作为其子节点

## 总结