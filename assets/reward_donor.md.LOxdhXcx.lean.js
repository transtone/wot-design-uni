import{h as d,l as u,c as s,p as o,m as t,F as _,E as h,e as p,a9 as m,o as e,t as l,b as f,w as k,a as b,G as g}from"./chunks/framework.BZxzEaeW.js";const r=d();function w(){return u(async()=>{if(r.value)return;const a=await(await fetch("https://wot-sponsors.pages.dev/wot-design-uni.json")).json();r.value=a}),{data:r}}const v=m("",4),T={key:0},x=t("thead",null,[t("tr",null,[t("th",null,"捐赠者"),t("th",null,"留言"),t("th",null,"链接")])],-1),P={key:1},S=t("p",null,"🍻🍻🍻 再次感谢各位捐赠者的支持，也欢迎大家提出自己的意见和建议。🍻🍻🍻",-1),j=JSON.parse('{"title":"榜上有名","description":"","frontmatter":{},"headers":[],"relativePath":"reward/donor.md","filePath":"reward/donor.md","lastUpdated":1729849922000}'),q={name:"reward/donor.md"},B=Object.assign(q,{setup(c){const{data:a}=w();return(y,N)=>{const i=g("el-link");return e(),s("div",null,[v,o(a)&&o(a).donor?(e(),s("table",T,[x,t("tbody",null,[(e(!0),s(_,null,h(o(a).donor,(n,V)=>(e(),s("tr",null,[t("td",null,l(n.name),1),t("td",null,l(n.message),1),t("td",null,[n.link!=="-"?(e(),f(i,{key:0,href:n.link,target:"_blank"},{default:k(()=>[b(l(n.link),1)]),_:2},1032,["href"])):(e(),s("span",P,"-"))])]))),256))])])):p("",!0),S])}}});export{j as __pageData,B as default};
