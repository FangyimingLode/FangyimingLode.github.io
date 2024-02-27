---
id: textLayout
title: 文章排版指南
---

统一中文文案、排版的相关用法，增强网站气氛。

## 空格

### 中文和英文之间需要加空格

正确：
> Github 网站。
>
> 欢迎来到 React 文档！本章节将介绍你每天都会使用的 80% 的 React 概念。

错误：
> Github网站
>
> 欢迎来到React文档！本章节将介绍你每天都会使用的80%的React概念。

正确例子：
> React 是一个用于构建用户界面（UI）的 JavaScript 库，用户界面由按钮、文本和图像等小单元内容构建而成。React 帮助你把它们组合成可重用、可嵌套的组件。从 web 端网站到移动端应用，屏幕上的所有内容都可以被分解成组件。在本章节中，你将学习如何创建、定制以及有条件地显示 React 组件。

例外：「喜马拉雅FM」等产品名词，按照官方所定义的格式书写。

### 中文和数字之间要加空格

正确：
> 今天收入 10000 元
>
> 现在是北京时间 2022 年

錯誤：
> 今天收入10000元
>
> 现在是北京时间2022年

### 数字与单位之间需要增加空格

正确：
> Apple Watch 类商品数量为 1000 件
>
> AirPods 类商品数量为 2500 件
错误：
> Apple Watch 类商品数量为 1000件
>
> AirPods 类商品数量为 2500件
例外：度数、百分比、负数等与数字之间不需要加空格
正确：
> 今天温度 -16°
>
> 新版 MacBook Pro 有 15% 的性能提升
错误
> 今天温度 -16 °
>
> 新版 MacBook Pro 有 15 % 的性能提升

### -ms-text-autospace

Microsoft 有个 -ms-text-autospace 的 CSS 属性可以实现自动为中英文之间增加空白。不过目前并未普及，另外在其他应用场景，例如 OS X、iOS 的用户界面目前并不存在这个特性，所以请继续保持随手加空格的习惯。

## 全角和半角

全角：文字字身长宽比为一比一的正方形，例如：汉字
半角：宽度为全角一半的文字，例如：英文

### 全角标点与其他字符之间不加空格

正确：
> 刚刚买了一个 iPhone，好开心
>
> 组件可以小到一个按钮，也可以大到时整个页面。
错误：
> 刚刚买了一个 iPhone ，好开心
>
> 组件可以小到一个按钮 ，也可以大到时整个页面。

### 英文标点需要添加空格

正确：
> Hello everyone! Welcome to TravelSky
错误：
> Hello everyone!Welcome to TravelSky

### 遇到完整的英语语句、特殊名词、其内容使用半角标点

正确：
> 乔布斯那句话是怎么说的？“Stay hungry, stay foolish.”

错误：
> 乔布斯那句话是怎么说的？“Stay hungry，stay foolish。”

### 完整的中文使用全角标点

正确：
> 我的代码没有错误？竟然没有错误。

错误：
> 我的代码没有错误?竟然没有错误.

## 专有名词

尊重专有名词的正确写法，是写作 / 排版的第一步

### 专有名词正确的大小写

正确：
> 使用 GitHub 登录 App Store a.m. Google iOS WeChat

错误：
> 使用 github 登录 Appstore am google IOS wechat

### 不要使用不地道的缩写

正确：
> JavaScript HTML5 Backbone.js AngularJS React

错误：
> Js h5 backbone angular RJS
