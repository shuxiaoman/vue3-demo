import{d as e,x as t,w as i,c as n,r as o}from"./index.c3f19612.js";import{_ as r,o as a,d as s,x as l,y as u,a as c,g as d,z as p,B as f,C as v,D as m,j as g,U as h,h as y,E as x,p as w,F,G as b,H as j,f as O,t as C,I as k,s as A,i as L,e as R,c as S,J as G,K as M,L as W,M as E,n as I,P as B,N as D}from"./workspace.c6476b8c.js";import{a as N}from"./Content.83f87526.js";import"./index.9abf7f01.js";import{C as V}from"./index.254c9132.js";import"./vendor.60046542.js";import"./oauth.c36bba94.js";import"./index.1260f056.js";import"./createChainedFunction.2d5d7d53.js";import"./ExclamationCircleFilled.272f5460.js";import"./CloseCircleFilled.8f9a6edf.js";import"./LoadingOutlined.d965fc78.js";import"./InfoCircleOutlined.07b97495.js";import"./code.aa7872b2.js";import"./index.b77fb585.js";import"./LeftOutlined.3fa1ae45.js";import"./index.f68e50fe.js";import"./Col.a8e38b0d.js";function P(e,t){return e.views.find((function(e){return e.id===t}))}function H(e){return"number"==typeof e&&!isNaN(e)}function T(e){var t=e.options,i=t.xField,n=t.yField,o=t.interval,p=t.seriesField,f=t.tooltip,v=t.minColumnWidth,m=t.maxColumnWidth,g=t.columnBackground,h=c(f,[i,n,p]),y=h.fields,x=h.formatter,w=(o?d(s({},e,{options:{type:"interval",colorField:p,tooltipFields:y,mapping:r({tooltip:x},o),args:{minColumnWidth:v,maxColumnWidth:m,background:g}}})):e).ext;return function(e){var t=e.chart,i=e.options,n=e.ext,o=i.seriesField,r=i.isGroup,c=i.isStack,d=i.marginRatio,p=i.widthRatio,f=i.groupField,v=i.theme,m=[];return o&&(r&&m.push({type:"dodge",dodgeBy:f||o,marginRatio:d}),c&&m.push({type:"stack",marginRatio:d})),m.length&&(null==n?void 0:n.geometry)&&(null==n?void 0:n.geometry).adjust(m),a(p)||t.theme(s({},l(v)?v:u(v),{columnWidthRatio:p})),e}(r(r({},e),{ext:w}))}var q,z,J,K;(z=q||(q={})).Left="Left",z.Right="Right",(K=J||(J={})).Line="line",K.Column="column";var U={nice:!0,label:{autoHide:!0,autoRotate:!1}},X=r(r({},U),{position:"left"}),_=r(r({},U),{position:"right",grid:null});function Q(e){return v(e,"geometry")===J.Line}function Y(e){return v(e,"geometry")===J.Column}function Z(e,t,i){return Y(i)?s({},{geometry:J.Column,label:i.label&&i.isRange?{content:function(e){var i;return null===(i=e[t])||void 0===i?void 0:i.join("-")}}:void 0},i):r({geometry:J.Line},i)}function $(e,t){var i=e[0],n=e[1];return m(t)?[t[0],t[1]]:[v(t,i),v(t,n)]}function ee(e,t){return t===q.Left?!1!==e&&s({},X,e):t===q.Right?!1!==e&&s({},_,e):e}function te(e){var t=e.view,i=e.geometryOption,n=e.yField,o=e.legend,r=v(o,"marker"),a=g(t,Q(i)?"line":"interval");if(!i.seriesField){var s=a.getAttribute("color").values[0],l=r||(Q(i)?{symbol:function(e,t,i){return[["M",e-i,t],["L",e+i,t]]},style:{lineWidth:2,r:6,stroke:s}}:{symbol:"square",style:{fill:s}});return[{value:n,name:v(t,"options.scales."+n+".alias")||n,marker:l,isGeometry:!0,viewId:t.id}]}var u=a.getGroupAttributes();return f(u,(function(e,i){var n=h.getLegendItems(t,a,i,t.getTheme(),r);return e.concat(n)}),[])}var ie=function(e,t){var i=t[0],n=t[1],o=e.getOptions().data,r=e.getXScale(),a=b(o);if(r&&a){var s=j(o,r.field),l=b(s),u=Math.floor(i*(l-1)),c=Math.floor(n*(l-1));e.filter(r.field,(function(e){var t=s.indexOf(e);return!(t>-1)||function(e,t,i){var n=Math.min(t,i),o=Math.max(t,i);return e>=n&&e<=o}(t,u,c)})),e.render(!0)}};function ne(e){var t,i=e.options,n=i.geometryOptions,o=void 0===n?[]:n,r=i.xField,a=i.yField,l=k(o,(function(e){var t=e.geometry;return t===J.Line||void 0===t}));return s({},{options:{geometryOptions:[],meta:(t={},t[r]={type:"cat",sync:!0,range:l?[0,1]:void 0},t),tooltip:{showMarkers:l,showCrosshairs:l,shared:!0,crosshairs:{type:"x"}},interactions:l?[{type:"legend-visible-filter"}]:[{type:"legend-visible-filter"},{type:"active-region"}],legend:{position:"top-left"}}},e,{options:{yAxis:$(a,i.yAxis),geometryOptions:[Z(0,a[0],o[0]),Z(0,a[1],o[1])],annotations:$(a,i.annotations)}})}function oe(e){var t=e.chart,i=e.options,n=i.xField,o=i.yField,a=i.geometryOptions,l=i.data,u=i.tooltip,c={line:0,column:1};return[r(r({},a[0]),{id:"left-axes-view",data:l[0],yField:o[0]}),r(r({},a[1]),{id:"right-axes-view",data:l[1],yField:o[1]})].sort((function(e,t){return-c[e.geometry]+c[t.geometry]})).forEach((function(e){var i=e.id,o=e.data,a=e.yField,l=Y(e)&&e.isPercent,c=l?function(e,t,i,n){var o=f(e,(function(e,n){var o=n[i],r=e.has(o)?e.get(o):0,a=n[t];return r=H(a)?r+a:r,e.set(o,r),e}),new Map);return p(e,(function(e){var a,s=e[t],l=e[i],u=H(s)?s/o.get(l):0;return r(r({},e),((a={})[n]=u,a))}))}(o,a,n,a):o,d=t.createView({id:i}).data(c),v=l?r({formatter:function(t){return{name:t[e.seriesField]||a,value:(100*Number(t[a])).toFixed(2)+"%"}}},u):u;!function(e){var t=e.options,i=e.chart,n=t.geometryOption,o=n.isStack,a=n.color,l=n.seriesField,u=n.groupField,c=n.isGroup,d=["xField","yField"];if(Q(n)){y(s({},e,{options:r(r(r({},x(t,d)),n),{line:{color:n.color,style:n.lineStyle}})})),w(s({},e,{options:r(r(r({},x(t,d)),n),{point:n.point&&r({color:a,shape:"circle"},n.point)})}));var p=[];c&&p.push({type:"dodge",dodgeBy:u||l,customOffset:0}),o&&p.push({type:"stack"}),p.length&&F(i.geometries,(function(e){e.adjust(p)}))}Y(n)&&T(s({},e,{options:r(r(r({},x(t,d)),n),{widthRatio:n.columnWidthRatio,interval:r(r({},x(n,["color"])),{style:n.columnStyle})})}))}({chart:d,options:{xField:n,yField:a,tooltip:v,geometryOption:e}})})),e}function re(e){var t,i=e.chart,n=e.options.geometryOptions,o=(null===(t=i.getTheme())||void 0===t?void 0:t.colors10)||[],r=0;return i.once("beforepaint",(function(){F(n,(function(e,t){var n=P(i,0===t?"left-axes-view":"right-axes-view");if(!e.color){var a=n.getGroupScales(),s=v(a,[0,"values","length"],1),l=o.slice(r,r+s).concat(0===t?[]:o);n.geometries.forEach((function(t){e.seriesField?t.color(e.seriesField,l):t.color(l[0])})),r+=s}})),i.render(!0)})),e}function ae(e){var t,i,n=e.chart,o=e.options,r=o.xAxis,a=o.yAxis,l=o.xField,u=o.yField;return A(((t={})[l]=r,t[u[0]]=a[0],t))(s({},e,{chart:P(n,"left-axes-view")})),A(((i={})[l]=r,i[u[1]]=a[1],i))(s({},e,{chart:P(n,"right-axes-view")})),e}function se(e){var t=e.chart,i=e.options,n=P(t,"left-axes-view"),o=P(t,"right-axes-view"),r=i.xField,a=i.yField,s=i.xAxis,l=i.yAxis;return t.axis(r,!1),t.axis(a[0],!1),t.axis(a[1],!1),n.axis(r,s),n.axis(a[0],ee(l[0],q.Left)),o.axis(r,!1),o.axis(a[1],ee(l[1],q.Right)),e}function le(e){var t=e.chart,i=e.options.tooltip,n=P(t,"left-axes-view"),o=P(t,"right-axes-view");return t.tooltip(i),n.tooltip({shared:!0}),o.tooltip({shared:!0}),e}function ue(e){var t=e.chart;return L(s({},e,{chart:P(t,"left-axes-view")})),L(s({},e,{chart:P(t,"right-axes-view")})),e}function ce(e){var t=e.chart,i=e.options.annotations,n=v(i,[0]),o=v(i,[1]);return R(n)(s({},e,{chart:P(t,"left-axes-view"),options:{annotations:n}})),R(o)(s({},e,{chart:P(t,"right-axes-view"),options:{annotations:o}})),e}function de(e){var t=e.chart;return S(s({},e,{chart:P(t,"left-axes-view")})),S(s({},e,{chart:P(t,"right-axes-view")})),e}function pe(e){var t=e.chart,i=e.options.yAxis;return G(s({},e,{chart:P(t,"left-axes-view"),options:{yAxis:i[0]}})),G(s({},e,{chart:P(t,"right-axes-view"),options:{yAxis:i[1]}})),e}function fe(e){var t=e.chart,i=e.options,n=i.legend,o=i.geometryOptions,r=i.yField,a=i.data,u=P(t,"left-axes-view"),c=P(t,"right-axes-view");return!1===n?t.legend(!1):l(n)&&!0===n.custom?t.legend(n):(t.once("beforepaint",(function(){var e=a[0].length?te({view:u,geometryOption:o[0],yField:r[0],legend:n}):[],i=a[1].length?te({view:c,geometryOption:o[1],yField:r[1],legend:n}):[];t.legend(s({},n,{custom:!0,items:e.concat(i)}))})),t.on("legend-item:click",(function(e){var i=v(e,"gEvent.delegateObject",{});if(i&&i.item){var n=i.item,o=n.value,a=n.isGeometry,s=n.viewId;if(a){if(function(e,t,i){void 0===i&&(i=0);for(var n=i;n<e.length;n++)if(t(e[n],n))return n;return-1}(r,(function(e){return e===o}))>-1){var l=v(P(t,s),"geometries");F(l,(function(e){e.changeVisible(!i.item.unchecked)}))}}else{var u=v(t.getController("legend"),"option.items",[]);F(t.views,(function(e){var i=e.getGroupScales();F(i,(function(t){t.values&&t.values.indexOf(o)>-1&&e.filter(t.field,(function(e){return!M(u,(function(t){return t.value===e})).unchecked}))})),t.render(!0)}))}}}))),e}function ve(e){var t=e.chart,i=e.options.slider,n=P(t,"left-axes-view"),o=P(t,"right-axes-view");return i&&(n.option("slider",i),n.on("slider:valuechanged",(function(e){var t=e.event,i=t.value,n=t.originValue;W(i,n)||ie(o,i)})),t.once("afterpaint",(function(){if(!E(i)){var e=i.start,t=i.end;(e||t)&&ie(o,[e,t])}}))),e}function me(e){return O(ne,oe,ae,se,pe,le,ue,ce,C,de,re,fe,ve)(e)}var ge=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="dual-axes",t}return I(t,e),t.prototype.getDefaultOptions=function(){return s({},e.prototype.getDefaultOptions.call(this),{yAxis:[],syncViewPadding:!0})},t.prototype.getSchemaAdaptor=function(){return me},t}(B),he=e({props:{data:{type:Object,default:()=>[]}},setup(e){let o;const r={data:[e.data.column,e.data.line],xField:"date",yField:["value","count"],geometryOptions:[{geometry:"column",isStack:!0,seriesField:"type",label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]}},{geometry:"line",label:{style:{fill:"#626681"}}}]};return t((()=>{o=new ge("columnContainer",r),o.render()})),i(e.data,(e=>{o.changeData(e)})),()=>n("div",{id:"columnContainer"},null)}});var ye=e({setup(){const e=o(!0),i=o({column:[],line:[]}),r=async()=>{const t=await D();i.value.column.splice(0,t.length,...t),i.value.line=(e=>{const t={};return e.forEach((e=>{t[e.date]>=0?t[e.date]=t[e.date]+e.value:t[e.date]=e.value})),Object.entries(t).map((([e,t])=>({date:e,count:t})))})(i.value.column),e.value=!1};return t((()=>{r()})),()=>n(N,null,{default:()=>[n(V,{title:"营收",style:{"margin-bottom":"24px"},loading:e.value,bordered:!1,"body-style":{padding:0}},{default:()=>[n("div",{style:"min-height: 400px;margin:12px 24px"},[n(he,{data:i.value},null)])]})]})}});export default ye;
