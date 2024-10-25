import{d as e,r as s,V as a,o,c as t,w as l,e as i,p as n,T as r,n as u,y as c,a7 as d,af as p,i as m,L as f,ag as v,ah as y,q as h,v as _,g as w,F as b,h as g,x as k,f as C,t as F,u as x,ae as T,l as z,j as P,ai as L,Z as D,z as K,H as M}from"./index--UwMP9LN.js";import{f as I,$ as S,w as E,b as N,r as U,K as j,i as $,l as R,m as A,C as H,p as G,P as O,a0 as V,R as q,t as X,a1 as Z,a2 as B}from"./page-wraper.CWk-n8Ds.js";import{u as J}from"./useTranslate.DB6DQ0QV.js";const Q=N(e({name:"wd-video-preview",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...I},setup(e,{expose:f}){const v=s(!1),y=a({url:"",poster:"",title:""});function h(){v.value=!1,d((()=>{y.url="",y.poster="",y.title=""}))}return S((()=>v.value)),f({open:function(e){v.value=!0,y.url=e.url,y.poster=e.poster,y.title=e.title},close:h}),(e,s)=>{const a=p,d=m;return v.value?(o(),t(d,{key:0,class:u(`wd-video-preview ${e.customClass}`),style:c(e.customStyle),onClick:h},{default:l((()=>[i(d,{class:"wd-video-preview__video",onClick:s[0]||(s[0]=r((()=>{}),["stop"]))},{default:l((()=>[y.url?(o(),t(a,{key:0,class:"wd-video-preview__video",controls:!0,poster:y.poster,title:y.title,"play-btn-position":"center",enableNative:!0,src:y.url,"enable-progress-gesture":!1},null,8,["poster","title","src"])):n("",!0)])),_:1}),i(E,{name:"close","custom-class":"wd-video-preview__close",onClick:h})])),_:1},8,["class","style"])):n("",!0)}}}),[["__scopeId","data-v-dfc3ea0a"]]);function W(e){if(U(e.tempFiles)){const s=[];return e.tempFiles.forEach((async e=>{s.push({path:e.path||"",name:e.name||"",size:e.size,type:"image",thumb:e.path||""})})),s}return[{path:e.tempFiles.path||"",name:e.tempFiles.name||"",size:e.tempFiles.size,type:"image",thumb:e.tempFiles.path||""}]}const Y=N(e({name:"wd-upload",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...I,fileList:j(),action:$(""),header:{type:Object,default:()=>{}},multiple:R(!1),disabled:R(!1),limit:Number,showLimitNum:R(!0),maxSize:A(Number.MAX_VALUE),sourceType:{type:Array,default:()=>["album","camera"]},sizeType:{type:Array,default:()=>["original","compressed"]},name:$("file"),formData:{type:Object,default:()=>{}},onPreviewFail:Function,beforeUpload:Function,beforeChoose:Function,beforeRemove:Function,beforePreview:Function,buildFormData:Function,loadingType:$("ring"),loadingColor:$("#ffffff"),accept:$("image"),statusKey:$("status"),loadingSize:$("24px"),compressed:R(!0),maxDuration:A(60),camera:$("back"),imageMode:$("aspectFit"),successStatus:A(200),customEvokeClass:$(""),customPreviewClass:$(""),autoUpload:R(!0),uploadMethod:Function},emits:["fail","change","success","progress","oversize","chooseerror","remove","update:fileList"],setup(e,{expose:a,emit:r}){const d=e,I=r;a({submit:()=>ee()});const{translate:S}=J("upload"),N=s([]),U=h((()=>!d.limit||N.value.length<d.limit)),j=s();function $(){I("update:fileList",N.value)}_((()=>d.fileList),(e=>{const{statusKey:s}=d;if(O(e,N.value))return;const a=e.map((e=>(e[s]=e[s]||"success",e.response=e.response||"",{...e,uid:V.id++})));N.value=a}),{deep:!0,immediate:!0}),_((()=>d.limit),(e=>{e&&e<N.value.length&&console.error("[wot-design]Error: props limit must less than fileList.length")}),{deep:!0,immediate:!0}),_((()=>d.beforePreview),(e=>{e&&!H(e)&&"asyncfunction"!==q(e)&&console.error("The type of beforePreview must be Function")}),{deep:!0,immediate:!0}),_((()=>d.onPreviewFail),(e=>{e&&!H(e)&&"asyncfunction"!==q(e)&&console.error("The type of onPreviewFail must be Function")}),{deep:!0,immediate:!0}),_((()=>d.beforeRemove),(e=>{e&&!H(e)&&"asyncfunction"!==q(e)&&console.error("The type of beforeRemove must be Function")}),{deep:!0,immediate:!0}),_((()=>d.beforeUpload),(e=>{e&&!H(e)&&"asyncfunction"!==q(e)&&console.error("The type of beforeUpload must be Function")}),{deep:!0,immediate:!0}),_((()=>d.beforeChoose),(e=>{e&&!H(e)&&"asyncfunction"!==q(e)&&console.error("The type of beforeChoose must be Function")}),{deep:!0,immediate:!0}),_((()=>d.buildFormData),(e=>{e&&!H(e)&&"asyncfunction"!==q(e)&&console.error("The type of buildFormData must be Function")}),{deep:!0,immediate:!0});const R=(e,s,a)=>{const{statusKey:o,uploadMethod:t}=d;e[o]="loading",H(t)?t(e,s,a):((e,s,a)=>{T({url:a.action,header:a.header,name:a.name,fileName:a.name,fileType:a.fileType,formData:s,filePath:e.url,success(o){o.statusCode===a.statusCode?a.onSuccess(o,e,s):a.onError({...o,errMsg:o.errMsg||""},e,s)},fail(o){a.onError(o,e,s)}}).onProgressUpdate((s=>{a.onProgress(s,e)}))})(e,s,a)};function A(e){return new Promise(((s,a)=>{M({src:e,success:e=>{s(e)},fail:e=>{a(e)}})}))}function Y(e){const{statusKey:s}=d,a={uid:V.id++,name:e.name||"",thumb:e.thumb||"",[s]:"pending",size:e.size||0,url:e.path,percent:0};N.value.push(a),d.autoUpload&&ee()}function ee(){const{buildFormData:e,formData:s={},statusKey:a}=d,{action:o,name:t,header:l={},accept:i,successStatus:n}=d,r=X(n)?n:200;for(const u of N.value)"pending"==u[a]&&(e?e({file:u,formData:s,resolve:e=>{e&&R(u,e,{onSuccess:ae,onError:se,onProgress:oe,action:o,header:l,name:t,fileName:t,fileType:i,statusCode:r})}}):R(u,s,{onSuccess:ae,onError:se,onProgress:oe,action:o,header:l,name:t,fileName:t,fileType:i,statusCode:r}))}function se(e,s,a){const{statusKey:o}=d,t=N.value.findIndex((e=>e.uid===s.uid));t>-1&&(N.value[t][o]="fail",N.value[t].error=e.message,N.value[t].response=e,I("fail",{error:e,file:s,formData:a}),$())}function ae(e,s,a){const{statusKey:o}=d,t=N.value.findIndex((e=>e.uid===s.uid));t>-1&&(N.value[t][o]="success",N.value[t].response=e.data,I("change",{fileList:N.value}),I("success",{file:s,fileList:N.value,formData:a}),$())}function oe(e,s){const a=N.value.findIndex((e=>e.uid===s.uid));a>-1&&(N.value[a].percent=e.progress,I("progress",{response:e,file:s}))}function te(){const{multiple:e,maxSize:s,accept:a,sizeType:o,limit:t,sourceType:l,compressed:i,maxDuration:n,camera:r,beforeUpload:u}=d;(function({multiple:e,sizeType:s,sourceType:a,maxCount:o,accept:t,compressed:l,maxDuration:i,camera:n}){return new Promise(((r,u)=>{switch(t){case"image":f({count:e?Math.min(o,9):1,sizeType:s,sourceType:a,success:e=>r(W(e)),fail:e=>{u(e)}});break;case"video":y({sourceType:a,compressed:l,maxDuration:i,camera:n,success:e=>{r(function(e){return[{path:e.tempFilePath||e.filePath||"",name:e.name||"",size:e.size,type:"video",thumb:e.thumbTempFilePath||"",duration:e.duration}]}(e))},fail:u});break;case"all":v({count:e?Math.min(o,100):1,type:t,success:e=>r(e.tempFiles),fail:u});break;default:f({count:e?Math.min(o,9):1,sizeType:s,sourceType:a,success:e=>r(W(e)),fail:u})}}))})({multiple:e,sizeType:o,sourceType:l,maxCount:t?t-N.value.length:9,accept:a,compressed:i,maxDuration:n,camera:r}).then((a=>{let o=a;e||(o=o.slice(0,1));const t=async e=>{for(let a=0;a<e.length;a++){const o=e[a];if("image"===o.type&&!o.size){const e=await A(o.path);o.size=e.width*e.height}Number(o.size)<=s?Y(o):I("oversize",{file:o})}};u?u({files:o,fileList:N.value,resolve:e=>{e&&t(o)}}):t(o)})).catch((e=>{I("chooseerror",{error:e})}))}function le(){if(d.disabled)return;const{beforeChoose:e}=d;e?e({fileList:N.value,resolve:e=>{e&&te()}}):te()}function ie(e){N.value.splice(N.value.findIndex((s=>s.uid===e.uid)),1),I("change",{fileList:N.value}),I("remove",{file:e}),$()}function ne(e){L({filePath:e.url,showMenu:!0})}function re(e,s){const{onPreviewFail:a}=d;D({urls:s,current:s[e],fail(){a?a({index:e,imgList:s}):K({title:"预览图片失败",icon:"none"})}})}function ue(e,s){var a;null==(a=j.value)||a.open({url:s[e].url,poster:s[e].thumb,title:s[e].name})}function ce(e){const{beforePreview:s}=d,a=N.value.filter((e=>de(e))),o=a.findIndex((s=>s.url===e.url));s?s({file:e,index:o,imgList:[],resolve:e=>{e&&ue(o,a)}}):ue(o,a)}function de(e){return e.name&&Z(e.name)||Z(e.url)}function pe(e){return e.name&&B(e.name)||B(e.url)}return(e,s)=>{const a=z,r=m,f=p,v=P;return o(),w(b,null,[i(r,{class:u(["wd-upload",e.customClass]),style:c(e.customStyle)},{default:l((()=>[(o(!0),w(b,null,g(N.value,((s,c)=>(o(),t(r,{class:u(["wd-upload__preview",e.customPreviewClass]),key:c},{default:l((()=>[i(r,{class:"wd-upload__status-content"},{default:l((()=>[pe(s)?(o(),t(a,{key:0,src:s.url,mode:e.imageMode,class:"wd-upload__picture",onClick:e=>function(e){const{beforePreview:s}=d,a=N.value.filter((e=>pe(e))),o=a.findIndex((s=>s.url===e.url));s?s({file:e,index:o,imgList:a.map((e=>e.url)),resolve:e=>{e&&re(o,a.map((e=>e.url)))}}):re(o,a.map((e=>e.url)))}(s)},null,8,["src","mode","onClick"])):de(s)?(o(),w(b,{key:1},[s.thumb?(o(),t(r,{key:0,class:"wd-upload__video",onClick:e=>ce(s)},{default:l((()=>[i(a,{src:s.thumb,mode:e.imageMode,class:"wd-upload__picture"},null,8,["src","mode"]),i(E,{name:"play-circle-filled","custom-class":"wd-upload__video-paly"})])),_:2},1032,["onClick"])):(o(),t(r,{key:1,class:"wd-upload__video",onClick:e=>ce(s)},{default:l((()=>[i(f,{src:s.url,title:s.name||"视频"+c,"object-fit":"contain",controls:!1,poster:s.thumb,autoplay:!1,"show-center-play-btn":!1,"show-fullscreen-btn":!1,"show-play-btn":!1,"show-loading":!1,"show-progress":!1,"show-mute-btn":!1,"enable-progress-gesture":!1,enableNative:!0,class:"wd-upload__video"},null,8,["src","title","poster"]),i(E,{name:"play-circle-filled","custom-class":"wd-upload__video-paly"})])),_:2},1032,["onClick"]))],64)):(o(),t(r,{key:2,class:"wd-upload__file",onClick:e=>function(e){const{beforePreview:s}=d,a=N.value.filter((e=>!de(e)&&!pe(e))).findIndex((s=>s.url===e.url));s?s({file:e,index:a,imgList:[],resolve:s=>{s&&ne(e)}}):ne(e)}(s)},{default:l((()=>[i(E,{name:"file","custom-class":"wd-upload__file-icon"}),i(r,{class:"wd-upload__file-name"},{default:l((()=>[C(F(s.name||s.url),1)])),_:2},1024)])),_:2},1032,["onClick"]))])),_:2},1024),"success"!==s[d.statusKey]?(o(),t(r,{key:0,class:"wd-upload__mask wd-upload__status-content"},{default:l((()=>["loading"===s[d.statusKey]?(o(),t(r,{key:0,class:"wd-upload__status-content"},{default:l((()=>[i(G,{type:e.loadingType,size:e.loadingSize,color:e.loadingColor},null,8,["type","size","color"]),i(v,{class:"wd-upload__progress-txt"},{default:l((()=>[C(F(s.percent)+"%",1)])),_:2},1024)])),_:2},1024)):n("",!0),"fail"===s[d.statusKey]?(o(),t(r,{key:1,class:"wd-upload__status-content"},{default:l((()=>[i(E,{name:"close-outline","custom-class":"wd-upload__icon"}),i(v,{class:"wd-upload__progress-txt"},{default:l((()=>[C(F(s.error||x(S)("error")),1)])),_:2},1024)])),_:2},1024)):n("",!0)])),_:2},1024)):n("",!0),"loading"===s[d.statusKey]||e.disabled?n("",!0):(o(),t(E,{key:1,name:"error-fill","custom-class":"wd-upload__close",onClick:e=>function(e){const{beforeRemove:s}=d,a=e,o=N.value[a];s?s({file:o,index:a,fileList:N.value,resolve:e=>{e&&ie(o)}}):ie(o)}(c)},null,8,["onClick"])),e.$slots["preview-cover"]?k(e.$slots,"preview-cover",{key:2,file:s,index:c},void 0,!0):n("",!0)])),_:2},1032,["class"])))),128)),U.value?(o(),w(b,{key:0},[e.$slots.default?(o(),t(r,{key:0,class:u(["wd-upload__evoke-slot",e.customEvokeClass]),onClick:le},{default:l((()=>[k(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])):(o(),t(r,{key:1,onClick:le,class:u(["wd-upload__evoke",e.disabled?"is-disabled":"",e.customEvokeClass])},{default:l((()=>[i(E,{class:"wd-upload__evoke-icon",name:"fill-camera"}),e.limit&&e.showLimitNum?(o(),t(r,{key:0,class:"wd-upload__evoke-num"},{default:l((()=>[C("（"+F(N.value.length)+"/"+F(e.limit)+"）",1)])),_:1})):n("",!0)])),_:1},8,["class"]))],64)):n("",!0)])),_:3},8,["class","style"]),i(Q,{ref_key:"videoPreview",ref:j},null,512)],64)}}}),[["__scopeId","data-v-c2993f3d"]]);export{Y as _};
