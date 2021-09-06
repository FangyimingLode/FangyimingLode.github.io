(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(97)),c={id:"DECORATOR",title:"\u88c5\u9970\u5668"},i={unversionedId:"Node/DECORATOR",id:"Node/DECORATOR",isDocsHomePage:!1,title:"\u88c5\u9970\u5668",description:"\u6982\u5ff5\u4ecb\u7ecd",source:"@site/docs/Node/decorator.md",slug:"/Node/DECORATOR",permalink:"/docs/Node/DECORATOR",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Node/decorator.md",version:"current",sidebar:"someSidebar",previous:{title:"Node \u57fa\u7840api\u4e0eCLI, \u5b9e\u73b0CLI\u5de5\u5177",permalink:"/docs/Node/Node01"},next:{title:"KOA2 \u6e90\u7801",permalink:"/docs/Node/KOA2"}},l=[{value:"\u7c7b\u4e0e\u65b9\u6cd5\u7684\u88c5\u9970\u5668",id:"\u7c7b\u4e0e\u65b9\u6cd5\u7684\u88c5\u9970\u5668",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u6982\u5ff5\u4ecb\u7ecd"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u88c5\u9970\u5668\u6a21\u5f0f\u5141\u8bb8\u50cf\u4e00\u4e2a\u73b0\u6709\u5bf9\u8c61\u6dfb\u52a0\u65b0\u7684\u529f\u80fd\uff0c\u540c\u4e8b\u53c8\u4e0d\u6539\u53d8\u5176\u7ed3\u6784\u3002\n\u8fd9\u79cd\u7c7b\u578b\u7684\u8bbe\u8ba1\u6a21\u5f0f\u5c5e\u4e8e\u7ed3\u6784\u6027\u6a21\u5f0f\uff0c\u4ed6\u662f\u6700\u4e3a\u73b0\u6709\u7684\u7c7b\u7684\u4e00\u4e2a\u5305\u88c5"),Object(a.b)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u6a21\u5f0f\u521b\u5efa\u4e86\u4e00\u4e2a\u88c5\u9970\u7c7b\uff0c\u7528\u6765\u5305\u88c5\u539f\u6709\u7684\u7c7b\uff0c\u5e76\u5728\u4fdd\u6301\u7c7b\u65b9\u6cd5\u7b7e\u540d\u5b8c\u6574\u6027\u7684\u524d\u63d0\u4e0b\uff0c\u63d0\u4f9b\u989d\u5916\u7684\u529f\u80fd")),Object(a.b)("h2",{id:"\u7c7b\u4e0e\u65b9\u6cd5\u7684\u88c5\u9970\u5668"},"\u7c7b\u4e0e\u65b9\u6cd5\u7684\u88c5\u9970\u5668"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function aClass(id) {\n    console.log('aClass id', id);\n    return (target) => console.log('aClass id', id);\n}\n\nfunction aMethod(id) {\n    console.log('aMethod', id);\n    return (target, property, descriptor) => console.log('aMethod', id);\n}\n@aClass(1)\n@aClass(2)\nclass Example {\n    @aMethod(1)\n    @aMethod(2)\n    method(){}\n}\n")))}p.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);