import{_ as t,s as e,n as r,a as n,b as a,c as o,d as s,i,e as c,S as u,f as l,t as f,g as h,h as p,j as v,k as m,l as d,m as g,o as y,p as $,q as w,r as b,u as x,v as E,w as L,x as k,y as _,z as S,A as N,B as P,C as j}from"./chunk.d03e42cd.js";function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,a=!1,o=void 0;try{for(var s,i=t[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R,O=(function(e){var r=function(e){var r,n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),s=new N(n||[]);return o._invoke=function(t,e,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var i=k(s,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,s),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",m={};function d(){}function g(){}function y(){}var $={};$[s]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==n&&a.call(b,s)&&($=b);var x=y.prototype=d.prototype=Object.create($);function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(e){var r;this._invoke=function(n,o){function s(){return new Promise(function(r,s){!function r(n,o,s,i){var c=l(e[n],e,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===t(f)&&a.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,s,i)},function(t){r("throw",t,s,i)}):Promise.resolve(f).then(function(t){u.value=t,s(u)},function(t){return r("throw",t,s,i)})}i(c.arg)}(n,o,r,s)})}return r=r?r.then(s,s):s()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:r,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,y[c]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[i]=function(){return this},e.AsyncIterator=L,e.async=function(t,r,n,a){var o=new L(u(t,r,n,a));return e.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(x),x[c]="Generator",x[s]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return i.type="throw",i.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],i=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var c=a.call(s,"catchLoc"),u=a.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}(R={exports:{}},R.exports),R.exports);function C(t,e,r,n,a,o,s){try{var i=t[o](s),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function q(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function s(t){C(o,n,a,s,i,"next",t)}function i(t){C(o,n,a,s,i,"throw",t)}s(void 0)})}}function I(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,o=[];function s(r){if(e(t,r)){if(t=r,!n)return;o.forEach(function(t){return t[1]()}),o.forEach(function(e){return e[0](t)})}}return{set:s,update:function(e){s(e(t))},subscribe:function(e){var i=[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:r];return o.push(i),1===o.length&&(n=a(s)||r),e(t),function(){var t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&n()}}}}var U={},G=function(){return{}};function T(t){var e,n,a,o,s,i,c,u,$,w,b,x,E,L,k,_,S,N,P,j,A;return{c:function(){e=l("nav"),n=l("ul"),a=l("li"),o=l("a"),s=f("/home"),c=h(),u=l("li"),$=l("a"),w=f("/jams"),x=h(),E=l("li"),L=l("a"),k=f("/screenplay"),S=h(),N=l("li"),P=l("a"),j=f("/visuals"),this.h()},l:function(t){e=p(t,"NAV",{class:!0},!1);var r=v(e);n=p(r,"UL",{class:!0},!1);var i=v(n);a=p(i,"LI",{class:!0},!1);var l=v(a);o=p(l,"A",{class:!0,href:!0},!1);var f=v(o);s=m(f,"/home"),f.forEach(d),l.forEach(d),c=m(i,"\n\t\t"),u=p(i,"LI",{class:!0},!1);var h=v(u);$=p(h,"A",{rel:!0,class:!0,href:!0},!1);var g=v($);w=m(g,"/jams"),g.forEach(d),h.forEach(d),x=m(i,"\n\t\t"),E=p(i,"LI",{class:!0},!1);var y=v(E);L=p(y,"A",{rel:!0,class:!0,href:!0},!1);var b=v(L);k=m(b,"/screenplay"),b.forEach(d),y.forEach(d),S=m(i,"\n\t\t"),N=p(i,"LI",{class:!0},!1);var _=v(N);P=p(_,"A",{class:!0,href:!0},!1);var A=v(P);j=m(A,"/visuals"),A.forEach(d),_.forEach(d),i.forEach(d),r.forEach(d),this.h()},h:function(){o.className=i=(void 0===t.segment?"selected":"")+" svelte-1dka6hn",o.href=".",a.className="svelte-1dka6hn",$.rel="prefetch",$.className=b=("jams"===t.segment?"selected":"")+" svelte-1dka6hn",$.href="jams",u.className="svelte-1dka6hn",L.rel="prefetch",L.className=_=("screenplay"===t.segment?"selected":"")+" svelte-1dka6hn",L.href="screenplay",E.className="svelte-1dka6hn",P.className=A=("visuals"===t.segment?"selected":"")+" svelte-1dka6hn",P.href="visuals",N.className="svelte-1dka6hn",n.className="svelte-1dka6hn",e.className="svelte-1dka6hn"},m:function(t,r){g(t,e,r),y(e,n),y(n,a),y(a,o),y(o,s),y(n,c),y(n,u),y(u,$),y($,w),y(n,x),y(n,E),y(E,L),y(L,k),y(n,S),y(n,N),y(N,P),y(P,j)},p:function(t,e){t.segment&&i!==(i=(void 0===e.segment?"selected":"")+" svelte-1dka6hn")&&(o.className=i),t.segment&&b!==(b=("jams"===e.segment?"selected":"")+" svelte-1dka6hn")&&($.className=b),t.segment&&_!==(_=("screenplay"===e.segment?"selected":"")+" svelte-1dka6hn")&&(L.className=_),t.segment&&A!==(A=("visuals"===e.segment?"selected":"")+" svelte-1dka6hn")&&(P.className=A)},i:r,o:r,d:function(t){t&&d(e)}}}function D(t,e,r){var n=e.segment;return t.$set=function(t){"segment"in t&&r("segment",n=t.segment)},{segment:n}}var F=function(t){function r(t){var n;return a(this,r),n=o(this,s(r).call(this)),i(c(n),t,D,T,e,["segment"]),n}return n(r,u),r}();function H(t){var e,r,n,a=new F({props:{segment:t.segment}}),o=t.$$slots.default,s=$(o,t,null);return{c:function(){a.$$.fragment.c(),e=h(),r=l("main"),s&&s.c(),this.h()},l:function(t){a.$$.fragment.l(t),e=m(t,"\n\n"),r=p(t,"MAIN",{class:!0},!1);var n=v(r);s&&s.l(n),n.forEach(d),this.h()},h:function(){r.className="svelte-1uhnsl8"},m:function(t,o){w(a,t,o),g(t,e,o),g(t,r,o),s&&s.m(r,null),n=!0},p:function(t,e){var r={};t.segment&&(r.segment=e.segment),a.$set(r),s&&s.p&&t.$$scope&&s.p(b(o,e,t,null),x(o,e,null))},i:function(t){n||(a.$$.fragment.i(t),s&&s.i&&s.i(t),n=!0)},o:function(t){a.$$.fragment.o(t),s&&s.o&&s.o(t),n=!1},d:function(t){a.$destroy(t),t&&(d(e),d(r)),s&&s.d(t)}}}function B(t,e,r){var n=e.segment,a=e.$$slots,o=void 0===a?{}:a,s=e.$$scope;return t.$set=function(t){"segment"in t&&r("segment",n=t.segment),"$$scope"in t&&r("$$scope",s=t.$$scope)},{segment:n,$$slots:o,$$scope:s}}var J=function(t){function r(t){var n;return a(this,r),n=o(this,s(r).call(this)),i(c(n),t,B,H,e,["segment"]),n}return n(r,u),r}();function V(t){var e,r,n=t.error.stack;return{c:function(){e=l("pre"),r=f(n)},l:function(t){e=p(t,"PRE",{},!1);var a=v(e);r=m(a,n),a.forEach(d)},m:function(t,n){g(t,e,n),y(e,r)},p:function(t,e){t.error&&n!==(n=e.error.stack)&&E(r,n)},d:function(t){t&&d(e)}}}function K(t){var e,n,a,o,s,i,c,u,$,w=t.error.message;document.title=e=t.status;var b=t.dev&&t.error.stack&&V(t);return{c:function(){n=h(),a=l("h1"),o=f(t.status),s=h(),i=l("p"),c=f(w),u=h(),b&&b.c(),$=L(),this.h()},l:function(e){n=m(e,"\n\n"),a=p(e,"H1",{class:!0},!1);var r=v(a);o=m(r,t.status),r.forEach(d),s=m(e,"\n\n"),i=p(e,"P",{class:!0},!1);var l=v(i);c=m(l,w),l.forEach(d),u=m(e,"\n\n"),b&&b.l(e),$=L(),this.h()},h:function(){a.className="svelte-8od9u6",i.className="svelte-8od9u6"},m:function(t,e){g(t,n,e),g(t,a,e),y(a,o),g(t,s,e),g(t,i,e),y(i,c),g(t,u,e),b&&b.m(t,e),g(t,$,e)},p:function(t,r){t.status&&e!==(e=r.status)&&(document.title=e),t.status&&E(o,r.status),t.error&&w!==(w=r.error.message)&&E(c,w),r.dev&&r.error.stack?b?b.p(t,r):((b=V(r)).c(),b.m($.parentNode,$)):b&&(b.d(1),b=null)},i:r,o:r,d:function(t){t&&(d(n),d(a),d(s),d(i),d(u)),b&&b.d(t),t&&d($)}}}function Y(t,e,r){var n=e.status,a=e.error;return t.$set=function(t){"status"in t&&r("status",n=t.status),"error"in t&&r("error",a=t.error)},{status:n,error:a,dev:!1}}var z=function(t){function r(t){var n;return a(this,r),n=o(this,s(r).call(this)),i(c(n),t,Y,K,e,["status","error"]),n}return n(r,u),r}();function M(t){var e,r,n=[t.level1.props],a=t.level1.component;function o(t){for(var e={},r=0;r<n.length;r+=1)e=k(e,n[r]);return{props:e}}if(a)var s=new a(o());return{c:function(){s&&s.$$.fragment.c(),e=L()},l:function(t){s&&s.$$.fragment.l(t),e=L()},m:function(t,n){s&&w(s,t,n),g(t,e,n),r=!0},p:function(t,r){var i=t.level1?_(n,[r.level1.props]):{};if(a!==(a=r.level1.component)){if(s){j();var c=s;N(function(){c.$destroy()}),c.$$.fragment.o(1),P()}a?((s=new a(o())).$$.fragment.c(),s.$$.fragment.i(1),w(s,e.parentNode,e)):s=null}else a&&s.$set(i)},i:function(t){r||(s&&s.$$.fragment.i(t),r=!0)},o:function(t){s&&s.$$.fragment.o(t),r=!1},d:function(t){t&&d(e),s&&s.$destroy(t)}}}function W(t){var e,r=new z({props:{error:t.error,status:t.status}});return{c:function(){r.$$.fragment.c()},l:function(t){r.$$.fragment.l(t)},m:function(t,n){w(r,t,n),e=!0},p:function(t,e){var n={};t.error&&(n.error=e.error),t.status&&(n.status=e.status),r.$set(n)},i:function(t){e||(r.$$.fragment.i(t),e=!0)},o:function(t){r.$$.fragment.o(t),e=!1},d:function(t){r.$destroy(t)}}}function X(t){var e,r,n,a,o=[W,M],s=[];function i(t){return t.error?0:1}return e=i(t),r=s[e]=o[e](t),{c:function(){r.c(),n=L()},l:function(t){r.l(t),n=L()},m:function(t,r){s[e].m(t,r),g(t,n,r),a=!0},p:function(t,a){var c=e;(e=i(a))===c?s[e].p(t,a):(j(),N(function(){s[c].d(1),s[c]=null}),r.o(1),P(),(r=s[e])||(r=s[e]=o[e](a)).c(),r.i(1),r.m(n.parentNode,n))},i:function(t){a||(r&&r.i(),a=!0)},o:function(t){r&&r.o(),a=!1},d:function(t){s[e].d(t),t&&d(n)}}}function Q(t){for(var e,r=[{segment:t.segments[0]},t.level0.props],n={$$slots:{default:[X]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)n=k(n,r[a]);var o=new J({props:n});return{c:function(){o.$$.fragment.c()},l:function(t){o.$$.fragment.l(t)},m:function(t,r){w(o,t,r),e=!0},p:function(t,e){var n=t.segments||t.level0?_(r,[t.segments&&{segment:e.segments[0]},t.level0&&e.level0.props]):{};(t.$$scope||t.error||t.status||t.level1)&&(n.$$scope={changed:t,ctx:e}),o.$set(n)},i:function(t){e||(o.$$.fragment.i(t),e=!0)},o:function(t){o.$$.fragment.o(t),e=!1},d:function(t){o.$destroy(t)}}}function Z(t,e,r){var n=e.stores,a=e.error,o=e.status,s=e.segments,i=e.level0,c=e.level1,u=void 0===c?null:c;return S(U,n),t.$set=function(t){"stores"in t&&r("stores",n=t.stores),"error"in t&&r("error",a=t.error),"status"in t&&r("status",o=t.status),"segments"in t&&r("segments",s=t.segments),"level0"in t&&r("level0",i=t.level0),"level1"in t&&r("level1",u=t.level1)},{stores:n,error:a,status:o,segments:s,level0:i,level1:u}}var tt=function(t){function r(t){var n;return a(this,r),n=o(this,s(r).call(this)),i(c(n),t,Z,Q,e,["stores","error","status","segments","level0","level1"]),n}return n(r,u),r}(),et=[],rt=[{js:function(){return import("./index.c1a8ed98.js")},css:["index.c1a8ed98.css"]},{js:function(){return import("./screenplay.b20b98e4.js")},css:["screenplay.b20b98e4.css"]},{js:function(){return import("./visuals.1054ef9d.js")},css:["visuals.1054ef9d.css"]},{js:function(){return import("./jams.305d88c2.js")},css:["jams.305d88c2.css"]}],nt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/screenplay\/?$/,parts:[{i:1}]},{pattern:/^\/visuals\/?$/,parts:[{i:2}]},{pattern:/^\/jams\/?$/,parts:[{i:3}]}];function at(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=Et(new URL(t,document.baseURI));return r?(wt[e.replaceState?"replaceState":"pushState"]({id:gt},"",t),kt(r,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var ot,st,it,ct,ut,lt="undefined"!=typeof __SAPPER__&&__SAPPER__,ft=!1,ht=[],pt="{}",vt={page:I({}),preloading:I(null),session:I(lt&&lt.session)};vt.session.subscribe(function(){var t=q(O.mark(function t(e){var r,n,a,o,s,i;return O.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(ct=e,ft){t.next=3;break}return t.abrupt("return");case 3:return ut=!0,r=Et(new URL(location.href)),n=st={},t.next=8,jt(r);case 8:if(a=t.sent,o=a.redirect,s=a.props,i=a.branch,n===st){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,St(o,i,s,r.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var mt,dt=null;var gt,yt=1;var $t,wt="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},bt={};function xt(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var n=A(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=n[1],o=n[2],s=void 0===o?"":o;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(s):r[a]=s}),r}function Et(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(lt.baseUrl))return null;var e=t.pathname.slice(lt.baseUrl.length);if(""===e&&(e="/"),!et.some(function(t){return t.test(e)}))for(var r=0;r<nt.length;r+=1){var n=nt[r],a=n.pattern.exec(e);if(a){var o=xt(t.search),s=n.parts[n.parts.length-1],i=s.params?s.params(a):{},c={path:e,query:o,params:i};return{href:t.href,route:n,match:a,page:c}}}}function Lt(){return{x:pageXOffset,y:pageYOffset}}function kt(t,e,r,n){return _t.apply(this,arguments)}function _t(){return(_t=q(O.mark(function t(e,r,n,a){var o,s,i,c,u,l,f,h,p;return O.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r?gt=r:(o=Lt(),bt[gt]=o,r=gt=++yt,bt[gt]=n?o:{x:0,y:0}),gt=r,ot&&vt.preloading.set(!0),s=dt&&dt.href===e.href?dt.promise:jt(e),dt=null,i=st={},t.next=8,s;case 8:if(c=t.sent,u=c.redirect,l=c.props,f=c.branch,i===st){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,St(u,f,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=bt[r],a&&(p=document.getElementById(a.slice(1)))&&(h={x:0,y:p.getBoundingClientRect().top}),bt[gt]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function St(t,e,r,n){return Nt.apply(this,arguments)}function Nt(){return(Nt=q(O.mark(function t(e,r,n,a){var o,s;return O.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",at(e.location,{replaceState:!0}));case 2:if(vt.page.set(a),vt.preloading.set(!1),!ot){t.next=8;break}ot.$set(n),t.next=17;break;case 8:return n.stores={page:{subscribe:vt.page.subscribe},preloading:{subscribe:vt.preloading.subscribe},session:vt.session},t.next=11,it;case 11:if(t.t0=t.sent,n.level0={props:t.t0},o=document.querySelector("#sapper-head-start"),s=document.querySelector("#sapper-head-end"),o&&s){for(;o.nextSibling!==s;)Ct(o.nextSibling);Ct(o),Ct(s)}ot=new tt({target:mt,props:n,hydrate:!0});case 17:ht=r,pt=JSON.stringify(a.query),ft=!0,ut=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Pt(t,e,r,n){if(n!==pt)return!0;var a=ht[t];return!!a&&(e!==a.segment||(!(!a.match||JSON.stringify(a.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function jt(t){return At.apply(this,arguments)}function At(){return(At=q(O.mark(function t(e){var r,n,a,o,s,i,c,u,l,f,h;return O.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,a=n.path.split("/").filter(Boolean),o=null,s={error:null,status:200,segments:[a[0]]},i={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:function(t,e){s.error="string"==typeof e?new Error(e):e,s.status=t}},it||(it=lt.preloaded[0]||G.call(i,{path:n.path,query:n.query,params:{}},ct)),u=1,t.prev=7,l=JSON.stringify(n.query),f=r.pattern.exec(n.path),h=!1,t.next=13,Promise.all(r.parts.map(function(){var t=q(O.mark(function t(r,o){var c,p,v,m,d,g;return O.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a[o],Pt(o,c,f,l)&&(h=!0),s.segments[u]=a[o+1],r){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(p=u++,ut||h||!ht[o]||ht[o].part!==r.i){t.next=8;break}return t.abrupt("return",ht[o]);case 8:return h=!1,t.next=11,Ot(rt[r.i]);case 11:if(v=t.sent,m=v.default,d=v.preload,!ft&&lt.preloaded[o+1]){t.next=25;break}if(!d){t.next=21;break}return t.next=18,d.call(i,{path:n.path,query:n.query,params:r.params?r.params(e.match):{}},ct);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=lt.preloaded[o+1];case 26:return t.abrupt("return",s["level".concat(p)]={component:m,props:g,segment:c,match:f,part:r.i});case 27:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()));case 13:c=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),s.error=t.t0,s.status=500,c=[];case 21:return t.abrupt("return",{redirect:o,props:s,branch:c});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function Rt(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)})}function Ot(t){var e="string"==typeof t.css?[]:t.css.map(Rt);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function Ct(t){t.parentNode.removeChild(t)}function qt(t){var e=Et(new URL(t,document.baseURI));if(e)return dt&&t===dt.href||function(t,e){dt={href:t,promise:e}}(t,jt(e)),dt.promise}function It(t){clearTimeout($t),$t=setTimeout(function(){Ut(t)},20)}function Ut(t){var e=Tt(t.target);e&&"prefetch"===e.rel&&qt(e.href)}function Gt(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Tt(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,a=String(n?r.href.baseVal:r.href);if(a!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&(n?!r.target.baseVal:!r.target)){var o=new URL(a);if(o.pathname!==location.pathname||o.search!==location.search){var s=Et(o);if(s)kt(s,null,r.hasAttribute("sapper-noscroll"),o.hash),e.preventDefault(),wt.pushState({id:gt},"",o.href)}}}else location.hash||e.preventDefault()}}}function Tt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Dt(t){if(bt[gt]=Lt(),t.state){var e=Et(new URL(location.href));e?kt(e,t.state.id):location.href=location.href}else(function(t){gt=t})(yt=yt+1),wt.replaceState({id:gt},"",location.href)}!function(t){var e;"scrollRestoration"in wt&&(wt.scrollRestoration="manual"),e=t.target,mt=e,addEventListener("click",Gt),addEventListener("popstate",Dt),addEventListener("touchstart",Ut),addEventListener("mousemove",It),Promise.resolve().then(function(){var t=location,e=t.hash,r=t.href;wt.replaceState({id:yt},"",r);var n,a,o,s,i,c,u,l=new URL(location.href);if(lt.error)return n=location,a=n.pathname,o=n.search,s=lt.session,i=lt.preloaded,c=lt.status,u=lt.error,it||(it=i&&i[0]),void St(null,[],{error:u,status:c,session:s,level0:{props:it},level1:{props:{status:c,error:u},component:z},segments:i},{path:a,query:xt(o),params:{}});var f=Et(l);return f?kt(f,yt,!0,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.d00cc279.js.map