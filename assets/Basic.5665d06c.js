import{d as e,r as a,e as l,c as r,a as o}from"./index.12acd203.js";import"./index.73b2e416.js";import{F as t}from"./index.d8bd7f17.js";import{I as i}from"./index.26433231.js";import{a as n}from"./index.47d36ca0.js";import{B as s}from"./index.e5947198.js";import"./vendor.60046542.js";import"./identity.efc00901.js";import"./_Uint8Array.70680759.js";import"./Col.dbf55f62.js";import"./isEqual.103e89b2.js";import"./get.2017bae8.js";import"./_baseProperty.74f89655.js";import"./ExclamationCircleFilled.24db5179.js";import"./CloseCircleFilled.98210c86.js";import"./LoadingOutlined.dc6e05cf.js";import"./initDefaultProps.f4792837.js";import"./SearchOutlined.a420bf3c.js";import"./Trigger.af69af78.js";import"./CheckOutlined.5bf90af6.js";import"./wave.f3d26954.js";import"./Event.c36f22c9.js";const d={sm:{span:7},lg:{span:7}},m={sm:{span:17},lg:10};var u=e({setup(){const e=a(void 0),u=l({email:"651487447@qq.com",nickname:"GrainFull",profile:"",country:"zh",address:""}),p={},c=()=>{var a,l;null==(l=null==(a=e.value)?void 0:a.validate)||l.call(a).then((()=>{console.log("values",u)})).catch((e=>{console.log("error",e)}))};return()=>r("div",null,[r(t,{ref:e,model:u,rules:p,"label-col":d,"wrapper-col":m},{default:()=>[r(t.Item,{label:"Email",name:"name",required:!0},{default:()=>[r(i,{value:u.email,"onUpdate:value":e=>u.email=e},null)]}),r(t.Item,{label:"Nickname",name:"nickname",required:!0},{default:()=>[r(i,{value:u.nickname,"onUpdate:value":e=>u.nickname=e},null)]}),r(t.Item,{label:"Personal profile",name:"profile"},{default:()=>[r(i.TextArea,{value:u.profile,"onUpdate:value":e=>u.profile=e,placeholder:"descrip yourself in some words"},null)]}),r(t.Item,{label:"Country",name:"country"},{default:()=>[r(n,{value:u.country,"onUpdate:value":e=>u.country=e},{default:()=>[r(n.Option,{value:"zh"},{default:()=>[o("中国")]})]})]}),r(t.Item,{label:"address",name:"address",required:!0},{default:()=>[r(i,{value:u.address,"onUpdate:value":e=>u.address=e},null)]}),r(t.Item,{label:" ",colon:!1},{default:()=>[r(s,{type:"primary",onClick:c},{default:()=>[o("Create")]})]})]})])}});export default u;