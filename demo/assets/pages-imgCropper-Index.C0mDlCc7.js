import{d as e,r as a,E as l,v as t,q as u,o,c as s,w as i,e as c,n,y as r,p as v,f as m,t as d,u as p,i as h,l as g,G as f,H as w,I as _,J as x,K as y,a as b,b as S,L as M}from"./index--UwMP9LN.js";import{f as T,l as $,i as I,m as k,v as C,w as H,o as N,h as V,b as q,a as W}from"./page-wraper.CWk-n8Ds.js";import{_ as j}from"./wd-button.D3kRr9dh.js";import{u as X}from"./useTranslate.DB6DQ0QV.js";import{_ as Y}from"./wd-img.B7fC3918.js";import{_ as F}from"./demo-block.KFMst2gM.js";const P=e({name:"wd-img-cropper",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...T,modelValue:$(!1),cancelButtonText:String,confirmButtonText:String,disabledRotate:$(!1),fileType:I("png"),quality:k(1),exportScale:k(2),imgSrc:I(""),imgWidth:C(""),imgHeight:C(""),maxScale:k(3)},emits:["imgloaded","imgloaderror","cancel","confirm","update:modelValue"],setup(e,{expose:b,emit:S}){let M=null,T=null,$=!0,I=null,k=null;const C=.85,q=e,W=S,{translate:Y}=X("img-cropper"),F=a(0),P=a(!1),R=a(0),z=a(0),A=a(0),B=a(0),E=a(20),G=a(0),L=a(0),O=a(""),J=a(""),K=a(2),U=a(1),D=a(l().windowWidth/2),Q=a(l().windowHeight/2*C),Z=a(null),ee=a(l()),ae=a(!0),le=a([{x:"",y:""},{x:"",y:""}]),te=a(""),ue=a(null),{proxy:oe}=x();t((()=>q.modelValue),(e=>{if(e){I=q.imgWidth,k=q.imgHeight,ee.value=l();const e=ee.value.windowWidth-2*E.value;A.value=e,B.value=e,L.value=(ee.value.windowHeight*C-e)/2,G.value=E.value,K.value=q.exportScale,J.value=e,O.value=e,function(){if(I&&"string"==typeof I&&-1!==I.indexOf("%")){const e=I.replace("%","");I=ee.value.windowWidth/100*Number(e),R.value=I}else I&&"number"==typeof I&&(R.value=I);if(k&&"string"==typeof k&&-1!==k.indexOf("%")){const e=q.imgHeight.replace("%","");k=ee.value.windowHeight/100*Number(e),R.value=k}else k&&"number"==typeof k&&(R.value=Number(I))}(),ue.value||(ue.value=_("wd-img-cropper-canvas",oe)),q.imgSrc&&ve()}else re()}),{deep:!0,immediate:!0}),t((()=>q.imgSrc),(e=>{e&&ve()}),{deep:!0,immediate:!0}),t((()=>F.value),(e=>{e%90&&(F.value=90*Math.round(e/90))}),{deep:!0,immediate:!0}),t((()=>P.value),(e=>{M&&clearTimeout(M),e&&(M=setTimeout((()=>{ce(!1),clearTimeout(M)}),300))}),{deep:!0,immediate:!0});const se=u((()=>N({position:"absolute",right:0,width:"56px","border-radius":"16px","font-size":"16px"}))),ie=u((()=>{const e={width:R.value?V(R.value):"auto",height:z.value?V(z.value):"auto",transform:`translate(${V(D.value-R.value/2)}, ${V(Q.value-z.value/2)}) scale(${U.value}) rotate(${F.value}deg)`,"transition-duration":(P.value?.4:0)+"s"};return N(e)}));function ce(e){P.value=e}function ne(e){e&&!q.disabledRotate&&(ce(!0),F.value=e,me())}function re(){const{windowHeight:e,windowWidth:a}=l();U.value=1,F.value=0,D.value=a/2,Q.value=e/2*C}function ve(){q.imgSrc&&w({src:q.imgSrc,success:e=>{Z.value=e,function(){let e=R.value,a=z.value;k||I?k&&!I?e=Z.value.width/Z.value.height*Number(k):(!k&&I||k&&I)&&(a=Z.value.height/Z.value.width*Number(I)):(e=Z.value.width,a=Z.value.height,R.value/z.value>A.value/B.value?(a=B.value,e=Z.value.width/Z.value.height*B.value):(e=A.value,a=Z.value.height/Z.value.width*A.value));R.value=e,z.value=a}(),re()},fail:()=>{}})}function me(e){const a=e||U.value;let l=D.value,t=Q.value,u=R.value,o=z.value;F.value/90%2&&(u=z.value,o=R.value),l=u*a/2+G.value>=l?l:u*U.value/2+G.value,l=G.value+A.value-u*a/2<=l?l:G.value+A.value-u*a/2,t=o*a/2+L.value>=t?t:o*a/2+L.value,t=L.value+B.value-o*a/2<=t?t:L.value+B.value-o*a/2,U.value=a,Q.value=t,D.value=l}function de(e){if(ae.value=!1,1===e.touches.length)le.value[0]={x:e.touches[0].clientX-D.value,y:e.touches[0].clientY-Q.value};else{const a=Math.abs(e.touches[1].clientX-e.touches[0].clientX),l=Math.abs(e.touches[1].clientY-e.touches[0].clientY);te.value=Math.sqrt(Math.pow(a,2)+Math.pow(l,2))}}function pe(e){if(!ae.value&&$)if("android"===ee.value.platform?(T&&clearTimeout(T),T=setTimeout((()=>{$=!0}),25)):!$&&($=!0),1===e.touches.length){const{x:a,y:l}=le.value[0],t=e.touches[0].clientX-Number(a),u=e.touches[0].clientY-Number(l);D.value=t,Q.value=u,me()}else{const a=Math.abs(e.touches[1].clientX-e.touches[0].clientX),l=Math.abs(e.touches[1].clientY-e.touches[0].clientY),t=Math.sqrt(Math.pow(a,2)+Math.pow(l,2)),u=U.value*(t/Number(te.value));U.value=Math.min(u,q.maxScale),function(){let e=R.value,a=z.value,l=U.value;F.value/90%2&&(e=z.value,a=R.value),e*l<A.value&&(l=A.value/e),a*l<B.value&&(l=B.value/a),me(l)}(),te.value=Math.sqrt(Math.pow(a,2)+Math.pow(l,2))}}function he(){ae.value=!0}function ge(e){W("imgloaded",e)}function fe(e){W("imgloaderror",e)}function we(){ne(F.value-90)}function _e(){W("cancel"),W("update:modelValue",!1)}function xe(){!function(){if(!q.imgSrc)return;const e=()=>{const e=R.value*U.value*q.exportScale,a=z.value*U.value*q.exportScale,l=D.value-G.value,t=Q.value-L.value;ue.value.translate(l*q.exportScale,t*q.exportScale),q.disabledRotate||ue.value.rotate(F.value*Math.PI/180),ue.value.drawImage(q.imgSrc,-e/2,-a/2,e,a),ue.value.restore(),ue.value.draw(!1,(()=>{!function(){const{fileType:e,quality:a,exportScale:l}=q;try{y({width:A.value*l,height:Math.round(B.value*l),destWidth:A.value*l,destHeight:Math.round(B.value*l),fileType:e,quality:a,canvasId:"wd-img-cropper-canvas",success:e=>{const a={tempFilePath:e.tempFilePath,width:A.value*l,height:B.value*l};W("confirm",a)},complete:()=>{W("update:modelValue",!1)}},oe)}catch(t){console.log(t)}}()}))};J.value=B.value,O.value=A.value,e()}()}function ye(){}return b({revertIsAnimation:ce,setRoate:ne,resetImg:re}),(e,a)=>{const l=h,t=g,u=f;return e.modelValue?(o(),s(l,{key:0,class:n(`wd-img-cropper ${e.customClass}`),style:r(e.customStyle),onTouchmove:ye},{default:i((()=>[c(l,{class:"wd-img-cropper__wrapper"},{default:i((()=>[c(l,{class:"wd-img-cropper__cut"},{default:i((()=>[c(l,{class:n("wd-img-cropper__cut--top "+(ae.value?"":"is-hightlight")),style:r(`height: ${L.value}px;`)},null,8,["class","style"]),c(l,{class:"wd-img-cropper__cut--middle"},{default:i((()=>[c(l,{class:n("wd-img-cropper__cut--left "+(ae.value?"":"is-hightlight")),style:r(`width: ${G.value}px; height: ${A.value}px;`)},null,8,["class","style"]),c(l,{class:"wd-img-cropper__cut--body",style:r(`width: ${A.value}px; height: ${B.value}px;`)},{default:i((()=>[c(l,{class:"is-gridlines-x"}),c(l,{class:"is-gridlines-y"}),c(l,{class:"is-left-top"}),c(l,{class:"is-left-bottom"}),c(l,{class:"is-right-top"}),c(l,{class:"is-right-bottom"})])),_:1},8,["style"]),c(l,{class:n("wd-img-cropper__cut--right "+(ae.value?"":"is-hightlight"))},null,8,["class"])])),_:1}),c(l,{class:n("wd-img-cropper__cut--bottom "+(ae.value?"":"is-hightlight"))},null,8,["class"])])),_:1}),c(t,{prop:P.value,"change:prop":e.animation?e.animation.setAnimation:"",class:"wd-img-cropper__img",src:e.imgSrc,style:r(ie.value),"lazy-load":!1,onTouchstart:de,onTouchmove:pe,onTouchend:he,onError:fe,onLoad:ge},null,8,["prop","change:prop","src","style"])])),_:1}),c(u,{"canvas-id":"wd-img-cropper-canvas",id:"wd-img-cropper-canvas",class:"wd-img-cropper__canvas","disable-scroll":!0,style:r(`width: ${Number(O.value)*K.value}px; height: ${Number(J.value)*K.value}px;`)},null,8,["style"]),c(l,{class:"wd-img-cropper__footer"},{default:i((()=>[e.disabledRotate?v("",!0):(o(),s(H,{key:0,"custom-class":"wd-img-cropper__rotate",name:"rotate",onClick:we})),c(l,{class:"wd-img-cropper__footer--button"},{default:i((()=>[c(l,{class:"is-cancel",onClick:_e},{default:i((()=>[m(d(e.cancelButtonText||p(Y)("cancel")),1)])),_:1}),c(j,{size:"small","custom-style":se.value,onClick:xe},{default:i((()=>[m(d(e.confirmButtonText||p(Y)("confirm")),1)])),_:1},8,["custom-style"])])),_:1})])),_:1})])),_:1},8,["class","style"])):v("",!0)}}});const R={setAnimation:function(e,a,l){if(e)var t=l.setTimeout((function(){l.callMethod("revertIsAnimation",!1),l.clearTimeout(t)}),300)}},z=e=>{e.$wxs||(e.$wxs=[]),e.$wxs.push("animation"),e.mixins||(e.mixins=[]),e.mixins.push({beforeCreate(){this.animation=R}})};z(P);const A=q(P,[["__scopeId","data-v-49c8d9c5"]]),B=q(e({__name:"Index",setup(e){const l=a(""),t=a(""),u=a(!1);function n(){M({count:1,success:e=>{const a=e.tempFilePaths[0];l.value=a,u.value=!0}})}function r(e){const{tempFilePath:a}=e;t.value=a}function d(e){console.log("加载失败",e)}function p(e){console.log("加载成功",e)}function g(e){console.log("取消",e)}return(e,a)=>{const f=b(S("wd-img-cropper"),A),w=b(S("wd-icon"),H),_=h,x=b(S("wd-img"),Y),y=b(S("demo-block"),F),M=b(S("page-wraper"),W);return o(),s(M,null,{default:i((()=>[c(y,{title:"基本用法",style:{"text-align":"center"}},{default:i((()=>[c(f,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),"img-src":l.value,onConfirm:r,onCancel:g,onImgloaderror:d,onImgloaded:p},null,8,["modelValue","img-src"]),c(_,{class:"profile"},{default:i((()=>[t.value?v("",!0):(o(),s(_,{key:0,class:"img",onClick:n},{default:i((()=>[c(w,{name:"fill-camera","custom-class":"img-icon"})])),_:1})),t.value?(o(),s(x,{key:1,round:"",width:"200px",height:"200px",src:t.value,mode:"aspectFit","custom-class":"profile-img",onClick:n},null,8,["src"])):v("",!0),c(_,{style:{"font-size":"14px"}},{default:i((()=>[m("点击上传头像")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-34a27984"]]);export{B as default};
