import{k as _,p as w,l as C,a as n,n as I,d as z,I as m,q as P,r as y,s as h,R as G,v as J,x as K,y as M,z as Q,A as U,B as W,C as X,D as Y,E as Z,F as j,G as ee,H as ae,J as te,K as ne,L as le,M as se,N as ie,O as de,P as ce,Q as oe,S as ue,T as re,U as S,W as ve,X as me,Y as fe,Z as ke,_ as ge}from"./index.3b5096dc.js";const be=_({name:"VCardActions",setup(e,s){let{slots:t}=s;return w({VBtn:{variant:"text"}}),C(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ye=I("v-card-subtitle"),Ce=I("v-card-title"),Ie=z({name:"VCardItem",props:{appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:String,title:String,...P()},setup(e,s){let{slots:t}=s;return C(()=>{var a,d,c,o,u;const f=!!(e.prependAvatar||e.prependIcon||t.prepend),k=!!(e.appendAvatar||e.appendIcon||t.append),g=!!(e.title||t.title),b=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[f&&n(y,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__prepend"},[(l=(a=t.prepend)==null?void 0:a.call(t))!=null?l:n(h,null,null)])]}}),n("div",{class:"v-card-item__content"},[g&&n(Ce,{key:"title"},{default:()=>{var l;return[(l=(d=t.title)==null?void 0:d.call(t))!=null?l:e.title]}}),b&&n(ye,{key:"subtitle"},{default:()=>{var l;return[(l=(c=t.subtitle)==null?void 0:c.call(t))!=null?l:e.subtitle]}}),(o=t.default)==null?void 0:o.call(t)]),k&&n(y,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__append"},[(l=(u=t.append)==null?void 0:u.call(t))!=null?l:n(h,null,null)])]}})])}),{}}}),Ve=I("v-card-text"),Ae=_({name:"VCard",directives:{Ripple:G},props:{appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:Boolean,subtitle:String,text:String,title:String,...J(),...K(),...P(),...M(),...Q(),...U(),...W(),...X(),...Y(),...Z(),...j(),...ee({variant:"elevated"})},setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:d}=ae(e),{borderClasses:c}=te(e),{colorClasses:o,colorStyles:u,variantClasses:f}=ne(e),{densityClasses:k}=le(e),{dimensionStyles:g}=se(e),{elevationClasses:b}=ie(e),{loaderClasses:l}=de(e),{locationStyles:x}=ce(e),{positionClasses:$}=oe(e),{roundedClasses:T}=ue(e),r=re(e,t),B=S(()=>e.link!==!1&&r.isLink.value),v=S(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return C(()=>{var V,p,A;const D=B.value?"a":e.tag,L=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=L||R,F=!!(a.append||e.appendAvatar||e.appendIcon),H=!!(a.prepend||e.prependAvatar||e.prependIcon),N=!!(a.image||e.image),O=E||H||F,q=!!(a.text||e.text);return ve(n(D,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},d.value,c.value,o.value,k.value,b.value,l.value,$.value,T.value,f.value],style:[u.value,g.value,x.value],href:r.href.value,onClick:v.value&&r.navigate},{default:()=>[N&&n(y,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var i;return[n("div",{class:"v-card__image"},[(i=(V=a.image)==null?void 0:V.call(a))!=null?i:n(fe,null,null)])]}}),n(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),O&&n(Ie,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(Ve,{key:"text"},{default:()=>{var i;return[(i=(p=a.text)==null?void 0:p.call(a))!=null?i:e.text]}}),(A=a.default)==null?void 0:A.call(a),a.actions&&n(be,null,{default:a.actions}),ge(v.value,"v-card")]}),[[me("ripple"),v.value]])}),{}}});export{Ae as V,Ve as a,be as b};
