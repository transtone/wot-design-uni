import{_ as e}from"./wd-input.BswaWSSu.js";import{d as a,V as l,r,a as o,b as s,o as u,c as t,w as d,e as m,f as p,i as n}from"./index--UwMP9LN.js";import{_ as i}from"./wd-cell-group.B5-guSgA.js";import{_ as c}from"./wd-button.D3kRr9dh.js";import{_ as f}from"./wd-form.BZv6pr3Y.js";import{c as w,a as _}from"./page-wraper.CWk-n8Ds.js";import"./useTranslate.DB6DQ0QV.js";import"./useChildren.B_Q15oAU.js";const b=a({__name:"demo4",setup(a){const{success:b}=w(),v=l({value1:"",value2:""}),g=r();function h(){g.value.validate().then((({valid:e,errors:a})=>{e&&b({msg:"校验通过"})})).catch((e=>{console.log(e,"error")}))}return(a,l)=>{const r=o(s("wd-input"),e),w=o(s("wd-cell-group"),i),b=o(s("wd-button"),c),j=n,V=o(s("wd-form"),f),x=o(s("page-wraper"),_);return u(),t(x,null,{default:d((()=>[m(V,{ref_key:"form",ref:g,model:v,errorType:"toast"},{default:d((()=>[m(w,{border:""},{default:d((()=>[m(r,{label:"用户名","label-width":"100px",prop:"value1",clearable:"",modelValue:v.value1,"onUpdate:modelValue":l[0]||(l[0]=e=>v.value1=e),placeholder:"请输入用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),m(r,{label:"密码","label-width":"100px",prop:"value2","show-password":"",clearable:"",modelValue:v.value2,"onUpdate:modelValue":l[1]||(l[1]=e=>v.value2=e),placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),m(j,{class:"footer"},{default:d((()=>[m(b,{type:"primary",size:"large",onClick:h,block:""},{default:d((()=>[p("提交")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})}}});export{b as default};
