import{u as e,_ as l}from"./wd-message-box.Ccykp07D.js";import{d as a,r as t,q as o,v as s,Q as u,E as c,m as r,O as i,o as d,c as n,w as m,e as v,y as p,x as f,f as V,t as h,n as _,I as w,G as y,i as k,j as x,J as b,a as g,b as j}from"./index--UwMP9LN.js";import{f as S,m as C,i as F,l as z,G as I,h as L,o as U,s as G,b as M,a as P}from"./page-wraper.CWk-n8Ds.js";import{_ as T}from"./demo-block.KFMst2gM.js";import{_ as E}from"./wd-button.D3kRr9dh.js";import"./wd-input.BswaWSSu.js";import"./useTranslate.DB6DQ0QV.js";const O=M(a({name:"wd-circle",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...S,modelValue:C(0),size:C(100),color:{type:[String,Object],default:"#4d80f0"},layerColor:F("#EBEEF5"),fill:String,speed:C(50),text:String,strokeWidth:C(10),strokeLinecap:F("round"),clockwise:z(!0)},setup(e){const l=2*Math.PI,a=-Math.PI/2,g=1,j=e,S=t(""),C=t(0),F=t(null),z=t(1),M=t(`wd-circle${I()}`);let P=null;const T=o((()=>j.size)),E=o((()=>j.strokeWidth)),O=o((()=>{const e={width:L(j.size),height:L(j.size)};return`${U(e)};`}));s((()=>j.modelValue),(()=>{!function(){if(j.speed<=0||j.speed>1e3)return void R(j.modelValue);q(),C.value=C.value||0;const e=()=>{F.value=setTimeout((()=>{C.value!==j.modelValue?(Math.abs(C.value-j.modelValue)<g?C.value=j.modelValue:C.value<j.modelValue?C.value+=g:C.value-=g,R(C.value),e()):q()}),1e3/j.speed)};e()}()}),{immediate:!0}),s((()=>j.size),(()=>{let e=setTimeout((()=>{R(C.value),clearTimeout(e)}),50)}),{immediate:!1}),s((()=>j.color),(()=>{R(C.value)}),{immediate:!1,deep:!0}),u((()=>{z.value=c().pixelRatio})),r((()=>{C.value=j.modelValue,R(C.value)})),i((()=>{q()}));const{proxy:W}=b();function $(e,l,a,t,o){let s=E.value;const u=T.value/2;o||(s/=2);const c=u-s/2;e.strokeStyle=l,e.setStrokeStyle(l),e.setLineWidth(s),e.setLineCap(j.strokeLinecap),e.beginPath(),e.arc(u,u,c,a,t,!j.clockwise),e.stroke(),o&&(e.setLineWidth(s),e.setFillStyle(o),e.fill())}function R(e){new Promise((e=>{if(P)return e(P);P=w(M.value,W),e(P)})).then((t=>{t.clearRect(0,0,T.value,T.value),function(e){$(e,j.layerColor,0,l,j.fill)}(t);const o=(s=e,Math.min(Math.max(s,0),100));var s;0!==o?function(e,t){const o=l*(t/100),s=j.clockwise?a+o:3*Math.PI-(a+o);if(G(j.color)){const l=e.createLinearGradient(T.value,0,0,0);Object.keys(j.color).sort(((e,l)=>parseFloat(e)-parseFloat(l))).map((e=>l.addColorStop(parseFloat(e)/100,j.color[e]))),S.value=l}else S.value=j.color;$(e,S.value,a,s)}(t,o):function(e){const a=E.value,t=T.value/2;if(G(j.color)){const l=e.createLinearGradient(T.value,0,0,0);Object.keys(j.color).sort(((e,l)=>parseFloat(e)-parseFloat(l))).map((e=>l.addColorStop(parseFloat(e)/100,j.color[e]))),S.value=l}else S.value=j.color;e.beginPath(),e.arc(t,a/4,a/4,0,l),e.setFillStyle(S.value),e.fill()}(t),t.draw()}))}function q(){F.value&&clearTimeout(F.value)}return(e,l)=>{const a=y,t=k,o=x;return d(),n(t,{class:_(`wd-circle ${e.customClass}`),style:p(e.customStyle)},{default:m((()=>[v(a,{width:T.value,height:T.value,style:p(O.value),id:M.value,"canvas-id":M.value},null,8,["width","height","style","id","canvas-id"]),e.text?(d(),n(o,{key:1,class:"wd-circle__text"},{default:m((()=>[V(h(e.text),1)])),_:1})):(d(),n(t,{key:0,class:"wd-circle__text"},{default:m((()=>[f(e.$slots,"default",{},void 0,!0)])),_:3}))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-96d4ed4f"]]),W=M(a({__name:"Index",setup(a){const o=t(20),s={0:"red",100:"white"};function u(){o.value<100&&(o.value+=10)}function c(){o.value>0&&(o.value-=10)}const r=e();function i(){r.alert("操作成功")}return(e,a)=>{const t=g(j("wd-message-box"),l),r=g(j("wd-circle"),O),p=g(j("demo-block"),T),f=k,_=g(j("wd-button"),E),w=g(j("page-wraper"),P);return d(),n(f,{class:"circle"},{default:m((()=>[v(w,null,{default:m((()=>[v(t),v(p,{title:"基础用法"},{default:m((()=>[v(r,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),text:o.value+"%"},null,8,["modelValue","text"])])),_:1}),v(p,{title:"样式定制"},{default:m((()=>[v(r,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),"stroke-width":6,text:"宽度定制"},null,8,["modelValue"]),v(r,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e),"layer-color":"#eee",color:"#ee0a24",text:"颜色定制"},null,8,["modelValue"]),v(r,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=e=>o.value=e),color:s,text:"渐变色"},null,8,["modelValue"]),v(r,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=e=>o.value=e),color:"#07c160",clockwise:!1,text:"逆时针"},null,8,["modelValue"]),v(r,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[5]||(a[5]=e=>o.value=e),size:120,text:"大小定制"},null,8,["modelValue"])])),_:1}),v(p,{title:"使用slot"},{default:m((()=>[v(r,{"custom-class":"custom-circle",modelValue:o.value,"onUpdate:modelValue":a[6]||(a[6]=e=>o.value=e),"stroke-width":6},{default:m((()=>[v(f,{style:{color:"red"}},{default:m((()=>[V(h(o.value)+"%",1)])),_:1})])),_:1},8,["modelValue"])])),_:1}),v(p,null,{default:m((()=>[v(_,{"custom-style":"margin-right:24rpx",type:"primary",size:"small",onClick:u},{default:m((()=>[V("增加")])),_:1}),v(_,{type:"error",size:"small",onClick:c},{default:m((()=>[V("减少")])),_:1})])),_:1}),v(p,{title:"alert"},{default:m((()=>[v(_,{onClick:i},{default:m((()=>[V("alert")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-7da3dbac"]]);export{W as default};
