import{c as e,d as l,_ as t,a as i}from"./page-wraper.CWk-n8Ds.js";import{d as o,r as a,a as n,b as s,o as u,g as v,e as r,w as d,f as b,F as c,j as p}from"./index--UwMP9LN.js";import{_ as k}from"./wd-cell-group.B5-guSgA.js";import{_ as m}from"./demo-block.KFMst2gM.js";import{_ as x}from"./wd-number-keyboard.C3Qn_tiD.js";import"./useChildren.B_Q15oAU.js";import"./useTouch.azZ66Ws3.js";const f=o({__name:"Index",setup(o){const{show:f}=e(),y=a(!1),_=a(!1),w=a(!1),C=a(!1),I=a(!1),U=a(!1),D=a(!1),j=a(!1),g=a(!1),h=[y,_,w,C,I,U,D,j,g],V=a("");function E(e){h.forEach(((l,t)=>l.value=t===e-1))}const F=e=>f(`${e}`),T=()=>f("删除");return(e,o)=>{const a=n(s("wd-toast"),l),f=n(s("wd-cell"),t),h=n(s("wd-cell-group"),k),X=n(s("demo-block"),m),$=n(s("wd-number-keyboard"),x),q=p,z=n(s("page-wraper"),i);return u(),v(c,null,[r(a),r(z,null,{default:d((()=>[r(X,{title:"基本用法",transparent:""},{default:d((()=>[r(h,{border:""},{default:d((()=>[r(f,{title:"默认键盘","is-link":"",onClick:o[0]||(o[0]=e=>E(1))}),r(f,{title:"带右侧栏的键盘","is-link":"",onClick:o[1]||(o[1]=e=>E(2))}),r(f,{title:"身份证键盘","is-link":"",onClick:o[2]||(o[2]=e=>E(3))}),r(f,{title:"带标题的键盘","is-link":"",onClick:o[3]||(o[3]=e=>E(4))}),r(f,{title:"slot自定义标题","is-link":"",onClick:o[4]||(o[4]=e=>E(9))}),r(f,{title:"多个额外按键","is-link":"",onClick:o[5]||(o[5]=e=>E(5))}),r(f,{title:"随机数字键盘","is-link":"",onClick:o[6]||(o[6]=e=>E(6))}),r(f,{title:"双向绑定",clickable:"",value:V.value,onClick:o[7]||(o[7]=e=>E(7))},null,8,["value"]),r(f,{title:"展示蒙层",clickable:"",onClick:o[8]||(o[8]=e=>E(8))})])),_:1})])),_:1}),r($,{visible:y.value,"onUpdate:visible":o[9]||(o[9]=e=>y.value=e),onInput:F,onDelete:T},null,8,["visible"]),r($,{visible:_.value,"onUpdate:visible":o[10]||(o[10]=e=>_.value=e),mode:"custom","extra-key":".","close-text":"完成",onInput:F,onDelete:T},null,8,["visible"]),r($,{visible:w.value,"onUpdate:visible":o[11]||(o[11]=e=>w.value=e),"extra-key":"X","close-text":"完成",onInput:F,onDelete:T},null,8,["visible"]),r($,{visible:C.value,"onUpdate:visible":o[12]||(o[12]=e=>C.value=e),title:"输入密码","extra-key":".","close-text":"完成",onInput:F,onDelete:T},null,8,["visible"]),r($,{visible:g.value,"onUpdate:visible":o[13]||(o[13]=e=>g.value=e),"extra-key":".","close-text":"完成",onInput:F,onDelete:T},{title:d((()=>[r(q,{style:{color:"red"}},{default:d((()=>[b("自定义标题")])),_:1})])),_:1},8,["visible"]),r($,{visible:I.value,"onUpdate:visible":o[14]||(o[14]=e=>I.value=e),mode:"custom","extra-key":["00","."],"close-text":"完成",onInput:F,onDelete:T},null,8,["visible","extra-key"]),r($,{visible:U.value,"onUpdate:visible":o[15]||(o[15]=e=>U.value=e),"random-key-order":"",onInput:F,onDelete:T},null,8,["visible"]),r($,{modelValue:V.value,"onUpdate:modelValue":o[16]||(o[16]=e=>V.value=e),maxlength:6,visible:D.value,"onUpdate:visible":o[17]||(o[17]=e=>D.value=e),title:"键盘标题","extra-key":".","close-text":"完成",onInput:F,onDelete:T},null,8,["modelValue","visible"]),r($,{modal:!0,visible:j.value,"onUpdate:visible":o[18]||(o[18]=e=>j.value=e),onInput:F,onDelete:T},null,8,["visible"])])),_:1})],64)}}});export{f as default};
