(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(6),c=(t(0),t(97)),l=["components"],s={id:"webpack01",title:"webpack\u5de5\u7a0b\u5316\u5b9e\u6218"},p={unversionedId:"webpack/webpack01",id:"webpack/webpack01",isDocsHomePage:!1,title:"webpack\u5de5\u7a0b\u5316\u5b9e\u6218",description:"Webpack\u5165\u95e8",source:"@site/docs/webpack/webpack.md",slug:"/webpack/webpack01",permalink:"/docs/webpack/webpack01",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/webpack/webpack.md",version:"current"},b=[{value:"Webpack\u5165\u95e8",id:"webpack\u5165\u95e8",children:[]},{value:"webpack\u6838\u5fc3\u6982\u5ff5",id:"webpack\u6838\u5fc3\u6982\u5ff5",children:[]},{value:"\u6837\u5f0f\u5904\u7406",id:"\u6837\u5f0f\u5904\u7406",children:[]}],o={rightToc:b};function u(e){var n=e.components,t=Object(r.a)(e,l);return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"webpack\u5165\u95e8"},"Webpack\u5165\u95e8"),Object(c.b)("p",null,"\u5b89\u88c5webpack\u5e76\u4e0d\u5168\u5c40\u5b89\u88c5\uff0c\u4f1a\u9501\u6b7bwebpack\u7248\u672c\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u7248\u672c\u4f1a\u9ed8\u8ba4\u5b89\u88c5webpack5"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"npm install webpack@4.43.0 webpack-cli@3.3.12 -D\n")),Object(c.b)("p",null,"\u521b\u5efawebpack.config.js"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\nmodule.export = {\n    entry: './scr/index.js',\n    output: {\n        // \u7edd\u5bf9\u8def\u5f84\n        path: path.resolve(__dirname, './dist'),\n        filename: 'main.js',\n    },\n    // \u6253\u5305\u6a21\u5f0f\n    mode: 'development',\n}\n")),Object(c.b)("p",null,"\u591a\u5165\u53e3\uff0c\u591a\u51fa\u53e3\u914d\u7f6e"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nmodule.exports = {\n    entry: {\n        main: './src/index.js',\n        list: './src/list.js',\n    },\n    output: {\n        path: path.resolve(__dirname, './dist'),\n        filename: '[name].js',\n    },\n    mode: 'development',\n}\n")),Object(c.b)("h2",{id:"webpack\u6838\u5fc3\u6982\u5ff5"},"webpack\u6838\u5fc3\u6982\u5ff5"),Object(c.b)("p",null,"Bundle <-- chunk <-- module\nbundle\u6709\u51e0\u4e2achunk  \u5c31\u662f\u6709\u51e0\u4e2aeval"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"chunk: \u4ee3\u7801\u5757\uff0c\u4e00\u4e2achunk\u53ef\u80fd\u6709\u591a\u4e2a\u6a21\u5757\u7ec4\u5408\u800c\u6210\uff0c\u4e5f\u7528\u4e8e\u4ee3\u7801\u5408\u5e76\u4e0e\u5206\u5272"),Object(c.b)("li",{parentName:"ul"},"bundle: \u8d44\u6e90\u7ecf\u8fc7webpack\u6d41\u7a0b\u89e3\u6790\u7f16\u8bd1\u800c\u6210\u6587\u4ef6"),Object(c.b)("li",{parentName:"ul"},"entry:  \u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u5165\u53e3\u8d77\u70b9\uff0c\u7528\u6765\u9ad8\u901fwebpack\u7528\u54ea\u4e2a\u6587\u4ef6\u4f5c\u4e3a\u6784\u5efa\u4f9d\u8d56\u56fe\u7684\u8d77\u70b9\u3002webpack\u4f1a\u6839\u636eentry\u9012\u5f52\u7684\u53bb\u5bfb\u627e\u4f9d\u8d56\uff0c\u6bcf\u4e2a\u4f9d\u8d56\u90fd\u5c06\u88ab\u5b83\u5904\u7406\uff0c\u6700\u540e\u51fa\u53bb\u5230\u6253\u5305\u6210\u529f\u4e2d"),Object(c.b)("li",{parentName:"ul"},"output: output\u914d\u7f6e\u63cf\u8ff0\u4e86webpack\u6253\u5305\u7684\u8f93\u51fa\u914d\u7f6e\uff0c\u5305\u542b\u8f93\u51fa\u6587\u4ef6\u7684\u547d\u540d\uff0c\u4f4d\u7f6e\u7b49\u4fe1\u606f"),Object(c.b)("li",{parentName:"ul"},"loader: \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cwebpack\u4ec5\u652f\u6301js\u6216\u8005json\u6587\u4ef6\u901a\u8fc7loader\uff0c\u53ef\u4ee5\u8ba9\u4ed6\u89e3\u6790\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\u5145\u5f53\u7ffb\u8bd1\u7684\u89d2\u8272\uff0c\u7406\u8bba\u4e0a\u53ea\u8981\u6709\u76f8\u5e94\u7684loader\uff0c\u5c31\u53ef\u4ee5\u5904\u7406\u4efb\u4f55\u7c7b\u578b\u7684\u6587\u4ef6\u3002"),Object(c.b)("li",{parentName:"ul"},"plugin: loader\u4e3b\u8981\u7684\u804c\u8d23\u5c31\u662f\u8ba9webpack\u8ba4\u8bc6\u66f4\u591a\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u800cplugin\u7684\u804c\u8d23\u5219\u662f\u8ba9\u5176\u53ef\u4ee5\u63a7\u5236\u6784\u5efa\u6d41\u7a0b\uff0c\u4ece\u800c\u6267\u884c\u4e00\u4e9b\u7279\u4fd7\u4efb\u52a1\u3002\u63d2\u4ef6\u7684\u529f\u80fd\u975e\u5e38\u5f3a\u5927\uff0c\u53ef\u4ee5\u5b8c\u6210\u5404\u79cd \u5404\u6837\u7684\u4efb\u52a1\u3002"),Object(c.b)("li",{parentName:"ul"},"mode: 4.0\u5f00\u59cb\uff0cwebpack\u652f\u6301\u96f6\u914d\u7f6e\uff0c\u7686\u5728\u5f00\u53d1\u4eba\u5458\u51cf\u5c11\u4e0a\u624b\u96be\u5ea6\u540c\u65f6\u52a0\u5165mode\u7684\u6982\u5ff5\uff0c\u7528\u4e8e\u6307\u5b9a\u6253\u5305\u7684\u76ee\u6807\u73af\u5883\uff0c\u4e00\u904d\u5728\u6253\u5305\u8fc7\u7a0b\u4e2d\u542f\u7528webpack\u9488\u5bf9\u4e0d\u540c\u7684\u73af\u5883\u5185\u7f6e\u7684\u4f18\u5316 ")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"//  \u591a\u9875\u9762\u5e94\u7528\nmodule.exports = {\n    entry: {\n        // main chunk\u540d\u79f0\n        index: './src/index.js',\n        list: './src/list.js',\n        detail: './src/detail.js'\n    }\n}\n")),Object(c.b)("p",null,"\u4e00\u4e2abundle\u6587\u4ef6\u4e5f\u53ef\u4ee5\u5bf9\u7528\u591a\u4e2achunk"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"entry: [\n    './src/index.js',\n    './sec/list.js'\n]\n")),Object(c.b)("h2",{id:"\u6837\u5f0f\u5904\u7406"},"\u6837\u5f0f\u5904\u7406"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u96c6\u6210css\u6837\u5f0f\u5904\u7406:css-loader style-loader")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u521b\u5efaindex.css"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-console"},"npm instal style-loader css-loader -D \n")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-js"},"")))),Object(c.b)("p",null,"moudle: {\nrules: [\n{\ntest: /",".","css$/,\nuse:","['style-loader', 'css-loader']","\n}\n]\n}\n// \u96c6\u6210sass less"),Object(c.b)("h1",{id:"sass"},"sass"),Object(c.b)("p",null,"npm install node-sass sass-loader -D"),Object(c.b)("h1",{id:"less"},"less"),Object(c.b)("p",null,"npm i\nnpm install less less-loader -D"),Object(c.b)("p",null,"module: {\nrules: [\n{\ntest: /",".","scss$\nuse: ","['style-loader', 'css-loader', 'sass-loader']","\n},\n{\ntest: /",".","less$/\nuse: ","['style-loader', 'css-loader', 'less-loader']","\n}\n]\n}"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"- \u96c6\u6210postcss\n  \u76f8\u5f53\u4e8ebabeljs\n  postcss \u4e3b\u8981\u529f\u80fd\u53ea\u6709\u4e24\u4e2a\uff1a \n  1. \u628acss\u89e3\u6790\u6210JS\u53ef\u4ee5\u64cd\u4f5c\u7684\u62bd\u8c61\u590d\u53d1\u4e66AST\n  2. \u8c03\u7528\u63d2\u4ef6\u6765\u5904\u7406AST\u5e76\u5f97\u5230\u7ed3\u679c\n\n\n\u7ecf\u8fc7\u51e0\u4e2aloader\u5904\u7406\uff0ccss \u6700\u7ec8\u662f\u6253\u5305\u5728js\u4e2d\u7684\uff0c\u8fd0\u884c\u65f6\u4f1a\u63d2\u5165\u5230head\u4e2d\uff0c\u4f46\u662f\u4e00\u822c\u751f\u4ea7\u73af\u5883\u4f1a\u628acss\n\u5206\u79bb\u51fa\u6765\n\n### Plugin\n- \u4f5c\u7528\u4e8e\u6574\u4e2awebpack\u6253\u5305\u8fc7\u7a0b\n- webpack\u7684\u6253\u5305\u8fc7\u7a0b\u662f\u6709(\u751f\u547d\u5468\u671f\u6982\u5ff5)\u94a9\u5b50\n\n\nplugin \u53ef\u4ee5\u5728webpack\u8fd0\u884c\u7684\u67d0\u4e2a\u9636\u6bb5\u7684\u65f6\u5019\uff0c\u5e2e\u4f60\u505a\u4e00\u4e0b\u4e8b\u60c5\uff0c\u7c7b\u4f3c\u751f\u547d\u5468\u671f\u7684\u6982\u5ff5\uff0c\u6269\u5c55\u63d2\u4ef6\uff0c\u5728webpack\u6784\u5efa\u6d41\u7a0b\u4e2d\u7684\u7279\u5b9a\u5b9e\u9645\u6ce8\u5165\u6269\u5c55\u903b\u8f91\u6539\u53d8\u6784\u5efa\u7ed3\u679c\u6216\u8005\u505a\u4f60\u60f3\u8981\u7684\u4e8b\u60c5\n")))}u.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),o=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=o(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=o(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||i[d]||c;return t?r.a.createElement(m,s(s({ref:n},b),{},{components:t})):r.a.createElement(m,s({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var b=2;b<c;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);