import{f as e,l as a,i as t,m as l,w as o,j as s,t as u,o as i,H as d,b as n,c,d as r,e as m,a as v}from"./page-wraper.CWk-n8Ds.js";import{d as p,r as f,N as _,v as b,V as h,q as g,m as w,S as y,o as x,c as k,w as C,e as V,x as T,T as z,y as I,p as j,n as L,J as $,i as U,E as O,a as Q,b as F,g as H,f as q,u as S,F as X}from"./index--UwMP9LN.js";import{_ as Y,a as B}from"./wd-radio-group.ByTFQoaP.js";import{_ as E}from"./demo-block.KFMst2gM.js";import{_ as G}from"./wd-button.D3kRr9dh.js";import{p as J,r as N,q as R,c as W,u as A}from"./clickoutside.CWMpMR_B.js";import{u as D}from"./useRaf.CHLSZrLk.js";import"./useChildren.B_Q15oAU.js";const K=n(p({name:"wd-fab",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...e,active:a(!1),type:t("primary"),position:t("right-bottom"),direction:t("top"),disabled:a(!1),inactiveIcon:t("add"),activeIcon:t("close"),zIndex:l(99),draggable:a(!1),gap:{type:Object,default:()=>({})},expandable:a(!0)},emits:["update:active","click"],setup(e,{expose:a,emit:t}){const l=e,n=t,c=f(!1),r=f(!1),m=_(R,null),{proxy:v}=$();b((()=>l.active),(e=>{r.value=e}),{immediate:!0,deep:!0}),b((()=>r.value),(e=>{e&&(m&&m.closeOther?m.closeOther(v):W(v))}));const p=f(l.direction);b((()=>l.direction),(e=>p.value=e)),b((()=>l.position),(()=>X()));const Q=f(0),F=f(0),H=h({width:0,height:0}),q=h({width:56,height:56}),S=h({minTop:0,minLeft:0,maxTop:0,maxLeft:0});function X(){const e=l.position,{minLeft:a,minTop:t,maxLeft:o,maxTop:s}=S;"left-top"===e?(Q.value=t,F.value=a):"right-top"===e?(Q.value=t,F.value=o):"left-bottom"===e?(Q.value=s,F.value=a):"right-bottom"===e&&(Q.value=s,F.value=o)}const Y=h({x:0,y:0}),B=f(!1);function E(e){if(!1===l.draggable)return;const a=e.touches[0];Y.x=a.clientX-F.value,Y.y=a.clientY-Q.value,B.value=!1}function A(e){if(!1===l.draggable)return;const a=e.touches[0],{minLeft:t,minTop:o,maxLeft:s,maxTop:u}=S;let i=a.clientX-Y.x,d=a.clientY-Y.y;i<t?i=t:i>s&&(i=s),d<o?d=o:d>u&&(d=u),Q.value=d,F.value=i}function K(){if(!1===l.draggable)return;const e=H.width/2,a=F.value+q.width/2;B.value=!0,a<e?(F.value=S.minLeft,p.value="right"):(F.value=S.maxLeft,p.value="left")}const M=g((()=>{const e={top:Q.value+"px",left:F.value+"px",transition:B.value?"all ease 0.3s":"none"};return u(l.zIndex)&&(e["z-index"]=l.zIndex),`${i(e)};${l.customStyle}`}));function P(){l.disabled||(l.expandable?(r.value=!r.value,n("update:active",r.value)):n("click"))}return w((()=>{m&&m.pushToQueue?m.pushToQueue(v):J(v);const{start:e}=D((async()=>{await async function(){const e=O();try{const e=await d("#trigger",!1,v);q.width=e.width||56,q.height=e.height||56}catch(u){console.log(u)}const{top:a=16,left:t=16,right:o=16,bottom:s=16}=l.gap;H.width=e.windowWidth,H.height=e.windowTop+e.windowHeight,S.minTop=e.windowTop+a,S.minLeft=t,S.maxLeft=H.width-q.width-o,S.maxTop=H.height-q.height-s}(),X(),c.value=!0}));e()})),y((()=>{m&&m.removeFromQueue?m.removeFromQueue(v):N(v)})),a({open:function(){r.value=!0,n("update:active",!0)},close:function(){r.value=!1,n("update:active",!1)}}),(e,a)=>{const t=U;return x(),k(t,{onTouchmove:z(A,["stop","prevent"]),onTouchstart:E,onTouchend:K,class:L(`wd-fab ${e.customClass}`),style:I(M.value),onClick:a[1]||(a[1]=z((()=>{}),["stop"]))},{default:C((()=>[V(t,{onClick:a[0]||(a[0]=z((()=>{}),["stop"])),style:I({visibility:c.value?"visible":"hidden"}),id:"trigger"},{default:C((()=>[e.$slots.trigger?T(e.$slots,"trigger",{key:0},void 0,!0):(x(),k(G,{key:1,onClick:P,"custom-class":"wd-fab__trigger",round:"",type:e.type,disabled:e.disabled},{default:C((()=>[V(o,{"custom-class":"wd-fab__icon",name:r.value?e.activeIcon:e.inactiveIcon},null,8,["name"])])),_:1},8,["type","disabled"]))])),_:3},8,["style"]),e.expandable?(x(),k(s,{key:0,"enter-class":`wd-fab__transition-enter--${p.value}`,"enter-active-class":"wd-fab__transition-enter-active","leave-to-class":`wd-fab__transition-leave-to--${p.value}`,"leave-active-class":"wd-fab__transition-leave-active","custom-class":`wd-fab__actions wd-fab__actions--${p.value}`,show:r.value,duration:300,name:""},{default:C((()=>[T(e.$slots,"default",{},void 0,!0)])),_:3},8,["enter-class","leave-to-class","custom-class","show"])):j("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-1434b6e0"]]),M=n(p({__name:"Index",setup(e){const{show:a}=c(),t=f(!1),l=f("primary"),s=f("left-bottom"),u=f("top"),i=f(!1),d=f(!1),n=f(!1),{closeOutside:p}=A();function _(){a("分享给朋友")}return(e,c)=>{const f=Q(F("wd-toast"),r),b=Q(F("wd-radio"),Y),h=Q(F("wd-radio-group"),B),g=Q(F("demo-block"),E),w=Q(F("wd-switch"),m),y=U,T=Q(F("wd-button"),G),I=Q(F("wd-icon"),o),j=Q(F("wd-fab"),K),L=Q(F("page-wraper"),v);return x(),H(X,null,[V(f),V(y,{class:"fab",onClick:S(p)},{default:C((()=>[V(L,null,{default:C((()=>[V(g,{title:"悬浮按钮主题色"},{default:C((()=>[V(h,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=e=>l.value=e),inline:"",shape:"dot"},{default:C((()=>[V(b,{value:"primary","custom-class":"custom-radio"},{default:C((()=>[q("主要按钮")])),_:1}),V(b,{value:"success","custom-class":"custom-radio"},{default:C((()=>[q("成功按钮")])),_:1}),V(b,{value:"warning","custom-class":"custom-radio"},{default:C((()=>[q("警告按钮")])),_:1}),V(b,{value:"error","custom-class":"custom-radio"},{default:C((()=>[q("危险按钮")])),_:1}),V(b,{value:"info","custom-class":"custom-radio"},{default:C((()=>[q("信息按钮")])),_:1})])),_:1},8,["modelValue"])])),_:1}),V(g,{title:"悬浮按钮位置"},{default:C((()=>[V(h,{modelValue:s.value,"onUpdate:modelValue":c[1]||(c[1]=e=>s.value=e),inline:"",shape:"dot"},{default:C((()=>[V(b,{value:"left-top","custom-class":"custom-radio"},{default:C((()=>[q("左上")])),_:1}),V(b,{value:"right-top","custom-class":"custom-radio"},{default:C((()=>[q("右上")])),_:1}),V(b,{value:"left-bottom","custom-class":"custom-radio"},{default:C((()=>[q("左下")])),_:1}),V(b,{value:"right-bottom","custom-class":"custom-radio"},{default:C((()=>[q("右下")])),_:1})])),_:1},8,["modelValue"])])),_:1}),V(g,{title:"菜单弹出方向"},{default:C((()=>[V(h,{modelValue:u.value,"onUpdate:modelValue":c[2]||(c[2]=e=>u.value=e),inline:"",shape:"dot"},{default:C((()=>[V(b,{value:"top","custom-class":"custom-radio"},{default:C((()=>[q("向上")])),_:1}),V(b,{value:"bottom","custom-class":"custom-radio"},{default:C((()=>[q("向下")])),_:1}),V(b,{value:"right","custom-class":"custom-radio"},{default:C((()=>[q("向右")])),_:1}),V(b,{value:"left","custom-class":"custom-radio"},{default:C((()=>[q("向左")])),_:1})])),_:1},8,["modelValue"])])),_:1}),V(g,{title:"禁用"},{default:C((()=>[V(y,{onClick:c[4]||(c[4]=z((()=>{}),["stop"]))},{default:C((()=>[V(w,{modelValue:i.value,"onUpdate:modelValue":c[3]||(c[3]=e=>i.value=e),size:"22px"},null,8,["modelValue"])])),_:1})])),_:1}),V(g,{title:"可拖动"},{default:C((()=>[V(y,{onClick:c[6]||(c[6]=z((()=>{}),["stop"]))},{default:C((()=>[V(w,{modelValue:d.value,"onUpdate:modelValue":c[5]||(c[5]=e=>d.value=e),size:"22px"},null,8,["modelValue"])])),_:1})])),_:1}),V(g,{title:"切换展示"},{default:C((()=>[V(y,{onClick:c[8]||(c[8]=z((()=>{}),["stop"]))},{default:C((()=>[V(T,{type:"primary",onClick:c[7]||(c[7]=e=>t.value=!t.value),round:""},{default:C((()=>[q("切换")])),_:1})])),_:1})])),_:1}),V(g,{title:"自定义触发器"},{default:C((()=>[V(y,{onClick:c[10]||(c[10]=z((()=>{}),["stop"]))},{default:C((()=>[V(w,{modelValue:n.value,"onUpdate:modelValue":c[9]||(c[9]=e=>n.value=e),size:"22px"},null,8,["modelValue"])])),_:1})])),_:1}),n.value?(x(),k(j,{key:1,position:"left-bottom",draggable:d.value,expandable:!1},{trigger:C((()=>[V(T,{onClick:_,icon:"share",type:"error"},{default:C((()=>[q("分享给朋友")])),_:1})])),_:1},8,["draggable"])):(x(),k(j,{key:0,active:t.value,"onUpdate:active":c[15]||(c[15]=e=>t.value=e),disabled:i.value,type:l.value,position:s.value,direction:u.value,draggable:d.value,onClick:c[16]||(c[16]=e=>S(a)("我被点了"))},{default:C((()=>[V(T,{onClick:c[11]||(c[11]=e=>S(a)("一键三连")),disabled:i.value,"custom-class":"custom-button",type:"primary",round:""},{default:C((()=>[V(I,{name:"github-filled",size:"22px"})])),_:1},8,["disabled"]),V(T,{onClick:c[12]||(c[12]=e=>S(a)("我要收藏")),disabled:i.value,"custom-class":"custom-button",type:"success",round:""},{default:C((()=>[V(I,{name:"star",size:"22px"})])),_:1},8,["disabled"]),V(T,{onClick:c[13]||(c[13]=e=>S(a)("我要投币")),disabled:i.value,"custom-class":"custom-button",type:"error",round:""},{default:C((()=>[V(I,{name:"money-circle",size:"22px"})])),_:1},8,["disabled"]),V(T,{onClick:c[14]||(c[14]=e=>S(a)("我要点赞")),disabled:i.value,"custom-class":"custom-button",type:"warning",round:""},{default:C((()=>[V(I,{name:"thumb-up",size:"22px"})])),_:1},8,["disabled"])])),_:1},8,["active","disabled","type","position","direction","draggable"]))])),_:1})])),_:1},8,["onClick"])],64)}}}),[["__scopeId","data-v-e32de168"]]);export{M as default};
