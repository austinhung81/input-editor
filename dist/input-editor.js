!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.InputEditor=n():e.InputEditor=n()}(window,(function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){"use strict";var i=t(2),r=t.n(i)()((function(e){return e[1]}));r.push([e.i,".input-editor {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  align-items: baseline;\n  background: #FFFFFF;\n  border: 1px solid #C3C2CF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 8px;\n  cursor: text;\n}\n.input-editor-token {\n  font-size: 14px;\n  line-height: 20px;\n  text-align: right;\n  color: #050038;\n  margin-right: 8px;\n  margin-bottom: 4px;\n}\n.input-editor-token.valid {\n  background: rgba(102, 153, 255, 0.2);\n  border-radius: 100px;\n  padding: 2px 8px;\n}\n.input-editor-token.invalid {\n  border-bottom: 1px dashed #D92929;\n  padding: 2px 2px 1px 2px;\n}\n.input-editor-token-btn-remove {\n  display: inline-block;\n  vertical-align: top;\n  width: 12px;\n  height: 12px;\n  margin-top: 4px;\n  margin-left: 8px;\n  cursor: pointer;\n}\n.input-editor-token-btn-remove svg {\n  fill: currentColor;\n  width: 12px;\n  vertical-align: top;\n}\n.input-editor-input {\n  font-size: 14px;\n  line-height: 20px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border: 0;\n  box-shadow: none;\n  outline: none;\n  color: #050038;\n}\n.input-editor-input::-moz-placeholder {\n  color: #C3C2CF;\n}\n.input-editor-input:-ms-input-placeholder {\n  color: #C3C2CF;\n}\n.input-editor-input::placeholder {\n  color: #C3C2CF;\n}\n",""]),n.a=r},function(e,n,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function u(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},i=[],r=0;r<e.length;r++){var o=e[r],c=n.base?o[0]+n.base:o[0],s=t[c]||0,l="".concat(c," ").concat(s);t[c]=s+1;var d=u(l),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:l,updater:m(p,n),references:1}),i.push(l)}return i}function s(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var o=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function f(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,v=0;function m(e,n){var t,i,r;if(n.singleton){var o=v++;t=h||(h=s(n)),i=p.bind(null,t,o,!1),r=p.bind(null,t,o,!0)}else t=s(n),i=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=u(t[i]);a[r].references--}for(var o=c(e,n),s=0;s<t.length;s++){var l=u(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=o}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);i&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";t.r(n);var i={email:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/};function r(e,n){return"email"===e&&i.email.test(n)}function o(e){var n=document.createElement("span");return n.style.visibility="hidden",n.style.position="absolute",n.style.top="-999999px",n.innerHTML=e,document.body.appendChild(n),n.clientWidth}var a=t(1),u=t.n(a),c=t(0),s={insert:"head",singleton:!1};u()(c.a,s),c.a.locals;function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p="input-editor",f=function(){function e(n){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(this,e),this.createToken=function(e){t._setTokens(e)},this._createTokenElement=function(e){var n=r(t._inputType,e),i="".concat(p,"-token ").concat(n?"valid":"invalid"),o=document.createElement("span");o.className=i,o.innerText=e;var a=t._createRemoveButton(o);return o.appendChild(a),o},this._createRemoveButton=function(e){var n=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=document.createElement("span");return n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("fill","none"),n.innerHTML='<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L4.2218 5.63602L5.63602 4.2218L12 10.5858L18.3639 4.2218L19.7782 5.63602L13.4142 12L19.7782 18.3639L18.3639 19.7782L12 13.4142L5.63602 19.7782L4.2218 18.3639L10.5858 12Z" />',i.className="".concat(p,"-token-btn-remove"),i.addEventListener("click",(function(){var n=t._tokenElements.indexOf(e);t._removeTokenByIndex(n)})),i.append(n),i},this._setTokens=function(e){var n=Array.isArray(e)?e:[e];e&&n.length&&(n.map((function(e){var n=t._createTokenElement(e);t._container.insertBefore(n,t._input),t._tokens.push(e),t._tokenElements.push(n)})),t._input.value="")},this._handleTokensAdded=function(){var e=t._input.value.replace(/(,\s*$)|(^,*)|(\s)/g,"").split(/[\s,]/g).filter((function(e){return e}));e.length&&t._setTokens(e)},this._removeTokenByIndex=function(e){var n=t._container.children[e];t._container.removeChild(n),t._tokens.splice(e,1),t._tokenElements.splice(e,1)},this._handleKeyDown=function(e){var n=e.key;"Enter"===n&&t._handleTokensAdded(),"Backspace"===n&&0===t._input.selectionEnd&&t._removeTokenByIndex(t._tokens.length-1)},this._handleInput=function(){/[\s,]/.test(t._input.value)&&t._handleTokensAdded()},this._handleBlur=function(){t._handleTokensAdded()},this._handleContainerClick=function(){t._input.focus()};var a=i.source,u=void 0===a?[]:a,c=i.inputType,s=void 0===c?"email":c,d=i.placeholder,f=void 0===d?"Enter value...":d;this._input=document.createElement("input"),this._input.className="".concat(p,"-input"),this._input.placeholder=f,this._input.addEventListener("input",this._handleInput),this._input.addEventListener("keydown",this._handleKeyDown),this._input.addEventListener("blur",this._handleBlur),this._input.style.minWidth="".concat(o(f),"px"),this._container=document.createElement("div"),this._container.className="".concat(p),this._container.appendChild(this._input),this._container.addEventListener("click",this._handleContainerClick),this._inputType=s,this._tokens=[],this._tokenElements=[],this._setTokens(u),n.appendChild(this._container)}var n,t,i;return n=e,(t=[{key:"getTokenList",get:function(){return this._tokens}},{key:"getValidTokenList",get:function(){var e=this;return this._tokens.filter((function(n){return r(e._inputType,n)}))}}])&&d(n.prototype,t),i&&d(n,i),e}();n.default=f}]).default}));