(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return p}));var r=t(2),c=t(6),o=(t(0),t(97)),a={id:"ReactCode",title:"React\u539f\u7406\u5206\u6790"},i={unversionedId:"React/ReactCode",id:"React/ReactCode",isDocsHomePage:!1,title:"React\u539f\u7406\u5206\u6790",description:"\u672c\u6587\u7ae0\u7684\u5185\u5bb9\u53ea\u662f\u5bf9 React17 \u4e4b\u524d\u5199\u7684\uff0c \u56e0\u4e3a\u65b0\u7248\u7684 React \u7684 JSX \u89e3\u6790\u5668\u4e0d\u518d\u662f\u521b\u5efa createElement\uff0c\u8bf7\u81ea\u884c Debug \u67e5\u770b",source:"@site/docs/React/ReactCode.md",slug:"/React/ReactCode",permalink:"/docs/React/ReactCode",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/React/ReactCode.md",version:"current"},d=[{value:"\u672c\u6b21\u5b9e\u73b0 createElement \u548c render \u51fd\u6570",id:"\u672c\u6b21\u5b9e\u73b0-createelement-\u548c-render-\u51fd\u6570",children:[]}],l={rightToc:d};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u672c\u6587\u7ae0\u7684\u5185\u5bb9\u53ea\u662f\u5bf9 React17 \u4e4b\u524d\u5199\u7684\uff0c \u56e0\u4e3a\u65b0\u7248\u7684 React \u7684 JSX \u89e3\u6790\u5668\u4e0d\u518d\u662f\u521b\u5efa createElement\uff0c\u8bf7\u81ea\u884c Debug \u67e5\u770b")),Object(o.b)("h2",{id:"\u672c\u6b21\u5b9e\u73b0-createelement-\u548c-render-\u51fd\u6570"},"\u672c\u6b21\u5b9e\u73b0 createElement \u548c render \u51fd\u6570"),Object(o.b)("p",null,"createElement \u4e3b\u8981\u63a5\u53d7\u4ee5\u4e0b\u51e0\u4e2a\u53c2\u6570"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type \u8282\u70b9\u7c7b\u578b"),Object(o.b)("li",{parentName:"ul"},"config \u8282\u70b9\u7684\u914d\u7f6e\uff0c\u5982\uff1a\u4e8b\u4ef6\uff0c\u6837\u5f0f\u7b49\u7b49"),Object(o.b)("li",{parentName:"ul"},"children children\u5c5e\u6027\uff0c\u8fd9\u91cc\u7528\u4e00\u4e2a\u6570\u7ec4\u53bb\u4ee3\u66ff\u65b9\u4fbf\u904d\u5386")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'function createElement(type, config, ...children) {\n  const props = {\n    ...config,\n    children: children.map((child) =>\n      typeof child === "object" ? child : createTextNode(child)\n    ),\n  };\n  return {\n    type,\n    props,\n  };\n}\n/**\n * @desc \u5904\u7406\u6587\u5b57\u7c7b\u578b\u7684\u8282\u70b9<div>haha</div>\n * @param {Object} child - \u8282\u70b9\u4fe1\u606f\n*/\nfunction createTextNod(child) {\n  return {\n    type: "TEXT",\n    props: {\n      children: "",\n      nodeValue: child,\n    },\n  };\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'/**\n * @param {Object} vnode - \u865a\u62dfdom\u8282\u70b9\n * @param {container} container - \u9700\u8981\u63d2\u5165\u5185\u5bb9\u7684\u8282\u70b9\n*/\nfunction render(vnode, container) {\n  const node = createNode(vnode);\n  container.appendChild(node);\n}\n/**\n * @desc \u865a\u62dfDOM\u8f6c\u6362\u6210\u771f\u5b9e\u8282\u70b9\n * @param {Object} vnode - \u865a\u62dfDOM\u8282\u70b9\n*/\nfunction createNode(vnode) {\n  let node = null;\n  const { props, type } = vnode;\n  if (type === "TEXT") {\n    node = document.createTextNode(props.nodeValue);\n  } else if (type === "string") {\n    node = document.createElement(type);\n  } else {\n    node = document.createFragment();\n  }\n  reconciChildren(node, props.children);\n  updateChildren(props, node);\n  return node;\n}\n/**\n * @desc React \u534f\u8c03\u51fd\u6570\uff08\u7b80\u5355\u5b9e\u73b0\uff09\n * @param node - \u771f\u5b9e\u8282\u70b9\n * @param children - \u5f53\u524d\u8282\u70b9\u7684\u5b50\u8282\u70b9\u4fe1\u606f\n*/\nfunction reconciChildren(node, children) {\n  for (let i = 0; i < children.length; i++) {\n    let child = children[i];\n    render(child, node);\n  }\n}\n/**\n * @desc \u66f4\u65b0\u8282\u70b9\u4fe1\u606f\n * @param {Object} props - \u4f20\u9012\u7684props\n * @param {Obejct} node - \u9700\u8981\u66f4\u65b0\u8282\u70b9\u4fe1\u606f\u7684\u4f4d\u7f6e\n*/\nfunction updateChildren(children, node) {\n  Object.keys(props)\n    .filter((item) => item !== \'children\')\n    .forEach((item) => {\n      node[item] = props[item];\n    });\n}\n')))}p.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),p=function(e){var n=c.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},m=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,b=u["".concat(a,".").concat(m)]||u[m]||s[m]||o;return t?c.a.createElement(b,i(i({ref:n},l),{},{components:t})):c.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);