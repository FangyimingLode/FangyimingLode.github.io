(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(2),o=n(6),c=(n(0),n(97)),a=["components"],l={id:"React-router",title:"React-router\u4f7f\u7528\u53ca\u6e90\u7801 (\u7c7b\u7ec4\u4ef6)"},i={unversionedId:"React/React-router",id:"React/React-router",isDocsHomePage:!1,title:"React-router\u4f7f\u7528\u53ca\u6e90\u7801 (\u7c7b\u7ec4\u4ef6)",description:"\u8981\u5b9e\u73b0\u54ea\u4e9b\u5185\u5bb9\uff1f",source:"@site/docs/React/React-router.md",slug:"/React/React-router",permalink:"/docs/React/React-router",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/React/React-router.md",version:"current",sidebar:"someSidebar",previous:{title:"redux\u548cReact-redux",permalink:"/docs/React/redux_React-redux"},next:{title:"React\u7ec4\u4ef6\u8de8\u5c42\u7ea7\u901a\u4fe1",permalink:"/docs/React/ReactContext"}},u=[{value:"Router",id:"router",children:[]},{value:"BrowserRouter",id:"browserrouter",children:[]},{value:"Link",id:"link",children:[]},{value:"Route",id:"route",children:[]},{value:"Switch",id:"switch",children:[]},{value:"Redirect",id:"redirect",children:[]},{value:"withRouter",id:"withrouter",children:[]},{value:"Hooks\u76f8\u5173\u65b9\u6cd5\uff08\u975e\u5e38\u7b80\u5355\uff09",id:"hooks\u76f8\u5173\u65b9\u6cd5\u975e\u5e38\u7b80\u5355",children:[]}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},s=p("Route"),h=p("Redirect"),b={rightToc:u};function m(e){var t=e.components,n=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u8981\u5b9e\u73b0\u54ea\u4e9b\u5185\u5bb9\uff1f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"BrowserRouter"),Object(c.b)("li",{parentName:"ul"},"Route"),Object(c.b)("li",{parentName:"ul"},"Link"),Object(c.b)("li",{parentName:"ul"},"Switch"),Object(c.b)("li",{parentName:"ul"},"withRouter"),Object(c.b)("li",{parentName:"ul"},"useHistory"),Object(c.b)("li",{parentName:"ul"},"useLocation"),Object(c.b)("li",{parentName:"ul"},"useParams"),Object(c.b)("li",{parentName:"ul"},"useRouteMatch")),Object(c.b)("p",null,"React-router\u53ef\u4ee5\u52a8\u6001\u8def\u7531\uff0c\u4e5f\u53ef\u4ee5\u5d4c\u5957\u8def\u7531\uff0c\u65e0\u8bba\u6211\u4eec\u5728\u90a3\u4e2a\u9875\u9762\u5199\u8def\u7531\uff0c\u90fd\u53ef\u4ee5\u8fdb\u884c\u8df3\u8f6c\uff0c\u6838\u5fc3\u539f\u7406\u57fa\u4e8eReact\u7684Context,\u9996\u5148\u6211\u4eec\u5148\u521b\u5efa\u4e00\u4e2aContext\u6587\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nexport const RouterContext = React.createContext();\n")),Object(c.b)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8981\u5206\u6790react-router\u5b9e\u73b0\u4e86\u4ec0\u4e48\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"BrowserRouter: \u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u771f\u6b63\u8fdb\u884c\u6709\u7528\u7684\u662fprops.children"),Object(c.b)("li",{parentName:"ul"},"Router: \u4e5f\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u76d1\u542c\u8def\u7531\u7684\u53d8\u5316\uff0c\u63d0\u4f9bhistory\uff0clocation\uff0cmatch\u7684\u4e0a\u4e0b\u6587\u5185\u5bb9"),Object(c.b)("li",{parentName:"ul"},"Link: \u672c\u8d28\u4e0a\u5e02\u4e00\u4e2aa\u6807\u7b7e\uff0c\u6211\u4eec\u8981\u5c06''to''\u5185\u5bb9\u66ff\u6362\u5230 href\u4e2d\uff0c\u5728props.children\u663e\u793a\u76f8\u5bf9\u7684\u5185\u5bb9"),Object(c.b)("li",{parentName:"ul"},"Switch: \u8fd4\u56de\u7b2c\u4e00\u4e2a\u5339\u914d\u7684\u5185\u5bb9"),Object(c.b)("li",{parentName:"ul"},"Route: \u6e32\u67d3\u7ec4\u4ef6\u4e09\u79cd\u65b9\u5f0f component, render, children"),Object(c.b)("li",{parentName:"ul"},"Redirect: \u8def\u7531\u91cd\u5b9a\u5411\uff0c\u6ce8\u610f\u7ec4\u4ef6\u7684\u6267\u884c\u987a\u5e8f\uff08\u5f88\u91cd\u8981\uff09"),Object(c.b)("li",{parentName:"ul"},"withRouter: \u9ad8\u9636\u7ec4\u4ef6\uff0c\u7ed9\u7ec4\u4ef6\u4f20\u9012\u8def\u7531\u76f8\u5173\u7684API\u65b9\u6cd5"),Object(c.b)("li",{parentName:"ul"},"Hooks\u76f8\u5173API\uff1a\u51fd\u6570\u7ec4\u4ef6\u83b7\u53d6history, location, params, match")),Object(c.b)("h2",{id:"router"},"Router"),Object(c.b)("p",null,"\u8fd9\u662freact-router\u6838\u5fc3\u7ec4\u4ef6\u4e4b\u4e00\uff0c\u76d1\u542c\u8def\u7531\u7684\u53d8\u5316,\u5f15\u8d77\u9875\u9762\u7684\u5237\u65b0\uff0c\u8fbe\u5230\u5207\u6362\u5730\u5740\u66f4\u65b0\u7ec4\u4ef6\u6e32\u67d3,"),Object(c.b)("p",null,"\u601d\u8003\ud83e\udd14\uff1a\u4e3a\u4ec0\u4e48\u8981\u5728constructor\u91cc\u9762\u76d1\u542c\u5462\uff1f"),Object(c.b)("p",null,"\u6e90\u7801\u4e2d\u5df2\u7ecf\u7ed9\u51fa\u4e86\u7b54\u6848\uff1a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This is a bit of a hack. We have to start listening for location  changes here in the constructor in case there are any ",Object(c.b)("inlineCode",{parentName:"p"},"<Redirect>"),"s  on the initial render. If there are, they will replace/push when they mount and since cDM fires in children before parents, we may get a new location before the ",Object(c.b)("inlineCode",{parentName:"p"},"<Router>")," is mounted.")),Object(c.b)("p",null,"\u5927\u81f4\u610f\u601d\u662f \u56e0\u4e3aRedirect\u7684\u5b58\u5728\uff0c\u5b50\u8282\u70b9\u6bd4\u7236\u8282\u70b9\u5148\u8981\u6e32\u67d3\uff0c\u5f53\u8def\u7531redirect\u7684\u65f6\u5019 \u5982\u679c\u5728componentDidMount\u5199\u76d1\u542c\u51fd\u6570\uff0c\u4f1a\u6267\u884c\u5931\u8d25"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\nimport { RouterContext } from './RouterContext'\nexport default class Router extends Component {\n  static computeRootMatch(pathname) {\n    return {path: '/', url: '/', params: {}, isExact: pathname === '/'}\n    constructor(props)\n      {\n        super(props) \n        this.state = {\n        location: props.history.location\n        }\n        this.unlisten = props.history.listen(location => {this.setState({location})})\n      }\n    componentWillUnmout()\n      {\n      if(this.unlisten) {\n        this.unlisten();\n      }\n    }\n    render()\n      {\n          return (\n              <RouteContext.Provider value={{\n                  history: this.props.history,\n                  localtion: this.state.location,\n                  match: Router.computedRootMatch(this.state.location.pathname)\n              }}>\n                  {this.props.children}\n              </RouteContext.Provider>\n          )\n      }\n  }\n}\n")),Object(c.b)("p",null,"\u601d\u8003\ud83e\udd14\uff1a \u4e3a\u4ec0\u4e48\u8981\u4f20\u9012macth\u5462\uff0c"),Object(c.b)("p",null,"\u56e0\u4e3a\u5728",Object(c.b)("inlineCode",{parentName:"p"},"<Route></Route>"),"\u6807\u7b7e\u4e2d \u4e0d\u5199path\uff0c\u4ed6\u4f1a\u9ed8\u8ba4\u6e32\u67d3\uff0c \u5728Route\u7ec4\u4ef6\u4e2d\u8981\u8fdb\u884c\u5224\u65ad\uff0c\u5982\u679cpath\u6709\u503c\u6e32\u67d3path\uff0c \u6ca1\u6709\u6e32\u67d3\u9ed8\u8ba4\u7684"),Object(c.b)("h2",{id:"browserrouter"},"BrowserRouter"),Object(c.b)("p",null,"\u672c\u8d28\u4e0a\u662f\u57fa\u4e8eRouter\uff0c\u9996\u5148\u6211\u4eec\u8981\u5bfc\u5165hsistory\u5305\uff0c\u8fd9\u6b21\u4e0d\u505ahistory\u5b9e\u73b0\uff0c\u672c\u8d28\u662f\u8c03\u7528html5 \u63d0\u4f9b\u7684api\u65b9\u6cd5\uff0c\u4f7f\u7528\u5305\u662f\u4e3a\u4e86\u517c\u5bb9\u6027\u66f4\u597d"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react'\nimport { createBrowrserHistory } from 'history'\nexport default class BrowserRouter extends Component {\n  constructor(props) {\n     super(props)\n     this.history = createBrowserHistory();\n  }\n  render() {\n      return <Router history={this.history}>{this.props.children}</Router>\n  }\n\n}\n")),Object(c.b)("h2",{id:"link"},"Link"),Object(c.b)("p",null,"Link\u7684\u672c\u8d28\u5c31\u662f\u4e00\u4e2aa\u6807\u7b7e\uff0c\u76ee\u7684\u662f\u8df3\u8f6c\u5730\u5740\u548c\u663e\u793aLink\u6807\u7b7e\u91cc\u9762\u7684\u5185\u5bb9, \u6ce8\u610f\u5982\u679c\u8fd9\u91cc\u4e0d\u5199\u70b9\u51fb\u4e8b\u4ef6\uff0c\u9875\u9762\u4f1a\u51fa\u73b0\u95ea\u70c1\uff0c\u4e5f\u5c31\u662fa\u6807\u7b7e\u539f\u751f\u7684\u4e8b\u4ef6\uff0c\u6211\u4eec\u9700\u8981\u624b\u52a8\u7981\u7528\uff0c\u81ea\u5df1\u5199\u8df3\u8f6c\u6d41\u7a0b\uff0c\u4e3b\u8981\u662f\u4ececontext\u4e2d\u53bb\u5230history\uff0c\u628a\u94fe\u63a5push\u8fdb\u53bb"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"export default class Link extends Component {\n  static contextType = RouterContext\n  handleClick = (e) => {\n    e.preventDefault()\n    this.context.history.push(this.props.to)\n  }\n  render () {\n    const { children, to, ...otherProps} = this.props;\n      return (\n        <a href={to} {...otherProps} onClick={this.handleClick}>\n           {children}\n        </a>\n      )\n  }\n}\n")),Object(c.b)("h2",{id:"route"},"Route"),Object(c.b)("p",null,"\u63a5\u6536path\u548ccomponent\uff0c\u6e32\u67d3\u7ec4\u4ef6\u662f\u4f7f\u7528\u7684React.createElement\u51fd\u6570\uff0c\u5207\u8bb0 \u5728Route\u4e2d\u7684component\u4e0d\u80fd\u5199\u6210\u8fd9\u6837\u7684\u5f62\u5f0f"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"<Route component={() => xxxComponent}>\n")),Object(c.b)("p",null,"\u8fd9\u6837\u5728\u521b\u5efa\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u4f1a\u5bfc\u81f4\u9875\u9762\u4e0d\u505c\u7684\u5237\u65b0\uff0c\u7ec4\u4ef6\u4f1a\u4e0d\u505c\u7684\u91cd\u590d\u521b\u5efa\uff0c\u5f53\u4f20\u9012location\u53d1\u751f\u53d8\u5316\uff0c\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6 "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"export default class Route extends Component {\n  render () {\n    return (\n      <RouterContext.Consumer>\n         {\n            context => {\n               const location = context.location\n               const {component, chilren, render, path} = this.props;\n               // const match = path ? matchPath(location.pathname, this.props)\n               const match = path ? (location.pathname === path) : context.match;\n               return match ? React.createElement(component): null;\n             }\n          }\n      </RouterContext.Consumer>\n     )\n  }\n}\n")),Object(c.b)("p",null,"\u8fd9\u91cc\u4f7f\u7528",Object(c.b)("code",null,"location.pathname === path"),",\u5224\u65ad\u7684\u6bd4\u8f83\u7c97\u66b4\uff0c\u6e90\u7801\u5f53\u4e2d\u4f7f\u7528\u6b63\u5219\u8fdb\u884c\u6821\u9a8c\uff0c\u8be6\u7ec6\u89c4\u5219\u53c2\u8003\u6e90\u7801\u4e2d\u7684matchPath.js"),Object(c.b)("p",null,"Route\u7ec4\u4ef6\u4e2d \u6211\u4eec\u53ef\u4ee5\u4f20\u9012render, children, component\u4e09\u4e2a\u6e32\u67d3\u7ec4\u4ef6\u7684\u65b9\u6cd5\uff0c\u4ed6\u4eec\u7684\u4f18\u5148\u7ea7\u662f children >component > render \uff0c\u5982\u679c\u5728\u7ec4\u4ef6\u5f53\u4e2d\u8c22\u4e86children\u662f\u5fc5\u987b\u6e32\u67d3\u7684\uff0ccomponent\u548crender\u662f\u5339\u914d\u5730\u5740\u4e4b\u540e\u624d\u4f1a\u6e32\u67d3\uff0ct\u5728\u6e90\u7801\u4e2d \u6700\u540e\u4e00\u4e2areturn \u4f7f\u7528\u4e86\u4e09\u5143\u8868\u8fbe\u5f0f\u5224\u65ad\uff0c\u5230\u5e95\u6e32\u67d3\u90a3\u4e2a\uff0c \u9996\u5148\u6211\u4eec\u8981\u6ce8\u610f\u7684\u662fchildren \u4ed6\u65e2\u53ef\u4ee5\u662f\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u8282\u70b9 \u90e8\u5206\u4ee3\u7801\u53c2\u8003\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const props = {...context, match} // \u8fd9\u91cc\u4f20\u9012\u662f\u4e3a\u4e86children\u7ec4\u4ef6\u53ef\u4ee5\u83b7\u53d6\u5230\u8def\u7531\u7684\u76f8\u5173\u65b9\u6cd5\nreturn match ? \n    (children ? \n     (typeof children === 'function' ? children(props): children) \n     :(component ? (React.createElement(component, props)) : (render ? (render(props)):null)\n     : (typeof children === 'function' ? children(props) : null): null\n")),Object(c.b)("h2",{id:"switch"},"Switch"),Object(c.b)("p",null,"switch\u7684\u662f\u6e32\u67d3\u5730\u5740\u5339\u914d\u7684\u7b2c\u4e00\u4e2a\u5b50\u8282\u70b9",Object(c.b)(s,{mdxType:"Route"}),"  ",Object(c.b)(h,{mdxType:"Redirect"})),Object(c.b)("p",null,"\u6211\u4eec\u9700\u8981\u904d\u5386switch\u4e2d\u7684\u5185\u5bb9\uff0c\u627e\u5230\u7b2c\u4e00\u4e2a\u5339\u914d\u7684"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react'\n\nexport default class Swtich extends Component {\n  render(){\n    return (\n      <RouterContext.Consumer>\n      {\n        context => {\n          const location = context.location            \n          let match = undefined ;// \u5339\u914d\u7684match\n          let element = undefined; // \u5339\u914d\u7684\u5143\u7d20\n          /* \u627e\u5230\u7b2c\u4e00\u4e2a\u5339\u914d\u7684 React.Children \u662freact\u63d0\u4f9b\u7684api\uff0c \u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\u662f\u56e0\u4e3a\n          *  props.children\u53ef\u4ee5\u4f7f\u6570\u7ec4\u4e5f\u53ef\u4ee5\u662f\u5bf9\u8c61\uff0c\u904d\u5386\u7684\u65f6\u5019\u9700\u8981\u5224\u65ad\uff0c\u800c\u8fd9\u4e2aAPI\u76f4\u63a5\u8f6c\u6362\u6210\n          *  \u6570\u7ec4\n          **/\n          React.Children.forEach(this.props.children, child => {\n            if(match === null && React.isValidElement(child)) {\n              element = child;\n              const { path } = child.props\n              match = path ? matchPath(location.pathname, child.props) : context.match\n            }\n          })\n            \n          return match ? React.cloneElement(element, {\n           computedMatch:   \n          }) : null\n        }         \n      }  \n      </RouterContext.Consumer>\n    )\n  }\n}\n")),Object(c.b)("p",null,"\u4fee\u6539Route\u7684\u4ee3\u7801,\u6839\u636ecomputedmatch\u518d\u5224\u65ad\u4e00\u6b21\uff0c\u6709computedmatch \u4f18\u5148\u6e32\u67d3"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const match = this.props.computedMatch\n  ? this.props.computedMatch\n  : path\n  ? matchPath(location.pathname, this.props)\n  : context.match;\n")),Object(c.b)("h2",{id:"redirect"},"Redirect"),Object(c.b)("p",null,"redirect\u7ec4\u4ef6\u662f\u8def\u7531\u7684\u91cd\u5b9a\u5411\uff0c\u7b80\u5355\u7684\u5c0f\u7ec4\u4ef6, \u8fd9\u7528\u5230\u4e86LifeCycle\u7ec4\u4ef7\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u5e76\u4e0d\u63d0\u4f9b\u4efb\u4f55api\uff0c\u4f46\u662f\u9700\u8981\u4ed6\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import React, { Component } from "react";\nimport { RouterContext } from "./Context";\n\nexport default class Redirect extends Component {\n  render() {\n    return (\n      <RouterContext.Consumer>\n        {(context) => {\n          const { to, push = false } = this.props;\n          // \u6e32\u67d3\u9636\u6bb5\uff0c\u4e0d\u80fd\u518d\u6e32\u67d3\u9636\u6bb5\u505a\u8df3\u8f6c\n          // \u83b7\u53d6\u5b50\u8282\u70b9\uff0c\u4f46\u662f\u5982\u679c\u8df3\u8f6c\u8d70\u4e86 \u6ca1\u6709\u5b50\u8282\u70b9\u4f1a\u62a5\u9519\n          return (\n            <LifeCycle\n              onMount={() => {\n                console.log(this);\n                return push\n                  ? context.history.push(to)\n                  : context.history.replace(to);\n              }}\n            ></LifeCycle>\n          );\n        }}\n      </RouterContext.Consumer>\n    );\n  }\n}\nclass LifeCycle extends Component {\n  componentDidMount() {\n    console.log(this);\n    if (this.props.onMount) {\n       // \u9700\u8981\u5f53\u524d\u7ec4\u4ef6\u7684\u58f0\u660e\u5468\u671f\n      this.props.onMount.call(this, this);\n    }\n  }\n  render() {\n    return null;\n  }\n}\n\n')),Object(c.b)("h2",{id:"withrouter"},"withRouter"),Object(c.b)("p",null,"\u5f53\u8def\u7531\u8868\u4e2d\u4f7f\u7528render\u51fd\u6570\u8fdb\u884c\u6e32\u67d3\u7684\u662f\uff0c\u5b50\u7ec4\u4ef6\u4e0d\u5bb9\u6613\u62ff\u5230history\u51fd\u6570\u4f8b\u5982:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"<Route render={() => <XXXcomponent />}></Route> \n// \u867d\u7136\u53ef\u4ee5\u7528\u4f20\u9012\u53c2\u6570\u7684\u5f62\u52bf\u4f20\u9012props\uff0c\u90a3\u4e48\u5982\u679c\u6709\u5d4c\u5957\u6bcf\u5c42\u90fd\u9700\u8981\u4f20\u9012 withRouter\u5c31\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\n")),Object(c.b)("p",null,"withRouter\u662f\u9ad8\u9636\u7ec4\u4ef6\u7684\u5f62\u52bf\uff0c\u7136\u540e\u4f20\u9012history\u76f8\u5173\u7684api\u3002"),Object(c.b)("p",null,"\u6ce8\u610f\uff1a \u5982\u679c\u8fd9\u4e48\u5199\u662f\u4e0d\u4f1a\u51fa\u73b0\u9875\u9762\u7684\uff0c\u6b64\u65f6\u7684context\u662f\u6700\u5916\u5c42\u7684context\uff0c\u4e5f\u5c31\u662fRouter\u91cc\u9762\u7684RouterContext.Provider\u91cc\u9762\u7684value match\u5339\u914d\u7684\u8def\u7531\u662f\u6211\u4eec\u5199\u7684\u9ed8\u8ba4\uff08\u4e0a\u9762Router\u91cc\u9762\u7684\u9759\u6001\u51fd\u6570\uff09"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const withRouter = (Component) => props => {\n  return (\n    <RouterContext.Consumner>\n       {\n          context => <Component {...props} {...context} />\n       }  \n    </RouterContext.Consumner>\n  )\n}\n")),Object(c.b)("p",null,"\ud83e\udd14\uff1a\u5982\u4f55\u89e3\u51b3\u5462\uff0c\u66b4\u529b\u7684\u65b9\u6cd5\u6211\u9700\u8981\u627e\u5230\u6700\u8fd1\u7684\u4e00\u5c42\uff0c\u6700\u8fd1\u7684\u4e00\u5c42\u5c31\u662f\u6211\u4eec\u4f7f\u7528Route\u7ec4\u4ef6\uff0c\u90a3\u4e48\u5728\u90a3\u91cc\u9762\u518d\u7ed9\u4ed6\u5305\u88f9\u4e00\u5c42RouterContext.Provider\u5c31\u53ef\u4ee5\u89e3\u51b3\u95ee\u9898\u4e86\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"// Route\u90e8\u5206\u4ee3\u7801\nreturn <RouterContext.Provider value={props}>\n    {match ? \n    (children ? \n     (typeof children === 'function' ? children(props): children) \n     :(component ? (React.createElement(component, props)) : (render ? (render(props)):null)\n     : (typeof children === 'function' ? children(props) : null)}\n        </RouterContext.Provider>\n")),Object(c.b)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u5b9e\u73b0react-router \u7684\u7b80\u5355\u65b9\u6cd5\uff0c\u6709\u4e00\u4e9b\u8fd8\u9700\u5f85\u4f18\u5316\uff0c\u6bd4\u5982LifeCycle\u91cc\u9762\u7684\u751f\u547d\u5468\u671f\uff0cRedirect\u91cc\u9762\uff0c"),Object(c.b)("p",null,"\u4e0b\u6b21\u66f4\u65b0react-router\u76f8\u5173\u7684function \u7ec4\u4ef6\u4f7f\u7528\u76f8\u5173\u51fd\u6570"),Object(c.b)("h2",{id:"hooks\u76f8\u5173\u65b9\u6cd5\u975e\u5e38\u7b80\u5355"},"Hooks\u76f8\u5173\u65b9\u6cd5\uff08\u975e\u5e38\u7b80\u5355\uff09"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import {RouterContext} from './Context';\nimport {useContext} from 'react';\nimport matchPath from './matchPath';\n\nexport function useHistory() {\n    return useContext(RouterContext).history;\n}\nexport function useLocation() {\n    return useContext(RouterContext).location;\n}\nexport function useRouteMatch(){\n    return useContext(RouterContext).match;\n}\nexport function useParams(){\n    const match = useContext(RouterContext).match;\n    return match ? match.params : {}\n}\n")))}m.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(a,".").concat(b)]||s[b]||h[b]||c;return n?o.a.createElement(m,l(l({ref:t},u),{},{components:n})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);