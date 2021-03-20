import{c as t,m as e}from"./index.7252bc7e.js";import{I as n,_ as r,G as i,i as o}from"./index.3bfd92be.js";var a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(r,i){var o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){u(t,e,n[e])}))}return t}({},r,i.attrs);return t(n,e(o,{icon:a}),null)};c.displayName="RightOutlined",c.inheritAttrs=!1;var f=function(){return r.Date.now()},l=Math.max,s=Math.min;function v(t,e,n){var r,a,u,c,v,b,m=0,d=!1,p=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,i=a;return r=a=void 0,m=e,c=t.apply(i,n)}function O(t){return m=t,v=setTimeout(j,e),d?y(t):c}function h(t){var n=t-b;return void 0===b||n>=e||n<0||p&&t-m>=u}function j(){var t=f();if(h(t))return w(t);v=setTimeout(j,function(t){var n=e-(t-b);return p?s(n,u-(t-m)):n}(t))}function w(t){return v=void 0,g&&r?y(t):(r=a=void 0,c)}function x(){var t=f(),n=h(t);if(r=arguments,a=this,b=t,n){if(void 0===v)return O(b);if(p)return clearTimeout(v),v=setTimeout(j,e),y(b)}return void 0===v&&(v=setTimeout(j,e)),c}return e=i(e)||0,o(n)&&(d=!!n.leading,u=(p="maxWait"in n)?l(i(n.maxWait)||0,e):u,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==v&&clearTimeout(v),m=0,r=b=a=v=void 0},x.flush=function(){return void 0===v?c:w(f())},x}var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(r,i){var o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){m(t,e,n[e])}))}return t}({},r,i.attrs);return t(n,e(o,{icon:b}),null)};d.displayName="LeftOutlined",d.inheritAttrs=!1;export{d as L,c as R,v as d};
