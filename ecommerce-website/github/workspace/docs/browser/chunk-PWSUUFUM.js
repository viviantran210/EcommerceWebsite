import{aa as p,l as C}from"./chunk-EJSGNW64.js";var h=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),I=e=>encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent),d=decodeURIComponent,l=e=>(e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent));function j(e){return e=Object.assign({},e),typeof e.expires=="number"&&(e.expires=new Date(Date.now()+e.expires*864e5)),e.expires!=null&&(e.expires=e.expires.toUTCString()),Object.entries(e).filter(([r,c])=>c!=null&&c!==!1).map(([r,c])=>c===!0?`; ${r}`:`; ${r}=${c.split(";")[0]}`).join("")}function b(e,r,c){let n=/(?:^|; )([^=]*)=([^;]*)/g,t={},o;for(;(o=n.exec(document.cookie))!=null;)try{let i=c(o[1]);if(t[i]=r(o[2],i),e===i)break}catch{}return e!=null?t[e]:t}var g=Object.freeze({decodeName:d,decodeValue:l,encodeName:h,encodeValue:I}),f=Object.freeze({path:"/"});function a(e,r,c=f,{encodeValue:n=I,encodeName:t=h}={}){return document.cookie=`${t(e)}=${n(r,e)}${j(c)}`}function m(e,{decodeValue:r=l,decodeName:c=d}={}){return b(e,r,c)}function x({decodeValue:e=l,decodeName:r=d}={}){return b(void 0,e,r)}function O(e,r=f){a(e,"",Object.assign({},r,{expires:-1}))}function u(e,r){let c={set:function(t,o,i){return a(t,o,Object.assign({},this.attributes,i),{encodeValue:this.converter.write})},get:function(t){if(arguments.length===0)return x(this.converter.read);if(t!=null)return m(t,this.converter.read)},remove:function(t,o){O(t,Object.assign({},this.attributes,o))},withAttributes:function(t){return u(this.converter,Object.assign({},this.attributes,t))},withConverter:function(t){return u(Object.assign({},this.converter,t),this.attributes)}},n={attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(e)}};return Object.create(c,n)}var k=u({read:g.decodeValue,write:g.encodeValue},f);var F=(()=>{let r=class r{constructor(){this.cartItemsSubject=new C([]),this.cartItems$=this.cartItemsSubject.asObservable(),this.loadCartFromCookies()}addToCart(n,t=1){let o=this.cartItemsSubject.getValue(),i=o.find(s=>s.id===n.id);i?i.quantityInCart+=t:(n.quantityInCart=t,o.push(n)),this.cartItemsSubject.next([...o]),this.saveCartToCookies()}removeFromCart(n,t=1){let o=this.cartItemsSubject.getValue(),i=o.find(s=>s.id===n);i&&(i.quantityInCart>t?i.quantityInCart-=t:o=o.filter(s=>s.id!==n),this.cartItemsSubject.next([...o]),this.saveCartToCookies())}getCartItemCount(){return this.cartItemsSubject.getValue().reduce((n,t)=>n+t.quantityInCart,0)}getCartTotalPrice(){return this.cartItemsSubject.getValue().reduce((n,t)=>n+t.price*t.quantityInCart,0)}getCartItems(){return this.cartItems$}getCartAsJson(){return JSON.stringify(this.cartItemsSubject.getValue(),null,2)}saveCartToCookies(){let n=JSON.stringify(this.cartItemsSubject.getValue(),null,2),t=new Date;t.setFullYear(t.getFullYear()+1),a("cart",n,{expires:t})}loadCartFromCookies(){let n=m("cart");if(n){let t=JSON.parse(n);this.cartItemsSubject.next(t)}}};r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=p({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();export{F as a};