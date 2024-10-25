import{d as e,r as l,v as a,q as s,Q as o,o as n,c as r,w as t,n as i,y as u,x as c,p as d,e as p,g as f,f as m,t as h,F as v,i as g,Y as y,j as _}from"./index--UwMP9LN.js";import{f as b,i as w,m as x,l as k,v as S,K as C,M as I,g as $,t as P,w as j,N as V,o as W,z as E,O as L,b as q}from"./page-wraper.CWk-n8Ds.js";import{u as T}from"./useTranslate.DB6DQ0QV.js";const z=q(e({name:"wd-input",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...b,customInputClass:w(""),customLabelClass:w(""),placeholder:String,placeholderStyle:String,placeholderClass:w(""),cursorSpacing:x(0),cursor:x(-1),selectionStart:x(-1),selectionEnd:x(-1),adjustPosition:k(!0),holdKeyboard:k(!1),confirmType:w("done"),confirmHold:k(!1),focus:k(!1),type:w("text"),maxlength:{type:Number,default:-1},disabled:k(!1),alwaysEmbed:k(!1),alignRight:k(!1),modelValue:S(""),showPassword:k(!1),clearable:k(!1),readonly:k(!1),useSuffixSlot:k(!1),usePrefixSlot:k(!1),prefixIcon:String,suffixIcon:String,showWordLimit:k(!1),label:String,labelWidth:w(""),useLabelSlot:k(!1),size:String,error:k(!1),center:k(!1),noBorder:k(!1),required:k(!1),prop:String,rules:C(),clearTrigger:w("always"),focusWhenClear:k(!0),ignoreCompositionEvent:k(!0)},emits:["update:modelValue","clear","change","blur","focus","input","keyboardheightchange","confirm","clicksuffixicon","clickprefixicon","click"],setup(e,{emit:b}){const w=e,x=b,{translate:k}=T("input"),S=l(!1),C=l(!1),q=l(!1),z=l(!1),B=l(""),K=I();a((()=>w.focus),(e=>{q.value=e}),{immediate:!0,deep:!0}),a((()=>w.modelValue),(e=>{B.value=P(e)?String(e):""}),{immediate:!0,deep:!0});const{parent:M}=$(V),H=s((()=>P(w.placeholder)?w.placeholder:k("placeholder"))),O=s((()=>{const{disabled:e,readonly:l,clearable:a,clearTrigger:s}=w;return!(!a||l||e||!B.value||!("always"===s||"focus"===w.clearTrigger&&z.value))})),A=s((()=>{const{disabled:e,readonly:l,maxlength:a,showWordLimit:s}=w;return Boolean(!e&&!l&&P(a)&&a>-1&&s)})),F=s((()=>M&&w.prop&&M.errorMessages&&M.errorMessages[w.prop]?M.errorMessages[w.prop]:"")),N=s((()=>{let e=!1;if(M&&M.props.rules){const l=M.props.rules;for(const a in l)Object.prototype.hasOwnProperty.call(l,a)&&a===w.prop&&Array.isArray(l[a])&&(e=l[a].some((e=>e.required)))}return w.required||w.rules.some((e=>e.required))||e})),R=s((()=>`wd-input  ${w.label||w.useLabelSlot?"is-cell":""} ${w.center?"is-center":""} ${K.border.value?"is-border":""} ${w.size?"is-"+w.size:""} ${w.error?"is-error":""} ${w.disabled?"is-disabled":""}  ${B.value&&String(B.value).length>0?"is-not-empty":""}  ${w.noBorder?"is-no-border":""} ${w.customClass}`)),G=s((()=>`wd-input__label ${w.customLabelClass} ${N.value?"is-required":""}`)),Q=s((()=>`wd-input__placeholder  ${w.placeholderClass}`)),U=s((()=>w.labelWidth?W({"min-width":w.labelWidth,"max-width":w.labelWidth}):""));function Y(){S.value=!S.value}function D(){C.value=!0,z.value=!1,B.value="",w.focusWhenClear&&(q.value=!1),E((()=>{w.focusWhenClear&&(q.value=!0,z.value=!0),x("change",{value:""}),x("update:modelValue",B.value),x("clear")}))}async function J(){await L(150),C.value?C.value=!1:(z.value=!1,x("blur",{value:B.value}))}function X({detail:e}){z.value=!0,x("focus",e)}function Z({detail:e}){x("update:modelValue",B.value),x("input",e)}function ee({detail:e}){x("keyboardheightchange",e)}function le({detail:e}){x("confirm",e)}function ae(){x("clicksuffixicon")}function se(){x("clickprefixicon")}function oe(e){x("click",e)}return o((()=>{B.value=function(e){const{maxlength:l}=w;return P(l)&&-1!==l&&String(e).length>l?e.toString().slice(0,l):e}(B.value),x("update:modelValue",B.value)})),(e,l)=>{const a=g,s=y,o=_;return n(),r(a,{class:i(R.value),style:u(e.customStyle),onClick:oe},{default:t((()=>[e.label||e.useLabelSlot?(n(),r(a,{key:0,class:i(G.value),style:u(U.value)},{default:t((()=>[e.prefixIcon||e.usePrefixSlot?(n(),r(a,{key:0,class:"wd-input__prefix"},{default:t((()=>[e.prefixIcon&&!e.usePrefixSlot?(n(),r(j,{key:0,"custom-class":"wd-input__icon",name:e.prefixIcon,onClick:se},null,8,["name"])):c(e.$slots,"prefix",{key:1},void 0,!0)])),_:3})):d("",!0),p(a,{class:"wd-input__label-inner"},{default:t((()=>[e.label?(n(),f(v,{key:0},[m(h(e.label),1)],64)):c(e.$slots,"label",{key:1},void 0,!0)])),_:3})])),_:3},8,["class","style"])):d("",!0),p(a,{class:"wd-input__body"},{default:t((()=>[p(a,{class:"wd-input__value"},{default:t((()=>[!e.prefixIcon&&!e.usePrefixSlot||e.label?d("",!0):(n(),r(a,{key:0,class:"wd-input__prefix"},{default:t((()=>[e.prefixIcon?(n(),r(j,{key:0,"custom-class":"wd-input__icon",name:e.prefixIcon,onClick:se},null,8,["name"])):d("",!0),c(e.$slots,"prefix",{},void 0,!0)])),_:3})),p(s,{class:i(["wd-input__inner",e.prefixIcon?"wd-input__inner--prefix":"",A.value?"wd-input__inner--count":"",e.alignRight?"is-align-right":"",e.customInputClass]),type:e.type,password:e.showPassword&&!S.value,modelValue:B.value,"onUpdate:modelValue":l[0]||(l[0]=e=>B.value=e),placeholder:H.value,disabled:e.disabled||e.readonly,maxlength:e.maxlength,focus:q.value,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,cursor:e.cursor,"cursor-spacing":e.cursorSpacing,"placeholder-style":e.placeholderStyle,"selection-start":e.selectionStart,"selection-end":e.selectionEnd,"adjust-position":e.adjustPosition,"hold-keyboard":e.holdKeyboard,"always-embed":e.alwaysEmbed,"placeholder-class":Q.value,ignoreCompositionEvent:e.ignoreCompositionEvent,onInput:Z,onFocus:X,onBlur:J,onConfirm:le,onKeyboardheightchange:ee},null,8,["class","type","password","modelValue","placeholder","disabled","maxlength","focus","confirm-type","confirm-hold","cursor","cursor-spacing","placeholder-style","selection-start","selection-end","adjust-position","hold-keyboard","always-embed","placeholder-class","ignoreCompositionEvent"]),e.readonly?(n(),r(a,{key:1,class:"wd-input__readonly-mask"})):d("",!0),O.value||e.showPassword||e.suffixIcon||A.value||e.$slots.suffix?(n(),r(a,{key:2,class:"wd-input__suffix"},{default:t((()=>[O.value?(n(),r(j,{key:0,"custom-class":"wd-input__clear",name:"error-fill",onClick:D})):d("",!0),e.showPassword?(n(),r(j,{key:1,"custom-class":"wd-input__icon",name:S.value?"view":"eye-close",onClick:Y},null,8,["name"])):d("",!0),A.value?(n(),r(a,{key:2,class:"wd-input__count"},{default:t((()=>[p(o,{class:i([B.value&&String(B.value).length>0?"wd-input__count-current":"",String(B.value).length>e.maxlength?"is-error":""])},{default:t((()=>[m(h(String(B.value).length),1)])),_:1},8,["class"]),m(" /"+h(e.maxlength),1)])),_:1})):d("",!0),e.suffixIcon?(n(),r(j,{key:3,"custom-class":"wd-input__icon",name:e.suffixIcon,onClick:ae},null,8,["name"])):d("",!0),c(e.$slots,"suffix",{},void 0,!0)])),_:3})):d("",!0)])),_:3}),F.value?(n(),r(a,{key:0,class:"wd-input__error-message"},{default:t((()=>[m(h(F.value),1)])),_:1})):d("",!0)])),_:3})])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-08cfcc3d"]]);export{z as _};
