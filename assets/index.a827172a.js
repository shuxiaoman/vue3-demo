import{d as t,g as n,c as e,i as r,s as o,v as s}from"./index.c3f19612.js";import{B as i,c as a,k as u,P as c,l,M as f,g as h,e as p,b as m,T as d,t as b,s as y}from"./index.9abf7f01.js";import{o as g}from"./_Uint8Array.3702c4de.js";import{P as v}from"./colors.d5d0e331.js";import{i as C}from"./isNumeric.2bec345d.js";function S(){return(S=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function N(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!r(t)}function x(t){return t?t.toString().split("").reverse().map((function(t){var n=Number(t);return isNaN(n)?t:n})):[]}var O=t({name:"ScrollNumber",mixins:[i],inheritAttrs:!1,props:{prefixCls:c.string,count:c.any,component:c.string,title:c.oneOfType([c.number,c.string,null]),displayComponent:c.any,onAnimated:c.func},emits:["animated"],setup:function(){return{configProvider:n("configProvider",l),lastCount:void 0,timeout:void 0}},data:function(){return{animateStarted:!0,sCount:this.count}},watch:{count:function(){this.lastCount=this.sCount,this.setState({animateStarted:!0})}},updated:function(){var t=this,n=this.animateStarted,e=this.count;n&&(this.clearTimeout(),this.timeout=setTimeout((function(){t.setState({animateStarted:!1,sCount:e},t.handleAnimated)})))},beforeUnmount:function(){this.clearTimeout()},methods:{clearTimeout:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0)})),getPositionByNum:function(t,n){var e=this.sCount,r=Math.abs(Number(e)),o=Math.abs(Number(this.lastCount)),s=Math.abs(x(e)[n]),i=Math.abs(x(this.lastCount)[n]);return this.animateStarted?10+t:r>o?s>=i?10+t:20+t:s<=i?10+t:t},handleAnimated:function(){this.$emit("animated")},renderNumberList:function(t,n){for(var r=[],o=0;o<30;o++)r.push(e("p",{key:o.toString(),class:a(n,{current:t===o})},[o%10]));return r},renderCurrentNumber:function(t,n,r){if("number"==typeof n){var o=this.getPositionByNum(n,r),s={transition:this.animateStarted||void 0===x(this.lastCount)[r]?"none":void 0,msTransform:"translateY(".concat(100*-o,"%)"),WebkitTransform:"translateY(".concat(100*-o,"%)"),transform:"translateY(".concat(100*-o,"%)")};return e("span",{class:"".concat(t,"-only"),style:s,key:r},[this.renderNumberList(o,"".concat(t,"-only-unit"))])}return e("span",{key:"symbol",class:"".concat(t,"-symbol")},N(n)?n:{default:function(){return[n]}})},renderNumberElement:function(t){var n=this,e=this.sCount;return e&&Number(e)%1==0?x(e).map((function(e,r){return n.renderCurrentNumber(t,e,r)})).reverse():e}},render:function(){var t,n=this.prefixCls,r=this.title,o=this.component,s=void 0===o?"sup":o,i=this.displayComponent,c=(0,this.configProvider.getPrefixCls)("scroll-number",n),l=this.$attrs,f=l.class,h=l.style,p=void 0===h?{}:h;if(i)return u(i,{class:a("".concat(c,"-custom-component"),i.props&&i.props.class)});var m=g(S(S({},this.$props),this.$attrs),["count","onAnimated","component","prefixCls","displayComponent"]),d=S({},p),b=S(S({},m),{title:r,style:d,class:a(c,f)});return p&&p.borderColor&&(b.style.boxShadow="0 0 0 1px ".concat(p.borderColor," inset")),e(s,b,N(t=this.renderNumberElement(c))?t:{default:function(){return[t]}})}});function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function w(){return(w=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function T(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!r(t)}function B(t){return-1!==v.indexOf(t)}var D=y(t({name:"ABadge",props:f({count:c.VNodeChild,showZero:c.looseBool,overflowCount:c.number,dot:c.looseBool,prefixCls:c.string,scrollNumberPrefixCls:c.string,status:c.oneOf(b("success","processing","default","error","warning")),color:c.string,text:c.VNodeChild,offset:c.arrayOf(c.oneOfType([String,Number])),numberStyle:c.style,title:c.string},{showZero:!1,dot:!1,overflowCount:99}),setup:function(){return{configProvider:n("configProvider",l),badgeCount:void 0}},methods:{getNumberedDispayCount:function(){var t=this.$props.overflowCount,n=this.badgeCount;return n>t?"".concat(t,"+"):n},getDispayCount:function(){return this.isDot()?"":this.getNumberedDispayCount()},getScrollNumberTitle:function(){var t=this.$props.title,n=this.badgeCount;return t||("string"==typeof n||"number"==typeof n?n:void 0)},getStyleWithOffset:function(){var t=this.$props,n=t.offset,e=t.numberStyle;return w(n?{right:"".concat(-parseInt(n[0],10),"px"),marginTop:C(n[1])?"".concat(n[1],"px"):n[1]}:{},e)},getBadgeClassName:function(t,n){var e,r=this.hasStatus();return a(t,(P(e={},"".concat(t,"-status"),r),P(e,"".concat(t,"-dot-status"),r&&this.dot&&!this.isZero()),P(e,"".concat(t,"-not-a-wrapper"),!n.length),e))},hasStatus:function(){var t=this.$props,n=t.status,e=t.color;return!!n||!!e},isZero:function(){var t=this.getNumberedDispayCount();return"0"===t||0===t},isDot:function(){var t=this.$props.dot,n=this.isZero();return t&&!n||this.hasStatus()},isHidden:function(){var t=this.$props.showZero,n=this.getDispayCount(),e=this.isZero(),r=this.isDot();return(null==n||""===n||e&&!t)&&!r},renderStatusText:function(t){var n=h(this,"text");return this.isHidden()||!n?null:e("span",{class:"".concat(t,"-status-text")},T(n)?n:{default:function(){return[n]}})},renderDispayComponent:function(){var t=this.badgeCount;if(t&&"object"===j(t))return u(t,{style:this.getStyleWithOffset()},!1)},renderBadgeNumber:function(t,n){var r,i=this.$props,a=i.status,u=i.color,c=this.badgeCount,l=this.getDispayCount(),f=this.isDot(),h=this.isHidden(),p=(P(r={},"".concat(t,"-dot"),f),P(r,"".concat(t,"-count"),!f),P(r,"".concat(t,"-multiple-words"),!f&&c&&c.toString&&c.toString().length>1),P(r,"".concat(t,"-status-").concat(a),!!a),P(r,"".concat(t,"-status-").concat(u),B(u)),r),m=this.getStyleWithOffset();return u&&!B(u)&&((m=m||{}).background=u),h?null:o(e(O,{prefixCls:n,"data-show":!h,class:p,count:l,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:m,key:"scrollNumber"},null),[[s,!h]])}},render:function(){var t,n=this.prefixCls,r=this.scrollNumberPrefixCls,o=this.status,s=this.color,i=h(this,"text"),u=this.configProvider.getPrefixCls,c=u("badge",n),l=u("scroll-number",r),f=p(this),b=h(this,"count");Array.isArray(b)&&(b=b[0]),this.badgeCount=b;var y=this.renderBadgeNumber(c,l),g=this.renderStatusText(c),v=a((P(t={},"".concat(c,"-status-dot"),this.hasStatus()),P(t,"".concat(c,"-status-").concat(o),!!o),P(t,"".concat(c,"-status-").concat(s),B(s)),t)),C={};if(s&&!B(s)&&(C.background=s),!f.length&&this.hasStatus()){var S=this.getStyleWithOffset(),N=S&&S.color;return e("span",{class:this.getBadgeClassName(c,f),style:S},[e("span",{class:v,style:C},null),e("span",{style:{color:N},class:"".concat(c,"-status-text")},T(i)?i:{default:function(){return[i]}})])}var x=m(f.length?"".concat(c,"-zoom"):"");return e("span",{class:this.getBadgeClassName(c,f)},[f,e(d,x,T(y)?y:{default:function(){return[y]}}),g])}}));export{D as B};
