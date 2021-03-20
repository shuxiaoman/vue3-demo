import{c as t,m as e}from"./index.eacc0f41.js";import{I as n,_ as r,G as i,i as a}from"./index.9c3a4ca5.js";var o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(r,i){var a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){c(t,e,n[e])}))}return t}({},r,i.attrs);return t(n,e(a,{icon:o}),null)};u.displayName="RightOutlined",u.inheritAttrs=!1;var f=function(){return r.Date.now()},l=Math.max,s=Math.min;function v(t,e,n){var r,o,c,u,v,m,b=0,d=!1,p=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,i=o;return r=o=void 0,b=e,u=t.apply(i,n)}function O(t){return b=t,v=setTimeout(j,e),d?y(t):u}function h(t){var n=t-m;return void 0===m||n>=e||n<0||p&&t-b>=c}function j(){var t=f();if(h(t))return w(t);v=setTimeout(j,function(t){var n=e-(t-m);return p?s(n,c-(t-b)):n}(t))}function w(t){return v=void 0,g&&r?y(t):(r=o=void 0,u)}function x(){var t=f(),n=h(t);if(r=arguments,o=this,m=t,n){if(void 0===v)return O(m);if(p)return clearTimeout(v),v=setTimeout(j,e),y(m)}return void 0===v&&(v=setTimeout(j,e)),u}return e=i(e)||0,a(n)&&(d=!!n.leading,c=(p="maxWait"in n)?l(i(n.maxWait)||0,e):c,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==v&&clearTimeout(v),b=0,r=m=o=v=void 0},x.flush=function(){return void 0===v?u:w(f())},x}var m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(r,i){var a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){b(t,e,n[e])}))}return t}({},r,i.attrs);return t(n,e(a,{icon:m}),null)};d.displayName="LeftOutlined",d.inheritAttrs=!1;export{d as L,u as R,v as d};
