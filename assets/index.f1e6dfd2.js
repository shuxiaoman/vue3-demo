import{c as t,i as e,d as r,g as n}from"./index.ac87be5c.js";import{g as o,P as u,r as i,af as a,ag as f}from"./index.4dc84e3a.js";import{i as c}from"./LoadingOutlined.bbb32be2.js";import{f as s,g as l}from"./SearchOutlined.a621b315.js";import{b as d}from"./index.8e0557c8.js";import{b as p}from"./_baseProperty.74f89655.js";import{t as v}from"./isEqual.6d3b6835.js";var m=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function b(t){return m.test(t)}var y="[\\ud800-\\udfff]",h="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",g="\\ud83c[\\udffb-\\udfff]",O="[^\\ud800-\\udfff]",j="(?:\\ud83c[\\udde6-\\uddff]){2}",w="[\\ud800-\\udbff][\\udc00-\\udfff]",S="(?:"+h+"|"+g+")"+"?",P="[\\ufe0e\\ufe0f]?"+S+("(?:\\u200d(?:"+[O,j,w].join("|")+")[\\ufe0e\\ufe0f]?"+S+")*"),x="(?:"+[O+h+"?",h,j,w,y].join("|")+")",C=RegExp(g+"(?="+g+")|"+x+P,"g");function D(t){return b(t)?function(t){return t.match(C)||[]}(t):function(t){return t.split("")}(t)}var I=Math.floor;function $(t,e){var r="";if(!t||e<1||e>9007199254740991)return r;do{e%2&&(r+=t),(e=I(e/2))&&(t+=t)}while(e);return r}var E=p("length"),T="[\\ud800-\\udfff]",R="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",A="\\ud83c[\\udffb-\\udfff]",M="[^\\ud800-\\udfff]",N="(?:\\ud83c[\\udde6-\\uddff]){2}",H="[\\ud800-\\udbff][\\udc00-\\udfff]",k="(?:"+R+"|"+A+")"+"?",U="[\\ufe0e\\ufe0f]?"+k+("(?:\\u200d(?:"+[M,N,H].join("|")+")[\\ufe0e\\ufe0f]?"+k+")*"),V="(?:"+[M+R+"?",R,N,H,T].join("|")+")",q=RegExp(A+"(?="+A+")|"+V+U,"g");function B(t){return b(t)?function(t){for(var e=q.lastIndex=0;q.test(t);)++e;return e}(t):E(t)}var F=Math.ceil;function L(t,e){var r=(e=void 0===e?" ":s(e)).length;if(r<2)return r?$(e,t):e;var n=$(e,F(t/B(e)));return b(e)?function(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:d(t,e,r)}(D(n),0,t).join(""):n.slice(0,t)}function Y(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!e(t)}var _=function(e){var r,n=e.value,o=e.formatter,u=e.precision,i=e.decimalSeparator,a=e.groupSeparator,f=void 0===a?"":a,c=e.prefixCls;if("function"==typeof o)r=o({value:n});else{var s=String(n),d=s.match(/^(-?)(\d*)(\.(\d+))?$/);if(d){var p=d[1],m=d[2]||"0",b=d[4]||"";m=m.replace(/\B(?=(\d{3})+(?!\d))/g,f),"number"==typeof u&&(b=function(t,e,r){t=l(t);var n=(e=v(e))?B(t):0;return e&&n<e?t+L(e-n,r):t}(b,u,"0").slice(0,u)),b&&(b="".concat(i).concat(b)),r=[t("span",{key:"int",class:"".concat(c,"-content-value-int")},[p,m]),b&&t("span",{key:"decimal",class:"".concat(c,"-content-value-decimal")},Y(b)?b:{default:function(){return[b]}})]}else r=s}return t("span",{class:"".concat(c,"-content-value")},Y(r)?r:{default:function(){return[r]}})};function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function G(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function J(){return(J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function K(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!e(t)}_.displayName="StatisticNumber";var Q={prefixCls:u.string,decimalSeparator:u.string,groupSeparator:u.string,format:u.string,value:{type:[String,Number,Object]},valueStyle:u.style,valueRender:u.any,formatter:u.any,precision:u.number,prefix:u.VNodeChild,suffix:u.VNodeChild,title:u.VNodeChild,onFinish:u.func},W=r({name:"AStatistic",props:c(Q,{decimalSeparator:".",groupSeparator:","}),setup:function(){return{configProvider:n("configProvider",i)}},render:function(){var e=this.$props,r=e.prefixCls,n=e.value,u=void 0===n?0:n,i=e.valueStyle,a=e.valueRender,f=(0,this.configProvider.getPrefixCls)("statistic",r),c=o(this,"title"),s=o(this,"prefix"),l=o(this,"suffix"),d=o(this,"formatter",{},!1),p=J(J({},this.$props),{prefixCls:f,value:u,formatter:d}),v=t(_,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){G(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({"data-for-update":Date.now()},p),null);return a&&(v=a(v)),t("div",{class:f},[c&&t("div",{class:"".concat(f,"-title")},K(c)?c:{default:function(){return[c]}}),t("div",{style:i,class:"".concat(f,"-content")},[s&&t("span",{class:"".concat(f,"-content-prefix")},K(s)?s:{default:function(){return[s]}}),v,l&&t("span",{class:"".concat(f,"-content-suffix")},K(l)?l:{default:function(){return[l]}})])])}});function X(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(f){o=!0,u=f}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var tt=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function et(t,e){var r=t,n=/\[[^\]]*\]/g,o=(e.match(n)||[]).map((function(t){return t.slice(1,-1)})),u=e.replace(n,"[]"),i=tt.reduce((function(t,e){var n=X(e,2),o=n[0],u=n[1];if(-1!==t.indexOf(o)){var i=Math.floor(r/u);return r-=i*u,t.replace(new RegExp("".concat(o,"+"),"g"),(function(t){var e=t.length;return function(t,e,r){t=l(t);var n=(e=v(e))?B(t):0;return e&&n<e?L(e-n,r)+t:t}(i.toString(),e,"0")}))}return t}),u),a=0;return i.replace(n,(function(){var t=o[a];return a+=1,t}))}function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function nt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ot(){return(ot=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function ut(t){return a(f)(t).valueOf()}var it=r({name:"AStatisticCountdown",props:c(Q,{format:"HH:mm:ss"}),setup:function(){return{countdownId:void 0}},mounted:function(){this.syncTimer()},updated:function(){this.syncTimer()},beforeUnmount:function(){this.stopTimer()},methods:{syncTimer:function(){ut(this.$props.value)>=Date.now()?this.startTimer():this.stopTimer()},startTimer:function(){var t=this;this.countdownId||(this.countdownId=window.setInterval((function(){t.$refs.statistic.$forceUpdate(),t.syncTimer()}),33.333333333333336))},stopTimer:function(){var t=this.$props.value;this.countdownId&&(clearInterval(this.countdownId),this.countdownId=void 0,ut(t)<Date.now()&&this.$emit("finish"))},formatCountdown:function(t){var e=t.value,r=t.config,n=this.$props.format;return function(t,e){var r=e.format,n=void 0===r?"":r,o=a(f)(t).valueOf(),u=a(f)().valueOf();return et(Math.max(o-u,0),n)}(e,ot(ot({},r),{format:n}))},valueRenderHtml:function(t){return t}},render:function(){return t(W,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(r),!0).forEach((function(e){nt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:"statistic"},ot(ot({},this.$props),{valueRender:this.valueRenderHtml,formatter:this.formatCountdown})),null)}});W.Countdown=it,W.install=function(t){return t.component(W.name,W),t.component(W.Countdown.name,W.Countdown),t};export{W as S};
