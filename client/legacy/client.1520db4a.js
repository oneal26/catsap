function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a,i=(function(e){var r=function(e){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function y(){}function g(){}function b(){}var w={};w[i]=function(){return this};var $=Object.getPrototypeOf,x=$&&$($(A([])));x&&x!==n&&o.call(x,i)&&(w=x);var E=b.prototype=y.prototype=Object.create(w);function S(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function _(e,r){var n;this._invoke=function(a,i){function c(){return new r(function(n,c){!function n(a,i,c,s){var u=l(e[a],e,i);if("throw"!==u.type){var f=u.arg,p=f.value;return p&&"object"===t(p)&&o.call(p,"__await")?r.resolve(p.__await).then(function(t){n("next",t,c,s)},function(t){n("throw",t,c,s)}):r.resolve(p).then(function(t){f.value=t,c(f)},function(t){return n("throw",t,c,s)})}s(u.arg)}(a,i,n,c)})}return n=n?n.then(c,c):c()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:r,done:!0}}return g.prototype=E.constructor=b,b.constructor=g,g.displayName=u(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(_.prototype),_.prototype[c]=function(){return this},e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},S(E),u(E,s,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}(o={exports:{}},o.exports),o.exports);function c(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t){c(a,n,o,i,s,"next",t)}function s(t){c(a,n,o,i,s,"throw",t)}i(void 0)})}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?p(e):r}function v(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(){}function g(t,e){for(var r in e)t[r]=e[r];return t}function b(t){return t()}function w(){return Object.create(null)}function $(t){t.forEach(b)}function x(t){return"function"==typeof t}function E(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function S(t,e,r,n){return t[1]&&n?g(r.ctx.slice(),t[1](n(e))):r.ctx}function _(e,r,n,o,a,i,c){var s=function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),s=0;s<c;s+=1)i[s]=r.dirty[s]|a[s];return i}return r.dirty|a}return r.dirty}(r,o,a,i);if(s){var u=S(r,n,o,c);e.p(u,s)}}function L(t){return null==t?"":t}function R(t,e){t.appendChild(e)}function P(t,e,r){t.insertBefore(e,r||null)}function j(t){t.parentNode.removeChild(t)}function A(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function O(){return k(" ")}function I(){return k("")}function N(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function C(t){return Array.from(t.childNodes)}function D(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var s=a.attributes[i++];r[s.name]||c.push(s.name)}for(var u=0;u<c.length;u++)a.removeAttribute(c[u]);return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):A(e)}function q(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return k(e)}function G(t){return q(t," ")}function T(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function U(t,e,r,n){t.style.setProperty(e,r,n?"important":"")}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function F(t){a=t}function J(){if(!a)throw new Error("Function called outside component initialization");return a}var V=[],z=[],H=[],K=[],B=Promise.resolve(),Y=!1;function Z(t){H.push(t)}var Q=!1,X=new Set;function W(){if(!Q){Q=!0;do{for(var t=0;t<V.length;t+=1){var e=V[t];F(e),tt(e.$$)}for(V.length=0;z.length;)z.pop()();for(var r=0;r<H.length;r+=1){var n=H[r];X.has(n)||(X.add(n),n())}H.length=0}while(V.length);for(;K.length;)K.pop()();Y=!1,Q=!1,X.clear()}}function tt(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}var et,rt=new Set;function nt(){et={r:0,c:[],p:et}}function ot(){et.r||$(et.c),et=et.p}function at(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function it(t,e,r,n){if(t&&t.o){if(rt.has(t))return;rt.add(t),et.c.push(function(){rt.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}}function ct(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var s in i)s in c||(n[s]=1);for(var u in c)o[u]||(r[u]=c[u],o[u]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function st(e){return"object"===t(e)&&null!==e?e:{}}function ut(t){t&&t.c()}function ft(t,e){t&&t.l(e)}function lt(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),Z(function(){var e=a.map(b).filter(x);i?i.push.apply(i,v(e)):$(e),t.$$.on_mount=[]}),c.forEach(Z)}function pt(t,e){var r=t.$$;null!==r.fragment&&($(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ht(t,e){-1===t.$$.dirty[0]&&(V.push(t),Y||(Y=!0,B.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,r,n,o,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],s=a;F(t);var u=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:y,not_equal:o,bound:w(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:w(),dirty:c},l=!1;if(f.ctx=r?r(t,u,function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&o(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),l&&ht(t,e)),r}):[],f.update(),l=!0,$(f.before_update),f.fragment=!!n&&n(f.ctx),e.target){if(e.hydrate){var p=C(e.target);f.fragment&&f.fragment.l(p),p.forEach(j)}else f.fragment&&f.fragment.c();e.intro&&at(t.$$.fragment),lt(t,e.target,e.anchor),W()}F(s)}var dt=function(){function t(){d(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){pt(this,1),this.$destroy=y}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(){}}])&&m(e.prototype,r),n&&m(e,n),t}(),mt=[];function yt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,n=[];function o(r){if(E(t,r)&&(t=r,e)){for(var o=!mt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),mt.push(i,t)}if(o){for(var c=0;c<mt.length;c+=2)mt[c][0](mt[c+1]);mt.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a){var i=[a,arguments.length>1&&void 0!==arguments[1]?arguments[1]:y];return n.push(i),1===n.length&&(e=r(o)||y),a(t),function(){var t=n.indexOf(i);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}}}var gt={},bt=function(){return{}};function wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function $t(t){var e,r,o,a,i,c,s,u,f,l,p,h,v,d,m,g,b,w,$,x,E;return{c:function(){e=A("nav"),r=A("ul"),o=A("li"),a=A("a"),i=k("/home"),s=O(),u=A("li"),f=A("a"),l=k("/projects"),h=O(),v=A("li"),d=A("a"),m=k("/visuals"),b=O(),w=A("li"),$=A("a"),x=k("/shop"),this.h()},l:function(t){var n=C(e=D(t,"NAV",{class:!0})),c=C(r=D(n,"UL",{class:!0})),p=C(o=D(c,"LI",{class:!0})),y=C(a=D(p,"A",{class:!0,href:!0}));i=q(y,"/home"),y.forEach(j),p.forEach(j),s=G(c);var g=C(u=D(c,"LI",{class:!0})),E=C(f=D(g,"A",{rel:!0,class:!0,href:!0}));l=q(E,"/projects"),E.forEach(j),g.forEach(j),h=G(c);var S=C(v=D(c,"LI",{class:!0})),_=C(d=D(S,"A",{class:!0,href:!0}));m=q(_,"/visuals"),_.forEach(j),S.forEach(j),b=G(c);var L=C(w=D(c,"LI",{class:!0})),R=C($=D(L,"A",{class:!0,href:!0}));x=q(R,"/shop"),R.forEach(j),L.forEach(j),c.forEach(j),n.forEach(j),this.h()},h:function(){N(a,"class",c=L(void 0===t[0]?"selected":"")+" svelte-1b12r61"),N(a,"href","."),N(o,"class","svelte-1b12r61"),N(f,"rel","prefetch"),N(f,"class",p=L("jams"===t[0]?"selected":"")+" svelte-1b12r61"),N(f,"href","jams"),N(u,"class","svelte-1b12r61"),N(d,"class",g=L("visuals"===t[0]?"selected":"")+" svelte-1b12r61"),N(d,"href","visuals"),N(v,"class","svelte-1b12r61"),N($,"class",E=L("shop"===t[0]?"selected":"")+" svelte-1b12r61"),N($,"href","https://www.spacestationrecords.com/"),N(w,"class","svelte-1b12r61"),N(r,"class","svelte-1b12r61"),N(e,"class","bg svelte-1b12r61")},m:function(t,n){P(t,e,n),R(e,r),R(r,o),R(o,a),R(a,i),R(r,s),R(r,u),R(u,f),R(f,l),R(r,h),R(r,v),R(v,d),R(d,m),R(r,b),R(r,w),R(w,$),R($,x)},p:function(t,e){var r=n(e,1)[0];1&r&&c!==(c=L(void 0===t[0]?"selected":"")+" svelte-1b12r61")&&N(a,"class",c),1&r&&p!==(p=L("jams"===t[0]?"selected":"")+" svelte-1b12r61")&&N(f,"class",p),1&r&&g!==(g=L("visuals"===t[0]?"selected":"")+" svelte-1b12r61")&&N(d,"class",g),1&r&&E!==(E=L("shop"===t[0]?"selected":"")+" svelte-1b12r61")&&N($,"class",E)},i:y,o:y,d:function(t){t&&j(e)}}}function xt(t,e,r){var n=e.segment;return t.$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var Et=function(t){l(r,dt);var e=wt(r);function r(t){var n;return d(this,r),vt(p(n=e.call(this)),t,xt,$t,E,{segment:0}),n}return r}();function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function _t(t){var e,r,n,o,a,i,c,s,u,f,l,p,h,v,d,m;return{c:function(){e=A("nav"),r=A("ul"),n=A("li"),o=A("iframe"),a=O(),i=A("li"),c=A("a"),s=A("img"),u=O(),f=A("li"),l=A("a"),p=A("img"),h=O(),v=A("li"),d=A("a"),m=A("img"),this.h()},l:function(t){var y=C(e=D(t,"NAV",{class:!0})),g=C(r=D(y,"UL",{class:!0})),b=C(n=D(g,"LI",{class:!0}));C(o=D(b,"IFRAME",{src:!0,width:!0,height:!0,scrolling:!0,frameborder:!0,style:!0,allowtransparency:!0,class:!0})).forEach(j),b.forEach(j),a=G(g);var w=C(i=D(g,"LI",{class:!0})),$=C(c=D(w,"A",{href:!0,class:!0}));s=D($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(j),w.forEach(j),u=G(g);var x=C(f=D(g,"LI",{class:!0})),E=C(l=D(x,"A",{href:!0,class:!0}));p=D(E,"IMG",{src:!0,alt:!0,class:!0}),E.forEach(j),x.forEach(j),h=G(g);var S=C(v=D(g,"LI",{class:!0})),_=C(d=D(S,"A",{href:!0,class:!0}));m=D(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(j),S.forEach(j),g.forEach(j),y.forEach(j),this.h()},h:function(){o.src!=="https://open.spotify.com/follow/1/?uri=spotify:artist:4tCGRoI7zhPtJvKoyZEJES?si=E5p9yV0PQuqv7GZeOmfD0w&size=basic&theme=light"&&N(o,"src","https://open.spotify.com/follow/1/?uri=spotify:artist:4tCGRoI7zhPtJvKoyZEJES?si=E5p9yV0PQuqv7GZeOmfD0w&size=basic&theme=light"),N(o,"width","200"),N(o,"height","25"),N(o,"scrolling","no"),N(o,"frameborder","0"),U(o,"border","none"),U(o,"overflow","hidden"),N(o,"allowtransparency","true"),N(o,"class","svelte-air869"),N(n,"class","svelte-air869"),s.src!=="soundcloud.png"&&N(s,"src","soundcloud.png"),N(s,"alt","SoundCloud"),N(s,"class","icon svelte-air869"),N(c,"href","https://soundcloud.com/reedinbooks/sets/botanical-side-a"),N(c,"class","svelte-air869"),N(i,"class","right svelte-air869"),p.src!=="spotify.png"&&N(p,"src","spotify.png"),N(p,"alt","Spotify"),N(p,"class","icon svelte-air869"),N(l,"href","https://open.spotify.com/album/07Dpa9PyululGEdXbPTPij?si=nI0DXluqSEyx-Hih9zLGEQ"),N(l,"class","svelte-air869"),N(f,"class","right svelte-air869"),m.src!=="apple.png"&&N(m,"src","apple.png"),N(m,"alt","Apple Music"),N(m,"class","icon svelte-air869"),N(d,"href","https://music.apple.com/us/album/botanical-side-a/1480486916"),N(d,"class","svelte-air869"),N(v,"class","right svelte-air869"),N(r,"class","svelte-air869"),N(e,"class","fixed-bottom bg svelte-air869")},m:function(t,y){P(t,e,y),R(e,r),R(r,n),R(n,o),R(r,a),R(r,i),R(i,c),R(c,s),R(r,u),R(r,f),R(f,l),R(l,p),R(r,h),R(r,v),R(v,d),R(d,m)},p:y,i:y,o:y,d:function(t){t&&j(e)}}}function Lt(t,e,r){var n=e.segment;return t.$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var Rt=function(t){l(r,dt);var e=St(r);function r(t){var n;return d(this,r),vt(p(n=e.call(this)),t,Lt,_t,E,{segment:0}),n}return r}();function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function jt(t){var e,r,o,a,i,c;e=new Et({props:{segment:t[0]}}),o=new Rt({props:{segment:t[0]}});var s=t[2].default,u=function(t,e,r,n){if(t){var o=S(t,e,r,n);return t[0](o)}}(s,t,t[1],null);return{c:function(){ut(e.$$.fragment),r=O(),ut(o.$$.fragment),a=O(),i=A("main"),u&&u.c(),this.h()},l:function(t){ft(e.$$.fragment,t),r=G(t),ft(o.$$.fragment,t),a=G(t);var n=C(i=D(t,"MAIN",{class:!0}));u&&u.l(n),n.forEach(j),this.h()},h:function(){N(i,"class","svelte-509qpr")},m:function(t,n){lt(e,t,n),P(t,r,n),lt(o,t,n),P(t,a,n),P(t,i,n),u&&u.m(i,null),c=!0},p:function(t,r){var a=n(r,1)[0],i={};1&a&&(i.segment=t[0]),e.$set(i);var c={};1&a&&(c.segment=t[0]),o.$set(c),u&&u.p&&2&a&&_(u,s,t,t[1],a,null,null)},i:function(t){c||(at(e.$$.fragment,t),at(o.$$.fragment,t),at(u,t),c=!0)},o:function(t){it(e.$$.fragment,t),it(o.$$.fragment,t),it(u,t),c=!1},d:function(t){pt(e,t),t&&j(r),pt(o,t),t&&j(a),t&&j(i),u&&u.d(t)}}}function At(t,e,r){var n=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$set=function(t){"segment"in t&&r(0,n=t.segment),"$$scope"in t&&r(1,i=t.$$scope)},[n,i,a]}var kt=function(t){l(r,dt);var e=Pt(r);function r(t){var n;return d(this,r),vt(p(n=e.call(this)),t,At,jt,E,{segment:0}),n}return r}();function Ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function It(t){var e,r,n=t[1].stack+"";return{c:function(){e=A("pre"),r=k(n)},l:function(t){var o=C(e=D(t,"PRE",{}));r=q(o,n),o.forEach(j)},m:function(t,n){P(t,e,n),R(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&T(r,n)},d:function(t){t&&j(e)}}}function Nt(t){var e,r,o,a,i,c,s,u,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&It(t);return{c:function(){r=O(),o=A("h1"),a=k(t[0]),i=O(),c=A("p"),s=k(l),u=O(),p&&p.c(),f=I(),this.h()},l:function(e){M('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(j),r=G(e);var n=C(o=D(e,"H1",{class:!0}));a=q(n,t[0]),n.forEach(j),i=G(e);var h=C(c=D(e,"P",{class:!0}));s=q(h,l),h.forEach(j),u=G(e),p&&p.l(e),f=I(),this.h()},h:function(){N(o,"class","svelte-8od9u6"),N(c,"class","svelte-8od9u6")},m:function(t,e){P(t,r,e),P(t,o,e),R(o,a),P(t,i,e),P(t,c,e),R(c,s),P(t,u,e),p&&p.m(t,e),P(t,f,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&T(a,t[0]),2&o&&l!==(l=t[1].message+"")&&T(s,l),t[2]&&t[1].stack?p?p.p(t,o):((p=It(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:y,o:y,d:function(t){t&&j(r),t&&j(o),t&&j(i),t&&j(c),t&&j(u),p&&p.d(t),t&&j(f)}}}function Ct(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,!1]}var Dt=function(t){l(r,dt);var e=Ot(r);function r(t){var n;return d(this,r),vt(p(n=e.call(this)),t,Ct,Nt,E,{status:0,error:1}),n}return r}();function qt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function Gt(t){var e,r,n,o=[t[4].props],a=t[4].component;function i(t){for(var e={},r=0;r<o.length;r+=1)e=g(e,o[r]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&ut(e.$$.fragment),r=I()},l:function(t){e&&ft(e.$$.fragment,t),r=I()},m:function(t,o){e&&lt(e,t,o),P(t,r,o),n=!0},p:function(t,n){var c=16&n?ct(o,[st(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){nt();var s=e;it(s.$$.fragment,1,0,function(){pt(s,1)}),ot()}a?(ut((e=new a(i())).$$.fragment),at(e.$$.fragment,1),lt(e,r.parentNode,r)):e=null}else a&&e.$set(c)},i:function(t){n||(e&&at(e.$$.fragment,t),n=!0)},o:function(t){e&&it(e.$$.fragment,t),n=!1},d:function(t){t&&j(r),e&&pt(e,t)}}}function Tt(t){var e,r;return e=new Dt({props:{error:t[0],status:t[1]}}),{c:function(){ut(e.$$.fragment)},l:function(t){ft(e.$$.fragment,t)},m:function(t,n){lt(e,t,n),r=!0},p:function(t,r){var n={};1&r&&(n.error=t[0]),2&r&&(n.status=t[1]),e.$set(n)},i:function(t){r||(at(e.$$.fragment,t),r=!0)},o:function(t){it(e.$$.fragment,t),r=!1},d:function(t){pt(e,t)}}}function Ut(t){var e,r,n,o,a=[Tt,Gt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=I()},l:function(t){r.l(t),n=I()},m:function(t,r){i[e].m(t,r),P(t,n,r),o=!0},p:function(t,o){var s=e;(e=c(t))===s?i[e].p(t,o):(nt(),it(i[s],1,1,function(){i[s]=null}),ot(),(r=i[e])||(r=i[e]=a[e](t)).c(),at(r,1),r.m(n.parentNode,n))},i:function(t){o||(at(r),o=!0)},o:function(t){it(r),o=!1},d:function(t){i[e].d(t),t&&j(n)}}}function Mt(t){for(var e,r,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Ut]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=g(a,o[i]);return e=new kt({props:a}),{c:function(){ut(e.$$.fragment)},l:function(t){ft(e.$$.fragment,t)},m:function(t,n){lt(e,t,n),r=!0},p:function(t,r){var a=n(r,1)[0],i=12&a?ct(o,[4&a&&{segment:t[2][0]},8&a&&st(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){r||(at(e.$$.fragment,t),r=!0)},o:function(t){it(e.$$.fragment,t),r=!1},d:function(t){pt(e,t)}}}function Ft(t,e,r){var n,o,a,i=e.stores,c=e.error,s=e.status,u=e.segments,f=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return n=h,J().$$.after_update.push(n),o=gt,a=i,J().$$.context.set(o,a),t.$set=function(t){"stores"in t&&r(5,i=t.stores),"error"in t&&r(0,c=t.error),"status"in t&&r(1,s=t.status),"segments"in t&&r(2,u=t.segments),"level0"in t&&r(3,f=t.level0),"level1"in t&&r(4,p=t.level1),"notify"in t&&r(6,h=t.notify)},[c,s,u,f,p,i,h]}var Jt=function(t){l(r,dt);var e=qt(r);function r(t){var n;return d(this,r),vt(p(n=e.call(this)),t,Ft,Mt,E,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),n}return r}(),Vt=[],zt=[{js:function(){return import("./index.62912d80.js")},css:["legacy/index.62912d80.css","legacy/client.1520db4a.css"]},{js:function(){return import("./screenplay.55b6f576.js")},css:["legacy/screenplay.55b6f576.css","legacy/client.1520db4a.css"]},{js:function(){return import("./visuals.af832fea.js")},css:["legacy/visuals.af832fea.css","legacy/client.1520db4a.css"]},{js:function(){return import("./jams.c7b4af6c.js")},css:["legacy/jams.c7b4af6c.css","legacy/client.1520db4a.css"]}],Ht=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/screenplay\/?$/,parts:[{i:1}]},{pattern:/^\/visuals\/?$/,parts:[{i:2}]},{pattern:/^\/jams\/?$/,parts:[{i:3}]}];function Kt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=pe(new URL(t,document.baseURI));return r?(ue[e.replaceState?"replaceState":"pushState"]({id:ie},"",t),ve(r,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var Bt,Yt,Zt,Qt,Xt,Wt="undefined"!=typeof __SAPPER__&&__SAPPER__,te=!1,ee=[],re="{}",ne={page:function(t){var e=yt(t),r=!0;return{notify:function(){r=!0,e.update(function(t){return t})},set:function(t){r=!1,e.set(t)},subscribe:function(t){var n;return e.subscribe(function(e){(void 0===n||r&&e!==n)&&t(n=e)})}}}({}),preloading:yt(null),session:yt(Wt&&Wt.session)};ne.session.subscribe(function(){var t=s(i.mark(function t(e){var r,n,o,a,c,s;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Qt=e,te){t.next=3;break}return t.abrupt("return");case 3:return Xt=!0,r=pe(new URL(location.href)),n=Yt={},t.next=8,be(r);case 8:if(o=t.sent,a=o.redirect,c=o.props,s=o.branch,n===Yt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,me(a,s,c,r.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var oe,ae=null;var ie,ce=1;var se,ue="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},fe={};function le(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(c):r[a]=c}),r}function pe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Wt.baseUrl))return null;var e=t.pathname.slice(Wt.baseUrl.length);if(""===e&&(e="/"),!Vt.some(function(t){return t.test(e)}))for(var r=0;r<Ht.length;r+=1){var n=Ht[r],o=n.pattern.exec(e);if(o){var a=le(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},s={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:s}}}}function he(){return{x:pageXOffset,y:pageYOffset}}function ve(t,e,r,n){return de.apply(this,arguments)}function de(){return(de=s(i.mark(function t(e,r,n,o){var a,c,s,u,f,l,p,h,v;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r?ie=r:(a=he(),fe[ie]=a,r=ie=++ce,fe[ie]=n?a:{x:0,y:0}),ie=r,Bt&&ne.preloading.set(!0),c=ae&&ae.href===e.href?ae.promise:be(e),ae=null,s=Yt={},t.next=8,c;case 8:if(u=t.sent,f=u.redirect,l=u.props,p=u.branch,s===Yt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,me(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=fe[r],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),fe[ie]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function me(t,e,r,n){return ye.apply(this,arguments)}function ye(){return(ye=s(i.mark(function t(e,r,n,o){var a,c;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Kt(e.location,{replaceState:!0}));case 2:if(ne.page.set(o),ne.preloading.set(!1),!Bt){t.next=8;break}Bt.$set(n),t.next=18;break;case 8:return n.stores={page:{subscribe:ne.page.subscribe},preloading:{subscribe:ne.preloading.subscribe},session:ne.session},t.next=11,Zt;case 11:if(t.t0=t.sent,n.level0={props:t.t0},n.notify=ne.page.notify,a=document.querySelector("#sapper-head-start"),c=document.querySelector("#sapper-head-end"),a&&c){for(;a.nextSibling!==c;)Ee(a.nextSibling);Ee(a),Ee(c)}Bt=new Jt({target:oe,props:n,hydrate:!0});case 18:ee=r,re=JSON.stringify(o.query),te=!0,Xt=!1;case 22:case"end":return t.stop()}},t)}))).apply(this,arguments)}function ge(t,e,r,n){if(n!==re)return!0;var o=ee[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function be(t){return we.apply(this,arguments)}function we(){return(we=s(i.mark(function t(e){var r,n,o,a,c,u,f,l,p,h,v;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),a=null,c={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},Zt||(Zt=Wt.preloaded[0]||bt.call(u,{host:n.host,path:n.path,query:n.query,params:{}},Qt)),l=1,t.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),v=!1,t.next=13,Promise.all(r.parts.map(function(){var t=s(i.mark(function t(r,a){var s,f,d,m,y,g;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(s=o[a],ge(a,s,h,p)&&(v=!0),c.segments[l]=o[a+1],r){t.next=5;break}return t.abrupt("return",{segment:s});case 5:if(f=l++,Xt||v||!ee[a]||ee[a].part!==r.i){t.next=8;break}return t.abrupt("return",ee[a]);case 8:return v=!1,t.next=11,xe(zt[r.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!te&&Wt.preloaded[a+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(u,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},Qt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=Wt.preloaded[a+1];case 26:return t.abrupt("return",c["level".concat(f)]={component:m,props:g,segment:s,match:h,part:r.i});case 27:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),c.error=t.t0,c.status=500,f=[];case 21:return t.abrupt("return",{redirect:a,props:c,branch:f});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function $e(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)})}function xe(t){var e="string"==typeof t.css?[]:t.css.map($e);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function Ee(t){t.parentNode.removeChild(t)}function Se(t){var e=pe(new URL(t,document.baseURI));if(e)return ae&&t===ae.href||function(t,e){ae={href:t,promise:e}}(t,be(e)),ae.promise}function _e(t){clearTimeout(se),se=setTimeout(function(){Le(t)},20)}function Le(t){var e=Pe(t.target);e&&"prefetch"===e.rel&&Se(e.href)}function Re(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Pe(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&(n?!r.target.baseVal:!r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=pe(a);if(i)ve(i,null,r.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),ue.pushState({id:ie},"",a.href)}}}else location.hash||e.preventDefault()}}}function Pe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function je(t){if(fe[ie]=he(),t.state){var e=pe(new URL(location.href));e?ve(e,t.state.id):location.href=location.href}else(function(t){ie=t})(ce=ce+1),ue.replaceState({id:ie},"",location.href)}!function(t){var e;"scrollRestoration"in ue&&(ue.scrollRestoration="manual"),addEventListener("beforeunload",function(){ue.scrollRestoration="auto"}),addEventListener("load",function(){ue.scrollRestoration="manual"}),e=t.target,oe=e,addEventListener("click",Re),addEventListener("popstate",je),addEventListener("touchstart",Le),addEventListener("mousemove",_e),Promise.resolve().then(function(){var t=location,e=t.hash,r=t.href;ue.replaceState({id:ce},"",r);var n,o,a,i,c,s,u,f,l=new URL(location.href);if(Wt.error)return n=location,o=n.host,a=n.pathname,i=n.search,c=Wt.session,s=Wt.preloaded,u=Wt.status,f=Wt.error,Zt||(Zt=s&&s[0]),void me(null,[],{error:f,status:u,session:c,level0:{props:Zt},level1:{props:{status:u,error:f},component:Dt},segments:s},{host:o,path:a,query:le(i),params:{}});var p=pe(l);return p?ve(p,ce,!0,e):void 0})}({target:document.querySelector("#sapper")});export{dt as S,l as _,u as a,h as b,d as c,p as d,A as e,O as f,D as g,C as h,vt as i,q as j,j as k,G as l,N as m,U as n,R as o,P as p,M as q,y as r,E as s,k as t};
