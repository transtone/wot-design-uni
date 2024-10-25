import{d as e,q as a,r as l,v as s,Q as o,o as r,c as t,w as i,n,y as u,x as c,p as d,e as p,f,t as m,i as h,j as g,a3 as v}from"./index--UwMP9LN.js";import{f as b,i as x,v as y,l as _,m as w,K as C,M as S,g as $,w as k,t as T,N as V,o as W,z as j,O as L,b as P}from"./page-wraper.CWk-n8Ds.js";import{u as I}from"./useTranslate.DB6DQ0QV.js";const q=P(e({name:"wd-textarea",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...b,customTextareaContainerClass:x(""),customTextareaClass:x(""),customLabelClass:x(""),modelValue:y(""),placeholder:String,placeholderStyle:String,placeholderClass:x(""),disabled:_(!1),maxlength:w(-1),autoFocus:_(!1),focus:_(!1),autoHeight:_(!1),fixed:_(!1),cursorSpacing:w(0),cursor:w(-1),confirmType:String,confirmHold:_(!1),showConfirmBar:_(!0),selectionStart:w(-1),selectionEnd:w(-1),adjustPosition:_(!0),disableDefaultPadding:_(!1),holdKeyboard:_(!1),showPassword:_(!1),clearable:_(!1),readonly:_(!1),prefixIcon:String,usePrefixSlot:_(!1),showWordLimit:_(!1),label:String,labelWidth:x(""),useLabelSlot:_(!1),size:String,error:_(!1),center:_(!1),noBorder:_(!1),required:_(!1),prop:x(""),rules:C(),clearTrigger:x("always"),focusWhenClear:_(!0),ignoreCompositionEvent:_(!0)},emits:["update:modelValue","clear","change","blur","focus","input","keyboardheightchange","confirm","linechange","clickprefixicon","click"],setup(e,{emit:b}){const{translate:x}=I("textarea"),y=e,_=b,w=a((()=>T(y.placeholder)?y.placeholder:x("placeholder"))),C=l(!1),P=l(!1),q=l(!1),B=l(""),E=S();s((()=>y.focus),(e=>{P.value=e}),{immediate:!0,deep:!0}),s((()=>y.modelValue),(e=>{B.value=T(e)?String(e):""}),{immediate:!0,deep:!0});const{parent:H}=$(V),z=a((()=>{const{disabled:e,readonly:a,clearable:l,clearTrigger:s}=y;return!(!l||a||e||!B.value||!("always"===s||"focus"===y.clearTrigger&&q.value))})),K=a((()=>{const{disabled:e,readonly:a,maxlength:l,showWordLimit:s}=y;return Boolean(!e&&!a&&T(l)&&l>-1&&s)})),M=a((()=>H&&y.prop&&H.errorMessages&&H.errorMessages[y.prop]?H.errorMessages[y.prop]:"")),F=a((()=>{let e=!1;if(H&&H.props.rules){const a=H.props.rules;for(const l in a)Object.prototype.hasOwnProperty.call(a,l)&&l===y.prop&&Array.isArray(a[l])&&(e=a[l].some((e=>e.required)))}return y.required||y.rules.some((e=>e.required))||e})),O=a((()=>String(U(y.modelValue)||"").length)),A=a((()=>`wd-textarea   ${y.label||y.useLabelSlot?"is-cell":""} ${y.center?"is-center":""} ${E.border.value?"is-border":""} ${y.size?"is-"+y.size:""} ${y.error?"is-error":""} ${y.disabled?"is-disabled":""} ${y.autoHeight?"is-auto-height":""} ${O.value>0?"is-not-empty":""}  ${y.noBorder?"is-no-border":""} ${y.customClass}`)),D=a((()=>`wd-textarea__label ${y.customLabelClass} ${F.value?"is-required":""}`)),G=a((()=>`wd-textarea__placeholder  ${y.placeholderClass}`)),N=a((()=>`${O.value>0?"wd-textarea__count-current":""} ${O.value>y.maxlength?"is-error":""}`)),Q=a((()=>y.labelWidth?W({"min-width":y.labelWidth,"max-width":y.labelWidth}):""));function U(e){const{maxlength:a,showWordLimit:l}=y;return l&&-1!==a&&String(e).length>a?e.toString().substring(0,a):`${e}`}function J(){C.value=!0,q.value=!1,B.value="",y.focusWhenClear&&(P.value=!1),j((()=>{y.focusWhenClear&&(P.value=!0,q.value=!0),_("change",{value:""}),_("update:modelValue",B.value),_("clear")}))}async function R({detail:e}){await L(150),C.value?C.value=!1:(q.value=!1,_("blur",{value:B.value,cursor:e.cursor?e.cursor:null}))}function X({detail:e}){q.value=!0,_("focus",e)}function Y({detail:e}){B.value=U(B.value),_("update:modelValue",B.value),_("input",e)}function Z({detail:e}){_("keyboardheightchange",e)}function ee({detail:e}){_("confirm",e)}function ae({detail:e}){_("linechange",e)}function le(){_("clickprefixicon")}return o((()=>{B.value=U(B.value),_("update:modelValue",B.value)})),(e,a)=>{const l=h,s=g,o=v;return r(),t(l,{class:n(A.value),style:u(e.customStyle)},{default:i((()=>[e.label||e.useLabelSlot?(r(),t(l,{key:0,class:n(D.value),style:u(Q.value)},{default:i((()=>[e.prefixIcon||e.usePrefixSlot?(r(),t(l,{key:0,class:"wd-textarea__prefix"},{default:i((()=>[e.prefixIcon&&!e.usePrefixSlot?(r(),t(k,{key:0,"custom-class":"wd-textarea__icon",name:e.prefixIcon,onClick:le},null,8,["name"])):c(e.$slots,"prefix",{key:1},void 0,!0)])),_:3})):d("",!0),p(l,{class:"wd-textarea__label-inner"},{default:i((()=>[e.label?(r(),t(s,{key:0},{default:i((()=>[f(m(e.label),1)])),_:1})):c(e.$slots,"label",{key:1},void 0,!0)])),_:3})])),_:3},8,["class","style"])):d("",!0),p(l,{class:n(`wd-textarea__value ${z.value?"is-suffix":""} ${e.customTextareaContainerClass} ${K.value?"is-show-limit":""}`)},{default:i((()=>[p(o,{class:n(`wd-textarea__inner ${e.customTextareaClass}`),modelValue:B.value,"onUpdate:modelValue":a[0]||(a[0]=e=>B.value=e),"show-count":!1,placeholder:w.value,disabled:e.disabled||e.readonly,maxlength:e.maxlength,focus:P.value,"auto-focus":e.autoFocus,"placeholder-style":e.placeholderStyle,"placeholder-class":G.value,"auto-height":e.autoHeight,"cursor-spacing":e.cursorSpacing,fixed:e.fixed,cursor:e.cursor,"show-confirm-bar":e.showConfirmBar,"selection-start":e.selectionStart,"selection-end":e.selectionEnd,"adjust-position":e.adjustPosition,"hold-keyboard":e.holdKeyboard,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"disable-default-padding":e.disableDefaultPadding,ignoreCompositionEvent:e.ignoreCompositionEvent,onInput:Y,onFocus:X,onBlur:R,onConfirm:ee,onLinechange:ae,onKeyboardheightchange:Z},null,8,["class","modelValue","placeholder","disabled","maxlength","focus","auto-focus","placeholder-style","placeholder-class","auto-height","cursor-spacing","fixed","cursor","show-confirm-bar","selection-start","selection-end","adjust-position","hold-keyboard","confirm-type","confirm-hold","disable-default-padding","ignoreCompositionEvent"]),M.value?(r(),t(l,{key:0,class:"wd-textarea__error-message"},{default:i((()=>[f(m(M.value),1)])),_:1})):d("",!0),e.readonly?(r(),t(l,{key:1,class:"wd-textarea__readonly-mask"})):d("",!0),p(l,{class:"wd-textarea__suffix"},{default:i((()=>[z.value?(r(),t(k,{key:0,"custom-class":"wd-textarea__clear",name:"error-fill",onClick:J})):d("",!0),K.value?(r(),t(l,{key:1,class:"wd-textarea__count"},{default:i((()=>[p(s,{class:n(N.value)},{default:i((()=>[f(m(O.value),1)])),_:1},8,["class"]),f(" /"+m(e.maxlength),1)])),_:1})):d("",!0)])),_:1})])),_:1},8,["class"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-9963766e"]]);export{q as _};
