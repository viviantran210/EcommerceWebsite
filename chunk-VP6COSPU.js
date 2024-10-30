import{t as M}from"./chunk-32MLX6QK.js";import{a as rt,e as st}from"./chunk-B5O27VY2.js";import{d as v}from"./chunk-23VXTOXP.js";import{$a as h,A as O,Aa as Y,Ca as q,Ea as F,F as L,Fa as y,J as H,N as k,Nb as et,Ob as nt,S as U,Wa as m,Y as w,aa as z,ba as E,bc as ot,da as A,db as G,f as x,fa as g,ga as V,jb as J,ka as W,la as S,ma as B,nb as K,ob as Q,q as f,r as j,sb as X,u as p,ub as Z,vb as tt,wc as it,ya as $}from"./chunk-EJSGNW64.js";var pt=["*"],R;function mt(){if(R===void 0&&(R=null,typeof window<"u")){let s=window;s.trustedTypes!==void 0&&(R=s.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return R}function _(s){return mt()?.createHTML(s)||s}function at(s){return Error(`Unable to find icon with the name "${s}"`)}function gt(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function ct(s){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${s}".`)}function ht(s){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${s}".`)}var l=class{constructor(n,c,t){this.url=n,this.svgText=c,this.options=t}},vt=(()=>{let n=class n{constructor(t,e,o,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=o}addSvgIcon(t,e,o){return this.addSvgIconInNamespace("",t,e,o)}addSvgIconLiteral(t,e,o){return this.addSvgIconLiteralInNamespace("",t,e,o)}addSvgIconInNamespace(t,e,o,i){return this._addSvgIconConfig(t,e,new l(o,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,o,i){let r=this._sanitizer.sanitize(m.HTML,o);if(!r)throw ht(o);let a=_(r);return this._addSvgIconConfig(t,e,new l("",a,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,o){return this._addSvgIconSetConfig(t,new l(e,null,o))}addSvgIconSetLiteralInNamespace(t,e,o){let i=this._sanitizer.sanitize(m.HTML,e);if(!i)throw ht(e);let r=_(i);return this._addSvgIconSetConfig(t,new l("",r,o))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(m.RESOURCE_URL,t);if(!e)throw ct(t);let o=this._cachedIconsByUrl.get(e);return o?f(D(o)):this._loadSvgIconFromConfig(new l(t,null)).pipe(w(i=>this._cachedIconsByUrl.set(e,i)),p(i=>D(i)))}getNamedSvgIcon(t,e=""){let o=lt(e,t),i=this._svgIconConfigs.get(o);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(o,i),this._getSvgFromConfig(i);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):j(at(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?f(D(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(p(e=>D(e)))}_getSvgFromIconSetConfigs(t,e){let o=this._extractIconWithNameFromAnySet(t,e);if(o)return f(o);let i=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(L(a=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(m.RESOURCE_URL,r.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(u)),f(null)})));return O(i).pipe(p(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw at(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let o=e.length-1;o>=0;o--){let i=e[o];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(i),a=this._extractSvgIconFromSet(r,t,i.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(w(e=>t.svgText=e),p(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?f(null):this._fetchIcon(t).pipe(w(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,o){let i=t.querySelector(`[id="${e}"]`);if(!i)return null;let r=i.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,o);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),o);let a=this._svgElementFromString(_("<svg></svg>"));return a.appendChild(r),this._setSvgAttributes(a,o)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let o=e.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(t){let e=this._svgElementFromString(_("<svg></svg>")),o=t.attributes;for(let i=0;i<o.length;i++){let{name:r,value:a}=o[i];r!=="id"&&e.setAttribute(r,a)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:o}=t,i=o?.withCredentials??!1;if(!this._httpClient)throw gt();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(m.RESOURCE_URL,e);if(!r)throw ct(e);let a=this._inProgressUrlFetches.get(r);if(a)return a;let d=this._httpClient.get(r,{responseType:"text",withCredentials:i}).pipe(p(u=>_(u)),k(()=>this._inProgressUrlFetches.delete(r)),U());return this._inProgressUrlFetches.set(r,d),d}_addSvgIconConfig(t,e,o){return this._svgIconConfigs.set(lt(t,e),o),this}_addSvgIconSetConfig(t,e){let o=this._iconSetConfigs.get(t);return o?o.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let o=0;o<this._resolvers.length;o++){let i=this._resolvers[o](e,t);if(i)return _t(i)?new l(i.url,null,i.options):new l(i,null)}}};n.\u0275fac=function(e){return new(e||n)(g(rt,8),g(st),g(v,8),g(F))},n.\u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();function D(s){return s.cloneNode(!0)}function lt(s,n){return s+":"+n}function _t(s){return!!(s.url&&s.options)}var It=new A("MAT_ICON_DEFAULT_OPTIONS"),Ct=new A("mat-icon-location",{providedIn:"root",factory:wt});function wt(){let s=V(v),n=s?s.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}var dt=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Et=dt.map(s=>`[${s}]`).join(", "),St=/^url\(['"]?#(.*?)['"]?\)$/,zt=(()=>{let n=class n{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,o,i,r,a){this._elementRef=t,this._iconRegistry=e,this._location=i,this._errorHandler=r,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=x.EMPTY,a&&(a.color&&(this.color=this._defaultColor=a.color),a.fontSet&&(this.fontSet=a.fontSet)),o||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let o=t.childNodes[e];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>t.classList.remove(o)),e.forEach(o=>t.classList.add(o)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((o,i)=>{o.forEach(r=>{i.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Et),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)dt.forEach(r=>{let a=e[i],d=a.getAttribute(r),u=d?d.match(St):null;if(u){let C=o.get(a);C||(C=[],o.set(a,C)),C.push({name:r,value:u[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,o]=this._splitIconName(t);e&&(this._svgNamespace=e),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,e).pipe(H(1)).subscribe(i=>this._setSvgElement(i),i=>{let r=`Error retrieving icon ${e}:${o}! ${i.message}`;this._errorHandler.handleError(new Error(r))})}}};n.\u0275fac=function(e){return new(e||n)(h(y),h(vt),$("aria-hidden"),h(Ct),h(F),h(It,8))},n.\u0275cmp=W({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,o){e&2&&(X("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),tt(o.color?"mat-"+o.color:""),Z("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",it],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[Q,ot],ngContentSelectors:pt,decls:1,vars:0,template:function(e,o){e&1&&(et(),nt(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let s=n;return s})(),Vt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=S({type:n}),n.\u0275inj=E({imports:[M,M]});let s=n;return s})();var I=class{attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},P=class extends I{constructor(n,c,t,e,o){super(),this.component=n,this.viewContainerRef=c,this.injector=t,this.componentFactoryResolver=e,this.projectableNodes=o}},T=class extends I{constructor(n,c,t,e){super(),this.templateRef=n,this.viewContainerRef=c,this.context=t,this.injector=e}get origin(){return this.templateRef.elementRef}attach(n,c=this.context){return this.context=c,super.attach(n)}detach(){return this.context=void 0,super.detach()}},b=class extends I{constructor(n){super(),this.element=n instanceof y?n.nativeElement:n}},N=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof P)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof T)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof b)return this._attachedPortal=n,this.attachDomPortal(n)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var ut=class extends N{constructor(n,c,t,e,o){super(),this.outletElement=n,this._componentFactoryResolver=c,this._appRef=t,this._defaultInjector=e,this.attachDomPortal=i=>{this._document;let r=i.element;r.parentNode;let a=this._document.createComment("dom-portal");r.parentNode.insertBefore(a,r),this.outletElement.appendChild(r),this._attachedPortal=i,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(r,a)})},this._document=o}attachComponentPortal(n){let t=(n.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(n.component),e;return n.viewContainerRef?(e=n.viewContainerRef.createComponent(t,n.viewContainerRef.length,n.injector||n.viewContainerRef.injector,n.projectableNodes||void 0),this.setDisposeFn(()=>e.destroy())):(e=t.create(n.injector||this._defaultInjector||Y.NULL),this._appRef.attachView(e.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(e.hostView),e.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let c=n.viewContainerRef,t=c.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(e=>this.outletElement.appendChild(e)),t.detectChanges(),this.setDisposeFn(()=>{let e=c.indexOf(t);e!==-1&&c.remove(e)}),this._attachedPortal=n,t}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var te=(()=>{let n=class n extends N{constructor(t,e,o){super(),this._componentFactoryResolver=t,this._viewContainerRef=e,this._isInitialized=!1,this.attached=new q,this.attachDomPortal=i=>{this._document;let r=i.element;r.parentNode;let a=this._document.createComment("dom-portal");i.setAttachedHost(this),r.parentNode.insertBefore(a,r),this._getRootNode().appendChild(r),this._attachedPortal=i,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(r,a)})},this._document=o}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,i=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),r=e.createComponent(i,e.length,t.injector||e.injector,t.projectableNodes||void 0);return e!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=t,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}};n.\u0275fac=function(e){return new(e||n)(h(G),h(J),h(v))},n.\u0275dir=B({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[K]});let s=n;return s})();var ee=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=S({type:n}),n.\u0275inj=E({});let s=n;return s})();export{T as a,ut as b,te as c,ee as d,zt as e,Vt as f};
