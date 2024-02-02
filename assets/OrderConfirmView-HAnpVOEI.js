import{o,c as d,a as e,t as c,g as l,n as k,b as s,m as C,u as w,f as N,F as _,r as q,k as V,d as $,p as F}from"./index-frmO0lx2.js";const B=["for"],M={class:"d-black invalid-feedback"},u={__name:"VeeValidateInput",props:{name:String,label:String,placeholder:String,type:{type:String,default:"text"},errorText:String,disabled:{type:Boolean,default:!1},as:String,value:String},setup(t){return(r,m)=>(o(),d("div",null,[e("label",{for:t.name,class:"form-label fs-5"},c(t.label),9,B),l(s(C),{name:t.name,id:t.name,value:t.value,class:k(["form-control",{"is-invalid":t.errorText}]),placeholder:t.placeholder,type:t.type,disabled:t.disabled,as:t.as},null,8,["name","id","value","placeholder","type","disabled","as","class"]),e("span",M,c(t.errorText),1)]))}},T=e("h2",null,"填寫訂購資訊",-1),D=e("hr",null,null,-1),I={key:0,class:"border border-2"},L=e("h3",null,"確認訂單",-1),z={class:"table align-middle"},E=e("thead",null,[e("tr",null,[e("th",null,"商品明細"),e("th",{class:"text-center"},"數量"),e("th",{class:"text-end"},"小計")])],-1),O=["src"],U={class:"text-center"},j={class:"text-end"},A=e("td",{colspan:"2",class:"text-end"},"總價：",-1),G={class:"text-end"},H={key:1},J={class:"border border-2 p-3 mt-5"},K=e("h3",null,"填寫訂購資料",-1),P=e("hr",null,null,-1),Q=["value","disabled","onClick"],X={__name:"OrderConfirmView",setup(t){const r=w(),{carts:m,getCarts:b,checkIsLoadingState:R,total:x,orderCheckout:p}=r;N(()=>{b()}),console.log(m);const g={userName:"name-required|tw-name",email:"required|email",phone:"required|tel:8",address:"address-required|tw-address"};async function y(n,h){try{const a={user:{name:n.userName,tel:n.phone,email:n.email,address:n.address},message:n.userMessage},f=await p(a);h.resetForm()}catch(a){console.log("error",a)}}return(n,h)=>(o(),d(_,null,[T,D,s(r).carts.length?(o(),d("div",I,[L,e("table",z,[E,e("tbody",null,[(o(!0),d(_,null,q(s(r).carts,a=>(o(),d("tr",{key:a.id},[e("td",null,[e("img",{src:a.product.imageUrl,alt:"",class:"order-img"},null,8,O),$(" "+c(a.product.title),1)]),e("td",U,c(a.qty),1),e("td",j,"$ "+c(a.product.price*a.qty),1)]))),128))]),e("tfoot",null,[e("tr",null,[A,e("td",G,"$ "+c(s(x).final_total),1)])])])])):(o(),d("div",H,"購物車無商品，請返回購物 (這邊以後應該會用 router 偵測返回購物車頁)")),e("div",J,[K,P,l(s(F),{onSubmit:y,"validation-schema":g},{default:V(({validate:a,values:f,errors:i,isSubmitting:v,meta:S})=>[l(u,{name:"userName",label:"姓名",value:"測試中",placeholder:"請填寫中文姓名",type:"text","error-text":i.userName},null,8,["error-text"]),l(u,{name:"email",label:"電子信箱",value:"ummm@example.com",placeholder:"請填寫電子信箱",type:"email","error-text":i.email},null,8,["value","error-text"]),l(u,{name:"phone",label:"電話",placeholder:"請填寫電話",type:"tel","error-text":i.phone},null,8,["error-text"]),l(u,{name:"address",label:"地址",placeholder:"請填寫地址",type:"text",value:"台北市大安區敦化南路二段100號","error-text":i.address},null,8,["error-text"]),l(u,{name:"userMessage",label:"備註",placeholder:"請填寫備註",type:"text","error-text":i.userMessage,as:"textarea"},null,8,["error-text"]),e("input",{type:"submit",value:`${s(r).carts.length<1?"購物車無內容不可建立訂單":"建立訂單"}`,disabled:s(r).carts.length<1||!S.valid||v,onClick:a,class:"btn btn-primary w-100"},null,8,Q)]),_:1})])],64))}};export{X as default};
