import{d as e,n as t,c as n,g as r,p as o,i as a}from"./index.c3f19612.js";import{B as i,M as c,P as s,q as u,h as l,d as f,c as d,l as p,t as h,r as b,e as g}from"./index.9abf7f01.js";function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=e({name:"Checkbox",mixins:[i],inheritAttrs:!1,props:c({prefixCls:s.string,name:s.string,id:s.string,type:s.string,defaultChecked:u(s.oneOfType([s.number,s.looseBool])),checked:u(s.oneOfType([s.number,s.looseBool])),disabled:s.looseBool,tabindex:s.oneOfType([s.string,s.number]),readonly:s.looseBool,autofocus:s.looseBool,value:s.any},{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),data:function(){return{sChecked:l(this,"checked")?this.checked:this.defaultChecked}},watch:{checked:function(e){this.sChecked=e}},mounted:function(){t((function(){}))},methods:{focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},handleChange:function(e){var t=f(this);if(!t.disabled){"checked"in t||(this.sChecked=e.target.checked),e.shiftKey=this.eventShiftKey;var n={target:C(C({},t),{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e};"checked"in t&&(this.$refs.input.checked=t.checked),this.__emit("update:checked",n),this.__emit("change",n),this.eventShiftKey=!1}},onClick:function(e){this.__emit("click",e),this.eventShiftKey=e.shiftKey}},render:function(){var e,t=f(this),r=t.prefixCls,o=t.name,a=t.id,i=t.type,c=t.disabled,s=t.readonly,u=t.tabindex,l=t.autofocus,p=t.value,h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value"]),b=this.$attrs,g=b.class,y=b.onFocus,m=b.onBlur,x=Object.keys(C(C({},h),this.$attrs)).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=h[t]),e}),{}),j=this.sChecked,k=d(r,g,(O(e={},"".concat(r,"-checked"),j),O(e,"".concat(r,"-disabled"),c),e)),P=C(C({name:o,id:a,type:i,readonly:s,disabled:c,tabindex:u,class:"".concat(r,"-input"),checked:!!j,autofocus:l,value:p},x),{onChange:this.handleChange,onClick:this.onClick,onFocus:y,onBlur:m});return n("span",{class:k},[n("input",v({ref:"input"},P),null),n("span",{class:"".concat(r,"-inner")},null)])}});function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var w={prefixCls:s.string,defaultChecked:s.looseBool,checked:s.looseBool,disabled:s.looseBool,isGroup:s.looseBool,value:s.any,name:s.string,id:s.string,autofocus:s.looseBool,type:s.string.def("radio"),onChange:s.func,onFocus:s.func,onBlur:s.func},G=e({name:"ARadio",props:w,emits:["update:checked","update:value","change","blur","focus"],setup:function(){return{configProvider:r("configProvider",p),radioGroupContext:r("radioGroupContext",null)}},methods:{focus:function(){this.$refs.vcCheckbox.focus()},blur:function(){this.$refs.vcCheckbox.blur()},handleChange:function(e){var t=e.target.checked;this.$emit("update:checked",t),this.$emit("update:value",t),this.$emit("change",e)},onChange2:function(e){this.$emit("change",e),this.radioGroupContext&&this.radioGroupContext.onRadioChange&&this.radioGroupContext.onRadioChange(e)}},render:function(){var e,t=this.$slots,r=this.radioGroupContext,o=f(this),a=o.prefixCls,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(o,["prefixCls"]),c=(0,this.configProvider.getPrefixCls)("radio",a),s=P({prefixCls:c},i);r?(s.name=r.name,s.onChange=this.onChange2,s.checked=o.value===r.stateValue,s.disabled=o.disabled||r.disabled):s.onChange=this.handleChange;var u=d((k(e={},"".concat(c,"-wrapper"),!0),k(e,"".concat(c,"-wrapper-checked"),s.checked),k(e,"".concat(c,"-wrapper-disabled"),s.disabled),e));return n("label",{class:u},[n(m,j(j({},s),{},{ref:"vcCheckbox"}),null),t.default&&n("span",null,[t.default()])])}});function B(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!a(e)}var S=e({name:"ARadioGroup",props:{prefixCls:s.string,defaultValue:s.any,value:s.any,size:s.oneOf(h("large","default","small")).def("default"),options:s.array,disabled:s.looseBool,name:s.string,buttonStyle:s.string.def("outline"),onChange:s.func},emits:["update:value","change"],setup:function(){return{updatingValue:!1,configProvider:r("configProvider",p),radioGroupContext:null}},data:function(){var e=this.value,t=this.defaultValue;return{stateValue:void 0===e?t:e}},watch:{value:function(e){this.updatingValue=!1,this.stateValue=e}},created:function(){this.radioGroupContext=o("radioGroupContext",this)},methods:{onRadioChange:function(e){var n=this,r=this.stateValue,o=e.target.value;l(this,"value")||(this.stateValue=o),this.updatingValue||o===r||(this.updatingValue=!0,this.$emit("update:value",o),this.$emit("change",e)),t((function(){n.updatingValue=!1}))}},render:function(){var e,t,r,o=this,a=f(this),i=a.prefixCls,c=a.options,s=a.buttonStyle,u=(0,this.configProvider.getPrefixCls)("radio",i),l="".concat(u,"-group"),p=d(l,"".concat(l,"-").concat(s),(e={},t="".concat(l,"-").concat(a.size),r=a.size,t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e)),h=b(g(this));return c&&c.length>0&&(h=c.map((function(e){return"string"==typeof e?n(G,{key:e,prefixCls:u,disabled:a.disabled,value:e,checked:o.stateValue===e},B(e)?e:{default:function(){return[e]}}):n(G,{key:"radio-group-value-options-".concat(e.value),prefixCls:u,disabled:e.disabled||a.disabled,value:e.value,checked:o.stateValue===e.value},{default:function(){return[e.label]}})}))),n("div",{class:p},B(h)?h:{default:function(){return[h]}})}});function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $=e({name:"ARadioButton",props:V({},w),setup:function(){return{configProvider:r("configProvider",p),radioGroupContext:r("radioGroupContext",{})}},render:function(){var e,t,r=f(this),o=r.prefixCls,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(r,["prefixCls"]),c=V({prefixCls:(0,this.configProvider.getPrefixCls)("radio-button",o)},i);return this.radioGroupContext&&(c.onChange=this.radioGroupContext.onRadioChange,c.checked=r.value===this.radioGroupContext.stateValue,c.disabled=r.disabled||this.radioGroupContext.disabled),n(G,c,"function"==typeof(t=e=g(this))||"[object Object]"===Object.prototype.toString.call(t)&&!a(t)?e:{default:function(){return[e]}})}});G.Group=S,G.Button=$,G.install=function(e){return e.component(G.name,G),e.component(G.Group.name,G.Group),e.component(G.Button.name,G.Button),e};export{m as C,G as R};
