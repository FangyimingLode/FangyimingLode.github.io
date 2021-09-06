---
id: DOM
title: DOM事件
---
## 事件
- UI事件： 当前用户与页面的元素交互式触发：load, scroll
- 焦点事件：当元素获得或失去焦点时触发：blur，focus
- 鼠标事件：当用户用过鼠标在页面执行操作时触发：onclick，mouseup
- 滚轮事件：当使用鼠标滚轮或类似设备时触发：mousewheel
- 文本事件：当在文档中输入文本时触发：textinput
- 键盘事件：当用户通过键盘在页面上执行操作时触发：keydown，keypress
- 合成事件：当为IME（输入法编辑器）输入字符时触发：compositionstart
- 变动事件：当底层DOM结构发生变化时触发：DOMsubtreeModified
- 同时事件也允许使用者自定义一些事件

### DOM事件模型 事件流
事件模型分为：捕获和冒泡
事件流： 
1. 捕获阶段：事件从window对象自上而下向目标节点点播的阶段
2. 目标阶段：真正的目标节点正在处理事件阶段
3. 冒泡阶段：事件从目标节点自下而上向window对象传播的阶段

### Event对象使用
1. 阻止默认行为：event.preventDefault()
2. 阻止冒泡：
    event.stopPropagation()阻止事件冒泡到父元素，阻止任何父事件处理程序被执行。
    event.stopImmediatePropagation()既能阻止事件向父元素冒泡，也能阻止元素同事类型的其他监听器触发
3. event.target & event.currentTarget



### 自定义事件
```js
// 创建事件，Event是无法传递参数的
const event = new Event('event')

// 创建参数，CustomEvent 允许传递参数
const event = new CustomEvent('event', {detail: 'Hello world'})

// 监听事件
el.addEventListener('event', function(e){

}, false)

// 分发事件
el.dispatchEvent(event)
```
### 手动发布订阅模式
```js
class EventEmitter{
    events: {[key: string]: Function[]} = {}
    // 订阅
    on(type: string, callback: Function) {
        if(!this.events) this.events = Object.create(null)
        if(!this.events[type]) {
            this.events[type] = [callback]
        } else {
            this.events[type].push(callback)
        }
    }

    // 取消订阅
    off(type: string ) {
        if(!this.events[type]) return 
            delete this.events[type]
    }

    // 只执行一次订阅
    once(type: string, callback: Function) {
        function fn(){
            callback()
            this.off(type)
        }
        this.on(type, fn)
    }

    // 触发事件
    emit(type: string, ...rest) {
        this.events[type] && this.events[type].forEach(fn => fn(...rest))
    }
}

// 使用情况
const event = new EventEmitter()

event.on('click', (...rest) => console.log(rest))
event.emit('click')
event.off('click')
event.once('click', (...reset) => console.log(rest))
```