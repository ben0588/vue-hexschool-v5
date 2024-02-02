import{o as d,c,a as e,t as i,f as s,n as q,b as r,m as C,p as w,q as N,u as V,e as $,F as p,r as F,j as B,l as I,s as M}from"./index-Jfep3Nw1.js";const T=["for"],D={class:"d-black invalid-feedback"},u={__name:"VeeValidateInput",props:{name:String,label:String,placeholder:String,type:{type:String,default:"text"},errorText:String,disabled:{type:Boolean,default:!1},as:String,value:String},setup(t){return(m,n)=>(d(),c("div",null,[e("label",{for:t.name,class:"form-label fs-5"},i(t.label),9,T),s(r(C),{name:t.name,id:t.name,value:t.value,class:q(["form-control",{"is-invalid":t.errorText}]),placeholder:t.placeholder,type:t.type,disabled:t.disabled,as:t.as},null,8,["name","id","value","placeholder","type","disabled","as","class"]),e("span",D,i(t.errorText),1)]))}},L=e("h2",null,"填寫訂購資訊",-1),R=e("hr",null,null,-1),j={key:0,class:"border border-2"},z=e("h3",null,"確認訂單",-1),E={class:"table align-middle"},O=e("thead",null,[e("tr",null,[e("th",null,"商品明細"),e("th",{class:"text-center"},"數量"),e("th",{class:"text-end"},"小計")])],-1),U=["src"],A={class:"text-center"},G={class:"text-end"},H=e("td",{colspan:"2",class:"text-end"},"總價：",-1),J={class:"text-end"},K={key:1},P={class:"border border-2 p-3 mt-5"},Q=e("h3",null,"填寫訂購資料",-1),W=e("hr",null,null,-1),X=["value","disabled","onClick"],ee={__name:"OrderConfirmView",setup(t){w();const m=N(),n=V(),{carts:b,getCarts:x,checkIsLoadingState:Y,total:g,orderCheckout:y}=n;$(()=>{x()}),console.log(b);const f={userName:"name-required|tw-name",email:"required|email",phone:"required|tel:8",address:"address-required|tw-address"};async function v(o,h){try{const a={user:{name:o.userName,tel:o.phone,email:o.email,address:o.address},message:o.userMessage},_=await y(a),{orderId:l}=_.data;h.resetForm(),m.replace({path:"/carts/payment",query:{orderId:l}})}catch(a){console.log("error",a)}}return(o,h)=>(d(),c(p,null,[L,R,r(n).carts.length?(d(),c("div",j,[z,e("table",E,[O,e("tbody",null,[(d(!0),c(p,null,F(r(n).carts,a=>(d(),c("tr",{key:a.id},[e("td",null,[e("img",{src:a.product.imageUrl,alt:"",class:"order-img"},null,8,U),I(" "+i(a.product.title),1)]),e("td",A,i(a.qty),1),e("td",G,"$ "+i(a.product.price*a.qty),1)]))),128))]),e("tfoot",null,[e("tr",null,[H,e("td",J,"$ "+i(r(g).final_total),1)])])])])):(d(),c("div",K,"購物車無商品，請返回購物 (這邊以後應該會用 router 偵測返回購物車頁)")),e("div",P,[Q,W,s(r(M),{onSubmit:v,"validation-schema":f},{default:B(({validate:a,values:_,errors:l,isSubmitting:S,meta:k})=>[s(u,{name:"userName",label:"姓名",value:"測試中",placeholder:"請填寫中文姓名",type:"text","error-text":l.userName},null,8,["error-text"]),s(u,{name:"email",label:"電子信箱",value:"ummm@example.com",placeholder:"請填寫電子信箱",type:"email","error-text":l.email},null,8,["value","error-text"]),s(u,{name:"phone",label:"電話",placeholder:"請填寫電話",type:"tel","error-text":l.phone},null,8,["error-text"]),s(u,{name:"address",label:"地址",placeholder:"請填寫地址",type:"text",value:"台北市大安區敦化南路二段100號","error-text":l.address},null,8,["error-text"]),s(u,{name:"userMessage",label:"備註",placeholder:"請填寫備註",type:"text","error-text":l.userMessage,as:"textarea"},null,8,["error-text"]),e("input",{type:"submit",value:`${r(n).carts.length<1?"購物車無內容不可建立訂單":"建立訂單"}`,disabled:r(n).carts.length<1||!k.valid||S,onClick:a,class:"btn btn-primary w-100"},null,8,X)]),_:1})])],64))}};export{ee as default};