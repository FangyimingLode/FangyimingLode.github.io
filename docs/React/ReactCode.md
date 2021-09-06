---
id: ReactCode
title: React原理分析
---

> 本文章的内容只是对 React17 之前写的， 因为新版的 React 的 JSX 解析器不再是创建 createElement，请自行 Debug 查看

## 本次实现 createElement 和 render 函数


createElement 主要接受以下几个参数
- type 节点类型
- config 节点的配置，如：事件，样式等等
- children children属性，这里用一个数组去代替方便遍历
```js
function createElement(type, config, ...children) {
  const props = {
    ...config,
    children: children.map((child) =>
      typeof child === "object" ? child : createTextNode(child)
    ),
  };
  return {
    type,
    props,
  };
}
/**
 * @desc 处理文字类型的节点<div>haha</div>
 * @param {Object} child - 节点信息
*/
function createTextNod(child) {
  return {
    type: "TEXT",
    props: {
      children: "",
      nodeValue: child,
    },
  };
}
```

```js
/**
 * @param {Object} vnode - 虚拟dom节点
 * @param {container} container - 需要插入内容的节点
*/
function render(vnode, container) {
  const node = createNode(vnode);
  container.appendChild(node);
}
/**
 * @desc 虚拟DOM转换成真实节点
 * @param {Object} vnode - 虚拟DOM节点
*/
function createNode(vnode) {
  let node = null;
  const { props, type } = vnode;
  if (type === "TEXT") {
    node = document.createTextNode(props.nodeValue);
  } else if (type === "string") {
    node = document.createElement(type);
  } else {
    node = document.createFragment();
  }
  reconciChildren(node, props.children);
  updateChildren(props, node);
  return node;
}
/**
 * @desc React 协调函数（简单实现）
 * @param node - 真实节点
 * @param children - 当前节点的子节点信息
*/
function reconciChildren(node, children) {
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    render(child, node);
  }
}
/**
 * @desc 更新节点信息
 * @param {Object} props - 传递的props
 * @param {Obejct} node - 需要更新节点信息的位置
*/
function updateChildren(children, node) {
  Object.keys(props)
    .filter((item) => item !== 'children')
    .forEach((item) => {
      node[item] = props[item];
    });
}
```
