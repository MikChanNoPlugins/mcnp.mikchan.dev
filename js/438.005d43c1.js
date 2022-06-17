"use strict";(self["webpackChunkmcnp"]=self["webpackChunkmcnp"]||[]).push([[438],{652:function(e,t,n){n.d(t,{V:function(){return g},O:function(){return m}});var l=n(3396),a=n(3289),r=n(3947),i=n(9694),s=n(4231),o=n(9374),u=n(1138),d=n(2370),v=n(3766),c=n(1107),p=n(9888),f=n(4870);const m=(0,v.U)({color:String,start:Boolean,end:Boolean,icon:String,image:String,...(0,i.f)(),...(0,s.I)(),...(0,o.Z)(),...(0,u.Q)()}),g=(0,c.a)({name:"VAvatar",props:m(),setup(e,t){let{slots:n}=t;const{backgroundColorClasses:u,backgroundColorStyles:v}=(0,d.Y5)((0,f.Vh)(e,"color")),{densityClasses:c}=(0,i.t)(e),{roundedClasses:m}=(0,s.b)(e),{sizeClasses:g,sizeStyles:h}=(0,o.t)(e);return(0,p.L)((()=>{var t;return(0,l.Wm)(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},u.value,c.value,m.value,g.value],style:[v.value,h.value]},{default:()=>[e.image?(0,l.Wm)(r.f,{src:e.image,alt:""},null):e.icon?(0,l.Wm)(a.t,{icon:e.icon},null):null==(t=n.default)?void 0:t.call(n)]})})),{}}})},4075:function(e,t,n){n.d(t,{J:function(){return u}});var l=n(3396),a=n(4870),r=n(1107),i=n(131),s=n(7041),o=n(2370);const u=(0,r.a)({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...(0,s.x$)()},setup(e,t){let{attrs:n}=t;const{themeClasses:r}=(0,s.ER)(e),{backgroundColorClasses:u,backgroundColorStyles:d}=(0,o.Y5)((0,a.Vh)(e,"color")),v=(0,l.Fl)((()=>{const t={};return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=(0,i.kb)(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=(0,i.kb)(e.thickness)),t}));return()=>(0,l.Wm)("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},r.value,u.value],style:[v.value,d.value],"aria-orientation":n.role&&"separator"!==n.role?void 0:e.vertical?"vertical":"horizontal",role:`${n.role||"separator"}`},null)}})},378:function(e,t,n){n.d(t,{i:function(){return _}});var l=n(3396),a=n(4075),r=n(9242),i=n(836),s=n(1107);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return(0,s.a)({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:t}},setup(t,n){let{slots:a}=n;return()=>{const n=t.group?r.W3:r.uT;return(0,l.h)(n,{name:e,mode:t.mode,onBeforeEnter(e){e.style.transformOrigin=t.origin},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:n,offsetWidth:l,offsetHeight:a}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${n}px`,e.style.width=`${l}px`,e.style.height=`${a}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&null!=e&&e._transitionInitialStyles){const{position:t,top:n,left:l,width:a,height:r}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=l||"",e.style.width=a||"",e.style.height=r||""}}},a.default)}}})}function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return(0,s.a)({name:e,props:{mode:{type:String,default:n}},setup(n,a){let{slots:i}=a;return()=>(0,l.h)(r.uT,{name:e,...t},i.default)}})}var d=n(7139);function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=t?"width":"height",l=(0,d._A)(`offset-${n}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},onEnter(t){const a=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const r=`${t[l]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=a.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=r}))},onAfterEnter:r,onEnterCancelled:r,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[l]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},onAfterLeave:a,onLeaveCancelled:a};function a(t){e&&t._parent&&t._parent.classList.remove(e),r(t)}function r(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}o("carousel-transition"),o("carousel-reverse-transition"),o("tab-transition"),o("tab-reverse-transition"),o("menu-transition"),o("fab-transition","center center","out-in"),o("dialog-bottom-transition"),o("dialog-top-transition"),o("fade-transition"),o("scale-transition"),o("scroll-x-transition"),o("scroll-x-reverse-transition"),o("scroll-y-transition"),o("scroll-y-reverse-transition"),o("slide-x-transition"),o("slide-x-reverse-transition"),o("slide-y-transition"),o("slide-y-reverse-transition");const c=u("expand-transition",v());u("expand-x-transition",v("",!0));var p=n(3867),f=n(1138),m=n(6479),g=n(4870);const h=(0,s.a)({name:"VListGroupActivator",setup(e,t){let{slots:n}=t;return(0,m._$)(),()=>{var e;return null==(e=n.default)?void 0:e.call(n)}}}),y=(0,s.e)()({name:"VListGroup",props:{activeColor:String,color:String,collapseIcon:{type:String,default:"$collapse"},expandIcon:{type:String,default:"$expand"},value:null,...(0,f.Q)()},setup(e,t){let{slots:n}=t;const{isOpen:a,open:s}=(0,m.Io)((0,g.Vh)(e,"value"),!0),o=(0,p.sm)(),u=e=>{s(!a.value,e)},d=(0,l.Fl)((()=>{var t;return{onClick:u,appendIcon:a.value?e.collapseIcon:e.expandIcon,class:"v-list-group__header",color:a.value?null!=(t=e.activeColor)?t:e.color:void 0}}));return()=>{var t;return(0,l.Wm)(e.tag,{class:["v-list-group",{"v-list-group--prepend":null==o?void 0:o.hasPrepend.value}]},{default:()=>[n.activator&&(0,l.Wm)(i.z,{defaults:{VListItemIcon:{color:d.value.color}}},{default:()=>[(0,l.Wm)(h,null,{default:()=>[n.activator({props:d.value,isOpen:a})]})]}),(0,l.Wm)(c,null,{default:()=>[(0,l.wy)((0,l.Wm)("div",{class:"v-list-group__items"},[null==(t=n.default)?void 0:t.call(n)]),[[r.F8,a.value]])]})]})}}});var S=n(329),b=n(7754);const C=(0,s.e)()({name:"VListChildren",props:{items:Array},setup(e,t){let{slots:n}=t;return(0,p.$l)(),()=>{var t,r,i;return null!=(t=null==(r=n.default)?void 0:r.call(n))?t:null==(i=e.items)?void 0:i.map((e=>{let{children:t,props:r,type:i}=e;return"divider"===i?(0,l.Wm)(a.J,r,null):"subheader"===i?(0,l.Wm)(b.b,r,n):t?(0,l.Wm)(y,{value:null==r?void 0:r.value},{activator:e=>{let{props:t}=e;return n.header?n.header({...r,...t}):(0,l.Wm)(S.l,(0,l.dG)(r,t),n)},default:()=>(0,l.Wm)(C,{items:t},n)}):n.item?n.item(r):(0,l.Wm)(S.l,r,n)}))}}});var w=n(2718),x=n(9694),A=n(4544),V=n(2465),W=n(4231),I=n(2370),k=n(7041),F=n(5221),$=n(8434),L=n(9888);const B=e=>{if(e)return e.map((e=>{if("string"===typeof e)return{type:"item",value:e,title:e};const{$type:t,$children:n,...l}=e;return"subheader"===t?{type:"subheader",props:l}:"divider"===t?{type:"divider",props:l}:{type:"item",props:l,children:B(n)}}))},_=(0,s.e)()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,items:Array,...(0,m.Gp)({selectStrategy:"single-leaf",openStrategy:"multiple"}),...(0,w.m)(),...(0,x.f)(),...(0,A.x)(),...(0,V.c)(),...(0,W.I)(),...(0,f.Q)(),...(0,k.x$)(),...(0,F.bk)({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,t){let{slots:n}=t;const a=(0,l.Fl)((()=>B(e.items))),{themeClasses:r}=(0,k.ER)(e),{backgroundColorClasses:i,backgroundColorStyles:s}=(0,I.Y5)((0,g.Vh)(e,"bgColor")),{borderClasses:o}=(0,w.P)(e),{densityClasses:u}=(0,x.t)(e),{dimensionStyles:d}=(0,A.$)(e),{elevationClasses:v}=(0,V.Y)(e),{roundedClasses:c}=(0,W.b)(e),{open:f,select:h}=(0,m.Ek)(e),y=(0,l.Fl)((()=>e.lines?`v-list--${e.lines}-line`:void 0)),S=(0,g.Vh)(e,"activeColor"),b=(0,g.Vh)(e,"color");return(0,p.$l)(),(0,$.AF)({VListGroup:{activeColor:S,color:b},VListItem:{activeClass:(0,g.Vh)(e,"activeClass"),activeColor:S,color:b,density:(0,g.Vh)(e,"density"),disabled:(0,g.Vh)(e,"disabled"),lines:(0,g.Vh)(e,"lines"),nav:(0,g.Vh)(e,"nav"),variant:(0,g.Vh)(e,"variant")}}),(0,L.L)((()=>(0,l.Wm)(e.tag,{class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},r.value,i.value,o.value,u.value,v.value,y.value,c.value],style:[s.value,d.value]},{default:()=>[(0,l.Wm)(C,{items:a.value},n)]}))),{open:f,select:h}}})},329:function(e,t,n){n.d(t,{l:function(){return W}});var l=n(3396),a=n(7288),r=n(1114);const i=(0,r.J)("v-list-item-header");var s=n(3289),o=n(1107);const u=(0,o.a)({name:"VListItemIcon",props:(0,s.f)(),setup(e,t){let{slots:n}=t;return()=>(0,l.Wm)(s.t,(0,l.dG)({class:["v-list-item-icon",{"v-list-item-icon--start":e.start,"v-list-item-icon--end":e.end}]},e),n)}}),d=(0,r.J)("v-list-item-subtitle");var v=n(2127),c=n(5221),p=n(2718),f=n(9694),m=n(4544),g=n(2465),h=n(4231),y=n(6183),S=n(1138),b=n(7041),C=n(80),w=n(3867),x=n(3824),A=n(9888),V=n(6479);const W=(0,o.e)()({name:"VListItem",directives:{Ripple:x.H},props:{active:Boolean,activeColor:String,activeClass:String,appendAvatar:String,appendIcon:String,disabled:Boolean,lines:String,nav:Boolean,prependAvatar:String,prependIcon:String,subtitle:String,title:String,value:null,...(0,p.m)(),...(0,f.f)(),...(0,m.x)(),...(0,g.c)(),...(0,h.I)(),...(0,y.GN)(),...(0,S.Q)(),...(0,b.x$)(),...(0,c.bk)({variant:"text"})},setup(e,t){let{attrs:n,slots:r}=t;const s=(0,y.nB)(e,n),o=(0,l.Fl)((()=>{var t;return null!=(t=e.value)?t:s.href.value})),{select:S,isSelected:x,isIndeterminate:W,isGroupActivator:I,root:k,parent:F}=(0,V.Io)(o,!1),$=(0,w.sm)(),L=(0,l.Fl)((()=>{var t;return e.active||(null==(t=s.isExactActive)?void 0:t.value)||x.value})),B=(0,l.Fl)((()=>e.rounded||e.nav)),_=(0,l.Fl)((()=>{var t;return{color:L.value&&null!=(t=e.activeColor)?t:e.color,variant:e.variant}}));(0,l.bv)((()=>{var e;null!=(e=s.isExactActive)&&e.value&&null!=F.value&&k.open(F.value,!0)})),(0,l.YP)((()=>{var e;return null==(e=s.isExactActive)?void 0:e.value}),(e=>{e&&null!=F.value&&k.open(F.value,!0)}));const{themeClasses:H}=(0,b.ER)(e),{borderClasses:P}=(0,p.P)(e),{colorClasses:E,colorStyles:G,variantClasses:J}=(0,c.c1)(_),{densityClasses:M}=(0,f.t)(e),{dimensionStyles:O}=(0,m.$)(e),{elevationClasses:Y}=(0,g.Y)(e),{roundedClasses:T}=(0,h.b)(B),z=(0,l.Fl)((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),U=(0,l.Fl)((()=>({isActive:L.value,select:S,isSelected:x.value,isIndeterminate:W.value})));(0,C.O)(s,S),(0,A.L)((()=>{var t,n,o;const p=s.isLink.value?"a":e.tag,f=!$||x.value||L.value,m=r.title||e.title,g=r.subtitle||e.subtitle,h=!(!m&&!g),y=!!(r.append||e.appendAvatar||e.appendIcon),b=!!(r.prepend||e.prependAvatar||e.prependIcon),C=!e.disabled&&(s.isClickable.value||null!=e.value&&!!$);return null==$||$.updateHasPrepend(b),(0,l.wy)((0,l.Wm)(p,{class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C,"v-list-item--nav":e.nav,"v-list-item--prepend":!b&&(null==$?void 0:$.hasPrepend.value),[`${e.activeClass}`]:L.value},H.value,P.value,f?E.value:void 0,M.value,Y.value,z.value,T.value,J.value],style:[f?G.value:void 0,O.value],href:s.href.value,tabindex:C?0:void 0,onClick:C&&(e=>{var t;I||(null==(t=s.navigate)||t.call(s,e),S(!x.value,e))})},{default:()=>[(0,c.Ux)(C||L.value,"v-list-item"),b&&(0,l.Wm)(l.HY,null,[e.prependAvatar&&(0,l.Wm)(a.U,{image:e.prependAvatar,start:!0},null),e.prependIcon&&(0,l.Wm)(u,{icon:e.prependIcon,start:!0},null),null==(t=r.prepend)?void 0:t.call(r,U.value)]),h&&(0,l.Wm)(i,null,{default:()=>[m&&(0,l.Wm)(v.V,null,{default:()=>[r.title?r.title({title:e.title}):e.title]}),g&&(0,l.Wm)(d,null,{default:()=>[r.subtitle?r.subtitle({subtitle:e.subtitle}):e.subtitle]})]}),null==(n=r.default)?void 0:n.call(r,U.value),y&&(0,l.Wm)(l.HY,null,[null==(o=r.append)?void 0:o.call(r,U.value),e.appendAvatar&&(0,l.Wm)(a.U,{image:e.appendAvatar,end:!0},null),e.appendIcon&&(0,l.Wm)(u,{icon:e.appendIcon,end:!0},null)])]}),[[(0,l.Q2)("ripple"),C]])}))}})},7288:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(3396),a=n(652),r=n(1107);const i=(0,r.a)({name:"VListItemAvatar",props:(0,a.O)(),setup(e,t){let{slots:n}=t;return()=>(0,l.Wm)(a.V,(0,l.dG)({class:["v-list-item-avatar",{"v-list-item-avatar--start":e.start,"v-list-item-avatar--end":e.end}]},e),n)}})},2127:function(e,t,n){n.d(t,{V:function(){return a}});var l=n(1114);const a=(0,l.J)("v-list-item-title")},7754:function(e,t,n){n.d(t,{b:function(){return o}});var l=n(3396),a=n(1138),r=n(2370),i=n(4870),s=n(1107);const o=(0,s.a)({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,text:String,...(0,a.Q)()},setup(e,t){let{slots:n}=t;const{textColorClasses:a,textColorStyles:s}=(0,r.rY)((0,i.Vh)(e,"color"));return()=>{var t,r;const i=!(!n.default&&!e.text);return(0,l.Wm)(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value],style:{textColorStyles:s}},{default:()=>[i&&(0,l.Wm)("div",{class:"v-list-subheader__text"},[null!=(t=null==(r=n.default)?void 0:r.call(n))?t:e.text])]})}}})},3867:function(e,t,n){n.d(t,{$l:function(){return i},sm:function(){return s}});var l=n(3396),a=n(4870);Symbol.for("vuetify:depth");const r=Symbol.for("vuetify:list");function i(){const e=(0,l.f3)(r,{hasPrepend:(0,a.iH)(!1),updateHasPrepend:()=>null}),t={hasPrepend:(0,a.iH)(!1),updateHasPrepend:e=>{e&&(t.hasPrepend.value=e)}};return(0,l.JJ)(r,t),e}function s(){return(0,l.f3)(r,null)}},4215:function(e,t,n){n.d(t,{T:function(){return f}});var l=n(3396),a=n(993),r=n(9242),i=n(1107),s=n(8587),o=n(3122);const u=(0,i.a)({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const a={onBeforeEnter(e){e.style.pointerEvents="none"},async onEnter(t,n){await new Promise((e=>requestAnimationFrame(e)));const{x:l,y:a}=d(e.target,t),r=t.animate([{transform:`translate(${l}px, ${a}px) scale(0.1)`,opacity:0},{transform:""}],{duration:225,easing:s.uX});r.finished.then((()=>n()))},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(t,n){await new Promise((e=>requestAnimationFrame(e)));const{x:l,y:a}=d(e.target,t),r=t.animate([{transform:""},{transform:`translate(${l}px, ${a}px) scale(0.1)`,opacity:0}],{duration:125,easing:s.x0});r.finished.then((()=>n()))},onAfterLeave(e){e.style.removeProperty("pointer-events")}};return()=>e.target?(0,l.Wm)(r.uT,(0,l.dG)({name:"dialog-transition"},a,{css:!1}),n):(0,l.Wm)(r.uT,{name:"dialog-transition"},n)}});function d(e,t){const n=e.getBoundingClientRect(),l=(0,o.G)(t),[a,r]=getComputedStyle(t).transformOrigin.split(" ").map((e=>parseFloat(e))),[i,s]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=n.left+n.width/2;"left"===i||"left"===s?u-=n.width/2:"right"!==i&&"right"!==s||(u+=n.width/2);let d=n.top+n.height/2;return"top"===i||"top"===s?d-=n.height/2:"bottom"!==i&&"bottom"!==s||(d+=n.height/2),{x:u-(a+l.left),y:d-(r+l.top)}}var v=n(4906),c=n(8717),p=n(131);const f=(0,i.e)()({name:"VMenu",inheritAttrs:!1,props:{disableKeys:Boolean,modelValue:Boolean,id:String,...(0,v.X)({transition:{component:u}})},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:r}=t;const i=(0,c.z)(e,"modelValue"),s=(0,p.sq)(),o=(0,l.Fl)((()=>e.id||`v-menu-${s}`));return()=>(0,l.Wm)(a.y,(0,l.dG)({modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,class:["v-menu"],transition:e.transition,absolute:!0,positionStrategy:"connected",scrollStrategy:"reposition",scrim:!1,activatorProps:{"aria-haspopup":"menu","aria-expanded":String(i.value),"aria-owns":o.value}},n),{default:r.default,activator:r.activator})}})},6479:function(e,t,n){n.d(t,{Gp:function(){return y},Ek:function(){return S},_$:function(){return C},Io:function(){return b}});var l=n(8717),a=n(3766),r=n(7514),i=n(131),s=n(4870),o=n(3396);const u=e=>{let{id:t,value:n,opened:l,parents:a}=e;if(n){const e=new Set;e.add(t);let n=a.get(t);while(null!=n)e.add(n),n=a.get(n);return e}return l.delete(t),l},d=e=>{let{id:t,value:n,opened:l,parents:a}=e;if(n){let e=a.get(t);l.add(t);while(null!=e&&e!==t)l.add(e),e=a.get(e);return l}return l.delete(t),l},v=e=>{const t={select:t=>{let{id:n,value:l,selected:a}=t;if(e&&!l){const e=Array.from(a.entries()).reduce(((e,t)=>{let[n,l]=t;return"on"===l?[...e,n]:e}),[]);if(1===e.length&&e[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(e,n,l)=>{let a=new Map;for(const r of e||[])a=t.select({id:r,value:!0,selected:new Map(a),children:n,parents:l});return a},out:e=>{const t=[];for(const[n,l]of e.entries())"on"===l&&t.push(n);return t}};return t},c=e=>{const t=v(e),n={select:e=>{let{selected:n,id:l,...a}=e;const r=n.has(l)?new Map([[l,n.get(l)]]):new Map;return t.select({...a,id:l,selected:r})},in:(e,n,l)=>{let a=new Map;return null!=e&&e.length&&(a=t.in(e.slice(0,1),n,l)),a},out:(e,n,l)=>t.out(e,n,l)};return n},p=e=>{const t=v(e),n={select:e=>{let{id:n,selected:l,children:a,...r}=e;return a.has(n)?l:t.select({id:n,selected:l,children:a,...r})},in:t.in,out:t.out};return n},f=e=>{const t=c(e),n={select:e=>{let{id:n,selected:l,children:a,...r}=e;return a.has(n)?l:t.select({id:n,selected:l,children:a,...r})},in:t.in,out:t.out};return n},m=e=>{const t={select:t=>{let{id:n,value:l,selected:a,children:r,parents:i}=t;const s=new Map(a),o=[n];while(o.length){const e=o.shift();a.set(e,l?"on":"off"),r.has(e)&&o.push(...r.get(e))}let u=i.get(n);while(u){const e=r.get(u),t=e.every((e=>"on"===a.get(e))),n=e.every((e=>!a.has(e)||"off"===a.get(e)));a.set(u,t?"on":n?"off":"indeterminate"),u=i.get(u)}if(e&&!l){const e=Array.from(a.entries()).reduce(((e,t)=>{let[n,l]=t;return"on"===l?[...e,n]:e}),[]);if(0===e.length)return s}return a},in:(e,n,l)=>{let a=new Map;for(const r of e||[])a=t.select({id:r,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(e,t)=>{const n=[];for(const[l,a]of e.entries())"on"!==a||t.has(l)||n.push(l);return n}};return t},g=Symbol.for("vuetify:nested"),h={id:(0,s.iH)(),root:{register:()=>null,unregister:()=>null,parents:(0,s.iH)(new Map),children:(0,s.iH)(new Map),open:()=>null,select:()=>null,opened:(0,s.iH)(new Set),selected:(0,s.iH)(new Map),selectedValues:(0,s.iH)([])}},y=(0,a.U)({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),S=e=>{let t=!1;const n=(0,s.iH)(new Map),a=(0,s.iH)(new Map),i=(0,l.z)(e,"opened",e.opened,(e=>new Set(e)),(e=>[...e.values()])),h=(0,o.Fl)((()=>{if("object"===typeof e.selectStrategy)return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return f(e.mandatory);case"leaf":return p(e.mandatory);case"independent":return v(e.mandatory);case"single-independent":return c(e.mandatory);case"classic":default:return m(e.mandatory)}})),y=(0,o.Fl)((()=>{if("function"===typeof e.openStrategy)return e.openStrategy;switch(e.openStrategy){case"single":return u;case"multiple":default:return d}})),S=(0,l.z)(e,"selected",e.selected,(e=>h.value.in(e,n.value,a.value)),(e=>h.value.out(e,n.value,a.value)));function b(e){const t=[];let n=e;while(null!=n)t.unshift(n),n=a.value.get(n);return t}(0,o.Jd)((()=>{t=!0}));const C=(0,r.F)("nested"),w={id:(0,s.iH)(),root:{opened:i,selected:S,selectedValues:(0,o.Fl)((()=>{const e=[];for(const[t,n]of S.value.entries())"on"===n&&e.push(t);return e})),register:(e,t,l)=>{t&&e!==t&&a.value.set(e,t),l&&n.value.set(e,[]),null!=t&&n.value.set(t,[...n.value.get(t)||[],e])},unregister:e=>{if(t)return;n.value.delete(e);const l=a.value.get(e);if(l){var r;const t=null!=(r=n.value.get(l))?r:[];n.value.set(l,t.filter((t=>t!==e)))}a.value.delete(e),i.value.delete(e)},open:(e,t,l)=>{C.emit("click:open",{id:e,value:t,path:b(e),event:l});const r=y.value({id:e,value:t,opened:new Set(i.value),children:n.value,parents:a.value,event:l});r&&(i.value=r)},select:(e,t,l)=>{C.emit("click:select",{id:e,value:t,path:b(e),event:l});const r=h.value.select({id:e,value:t,selected:new Map(S.value),children:n.value,parents:a.value,event:l});r&&(S.value=r)},children:n,parents:a}};return(0,o.JJ)(g,w),w.root},b=(e,t)=>{const n=(0,o.f3)(g,h),l=(0,o.Fl)((()=>{var t;return null!=(t=e.value)?t:(0,i.sq)().toString()})),a={...n,id:l,open:(e,t)=>n.root.open(l.value,e,t),isOpen:(0,o.Fl)((()=>n.root.opened.value.has(l.value))),parent:(0,o.Fl)((()=>n.root.parents.value.get(l.value))),select:(e,t)=>n.root.select(l.value,e,t),isSelected:(0,o.Fl)((()=>"on"===n.root.selected.value.get(l.value))),isIndeterminate:(0,o.Fl)((()=>"indeterminate"===n.root.selected.value.get(l.value))),isLeaf:(0,o.Fl)((()=>!n.root.children.value.get(l.value))),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(l.value,n.id.value,t),(0,o.Jd)((()=>{!n.isGroupActivator&&n.root.unregister(l.value)})),t&&(0,o.JJ)(g,a),a},C=()=>{const e=(0,o.f3)(g,h);(0,o.JJ)(g,{...e,isGroupActivator:!0})}}}]);