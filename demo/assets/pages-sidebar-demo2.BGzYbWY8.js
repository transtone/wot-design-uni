import{_ as l,a as e}from"./wd-sidebar.BhWc9_LF.js";import{d as a,r as t,a as s,b as i,o as d,c as u,w as o,e as r,g as b,h as n,F as m,y as c,a7 as p,i as f,a4 as w}from"./index--UwMP9LN.js";import{w as h,_,a as v,b as g}from"./page-wraper.CWk-n8Ds.js";import{_ as y}from"./wd-cell-group.B5-guSgA.js";import"./wd-badge.x_Edw4It.js";import"./useChildren.B_Q15oAU.js";const j=g(a({__name:"demo2",setup(a){const g=t(1),j=t(0),x=new Array(24).fill({title:"标题文字",label:"这是描述这是描述"},0,24),k=t([{label:"分类一",title:"标题一",icon:"thumb-up",items:x,disabled:!1},{label:"分类二",title:"标题二",icon:"thumb-up",items:x,disabled:!1},{label:"分类三",title:"标题三",icon:"thumb-up",items:x.slice(0,18),disabled:!1},{label:"分类四",title:"标题四",icon:"thumb-up",items:x.slice(0,21),disabled:!1},{label:"分类五",title:"标题五",icon:"thumb-up",items:x,disabled:!1},{label:"分类六",title:"标题六",icon:"thumb-up",items:x.slice(0,18),disabled:!1},{label:"分类七",title:"标题七",icon:"thumb-up",items:x,disabled:!0}]);function V({value:l}){g.value=l,j.value=-1,p((()=>{j.value=0}))}return(a,t)=>{const p=s(i("wd-sidebar-item"),l),x=s(i("wd-sidebar"),e),C=s(i("wd-icon"),h),z=s(i("wd-cell"),_),A=s(i("wd-cell-group"),y),F=w,I=f,U=s(i("page-wraper"),v);return d(),u(U,null,{default:o((()=>[r(I,{class:"wraper"},{default:o((()=>[r(x,{modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=l=>g.value=l),onChange:V},{default:o((()=>[(d(!0),b(m,null,n(k.value,((l,e)=>(d(),u(p,{key:e,value:e,label:l.label,icon:l.icon,disabled:l.disabled},null,8,["value","label","icon","disabled"])))),128))])),_:1},8,["modelValue"]),r(I,{class:"content",style:c(`transform: translateY(-${100*g.value}%)`)},{default:o((()=>[(d(!0),b(m,null,n(k.value,((l,e)=>(d(),u(F,{key:e,class:"category","scroll-y":"","scroll-with-animation":"","show-scrollbar":!1,"scroll-top":j.value,throttle:!1},{default:o((()=>[r(A,{title:l.title,border:""},{default:o((()=>[(d(!0),b(m,null,n(l.items,((l,e)=>(d(),u(z,{key:e,title:l.title,label:l.label},{default:o((()=>[r(C,{name:"github-filled",size:"24px"})])),_:2},1032,["title","label"])))),128))])),_:2},1032,["title"])])),_:2},1032,["scroll-top"])))),128))])),_:1},8,["style"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-73c8bb46"]]);export{j as default};
