import{d as e,e as a,r as l,c as t,a as i,F as r}from"./index.eacc0f41.js";import{P as o,a as s}from"./Content.8490e6ed.js";import"./index.9c3a4ca5.js";import{A as d}from"./index.3de44403.js";import{C as n}from"./index.bd47132d.js";import{F as u}from"./index.4ec4f348.js";import{I as m}from"./index.311f4ea4.js";import{a as c}from"./index.688dcbb9.js";import{D as p}from"./index.29267e85.js";import{S as f}from"./index.78ec5b75.js";import{C as v}from"./shallowequal.b5f047da.js";import{R as g}from"./index.9b8cb99d.js";import{B as j}from"./index.186051ac.js";import{T as b}from"./index.3b914a48.js";import{I as y}from"./InfoCircleOutlined.dd09ae62.js";import"./vendor.60046542.js";import"./index.66491a18.js";import"./dropdown.7ec46867.js";import"./Trigger.98e2b4ea.js";import"./LeftOutlined.312edc00.js";import"./EllipsisOutlined.f0bd075b.js";import"./index.4e92a2b2.js";import"./transButton.d5367cc6.js";import"./index.2955aa04.js";import"./index.87bf1d35.js";import"./Col.4bd2088f.js";import"./SearchOutlined.fe92c8ec.js";import"./isEqual.2496db43.js";import"./get.0d8198aa.js";import"./_baseProperty.74f89655.js";import"./ExclamationCircleFilled.795693fc.js";import"./CloseCircleFilled.7235c213.js";import"./LoadingOutlined.36a87be4.js";import"./CheckOutlined.c2a4abcc.js";import"./createChainedFunction.2d5d7d53.js";import"./index.d3634eab.js";import"./wave.9f45b262.js";import"./Event.c36f22c9.js";import"./colors.3c83f778.js";const{Item:x}=u,{Option:h}=c,{Group:C}=v,{Group:P}=g,{TextArea:q}=m,A={sm:{span:7},lg:{span:7}},O={sm:{span:17},lg:10},w={name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{required:!0,message:"Please pick a date",trigger:"change",type:"object"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]},k=()=>t("label",null,[i("Activity name"),t(b,null,{title:()=>"this is required",default:()=>t(y,{style:"vertical-align: middle;margin-left:5px"},null)})]);var F=e({name:"Basic",setup(){const e=a({name:"",region:void 0,date1:void 0,delivery:!1,type:[],resource:"",desc:""}),b=l(void 0),y=()=>{var a,l;null==(l=null==(a=b.value)?void 0:a.validate)||l.call(a).then((()=>{console.log("values",e)})).catch((e=>{console.log("error",e)}))},F=()=>{var e,a;null==(a=null==(e=b.value)?void 0:e.resetFields)||a.call(e,"")};return()=>t(r,null,[t(o,null,{default:()=>[t(d,{title:"基础表单"},{default:()=>[i("表单页面用于收集或验证给用户的信息，基本表单在数据项较少的情况下很常见。")]})]}),t(s,null,{default:()=>[t(n,null,{default:()=>[t(u,{ref:b,model:e,rules:w,"label-col":A,"wrapper-col":O},{default:()=>[t(x,{label:()=>t(k,null,null),name:"name"},{default:()=>[t(m,{value:e.name,"onUpdate:value":a=>e.name=a},null)]}),t(x,{label:"Activity zone",name:"region"},{default:()=>[t(c,{value:e.region,"onUpdate:value":a=>e.region=a,placeholder:"please select your zone"},{default:()=>[t(h,{value:"shanghai"},{default:()=>[i("Zone one")]}),t(h,{value:"beijing"},{default:()=>[i("Zone two")]})]})]}),t(x,{label:"Activity time",name:"date1"},{default:()=>[t(p,{value:e.date1,"onUpdate:value":a=>e.date1=a,placeholder:"Pick a date",style:{width:"100%"}},null)]}),t(x,{label:"Instant delivery",name:"delivery"},{default:()=>[t(f,{checked:e.delivery,"onUpdate:checked":a=>e.delivery=a},null)]}),t(x,{label:"Activity type",name:"type"},{default:()=>[t(C,{value:e.type,"onUpdate:value":a=>e.type=a},{default:()=>[t(v,{value:"1",name:"type"},{default:()=>[i("Online")]}),t(v,{value:"2",name:"type"},{default:()=>[i("Promotion")]}),t(v,{value:"3",name:"type"},{default:()=>[i("Offline")]})]})]}),t(x,{label:"Resources",name:"resource"},{default:()=>[t(P,{value:e.resource,"onUpdate:value":a=>e.resource=a},{default:()=>[t(g,{value:"1"},{default:()=>[i("Sponsor")]}),t(g,{value:"2"},{default:()=>[i("Venue")]})]})]}),t(x,{label:"Activity form",name:"desc"},{default:()=>[t(q,{value:e.desc,"onUpdate:value":a=>e.desc=a,"auto-size":{minRows:2,maxRows:5}},null)]}),t(x,{label:" ",colon:!1},{default:()=>[t(j,{type:"primary",onClick:y},{default:()=>[i("Create")]}),t(j,{onClick:F,style:{"margin-left":"10px"}},{default:()=>[i("ResetForm")]})]})]})]})]})])}});export default F;
