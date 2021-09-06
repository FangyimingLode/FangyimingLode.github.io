---
id: Style 
title: 移动端样式兼容性
---

1. 如何描述一像素边框

```scss
.element {
  position: relative;
  width: 200px;
  height: 80px;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    border: 1px solid #f66;
    width: 200%;
    height: 200%;
    content: '';
    transform: scale(.5);
    transform-origin: left top;
  }
}
```

2. 识别文本换行

```scss
* {
  white-space: pre-line;
}
```

3. 开启硬件加速

```css
.element {
    transform: translate3d(0, 0, 0);
}

```