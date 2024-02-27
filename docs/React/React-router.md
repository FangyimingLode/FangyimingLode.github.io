---
id: React-router
title: React-router使用及源码 (类组件)
---
要实现哪些内容？

- BrowserRouter
- Route
- Link
- Switch
- withRouter
- useHistory
- useLocation
- useParams
- useRouteMatch

React-router可以动态路由，也可以嵌套路由，无论我们在那个页面写路由，都可以进行跳转，核心原理基于React的Context,首先我们先创建一个Context文件

```jsx
import React from 'react';
export const RouterContext = React.createContext();
```

接下来，我们要分析react-router实现了什么：

- BrowserRouter: 是一个容器，真正进行有用的是props.children
- Router: 也是一个容器，监听路由的变化，提供history，location，match的上下文内容
- Link: 本质上市一个a标签，我们要将''to''内容替换到 href中，在props.children显示相对的内容
- Switch: 返回第一个匹配的内容
- Route: 渲染组件三种方式 component, render, children
- Redirect: 路由重定向，注意组件的执行顺序（很重要）
- withRouter: 高阶组件，给组件传递路由相关的API方法
- Hooks相关API：函数组件获取history, location, params, match

## Router

这是react-router核心组件之一，监听路由的变化,引起页面的刷新，达到切换地址更新组件渲染,

思考🤔：为什么要在constructor里面监听呢？

源码中已经给出了答案：

> This is a bit of a hack. We have to start listening for location  changes here in the constructor in case there are any `<Redirect>`s  on the initial render. If there are, they will replace/push when they mount and since cDM fires in children before parents, we may get a new location before the `<Router>` is mounted.

大致意思是 因为Redirect的存在，子节点比父节点先要渲染，当路由redirect的时候 如果在componentDidMount写监听函数，会执行失败

```js
import React, { Component } from 'react';
import { RouterContext } from './RouterContext'
export default class Router extends Component {
  static computeRootMatch(pathname) {
    return {path: '/', url: '/', params: {}, isExact: pathname === '/'}
    constructor(props)
      {
        super(props)
        this.state = {
        location: props.history.location
        }
        this.unlisten = props.history.listen(location => {this.setState({location})})
      }
    componentWillUnmout()
      {
      if(this.unlisten) {
        this.unlisten();
      }
    }
    render()
      {
          return (
              <RouteContext.Provider value={{
                  history: this.props.history,
                  localtion: this.state.location,
                  match: Router.computedRootMatch(this.state.location.pathname)
              }}>
                  {this.props.children}
              </RouteContext.Provider>
          )
      }
  }
}
```

思考🤔： 为什么要传递macth呢，

因为在`<Route></Route>`标签中 不写path，他会默认渲染， 在Route组件中要进行判断，如果path有值渲染path， 没有渲染默认的

## BrowserRouter

本质上是基于Router，首先我们要导入hsistory包，这次不做history实现，本质是调用html5 提供的api方法，使用包是为了兼容性更好

```jsx
import React, { Component } from 'react'
import { createBrowrserHistory } from 'history'
export default class BrowserRouter extends Component {
  constructor(props) {
     super(props)
     this.history = createBrowserHistory();
  }
  render() {
      return <Router history={this.history}>{this.props.children}</Router>
  }

}
```

## Link

Link的本质就是一个a标签，目的是跳转地址和显示Link标签里面的内容, 注意如果这里不写点击事件，页面会出现闪烁，也就是a标签原生的事件，我们需要手动禁用，自己写跳转流程，主要是从context中去到history，把链接push进去

```jsx
export default class Link extends Component {
  static contextType = RouterContext
  handleClick = (e) => {
    e.preventDefault()
    this.context.history.push(this.props.to)
  }
  render () {
    const { children, to, ...otherProps} = this.props;
      return (
        <a href={to} {...otherProps} onClick={this.handleClick}>
           {children}
        </a>
      )
  }
}
```

## Route

接收path和component，渲染组件是使用的React.createElement函数，切记 在Route中的component不能写成这样的形式

```jsx
<Route component={() => xxxComponent}>
```

这样在创建组件的时候，会导致页面不停的刷新，组件会不停的重复创建，当传递location发生变化，重新渲染组件

```jsx
export default class Route extends Component {
  render () {
    return (
      <RouterContext.Consumer>
         {
            context => {
               const location = context.location
               const {component, chilren, render, path} = this.props;
               // const match = path ? matchPath(location.pathname, this.props)
               const match = path ? (location.pathname === path) : context.match;
               return match ? React.createElement(component): null;
             }
          }
      </RouterContext.Consumer>
     )
  }
}
```

这里使用`location.pathname === path`,判断的比较粗暴，源码当中使用正则进行校验，详细规则参考源码中的matchPath.js

Route组件中 我们可以传递render, children, component三个渲染组件的方法，他们的优先级是 children >component > render ，如果在组件当中谢了children是必须渲染的，component和render是匹配地址之后才会渲染，t在源码中 最后一个return 使用了三元表达式判断，到底渲染那个， 首先我们要注意的是children 他既可以是函数，也可以是节点 部分代码参考：

```jsx
const props = {...context, match} // 这里传递是为了children组件可以获取到路由的相关方法
return match ?
    (children ?
     (typeof children === 'function' ? children(props): children)
     :(component ? (React.createElement(component, props)) : (render ? (render(props)):null)
     : (typeof children === 'function' ? children(props) : null): null
```

## Switch

switch的是渲染地址匹配的第一个子节点`<Route />`  `<Redirect />`

我们需要遍历switch中的内容，找到第一个匹配的

```jsx
import React, { Component } from 'react'

export default class Swtich extends Component {
  render(){
    return (
      <RouterContext.Consumer>
      {
       context => {
          const location = context.location
          let match = undefined ;// 匹配的match
          let element = undefined; // 匹配的元素
          /* 找到第一个匹配的 React.Children 是react提供的api， 使用这个方法是因为
          *  props.children可以使数组也可以是对象，遍历的时候需要判断，而这个API直接转换成
          *  数组
          **/
          React.Children.forEach(this.props.children, child => {
            if(match === null && React.isValidElement(child)) {
              element = child;
              const { path } = child.props
              match = path ? matchPath(location.pathname, child.props) : context.match
            }
          })

          return match ? React.cloneElement(element, {
           computedMatch:
          }) : null
        }
      }
      </RouterContext.Consumer>
    )
  }
}
```

修改Route的代码,根据computedmatch再判断一次，有computedmatch 优先渲染

```jsx
const match = this.props.computedMatch
  ? this.props.computedMatch
  : path
  ? matchPath(location.pathname, this.props)
  : context.match;
```

## Redirect

redirect组件是路由的重定向，简单的小组件, 这用到了LifeCycle组价，这个组件并不提供任何api，但是需要他的生命周期函数，

```jsx
import React, { Component } from "react";
import { RouterContext } from "./Context";

export default class Redirect extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { to, push = false } = this.props;
          // 渲染阶段，不能再渲染阶段做跳转
          // 获取子节点，但是如果跳转走了 没有子节点会报错
          return (
            <LifeCycle
              onMount={() => {
                console.log(this);
                return push
                  ? context.history.push(to)
                  : context.history.replace(to);
              }}
            ></LifeCycle>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
class LifeCycle extends Component {
  componentDidMount() {
    console.log(this);
    if (this.props.onMount) {
       // 需要当前组件的声明周期
      this.props.onMount.call(this, this);
    }
  }
  render() {
    return null;
  }
}

```

## withRouter

当路由表中使用render函数进行渲染的是，子组件不容易拿到history函数例如:

```jsx
<Route render={() => <XXXcomponent />}></Route>
// 虽然可以用传递参数的形势传递props，那么如果有嵌套每层都需要传递 withRouter就可以解决这个问题
```

withRouter是高阶组件的形势，然后传递history相关的api。

注意： 如果这么写是不会出现页面的，此时的context是最外层的context，也就是Router里面的RouterContext.Provider里面的value match匹配的路由是我们写的默认（上面Router里面的静态函数）

```jsx
const withRouter = (Component) => props => {
  return (
    <RouterContext.Consumner>
       {
          context => <Component {...props} {...context} />
       }
    </RouterContext.Consumner>
  )
}
```

🤔：如何解决呢，暴力的方法我需要找到最近的一层，最近的一层就是我们使用Route组件，那么在那里面再给他包裹一层RouterContext.Provider就可以解决问题了：

```jsx
// Route部分代码
return <RouterContext.Provider value={props}>
    {match ?
    (children ?
     (typeof children === 'function' ? children(props): children)
     :(component ? (React.createElement(component, props)) : (render ? (render(props)):null)
     : (typeof children === 'function' ? children(props) : null)}
  </RouterContext.Provider>
```

以上就是实现react-router 的简单方法，有一些还需待优化，比如LifeCycle里面的生命周期，Redirect里面，

下次更新react-router相关的function 组件使用相关函数

## Hooks相关方法（非常简单）

```js
import {RouterContext} from './Context';
import {useContext} from 'react';
import matchPath from './matchPath';

export function useHistory() {
  return useContext(RouterContext).history;
}
export function useLocation() {
  return useContext(RouterContext).location;
}
export function useRouteMatch(){
  return useContext(RouterContext).match;
}
export function useParams(){
  const match = useContext(RouterContext).match;
  return match ? match.params : {}
}
```
