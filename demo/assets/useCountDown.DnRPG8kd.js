import{r as a,q as o,S as e}from"./index--UwMP9LN.js";import{t}from"./page-wraper.CWk-n8Ds.js";import{u as r}from"./useRaf.CHLSZrLk.js";const s=1e3,n=60*s,l=60*n,u=24*l;function i(i){let f,h;const{start:m,cancel:c}=r((function(){i.millisecond?j():w()})),v=a(i.time),M=o((()=>{return{total:a=v.value,days:Math.floor(a/u),hours:Math.floor(a%u/l),minutes:Math.floor(a%l/n),seconds:Math.floor(a%n/s),milliseconds:Math.floor(a%s)};var a})),p=()=>{h=!1,c()},d=()=>Math.max(f-Date.now(),0),g=a=>{v.value=a,t(i.onChange)&&i.onChange(M.value),0===a&&(p(),t(i.onFinish)&&i.onFinish())},j=()=>{h&&(g(d()),v.value>0&&m())},w=()=>{if(h){const e=d();a=e,o=v.value,(Math.floor(a/1e3)!==Math.floor(o/1e3)||0===e)&&g(e),v.value>0&&m()}var a,o};return e(p),{start:()=>{h||(f=Date.now()+v.value,h=!0,m())},pause:p,reset:(a=i.time)=>{p(),v.value=a},current:M}}export{i as u};
