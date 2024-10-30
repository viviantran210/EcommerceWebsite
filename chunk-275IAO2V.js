import{a as L,b as N,d as R,e as F,f as U,g as $,h as H}from"./chunk-KUMXFX7S.js";import"./chunk-32MLX6QK.js";import{a as G}from"./chunk-D45GDC7R.js";import{a as V}from"./chunk-PT3L3HH7.js";import"./chunk-EY7KUA53.js";import"./chunk-PWSUUFUM.js";import{a as z,c as A,d as B,f as Q}from"./chunk-KMHQCYNG.js";import"./chunk-B5O27VY2.js";import{l as S,n as E,o as D,p as T,q as j}from"./chunk-23VXTOXP.js";import{$a as m,Bb as r,Cb as i,Db as l,F as P,Hb as v,Lb as b,Mb as s,W as h,Wb as c,Xa as x,Xb as w,Yb as g,_a as o,bc as k,dc as I,fc as y,gc as f,ka as q,q as M,rb as O,ta as C,tb as u,ua as _}from"./chunk-EJSGNW64.js";var J=a=>["/",a];function K(a,d){if(a&1){let n=v();r(0,"mat-card",1)(1,"div",2),l(2,"img",3),r(3,"div",4)(4,"mat-card-content")(5,"a",5),y(6,"lowercase"),r(7,"u"),c(8),i()()(),r(9,"mat-card-header")(10,"mat-card-title"),c(11),i()(),r(12,"mat-card-content")(13,"p")(14,"b"),c(15,"Description:"),i(),c(16),i(),r(17,"p")(18,"b"),c(19,"Price:"),i(),c(20),y(21,"currency"),i()(),r(22,"mat-card-actions")(23,"div",6)(24,"button",7),b("click",function(){C(n);let e=s();return _(e.decrementQuantity())}),c(25,"-"),i(),l(26,"input",8),r(27,"button",9),b("click",function(){let e=C(n).ngIf,p=s();return _(p.incrementQuantity(e.productQty))}),c(28,"+"),i()(),l(29,"app-add-to-cart-button",10),i()()()()}if(a&2){let n=d.ngIf,t=s();o(2),u("src",n.productImgUrl,x)("alt",n.productName),o(3),u("routerLink",I(14,J,f(6,10,n.productCategory))),o(3),g("Shop for ",n.productCategory,""),o(3),w(n.productName),o(5),g(" ",n.productDesc,""),o(4),g(" ",f(21,12,n.price),""),o(6),u("value",t.quantity),o(3),u("product",n)("quantity",t.quantity)}}var pt=(()=>{let d=class d{constructor(t,e,p){this.route=t,this.router=e,this.productService=p,this.quantity=1}ngOnInit(){this.product$=this.route.params.pipe(h(t=>{let e=+t.id,p=t.category;return this.productService.getProductsByCategoryAndId(p,e).pipe(P(W=>(this.router.navigate(["/error"]),M(null))))}))}incrementQuantity(t){this.quantity<t&&this.quantity++}decrementQuantity(){this.quantity>1&&this.quantity--}};d.\u0275fac=function(e){return new(e||d)(m(z),m(A),m(V))},d.\u0275cmp=q({type:d,selectors:[["app-product-details"]],standalone:!0,features:[k],decls:2,vars:3,consts:[["class","product-card",4,"ngIf"],[1,"product-card"],[1,"product-container"],["mat-card-image","",1,"product-image",3,"src","alt"],[1,"product-info"],[3,"routerLink"],[1,"qty-input"],["type","button",1,"qty-count","qty-count--minus",3,"click"],["type","number","readonly","",1,"product-qty",3,"value"],["type","button",1,"qty-count","qty-count--add",3,"click"],[3,"product","quantity"]],template:function(e,p){e&1&&(O(0,K,30,16,"mat-card",0),y(1,"async")),e&2&&u("ngIf",f(1,1,p.product$))},dependencies:[Q,B,j,S,E,D,T,H,L,F,R,U,$,N,G],styles:['.product-card[_ngcontent-%COMP%]{max-width:70rem;height:40rem;margin:1.25rem auto;background-color:#fff;display:flex;flex-direction:column}.product-container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%}.product-image[_ngcontent-%COMP%]{width:35rem;height:100%;object-fit:cover;margin-right:1rem}.product-info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:space-between}mat-card-header[_ngcontent-%COMP%]{margin-bottom:1rem}mat-card-content[_ngcontent-%COMP%]{flex-grow:1}mat-card-actions[_ngcontent-%COMP%]{margin-top:1.25rem}.qty-input[_ngcontent-%COMP%]{color:#000;background:#fff;display:flex;align-items:center;overflow:hidden;border:1px solid #bababa;margin-right:1rem;margin-left:.6rem}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%], .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]{background:transparent;color:inherit;font-weight:700;font-size:inherit;border:none;display:inline-block;min-width:0;height:2.5rem;line-height:1}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]:focus, .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:focus{outline:none}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]{width:50px;min-width:0;display:inline-block;text-align:center;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]::-webkit-outer-spin-button, .qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]{padding:0;cursor:pointer;width:2.5rem;font-size:1.25em;text-indent:-100px;overflow:hidden;position:relative}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:before, .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:after{content:"";height:2px;width:10px;position:absolute;display:block;background:#000;inset:0;margin:auto}.qty-input[_ngcontent-%COMP%]   .qty-count--minus[_ngcontent-%COMP%]{border-right:1px solid #bababa}.qty-input[_ngcontent-%COMP%]   .qty-count--add[_ngcontent-%COMP%]{border-left:1px solid #bababa}.qty-input[_ngcontent-%COMP%]   .qty-count--add[_ngcontent-%COMP%]:after{transform:rotate(90deg)}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:disabled{color:#ccc;background:#f2f2f2;cursor:not-allowed;border-color:transparent}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:disabled:before, .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:disabled:after{background:#ccc}.qty-input[_ngcontent-%COMP%]{border-radius:.25rem;box-shadow:0 1em 2em -.9em rgba(#000,.7);transform:scale(1)}button[mat-raised-button][_ngcontent-%COMP%]{background-color:var(--blue);width:10rem;height:3rem;color:#fff;border-radius:1.5rem;border:none;padding:.5rem;margin-left:.3rem}']});let a=d;return a})();export{pt as ProductDetailsComponent};
