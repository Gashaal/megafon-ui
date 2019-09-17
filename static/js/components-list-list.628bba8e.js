(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/List/List.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./src/utils/cn.ts");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=Object(s.a)("mfui-list"),f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props.as,t=this.props,n=t.hAlign,a=t.color,o=t.weight,i=t.className,s=t.children;return r.createElement(e,{className:u("",{"h-align":n,color:a,weight:o},i)},s)}}])&&c(n.prototype,a),o&&c(n,o),t}();Object.defineProperty(f,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{as:"ul",color:"black",weight:"regular"}});var d=f;try{f.displayName="List",f.__docgenInfo={description:"",displayName:"List",props:{as:{defaultValue:{value:"ul"},description:"List type",name:"as",required:!1,type:{name:'"ul" | "ol"'}},hAlign:{defaultValue:null,description:"Align the list horizontally",name:"hAlign",required:!1,type:{name:'"center" | "right"'}},weight:{defaultValue:{value:"regular"},description:"Font weight",name:"weight",required:!1,type:{name:'"light" | "regular" | "bold"'}},color:{defaultValue:{value:"black"},description:"Color",name:"color",required:!1,type:{name:'"black" | "white" | "gray" | "green" | "purple" | "red" | "inherit"'}},className:{defaultValue:null,description:"Custom classname",name:"className",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:f.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(e){}function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=Object(s.a)("mfui-list-item"),L=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return r.createElement("li",{className:E("",{},this.props.className)},this.props.children)}}])&&h(n.prototype,a),o&&h(n,o),t}(),_=L;try{L.displayName="ListItem",L.__docgenInfo={description:"",displayName:"ListItem",props:{className:{defaultValue:null,description:"Custom classname",name:"className",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:L.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(e){}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.components;O(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"list"}},a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h1",props:{"aria-hidden":!0,href:"#list"}},a.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"List"),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"properties"}},a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},a.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),a.a.createElement(i.e,{of:d}),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},a.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),a.a.createElement(i.d,{__position:1,__code:"<List>\n  <ListItem>Eat</ListItem>\n  <ListItem>Sleep</ListItem>\n  <ListItem>Traing</ListItem>\n  <ListItem>Repeat</ListItem>\n</List>"},a.a.createElement(d,null,a.a.createElement(_,null,"Eat"),a.a.createElement(_,null,"Sleep"),a.a.createElement(_,null,"Traing"),a.a.createElement(_,null,"Repeat"))),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"centered-usage"}},a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#centered-usage"}},a.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Centered usage"),a.a.createElement(i.d,{__position:2,__code:'<List hAlign="center" as="ol">\n  <ListItem>Eat</ListItem>\n  <ListItem>Sleep</ListItem>\n  <ListItem>Traing</ListItem>\n  <ListItem>Repeat</ListItem>\n</List>'},a.a.createElement(d,{hAlign:"center",as:"ol"},a.a.createElement(_,null,"Eat"),a.a.createElement(_,null,"Sleep"),a.a.createElement(_,null,"Traing"),a.a.createElement(_,null,"Repeat"))))}}}]);