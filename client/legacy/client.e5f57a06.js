import{_ as e,s as t,n as r,a as n,b as a,c as s,d as o,i,e as c,S as u,f as l,t as f,g as h,h as p,j as v,k as m,l as d,m as g,o as y,p as b,q as w,r as $,u as E,v as x,w as L,x as S,y as N,z as _,A as k,B as P,C as j}from"./chunk.755b97f7.js";function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R,O=(function(t){var r=function(t){var r,n=Object.prototype,a=n.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function u(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,s=Object.create(a.prototype),o=new k(n||[]);return s._invoke=function(e,t,r){var n=f;return function(a,s){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw s;return j()}for(r.method=a,r.arg=s;;){var o=r.delegate;if(o){var i=S(o,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(e,r,o),s}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",m={};function d(){}function g(){}function y(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,$=w&&w(w(P([])));$&&$!==n&&a.call($,o)&&(b=$);var E=y.prototype=d.prototype=Object.create(b);function x(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function L(t){var r;this._invoke=function(n,s){function o(){return new Promise(function(r,o){!function r(n,s,o,i){var c=l(t[n],t,s);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===e(f)&&a.call(f,"__await")?Promise.resolve(f.__await).then(function(e){r("next",e,o,i)},function(e){r("throw",e,o,i)}):Promise.resolve(f).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,i)})}i(c.arg)}(n,s,r,o)})}return r=r?r.then(o,o):o()}}function S(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,S(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var s=a.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,m):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,s=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return s.next=s}}return{next:j}}function j(){return{value:r,done:!0}}return g.prototype=E.constructor=y,y.constructor=g,y[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},x(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,a){var s=new L(u(e,r,n,a));return t.isGeneratorFunction(r)?s:s.next().then(function(e){return e.done?e.value:s.next()})},x(E),E[c]="Generator",E[o]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),m}},t}(t.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}}(R={exports:{}},R.exports),R.exports);function I(e,t,r,n,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function C(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var s=e.apply(t,r);function o(e){I(s,n,a,o,i,"next",e)}function i(e){I(s,n,a,o,i,"throw",e)}o(void 0)})}}function q(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,s=[];function o(r){if(t(e,r)){if(e=r,!n)return;s.forEach(function(e){return e[1]()}),s.forEach(function(t){return t[0](e)})}}return{set:o,update:function(t){o(t(e))},subscribe:function(t){var i=[t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:r];return s.push(i),1===s.length&&(n=a(o)||r),t(e),function(){var e=s.indexOf(i);-1!==e&&s.splice(e,1),0===s.length&&n()}}}}var G={},U=function(){return{}};function T(e){var t,n,a,s,o,i,c,u,b,w,$,E,x,L,S,N,_,k,P,j,A,R,O,I,C,q,G,U,T,D,F,H,M,B,J,V,K,X;return{c:function(){t=l("nav"),n=l("ul"),a=l("li"),s=l("a"),o=f("/home"),c=h(),u=l("li"),b=l("a"),w=f("/projects"),E=h(),x=l("li"),L=l("a"),S=f("/screenplay"),_=h(),k=l("li"),P=l("a"),j=f("/visuals"),R=h(),O=l("li"),I=l("a"),C=f("/shop"),G=h(),U=l("li"),T=l("a"),D=l("img"),F=h(),H=l("li"),M=l("a"),B=l("img"),J=h(),V=l("li"),K=l("a"),X=l("img"),this.h()},l:function(e){t=p(e,"NAV",{class:!0},!1);var r=v(t);n=p(r,"UL",{class:!0},!1);var i=v(n);a=p(i,"LI",{class:!0},!1);var l=v(a);s=p(l,"A",{class:!0,href:!0},!1);var f=v(s);o=m(f,"/home"),f.forEach(d),l.forEach(d),c=m(i,"\n\t\t"),u=p(i,"LI",{class:!0},!1);var h=v(u);b=p(h,"A",{rel:!0,class:!0,href:!0},!1);var g=v(b);w=m(g,"/projects"),g.forEach(d),h.forEach(d),E=m(i,"\n\t\t"),x=p(i,"LI",{class:!0},!1);var y=v(x);L=p(y,"A",{rel:!0,class:!0,href:!0},!1);var $=v(L);S=m($,"/screenplay"),$.forEach(d),y.forEach(d),_=m(i,"\n\t\t"),k=p(i,"LI",{class:!0},!1);var N=v(k);P=p(N,"A",{class:!0,href:!0},!1);var A=v(P);j=m(A,"/visuals"),A.forEach(d),N.forEach(d),R=m(i,"\n\t\t"),O=p(i,"LI",{class:!0},!1);var q=v(O);I=p(q,"A",{class:!0,href:!0},!1);var Y=v(I);C=m(Y,"/shop"),Y.forEach(d),q.forEach(d),G=m(i,"\n\n\t\t\n\t\t"),U=p(i,"LI",{class:!0},!1);var z=v(U);T=p(z,"A",{href:!0,class:!0},!1);var Q=v(T);D=p(Q,"IMG",{src:!0,alt:!0,class:!0},!1),v(D).forEach(d),Q.forEach(d),z.forEach(d),F=m(i,"\n\t\t\n\t\t"),H=p(i,"LI",{class:!0},!1);var W=v(H);M=p(W,"A",{href:!0,class:!0},!1);var Z=v(M);B=p(Z,"IMG",{src:!0,alt:!0,class:!0},!1),v(B).forEach(d),Z.forEach(d),W.forEach(d),J=m(i,"\n\t\t"),V=p(i,"LI",{class:!0},!1);var ee=v(V);K=p(ee,"A",{href:!0,class:!0},!1);var te=v(K);X=p(te,"IMG",{src:!0,alt:!0,class:!0},!1),v(X).forEach(d),te.forEach(d),ee.forEach(d),i.forEach(d),r.forEach(d),this.h()},h:function(){s.className=i=(void 0===e.segment?"selected":"")+" svelte-1b12r61",s.href=".",a.className="svelte-1b12r61",b.rel="prefetch",b.className=$=("jams"===e.segment?"selected":"")+" svelte-1b12r61",b.href="jams",u.className="svelte-1b12r61",L.rel="prefetch",L.className=N=("screenplay"===e.segment?"selected":"")+" svelte-1b12r61",L.href="screenplay",x.className="svelte-1b12r61",P.className=A=("visuals"===e.segment?"selected":"")+" svelte-1b12r61",P.href="visuals",k.className="svelte-1b12r61",I.className=q=("shop"===e.segment?"selected":"")+" svelte-1b12r61",I.href="https://www.spacestationrecords.com/",O.className="svelte-1b12r61",D.src="soundcloud.png",D.alt="SoundCloud",D.className="icon svelte-1b12r61",T.href="https://soundcloud.com/reedinbooks/sets/botanical-side-a",T.className="svelte-1b12r61",U.className="right svelte-1b12r61",B.src="spotify.png",B.alt="Spotify",B.className="icon svelte-1b12r61",M.href="https://open.spotify.com/album/07Dpa9PyululGEdXbPTPij?si=nI0DXluqSEyx-Hih9zLGEQ",M.className="svelte-1b12r61",H.className="right svelte-1b12r61",X.src="apple.png",X.alt="Apple Music",X.className="icon svelte-1b12r61",K.href="https://music.apple.com/us/album/botanical-side-a/1480486916",K.className="svelte-1b12r61",V.className="right svelte-1b12r61",n.className="svelte-1b12r61",t.className="bg svelte-1b12r61"},m:function(e,r){g(e,t,r),y(t,n),y(n,a),y(a,s),y(s,o),y(n,c),y(n,u),y(u,b),y(b,w),y(n,E),y(n,x),y(x,L),y(L,S),y(n,_),y(n,k),y(k,P),y(P,j),y(n,R),y(n,O),y(O,I),y(I,C),y(n,G),y(n,U),y(U,T),y(T,D),y(n,F),y(n,H),y(H,M),y(M,B),y(n,J),y(n,V),y(V,K),y(K,X)},p:function(e,t){e.segment&&i!==(i=(void 0===t.segment?"selected":"")+" svelte-1b12r61")&&(s.className=i),e.segment&&$!==($=("jams"===t.segment?"selected":"")+" svelte-1b12r61")&&(b.className=$),e.segment&&N!==(N=("screenplay"===t.segment?"selected":"")+" svelte-1b12r61")&&(L.className=N),e.segment&&A!==(A=("visuals"===t.segment?"selected":"")+" svelte-1b12r61")&&(P.className=A),e.segment&&q!==(q=("shop"===t.segment?"selected":"")+" svelte-1b12r61")&&(I.className=q)},i:r,o:r,d:function(e){e&&d(t)}}}function D(e,t,r){var n=t.segment;return e.$set=function(e){"segment"in e&&r("segment",n=e.segment)},{segment:n}}var F=function(e){function r(e){var n;return a(this,r),n=s(this,o(r).call(this)),i(c(n),e,D,T,t,["segment"]),n}return n(r,u),r}();function H(e){var t,r,n,a=new F({props:{segment:e.segment}}),s=e.$$slots.default,o=b(s,e,null);return{c:function(){a.$$.fragment.c(),t=h(),r=l("main"),o&&o.c(),this.h()},l:function(e){a.$$.fragment.l(e),t=m(e,"\n\n"),r=p(e,"MAIN",{class:!0},!1);var n=v(r);o&&o.l(n),n.forEach(d),this.h()},h:function(){r.className="svelte-1n1yrnv"},m:function(e,s){w(a,e,s),g(e,t,s),g(e,r,s),o&&o.m(r,null),n=!0},p:function(e,t){var r={};e.segment&&(r.segment=t.segment),a.$set(r),o&&o.p&&e.$$scope&&o.p($(s,t,e,null),E(s,t,null))},i:function(e){n||(a.$$.fragment.i(e),o&&o.i&&o.i(e),n=!0)},o:function(e){a.$$.fragment.o(e),o&&o.o&&o.o(e),n=!1},d:function(e){a.$destroy(e),e&&(d(t),d(r)),o&&o.d(e)}}}function M(e,t,r){var n=t.segment,a=t.$$slots,s=void 0===a?{}:a,o=t.$$scope;return e.$set=function(e){"segment"in e&&r("segment",n=e.segment),"$$scope"in e&&r("$$scope",o=e.$$scope)},{segment:n,$$slots:s,$$scope:o}}var B=function(e){function r(e){var n;return a(this,r),n=s(this,o(r).call(this)),i(c(n),e,M,H,t,["segment"]),n}return n(r,u),r}();function J(e){var t,r,n=e.error.stack;return{c:function(){t=l("pre"),r=f(n)},l:function(e){t=p(e,"PRE",{},!1);var a=v(t);r=m(a,n),a.forEach(d)},m:function(e,n){g(e,t,n),y(t,r)},p:function(e,t){e.error&&n!==(n=t.error.stack)&&x(r,n)},d:function(e){e&&d(t)}}}function V(e){var t,n,a,s,o,i,c,u,b,w=e.error.message;document.title=t=e.status;var $=e.dev&&e.error.stack&&J(e);return{c:function(){n=h(),a=l("h1"),s=f(e.status),o=h(),i=l("p"),c=f(w),u=h(),$&&$.c(),b=L(),this.h()},l:function(t){n=m(t,"\n\n"),a=p(t,"H1",{class:!0},!1);var r=v(a);s=m(r,e.status),r.forEach(d),o=m(t,"\n\n"),i=p(t,"P",{class:!0},!1);var l=v(i);c=m(l,w),l.forEach(d),u=m(t,"\n\n"),$&&$.l(t),b=L(),this.h()},h:function(){a.className="svelte-8od9u6",i.className="svelte-8od9u6"},m:function(e,t){g(e,n,t),g(e,a,t),y(a,s),g(e,o,t),g(e,i,t),y(i,c),g(e,u,t),$&&$.m(e,t),g(e,b,t)},p:function(e,r){e.status&&t!==(t=r.status)&&(document.title=t),e.status&&x(s,r.status),e.error&&w!==(w=r.error.message)&&x(c,w),r.dev&&r.error.stack?$?$.p(e,r):(($=J(r)).c(),$.m(b.parentNode,b)):$&&($.d(1),$=null)},i:r,o:r,d:function(e){e&&(d(n),d(a),d(o),d(i),d(u)),$&&$.d(e),e&&d(b)}}}function K(e,t,r){var n=t.status,a=t.error;return e.$set=function(e){"status"in e&&r("status",n=e.status),"error"in e&&r("error",a=e.error)},{status:n,error:a,dev:!1}}var X=function(e){function r(e){var n;return a(this,r),n=s(this,o(r).call(this)),i(c(n),e,K,V,t,["status","error"]),n}return n(r,u),r}();function Y(e){var t,r,n=[e.level1.props],a=e.level1.component;function s(e){for(var t={},r=0;r<n.length;r+=1)t=S(t,n[r]);return{props:t}}if(a)var o=new a(s());return{c:function(){o&&o.$$.fragment.c(),t=L()},l:function(e){o&&o.$$.fragment.l(e),t=L()},m:function(e,n){o&&w(o,e,n),g(e,t,n),r=!0},p:function(e,r){var i=e.level1?N(n,[r.level1.props]):{};if(a!==(a=r.level1.component)){if(o){j();var c=o;k(function(){c.$destroy()}),c.$$.fragment.o(1),P()}a?((o=new a(s())).$$.fragment.c(),o.$$.fragment.i(1),w(o,t.parentNode,t)):o=null}else a&&o.$set(i)},i:function(e){r||(o&&o.$$.fragment.i(e),r=!0)},o:function(e){o&&o.$$.fragment.o(e),r=!1},d:function(e){e&&d(t),o&&o.$destroy(e)}}}function z(e){var t,r=new X({props:{error:e.error,status:e.status}});return{c:function(){r.$$.fragment.c()},l:function(e){r.$$.fragment.l(e)},m:function(e,n){w(r,e,n),t=!0},p:function(e,t){var n={};e.error&&(n.error=t.error),e.status&&(n.status=t.status),r.$set(n)},i:function(e){t||(r.$$.fragment.i(e),t=!0)},o:function(e){r.$$.fragment.o(e),t=!1},d:function(e){r.$destroy(e)}}}function Q(e){var t,r,n,a,s=[z,Y],o=[];function i(e){return e.error?0:1}return t=i(e),r=o[t]=s[t](e),{c:function(){r.c(),n=L()},l:function(e){r.l(e),n=L()},m:function(e,r){o[t].m(e,r),g(e,n,r),a=!0},p:function(e,a){var c=t;(t=i(a))===c?o[t].p(e,a):(j(),k(function(){o[c].d(1),o[c]=null}),r.o(1),P(),(r=o[t])||(r=o[t]=s[t](a)).c(),r.i(1),r.m(n.parentNode,n))},i:function(e){a||(r&&r.i(),a=!0)},o:function(e){r&&r.o(),a=!1},d:function(e){o[t].d(e),e&&d(n)}}}function W(e){for(var t,r=[{segment:e.segments[0]},e.level0.props],n={$$slots:{default:[Q]},$$scope:{ctx:e}},a=0;a<r.length;a+=1)n=S(n,r[a]);var s=new B({props:n});return{c:function(){s.$$.fragment.c()},l:function(e){s.$$.fragment.l(e)},m:function(e,r){w(s,e,r),t=!0},p:function(e,t){var n=e.segments||e.level0?N(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i:function(e){t||(s.$$.fragment.i(e),t=!0)},o:function(e){s.$$.fragment.o(e),t=!1},d:function(e){s.$destroy(e)}}}function Z(e,t,r){var n=t.stores,a=t.error,s=t.status,o=t.segments,i=t.level0,c=t.level1,u=void 0===c?null:c;return _(G,n),e.$set=function(e){"stores"in e&&r("stores",n=e.stores),"error"in e&&r("error",a=e.error),"status"in e&&r("status",s=e.status),"segments"in e&&r("segments",o=e.segments),"level0"in e&&r("level0",i=e.level0),"level1"in e&&r("level1",u=e.level1)},{stores:n,error:a,status:s,segments:o,level0:i,level1:u}}var ee=function(e){function r(e){var n;return a(this,r),n=s(this,o(r).call(this)),i(c(n),e,Z,W,t,["stores","error","status","segments","level0","level1"]),n}return n(r,u),r}(),te=[],re=[{js:function(){return import("./index.67349c4e.js")},css:["index.67349c4e.css"]},{js:function(){return import("./screenplay.c98ba919.js")},css:["screenplay.c98ba919.css"]},{js:function(){return import("./visuals.b79d4c7e.js")},css:["visuals.b79d4c7e.css"]},{js:function(){return import("./jams.dbd78d05.js")},css:["jams.dbd78d05.css"]}],ne=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/screenplay\/?$/,parts:[{i:1}]},{pattern:/^\/visuals\/?$/,parts:[{i:2}]},{pattern:/^\/jams\/?$/,parts:[{i:3}]}];function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=xe(new URL(e,document.baseURI));return r?(we[t.replaceState?"replaceState":"pushState"]({id:ge},"",e),Se(r,null).then(function(){})):(location.href=e,new Promise(function(e){}))}var se,oe,ie,ce,ue,le="undefined"!=typeof __SAPPER__&&__SAPPER__,fe=!1,he=[],pe="{}",ve={page:q({}),preloading:q(null),session:q(le&&le.session)};ve.session.subscribe(function(){var e=C(O.mark(function e(t){var r,n,a,s,o,i;return O.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(ce=t,fe){e.next=3;break}return e.abrupt("return");case 3:return ue=!0,r=xe(new URL(location.href)),n=oe={},e.next=8,je(r);case 8:if(a=e.sent,s=a.redirect,o=a.props,i=a.branch,n===oe){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,_e(s,i,o,r.page);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var me,de=null;var ge,ye=1;var be,we="undefined"!=typeof history?history:{pushState:function(e,t,r){},replaceState:function(e,t,r){},scrollRestoration:""},$e={};function Ee(t){var r=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(function(t){var n=A(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," "))),3),a=n[1],s=n[2],o=void 0===s?"":s;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===e(r[a])?r[a].push(o):r[a]=o}),r}function xe(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(le.baseUrl))return null;var t=e.pathname.slice(le.baseUrl.length);if(""===t&&(t="/"),!te.some(function(e){return e.test(t)}))for(var r=0;r<ne.length;r+=1){var n=ne[r],a=n.pattern.exec(t);if(a){var s=Ee(e.search),o=n.parts[n.parts.length-1],i=o.params?o.params(a):{},c={path:t,query:s,params:i};return{href:e.href,route:n,match:a,page:c}}}}function Le(){return{x:pageXOffset,y:pageYOffset}}function Se(e,t,r,n){return Ne.apply(this,arguments)}function Ne(){return(Ne=C(O.mark(function e(t,r,n,a){var s,o,i,c,u,l,f,h,p;return O.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r?ge=r:(s=Le(),$e[ge]=s,r=ge=++ye,$e[ge]=n?s:{x:0,y:0}),ge=r,se&&ve.preloading.set(!0),o=de&&de.href===t.href?de.promise:je(t),de=null,i=oe={},e.next=8,o;case 8:if(c=e.sent,u=c.redirect,l=c.props,f=c.branch,i===oe){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,_e(u,f,l,t.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=$e[r],a&&(p=document.getElementById(a.slice(1)))&&(h={x:0,y:p.getBoundingClientRect().top}),$e[ge]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _e(e,t,r,n){return ke.apply(this,arguments)}function ke(){return(ke=C(O.mark(function e(t,r,n,a){var s,o;return O.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",ae(t.location,{replaceState:!0}));case 2:if(ve.page.set(a),ve.preloading.set(!1),!se){e.next=8;break}se.$set(n),e.next=17;break;case 8:return n.stores={page:{subscribe:ve.page.subscribe},preloading:{subscribe:ve.preloading.subscribe},session:ve.session},e.next=11,ie;case 11:if(e.t0=e.sent,n.level0={props:e.t0},s=document.querySelector("#sapper-head-start"),o=document.querySelector("#sapper-head-end"),s&&o){for(;s.nextSibling!==o;)Ie(s.nextSibling);Ie(s),Ie(o)}se=new ee({target:me,props:n,hydrate:!0});case 17:he=r,pe=JSON.stringify(a.query),fe=!0,ue=!1;case 21:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Pe(e,t,r,n){if(n!==pe)return!0;var a=he[e];return!!a&&(t!==a.segment||(!(!a.match||JSON.stringify(a.match.slice(1,e+2))===JSON.stringify(r.slice(1,e+2)))||void 0))}function je(e){return Ae.apply(this,arguments)}function Ae(){return(Ae=C(O.mark(function e(t){var r,n,a,s,o,i,c,u,l,f,h;return O.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,n=t.page,a=n.path.split("/").filter(Boolean),s=null,o={error:null,status:200,segments:[a[0]]},i={fetch:function(e){function t(t,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return fetch(e,t)}),redirect:function(e,t){if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:function(e,t){o.error="string"==typeof t?new Error(t):t,o.status=e}},ie||(ie=le.preloaded[0]||U.call(i,{path:n.path,query:n.query,params:{}},ce)),u=1,e.prev=7,l=JSON.stringify(n.query),f=r.pattern.exec(n.path),h=!1,e.next=13,Promise.all(r.parts.map(function(){var e=C(O.mark(function e(r,s){var c,p,v,m,d,g;return O.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a[s],Pe(s,c,f,l)&&(h=!0),o.segments[u]=a[s+1],r){e.next=5;break}return e.abrupt("return",{segment:c});case 5:if(p=u++,ue||h||!he[s]||he[s].part!==r.i){e.next=8;break}return e.abrupt("return",he[s]);case 8:return h=!1,e.next=11,Oe(re[r.i]);case 11:if(v=e.sent,m=v.default,d=v.preload,!fe&&le.preloaded[s+1]){e.next=25;break}if(!d){e.next=21;break}return e.next=18,d.call(i,{path:n.path,query:n.query,params:r.params?r.params(t.match):{}},ce);case 18:e.t0=e.sent,e.next=22;break;case 21:e.t0={};case 22:g=e.t0,e.next=26;break;case 25:g=le.preloaded[s+1];case 26:return e.abrupt("return",o["level".concat(p)]={component:m,props:g,segment:c,match:f,part:r.i});case 27:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()));case 13:c=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),o.error=e.t0,o.status=500,c=[];case 21:return e.abrupt("return",{redirect:s,props:o,branch:c});case 22:case"end":return e.stop()}},e,null,[[7,16]])}))).apply(this,arguments)}function Re(e){var t="client/".concat(e);if(!document.querySelector('link[href="'.concat(t,'"]')))return new Promise(function(e,r){var n=document.createElement("link");n.rel="stylesheet",n.href=t,n.onload=function(){return e()},n.onerror=r,document.head.appendChild(n)})}function Oe(e){var t="string"==typeof e.css?[]:e.css.map(Re);return t.unshift(e.js()),Promise.all(t).then(function(e){return e[0]})}function Ie(e){e.parentNode.removeChild(e)}function Ce(e){var t=xe(new URL(e,document.baseURI));if(t)return de&&e===de.href||function(e,t){de={href:e,promise:t}}(e,je(t)),de.promise}function qe(e){clearTimeout(be),be=setTimeout(function(){Ge(e)},20)}function Ge(e){var t=Te(e.target);t&&"prefetch"===t.rel&&Ce(t.href)}function Ue(t){if(1===function(e){return null===e.which?e.button:e.which}(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var r=Te(t.target);if(r&&r.href){var n="object"===e(r.href)&&"SVGAnimatedString"===r.href.constructor.name,a=String(n?r.href.baseVal:r.href);if(a!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&(n?!r.target.baseVal:!r.target)){var s=new URL(a);if(s.pathname!==location.pathname||s.search!==location.search){var o=xe(s);if(o)Se(o,null,r.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),we.pushState({id:ge},"",s.href)}}}else location.hash||t.preventDefault()}}}function Te(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function De(e){if($e[ge]=Le(),e.state){var t=xe(new URL(location.href));t?Se(t,e.state.id):location.href=location.href}else(function(e){ge=e})(ye=ye+1),we.replaceState({id:ge},"",location.href)}!function(e){var t;"scrollRestoration"in we&&(we.scrollRestoration="manual"),t=e.target,me=t,addEventListener("click",Ue),addEventListener("popstate",De),addEventListener("touchstart",Ge),addEventListener("mousemove",qe),Promise.resolve().then(function(){var e=location,t=e.hash,r=e.href;we.replaceState({id:ye},"",r);var n,a,s,o,i,c,u,l=new URL(location.href);if(le.error)return n=location,a=n.pathname,s=n.search,o=le.session,i=le.preloaded,c=le.status,u=le.error,ie||(ie=i&&i[0]),void _e(null,[],{error:u,status:c,session:o,level0:{props:ie},level1:{props:{status:c,error:u},component:X},segments:i},{path:a,query:Ee(s),params:{}});var f=xe(l);return f?Se(f,ye,!0,t):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.e5f57a06.js.map
