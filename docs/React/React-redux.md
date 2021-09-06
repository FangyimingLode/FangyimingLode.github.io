---
id: redux_React-redux
title: redux和React-redux
---

## redux 核心实现

- 存储状态 state
- 获取状态 getState
- 更新状态 dispatch
- 变更订阅 subscribe
- 组合 reducer combineReducers
- 中间件 applyMiddleware
- bindActionCreators
  详细代码定点击下面按钮，
  <br />

[![Edit React-redux](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-redux-tnqgd?fontsize=14&hidenavigation=1&theme=dark)

先来定义一个简单的计数器的 store

```js title="./src/redux/store.js"
import { createStore, applyMiddleware, combineReducers } from "redux";
// 这里的Reducer 使用纯函数 纯函数是相同的输入就会有相同输出，为了配合redux调试工具时间回溯
function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - action.payload || 1;
    default:
      return state;
  }
}

const store = createStore(
  // 如果使用combineReducer， 对应的部分也需要更改
  combineReducers({ count: countReducer }),
  applyMiddleware(thunk, logger)
);

export default store;
```

然后创建一个简单的页面

```js title="./src/pages/ReduxPage.js"
import React, { Component } from "react";
import store from "../redux/store";

export default class ReduxPage extends Component {
  componentDidMount() {
    console.log(store);
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  add = () => {
    store.dispatch({ type: "ADD" });
  };
  asyadd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        console.log(getState(), "getState");
        dispatch({ type: "ADD" });
      }, 1000);
    });
  };
  componentWillUnmount() {
    if (!this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <div>
        <h3> Redux Page</h3>
        {/* 
        如果使用combineReducers 需要用到对用的对象的key获取
        */}
        <p>{store.getState().count}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.asyadd}>asyadd</button>
      </div>
    );
  }
}
```

下面我们只要来实现一个 redux 各个函数

### createStore

```js title="./src/Myredux/createStore.js"
/**
 * 1. 创建state
 * 2. 订阅函数
 * 3. 修改状态
 * 4. 获取state
 */
export default function createStore(reducer, enhancer) {
  let currentState;
  let currentListener = [];
  if (enhancer) {
    // 增强dispatch
    return enhancer(createStore)(reducer);
  }
  /**
   * @description 获取state
   */
  function getState() {
    return currentState;
  }
  /**
   * @description 订阅函数
   * @param {Function} listener
   */
  function subscribe(listener) {
    currentListener.push(listener);
    // 取消订阅函数
    return () => {
      const index = currentListener.indexOf(listener);
      currentListener.splice(index, 1);
    };
  }

  /**
   * @param {Function} action
   * @description 派发函数，更新state
   */
  function dispatch(action) {
    // 1. 从reducer中取出state
    currentState = reducer(currentState, action);
    // 2. 执行订阅函数
    currentListener.forEach((listener) => listener());
  }
  // 这个地方需要注意，第一次执行的事 currentState是undefined.
  // 我们需要手动执行以下dispatch 给currentState赋上初始值
  // 源码里面会随意一段字符串，让reducer里面的switch走到default
  dispatch({});
  return {
    getState,
    dispatch,
    subscribe,
  };
}
```

### applyMiddle

是 redux 可以使用中间件，常用的中间件有 thunk(处理异步), logger(打印日志), saga

```js title="./src/Myredux/applyMiddleware"
const applyMiddleware = (...middlewares) => {
  return (createStore) => (reducer) => {
    // 返回store 同步把dispatch 加强
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    // 开始加强dispatch
    const midApi = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    };
    const middlewareChain = middlewares.map((middleware) => middleware(midApi));
    dispatch = compose(...middlewareChain)(store.dispatch);
    return {
      ...store,
      // 返回加强版的dispatch
      dispatch,
    };
  };
};

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
export default applyMiddleware;
```

### combineReducers

实现多个 reducers 组和使用，同比 Vuex 中 module 和 namespace
源码中还有一层判断，判断两次参数是否相等, 相等可不用更新 state

```js title="./src/combineReducers"
export default (reducers) => {
  return function combination(state = {}, action) {
    let nextState = {};
    let hasChange = false;
    for (let key in reducers) {
      console.log(reducers, key);
      const reducer = reducers[key];
      console.log(reducer(state[key], action));
      nextState[key] = reducer(state[key], action);
      hasChange = hasChange || nextState[key] !== state[key];
    }

    return nextState ? nextState : state;
  };
};
```

### logger

源码中 logger 是有颜色的，本次只实现日志，不要求颜色

```js title="./src/Myredux/redux-logger.js"
export const logger = ({dispatch, getState}) => {
  return next => (action) => {
    const prevStore = geState();
    console.log('prev', prevStore)
    // 更新
    const current = next(action)
    
    const currentStore = getState();
    console.log('current', currentStore)

    return currentStore
  }
}
```

### thunk

使 redux 可以处理异步函数的能力, 增强 dispatch

```js title="./src/Myredux/react-thunk.js"
const thunk = ({ dispatch, getState }) => {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
};

export default thunk;
```

### 实现效果

import Iframe from '../Iframe.js'

<Iframe url={'https://codesandbox.io/embed/react-redux-tnqgd?fontsize=14&hidenavigation=1&theme=dark'}></Iframe>

## React-Redux 提供了什么

- Provider 为后代组件提供 store
- connect 为组件提供数据和变更的方法

## 安装

```shell
yarn add react-redux
# or
npm install --save react-redux
```

## 使用顺序

首先在创建 store.js，在这个里面定义 R educer，使用 createStore 创建 store,在导入到根组件使用 Provider 包裹

```js
// store.js
import { createStore, applyMiddleware } from "redux";
// 定义修改规则
function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - action.payload || 1;
    default:
      return state;
  }
}
const store = createStore(countReducer);
```

## Provider 和 connect

React-Redux 提供<Provider />组件，能够使你的整个 app 访问到 Redux stroe 中的数据：

```js
import React from "react";
import ReactDOM from "react-form";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
```

React-Redux 提供一个 connect 方法能够让你把组件和 store 连接起来。

通常你可以以下面这种方式调用 connect 方法：<br />
利用高阶组件的方式 ，这样组件中 props 就有了<br />
connect 参数主要有两个：mapStateToProps, mapDispatchToProps;
<code>mapStateToProps</code>是一个函数用来返回所需要的 state<br />
<code>mapDispatchToProps</code>可以是一个对象，也可以是一个函数，

mapDispatchToProps 和 mapStateToProps 都有第二个参数<code>ownProps</code>，
如果使用了的话，组要组件接收到新的 props，mapStateToProps 和 mapDisaptchToPropss 都会被重新计算，
注意性能问题

```js
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// 这列的state 是全部的state
@connect(
    state => {
    	return {count: state.count}
	  },
    {
        add: () => ({type: 'ADD'}),
        minus: () => ({type: 'MINUS'})
    },
    // dispatch => {
    //    let creators={
    //       add: () => ({type: 'ADD', payload: 100})
    //        minus: () => ({type: 'MINUS', payload: 100}); // 这么写只是一个对象，并不会执行dispatch
        // 使用bindActionCreators这个函数，把上面的对象编程dispatch
      //  creators = bindActionCreators(creators, dispatch);
       // return {dispatch, ...creators}
        //}
    //}

)
export default class Counter extends React.Component {
    render(){
        const {count, dispatch, add, minus} = this.props// props会有你想要的属性，直接使用就可以了
        return null
    }
}

```

## 实现 bindActionCreators

```js
export default function bindActionCreators(creators, dispatch) {
  let obj = {};

  // todo遍历对象
  for (let key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch);
  }
  return obj;
}

function bindActionCreator(creator, dispatch) {
  // 使用dispatch把函数包裹一层
  return (...args) => dispatch(creator(...args));
}
```

### redux-saga

使用 redux-saga 实现一个路由守卫

```jsx
// 首先使用thunk异步请求
// dispatch 更新状态

import {put, call, takeEvery} from 'redux-saga/effects'
//worker saga
function* loginHandle(){
  try {
    const res1 = yield call(loginService.login, action.payload);
    const res2 = yield call(LoginService.getMoreUserInfo, res1);
    yield put({type: 'LOGIN_SUCCESS', payload: res2})
  }catch{
    yield put({type: 'LOGIN_FAIL', payload:err})
  }
}


//watcher saga
function* loginSaga(){
  return takeEvery('LOGIN_SAGA', loginHandle)()
}
```
·