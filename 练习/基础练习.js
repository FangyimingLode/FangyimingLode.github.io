/*
 * @Author: Fangyiming
 * @Description: js 基础练习
 * @Date: 2021-07-29 16:18:36
 */
const deepClone = (data) => {
    if(typeof data === 'object') {
        const result = Array.isArray(data) ? [] : {}
        for(let item in data) {
            if(typeof data[item] === 'object') {
                result[item] = deepClone(result[item])
            } else {
                result[item] = data[item]
            }
        }
        return result;
    } else {
        return data
    }
}
let myWeakMap = new WeakMap()
const deepClonePlus = (data) => {
    if(data instanceof Object) {
        // for in 循环 对象的值进行进一步的判断
        if(myWeakMap.has(data)){
            return myWeakMap.get(data)
        }
        let newObj
        // 对数组的判断
        if(data instanceof Array) {
            newObj = []
        }
        // 对函数的判断
        if(data instanceof Function) {
            return newObj =  function () {
                return newObj.apply(this, arguments)
            }
        }
        // 对正则的判断
        if(data instanceof RegExp){
            return newObj = new RegExp(data.source, data.flag)
        }
        const desc = Object.getOwnPropertyDescriptors(data);
        const clone = Object.create(Object.getPrototypeOf(data), desc);
        myWeakMap.set(data, clone)
        for(let item in data) {
            if(data.hasOwnProperty(item)){
                newObj[item] = deepClonePlus(data[item])
            }
        }
        return newObj
    }
    return data
}

// 手写Koa Promise

module.exports.compose = middleWares => {
    return function () {
        return dispatch(0);
        function dispatch(i) {
            let fn = middleWares[i];
            if(!fn) {
                return  Promise.resolve()
            } else {
                return Promise.resolve(fn(function next () {
                    return dispatch(i+1)
                }))
            }
        }
    }
}

// 手写apply call bind
Function.prototype.call1 = function(that = window) {
    that.fn = this
    const args = [...arguments].slice(1);
    const result = that.fn(...args);
    delete that.fn;
    return result
}

Function.prototype.apply1 = function (that = window) {
    that.fn = this;
    const args = arguments[1];
    const result = that.fn ? that.fn(args) : that.fn();
    delete that.fn;
    return result
}

const deepClone1 = (data) => {
    if(typeof data === 'object') {
        const result = Array.isArray(data) ? []: {};
        for(let item in data) {
            if(typeof data[item] === 'object') {
                result[item] = deepClone(data[item])
            } else {
                result[item] = data[item]
            }
        }
    } else {
        return data
    }
}

function myNew (fn, ...arguments) {
    let obj = Object.create(fn.prototype)
    const result = fn.apply(args)
    if(result && typeof result === 'function' || typeof result === 'object'){
        return result
    }
    return obj
}

Function.prototype.call1 = function (that = window) {
    that.fn = this;
    const args = [...arguments].slice(1)
    const result = that.fn(args);
    delete that.fn
    return result
}

// 节流

function throttle (fn, wait) {
    let pre = 0;
    return function (args) {
        let now = new Date();
        if(pre - now > wait) {
            pre = now
            fn.apply(this, ...args)
        }
    }
}

// 防抖
function debounce(fn, wait) {
    let timer = null;
    return function (args) {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, ...args)
        }, wait)
    }
}

// 数组去重

function unique(arr) {
  const reuslt = {};
  arr.forEach((item, index) => {
    if(!result[item]) {
        result[item] = true
    }
  })
  return Object.keys(result)
}

function unique(arr) {
    return [...new Set(arr)]
}
