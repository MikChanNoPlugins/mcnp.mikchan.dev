import{o as x}from"./octokit.2d823010.js";import{g as C,h as b,i as N,d as S,j as D,k as B,c as m,w as n,r as s,o as _,a as o,l as V,t as f,b as g,n as F,p as I,F as O,e as h}from"./index.2eab3056.js";const P=async e=>(await x.repos.listForOrg({org:e})).data,E=()=>{const e=sessionStorage.getItem("github-repo-data");return e==null?[]:JSON.parse(e)},J=e=>{const t=C(E());return b(()=>{(async()=>(t.value=await P(e),sessionStorage.setItem("github-repo-data",JSON.stringify(t.value))))()}),{data:N(t)}},L=h(" Sample text "),R=S({__name:"PluginsView",setup(e){const{t}=D(),{data:a}=J("MikChanNoPlugins"),k=B(()=>a.value.filter(u=>{var r;return(r=u.topics)==null?void 0:r.includes("spigot-plugin")}).sort((u,r)=>{var l,c;return((l=r.stargazers_count)!=null?l:0)-((c=u.stargazers_count)!=null?c:0)}));return(u,r)=>{const l=s("v-card-text"),c=s("v-card"),d=s("v-col"),p=s("v-row"),w=s("router-link"),y=s("v-card-title"),z=s("v-container");return _(),m(z,{class:"container"},{default:n(()=>[o(p,null,{default:n(()=>[o(d,{cols:"auto"},{default:n(()=>[o(c,null,{default:n(()=>[o(l,null,{default:n(()=>[V("h1",null,f(g(t)("plugins")),1)]),_:1})]),_:1})]),_:1})]),_:1}),o(p,null,{default:n(()=>[(_(!0),F(O,null,I(g(k),i=>(_(),m(d,{key:i.id,cols:"12",sm:"6",md:"4"},{default:n(()=>[o(c,null,{default:n(()=>[o(y,null,{default:n(()=>[o(w,{to:{name:"plugin",params:{name:i.name.toLowerCase()}}},{default:n(()=>[h(f(i.name),1)]),_:2},1032,["to"])]),_:2},1024),o(l,null,{default:n(()=>[L]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}});function v(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{en:{plugins:t=>{const{normalize:a}=t;return a(["Plugins"])}},ru:{plugins:t=>{const{normalize:a}=t;return a(["\u041F\u043B\u0430\u0433\u0438\u043D\u044B"])}},uk:{plugins:t=>{const{normalize:a}=t;return a(["\u041F\u043B\u0430\u0433\u0456\u043D\u0438"])}}}})}typeof v=="function"&&v(R);export{R as default};
