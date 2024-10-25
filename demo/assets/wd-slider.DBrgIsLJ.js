import{d as e,r as a,v as l,q as u,m as s,o as t,c as d,w as n,n as i,f as o,t as v,p as r,e as c,y as m,i as w,J as h}from"./index--UwMP9LN.js";import{f as b,i as f,l as _,m as p,G as y,H as g,r as M,I as x,t as V,b as $}from"./page-wraper.CWk-n8Ds.js";import{u as C}from"./useTouch.azZ66Ws3.js";const T=$(e({name:"wd-slider",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...b,customMinClass:f(""),customMaxClass:f(""),hideMinMax:_(!1),hideLabel:_(!1),disabled:_(!1),inactiveColor:f("#e5e5e5"),activeColor:f(""),max:p(100),min:p(0),step:p(1),modelValue:{type:[Number,Array],default:0}},emits:["dragstart","dragmove","dragend","update:modelValue"],setup(e,{expose:b,emit:f}){const _=e,p=f,$={startValue:0,deltaX:0,newValue:0},T=a(`sliderId${y()}`),k=C(),I=C(),L=a(!1),N=a(""),S=a(0),j=a(0),X=a(0),G=a(0),H=a(0),q=a(0),A=a(0),E=a(0),J=a(0),O=a(100),z=a(0),B=a(1);l((()=>_.max),(e=>{e<=_.min?(O.value=_.min,z.value=e,console.warn("[wot design] warning(wd-slider): max value must be greater than min value")):O.value=e,ie()}),{immediate:!0}),l((()=>_.min),(e=>{e>=_.max?(z.value=_.max,O.value=e,console.warn("[wot design] warning(wd-slider): min value must be less than max value")):z.value=e,ie()}),{immediate:!0}),l((()=>_.step),(e=>{e<1?(B.value=1,console.warn("[wot design] warning(wd-slider): step must be greater than 0")):B.value=Math.floor(e)}),{immediate:!0}),l((()=>_.modelValue),(e=>{if(null==e?(p("update:modelValue",E.value),console.warn("[wot design] warning(wd-slider): value can nott be null or undefined")):M(e)&&2!==e.length?console.warn("[wot design] warning(wd-slider): value must be dyadic array"):x(e)||M(e)||(p("update:modelValue",E.value),console.warn("[wot design] warning(wd-slider): value must be dyadic array Or Number")),M(e)){if(E.value&&M(E.value)&&function(e,a){if(!V(e)||!V(a))return!1;let l=0;return e.forEach(((e,u)=>{e===a[u]&&l++})),2===l}(e,E.value))return;E.value=e,L.value=!0,G.value<=X.value?(se(e[0]),ue(e[1])):(se(e[1]),ue(e[0]))}else{if(e===E.value)return;E.value=e,se(e)}}),{deep:!0,immediate:!0});const{proxy:D}=h(),F=u((()=>`wd-slider ${_.hideLabel?"":"wd-slider__has-label"} ${_.disabled?"wd-slider--disabled":""} ${_.customClass}`)),K=u((()=>""+(_.inactiveColor?"background:"+_.inactiveColor:""))),P=u((()=>`${N.value};${_.activeColor?"background:"+_.activeColor:""}`)),Q=u((()=>`left: ${G.value}%; visibility: ${_.disabled?"hidden":"show"};`)),R=u((()=>`left: ${X.value}%; visibility: ${_.disabled?"hidden":"show"}`));function U(){g(`#${T.value}`,!1,D).then((e=>{H.value=Number(e.width),q.value=Number(e.left)}))}function W(e){const{disabled:a,modelValue:l}=_;a||(k.touchStart(e),A.value=M(l)?G.value<X.value?de(l[0]):de(l[1]):de(l),p("dragstart",{value:E.value}))}function Y(e){const{disabled:a}=_;if(a)return;k.touchMove(e);const l=k.deltaX.value/H.value*(O.value-z.value);J.value=A.value+l,se(J.value),p("dragmove",{value:E.value})}function Z(){_.disabled||p("dragend",{value:E.value})}function ee(e){if(_.disabled)return;const{modelValue:a}=_;I.touchStart(e),$.startValue=G.value<X.value?de(a[1]):de(a[0]),p("dragstart",{value:E.value})}function ae(e){if(_.disabled)return;I.touchMove(e);const a=I.deltaX.value/H.value*(O.value-z.value);$.newValue=de($.startValue+a),ue($.newValue),p("dragmove",{value:E.value})}function le(){_.disabled||p("dragend",{value:E.value})}function ue(e){e=de(e),j.value=e,p("update:modelValue",[Math.min(S.value,j.value),Math.max(S.value,j.value)]),X.value=ne(e),te()}function se(e){const a=ne(e=de(e));L.value?(S.value=e,G.value=a,p("update:modelValue",[Math.min(S.value,j.value),Math.max(S.value,j.value)]),te()):(p("update:modelValue",e),S.value=e,G.value=a,N.value=`width: ${a}%; `)}function te(){const e=G.value<X.value?[G.value,X.value]:[X.value,G.value],a=`width: ${e[1]-e[0]}%;  left: ${e[0]}%`;E.value=S.value<j.value?[S.value,j.value]:[j.value,S.value],N.value=a}function de(e){return Math.round(Math.max(z.value,Math.min(e,O.value))/B.value)*B.value}function ne(e){return(e-z.value)/(O.value-z.value)*100}function ie(){const{modelValue:e}=_;let a=M(e)?G.value<X.value?de(e[0]):de(e[1]):de(e);a=de(a);const l=ne(a);G.value=l,N.value=`width: ${l}%; `}return s((()=>{U()})),b({initSlider:U}),(e,a)=>{const l=w;return t(),d(l,{class:i(F.value),style:m(e.customStyle),id:T.value},{default:n((()=>[e.hideMinMax?r("",!0):(t(),d(l,{key:0,class:i(`wd-slider__label-min ${e.customMinClass}`)},{default:n((()=>[o(v(z.value),1)])),_:1},8,["class"])),c(l,{class:"wd-slider__bar-wrapper",style:m(K.value)},{default:n((()=>[c(l,{class:"wd-slider__bar",style:m(P.value)},null,8,["style"]),c(l,{class:"wd-slider__button-wrapper",style:m(Q.value),onTouchstart:W,onTouchmove:Y,onTouchend:Z,onTouchcancel:Z},{default:n((()=>[e.hideLabel?r("",!0):(t(),d(l,{key:0,class:"wd-slider__label"},{default:n((()=>[o(v(S.value),1)])),_:1})),c(l,{class:"wd-slider__button"})])),_:1},8,["style"]),L.value?(t(),d(l,{key:0,class:"wd-slider__button-wrapper",style:m(R.value),onTouchstart:ee,onTouchmove:ae,onTouchend:le,onTouchcancel:le},{default:n((()=>[e.hideLabel?r("",!0):(t(),d(l,{key:0,class:"wd-slider__label"},{default:n((()=>[o(v(j.value),1)])),_:1})),c(l,{class:"wd-slider__button"})])),_:1},8,["style"])):r("",!0)])),_:1},8,["style"]),e.hideMinMax?r("",!0):(t(),d(l,{key:1,class:i(`wd-slider__label-max ${e.customMaxClass}`)},{default:n((()=>[o(v(O.value),1)])),_:1},8,["class"]))])),_:1},8,["class","style","id"])}}}),[["__scopeId","data-v-0d14edbe"]]);export{T as _};
