---
id: ReactContext
title: React组件跨层级通信
---

> 1. Props 是自上到下的传递，Context 可以在每个组件都可以访问的变量
>    React 中使用 Context 实现祖代向后代组件跨层级传值，Vue 中的 provide%inject 来源于 Context

## Context API

### <code>React.createContext</code>

创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象组件，这个组件树中离自身最近的那个匹配的<code>Provider</code>中读取当前的 context 值

### <code>React.Provider</code>

Provider 接收一个 value 属性，传递

### <code>class.contextType</code>

```js
// context.js
import React from 'react';

// 创建Context对象
export const ThemeContext = React.createContext({themeColor: 'prink'});
// 真正往下传值的 提供者（生产者）
export const ThemeProvider = ThemeContext.Provider;
// 接收的地方 消费者
export const ThemeConsumer = ThemeContext.Consumer;

```

```js


//  themeProvider.js
export default class ThemeProvider extends React.Component {
  render() {
    return (
        <ThemeProvider value={{theme:'红色'}}>
            <ConsumerPage />
        </ThemeProvider>
    );
  }
}


// consumer.js
export default class ConsumerPage extends React.Component {
    render(){
        return (
            <div>
                <ThemeConsumer>
                    {
                        themeContext => <div>{themeContext.theme}</div>
                    }
                </ThemeConsumer>
            </div>
        )
    }
}


// contextType
// 也是作为ThemeProvider子组件
export default class ContextTypePage extends React.Component {
    static contextType =ThemeContext;
    render(){
        const {theme} = this.contextType;
        return (
            <div>
                <h3>{theme}</h3>
            </div>
        )
    }
}
// 如果不同static
ContextTypePage.contextType = ThemeContext
```
```js
export default function UserPage(props) {
    const ctx = useContext(ThemeContext);
    return(
        <div>
            UserPage
        </div>
    )
}
```
```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

