import{u as y,f as k,i as C,o as l,c as o,b as e,a as t,F as u,r as f,t as a,g as v,k as g,n as i,l as m,v as V,d as q}from"./index-frmO0lx2.js";const x=t("h2",null,"購物車列表",-1),w={key:0,class:"table align-middle"},S=t("thead",null,[t("tr",null,[t("th",null,"名稱"),t("th",null,"價錢"),t("th",null,"數量"),t("th",null,"小計"),t("th",null,"操作")])],-1),B={class:"input-group w-50"},L=["onClick"],N=["onUpdate:modelValue"],$=["onClick"],D=["onClick"],F={colspan:"4"},M={key:1},I={__name:"CartsListView",setup(T){const r=y(),{getCarts:_,deleteCart:p,changeCartQty:d,checkIsLoadingState:c,total:h}=r;return k(()=>{_()}),(U,z)=>{const b=C("router-link");return l(),o(u,null,[x,e(r).carts.length?(l(),o("table",w,[S,t("tbody",null,[(l(!0),o(u,null,f(e(r).carts,n=>(l(),o("tr",{key:n.id},[t("th",null,a(n.product.title),1),t("td",null,a(n.product.price),1),t("td",null,[t("div",B,[t("button",{onClick:s=>e(d)("reduce",n.id,n.product_id,n.qty),class:i(["btn btn-primary",{disabled:e(c)}])}," - ",10,L),m(t("input",{type:"number","onUpdate:modelValue":s=>n.qty=s,class:"form-control"},null,8,N),[[V,n.qty,void 0,{number:!0}]]),t("button",{onClick:s=>e(d)("add",n.id,n.product_id,n.qty),class:i(["btn btn-primary",{disabled:e(c)}])}," + ",10,$)])]),t("td",null,a(n.product.price*n.qty),1),t("td",null,[t("button",{type:"button",onClick:s=>e(p)(n.id)},"刪除",8,D)])]))),128))]),t("tfoot",null,[t("tr",null,[t("td",F,"總價："+a(e(h).final_total),1),t("td",null,[v(b,{to:"/carts/orderConfirm",class:"btn btn-primary"},{default:g(()=>[q("前往填寫訂購資訊")]),_:1})])])])])):(l(),o("div",M,"購物車目前無項目，前往選購"))],64)}}};export{I as default};