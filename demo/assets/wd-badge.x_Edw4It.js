import{d as e,r as s,v as a,q as t,o,c as l,w as r,x as d,n as u,y as i,f as n,t as m,p,i as c}from"./index--UwMP9LN.js";import{f as b,l as f,i as g,b as y}from"./page-wraper.CWk-n8Ds.js";const v=y(e({name:"wd-badge",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...b,modelValue:{type:[Number,String,null],default:null},showZero:f(!1),bgColor:String,max:Number,isDot:Boolean,hidden:Boolean,type:g(void 0),top:Number,right:Number},setup(e){const b=e,f=s(null);a([()=>b.modelValue,()=>b.max,()=>b.isDot],(()=>{!function(){if(b.isDot)return;let e=b.modelValue;const s=b.max;e&&s&&"number"==typeof e&&!Number.isNaN(e)&&!Number.isNaN(s)&&(e=s<e?`${s}+`:e);f.value=e}()}),{immediate:!0,deep:!0});const g=t((()=>`background-color: ${b.bgColor};top:${b.top||0}px;right:${b.right||0}px`)),y=t((()=>{let e=!1;return!b.hidden&&(f.value||0===f.value&&b.showZero||b.isDot)&&(e=!0),e}));return(e,s)=>{const a=c;return o(),l(a,{class:u(["wd-badge",e.customClass]),style:i(e.customStyle)},{default:r((()=>[d(e.$slots,"default",{},void 0,!0),y.value?(o(),l(a,{key:0,class:u(["wd-badge__content","is-fixed",e.type?"wd-badge__content--"+e.type:"",e.isDot?"is-dot":""]),style:i(g.value)},{default:r((()=>[n(m(f.value),1)])),_:1},8,["class","style"])):p("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-40df7a14"]]);export{v as w};
