!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/input-editor/",e(e.s=44)}([
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_is-object */2);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_shared */20)("wks"),o=e(/*! ./_uid */21),i=e(/*! ./_global */1).Symbol,a="function"==typeof i;(n.exports=function(n){return r[n]||(r[n]=a&&i[n]||(a?i:o)("Symbol."+n))}).store=r},
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],s=t.base?i[0]+t.base:i[0],u=e[s]||0,l="".concat(s," ").concat(u);e[s]=u+1;var A=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==A?(a[A].references++,a[A].updater(p)):a.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function u(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,A=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=A(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function f(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var d=null,h=0;function v(n,t){var e,r,o;if(t.singleton){var i=h++;e=d||(d=u(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=u(t),r=f.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=s(n,t),u=0;u<e.length;u++){var l=c(e[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}},
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";function r(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}n.exports=function(n){var t=r(n,4),e=t[1],o=t[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(a," */"),s=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(s).concat([c]).join("\n")}return[e].join("\n")}},
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on  "+n);return n}},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){var e=n.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";var r,o,i=e(/*! ./_flags */31),a=RegExp.prototype.exec,c=String.prototype.replace,s=a,u=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(u||l)&&(s=function(n){var t,e,r,o,s=this;return l&&(e=new RegExp("^"+s.source+"$(?!\\s)",i.call(s))),u&&(t=s.lastIndex),r=a.call(s,n),u&&r&&(s.lastIndex=s.global?r.index+r[0].length:t),l&&r&&r.length>1&&c.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),n.exports=s},
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_object-dp */33),o=e(/*! ./_property-desc */37);n.exports=e(/*! ./_descriptors */13)?function(n,t,e){return r.f(n,t,o(1,e))}:function(n,t,e){return n[t]=e,n}},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){n.exports=!e(/*! ./_fails */4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./examples/index.less ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */function(n,t,e){"use strict";var r=e(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */6),o=e.n(r),i=e(/*! ../node_modules/css-loader/dist/runtime/api.js */7),a=e.n(i)()(o.a);a.push([n.i,"@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhs.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhs.ttf) format('truetype');\n}\nhtml,\nbody {\n  font-family: 'Open Sans', sans-serif;\n  height: 100%;\n}\n::-moz-placeholder {\n  font-family: 'Open Sans', sans-serif;\n}\n:-ms-input-placeholder {\n  font-family: 'Open Sans', sans-serif;\n}\n::placeholder {\n  font-family: 'Open Sans', sans-serif;\n}\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 64px;\n}\n.emails-wrapper {\n  width: 540px;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n}\n.emails-container {\n  background: #F8F8F7;\n  padding: 32px 50px;\n}\n.emails-container .title {\n  font-size: 20px;\n  color: #050038;\n  margin-bottom: 32px;\n}\n.emails-container .title span {\n  font-weight: 700;\n}\n.emails-footer {\n  display: flex;\n  padding: 32px 50px;\n}\n.emails-footer .btn {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  color: #FFFFFF;\n  background: #4262FF;\n  border-radius: 6px;\n  border: 0;\n  padding: 8px 16px;\n  outline: none;\n  cursor: pointer;\n}\n.emails-footer .btn + .btn {\n  margin-left: 16px;\n}\n.emails-footer .btn:hover {\n  background: rgba(66, 98, 255, 0.95);\n}\n.input-editor {\n  height: 96px;\n  overflow: auto;\n}\n.input-editor-input {\n  font-family: 'Open Sans', sans-serif;\n}\n","",{version:3,sources:["https:/fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap","webpack://./examples/index.less"],names:[],mappings:"AAAA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sGAAA;ACCF;ADCA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kGAAA;ACCF;ADCA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sGAAA;ACCF;AAlBA;;EAEE,oCAAA;EACA,YAAA;AAoBF;AAlBA;EACE,oCAAA;AAoBF;AAlBA;EACE,oCAAA;AAoBF;AAlBA;EACE,oCAAA;AAoBF;AAlBA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AAoBF;AAlBA;EACE,YAAA;EACA,mBAAA;EACA,2CAAA;EACA,kBAAA;AAoBF;AAlBA;EACE,mBAAA;EACA,kBAAA;AAoBF;AAtBA;EAII,eAAA;EACA,cAAA;EACA,mBAAA;AAqBJ;AA3BA;EAQM,gBAAA;AAsBN;AAlBA;EACE,aAAA;EACA,kBAAA;AAoBF;AAtBA;EAII,oCAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,iBAAA;EACA,aAAA;EACA,eAAA;AAqBJ;AAlCA;EAeM,iBAAA;AAsBN;AApBI;EACE,mCAAA;AAsBN;AAlBA;EACE,YAAA;EACA,cAAA;AAoBF;AAlBA;EACE,oCAAA;AAoBF",sourcesContent:["@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhs.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhs.ttf) format('truetype');\n}\n","@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');\n\nhtml, \nbody {\n  font-family: 'Open Sans', sans-serif;\n  height: 100%;\n}\n::-moz-placeholder {\n  font-family: 'Open Sans', sans-serif;\n}\n:-ms-input-placeholder {\n  font-family: 'Open Sans', sans-serif;\n}\n::placeholder {\n  font-family: 'Open Sans', sans-serif;\n}\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 64px;\n}\n.emails-wrapper {\n  width: 540px;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n}\n.emails-container {\n  background: #F8F8F7;\n  padding: 32px 50px;\n  .title {\n    font-size: 20px;\n    color: #050038;\n    margin-bottom: 32px;\n    span {\n      font-weight: 700;\n    }\n  }\n}\n.emails-footer {\n  display: flex;\n  padding: 32px 50px;\n  .btn {\n    font-family: 'Open Sans', sans-serif;\n    font-size: 14px;\n    line-height: 24px;\n    color: #FFFFFF;\n    background: #4262FF;\n    border-radius: 6px;\n    border: 0;\n    padding: 8px 16px;\n    outline: none;\n    cursor: pointer;\n    + .btn {\n      margin-left: 16px;\n    }\n    &:hover {\n      background: rgba(66, 98, 255, .95);\n    }\n  }\n}\n.input-editor {\n  height: 96px;\n  overflow: auto;\n}\n.input-editor-input {\n  font-family: 'Open Sans', sans-serif;\n}"],sourceRoot:""}]),t.a=a},
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input-editor.less ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */function(n,t,e){"use strict";var r=e(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */6),o=e.n(r),i=e(/*! ../node_modules/css-loader/dist/runtime/api.js */7),a=e.n(i)()(o.a);a.push([n.i,".input-editor {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  align-items: baseline;\n  background: #FFFFFF;\n  border: 1px solid #C3C2CF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 8px;\n  cursor: text;\n}\n.input-editor-token {\n  font-size: 14px;\n  line-height: 20px;\n  text-align: right;\n  color: #050038;\n  margin-right: 8px;\n  margin-bottom: 4px;\n}\n.input-editor-token.valid {\n  background: rgba(102, 153, 255, 0.2);\n  border-radius: 100px;\n  padding: 2px 8px;\n}\n.input-editor-token.invalid {\n  border-bottom: 1px dashed #D92929;\n  padding: 2px 2px 1px 2px;\n}\n.input-editor-token-btn-remove {\n  display: inline-block;\n  vertical-align: top;\n  width: 12px;\n  height: 12px;\n  margin-top: 4px;\n  margin-left: 8px;\n  cursor: pointer;\n}\n.input-editor-token-btn-remove svg {\n  fill: currentColor;\n  width: 12px;\n  vertical-align: top;\n}\n.input-editor-input {\n  font-size: 14px;\n  line-height: 20px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border: 0;\n  box-shadow: none;\n  outline: none;\n  color: #050038;\n}\n.input-editor-input::-moz-placeholder {\n  color: #C3C2CF;\n}\n.input-editor-input:-ms-input-placeholder {\n  color: #C3C2CF;\n}\n.input-editor-input::placeholder {\n  color: #C3C2CF;\n}\n","",{version:3,sources:["webpack://./src/input-editor.less"],names:[],mappings:"AAAA;EACE,aAAA;EACA,eAAA;EACA,yBAAA;EACA,qBAAA;EACA,mBAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;AACF;AAEA;EACE,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;AAAF;AACE;EACE,oCAAA;EACA,oBAAA;EACA,gBAAA;AACJ;AACE;EACE,iCAAA;EACA,wBAAA;AACJ;AAEA;EACE,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AAAF;AAPA;EASI,kBAAA;EACA,WAAA;EACA,mBAAA;AACJ;AAGA;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;EACA,aAAA;EACA,cAAA;AADF;AAEE;EACE,cAAA;AAAJ;AAEE;EACE,cAAA;AAAJ;AAEE;EACE,cAAA;AAAJ",sourcesContent:[".input-editor {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  align-items: baseline;\n  background: #FFFFFF;\n  border: 1px solid #C3C2CF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 8px;\n  cursor: text;\n}\n\n.input-editor-token {\n  font-size: 14px;\n  line-height: 20px;\n  text-align: right;\n  color: #050038;\n  margin-right: 8px;\n  margin-bottom: 4px;\n  &.valid {\n    background: rgba(102, 153, 255, 0.2);\n    border-radius: 100px;\n    padding: 2px 8px;\n  }\n  &.invalid {\n    border-bottom: 1px dashed #D92929;\n    padding: 2px 2px 1px 2px;\n  }\n}\n.input-editor-token-btn-remove {\n  display: inline-block;\n  vertical-align: top;\n  width: 12px;\n  height: 12px;\n  margin-top: 4px;\n  margin-left: 8px;\n  cursor: pointer;\n  svg {\n    fill: currentColor;\n    width: 12px;\n    vertical-align: top;\n  }\n}\n\n.input-editor-input {\n  font-size: 14px;\n  line-height: 20px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border: 0;\n  box-shadow: none;\n  outline: none;\n  color: #050038;\n  &::-moz-placeholder {\n    color: #C3C2CF;\n  }\n  &:-ms-input-placeholder {\n    color: #C3C2CF;\n  }\n  &::placeholder {\n    color: #C3C2CF;\n  }\n}"],sourceRoot:""}]),t.a=a},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_to-integer */9),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";var r=e(/*! ./_string-at */27)(!0);n.exports=function(n,t,e){return t+(e?r(n,t).length:1)}},
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";var r=e(/*! ./_classof */28),o=RegExp.prototype.exec;n.exports=function(n,t){var e=n.exec;if("function"==typeof e){var i=e.call(n,t);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(n))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(n,t)}},
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_core */10),o=e(/*! ./_global */1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(n.exports=function(n,t){return i[n]||(i[n]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:e(/*! ./_library */29)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++e+r).toString(36))}},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";e(/*! ./es6.regexp.exec */30);var r=e(/*! ./_redefine */23),o=e(/*! ./_hide */12),i=e(/*! ./_fails */4),a=e(/*! ./_defined */8),c=e(/*! ./_wks */3),s=e(/*! ./_regexp-exec */11),u=c("species"),l=!i((function(){var n=/./;return n.exec=function(){var n=[];return n.groups={a:"7"},n},"7"!=="".replace(n,"$<a>")})),A=function(){var n=/(?:)/,t=n.exec;n.exec=function(){return t.apply(this,arguments)};var e="ab".split(n);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();n.exports=function(n,t,e){var p=c(n),f=!i((function(){var t={};return t[p]=function(){return 7},7!=""[n](t)})),d=f?!i((function(){var t=!1,e=/a/;return e.exec=function(){return t=!0,null},"split"===n&&(e.constructor={},e.constructor[u]=function(){return e}),e[p](""),!t})):void 0;if(!f||!d||"replace"===n&&!l||"split"===n&&!A){var h=/./[p],v=e(a,p,""[n],(function(n,t,e,r,o){return t.exec===s?f&&!o?{done:!0,value:h.call(t,e,r)}:{done:!0,value:n.call(e,t,r)}:{done:!1}})),m=v[0],g=v[1];r(String.prototype,n,m),o(RegExp.prototype,p,2==t?function(n,t){return g.call(n,this,t)}:function(n){return g.call(n,this)})}}},
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_global */1),o=e(/*! ./_hide */12),i=e(/*! ./_has */38),a=e(/*! ./_uid */21)("src"),c=e(/*! ./_function-to-string */39),s=(""+c).split("toString");e(/*! ./_core */10).inspectSource=function(n){return c.call(n)},(n.exports=function(n,t,e,c){var u="function"==typeof e;u&&(i(e,"name")||o(e,"name",t)),n[t]!==e&&(u&&(i(e,a)||o(e,a,n[t]?""+n[t]:s.join(String(t)))),n===r?n[t]=e:c?n[t]?n[t]=e:o(n,t,e):(delete n[t],o(n,t,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||c.call(this)}))},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";var r=e(/*! ./_an-object */0),o=e(/*! ./_to-object */26),i=e(/*! ./_to-length */16),a=e(/*! ./_to-integer */9),c=e(/*! ./_advance-string-index */17),s=e(/*! ./_regexp-exec-abstract */18),u=Math.max,l=Math.min,A=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g;e(/*! ./_fix-re-wks */22)("replace",2,(function(n,t,e,d){return[function(r,o){var i=n(this),a=null==r?void 0:r[t];return void 0!==a?a.call(r,i,o):e.call(String(i),r,o)},function(n,t){var o=d(e,n,this,t);if(o.done)return o.value;var A=r(n),p=String(this),f="function"==typeof t;f||(t=String(t));var v=A.global;if(v){var m=A.unicode;A.lastIndex=0}for(var g=[];;){var x=s(A,p);if(null===x)break;if(g.push(x),!v)break;""===String(x[0])&&(A.lastIndex=c(p,i(A.lastIndex),m))}for(var y,E="",b=0,C=0;C<g.length;C++){x=g[C];for(var B=String(x[0]),w=u(l(a(x.index),p.length),0),k=[],_=1;_<x.length;_++)k.push(void 0===(y=x[_])?y:String(y));var F=x.groups;if(f){var S=[B].concat(k,w,p);void 0!==F&&S.push(F);var O=String(t.apply(void 0,S))}else O=h(B,p,w,k,F,t);w>=b&&(E+=p.slice(b,w)+O,b=w+B.length)}return E+p.slice(b)}];function h(n,t,r,i,a,c){var s=r+n.length,u=i.length,l=f;return void 0!==a&&(a=o(a),l=p),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return n;case"`":return t.slice(0,r);case"'":return t.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var p=A(l/10);return 0===p?e:p<=u?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):e}c=i[l-1]}return void 0===c?"":c}))}}))},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_defined */8);n.exports=function(n){return Object(r(n))}},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_to-integer */9),o=e(/*! ./_defined */8);n.exports=function(n){return function(t,e){var i,a,c=String(o(t)),s=r(e),u=c.length;return s<0||s>=u?n?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?n?c.charAt(s):i:n?c.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_cof */19),o=e(/*! ./_wks */3)("toStringTag"),i="Arguments"==r(function(){return arguments}());n.exports=function(n){var t,e,a;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=function(n,t){try{return n[t]}catch(n){}}(t=Object(n),o))?e:i?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){n.exports=!1},
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";var r=e(/*! ./_regexp-exec */11);e(/*! ./_export */32)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";var r=e(/*! ./_an-object */0);n.exports=function(){var n=r(this),t="";return n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.unicode&&(t+="u"),n.sticky&&(t+="y"),t}},
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_global */1),o=e(/*! ./_core */10),i=e(/*! ./_hide */12),a=e(/*! ./_redefine */23),c=e(/*! ./_ctx */40),s=function(n,t,e){var u,l,A,p,f=n&s.F,d=n&s.G,h=n&s.S,v=n&s.P,m=n&s.B,g=d?r:h?r[t]||(r[t]={}):(r[t]||{}).prototype,x=d?o:o[t]||(o[t]={}),y=x.prototype||(x.prototype={});for(u in d&&(e=t),e)A=((l=!f&&g&&void 0!==g[u])?g:e)[u],p=m&&l?c(A,r):v&&"function"==typeof A?c(Function.call,A):A,g&&a(g,u,A,n&s.U),x[u]!=A&&i(x,u,p),v&&y[u]!=A&&(y[u]=A)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,n.exports=s},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_an-object */0),o=e(/*! ./_ie8-dom-define */34),i=e(/*! ./_to-primitive */36),a=Object.defineProperty;t.f=e(/*! ./_descriptors */13)?Object.defineProperty:function(n,t,e){if(r(n),t=i(t,!0),r(e),o)try{return a(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){n.exports=!e(/*! ./_descriptors */13)&&!e(/*! ./_fails */4)((function(){return 7!=Object.defineProperty(e(/*! ./_dom-create */35)("div"),"a",{get:function(){return 7}}).a}))},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_is-object */2),o=e(/*! ./_global */1).document,i=r(o)&&r(o.createElement);n.exports=function(n){return i?o.createElement(n):{}}},
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_is-object */2);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){n.exports=e(/*! ./_shared */20)("native-function-to-string",Function.toString)},
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_a-function */24);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){"use strict";var r=e(/*! ./_is-regexp */42),o=e(/*! ./_an-object */0),i=e(/*! ./_species-constructor */43),a=e(/*! ./_advance-string-index */17),c=e(/*! ./_to-length */16),s=e(/*! ./_regexp-exec-abstract */18),u=e(/*! ./_regexp-exec */11),l=e(/*! ./_fails */4),A=Math.min,p=[].push,f="length",d=!l((function(){RegExp(4294967295,"y")}));e(/*! ./_fix-re-wks */22)("split",2,(function(n,t,e,l){var h;return h="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[f]||2!="ab".split(/(?:ab)*/)[f]||4!=".".split(/(.?)(.?)/)[f]||".".split(/()()/)[f]>1||"".split(/.?/)[f]?function(n,t){var o=String(this);if(void 0===n&&0===t)return[];if(!r(n))return e.call(o,n,t);for(var i,a,c,s=[],l=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),A=0,d=void 0===t?4294967295:t>>>0,h=new RegExp(n.source,l+"g");(i=u.call(h,o))&&!((a=h.lastIndex)>A&&(s.push(o.slice(A,i.index)),i[f]>1&&i.index<o[f]&&p.apply(s,i.slice(1)),c=i[0][f],A=a,s[f]>=d));)h.lastIndex===i.index&&h.lastIndex++;return A===o[f]?!c&&h.test("")||s.push(""):s.push(o.slice(A)),s[f]>d?s.slice(0,d):s}:"0".split(void 0,0)[f]?function(n,t){return void 0===n&&0===t?[]:e.call(this,n,t)}:e,[function(e,r){var o=n(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):h.call(String(o),e,r)},function(n,t){var r=l(h,n,this,t,h!==e);if(r.done)return r.value;var u=o(n),p=String(this),f=i(u,RegExp),v=u.unicode,m=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(d?"y":"g"),g=new f(d?u:"^(?:"+u.source+")",m),x=void 0===t?4294967295:t>>>0;if(0===x)return[];if(0===p.length)return null===s(g,p)?[p]:[];for(var y=0,E=0,b=[];E<p.length;){g.lastIndex=d?E:0;var C,B=s(g,d?p:p.slice(E));if(null===B||(C=A(c(g.lastIndex+(d?0:E)),p.length))===y)E=a(p,E,v);else{if(b.push(p.slice(y,E)),b.length===x)return b;for(var w=1;w<=B.length-1;w++)if(b.push(B[w]),b.length===x)return b;E=y=C}}return b.push(p.slice(y)),b}]}))},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_is-object */2),o=e(/*! ./_cof */19),i=e(/*! ./_wks */3)("match");n.exports=function(n){var t;return r(n)&&(void 0!==(t=n[i])?!!t:"RegExp"==o(n))}},
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){var r=e(/*! ./_an-object */0),o=e(/*! ./_a-function */24),i=e(/*! ./_wks */3)("species");n.exports=function(n,t){var e,a=r(n).constructor;return void 0===a||null==(e=r(a)[i])?t:o(e)}},
/*!***************************************!*\
  !*** ./examples/index.ts + 6 modules ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./examples/index.less (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input-editor.less (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */function(n,t,e){"use strict";e.r(t);var r=e(5),o=e.n(r),i=e(14),a={insert:"head",singleton:!1},c=(o()(i.a,a),i.a.locals,e(25),e(41),{email:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/});function s(n,t){return"email"===n&&c.email.test(t)}function u(n){var t=document.createElement("span");return t.style.visibility="hidden",t.style.position="absolute",t.style.top="-999999px",t.innerHTML=n,document.body.appendChild(t),t.clientWidth}var l=e(15),A={insert:"head",singleton:!1};o()(l.a,A),l.a.locals;function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function f(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var d="input-editor",h=function(){function n(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};p(this,n),this.createToken=function(n){e._setTokens(n)},this._createTokenElement=function(n){var t=s(e._inputType,n),r="".concat(d,"-token ").concat(t?"valid":"invalid"),o=document.createElement("span");o.className=r,o.innerText=n;var i=e._createRemoveButton(o);return o.appendChild(i),o},this._createRemoveButton=function(n){var t=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=document.createElement("span");return t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.innerHTML='<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L4.2218 5.63602L5.63602 4.2218L12 10.5858L18.3639 4.2218L19.7782 5.63602L13.4142 12L19.7782 18.3639L18.3639 19.7782L12 13.4142L5.63602 19.7782L4.2218 18.3639L10.5858 12Z" />',r.className="".concat(d,"-token-btn-remove"),r.addEventListener("click",(function(){var t=e._tokenElements.indexOf(n);e._removeToken(t)})),r.append(t),r},this._setTokens=function(n){var t=Array.isArray(n)?n:[n];n&&t.length&&(t.map((function(n){var t=e._createTokenElement(n);e._container.insertBefore(t,e._input),e._tokens.push(n),e._tokenElements.push(t)})),e._input.value="")},this._handleTokensAdded=function(){var n=e._input.value.replace(/(,\s*$)|(^,*)|(\s)/g,"").split(/[\s,]/g).filter((function(n){return n}));n.length&&e._setTokens(n)},this._removeToken=function(n){var t=e._container.children[n];t&&(e._container.removeChild(t),e._tokens.splice(n,1),e._tokenElements.splice(n,1))},this._handleInputFocus=function(){e._input.focus()},this._handleKeyDown=function(n){var t=n.key;"Enter"===t&&e._handleTokensAdded(),"Backspace"===t&&0===e._input.selectionEnd&&e._removeToken(e._tokens.length-1)},this._handleInput=function(){/[\s,]/.test(e._input.value)&&e._handleTokensAdded()},this._handleBlur=function(){e._handleTokensAdded()};var o=r.source,i=void 0===o?[]:o,a=r.inputType,c=void 0===a?"email":a,l=r.placeholder,A=void 0===l?"Enter value...":l;this._inputType=c,this._tokens=[],this._tokenElements=[],this._input=document.createElement("input"),this._input.className="".concat(d,"-input"),this._input.placeholder=A,this._input.addEventListener("input",this._handleInput),this._input.addEventListener("keydown",this._handleKeyDown),this._input.addEventListener("blur",this._handleBlur),this._input.style.minWidth="".concat(u(A),"px"),this._container=document.createElement("div"),this._container.className="".concat(d),this._container.appendChild(this._input),this._container.addEventListener("click",this._handleInputFocus),this._setTokens(i),t.appendChild(this._container)}var t,e,r;return t=n,(e=[{key:"getTokenList",get:function(){return this._tokens}},{key:"getValidTokenList",get:function(){var n=this;return this._tokens.filter((function(t){return s(n._inputType,t)}))}}])&&f(t.prototype,e),r&&f(t,r),n}(),v=(new Date).getTime(),m=new h(document.querySelector("#input-editor-container"),{inputType:"email",placeholder:"Add email accounts..."});document.querySelector(".btn.add-email").addEventListener("click",(function(){m.createToken(["".concat(v,"@test.com")])})),document.querySelector(".btn.get-email-count").addEventListener("click",(function(){var n=m.getValidTokenList;console.log(n),alert("Number of valid emails: ".concat(n.length))}))}]);
//# sourceMappingURL=app.af1d464f35299124b038.bundle.js.map?_=1608012626864