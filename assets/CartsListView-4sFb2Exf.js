import{u as k,e as v,h as f,o as l,c as o,b as e,a as t,F as _,r as g,t as a,f as m,j as V,n as p,k as q,v as x,l as w}from"./index-Jfep3Nw1.js";const S=t("h2",null,"購物車列表",-1),B={key:0},L={class:"table align-middle"},N=t("thead",null,[t("tr",null,[t("th",null,"名稱"),t("th",null,"價錢"),t("th",null,"數量"),t("th",null,"小計"),t("th",null,"操作")])],-1),$={class:"input-group w-50"},D=["onClick"],F=["onUpdate:modelValue"],M=["onClick"],T=["onClick"],U={colspan:"4"},j={key:1},I={__name:"CartsListView",setup(z){const r=k(),{getCarts:h,deleteCart:b,deleteAllCarts:d,changeCartQty:c,checkIsLoadingState:u,total:y}=r;return v(()=>{h()}),(A,i)=>{const C=f("router-link");return l(),o(_,null,[S,e(r).carts.length?(l(),o("div",B,[t("button",{type:"button",onClick:i[0]||(i[0]=(...n)=>e(d)&&e(d)(...n)),class:"btn btn-danger"},"刪除全部商品"),t("table",L,[N,t("tbody",null,[(l(!0),o(_,null,g(e(r).carts,n=>(l(),o("tr",{key:n.id},[t("th",null,a(n.product.title),1),t("td",null,a(n.product.price),1),t("td",null,[t("div",$,[t("button",{onClick:s=>e(c)("reduce",n.id,n.product_id,n.qty),class:p(["btn btn-primary",{disabled:e(u)}])}," - ",10,D),q(t("input",{type:"number","onUpdate:modelValue":s=>n.qty=s,class:"form-control"},null,8,F),[[x,n.qty,void 0,{number:!0}]]),t("button",{onClick:s=>e(c)("add",n.id,n.product_id,n.qty),class:p(["btn btn-primary",{disabled:e(u)}])}," + ",10,M)])]),t("td",null,a(n.product.price*n.qty),1),t("td",null,[t("button",{type:"button",onClick:s=>e(b)(n.id)},"刪除",8,T)])]))),128))]),t("tfoot",null,[t("tr",null,[t("td",U,"總價："+a(e(y).final_total),1),t("td",null,[m(C,{to:"/carts/orderConfirm",class:"btn btn-primary"},{default:V(()=>[w("前往填寫訂購資訊")]),_:1})])])])])])):(l(),o("div",j,"購物車目前無項目，前往選購"))],64)}}};export{I as default};
