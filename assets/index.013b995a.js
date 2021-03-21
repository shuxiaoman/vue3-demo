import{c as t,m as n,d as e,g as r,i as a}from"./index.dc6ffe47.js";import{I as o,A as c,P as i,n as s,g as l,o as u,r as f,ac as d}from"./index.3cdb096b.js";import{B as b}from"./index.35dbca64.js";import{A as g}from"./index.daaab110.js";import{T as h}from"./transButton.16214714.js";var p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};function v(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var m=function(e,r){var a=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?Object(arguments[n]):{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){v(t,n,e[n])}))}return t}({},e,r.attrs);return t(o,n(a,{icon:p}),null)};function j(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!a(t)}m.displayName="ArrowLeftOutlined",m.inheritAttrs=!1;var y={backIcon:i.VNodeChild,prefixCls:i.string,title:i.VNodeChild,subTitle:i.VNodeChild,breadcrumb:i.object,tags:i.any,footer:i.VNodeChild,extra:i.VNodeChild,avatar:i.object,ghost:i.looseBool,onBack:i.func},O=function(n,e){var r=e.avatar,a=l(e,"title"),o=l(e,"subTitle"),c=l(e,"tags"),i=l(e,"extra"),s=void 0!==l(e,"backIcon")?l(e,"backIcon"):t(m,null,null),u=e.onBack,f="".concat(n,"-heading");if(a||o||c||i){var b=function(n,e,r,a){return r&&a?t(d,{componentName:"PageHeader",children:function(a){var o=a.back;return t("div",{class:"".concat(e,"-back")},[t(h,{onClick:function(t){n.$emit("back",t)},class:"".concat(e,"-back-button"),"aria-label":o},j(r)?r:{default:function(){return[r]}})])}},null):null}(e,n,s,u);return t("div",{class:f},[b,r&&t(g,r,null),a&&t("span",{class:"".concat(f,"-title")},j(a)?a:{default:function(){return[a]}}),o&&t("span",{class:"".concat(f,"-sub-title")},j(o)?o:{default:function(){return[o]}}),c&&t("span",{class:"".concat(f,"-tags")},j(c)?c:{default:function(){return[c]}}),i&&t("span",{class:"".concat(f,"-extra")},j(i)?i:{default:function(){return[i]}})])}return null},x=function(n,e){return e?t("div",{class:"".concat(n,"-footer")},j(e)?e:{default:function(){return[e]}}):null},P=function(n,e){return t("div",{class:"".concat(n,"-content")},j(e)?e:{default:function(){return[e]}})},k=c(e({name:"APageHeader",props:y,setup:function(){return{configProvider:r("configProvider",f)}},render:function(){var n=this.configProvider,e=n.getPrefixCls,r=n.pageHeader,a=s(this),o=a.prefixCls,c=a.breadcrumb,i=l(this,"footer"),f=u(this),d=!0;"ghost"in a?d=a.ghost:r&&"ghost"in r&&(d=r.ghost);var g,h,p,v=e("page-header",o),m=c&&c.routes?function(n){return t(b,n,null)}(c):null,j=[v,(g={"has-breadcrumb":m,"has-footer":i},h="".concat(v,"-ghost"),p=d,h in g?Object.defineProperty(g,h,{value:p,enumerable:!0,configurable:!0,writable:!0}):g[h]=p,g)];return t("div",{class:j},[m,O(v,this),f.length?P(v,f):null,x(v,i)])}}));export{k as A};
