import{u as e,_ as t,w as l,n as i,a as s}from"./page-wraper.CWk-n8Ds.js";import{d as a,r as n,a as o,b as r,o as u,c,w as d,e as f,f as k}from"./index--UwMP9LN.js";import{_ as m}from"./wd-cell-group.B5-guSgA.js";import{_ as p}from"./demo-block.KFMst2gM.js";import"./useChildren.B_Q15oAU.js";const _=a({__name:"Index",setup(a){let _;const g=n(!1),{showNotify:w}=e(),C=e=>{w({message:"通知内容",type:e})},b=()=>w("测试"),v=()=>{w({color:"#ad0000",message:"自定义颜色",background:"#ffe1e1"})},y=()=>{w({message:"自定义位置",position:"bottom"})},h=()=>{w({message:"自定义时长",duration:1e3})},j=()=>{g.value=!0,_&&clearTimeout(_),_=setTimeout((()=>{g.value=!1}),2e3)};return(e,a)=>{const n=o(r("wd-cell"),t),_=o(r("wd-cell-group"),m),w=o(r("demo-block"),p),x=o(r("wd-icon"),l),N=o(r("wd-notify"),i),T=o(r("page-wraper"),s);return u(),c(T,null,{default:d((()=>[f(w,{title:"基本用法",transparent:""},{default:d((()=>[f(_,null,{default:d((()=>[f(n,{title:"基础用法","is-link":"",onClick:b})])),_:1})])),_:1}),f(w,{title:"通知类型",transparent:""},{default:d((()=>[f(_,null,{default:d((()=>[f(n,{title:"主要通知","is-link":"",onClick:a[0]||(a[0]=e=>C("primary"))}),f(n,{title:"成功通知","is-link":"",onClick:a[1]||(a[1]=e=>C("success"))}),f(n,{title:"危险通知","is-link":"",onClick:a[2]||(a[2]=e=>C("danger"))}),f(n,{title:"警告通知","is-link":"",onClick:a[3]||(a[3]=e=>C("warning"))})])),_:1})])),_:1}),f(w,{title:"自定义配置",transparent:""},{default:d((()=>[f(_,null,{default:d((()=>[f(n,{title:"自定义颜色","is-link":"",onClick:v}),f(n,{title:"自定义位置","is-link":"",onClick:y}),f(n,{title:"自定义时长","is-link":"",onClick:h})])),_:1})])),_:1}),f(w,{title:"使用 Notify 组件",transparent:""},{default:d((()=>[f(_,null,{default:d((()=>[f(n,{title:"使用 Notify 组件","is-link":"",onClick:j})])),_:1})])),_:1}),f(N,{selector:"visible",type:"success",visible:g.value,"onUpdate:visible":a[4]||(a[4]=e=>g.value=e)},{default:d((()=>[f(x,{name:"check-outline",size:"inherit",color:"inherit"}),k(" 成功通知 ")])),_:1},8,["visible"])])),_:1})}}});export{_ as default};
