import{d as e,q as l,v as a,o as s,c as o,w as t,e as u,x as d,y as i,p as n,n as r,i as c}from"./index--UwMP9LN.js";import{f as p,i as v,l as h,x as m,g as b,w as f,B as y,t as g,b as $}from"./page-wraper.CWk-n8Ds.js";import{u as k}from"./useChildren.B_Q15oAU.js";const _=Symbol("wd-radio-group"),S={...p,modelValue:[String,Number,Boolean],shape:v("check"),checkedColor:String,disabled:h(!1),cell:h(!1),size:v(""),inline:h(!1)},w=$(e({name:"wd-radio",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...p,value:m([String,Number,Boolean]),shape:String,checkedColor:String,disabled:{type:[Boolean,null],default:null},cell:{type:[Boolean,null],default:null},size:String,inline:{type:[Boolean,null],default:null},maxWidth:String},setup(e){const p=e,{parent:v}=b(_),h=l((()=>!!v&&p.value===v.props.modelValue)),m=l((()=>p.shape||y(v,"props.shape"))),$=l((()=>p.checkedColor||y(v,"props.checkedColor"))),k=l((()=>g(p.disabled)?p.disabled:y(v,"props.disabled"))),S=l((()=>g(p.inline)?p.inline:y(v,"props.inline"))),w=l((()=>p.size||y(v,"props.size"))),x=l((()=>g(p.cell)?p.cell:y(v,"props.cell")));function C(){const{value:e}=p;!k.value&&v&&g(e)&&v.updateValue(e)}return a((()=>p.shape),(e=>{const l=["check","dot","button"];e&&-1!==l.indexOf(e)||console.error(`shape must be one of ${l.toString()}`)})),(e,l)=>{const a=c;return s(),o(a,{class:r(`wd-radio ${x.value?"is-cell-radio":""} ${x.value&&"button"==m.value?"is-button-radio":""} ${w.value?"is-"+w.value:""} ${S.value?"is-inline":""} ${h.value?"is-checked":""} ${"check"!==m.value?"is-"+m.value:""} ${k.value?"is-disabled":""} ${e.customClass}`),style:i(e.customStyle),onClick:C},{default:t((()=>[u(a,{class:"wd-radio__label",style:i(`${e.maxWidth?"max-width:"+e.maxWidth:""};  ${h.value&&"button"===m.value&&!k.value?"color :"+$.value:""}`)},{default:t((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),u(a,{class:"wd-radio__shape",style:i(h.value&&!k.value?"color: "+$.value:"")},{default:t((()=>["check"===m.value?(s(),o(f,{key:0,style:i(h.value&&!k.value?"color: "+$.value:""),name:"check"},null,8,["style"])):n("",!0)])),_:1},8,["style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-b70051df"]]),x=$(e({name:"wd-radio-group",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:S,emits:["change","update:modelValue"],setup(e,{emit:l}){const u=e,n=l,{linkChildren:p,children:v}=k(_);return p({props:u,updateValue:function(e){n("update:modelValue",e),n("change",{value:e})}}),a((()=>u.shape),(e=>{const l=["check","dot","button"];-1===l.indexOf(e)&&console.error(`shape must be one of ${l.toString()}`)}),{deep:!0,immediate:!0}),(e,l)=>{const a=c;return s(),o(a,{class:r(`wd-radio-group  ${e.customClass} ${e.cell&&"button"===e.shape?"is-button":""}`),style:i(e.customStyle)},{default:t((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-8fe978d3"]]);export{w as _,x as a};
