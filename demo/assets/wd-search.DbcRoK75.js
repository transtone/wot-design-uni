import{d as e,r as a,v as l,m as s,q as c,o as u,c as t,w as o,e as n,x as r,y as d,f as i,t as h,u as v,p as f,n as m,j as p,i as _,Y as w}from"./index--UwMP9LN.js";import{f as x,i as y,l as g,m as b,z as C,w as k,o as V,b as S}from"./page-wraper.CWk-n8Ds.js";import{u as $}from"./useTranslate.DB6DQ0QV.js";const j=S(e({name:"wd-search",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...x,modelValue:y(""),useSuffixSlot:g(!1),placeholder:String,cancelTxt:String,light:g(!1),hideCancel:g(!1),disabled:g(!1),maxlength:b(-1),placeholderLeft:g(!1),focus:g(!1),focusWhenClear:g(!1)},emits:["update:modelValue","change","clear","search","focus","blur","cancel"],setup(e,{emit:x}){const y=e,g=x,{translate:b}=$("search"),S=a(!1),j=a(!1),L=a(""),I=a(!0),T=a(!1);l((()=>y.modelValue),(e=>{L.value=e,e&&(j.value=!0)}),{immediate:!0}),l((()=>y.focus),(e=>{if(e){if(y.disabled)return;B()}})),s((()=>{y.focus&&B()}));const W=c((()=>`wd-search  ${y.light?"is-light":""}  ${y.hideCancel?"is-without-cancel":""} ${y.customClass}`)),q=c((()=>{const e={display:""===L.value&&I.value?"flex":"none"};return V(e)}));function z(e){j.value=e,C((()=>{S.value=e}))}function B(){y.disabled||C().then((()=>C())).then((()=>C())).then((()=>{I.value=!1,z(!0)}))}function F(e){L.value=e.detail.value,g("update:modelValue",e.detail.value),g("change",{value:e.detail.value})}function G(){L.value="",T.value=!0,y.focusWhenClear&&(S.value=!1),C().then((()=>C())).then((()=>C())).then((()=>{y.focusWhenClear?(I.value=!1,z(!0)):(I.value=!0,z(!1)),g("change",{value:""}),g("update:modelValue",""),g("clear")}))}function H({detail:{value:e}}){g("search",{value:e})}function U(){T.value?T.value=!1:(I.value=!1,g("focus",{value:L.value}))}function Y(){T.value||(I.value=!L.value,j.value=!I.value,S.value=!1,g("blur",{value:L.value}))}function A(){g("cancel",{value:L.value})}return(e,a)=>{const l=p,s=_,c=w;return u(),t(s,{class:m(W.value),style:d(e.customStyle)},{default:o((()=>[n(s,{class:"wd-search__block"},{default:o((()=>[r(e.$slots,"prefix",{},void 0,!0),n(s,{class:"wd-search__field"},{default:o((()=>[e.placeholderLeft?f("",!0):(u(),t(s,{key:0,style:d(q.value),class:"wd-search__cover",onClick:B},{default:o((()=>[n(k,{name:"search","custom-class":"wd-search__search-icon"}),n(l,{class:"wd-search__placeholder-txt"},{default:o((()=>[i(h(e.placeholder||v(b)("search")),1)])),_:1})])),_:1},8,["style"])),j.value||L.value||e.placeholderLeft?(u(),t(k,{key:1,name:"search","custom-class":"wd-search__search-left-icon"})):f("",!0),j.value||L.value||e.placeholderLeft?(u(),t(c,{key:2,placeholder:e.placeholder||v(b)("search"),"placeholder-class":"wd-search__placeholder-txt","confirm-type":"search",modelValue:L.value,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value=e),class:"wd-search__input",onFocus:U,onInput:F,onBlur:Y,onConfirm:H,disabled:e.disabled,maxlength:e.maxlength,focus:S.value},null,8,["placeholder","modelValue","disabled","maxlength","focus"])):f("",!0),L.value?(u(),t(k,{key:3,"custom-class":"wd-search__clear wd-search__clear-icon",name:"error-fill",onClick:G})):f("",!0)])),_:1})])),_:3}),e.hideCancel?f("",!0):r(e.$slots,"suffix",{key:0},(()=>[n(s,{class:"wd-search__cancel",onClick:A},{default:o((()=>[i(h(e.cancelTxt||v(b)("cancel")),1)])),_:1})]),!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-65c815bd"]]);export{j as _};
