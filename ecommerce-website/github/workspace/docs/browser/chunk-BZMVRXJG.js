import{a as T,b as G,c as A,e as B,f as Z}from"./chunk-PY4PQNOA.js";import{a as y,b as m,d as E,e as S,h as F,i as N,j as I,l as z,m as D,n as q}from"./chunk-V37KDOQP.js";import"./chunk-G2ECZSRX.js";import"./chunk-JGYM447R.js";import"./chunk-32MLX6QK.js";import{l as x,q as v}from"./chunk-23VXTOXP.js";import{$a as k,Bb as e,Cb as t,Db as l,Lb as f,Wb as o,_a as a,bc as O,ka as P,rb as d,tb as c}from"./chunk-EJSGNW64.js";function L(n,i){n&1&&(e(0,"mat-error"),o(1,"First name is required"),t())}function $(n,i){n&1&&(e(0,"mat-error"),o(1,"First name must be at least 1 letter"),t())}function j(n,i){n&1&&(e(0,"mat-error"),o(1,"Last name is required"),t())}function V(n,i){n&1&&(e(0,"mat-error"),o(1,"Last name must be at least 1 letter"),t())}function H(n,i){n&1&&(e(0,"mat-error"),o(1,"Email is required"),t())}function R(n,i){n&1&&(e(0,"mat-error"),o(1,"Please enter a valid email"),t())}function W(n,i){n&1&&(e(0,"mat-error"),o(1,"Please enter a valid phone number"),t())}function Y(n,i){n&1&&(e(0,"mat-error"),o(1,"Message is required"),t())}var ot=(()=>{let i=class i{constructor(s){this._formBuilder=s}ngOnInit(){this.FormData=this._formBuilder.group({firstName:["",[m.required,m.pattern(/^[a-zA-Z]{1,}\b$/)]],lastName:["",[m.required,m.pattern(/^[a-zA-Z]{1,}\b$/)]],email:["",[m.required,m.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]],phoneNumber:["",m.pattern(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)],message:["",m.required]})}onSubmit(){this.FormData.valid?alert("Form Submitted!"):alert("Form is not valid")}};i.\u0275fac=function(p){return new(p||i)(k(z))},i.\u0275cmp=P({type:i,selectors:[["app-contact"]],standalone:!0,features:[O],decls:53,vars:10,consts:[[1,"contact_us_2"],[1,"responsive-container-block","big-container"],[1,"blueBG"],[1,"responsive-container-block","container"],[1,"form-box",3,"ngSubmit","formGroup"],[1,"container-block","form-wrapper"],[1,"text-blk","contactus-head"],[1,"text-blk","contactus-subhead"],[1,"responsive-container-block"],[1,"responsive-cell-block","wk-ipadp-6","wk-tab-12","wk-mobile-12","wk-desk-6"],["appearance","fill",1,"full-width"],["matInput","","formControlName","firstName","placeholder","Please enter first name..."],[4,"ngIf"],["matInput","","formControlName","lastName","placeholder","Please enter last name..."],["matInput","","formControlName","email","type","email","placeholder","Please enter email..."],["matInput","","formControlName","phoneNumber","placeholder","Please enter phone number..."],[1,"responsive-cell-block","wk-tab-12","wk-mobile-12","wk-desk-12","wk-ipadp-12"],["appearance","fill","id","message",1,"full-width"],["matInput","","formControlName","message","placeholder","Please enter your message..."],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"social-media-links"],["href","https://www.twitter.com/","id","ix94i-2"],["src","https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png","alt","Twitter",1,"link-img"],["href","https://www.facebook.com/"],["src","https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png","alt","Facebook",1,"link-img"],["href","https://www.instagram.com/","id","izldf-2"],["src","https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png","alt","Instagram",1,"link-img"]],template:function(p,r){if(p&1&&(e(0,"div",0)(1,"div",1),l(2,"div",2),e(3,"div",3)(4,"form",4),f("ngSubmit",function(){return r.onSubmit()}),e(5,"div",5)(6,"p",6),o(7," Get in Touch "),t(),e(8,"p",7),o(9," Input your information to contact us! "),t(),e(10,"div",8)(11,"div",9)(12,"mat-form-field",10)(13,"mat-label"),o(14,"First Name"),t(),l(15,"input",11),d(16,L,2,0,"mat-error",12)(17,$,2,0,"mat-error",12),t()(),e(18,"div",9)(19,"mat-form-field",10)(20,"mat-label"),o(21,"Last Name"),t(),l(22,"input",13),d(23,j,2,0,"mat-error",12)(24,V,2,0,"mat-error",12),t()(),e(25,"div",9)(26,"mat-form-field",10)(27,"mat-label"),o(28,"Email"),t(),l(29,"input",14),d(30,H,2,0,"mat-error",12)(31,R,2,0,"mat-error",12),t()(),e(32,"div",9)(33,"mat-form-field",10)(34,"mat-label"),o(35,"Phone Number"),t(),l(36,"input",15),d(37,W,2,0,"mat-error",12),t()(),e(38,"div",16)(39,"mat-form-field",17)(40,"mat-label"),o(41,"What Do You Have in Mind?"),t(),l(42,"textarea",18),d(43,Y,2,0,"mat-error",12),t()()(),e(44,"button",19),o(45,"Submit"),t()(),e(46,"div",20)(47,"a",21),l(48,"img",22),t(),e(49,"a",23),l(50,"img",24),t(),e(51,"a",25),l(52,"img",26),t()()()()()()),p&2){let g,_,u,b,w,h,C,M;a(4),c("formGroup",r.FormData),a(12),c("ngIf",(g=r.FormData.get("firstName"))==null?null:g.hasError("required")),a(),c("ngIf",(_=r.FormData.get("firstName"))==null?null:_.hasError("pattern")),a(6),c("ngIf",(u=r.FormData.get("lastName"))==null?null:u.hasError("required")),a(),c("ngIf",(b=r.FormData.get("lastName"))==null?null:b.hasError("pattern")),a(6),c("ngIf",(w=r.FormData.get("email"))==null?null:w.hasError("required")),a(),c("ngIf",(h=r.FormData.get("email"))==null?null:h.hasError("pattern")),a(6),c("ngIf",(C=r.FormData.get("phoneNumber"))==null?null:C.hasError("pattern")),a(6),c("ngIf",(M=r.FormData.get("message"))==null?null:M.hasError("required")),a(),c("disabled",!r.FormData.valid)}},dependencies:[v,x,D,F,y,E,S,q,N,I,Z,B,A,T,G],styles:[".contact_us_2[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-family:Nunito,sans-serif}.contact_us_2[_ngcontent-%COMP%]   .text-blk[_ngcontent-%COMP%]{margin:0;line-height:25px}.contact_us_2[_ngcontent-%COMP%]   .responsive-cell-block[_ngcontent-%COMP%]{min-height:75px}.contact_us_2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline-color:initial;outline-style:none;outline-width:initial}.contact_us_2[_ngcontent-%COMP%]   .container-block[_ngcontent-%COMP%]{min-height:75px;width:100%;padding:10px;display:block}mat-form-field[_ngcontent-%COMP%]{width:95%}#message[_ngcontent-%COMP%]{width:98%}.contact_us_2[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:#0381fe}.contact_us_2[_ngcontent-%COMP%]   .responsive-container-block[_ngcontent-%COMP%]{min-height:75px;height:fit-content;width:100%;display:flex;flex-wrap:wrap;justify-content:flex-start;margin:0 auto 50px;padding:0}.contact_us_2[_ngcontent-%COMP%]   .responsive-container-block.big-container[_ngcontent-%COMP%]{padding:10px 30px;position:relative;height:auto}.contact_us_2[_ngcontent-%COMP%]   .responsive-container-block.container[_ngcontent-%COMP%]{position:static;min-height:75px;flex-direction:column;z-index:2;max-width:800px;margin:80px auto 50px}.contact_us_2[_ngcontent-%COMP%]   .container-block.form-wrapper[_ngcontent-%COMP%]{background-color:#fff;max-width:799px;text-align:center;padding:50px 40px;box-shadow:#0000000d 0 4px 20px 7px;border-radius:6px;margin:0 auto}.contact_us_2[_ngcontent-%COMP%]   .text-blk.contactus-head[_ngcontent-%COMP%]{font-size:36px;line-height:50px;font-weight:900}.contact_us_2[_ngcontent-%COMP%]   .text-blk.contactus-subhead[_ngcontent-%COMP%]{color:#9c9c9c;margin:0 0 50px}.contact_us_2[_ngcontent-%COMP%]   .responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12[_ngcontent-%COMP%]{margin:0 0 26px;min-height:50px}.contact_us_2[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:96%;height:50px;padding:1px 15px;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:#eee;border-right-color:#eee;border-bottom-color:#eee;border-left-color:#eee;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;font-size:16px;color:#000;border-radius:4px}.contact_us_2[_ngcontent-%COMP%]   .textinput[_ngcontent-%COMP%]{width:98%;min-height:150px;padding:20px 15px;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:#eee;border-right-color:#eee;border-bottom-color:#eee;border-left-color:#eee;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;font-size:16px;border-radius:4px}.contact_us_2[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{width:98%;background-color:#03a9f4;height:60px;font-size:20px;font-weight:700;color:#fff;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:outset;border-right-style:outset;border-bottom-style:outset;border-left-style:outset;border-top-color:#767676;border-right-color:#767676;border-bottom-color:#767676;border-left-color:#767676;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;border-radius:4px;cursor:pointer}.contact_us_2[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]{margin:0 auto}.contact_us_2[_ngcontent-%COMP%]   .social-media-links[_ngcontent-%COMP%]{width:250px;display:flex;justify-content:space-evenly;margin:50px auto 0}.contact_us_2[_ngcontent-%COMP%]   .link-img[_ngcontent-%COMP%]{width:30px;height:30px}.contact_us_2[_ngcontent-%COMP%]   .text-blk.input-title[_ngcontent-%COMP%]{text-align:left;padding:0 0 0 10px;font-size:14px;margin:0 0 5px;color:#9c9c9c}.contact_us_2[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#dadada}.contact_us_2[_ngcontent-%COMP%]   .blueBG[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;top:0;height:300px;background-color:#03a9f4}@media (max-width: 768px){.contact_us_2[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%], .contact_us_2[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .contact_us_2[_ngcontent-%COMP%]   .textinput[_ngcontent-%COMP%]{width:100%}.contact_us_2[_ngcontent-%COMP%]   .container-block.form-wrapper[_ngcontent-%COMP%]{margin:80px 0 0}.contact_us_2[_ngcontent-%COMP%]   .text-blk.input-title[_ngcontent-%COMP%]{padding:0}.contact_us_2[_ngcontent-%COMP%]   .responsive-container-block.container[_ngcontent-%COMP%]{margin:80px 0 50px}.contact_us_2[_ngcontent-%COMP%]   .container-block.form-wrapper[_ngcontent-%COMP%]{margin:0}.contact_us_2[_ngcontent-%COMP%]   .text-blk.contactus-head[_ngcontent-%COMP%]{font-size:30px;line-height:40px}}@media (max-width: 500px){.contact_us_2[_ngcontent-%COMP%]   .container-block.form-wrapper[_ngcontent-%COMP%]{padding:50px 15px}.contact_us_2[_ngcontent-%COMP%]   .container-block.form-wrapper[_ngcontent-%COMP%]{margin:60px 0 0}.contact_us_2[_ngcontent-%COMP%]   .responsive-cell-block.wk-ipadp-6.wk-tab-12.wk-mobile-12.wk-desk-6[_ngcontent-%COMP%]{margin:0 0 15px}.contact_us_2[_ngcontent-%COMP%]   .responsive-container-block[_ngcontent-%COMP%]{margin:0 0 35px}.contact_us_2[_ngcontent-%COMP%]   .text-blk.input-title[_ngcontent-%COMP%]{font-size:12px}.contact_us_2[_ngcontent-%COMP%]   .responsive-container-block.container[_ngcontent-%COMP%]{margin:50px 0}.contact_us_2[_ngcontent-%COMP%]   .container-block.form-wrapper[_ngcontent-%COMP%]{margin:0}.contact_us_2[_ngcontent-%COMP%]   .responsive-container-block.big-container[_ngcontent-%COMP%]{padding:10px 20px}.contact_us_2[_ngcontent-%COMP%]   .text-blk.contactus-head[_ngcontent-%COMP%]{font-size:26px;line-height:34px}.contact_us_2[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{height:45px}}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}body[_ngcontent-%COMP%]{margin:0}.wk-desk-1[_ngcontent-%COMP%]{width:8.333333%}.wk-desk-2[_ngcontent-%COMP%]{width:16.666667%}.wk-desk-3[_ngcontent-%COMP%]{width:25%}.wk-desk-4[_ngcontent-%COMP%]{width:33.333333%}.wk-desk-5[_ngcontent-%COMP%]{width:41.666667%}.wk-desk-6[_ngcontent-%COMP%]{width:50%}.wk-desk-7[_ngcontent-%COMP%]{width:58.333333%}.wk-desk-8[_ngcontent-%COMP%]{width:66.666667%}.wk-desk-9[_ngcontent-%COMP%]{width:75%}.wk-desk-10[_ngcontent-%COMP%]{width:83.333333%}.wk-desk-11[_ngcontent-%COMP%]{width:91.666667%}.wk-desk-12[_ngcontent-%COMP%]{width:100%}@media (max-width: 1024px){.wk-ipadp-1[_ngcontent-%COMP%]{width:8.333333%}.wk-ipadp-2[_ngcontent-%COMP%]{width:16.666667%}.wk-ipadp-3[_ngcontent-%COMP%]{width:25%}.wk-ipadp-4[_ngcontent-%COMP%]{width:33.333333%}.wk-ipadp-5[_ngcontent-%COMP%]{width:41.666667%}.wk-ipadp-6[_ngcontent-%COMP%]{width:50%}.wk-ipadp-7[_ngcontent-%COMP%]{width:58.333333%}.wk-ipadp-8[_ngcontent-%COMP%]{width:66.666667%}.wk-ipadp-9[_ngcontent-%COMP%]{width:75%}.wk-ipadp-10[_ngcontent-%COMP%]{width:83.333333%}.wk-ipadp-11[_ngcontent-%COMP%]{width:91.666667%}.wk-ipadp-12[_ngcontent-%COMP%]{width:100%}}@media (max-width: 768px){.wk-tab-1[_ngcontent-%COMP%]{width:8.333333%}.wk-tab-2[_ngcontent-%COMP%]{width:16.666667%}.wk-tab-3[_ngcontent-%COMP%]{width:25%}.wk-tab-4[_ngcontent-%COMP%]{width:33.333333%}.wk-tab-5[_ngcontent-%COMP%]{width:41.666667%}.wk-tab-6[_ngcontent-%COMP%]{width:50%}.wk-tab-7[_ngcontent-%COMP%]{width:58.333333%}.wk-tab-8[_ngcontent-%COMP%]{width:66.666667%}.wk-tab-9[_ngcontent-%COMP%]{width:75%}.wk-tab-10[_ngcontent-%COMP%]{width:83.333333%}.wk-tab-11[_ngcontent-%COMP%]{width:91.666667%}.wk-tab-12[_ngcontent-%COMP%]{width:100%}}@media (max-width: 500px){.wk-mobile-1[_ngcontent-%COMP%]{width:8.333333%}.wk-mobile-2[_ngcontent-%COMP%]{width:16.666667%}.wk-mobile-3[_ngcontent-%COMP%]{width:25%}.wk-mobile-4[_ngcontent-%COMP%]{width:33.333333%}.wk-mobile-5[_ngcontent-%COMP%]{width:41.666667%}.wk-mobile-6[_ngcontent-%COMP%]{width:50%}.wk-mobile-7[_ngcontent-%COMP%]{width:58.333333%}.wk-mobile-8[_ngcontent-%COMP%]{width:66.666667%}.wk-mobile-9[_ngcontent-%COMP%]{width:75%}.wk-mobile-10[_ngcontent-%COMP%]{width:83.333333%}.wk-mobile-11[_ngcontent-%COMP%]{width:91.666667%}.wk-mobile-12[_ngcontent-%COMP%]{width:100%}}"]});let n=i;return n})();export{ot as ContactComponent};