import{s as e,n as t,S as s,i as r,e as n,t as a,a as o,c as l,b as c,d as i,f as u,g as p,h as f,j as m,m as h,k as g,l as d,o as v,p as $,q as b,r as y,u as w,v as E,w as S,x}from"./chunk.d7b899e1.js";function _(s,r=t){let n;const a=[];function o(t){if(e(s,t)){if(s=t,!n)return;a.forEach(e=>e[1]()),a.forEach(e=>e[0](s))}}return{set:o,update:function(e){o(e(s))},subscribe:function(e,l=t){const c=[e,l];return a.push(c),1===a.length&&(n=r(o)||t),e(s),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&n()}}}}const N={},R=()=>({});function P(e){var s,r,m,h,g,d,v,$,b,y,w,E,S,x,_,N;return{c(){s=n("nav"),r=n("ul"),m=n("li"),h=n("a"),g=a("home"),v=o(),$=n("li"),b=n("a"),y=a("about"),E=o(),S=n("li"),x=n("a"),_=a("blog"),this.h()},l(e){s=l(e,"NAV",{class:!0},!1);var t=c(s);r=l(t,"UL",{class:!0},!1);var n=c(r);m=l(n,"LI",{class:!0},!1);var a=c(m);h=l(a,"A",{class:!0,href:!0},!1);var o=c(h);g=i(o,"home"),o.forEach(u),a.forEach(u),v=i(n,"\n\t\t"),$=l(n,"LI",{class:!0},!1);var p=c($);b=l(p,"A",{class:!0,href:!0},!1);var f=c(b);y=i(f,"about"),f.forEach(u),p.forEach(u),E=i(n,"\n\n\t\t\n\t\t"),S=l(n,"LI",{class:!0},!1);var d=c(S);x=l(d,"A",{rel:!0,class:!0,href:!0},!1);var w=c(x);_=i(w,"blog"),w.forEach(u),d.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){h.className=d=(void 0===e.segment?"selected":"")+" svelte-11kwxiv",h.href=".",m.className="svelte-11kwxiv",b.className=w=("about"===e.segment?"selected":"")+" svelte-11kwxiv",b.href="about",$.className="svelte-11kwxiv",x.rel="prefetch",x.className=N=("blog"===e.segment?"selected":"")+" svelte-11kwxiv",x.href="blog",S.className="svelte-11kwxiv",r.className="svelte-11kwxiv",s.className="svelte-11kwxiv"},m(e,t){p(e,s,t),f(s,r),f(r,m),f(m,h),f(h,g),f(r,v),f(r,$),f($,b),f(b,y),f(r,E),f(r,S),f(S,x),f(x,_)},p(e,t){e.segment&&d!==(d=(void 0===t.segment?"selected":"")+" svelte-11kwxiv")&&(h.className=d),e.segment&&w!==(w=("about"===t.segment?"selected":"")+" svelte-11kwxiv")&&(b.className=w),e.segment&&N!==(N=("blog"===t.segment?"selected":"")+" svelte-11kwxiv")&&(x.className=N)},i:t,o:t,d(e){e&&u(s)}}}function L(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment)}),{segment:r}}class k extends s{constructor(t){super(),r(this,t,L,P,e,["segment"])}}function A(e){var t,s,r,a=new k({props:{segment:e.segment}});const f=e.$$slots.default,v=m(f,e,null);return{c(){a.$$.fragment.c(),t=o(),s=n("main"),v&&v.c(),this.h()},l(e){a.$$.fragment.l(e),t=i(e,"\n\n"),s=l(e,"MAIN",{class:!0},!1);var r=c(s);v&&v.l(r),r.forEach(u),this.h()},h(){s.className="svelte-1uhnsl8"},m(e,n){h(a,e,n),p(e,t,n),p(e,s,n),v&&v.m(s,null),r=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),a.$set(s),v&&v.p&&e.$$scope&&v.p(g(f,t,e,null),d(f,t,null))},i(e){r||(a.$$.fragment.i(e),v&&v.i&&v.i(e),r=!0)},o(e){a.$$.fragment.o(e),v&&v.o&&v.o(e),r=!1},d(e){a.$destroy(e),e&&(u(t),u(s)),v&&v.d(e)}}}function C(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",a=e.$$scope)}),{segment:r,$$slots:n,$$scope:a}}class j extends s{constructor(t){super(),r(this,t,C,A,e,["segment"])}}function U(e){var t,s,r=e.error.stack;return{c(){t=n("pre"),s=a(r)},l(e){t=l(e,"PRE",{},!1);var n=c(t);s=i(n,r),n.forEach(u)},m(e,r){p(e,t,r),f(t,s)},p(e,t){e.error&&r!==(r=t.error.stack)&&v(s,r)},d(e){e&&u(t)}}}function q(e){var s,r,m,h,g,d,b,y,w,E=e.error.message;document.title=s=e.status;var S=e.dev&&e.error.stack&&U(e);return{c(){r=o(),m=n("h1"),h=a(e.status),g=o(),d=n("p"),b=a(E),y=o(),S&&S.c(),w=$(),this.h()},l(t){r=i(t,"\n\n"),m=l(t,"H1",{class:!0},!1);var s=c(m);h=i(s,e.status),s.forEach(u),g=i(t,"\n\n"),d=l(t,"P",{class:!0},!1);var n=c(d);b=i(n,E),n.forEach(u),y=i(t,"\n\n"),S&&S.l(t),w=$(),this.h()},h(){m.className="svelte-8od9u6",d.className="svelte-8od9u6"},m(e,t){p(e,r,t),p(e,m,t),f(m,h),p(e,g,t),p(e,d,t),f(d,b),p(e,y,t),S&&S.m(e,t),p(e,w,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&v(h,t.status),e.error&&E!==(E=t.error.message)&&v(b,E),t.dev&&t.error.stack?S?S.p(e,t):((S=U(t)).c(),S.m(w.parentNode,w)):S&&(S.d(1),S=null)},i:t,o:t,d(e){e&&(u(r),u(m),u(g),u(d),u(y)),S&&S.d(e),e&&u(w)}}}function O(e,t,s){let{status:r,error:n}=t;return e.$set=(e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)}),{status:r,error:n,dev:!1}}class I extends s{constructor(t){super(),r(this,t,O,q,e,["status","error"])}}function D(e){var t,s,r=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var s=0;s<r.length;s+=1)t=b(t,r[s]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=$()},l(e){o&&o.$$.fragment.l(e),t=$()},m(e,r){o&&h(o,e,r),p(e,t,r),s=!0},p(e,s){var l=e.level1?y(r,[s.level1.props]):{};if(n!==(n=s.level1.component)){if(o){x();const e=o;E(()=>{e.$destroy()}),e.$$.fragment.o(1),S()}n?((o=new n(a())).$$.fragment.c(),o.$$.fragment.i(1),h(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){s||(o&&o.$$.fragment.i(e),s=!0)},o(e){o&&o.$$.fragment.o(e),s=!1},d(e){e&&u(t),o&&o.$destroy(e)}}}function H(e){var t,s=new I({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){h(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||(s.$$.fragment.i(e),t=!0)},o(e){s.$$.fragment.o(e),t=!1},d(e){s.$destroy(e)}}}function J(e){var t,s,r,n,a=[H,D],o=[];function l(e){return e.error?0:1}return t=l(e),s=o[t]=a[t](e),{c(){s.c(),r=$()},l(e){s.l(e),r=$()},m(e,s){o[t].m(e,s),p(e,r,s),n=!0},p(e,n){var c=t;(t=l(n))===c?o[t].p(e,n):(x(),E(()=>{o[c].d(1),o[c]=null}),s.o(1),S(),(s=o[t])||(s=o[t]=a[t](n)).c(),s.i(1),s.m(r.parentNode,r))},i(e){n||(s&&s.i(),n=!0)},o(e){s&&s.o(),n=!1},d(e){o[t].d(e),e&&u(r)}}}function V(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[J]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=b(r,s[n]);var a=new j({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){h(a,e,s),t=!0},p(e,t){var r=e.segments||e.level0?y(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||(a.$$.fragment.i(e),t=!0)},o(e){a.$$.fragment.o(e),t=!1},d(e){a.$destroy(e)}}}function B(e,t,s){let{stores:r,error:n,status:a,segments:o,level0:l,level1:c=null}=t;return w(N,r),e.$set=(e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)}),{stores:r,error:n,status:a,segments:o,level0:l,level1:c}}class K extends s{constructor(t){super(),r(this,t,B,V,e,["stores","error","status","segments","level0","level1"])}}const T=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],G=[{js:()=>import("./index.4043c069.js"),css:["index.4043c069.css"]},{js:()=>import("./about.d6c4b84a.js"),css:[]},{js:()=>import("./index.33806671.js"),css:["index.33806671.css"]},{js:()=>import("./[slug].0a4f0684.js"),css:["[slug].0a4f0684.css"]}],M=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const W="undefined"!=typeof __SAPPER__&&__SAPPER__;let X,Y,z,F=!1,Q=[],Z="{}";const ee={page:_({}),preloading:_(null),session:_(W&&W.session)};let te,se;ee.session.subscribe(async e=>{if(te=e,!F)return;se=!0;const t=ue(new URL(location.href)),s=Y={},{redirect:r,props:n,branch:a}=await he(t);s===Y&&await me(r,a,n,t.page)});let re,ne=null;let ae,oe=1;const le="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},ce={};function ie(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function ue(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(W.baseUrl))return null;let t=e.pathname.slice(W.baseUrl.length);if(""===t&&(t="/"),!T.some(e=>e.test(t)))for(let s=0;s<M.length;s+=1){const r=M[s],n=r.pattern.exec(t);if(n){const s=ie(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},l={path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:l}}}}function pe(){return{x:pageXOffset,y:pageYOffset}}async function fe(e,t,s,r){if(t)ae=t;else{const e=pe();ce[ae]=e,t=ae=++oe,ce[ae]=s?e:{x:0,y:0}}ae=t,X&&ee.preloading.set(!0);const n=ne&&ne.href===e.href?ne.promise:he(e);ne=null;const a=Y={},{redirect:o,props:l,branch:c}=await n;if(a===Y&&(await me(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=ce[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}ce[ae]=e,e&&scrollTo(e.x,e.y)}}async function me(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=ue(new URL(e,document.baseURI));return s?(le[t.replaceState?"replaceState":"pushState"]({id:ae},"",e),fe(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(ee.page.set(r),ee.preloading.set(!1),X)X.$set(s);else{s.stores={page:{subscribe:ee.page.subscribe},preloading:{subscribe:ee.preloading.subscribe},session:ee.session},s.level0={props:await z};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)de(e.nextSibling);de(e),de(t)}X=new K({target:re,props:s,hydrate:!0})}Q=t,Z=JSON.stringify(r.query),F=!0,se=!1}async function he(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;z||(z=W.preloaded[0]||R.call(o,{path:s.path,query:s.query,params:{}},te));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=r[l];if(function(e,t,s,r){if(r!==Z)return!0;const n=Q[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,p,i,n)&&(u=!0),a.segments[c]=r[l+1],!t)return{segment:p};const f=c++;if(!se&&!u&&Q[l]&&Q[l].part===t.i)return Q[l];u=!1;const{default:m,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map(ge);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(G[t.i]);let g;return g=F||!W.preloaded[l+1]?h?await h.call(o,{path:s.path,query:s.query,params:t.params?t.params(e.match):{}},te):{}:W.preloaded[l+1],a[`level${f}`]={component:m,props:g,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function ge(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function de(e){e.parentNode.removeChild(e)}function ve(e){const t=ue(new URL(e,document.baseURI));if(t)return ne&&e===ne.href||function(e,t){ne={href:e,promise:t}}(e,he(t)),ne.promise}let $e;function be(e){clearTimeout($e),$e=setTimeout(()=>{ye(e)},20)}function ye(e){const t=Ee(e.target);t&&"prefetch"===t.rel&&ve(t.href)}function we(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ee(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=ue(n);if(a){fe(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),le.pushState({id:ae},"",n.href)}}function Ee(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Se(e){if(ce[ae]=pe(),e.state){const t=ue(new URL(location.href));t?fe(t,e.state.id):location.href=location.href}else(function(e){ae=e})(oe=oe+1),le.replaceState({id:ae},"",location.href)}!function(e){var t;"scrollRestoration"in le&&(le.scrollRestoration="manual"),t=e.target,re=t,addEventListener("click",we),addEventListener("popstate",Se),addEventListener("touchstart",ye),addEventListener("mousemove",be),Promise.resolve().then(()=>{const{hash:e,href:t}=location;le.replaceState({id:oe},"",t);const s=new URL(location.href);if(W.error)return function(e){const{pathname:t,search:s}=location,{session:r,preloaded:n,status:a,error:o}=W;z||(z=n&&n[0]),me(null,[],{error:o,status:a,session:r,level0:{props:z},level1:{props:{status:a,error:o},component:I},segments:n},{path:t,query:ie(s),params:{}})}();const r=ue(s);return r?fe(r,oe,!0,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.7bfa0df8.js.map
