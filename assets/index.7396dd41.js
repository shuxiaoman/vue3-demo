import{d as t,c as e,a,x as i,w as l,r,e as o,i as s,F as n}from"./index.12acd203.js";import{g as d,P as p,a as u}from"./Content.aa574fb1.js";import"./index.73b2e416.js";import{g as c,d as m,_ as f,a as v,f as h,t as y,l as g,b as x,i as j,c as _,e as b,h as w,p as A,s as C,j as F,k,m as O,n as T,U as D,o as I,T as E,r as P,A as z,q as L,u as S,P as N,v as M,w as R}from"./workspace.30cd11fa.js";import{A as U}from"./index.9cc0a82e.js";import{R as q,C as B}from"./index.39758f4a.js";import{C as X}from"./index.44b155da.js";import{A as G}from"./index.28a4405a.js";import{L as H}from"./index.dbeee9ca.js";import{B as J}from"./index.e5947198.js";import{P as K}from"./index.1b062f80.js";import{S as Q}from"./index.5dae9fd2.js";import"./vendor.60046542.js";import"./oauth.0fbac1c5.js";import"./index.2669f094.js";import"./createChainedFunction.2d5d7d53.js";import"./ExclamationCircleFilled.24db5179.js";import"./CloseCircleFilled.98210c86.js";import"./LoadingOutlined.dc6e05cf.js";import"./InfoCircleOutlined.e7669de6.js";import"./code.aa7872b2.js";import"./index.a323c047.js";import"./dropdown.3e4207d8.js";import"./Trigger.af69af78.js";import"./LeftOutlined.eabff285.js";import"./EllipsisOutlined.fee40739.js";import"./index.916fb509.js";import"./isEqual.103e89b2.js";import"./_Uint8Array.70680759.js";import"./Event.c36f22c9.js";import"./colors.a960b8af.js";import"./transButton.c0fd4360.js";import"./Col.dbf55f62.js";import"./index.909aa1c2.js";import"./initDefaultProps.f4792837.js";import"./index.47d36ca0.js";import"./SearchOutlined.a420bf3c.js";import"./identity.efc00901.js";import"./CheckOutlined.5bf90af6.js";import"./wave.f3d26954.js";import"./_baseProperty.74f89655.js";var V=t({setup:(t,{slots:i})=>()=>e("div",{class:"av-header-wrap"},[e("div",{class:"av-header-wrap-content"},[d(i,"content")]),e("div",{class:"av-header-wrap-extra"},[a(" "),d(i,"extra")])])});var W="_page-header-content_rv028_1",Y="_avatar_rv028_4",Z="_content_rv028_13",$="_content-title_rv028_21",tt="_extra-content_rv028_28",et="_stat-item_rv028_44",at="_project-list_rv028_80",it="_card-title_rv028_80",lt="_card-description_rv028_95",rt="_project-item_rv028_101",ot="_datetime_rv028_117",st="_item-group_rv028_128",nt="_members_rv028_139",dt="_member_rv028_139",pt="_project-card-grid_rv028_158",ut="_welcome-text_rv028_166";function ct(t){var e=t.chart,a=t.options,i=a.data,l=a.lineStyle,r=a.color,o=a.point,s=a.area,n=null==o?void 0:o.state;e.data(i);var d=m({},t,{options:{line:{style:l,color:r},point:o?f({color:r},o):o,area:s?f({color:r},s):s,label:void 0}}),p=m({},d,{options:{tooltip:!1}}),u=m({},d,{options:{tooltip:!1,state:n}});return w(d),A(u),function(t){var e=t.options,a=e.area,i=e.xField,l=e.yField,r=e.seriesField,o=e.smooth,s=e.tooltip,n=v(s,[i,l,r]),d=n.fields,p=n.formatter;a&&c(m({},t,{options:{type:"area",colorField:r,tooltipFields:d,mapping:f({shape:o?"smooth":"area",tooltip:p},a)}}))}(p),t}function mt(t){var e,a=t.options,i=a.xAxis,l=a.yAxis,r=a.xField,o=a.yField;return h(C(((e={})[r]=i,e[o]=l,e)))(t)}function ft(t){var e=t.chart,a=t.options,i=a.radius,l=a.startAngle,r=a.endAngle;return e.coordinate("polar",{radius:i,startAngle:l,endAngle:r}),t}function vt(t){var e=t.chart,a=t.options,i=a.xField,l=a.xAxis,r=a.yField,o=a.yAxis;return e.axis(i,l),e.axis(r,o),t}function ht(t){var e=t.chart,a=t.options,i=a.label,l=a.yField,r=F(e,"line");if(i){var o=i.callback,s=k(i,["callback"]);r.label({fields:[l],callback:o,cfg:O(s)})}else r.label(!1);return t}function yt(t){return h(ct,mt,y,ft,vt,g,x,ht,j,_,b())(t)}P("radar-tooltip",function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return T(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return"radar-tooltip"},enumerable:!1,configurable:!0}),e.prototype.getTooltipItems=function(e){var a=this.getTooltipCfg(),i=a.shared,l=a.title,r=t.prototype.getTooltipItems.call(this,e);if(r.length>0){var o=this.view.geometries[0],s=o.dataArray,n=r[0].name,d=[];return s.forEach((function(t){t.forEach((function(t){var e=D.getTooltipItems(t,o)[0];if(!i&&e&&e.name===n){var a=I(l)?n:l;d.push(f(f({},e),{name:e.title,title:a}))}else if(i&&e){a=I(l)?e.name||n:l;d.push(f(f({},e),{name:e.title,title:a}))}}))})),d}return[]},e}(E)),S("radar-tooltip",function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return T(e,t),e.prototype.init=function(){this.context.view.removeInteraction("tooltip")},e.prototype.show=function(){var t=this.context.event;this.getTooltipController().showTooltip({x:t.x,y:t.y})},e.prototype.hide=function(){this.getTooltipController().hideTooltip()},e.prototype.getTooltipController=function(){return this.context.view.getController("radar-tooltip")},e}(z)),L("radar-tooltip",{start:[{trigger:"plot:mousemove",action:"radar-tooltip:show"}],end:[{trigger:"plot:mouseleave",action:"radar-tooltip:hide"}]});var gt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="radar",e}return T(e,t),e.prototype.changeData=function(t){this.updateOption({data:t}),this.chart.changeData(t)},e.prototype.getDefaultOptions=function(){return m({},t.prototype.getDefaultOptions.call(this),{xAxis:{label:{offset:15},grid:{line:{type:"line"}}},yAxis:{grid:{line:{type:"circle"}}},legend:{position:"top"},tooltip:{shared:!0,showCrosshairs:!0,showMarkers:!0,crosshairs:{type:"xy",line:{style:{stroke:"#565656",lineDash:[4]}},follow:!0}}})},e.prototype.getSchemaAdaptor=function(){return yt},e}(N),xt=t({props:{data:{type:Array,default:()=>[]}},setup(t){let a;const r={data:t.data,xField:"item",yField:"score",seriesField:"user",meta:{score:{alias:"分数",min:0,max:80}},xAxis:{line:null,tickLine:null,grid:{line:{style:{lineDash:null}}}},yAxis:{line:null,tickLine:null,grid:{line:{type:"line",style:{lineDash:null}}}},point:{size:2}};return i((()=>{a=new gt("radarContainer",r),a.render()})),l(t.data,(t=>{a.changeData(t)})),()=>e("div",{id:"radarContainer"},null)}});function jt(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!s(t)}var _t=t({setup(){const t=r(!1),l=r(!1),s=r([]),d=r([]),c=r([]),m=o({avatar:"",name:""}),f=r([]),v=r({projectNum:0,teamRank:0,visitNum:0}),h=()=>e("div",{class:W},[e("div",{class:Y},[e(G,{size:"large",src:m.avatar},null)]),e("div",{class:Z},[e("div",{class:$},[a("早安，"),m.name,e("span",{class:ut},[a("，今天又是搬砖的一天")])]),e("div",null,[a("全栈工程师 | 板砖技术部 - 某某某事业群 - 前端平台")])])]),y=()=>e("div",{class:tt},[e("div",{class:et},[e(Q,{title:"项目数",value:v.value.projectNum},null)]),e("div",{class:et},[e(Q,{title:"团队内排名",value:v.value.teamRank,suffix:"/ 24"},null)]),e("div",{class:et},[e(Q,{title:"项目访问",value:v.value.visitNum},null)])]);return i((()=>{(async()=>{const{currentUser:t,projects:e,activities:a,teams:i,statistic:l}=await M();m.avatar=t.avatar,m.name=t.name,s.value.push(...e),d.value.push(...a),c.value.push(...i),v.value=l;const r=await R();f.value.splice(0,f.value.length,...r)})()})),()=>{let i,r;return e(n,null,[e(p,null,{default:()=>[e(U,{title:"工作台"},{default:()=>[e(V,null,{content:h,extra:y})]})]}),e(u,null,{default:()=>[e(q,{gutter:24},{default:()=>[e(B,{xl:16,lg:24,md:24,sm:24,xs:24},{default:()=>[e(X,{class:at,loading:t.value,style:"margin-bottom: 22px;",bordered:!1,title:"所有项目","body-style":{padding:0},extra:e("a",null,[a("其他")])},{default:()=>[e("div",null,[s.value.map((t=>e(X.Grid,{class:pt,key:t.id},{default:()=>[e(X,{bordered:!1,"body-style":{padding:0}},{default:()=>[e(X.Meta,null,{title:()=>e("div",{class:it},[e(G,{size:"small",src:t.cover},null),e("a",null,[t.title])]),description:()=>e("div",{class:lt},[t.description])}),e("div",{class:rt},[e("a",{href:"/#/"},[a("科学搬砖组")]),e("span",{class:ot},[a("9小时前")])])]})]})))])]}),e(X,{loading:t.value,title:"动态",bordered:!1},{default:()=>[e(H,null,jt(i=d.value.map((t=>e(H.Item,{key:t.id},{default:()=>[e(H.Item.Meta,{avatar:e(G,{src:t.avatar},null)},{title:()=>e("div",null,[e("span",null,[t.nickname]),a("  在 "),e("a",{href:"#"},[t.project]),a(" "),e("span",null,[t.action]),a(" "),e("a",{href:"#"},[t.event])]),description:()=>e("div",null,[t.time])})]}))))?i:{default:()=>[i]})]})]}),e(B,{style:"padding: 0 12px",xl:8,lg:24,md:24,sm:24,xs:24},{default:()=>[e(X,{title:"快速开始 / 便捷导航",style:"margin-bottom: 24px",bordered:!1,"body-style":{padding:0}},{default:()=>[e("div",{class:st},[e("a",null,[a("操作一")]),e("a",null,[a("操作二")]),e("a",null,[a("操作三")]),e("a",null,[a("操作四")]),e("a",null,[a("操作五")]),e("a",null,[a("操作六")]),e(J,{size:"small",type:"primary",ghost:!0,icon:e(K,null,null)},{default:()=>[a("添加")]})])]}),e(X,{title:"XX 指数",style:"margin-bottom: 24px",loading:l.value,bordered:!1,"body-style":{padding:0}},{default:()=>[e("div",{style:"min-height: 400px;"},[e(xt,{data:f.value},null)])]}),e(X,{loading:t.value,title:"团队",bordered:!1},{default:()=>[e("div",{class:nt},[e(q,null,jt(r=c.value.map((t=>e(B,{key:t.id,span:12},{default:()=>[e("a",null,[e(G,{size:"small",src:t.avatar},null),e("span",{class:dt},[t.name])])]}))))?r:{default:()=>[r]})])]})]})]})]})])}}});export default _t;