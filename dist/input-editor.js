!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.InputEditor=t():n.InputEditor=t()}(window,(function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=42)}([function(n,t,e){var r=e(2);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,e){var r=e(16)("wks"),o=e(17),i=e(1).Symbol,u="function"==typeof i;(n.exports=function(n){return r[n]||(r[n]=u&&i[n]||(u?i:o)("Symbol."+n))}).store=r},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on  "+n);return n}},function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},function(n,t){var e=n.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},function(n,t,e){"use strict";var r,o,i=e(29),u=RegExp.prototype.exec,c=String.prototype.replace,a=u,s=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(s||l)&&(a=function(n){var t,e,r,o,a=this;return l&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),s&&(t=a.lastIndex),r=u.call(a,n),s&&r&&(a.lastIndex=a.global?r.index+r[0].length:t),l&&r&&r.length>1&&c.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),n.exports=a},function(n,t,e){var r=e(31),o=e(35);n.exports=e(10)?function(n,t,e){return r.f(n,t,o(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){n.exports=!e(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(n,t,e){"use strict";var r=e(22),o=e.n(r)()((function(n){return n[1]}));o.push([n.i,".input-editor {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  align-items: baseline;\n  background: #FFFFFF;\n  border: 1px solid #C3C2CF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 8px;\n  cursor: text;\n}\n.input-editor-token {\n  font-size: 14px;\n  line-height: 20px;\n  text-align: right;\n  color: #050038;\n  margin-right: 8px;\n  margin-bottom: 4px;\n}\n.input-editor-token.valid {\n  background: rgba(102, 153, 255, 0.2);\n  border-radius: 100px;\n  padding: 2px 8px;\n}\n.input-editor-token.invalid {\n  border-bottom: 1px dashed #D92929;\n  padding: 2px 2px 1px 2px;\n}\n.input-editor-token-btn-remove {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 12px;\n  height: 12px;\n  margin-top: 4px;\n  margin-left: 8px;\n  cursor: pointer;\n}\n.input-editor-token-btn-remove::before,\n.input-editor-token-btn-remove::after {\n  content: '';\n  position: absolute;\n  left: 6px;\n  top: 1px;\n  height: 10px;\n  width: 1px;\n  background-color: #050038;\n}\n.input-editor-token-btn-remove::before {\n  transform: rotate(45deg);\n}\n.input-editor-token-btn-remove::after {\n  transform: rotate(-45deg);\n}\n.input-editor-input {\n  font-size: 14px;\n  line-height: 20px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border: 0;\n  box-shadow: none;\n  outline: none;\n  color: #050038;\n}\n.input-editor-input::-moz-placeholder {\n  color: #C3C2CF;\n}\n.input-editor-input:-ms-input-placeholder {\n  color: #C3C2CF;\n}\n.input-editor-input::placeholder {\n  color: #C3C2CF;\n}\n.input-editor-input::-ms-clear {\n  display: none;\n}\n",""]),t.a=o},function(n,t,e){var r=e(6),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},function(n,t,e){"use strict";var r=e(25)(!0);n.exports=function(n,t,e){return t+(e?r(n,t).length:1)}},function(n,t,e){"use strict";var r=e(26),o=RegExp.prototype.exec;n.exports=function(n,t){var e=n.exec;if("function"==typeof e){var i=e.call(n,t);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(n))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(n,t)}},function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},function(n,t,e){var r=e(7),o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(n.exports=function(n,t){return i[n]||(i[n]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:e(27)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++e+r).toString(36))}},function(n,t,e){"use strict";e(28);var r=e(19),o=e(9),i=e(4),u=e(5),c=e(3),a=e(8),s=c("species"),l=!i((function(){var n=/./;return n.exec=function(){var n=[];return n.groups={a:"7"},n},"7"!=="".replace(n,"$<a>")})),f=function(){var n=/(?:)/,t=n.exec;n.exec=function(){return t.apply(this,arguments)};var e="ab".split(n);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();n.exports=function(n,t,e){var p=c(n),d=!i((function(){var t={};return t[p]=function(){return 7},7!=""[n](t)})),v=d?!i((function(){var t=!1,e=/a/;return e.exec=function(){return t=!0,null},"split"===n&&(e.constructor={},e.constructor[s]=function(){return e}),e[p](""),!t})):void 0;if(!d||!v||"replace"===n&&!l||"split"===n&&!f){var h=/./[p],g=e(u,p,""[n],(function(n,t,e,r,o){return t.exec===a?d&&!o?{done:!0,value:h.call(t,e,r)}:{done:!0,value:n.call(e,t,r)}:{done:!1}})),x=g[0],m=g[1];r(String.prototype,n,x),o(RegExp.prototype,p,2==t?function(n,t){return m.call(n,this,t)}:function(n){return m.call(n,this)})}}},function(n,t,e){var r=e(1),o=e(9),i=e(36),u=e(17)("src"),c=e(37),a=(""+c).split("toString");e(7).inspectSource=function(n){return c.call(n)},(n.exports=function(n,t,e,c){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",t)),n[t]!==e&&(s&&(i(e,u)||o(e,u,n[t]?""+n[t]:a.join(String(t)))),n===r?n[t]=e:c?n[t]?n[t]=e:o(n,t,e):(delete n[t],o(n,t,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),u=[];function c(n){for(var t=-1,e=0;e<u.length;e++)if(u[e].identifier===n){t=e;break}return t}function a(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s=e[a]||0,l="".concat(a," ").concat(s);e[a]=s+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(u[f].references++,u[f].updater(p)):u.push({identifier:l,updater:g(p,t),references:1}),r.push(l)}return r}function s(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var u=i(n.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(t)}return t}var l,f=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),u=n.childNodes;u[t]&&n.removeChild(u[t]),u.length?n.insertBefore(i,u[t]):n.appendChild(i)}}function d(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var v=null,h=0;function g(n,t){var e,r,o;if(t.singleton){var i=h++;e=v||(v=s(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=s(t),r=d.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=a(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=c(e[r]);u[o].references--}for(var i=a(n,t),s=0;s<e.length;s++){var l=c(e[s]);0===u[l].references&&(u[l].updater(),u.splice(l,1))}e=i}}}},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var c=0;c<n.length;c++){var a=[].concat(n[c]);r&&o[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),t.push(a))}},t}},function(n,t,e){"use strict";var r=e(0),o=e(24),i=e(12),u=e(6),c=e(13),a=e(14),s=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;e(18)("replace",2,(function(n,t,e,v){return[function(r,o){var i=n(this),u=null==r?void 0:r[t];return void 0!==u?u.call(r,i,o):e.call(String(i),r,o)},function(n,t){var o=v(e,n,this,t);if(o.done)return o.value;var f=r(n),p=String(this),d="function"==typeof t;d||(t=String(t));var g=f.global;if(g){var x=f.unicode;f.lastIndex=0}for(var m=[];;){var y=a(f,p);if(null===y)break;if(m.push(y),!g)break;""===String(y[0])&&(f.lastIndex=c(p,i(f.lastIndex),x))}for(var b,_="",k=0,E=0;E<m.length;E++){y=m[E];for(var w=String(y[0]),S=s(l(u(y.index),p.length),0),T=[],C=1;C<y.length;C++)T.push(void 0===(b=y[C])?b:String(b));var j=y.groups;if(d){var I=[w].concat(T,S,p);void 0!==j&&I.push(j);var M=String(t.apply(void 0,I))}else M=h(w,p,S,T,j,t);S>=k&&(_+=p.slice(k,S)+M,k=S+w.length)}return _+p.slice(k)}];function h(n,t,r,i,u,c){var a=r+n.length,s=i.length,l=d;return void 0!==u&&(u=o(u),l=p),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return n;case"`":return t.slice(0,r);case"'":return t.slice(a);case"<":c=u[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>s){var p=f(l/10);return 0===p?e:p<=s?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):e}c=i[l-1]}return void 0===c?"":c}))}}))},function(n,t,e){var r=e(5);n.exports=function(n){return Object(r(n))}},function(n,t,e){var r=e(6),o=e(5);n.exports=function(n){return function(t,e){var i,u,c=String(o(t)),a=r(e),s=c.length;return a<0||a>=s?n?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?n?c.charAt(a):i:n?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(n,t,e){var r=e(15),o=e(3)("toStringTag"),i="Arguments"==r(function(){return arguments}());n.exports=function(n){var t,e,u;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=function(n,t){try{return n[t]}catch(n){}}(t=Object(n),o))?e:i?r(t):"Object"==(u=r(t))&&"function"==typeof t.callee?"Arguments":u}},function(n,t){n.exports=!1},function(n,t,e){"use strict";var r=e(8);e(30)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(n,t,e){"use strict";var r=e(0);n.exports=function(){var n=r(this),t="";return n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.unicode&&(t+="u"),n.sticky&&(t+="y"),t}},function(n,t,e){var r=e(1),o=e(7),i=e(9),u=e(19),c=e(38),a=function(n,t,e){var s,l,f,p,d=n&a.F,v=n&a.G,h=n&a.S,g=n&a.P,x=n&a.B,m=v?r:h?r[t]||(r[t]={}):(r[t]||{}).prototype,y=v?o:o[t]||(o[t]={}),b=y.prototype||(y.prototype={});for(s in v&&(e=t),e)f=((l=!d&&m&&void 0!==m[s])?m:e)[s],p=x&&l?c(f,r):g&&"function"==typeof f?c(Function.call,f):f,m&&u(m,s,f,n&a.U),y[s]!=f&&i(y,s,p),g&&b[s]!=f&&(b[s]=f)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,n.exports=a},function(n,t,e){var r=e(0),o=e(32),i=e(34),u=Object.defineProperty;t.f=e(10)?Object.defineProperty:function(n,t,e){if(r(n),t=i(t,!0),r(e),o)try{return u(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},function(n,t,e){n.exports=!e(10)&&!e(4)((function(){return 7!=Object.defineProperty(e(33)("div"),"a",{get:function(){return 7}}).a}))},function(n,t,e){var r=e(2),o=e(1).document,i=r(o)&&r(o.createElement);n.exports=function(n){return i?o.createElement(n):{}}},function(n,t,e){var r=e(2);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t,e){n.exports=e(16)("native-function-to-string",Function.toString)},function(n,t,e){var r=e(20);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},function(n,t,e){"use strict";var r=e(40),o=e(0),i=e(41),u=e(13),c=e(12),a=e(14),s=e(8),l=e(4),f=Math.min,p=[].push,d="length",v=!l((function(){RegExp(4294967295,"y")}));e(18)("split",2,(function(n,t,e,l){var h;return h="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[d]||2!="ab".split(/(?:ab)*/)[d]||4!=".".split(/(.?)(.?)/)[d]||".".split(/()()/)[d]>1||"".split(/.?/)[d]?function(n,t){var o=String(this);if(void 0===n&&0===t)return[];if(!r(n))return e.call(o,n,t);for(var i,u,c,a=[],l=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),f=0,v=void 0===t?4294967295:t>>>0,h=new RegExp(n.source,l+"g");(i=s.call(h,o))&&!((u=h.lastIndex)>f&&(a.push(o.slice(f,i.index)),i[d]>1&&i.index<o[d]&&p.apply(a,i.slice(1)),c=i[0][d],f=u,a[d]>=v));)h.lastIndex===i.index&&h.lastIndex++;return f===o[d]?!c&&h.test("")||a.push(""):a.push(o.slice(f)),a[d]>v?a.slice(0,v):a}:"0".split(void 0,0)[d]?function(n,t){return void 0===n&&0===t?[]:e.call(this,n,t)}:e,[function(e,r){var o=n(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):h.call(String(o),e,r)},function(n,t){var r=l(h,n,this,t,h!==e);if(r.done)return r.value;var s=o(n),p=String(this),d=i(s,RegExp),g=s.unicode,x=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(v?"y":"g"),m=new d(v?s:"^(?:"+s.source+")",x),y=void 0===t?4294967295:t>>>0;if(0===y)return[];if(0===p.length)return null===a(m,p)?[p]:[];for(var b=0,_=0,k=[];_<p.length;){m.lastIndex=v?_:0;var E,w=a(m,v?p:p.slice(_));if(null===w||(E=f(c(m.lastIndex+(v?0:_)),p.length))===b)_=u(p,_,g);else{if(k.push(p.slice(b,_)),k.length===y)return k;for(var S=1;S<=w.length-1;S++)if(k.push(w[S]),k.length===y)return k;_=b=E}}return k.push(p.slice(b)),k}]}))},function(n,t,e){var r=e(2),o=e(15),i=e(3)("match");n.exports=function(n){var t;return r(n)&&(void 0!==(t=n[i])?!!t:"RegExp"==o(n))}},function(n,t,e){var r=e(0),o=e(20),i=e(3)("species");n.exports=function(n,t){var e,u=r(n).constructor;return void 0===u||null==(e=r(u)[i])?t:o(e)}},function(n,t,e){"use strict";e.r(t);e(23),e(39);var r={email:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/};function o(n,t){return"email"===n&&r.email.test(t)}function i(n){var t=document.createElement("span");return t.style.visibility="hidden",t.style.position="absolute",t.style.top="-999999px",t.innerHTML=n,document.body.appendChild(t),t.clientWidth}var u=e(21),c=e.n(u),a=e(11),s={insert:"head",singleton:!1};c()(a.a,s),a.a.locals;function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function f(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var p="input-editor",d=function(){function n(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(this,n),this.createToken=function(n){e._checkIsToken(n)},this._createTokenElement=function(n){var t=o(e._inputType,n),r="".concat(p,"-token ").concat(t?"valid":"invalid"),i=document.createElement("span");i.className=r,i.innerText=n;var u=e._createRemoveButton(i);return i.appendChild(u),i},this._createRemoveButton=function(n){var t=document.createElement("span");return t.className="".concat(p,"-token-btn-remove"),t.addEventListener("click",(function(){var t=e._tokenElements.indexOf(n);e._removeToken(t)})),t},this._setTokens=function(n){n.map((function(n){var t=e._createTokenElement(n);e._container.insertBefore(t,e._input),e._tokens.push(n),e._tokenElements.push(t)}))},this._checkIsToken=function(n){if("string"==typeof n&&n){var t=n.replace(/(,\s*$)|(^,*)|(\s)/g,"").split(/[\s,]/g).filter((function(n){return n}));t.length&&e._setTokens(t)}if(Array.isArray(n)&&n.length){var r=n.reduce((function(n,t){return t.replace(/(,\s*$)|(^,*)|(\s)/g,""),t&&n.push(t),n}),[]);r.length&&e._setTokens(r)}e._input.value=""},this._removeToken=function(n){var t=e._container.children[n];t&&(e._container.removeChild(t),e._tokens.splice(n,1),e._tokenElements.splice(n,1))},this._handleInputFocus=function(){e._input.focus()},this._handleKeyDown=function(n){var t=n.key;"Enter"===t&&e._checkIsToken(e._input.value),"Backspace"===t&&0===e._input.selectionEnd&&e._removeToken(e._tokens.length-1)},this._handleInput=function(){/[\s,]/.test(e._input.value)&&e._checkIsToken(e._input.value)},this._handleBlur=function(){e._checkIsToken(e._input.value)};var u=r.source,c=void 0===u?[]:u,a=r.inputType,s=void 0===a?"email":a,f=r.placeholder,d=void 0===f?"Enter value...":f;this._inputType=s,this._tokens=[],this._tokenElements=[],this._input=document.createElement("input"),this._input.className="".concat(p,"-input"),this._input.placeholder=d,this._input.addEventListener("input",this._handleInput),this._input.addEventListener("keydown",this._handleKeyDown),this._input.addEventListener("blur",this._handleBlur),this._input.style.minWidth="".concat(i(d),"px"),this._container=document.createElement("div"),this._container.className="".concat(p),this._container.appendChild(this._input),this._container.addEventListener("click",this._handleInputFocus),c.length&&this._checkIsToken(c),t.appendChild(this._container)}var t,e,r;return t=n,(e=[{key:"getTokenList",get:function(){return this._tokens}},{key:"getValidTokenList",get:function(){var n=this;return this._tokens.filter((function(t){return o(n._inputType,t)}))}}])&&f(t.prototype,e),r&&f(t,r),n}();t.default=d}]).default}));