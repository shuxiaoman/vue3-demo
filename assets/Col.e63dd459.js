import{t,d as n,O as e,ab as r,ap as o,am as a,r as c,f as i,h as s,b as u,c as l,P as f}from"./index.6fdb0938.js";function p(){return(p=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var d=["xxl","xl","lg","md","sm","xs"],m={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},b=new Map,y=-1,x={},v={matchHandlers:{},dispatch:function(t){return x=t,b.forEach((function(t){return t(x)})),b.size>=1},subscribe:function(t){return b.size||this.register(),y+=1,b.set(y,t),t(x),y},unsubscribe:function(t){b.delete(t),b.size||this.unregister()},unregister:function(){var t=this;Object.keys(m).forEach((function(n){var e=m[n],r=t.matchHandlers[e];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),b.clear()},register:function(){var t=this;Object.keys(m).forEach((function(n){var e=m[n],r=function(e){var r,o,a,c=e.matches;t.dispatch(p(p({},x),(a=c,(o=n)in(r={})?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r)))},o=window.matchMedia(e);o.addListener(r),t.matchHandlers[e]={mql:o,listener:r},r(o)}))}};function g(){return(g=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var j=t("top","middle","bottom","stretch"),w=t("start","end","center","space-around","space-between"),P=n({name:"ARow",setup:function(t,n){var f,p=n.slots,m=e({gutter:void 0});r("rowContext",m),o((function(){f=v.subscribe((function(n){var e=t.gutter||0;(!Array.isArray(e)&&"object"===O(e)||Array.isArray(e)&&("object"===O(e[0])||"object"===O(e[1])))&&(b.value=n)}))})),a((function(){v.unsubscribe(f)}));var b=c({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),y=i("configProvider",s).getPrefixCls;return function(){var n,e,r=t.prefixCls,o=t.justify,a=t.align,c=y("row",r),i=function(){var n=[0,0],e=t.gutter,r=void 0===e?0:e;return(Array.isArray(r)?r:[r,0]).forEach((function(t,e){if("object"===O(t))for(var r=0;r<d.length;r++){var o=d[r];if(b.value[o]&&void 0!==t[o]){n[e]=t[o];break}}else n[e]=t||0})),n}(),s=u(c,(h(n={},"".concat(c,"-").concat(o),o),h(n,"".concat(c,"-").concat(a),a),n)),f=g(g({},i[0]>0?{marginLeft:"".concat(i[0]/-2,"px"),marginRight:"".concat(i[0]/-2,"px")}:{}),i[1]>0?{marginTop:"".concat(i[1]/-2,"px"),marginBottom:"".concat(i[1]/-2,"px")}:{});return m.gutter=i,l("div",{class:s,style:f},[null===(e=p.default)||void 0===e?void 0:e.call(p)])}}});function S(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function A(){return(A=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}P.props={type:f.oneOf(["flex"]),align:f.oneOf(j),justify:f.oneOf(w),prefixCls:f.string,gutter:f.oneOfType([f.object,f.number,f.array]).def(0)};var E=n({name:"ACol",setup:function(t,n){var e=n.slots,r=i("configProvider",s),o=i("rowContext",{});return function(){var n,a,c=o.gutter,i=t.prefixCls,s=t.span,f=t.order,p=t.offset,d=t.push,m=t.pull,b=t.flex,y=r.getPrefixCls("col",i),x={};["xs","sm","md","lg","xl","xxl"].forEach((function(n){var e,r={},o=t[n];"number"==typeof o?r.span=o:"object"===C(o)&&(r=o||{}),x=A(A({},x),(S(e={},"".concat(y,"-").concat(n,"-").concat(r.span),void 0!==r.span),S(e,"".concat(y,"-").concat(n,"-order-").concat(r.order),r.order||0===r.order),S(e,"".concat(y,"-").concat(n,"-offset-").concat(r.offset),r.offset||0===r.offset),S(e,"".concat(y,"-").concat(n,"-push-").concat(r.push),r.push||0===r.push),S(e,"".concat(y,"-").concat(n,"-pull-").concat(r.pull),r.pull||0===r.pull),e))}));var v=u(y,(S(n={},"".concat(y,"-").concat(s),void 0!==s),S(n,"".concat(y,"-order-").concat(f),f),S(n,"".concat(y,"-offset-").concat(p),p),S(n,"".concat(y,"-push-").concat(d),d),S(n,"".concat(y,"-pull-").concat(m),m),n),x),g={};return c&&(g=A(A(A({},c[0]>0?{paddingLeft:"".concat(c[0]/2,"px"),paddingRight:"".concat(c[0]/2,"px")}:{}),c[1]>0?{paddingTop:"".concat(c[1]/2,"px"),paddingBottom:"".concat(c[1]/2,"px")}:{}),g)),b&&(g.flex=function(t){return"number"==typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(b)),l("div",{class:v,style:g},[null===(a=e.default)||void 0===a?void 0:a.call(e)])}}}),T=f.oneOfType([f.string,f.number]),L=f.shape({span:T,order:T,offset:T,push:T,pull:T}).loose,k=f.oneOfType([f.string,f.number,L]);E.props={span:T,order:T,offset:T,push:T,pull:T,xs:k,sm:k,md:k,lg:k,xl:k,xxl:k,prefixCls:f.string,flex:T};export{P as A,E as a,d as b,v as r};