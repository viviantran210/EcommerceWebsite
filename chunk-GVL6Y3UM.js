import{a as R}from"./chunk-D45GDC7R.js";import{a as L}from"./chunk-PT3L3HH7.js";import{a as E,c as F,f as j}from"./chunk-KMHQCYNG.js";import{k as w,l as N,p as k,q as T}from"./chunk-23VXTOXP.js";import{$a as u,Bb as c,Cb as a,Db as g,Hb as C,Lb as y,Mb as f,Vb as P,Wb as m,Xa as v,Xb as s,_a as n,bc as I,f as b,fc as O,gc as M,hc as S,ka as x,rb as l,ta as _,tb as d,ua as h}from"./chunk-EJSGNW64.js";function z(t,e){t&1&&(c(0,"h1"),m(1,` All Products
`),a())}function B(t,e){if(t&1&&(c(0,"h1"),m(1),a()),t&2){let r=f();n(),s(r.categoryName)}}function D(t,e){if(t&1){let r=C();c(0,"div",4),y("click",function(){let i=_(r).$implicit,p=f();return h(p.navigateToProduct(i.productId))}),g(1,"img",5),c(2,"h3",6),m(3),a(),c(4,"p",7),m(5),O(6,"currency"),a(),g(7,"app-add-to-cart-button",8),a()}if(t&2){let r=e.$implicit;n(),d("src",r.productImgUrl,v)("alt",r.productName),n(2),s(r.productName),n(2),s(M(6,5,r.price)),n(2),d("product",r)}}var X=(()=>{let e=class e{constructor(o,i,p){this.productService=o,this.router=i,this.route=p,this.productList=[],this.routeSubscription=new b}ngOnInit(){this.routeSubscription=this.route.url.subscribe({next:o=>{this.productList=this.productService.getProductsByCategory(o[0].path)}})}navigateToProduct(o){this.router.navigate([this.categoryName.toLowerCase(),o])}ngOnDestroy(){this.routeSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(u(L),u(F),u(E))},e.\u0275cmp=x({type:e,selectors:[["app-product"]],inputs:{categoryName:"categoryName"},standalone:!0,features:[I],decls:5,vars:3,consts:[["categoryNameTemplate",""],[4,"ngIf","ngIfElse"],[1,"product-grid"],["class","product-box",3,"click",4,"ngFor","ngForOf"],[1,"product-box",3,"click"],[3,"src","alt"],[1,"product-title"],[1,"product-price"],[3,"product"]],template:function(i,p){if(i&1&&(l(0,z,2,0,"h1",1)(1,B,2,1,"ng-template",null,0,S),c(3,"div",2),l(4,D,8,7,"div",3),a()),i&2){let A=P(2);d("ngIf",p.categoryName==="All")("ngIfElse",A),n(4),d("ngForOf",p.productList)}},dependencies:[T,w,N,k,j,R],styles:["h1[_ngcontent-%COMP%]{text-align:center}.product-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between}.product-box[_ngcontent-%COMP%]{flex:1 1 calc(20% - 1rem);background-color:#fff;border:1px solid #ddd;border-radius:.3rem;padding:2rem;text-align:center;box-shadow:0 .25rem .375rem #0000001a;transition:box-shadow .3s ease}.product-box[_ngcontent-%COMP%]:hover{box-shadow:0 .5rem .75rem #00000026}.product-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:15rem;max-width:20rem;object-fit:cover;margin-bottom:1rem}.product-title[_ngcontent-%COMP%]{font-size:1rem;margin:.5rem 0;color:#333}.product-price[_ngcontent-%COMP%]{font-size:1.1rem;color:#b12704;margin-bottom:1rem}.product-button[_ngcontent-%COMP%]{display:inline-block;padding:.5rem 1rem;background-color:#ff3e00;color:#fff;border:none;border-radius:3px;cursor:pointer;transition:background-color .3s ease}.product-button[_ngcontent-%COMP%]:hover{background-color:#d63200}"]});let t=e;return t})();export{X as a};
